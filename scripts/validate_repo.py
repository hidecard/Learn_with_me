#!/usr/bin/env python3
"""Lightweight structural and SEO checks for Learn_with_me (standard library only)."""
from __future__ import annotations

import collections
import html.parser
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXPECTED_STATIC_LESSONS = 2460
EXPECTED_RUNTIME_LESSONS = 2702
EXPECTED_TOPICS = 35
PUBLIC_ORIGIN = "https://learnwithme.arkaryan.net/"


class SiteParser(html.parser.HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.lesson_ids: list[str] = []
        self.lesson_groups: list[str] = []
        self.tabs: list[str] = []
        self.nav_groups: list[str] = []
        self.meta: dict[str, str] = {}
        self.links: list[dict[str, str | None]] = []
        self.stats_text = ""
        self._in_stats = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        a = dict(attrs)
        classes = set((a.get("class") or "").split())
        if tag == "article" and "page" in classes:
            self.lesson_ids.append(a.get("id") or "")
            if a.get("data-group"):
                self.lesson_groups.append(a["data-group"] or "")
        if tag == "button" and "tab-btn" in classes and a.get("data-tab"):
            self.tabs.append(a["data-tab"] or "")
        if a.get("data-nav-group") is not None:
            self.nav_groups.append(a["data-nav-group"] or "")
        if tag == "meta":
            key = a.get("name") or a.get("property")
            if key and a.get("content"):
                self.meta[key] = a["content"] or ""
        if tag == "link":
            self.links.append(a)
        if "data-course-stats" in a:
            self._in_stats = True

    def handle_endtag(self, tag: str) -> None:
        if tag == "span" and self._in_stats:
            self._in_stats = False

    def handle_data(self, data: str) -> None:
        if self._in_stats:
            self.stats_text += data


def fail(message: str) -> None:
    print(f"FAIL: {message}")
    raise SystemExit(1)


def main() -> None:
    index_path = ROOT / "index.html"
    paths_path = ROOT / "learning-paths.js"
    required = (index_path, paths_path, ROOT / "README.md", ROOT / "CONTRIBUTING.md",
                ROOT / "favicon.png", ROOT / "og-preview.jpg", ROOT / "robots.txt",
                ROOT / "sitemap.xml")
    for path in required:
        if not path.is_file():
            fail(f"required file missing: {path.relative_to(ROOT)}")

    parser = SiteParser()
    index_text = index_path.read_text(encoding="utf-8")
    parser.feed(index_text)
    count = len(parser.lesson_ids)
    if count != EXPECTED_STATIC_LESSONS:
        fail(f"static HTML lesson count is {count}; expected {EXPECTED_STATIC_LESSONS}")
    if any(not lesson_id for lesson_id in parser.lesson_ids):
        fail("every lesson article must have an id")
    duplicates = sorted(k for k, v in collections.Counter(parser.lesson_ids).items() if v > 1)
    if duplicates:
        fail("duplicate lesson IDs: " + ", ".join(duplicates[:10]))
    print(f"PASS: {count} lesson articles; IDs present and unique")

    lesson_topics = set(parser.lesson_groups)
    tabs = set(parser.tabs)
    nav = set(parser.nav_groups)
    if len(tabs) != len(parser.tabs):
        fail("duplicate data-tab values")
    if len(nav) != len(parser.nav_groups):
        fail("duplicate data-nav-group values")
    if len(tabs) != EXPECTED_TOPICS or len(nav) != EXPECTED_TOPICS:
        fail(f"expected {EXPECTED_TOPICS} topics; found {len(tabs)} tabs and {len(nav)} nav groups")
    if lesson_topics != tabs or lesson_topics != nav:
        fail("lesson groups, topic tabs, and nav groups do not match; "
             f"groups-only={sorted(lesson_topics - tabs - nav)}, "
             f"tabs-only={sorted(tabs - lesson_topics)}, nav-only={sorted(nav - lesson_topics)}")
    print(f"PASS: {len(lesson_topics)} lesson groups match topic tabs and navigation groups")

    footer_stats = parser.stats_text.replace(",", "")
    if str(EXPECTED_RUNTIME_LESSONS) not in footer_stats or str(EXPECTED_TOPICS) not in footer_stats:
        fail(f"footer fallback does not show {EXPECTED_RUNTIME_LESSONS}/{EXPECTED_TOPICS}: {parser.stats_text!r}")
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    if "2,702" not in readme or "35 topics" not in readme:
        fail("README lesson/topic counts do not match current runtime counts")
    print(f"PASS: {count} static lessons; footer and README show {EXPECTED_RUNTIME_LESSONS} runtime lessons / {EXPECTED_TOPICS} topics")

    path_source = paths_path.read_text(encoding="utf-8")
    targets = re.findall(r"\[['\"]([^'\"]+)['\"]\s*,", path_source)
    id_set = set(parser.lesson_ids)
    unresolved = sorted(set(targets) - id_set)
    if not targets:
        fail("no learning-path targets found")
    if unresolved:
        fail("learning-path targets do not resolve to lesson IDs: " + ", ".join(unresolved))
    print(f"PASS: {len(targets)} learning-path targets resolve to lesson IDs")

    canonical = next((a.get("href") for a in parser.links if "canonical" in (a.get("rel") or "").split()), None)
    if canonical != PUBLIC_ORIGIN:
        fail(f"canonical URL must be {PUBLIC_ORIGIN}, got {canonical!r}")
    expected_meta = {
        "description": None,
        "og:type": "website",
        "og:url": PUBLIC_ORIGIN,
        "og:title": None,
        "og:description": None,
        "og:site_name": "Learn_with_me",
        "og:image": PUBLIC_ORIGIN + "og-preview.jpg",
        "twitter:card": "summary_large_image",
        "twitter:title": None,
        "twitter:description": None,
        "twitter:image": PUBLIC_ORIGIN + "og-preview.jpg",
    }
    for key, expected in expected_meta.items():
        value = parser.meta.get(key)
        if not value or (expected is not None and value != expected):
            fail(f"missing or incorrect metadata {key}: {value!r}")
    if not any("icon" in (a.get("rel") or "").split() and a.get("href") == "./favicon.png" for a in parser.links):
        fail("favicon.png link is missing")
    if "shareButton.className = 'lesson-share-link'" not in (ROOT / "script.js").read_text(encoding="utf-8"):
        fail("lesson share-link control is missing")
    print("PASS: canonical, SEO/social metadata, favicon, and lesson share control")

    robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
    sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
    if "Sitemap: " + PUBLIC_ORIGIN + "sitemap.xml" not in robots:
        fail("robots.txt sitemap URL is missing or incorrect")
    if "<loc>" + PUBLIC_ORIGIN + "</loc>" not in sitemap:
        fail("sitemap.xml does not list the canonical homepage")
    print("PASS: robots.txt and sitemap.xml use the canonical public URL")

    node = shutil.which("node")
    if not node:
        print("SKIP: Node.js unavailable; JavaScript syntax checks not run")
    else:
        js_files = ["script.js", "extra-lessons.js", "learning-paths.js"]
        for filename in js_files:
            result = subprocess.run([node, "--check", str(ROOT / filename)],
                                    text=True, capture_output=True)
            if result.returncode:
                fail(f"Node syntax check failed for {filename}:\n{result.stderr.strip()}")
        print("PASS: Node syntax check passed for " + ", ".join(js_files))
    print("All available validation checks passed.")


if __name__ == "__main__":
    main()
