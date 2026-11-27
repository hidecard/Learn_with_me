      (function () {
        var pages = Array.prototype.slice.call(document.querySelectorAll('.page'));
        var sidebar = document.getElementById('sidebar');
        var groups = { html: document.querySelector('[data-nav-group="html"]'), css: document.querySelector('[data-nav-group="css"]'), tailwind: document.querySelector('[data-nav-group="tailwind"]'), js: document.querySelector('[data-nav-group="js"]'), git: document.querySelector('[data-nav-group="git"]'), php: document.querySelector('[data-nav-group="php"]'), mysql: document.querySelector('[data-nav-group="mysql"]'), laravel: document.querySelector('[data-nav-group="laravel"]'), api: document.querySelector('[data-nav-group="api"]'), react: document.querySelector('[data-nav-group="react"]'), dart: document.querySelector('[data-nav-group="dart"]'), flutter: document.querySelector('[data-nav-group="flutter"]'), devtools: document.querySelector('[data-nav-group="devtools"]'), security: document.querySelector('[data-nav-group="security"]'), deploy: document.querySelector('[data-nav-group="deploy"]'), ci: document.querySelector('[data-nav-group="ci"]'), quality: document.querySelector('[data-nav-group="quality"]'), python: document.querySelector('[data-nav-group="python"]'), typescript: document.querySelector('[data-nav-group="typescript"]'), java: document.querySelector('[data-nav-group="java"]'), c: document.querySelector('[data-nav-group="c"]'), go: document.querySelector('[data-nav-group="go"]'), rust: document.querySelector('[data-nav-group="rust"]'), csharp: document.querySelector('[data-nav-group="csharp"]'), dsa: document.querySelector('[data-nav-group="dsa"]'), docker: document.querySelector('[data-nav-group="docker"]'), nodejs: document.querySelector('[data-nav-group="nodejs"]'), express: document.querySelector('[data-nav-group="express"]'), wordpress: document.querySelector('[data-nav-group="wordpress"]'), cloud: document.querySelector('[data-nav-group="cloud"]'), django: document.querySelector('[data-nav-group="django"]'), shell: document.querySelector('[data-nav-group="shell"]'), aws: document.querySelector('[data-nav-group="aws"]'), seo: document.querySelector('[data-nav-group="seo"]'), cybersecurity: document.querySelector('[data-nav-group="cybersecurity"]') };
        var navLinks = {};
        var visited = {};
        var activeGroup = 'html';
        var searchInput = document.getElementById('searchInput');
        var navEmpty = document.getElementById('navEmpty');

        function applySidebarSearch() {
          var q = searchInput.value.trim().toLowerCase();
          var any = false;
          Object.keys(navLinks).forEach(function (id) {
            var page = document.getElementById(id);
            var matches = page.dataset.group === activeGroup && (!q || navLinks[id].dataset.search.indexOf(q) !== -1);
            navLinks[id].style.display = matches ? '' : 'none';
            if (matches) any = true;
          });
          navEmpty.style.display = any ? 'none' : 'block';
        }

        function showSidebarGroup(group) {
          activeGroup = group;
          Object.keys(groups).forEach(function (key) {
            var visible = key === group;
            groups[key].hidden = !visible;
            var heading = groups[key].previousElementSibling;
            if (heading && heading.tagName === 'H2') heading.hidden = !visible;
          });
          applySidebarSearch();
        }

        // Build sidebar links + pager for each page
        pages.forEach(function (page, i) {
          var btn = document.createElement('button');
          btn.className = 'nav-link';
          btn.dataset.pageId = page.id;
          btn.dataset.search = (page.dataset.title + ' ' + page.dataset.group + ' ' + page.id.replace('page-', '').replace(/-/g, ' ')).toLowerCase();
          btn.innerHTML = '<span></span><svg class="done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
          btn.querySelector('span').textContent = page.dataset.title;
          btn.addEventListener('click', function () { showPage(page.id); closeNav(); });
          groups[page.dataset.group].appendChild(btn);
          navLinks[page.id] = btn;

          var pager = document.createElement('div');
          pager.className = 'pager';
          var prev = pages[i - 1], next = pages[i + 1];
          pager.innerHTML =
            '<button class="prev"' + (prev ? '' : ' disabled') + '><span class="dir">← အရင်သင်ခန်းစာ</span><span class="ttl"></span></button>' +
            '<button class="next"' + (next ? '' : ' disabled') + '><span class="dir">နောက်သင်ခန်းစာ →</span><span class="ttl"></span></button>';
          if (prev) {
            pager.querySelector('.prev .ttl').textContent = prev.dataset.title;
            pager.querySelector('.prev').addEventListener('click', function () { showPage(prev.id); });
          }
          if (next) {
            pager.querySelector('.next .ttl').textContent = next.dataset.title;
            pager.querySelector('.next').addEventListener('click', function () { showPage(next.id); });
          }
          page.appendChild(pager);

          var bar = page.querySelector('.progress-line > div');
          if (bar) bar.style.width = Math.round(((i + 1) / pages.length) * 100) + '%';
        });

        function autoHeight(iframe) {
          try {
            var doc = iframe.contentDocument;
            if (doc && doc.body) {
              iframe.style.height = Math.max(60, doc.documentElement.scrollHeight) + 'px';
            }
          } catch (e) { /* sandboxed srcdoc: fall back */ }
        }

        // JavaScript lessons: mirror console.log / errors into a visible panel inside
        // the preview, so learners see output without opening DevTools.
        var JS_CONSOLE_PRELUDE =
          '<script>(function(){' +
          'var box=null;' +
          'function fmt(a){if(typeof a==="string")return a;if(a===null)return "null";if(a===undefined)return "undefined";try{return JSON.stringify(a);}catch(e){return String(a);}}' +
          'function line(txt,color){if(!box){box=document.createElement("div");box.style.cssText="margin-top:12px;border:1px solid #d8e0db;border-radius:8px;overflow:hidden";var h=document.createElement("div");h.textContent="CONSOLE OUTPUT";h.style.cssText="background:#1e2b26;color:#9db0a6;font:bold 10px monospace;letter-spacing:.12em;padding:4px 10px";var pre=document.createElement("pre");pre.id="js-console-body";pre.style.cssText="margin:0;background:#111827;color:#d1fae5;padding:8px 10px;font:12.5px/1.65 monospace;white-space:pre-wrap;word-break:break-word";box.appendChild(h);box.appendChild(pre);document.body.appendChild(box);}var pre=document.getElementById("js-console-body");var d=document.createElement("div");d.textContent=txt;if(color)d.style.color=color;pre.appendChild(d);}' +
          '["log","info"].forEach(function(k){console[k]=function(){line(Array.prototype.map.call(arguments,fmt).join(" "));};});' +
          'console.warn=function(){line(Array.prototype.map.call(arguments,fmt).join(" "),"#fbbf24");};' +
          'console.error=function(){line(Array.prototype.map.call(arguments,fmt).join(" "),"#f87171");};' +
          'window.addEventListener("error",function(e){line("Error: "+e.message,"#f87171");});' +
          '})();<\/script>';

        // Node.js / Express lessons: the preview is a browser, so Node built-ins
        // (require, process, __dirname, ...) do not exist there. This stub
        // prelude defines them with small mocks that accept any call and return
        // plausible values, so the lesson's own console.log output still shows.
        // It is injected only for nodejs/express lessons, after the console
        // prelude above, so console.table/debug/dir/count use the panel too.
        var NODE_STUB_PRELUDE = '<script>' + "\nvar __dirname = '/home/aung/my-project';\nvar __filename = '/home/aung/my-project/app.js';\nvar process = { version: 'v20.11.0', platform: 'win32', argv: ['node', 'app.js'], env: { PORT: '3000', NODE_ENV: 'development', HOME: '/home/aung' }, cwd: function(){ return '/home/aung/my-project'; }, exit: function(){}, on: function(){}, nextTick: function(fn){ fn(); } };\nvar Buffer = { from: function(s){ return { toString: function(){ return String(s); } }; }, alloc: function(n){ return { toString: function(){ return ''; } }; }, isBuffer: function(){ return false; } };\nfunction __mockFn(name){\n  function fn(){ return __mockFn(name); }\n  fn.then = function(cb){ if (typeof cb === 'function') { try { cb({}); } catch(e){} } return fn; };\n  fn.catch = function(){ return fn; };\n  fn.toString = function(){ return '[mock ' + name + ']'; };\n  return fn;\n}\nfunction __makeMock(name){\n  var fn = function(){ return __makeMock(name); };\n  fn.toString = function(){ return '[mock ' + name + ']'; };\n  fn.then = function(cb){ return fn; };\n  fn.catch = function(){ return fn; };\n  return new Proxy(fn, {\n    get: function(t, prop){\n      if (prop === Symbol.toPrimitive) return function(){ return '[mock ' + name + ']'; };\n      if (prop === 'toJSON') return function(){ return '[mock ' + name + ']'; };\n      if (prop === 'then') return undefined;\n      if (prop === 'length') return 0;\n      if (prop === 'name') return name;\n      return __makeMock(name + '.' + String(prop));\n    },\n    apply: function(t, th, args){ return __makeMock(name + '()'); }\n  });\n}\nfunction __expressApp(){\n  var app = function(req, res, next){ if (typeof next === 'function') next(); };\n  app.route = function(){ var r = {}; ['get','post','put','delete','patch','all'].forEach(function(m){ r[m] = function(){ return r; }; }); return r; };\n  ['get','post','put','delete','patch','all','use','set','engine','listen'].forEach(function(m){\n    app[m] = function(a, b){ if (m === 'listen' && typeof b === 'function') b(); if (m === 'listen' && typeof a === 'function') a(); return app; };\n  });\n  app.Router = function(){ return __expressApp(); };\n  return app;\n}\nfunction __express(){\n  var app = __expressApp();\n  return app;\n}\n__express.json = function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n__express.urlencoded = function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n__express.static = function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n__express.Router = function(){ return __expressApp(); };\nfunction require(name){\n  if (name === 'express') return __express;\n  if (name === 'path') return { join: function(){ return Array.prototype.join.call(arguments, '/').replace(/\\/+/g, '/'); }, extname: function(p){ var i = String(p).lastIndexOf('.'); return i >= 0 ? String(p).slice(i) : ''; }, basename: function(p){ return String(p).split('/').pop(); }, dirname: function(p){ var parts = String(p).split('/'); parts.pop(); return parts.join('/') || '.'; }, resolve: function(){ return '/home/aung/my-project/' + Array.prototype.join.call(arguments, '/'); }, sep: '/' };\n  if (name === 'fs') return { readFileSync: function(p){ return String(p).indexOf('.json') >= 0 ? '[{\"id\": 1, \"title\": \"Sample todo\", \"completed\": false}]' : 'file content'; }, writeFileSync: function(){}, appendFileSync: function(){}, existsSync: function(){ return true; }, readdirSync: function(){ return [{ name: 'index.html', isDirectory: function(){ return false; }, isFile: function(){ return true; } }]; }, createReadStream: function(){ return __makeMock('fs.ReadStream'); }, createWriteStream: function(){ return __makeMock('fs.WriteStream'); }, statSync: function(){ return { isFile: function(){ return true; }, size: 123 }; },\n    readFile: function(p, enc, cb){ if (typeof enc === 'function') cb = enc; if (typeof cb === 'function') cb(null, String(p).indexOf('.json') >= 0 ? '[{\"id\": 1, \"title\": \"Sample todo\", \"completed\": false}]' : 'file content'); },\n    writeFile: function(p, data, cb){ if (typeof cb === 'function') cb(null); },\n    appendFile: function(p, data, cb){ if (typeof cb === 'function') cb(null); },\n    mkdir: function(p, o, cb){ if (typeof o === 'function') cb = o; if (typeof cb === 'function') cb(null); },\n    readdir: function(p, o, cb){ if (typeof o === 'function') cb = o; if (typeof cb === 'function') cb(null, [{ name: 'index.html', isDirectory: function(){ return false; }, isFile: function(){ return true; } }, { name: 'style.css', isDirectory: function(){ return false; }, isFile: function(){ return true; } }, { name: 'app.js', isDirectory: function(){ return false; }, isFile: function(){ return true; } }]); },\n    rename: function(a, b, cb){ if (typeof cb === 'function') cb(null); },\n    unlink: function(p, cb){ if (typeof cb === 'function') cb(null); },\n    stat: function(p, cb){ if (typeof cb === 'function') cb(null, { isFile: function(){ return true; }, size: 123 }); },\n    copyFile: function(a, b, cb){ if (typeof cb === 'function') cb(null); },\n    promises: { readFile: function(){ return Promise.resolve('file content'); }, writeFile: function(){ return Promise.resolve(); }, readdir: function(){ return Promise.resolve(['index.html','style.css','app.js']); } } };\n  if (name === 'os') return { platform: function(){ return 'win32'; }, homedir: function(){ return '/home/aung'; }, totalmem: function(){ return 8589934592; }, freemem: function(){ return 4294967296; }, cpus: function(){ return [{model:'Intel'}]; }, hostname: function(){ return 'aung-pc'; }, type: function(){ return 'Windows_NT'; }, release: function(){ return '10.0.0'; } };\n  if (name === 'http' || name === 'https') return { createServer: function(h){ return { listen: function(p, cb){ if (typeof cb === 'function') cb(); if (typeof p === 'function') p(); }, on: function(){ return this; } }; }, get: function(u, cb){ if (typeof cb === 'function') cb({ statusCode: 200, on: function(){} }); }, request: function(){ return __makeMock('http.request'); } };\n  if (name === 'events') { function EE(){ this._h = {}; this.on = function(ev, fn){ (this._h[ev] = this._h[ev] || []).push(fn); return this; }; this.once = function(ev, fn){ return this.on(ev, fn); }; this.emit = function(ev){ var a = Array.prototype.slice.call(arguments, 1); (this._h[ev] || []).forEach(function(fn){ fn.apply(null, a); }); return true; }; this.removeListener = function(ev, fn){ this._h[ev] = (this._h[ev] || []).filter(function(f){ return f !== fn; }); return this; }; this.off = this.removeListener; this.listenerCount = function(ev){ return (this._h[ev] || []).length; }; this.listeners = function(ev){ return (this._h[ev] || []).slice(); }; this.eventNames = function(){ return Object.keys(this._h); }; } EE.listenerCount = function(em, ev){ return em && em.listenerCount ? em.listenerCount(ev) : 0; }; return { EventEmitter: EE }; }\n  if (name === 'util') return { promisify: function(fn){ return function(){ return Promise.resolve(); }; }, format: function(){ return Array.prototype.join.call(arguments, ' '); }, inspect: function(v){ return String(v); } };\n  if (name === 'stream') { function Readable(){ this.on = function(){ return this; }; this.pipe = function(d){ return d; }; } Readable.from = function(arr){ var r = new Readable(); r._data = arr; return r; }; function Transform(opts){ this._buf = ''; this.write = function(chunk){ this._buf += String(chunk); if (opts && opts.transform) opts.transform.call(this, chunk, 'utf8', function(){}); return true; }; this.end = function(chunk){ if (chunk) this.write(chunk); }; this.on = function(ev, fn){ if (ev === 'data' && fn) fn(this._buf); return this; }; this.pipe = function(d){ if (d && d.write) d.write(this._buf); return d; }; } function Writable(){ this.write = function(){ return true; }; this.end = function(){}; this.on = function(){ return this; }; } return { Readable: Readable, Writable: Writable, PassThrough: Transform, Transform: Transform, pipeline: function(a, b, cb){ if (typeof cb === 'function') cb(null); } }; }\n  if (name === 'zlib') return { gzipSync: function(){ return 'gzipped'; }, gunzipSync: function(){ return 'unzipped'; }, createGzip: function(){ return { pipe: function(d){ return d; }, on: function(){ return this; } }; }, createGunzip: function(){ return { pipe: function(d){ return d; }, on: function(){ return this; } }; } };\n  if (name === 'assert' || name === 'node:assert') return { strictEqual: function(){}, equal: function(){}, ok: function(){}, deepStrictEqual: function(){}, throws: function(){} };\n  if (name === 'dotenv') return { config: function(){ return { parsed: {} }; } };\n  if (name === 'bcrypt' || name === 'bcryptjs') return { hash: function(){ return Promise.resolve('hashed-password'); }, compare: function(){ return Promise.resolve(true); }, hashSync: function(){ return 'hashed-password'; }, compareSync: function(){ return true; } };\n  if (name === 'jsonwebtoken') return { sign: function(){ return 'sample-jwt-token'; }, verify: function(){ return { id: 1, name: 'Aung Aung' }; }, decode: function(){ return { id: 1, name: 'Aung Aung', iat: 1700000000 }; } };\n  if (name === 'mongoose') return { connect: function(){ return Promise.resolve(); }, Schema: function(def){ this.paths = def || {}; }, model: function(){ return __makeMock('mongoose.Model'); } };\n  if (name === 'multer') { var m = function(opts){ function up(req, res, next){ if (typeof next === 'function') next(); } up.single = function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; }; up.array = up.single; up.fields = up.single; up.any = up.single; up.none = up.single; return up; }; m.diskStorage = function(){ return {}; }; m.memoryStorage = function(){ return {}; }; return m; }\n  if (name === 'cors') return function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n  if (name === 'helmet') return function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n  if (name === 'morgan') return function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n  if (name === 'cookie-parser') return function(){ return function(req, res, next){ if (typeof next === 'function') next(); }; };\n  if (name === 'supertest') return function(app){ return { get: function(){ return Promise.resolve({ status: 200, body: {} }); }, post: function(){ return Promise.resolve({ status: 201, body: {} }); } }; };\n  if (name === 'node:test') return { test: function(n, fn){ if (typeof fn === 'function') fn(); else if (typeof n === 'function') n(); }, describe: function(n, fn){ if (typeof fn === 'function') fn(); }, it: function(n, fn){ if (typeof fn === 'function') fn(); } };\n  return __makeMock('require:' + name);\n}\nvar module = { exports: {} };\nvar exports = module.exports;\n\nconsole.table=function(d){try{console.log(JSON.stringify(d));}catch(e){console.log(String(d));}};\nconsole.debug=console.log;\nconsole.dir=function(d){try{console.log(JSON.stringify(d));}catch(e){console.log(String(d));}};\nconsole.count=function(l){console.log((l||'default')+': 1');};\nconsole.trace=function(){console.log(Array.prototype.join.call(arguments,' '));};\nwindow.test=function(n,fn){if(typeof fn==='function'){try{fn();console.log('PASS '+n);}catch(e){console.log('FAIL '+n+': '+e.message);}}else if(typeof n==='function'){n();}};\nwindow.describe=function(n,fn){if(typeof fn==='function')fn();};\nwindow.it=function(n,fn){if(typeof fn==='function'){try{fn();console.log('PASS '+n);}catch(e){console.log('FAIL '+n+': '+e.message);}}};\nwindow.beforeEach=function(fn){if(typeof fn==='function')fn();};\nwindow.afterEach=function(fn){if(typeof fn==='function')fn();};\nwindow.jest={fn:function(impl){function f(){return impl?impl.apply(null,arguments):undefined;}f.mockResolvedValue=function(v){return function(){return Promise.resolve(v);};};f.mockRejectedValue=function(e){return function(){return Promise.reject(e);};};f.mockReturnValue=function(v){return function(){return v;};};f.mockImplementation=function(i2){return function(){return i2.apply(null,arguments);};};return f;}};\nwindow.expect=function(v){return{toBe:function(e){if(v!==e)throw new Error('expected '+e);},toEqual:function(e){if(JSON.stringify(v)!==JSON.stringify(e))throw new Error('not equal');},toBeTruthy:function(){if(!v)throw new Error('not truthy');},toHaveLength:function(n){if(!v||v.length!==n)throw new Error('expected length '+n);},toContain:function(e){if(!v||(typeof v.indexOf==='function'?v.indexOf(e)<0:true))throw new Error('does not contain');}};};\n" + '<\/script>';

        // DSA / Node.js / Express lessons: real JavaScript code — run it in the
        // preview inside a <script> tag (lesson code is plain JS, not HTML).
        function jsRunDoc(code, withNodeStub) {
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;margin:10px">' +
            JS_CONSOLE_PRELUDE +
            (withNodeStub ? NODE_STUB_PRELUDE : '') +
            '<script>' + code.replace(/<\/script/gi, '<\\/script') + '<\/script>' +
            HEIGHT_PRELUDE + '</body></html>';
        }

        // First non-empty, non-comment line of a lesson's code.
        function firstCodeLine(code) {
          var lines = code.split('\n');
          for (var i = 0; i < lines.length; i++) {
            var s = lines[i].trim();
            if (!s || s.charAt(0) === '#' || s.indexOf('//') === 0) continue;
            return s;
          }
          return '';
        }

        // Docker lessons: Dockerfile / Compose YAML / JSON / config, not commands.
        function isDockerfileOrConfig(code) {
          var t = code.trim();
          if (t.charAt(0) === '{') return true;
          if (/^(FROM|RUN|COPY|WORKDIR|CMD|EXPOSE|ENTRYPOINT|ENV|ARG|LABEL|ADD)\b/m.test(code)) return true;
          if (/services:/.test(code)) return true;
          if (/^version:/m.test(code)) return true;
          if (/^- uses:/m.test(code)) return true;
          if (firstCodeLine(code) === '.env') return true;
          return false;
        }

        // Django / Cyber Security lessons run in Pyodide. Pyodide has no Django
        // and no cryptography/bcrypt packages, and the browser has no network
        // sockets, so these preludes register small fake modules that accept
        // any call and return plausible values (django.get_version() -> '5.0',
        // bcrypt hash/check round-trips, Fernet encrypt/decrypt round-trips,
        // socket.gethostbyname -> 93.184.216.34). The Django prelude also seeds
        // the names continuation examples rely on (models, path, admin, Post...).
        var DJANGO_PRELUDE = "import sys, types\nfrom pathlib import Path\n_DJ_SUBS = {}\ndef _djcls(name):\n    if name not in _DJ_SUBS:\n        _DJ_SUBS[name] = type(name, (_DJAny,), {})\n    return _DJ_SUBS[name]\nclass _DJMeta(type):\n    def __getattr__(cls, name):\n        return _djcls(name)\nclass _DJAny(metaclass=_DJMeta):\n    def __init__(self, *a, **k):\n        pass\n    def __getattr__(self, name):\n        return _DJAny()\n    def __call__(self, *a, **k):\n        return _DJAny()\n    def __repr__(self):\n        return 'Django stub'\n    def __str__(self):\n        return 'Django stub'\n    def __iter__(self):\n        return iter([])\n    def __len__(self):\n        return 0\n    def __bool__(self):\n        return True\n    def __enter__(self):\n        return self\n    def __exit__(self, *a):\n        return False\n    def __getitem__(self, key):\n        return _DJAny()\n    def __add__(self, other):\n        return []\n    def __radd__(self, other):\n        return []\nclass _DJMod(types.ModuleType):\n    def __getattr__(self, name):\n        return _djcls(name)\ndef _djmod(name, **attrs):\n    m = _DJMod(name)\n    for k, v in attrs.items():\n        setattr(m, k, v)\n    sys.modules[name] = m\n    return m\n_djmod('django', get_version=lambda: '5.0')\nfor _sub in ['django.db', 'django.db.models', 'django.http', 'django.shortcuts',\n             'django.urls', 'django.views', 'django.views.generic',\n             'django.contrib', 'django.contrib.auth', 'django.contrib.auth.models',\n             'django.contrib.auth.forms', 'django.contrib.auth.decorators',\n             'django.contrib.auth.mixins', 'django.contrib.auth.views',\n             'django.contrib.admin',\n             'django.conf', 'django.conf.urls', 'django.conf.urls.static',\n             'django.core', 'django.core.files', 'django.core.files.storage',\n             'django.core.paginator', 'django.test', 'django.utils',\n             'django.utils.text', 'django.forms', 'django.template',\n             'rest_framework', 'rest_framework.views', 'rest_framework.response',\n             'rest_framework.decorators', 'rest_framework.routers',\n             'rest_framework.permissions', 'rest_framework.pagination',\n             'rest_framework.filters', 'rest_framework.test',\n             'rest_framework.serializers', 'rest_framework.viewsets']:\n    _djmod(_sub)\n__file__ = '/home/aung/mysite/settings.py'\nBASE_DIR = Path('/home/aung/mysite')\n# Names used by continuation examples (import lives in an earlier lesson)\nmodels = _djcls('models')\npath = _djcls('path')\ninclude = _djcls('include')\nadmin = _djcls('admin')\nforms = _djcls('forms')\nPost = _djcls('Post')\nComment = _djcls('Comment')\nTag = _djcls('Tag')\nProfile = _djcls('Profile')\nUser = _djcls('User')\nGroup = _djcls('Group')\nPermission = _djcls('Permission')\nAbstractUser = _djcls('AbstractUser')\nrender = _djcls('render')\nredirect = _djcls('redirect')\nget_object_or_404 = _djcls('get_object_or_404')\nHttpResponse = _djcls('HttpResponse')\nJsonResponse = _djcls('JsonResponse')\nHttpResponseRedirect = _djcls('HttpResponseRedirect')\nreverse = _djcls('reverse')\nreverse_lazy = _djcls('reverse_lazy')\nlogin_required = _djcls('login_required')\nListView = _djcls('ListView')\nDetailView = _djcls('DetailView')\nCreateView = _djcls('CreateView')\nUpdateView = _djcls('UpdateView')\nDeleteView = _djcls('DeleteView')\nTestCase = _djcls('TestCase')\nClient = _djcls('Client')\nLoginRequiredMixin = _djcls('LoginRequiredMixin')\nviewsets = _djcls('viewsets')\napi_view = _djcls('api_view')\nserializers = _djcls('serializers')\nsettings = _djcls('settings')\nslugify = _djcls('slugify')\nPaginator = _djcls('Paginator')\ndefault_storage = _djcls('default_storage')\nstatic = _djcls('static')\ntemplate = _djcls('template')\nviews = _DJAny()\nrequest = _DJAny()\nuser = _DJAny()\nContactForm = _djcls('ContactForm')\nPostForm = _djcls('PostForm')\nPostSerializer = _djcls('PostSerializer')\nAPIView = _djcls('APIView')\nResponse = _djcls('Response')\n";
        var CYBER_PRELUDE = "import sys, types, hashlib, base64\n# --- bcrypt stub (sha256-based, keeps checkpw consistent via a store) ---\n_bcrypt = types.ModuleType('bcrypt')\n_bcrypt_store = {}\ndef _gensalt(rounds=12):\n    return b'$2b$12$' + base64.b64encode(b'salt-salt-salt-salt')[:22]\ndef _hashpw(pw, salt):\n    h = b'$2b$12$' + hashlib.sha256(salt + pw).hexdigest().encode()[:53]\n    _bcrypt_store[h] = salt\n    return h\ndef _checkpw(pw, hashed):\n    salt = _bcrypt_store.get(hashed)\n    if salt is None:\n        return False\n    return _hashpw(pw, salt) == hashed\n_bcrypt.gensalt = _gensalt\n_bcrypt.hashpw = _hashpw\n_bcrypt.checkpw = _checkpw\nsys.modules['bcrypt'] = _bcrypt\n# --- cryptography.fernet stub (xor + base64, round-trips) ---\n_crypto = types.ModuleType('cryptography')\n_fernet_mod = types.ModuleType('cryptography.fernet')\ndef _xor(data, key):\n    kb = base64.urlsafe_b64decode(key)\n    return bytes(b ^ kb[i % len(kb)] for i, b in enumerate(data))\nclass _Fernet:\n    @staticmethod\n    def generate_key():\n        return base64.urlsafe_b64encode(b'0123456789abcdef0123456789abcdef')\n    def __init__(self, key):\n        self.key = key\n    def encrypt(self, data):\n        return base64.urlsafe_b64encode(_xor(data, self.key))\n    def decrypt(self, token):\n        return _xor(base64.urlsafe_b64decode(token), self.key)\n_fernet_mod.Fernet = _Fernet\n_crypto.fernet = _fernet_mod\nsys.modules['cryptography'] = _crypto\nsys.modules['cryptography.fernet'] = _fernet_mod\n# --- socket + ssl stubs (no real network in the browser) ---\nclass _FakeSocket:\n    def __init__(self, *a, **k):\n        pass\n    def connect(self, addr):\n        pass\n    def getpeercert(self):\n        return {'subject': ((('commonName', 'example.com'),),), 'notAfter': 'Dec 31 23:59:59 2026 GMT'}\n    def __enter__(self):\n        return self\n    def __exit__(self, *a):\n        return False\n    def close(self):\n        pass\n_socket = types.ModuleType('socket')\n_socket.gethostbyname = lambda h: '93.184.216.34'\n_socket.socket = _FakeSocket\nsys.modules['socket'] = _socket\n_ssl = types.ModuleType('ssl')\nclass _Ctx:\n    def wrap_socket(self, sock, server_hostname=None):\n        return sock\n_ssl.create_default_context = lambda: _Ctx()\nsys.modules['ssl'] = _ssl\n";

        // Preview iframes are sandboxed (allow-scripts, opaque origin), so the parent
        // cannot measure their height directly — each preview posts its own height.
        var HEIGHT_PRELUDE =
          '<script>(function(){' +
          'function send(){try{var h=Math.max(document.documentElement.scrollHeight,document.body?document.body.scrollHeight:0);parent.postMessage({__pvHeight:h},"*");}catch(e){}}' +
          'window.addEventListener("load",send);' +
          'setInterval(send,400);' +
          '})();<\/script>';

        window.addEventListener('message', function (e) {
          var d = e.data;
          if (!d || typeof d.__pvHeight !== 'number') return;
          document.querySelectorAll('iframe.preview').forEach(function (f) {
            if (f.contentWindow === e.source) {
              f.style.height = Math.max(60, d.__pvHeight) + 'px';
            }
          });
        });

        // Git lessons: the preview is a simulated terminal. Each line of code is a
        // shell command, shown with a $ prompt plus sample output for common commands.
        function gitSampleOutput(cmd) {
          var m;
          if (/^git (--version|version)\b/.test(cmd)) return 'git version 2.43.0';
          if (/^git config\b.*--list/.test(cmd)) return 'user.name=Aung Aung\nuser.email=aung@example.com\ninit.defaultbranch=main';
          if (/^git config/.test(cmd)) return '';
          if (/^git init/.test(cmd)) return 'Initialized empty Git repository in /home/aung/my-project/.git/';
          if (/^git status/.test(cmd)) return 'On branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n        index.html\n        style.css\n\nnothing added to commit but untracked files present (use "git add" to track)';
          if ((m = /^git commit -m "([^"]*)"/.exec(cmd))) return '[main 3f2a1b9] ' + m[1] + '\n 1 file changed, 12 insertions(+)\n create mode 100644 index.html';
          if (/^git commit/.test(cmd)) return '[main 8c41d02] Update files\n 1 file changed, 4 insertions(+), 1 deletion(-)';
          if (/^git log --oneline/.test(cmd)) return '3f2a1b9 (HEAD -> main) Add README and project files\n8c41d02 Add homepage style\na1b2c3d First commit';
          if (/^git log/.test(cmd)) return 'commit 3f2a1b9 (HEAD -> main)\nAuthor: Aung Aung <aung@example.com>\nDate:   Mon Jan 5 10:30:00 2026 +0630\n\n    Add README and project files';
          if (/^git diff/.test(cmd)) return 'diff --git a/index.html b/index.html\n--- a/index.html\n+++ b/index.html\n@@ -1,3 +1,3 @@\n-<h1>Hello</h1>\n+<h1>Hello World</h1>';
          if (/^git add/.test(cmd)) return '';
          if ((m = /^git branch -d (\S+)/.exec(cmd))) return 'Deleted branch ' + m[1] + ' (was 8c41d02).';
          if (/^git branch -M/.test(cmd)) return '';
          if (/^git branch\s*$/.test(cmd)) return '* main';
          if (/^git branch \S+$/.test(cmd)) return '';
          if ((m = /^git (switch|checkout) -[cb] (\S+)/.exec(cmd))) return "Switched to a new branch '" + m[2] + "'";
          if ((m = /^git (switch|checkout) (\S+)/.exec(cmd))) return "Switched to branch '" + m[2] + "'";
          if ((m = /^git merge (\S+)/.exec(cmd))) return 'Updating 3f2a1b9..8c41d02\nFast-forward\n index.html | 6 ++++++\n 1 file changed, 6 insertions(+)';
          if (/^git remote -v/.test(cmd)) return 'origin  https://github.com/username/my-project.git (fetch)\norigin  https://github.com/username/my-project.git (push)';
          if (/^git remote/.test(cmd)) return '';
          if (/^git push -u/.test(cmd)) return 'Enumerating objects: 5, done.\nWriting objects: 100% (5/5), 1.21 KiB | 1.21 MiB/s, done.\nTo https://github.com/username/my-project.git\n * [new branch]      main -> main\nbranch \'main\' set up to track \'origin/main\'.';
          if (/^git push/.test(cmd)) return 'Enumerating objects: 3, done.\nWriting objects: 100% (3/3), 512 bytes | 512.00 KiB/s, done.\nTo https://github.com/username/my-project.git\n   3f2a1b9..8c41d02  main -> main';
          if (/^git pull/.test(cmd)) return 'Updating 3f2a1b9..8c41d02\nFast-forward\n style.css | 4 ++++\n 1 file changed, 4 insertions(+)';
          if (/^git fetch/.test(cmd)) return 'From https://github.com/username/my-project\n   3f2a1b9..8c41d02  main       -> origin/main';
          if ((m = /^git clone (\S+)/.exec(cmd))) { var nm = m[1].split('/').pop().replace(/\.git$/, ''); return "Cloning into '" + nm + "'...\nReceiving objects: 100% (25/25), done."; }
          if (/^git restore/.test(cmd)) return '';
          if (/^git stash pop/.test(cmd)) return 'On branch main\nChanges not staged for commit:\n        modified:   index.html\n\nDropped refs/stash@{0} (8c41d02)';
          if (/^git stash/.test(cmd)) return 'Saved working directory and index state WIP on main: 3f2a1b9 Add README';
          if ((m = /^git rm --cached (\S+)/.exec(cmd))) return "rm '" + m[1] + "'";
          if (/^ls\b/.test(cmd)) return 'index.html  style.css  script.js  README.md';
          return '';
        }

        function gitTerminalDoc(code) {
          var html = '';
          code.split('\n').forEach(function (raw) {
            var line = raw.replace(/\s+$/, '');
            if (!line.trim()) return;
            if (line.trim().charAt(0) === '#') {
              html += '<div style="color:#6e7681;font-style:italic">' + esc(line) + '</div>';
              return;
            }
            html += '<div><span style="color:#3fb950;font-weight:bold">$</span> ' + esc(line) + '</div>';
            var out = gitSampleOutput(line.trim());
            if (out) html += '<div style="color:#8b949e">' + esc(out) + '</div>';
          });
          if (!html) html = '<div style="color:#8b949e">Command တွေ ရေးပြီး Run နှိပ်ပါ</div>';
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.75 monospace;padding:12px 14px;white-space:pre-wrap;word-break:break-word">' +
            '<div style="color:#6e7681;margin-bottom:8px">TERMINAL · နမူနာ output (simulation) — တကယ့် terminal မှာ ကိုယ်တိုင် စမ်းကြည့်ပါ</div>' +
            html + HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- PHP lessons: simulated server output ----------
           PHP cannot run in a browser, so PHP examples run through a small
           interpreter for the PHP subset taught in these lessons, and the
           result is shown as the OUTPUT panel. Real PHP runs under XAMPP. */
        function PhpArr() { this.map = new Map(); this.next = 0; }
        function phpKey(k) {
          if (typeof k === 'boolean') return k ? 1 : 0;
          if (k === null || k === undefined) return '';
          if (typeof k === 'number') return Math.floor(k);
          if (typeof k === 'string' && /^-?(0|[1-9]\d*)$/.test(k)) return parseInt(k, 10);
          return k;
        }
        PhpArr.prototype.set = function (k, v) {
          k = phpKey(k);
          if (typeof k === 'number' && k >= this.next) this.next = k + 1;
          this.map.set(k, v);
        };
        PhpArr.prototype.get = function (k) { var v = this.map.get(phpKey(k)); return v === undefined ? null : v; };
        PhpArr.prototype.has = function (k) { return this.map.has(phpKey(k)); };
        PhpArr.prototype.push = function (v) { this.set(this.next, v); };
        PhpArr.prototype.entries = function () { return Array.from(this.map.entries()); };
        Object.defineProperty(PhpArr.prototype, 'size', { get: function () { return this.map.size; } });

        function fmtNum(n) {
          if (typeof n !== 'number' || !isFinite(n)) return String(n);
          if (Number.isInteger(n)) return String(n);
          return String(parseFloat(n.toFixed(10)));
        }
        function phpStr(v) {
          if (v === null || v === undefined) return '';
          if (v === false) return '';
          if (v === true) return '1';
          if (typeof v === 'number') return fmtNum(v);
          if (typeof v === 'string') return v;
          if (v instanceof PhpArr) return 'Array';
          if (v && v.__cls) return v.__cls;
          return String(v);
        }
        function phpNum(v) {
          if (typeof v === 'number') return v;
          if (v === true) return 1;
          if (v === false || v === null || v === undefined) return 0;
          if (typeof v === 'string') { var m = /^\s*-?\d+(\.\d+)?/.exec(v); return m ? parseFloat(m[0]) : 0; }
          if (v instanceof PhpArr) return v.size > 0 ? 1 : 0;
          return 0;
        }
        function phpBool(v) {
          if (v === null || v === undefined || v === false) return false;
          if (v === 0 || v === '' || v === '0') return false;
          if (v instanceof PhpArr) return v.size > 0;
          return true;
        }
        function isNumericVal(v) {
          if (typeof v === 'number') return true;
          return typeof v === 'string' && /^\s*-?\d+(\.\d+)?\s*$/.test(v);
        }
        function phpLooseEq(a, b) {
          if (a === b) return true;
          if (a === null || a === undefined || b === null || b === undefined) {
            var o = (a === null || a === undefined) ? b : a;
            return o === null || o === undefined || o === '' || o === 0 || o === false || (o instanceof PhpArr && o.size === 0);
          }
          if (typeof a === 'boolean' || typeof b === 'boolean') return phpBool(a) === phpBool(b);
          if (a instanceof PhpArr && b instanceof PhpArr) {
            if (a.size !== b.size) return false;
            var ok = true;
            a.entries().forEach(function (en) { if (!b.has(en[0]) || !phpLooseEq(en[1], b.get(en[0]))) ok = false; });
            return ok;
          }
          if (a instanceof PhpArr || b instanceof PhpArr) return false;
          if (isNumericVal(a) && isNumericVal(b)) return phpNum(a) === phpNum(b);
          return phpStr(a) === phpStr(b);
        }
        function phpStrictEq(a, b) {
          function cat(v) {
            if (v === null || v === undefined) return 'null';
            if (typeof v === 'number') return Number.isInteger(v) ? 'int' : 'float';
            if (typeof v === 'string') return 'string';
            if (typeof v === 'boolean') return 'bool';
            return 'object';
          }
          return cat(a) === cat(b) && a === b;
        }
        function phpCmpVals(a, b) {
          if (isNumericVal(a) && isNumericVal(b)) { var d = phpNum(a) - phpNum(b); return d < 0 ? -1 : d > 0 ? 1 : 0; }
          if (typeof a === 'boolean' || typeof b === 'boolean') { var x = phpBool(a) ? 1 : 0, y = phpBool(b) ? 1 : 0; return x - y; }
          var sa = phpStr(a), sb = phpStr(b);
          return sa < sb ? -1 : sa > sb ? 1 : 0;
        }

        function PhpScope(parent) { this.vars = {}; this.parent = parent || null; this.thisVal = null; }
        PhpScope.prototype.lookup = function (name) {
          var s = this;
          while (s) {
            if (Object.prototype.hasOwnProperty.call(s.vars, name)) return { found: true, v: s.vars[name] };
            s = s.parent;
          }
          return { found: false, v: null };
        };
        PhpScope.prototype.setVar = function (name, v) { this.vars[name] = v; };

        function phpTokenize(src) {
          var toks = [], i = 0, n = src.length, m;
          function push(t, v) { toks.push({ t: t, v: v }); }
          while (i < n) {
            var c = src.charAt(i), rest = src.slice(i);
            if (/\s/.test(c)) { i++; continue; }
            if (c === '/' && src.charAt(i + 1) === '/') { var e = src.indexOf('\n', i); i = e < 0 ? n : e; continue; }
            if (c === '#') { var e2 = src.indexOf('\n', i); i = e2 < 0 ? n : e2; continue; }
            if (c === '/' && src.charAt(i + 1) === '*') { var e3 = src.indexOf('*/', i + 2); i = e3 < 0 ? n : e3 + 2; continue; }
            if (c === "'") {
              var s = '', j = i + 1;
              while (j < n) {
                var ch = src.charAt(j);
                if (ch === '\\' && j + 1 < n) { var nx = src.charAt(j + 1); s += (nx === "'" || nx === '\\') ? nx : '\\' + nx; j += 2; continue; }
                if (ch === "'") { j++; break; }
                s += ch; j++;
              }
              push('str', s); i = j; continue;
            }
            if (c === '"') {
              var s2 = '', j2 = i + 1;
              while (j2 < n) {
                var ch2 = src.charAt(j2);
                if (ch2 === '\\' && j2 + 1 < n) {
                  var nx2 = src.charAt(j2 + 1);
                  s2 += nx2 === 'n' ? '\n' : nx2 === 't' ? '\t' : nx2 === 'r' ? '\r' : (nx2 === '"' || nx2 === '\\' || nx2 === '$') ? nx2 : '\\' + nx2;
                  j2 += 2; continue;
                }
                if (ch2 === '"') { j2++; break; }
                s2 += ch2; j2++;
              }
              push('dstr', s2); i = j2; continue;
            }
            if ((m = /^\$[A-Za-z_]\w*/.exec(rest))) { push('var', m[0].slice(1)); i += m[0].length; continue; }
            if ((m = /^\d+\.\d+|^\d+/.exec(rest))) { push('num', parseFloat(m[0])); i += m[0].length; continue; }
            if ((m = /^[A-Za-z_]\w*/.exec(rest))) { push('id', m[0]); i += m[0].length; continue; }
            var three = src.substr(i, 3), two = src.substr(i, 2);
            if (three === '===' || three === '!==') { push('op', three); i += 3; continue; }
            if (['==', '!=', '<=', '>=', '&&', '||', '++', '--', '+=', '-=', '*=', '/=', '.=', '=>', '->', '::', '??', '**'].indexOf(two) >= 0) { push('op', two); i += 2; continue; }
            if ('+-*/%.<>=!?:;,()[]{}'.indexOf(c) >= 0) { push('op', c); i++; continue; }
            i++;
          }
          return toks;
        }

        function phpParseProgram(toks) {
          var P = { toks: toks, i: 0 };
          function pk() { return P.toks[P.i]; }
          function isOp(v) { var t = pk(); return t.t === 'op' && t.v === v; }
          function eatOp(v) { if (isOp(v)) { P.i++; return true; } return false; }
          function expectOp(v) { if (!eatOp(v)) throw new Error('Parse error: "' + v + '" လိုပါတယ်'); }
          function isId(v) { var t = pk(); return t.t === 'id' && t.v.toLowerCase() === v; }
          function eatId(v) { if (isId(v)) { P.i++; return true; } return false; }

          function parseStmts() {
            var list = [];
            while (pk().t !== 'eof' && !isOp('}')) {
              var s = parseStmt();
              if (s) list.push(s);
            }
            return list;
          }
          function parseBody() {
            if (isOp('{')) { P.i++; var ss = parseStmts(); expectOp('}'); return ss; }
            var s = parseStmt();
            return s ? [s] : [];
          }
          function parseIf() {
            P.i++; // if / elseif
            expectOp('(');
            var c = parseExpr();
            expectOp(')');
            var then = parseBody(), els = null;
            if (isId('elseif')) els = [parseIf()];
            else if (eatId('else')) els = parseBody();
            return { k: 'if', c: c, then: then, els: els };
          }
          function parseParams() {
            expectOp('(');
            var params = [];
            while (!isOp(')') && pk().t !== 'eof') {
              var t = pk();
              if (t.t === 'id' && P.toks[P.i + 1] && P.toks[P.i + 1].t === 'var') P.i++;
              t = pk();
              if (t.t === 'var') {
                P.i++;
                var prm = { name: t.v, def: null };
                if (eatOp('=')) prm.def = parseExpr();
                params.push(prm);
              } else if (isOp('...')) { P.i++; } else { P.i++; }
              if (!eatOp(',')) break;
            }
            expectOp(')');
            return params;
          }
          function parseCallArgs() {
            expectOp('(');
            var args = [];
            if (!isOp(')')) {
              args.push(parseExpr());
              while (eatOp(',')) args.push(parseExpr());
            }
            expectOp(')');
            return args;
          }
          function parseStmt() {
            var t = pk();
            if (t.t === 'raw') { P.i++; return { k: 'raw', v: t.v }; }
            if (t.t === 'eof') { P.i++; return null; }
            if (eatOp(';')) return null;
            if (isOp('{')) return { k: 'block', body: parseBody() };
            if (t.t === 'id') {
              var lw = t.v.toLowerCase();
              if (lw === 'if' || lw === 'elseif') return parseIf();
              if (lw === 'while') { P.i++; expectOp('('); var wc = parseExpr(); expectOp(')'); return { k: 'while', c: wc, body: parseBody() }; }
              if (lw === 'do') { P.i++; var db = parseBody(); if (!eatId('while')) throw new Error('Parse error: do နောက်မှာ while လိုပါတယ်'); expectOp('('); var dc = parseExpr(); expectOp(')'); eatOp(';'); return { k: 'do', c: dc, body: db }; }
              if (lw === 'for') {
                P.i++; expectOp('(');
                var init = [], incr = [], cond = null;
                if (!isOp(';')) { init.push(parseExpr()); while (eatOp(',')) init.push(parseExpr()); }
                expectOp(';');
                if (!isOp(';')) cond = parseExpr();
                expectOp(';');
                if (!isOp(')')) { incr.push(parseExpr()); while (eatOp(',')) incr.push(parseExpr()); }
                expectOp(')');
                return { k: 'for', init: init, cond: cond, incr: incr, body: parseBody() };
              }
              if (lw === 'foreach') {
                P.i++; expectOp('(');
                var arr = parseExpr();
                if (!eatId('as')) throw new Error('Parse error: foreach မှာ "as" လိုပါတယ်');
                var t1 = pk();
                if (t1.t !== 'var') throw new Error('Parse error: foreach variable မှားနေပါတယ်');
                P.i++;
                var keyVar = null, valVar = t1.v;
                if (eatOp('=>')) {
                  keyVar = valVar;
                  var t2 = pk();
                  if (t2.t !== 'var') throw new Error('Parse error: foreach value variable မှားနေပါတယ်');
                  P.i++; valVar = t2.v;
                }
                expectOp(')');
                return { k: 'foreach', arr: arr, keyVar: keyVar, valVar: valVar, body: parseBody() };
              }
              if (lw === 'switch') {
                P.i++;
                expectOp('(');
                var subj = parseExpr();
                expectOp(')');
                expectOp('{');
                var cases = [];
                var parseCaseBody = function () {
                  var body = [];
                  while (pk().t !== 'eof' && !isOp('}') && !isId('case') && !isId('default')) {
                    var cs = parseStmt();
                    if (cs) body.push(cs);
                  }
                  return body;
                };
                while (!isOp('}') && pk().t !== 'eof') {
                  if (isId('case')) {
                    P.i++;
                    var cv2 = parseExpr();
                    if (!eatOp(':')) eatOp(';');
                    cases.push({ v: cv2, body: parseCaseBody(), isDefault: false });
                  } else if (isId('default')) {
                    P.i++;
                    if (!eatOp(':')) eatOp(';');
                    cases.push({ v: null, body: parseCaseBody(), isDefault: true });
                  } else P.i++;
                }
                expectOp('}');
                return { k: 'switch', subj: subj, cases: cases };
              }
              if (lw === 'function') {
                P.i++;
                var fn = pk();
                if (fn.t !== 'id') throw new Error('Parse error: function နာမည် လိုပါတယ်');
                P.i++;
                return { k: 'func', name: fn.v, params: parseParams(), body: parseBody() };
              }
              if (lw === 'class') {
                P.i++;
                var cn = pk();
                if (cn.t !== 'id') throw new Error('Parse error: class နာမည် လိုပါတယ်');
                P.i++;
                var parent = null;
                if (eatId('extends')) { parent = pk().v; P.i++; }
                expectOp('{');
                var props = [], methods = {}, consts = {};
                while (!isOp('}') && pk().t !== 'eof') {
                  if (eatOp(';')) continue;
                  while (pk().t === 'id' && ['public', 'private', 'protected', 'static', 'abstract', 'final', 'var'].indexOf(pk().v.toLowerCase()) >= 0) P.i++;
                  if (pk().t === 'var') {
                    var pv = pk(); P.i++;
                    var pdef = null;
                    if (eatOp('=')) pdef = parseExpr();
                    props.push({ name: pv.v, def: pdef });
                    while (eatOp(',')) {
                      var pv2 = pk();
                      if (pv2.t === 'var') { P.i++; var pd2 = null; if (eatOp('=')) pd2 = parseExpr(); props.push({ name: pv2.v, def: pd2 }); }
                    }
                    eatOp(';');
                    continue;
                  }
                  if (isId('function')) {
                    P.i++;
                    var mn = pk();
                    if (mn.t !== 'id') throw new Error('Parse error: method နာမည် လိုပါတယ်');
                    P.i++;
                    methods[mn.v.toLowerCase()] = { name: mn.v, params: parseParams(), body: parseBody() };
                    continue;
                  }
                  if (isId('const')) {
                    P.i++;
                    var ck = pk(); P.i++;
                    expectOp('=');
                    consts[ck.v] = parseExpr();
                    eatOp(';');
                    continue;
                  }
                  P.i++;
                }
                expectOp('}');
                return { k: 'class', name: cn.v, parent: parent, props: props, methods: methods, consts: consts };
              }
              if (lw === 'return') { P.i++; if (eatOp(';')) return { k: 'return', v: null }; var rv = parseExpr(); eatOp(';'); return { k: 'return', v: rv }; }
              if (lw === 'break' || lw === 'continue') { P.i++; if (pk().t === 'num') P.i++; eatOp(';'); return { k: lw }; }
              if (lw === 'echo') {
                P.i++;
                var list = [parseExpr()];
                while (eatOp(',')) list.push(parseExpr());
                eatOp(';');
                return { k: 'echo', list: list };
              }
              if (lw === 'print') { P.i++; var pe = parseExpr(); eatOp(';'); return { k: 'echo', list: [pe] }; }
              if (lw === 'const') { P.i++; var ck2 = pk(); P.i++; expectOp('='); var cv = parseExpr(); eatOp(';'); return { k: 'const', name: ck2.v, v: cv }; }
              if (lw === 'global') { while (!isOp(';') && pk().t !== 'eof') P.i++; eatOp(';'); return null; }
              if (lw === 'unset') { while (!isOp(')') && pk().t !== 'eof') P.i++; eatOp(')'); eatOp(';'); return null; }
            }
            var e = parseExpr();
            eatOp(';');
            return { k: 'expr', e: e };
          }

          function parseExpr() { return parseAssign(); }
          function parseAssign() {
            var left = parseTernary();
            var t = pk();
            if (t.t === 'op' && ['=', '+=', '-=', '*=', '/=', '.='].indexOf(t.v) >= 0) {
              P.i++;
              return { k: 'assign', op: t.v, target: left, value: parseAssign() };
            }
            return left;
          }
          function parseTernary() {
            var c = parseCoalesce();
            if (eatOp('?')) {
              if (eatOp(':')) return { k: 'tern', c: c, a: c, b: parseTernary() };
              var a = parseAssign();
              expectOp(':');
              return { k: 'tern', c: c, a: a, b: parseTernary() };
            }
            return c;
          }
          function parseCoalesce() {
            var l = parseOr();
            while (isOp('??')) { P.i++; l = { k: 'bin', op: '??', l: l, r: parseOr() }; }
            return l;
          }
          function parseOr() { var l = parseAnd(); while (isOp('||')) { P.i++; l = { k: 'bin', op: '||', l: l, r: parseAnd() }; } return l; }
          function parseAnd() { var l = parseEq(); while (isOp('&&')) { P.i++; l = { k: 'bin', op: '&&', l: l, r: parseEq() }; } return l; }
          function parseEq() {
            var l = parseCmp();
            while (pk().t === 'op' && ['==', '===', '!=', '!=='].indexOf(pk().v) >= 0) { var op = pk().v; P.i++; l = { k: 'bin', op: op, l: l, r: parseCmp() }; }
            return l;
          }
          function parseCmp() {
            var l = parseConcat();
            while (true) {
              if (pk().t === 'op' && ['<', '<=', '>', '>='].indexOf(pk().v) >= 0) { var op = pk().v; P.i++; l = { k: 'bin', op: op, l: l, r: parseConcat() }; continue; }
              if (isId('instanceof')) { P.i++; var cn2 = pk(); P.i++; l = { k: 'instanceof', l: l, cls: cn2.v }; continue; }
              break;
            }
            return l;
          }
          function parseConcat() { var l = parseAdd(); while (isOp('.')) { P.i++; l = { k: 'bin', op: '.', l: l, r: parseAdd() }; } return l; }
          function parseAdd() {
            var l = parseMul();
            while (pk().t === 'op' && (pk().v === '+' || pk().v === '-')) { var op = pk().v; P.i++; l = { k: 'bin', op: op, l: l, r: parseMul() }; }
            return l;
          }
          function parseMul() {
            var l = parseUnary();
            while (pk().t === 'op' && ['*', '/', '%', '**'].indexOf(pk().v) >= 0) { var op = pk().v; P.i++; l = { k: 'bin', op: op, l: l, r: parseUnary() }; }
            return l;
          }
          function parseUnary() {
            if (isOp('-')) { P.i++; return { k: 'neg', e: parseUnary() }; }
            if (isOp('!')) { P.i++; return { k: 'not', e: parseUnary() }; }
            if (isOp('++') || isOp('--')) { var op = pk().v; P.i++; return { k: 'pre', op: op, target: parseUnary() }; }
            if (isId('new')) {
              P.i++;
              var cn3 = pk();
              if (cn3.t !== 'id') throw new Error('Parse error: new နောက်မှာ class နာမည် လိုပါတယ်');
              P.i++;
              var args = isOp('(') ? parseCallArgs() : [];
              return parsePostfix({ k: 'new', cls: cn3.v, args: args });
            }
            return parsePostfix(parsePrimary());
          }
          function parsePostfix(node) {
            while (true) {
              if (isOp('[')) {
                P.i++;
                if (eatOp(']')) { node = { k: 'index', base: node, key: null }; continue; }
                var key = parseExpr();
                expectOp(']');
                node = { k: 'index', base: node, key: key };
                continue;
              }
              if (isOp('->')) {
                P.i++;
                var mt = pk();
                if (mt.t !== 'id' && mt.t !== 'var') throw new Error('Parse error: -> နောက်မှာ property/method နာမည် လိုပါတယ်');
                P.i++;
                if (isOp('(')) node = { k: 'mcall', base: node, name: mt.v, args: parseCallArgs() };
                else node = { k: 'prop', base: node, name: mt.v };
                continue;
              }
              if (isOp('::')) {
                P.i++;
                var st2 = pk(); P.i++;
                var clsName = node.k === 'const' ? node.name : '';
                if (isOp('(')) node = { k: 'scall', cls: clsName, name: st2.v, args: parseCallArgs() };
                else node = { k: 'cconst', cls: clsName, name: st2.v };
                continue;
              }
              if (isOp('++') || isOp('--')) { var op2 = pk().v; P.i++; node = { k: 'post', op: op2, target: node }; continue; }
              break;
            }
            return node;
          }
          function parseArrayEntries(close) {
            var entries = [];
            while (!isOp(close) && pk().t !== 'eof') {
              var first = parseExpr();
              if (eatOp('=>')) entries.push({ key: first, val: parseExpr() });
              else entries.push({ key: null, val: first });
              if (!eatOp(',')) break;
            }
            expectOp(close);
            return entries;
          }
          function parsePrimary() {
            var t = pk();
            if (t.t === 'num') { P.i++; return { k: 'num', v: t.v }; }
            if (t.t === 'str') { P.i++; return { k: 'str', v: t.v }; }
            if (t.t === 'dstr') { P.i++; return { k: 'dstr', v: t.v }; }
            if (t.t === 'var') { P.i++; return { k: 'var', name: t.v }; }
            if (isId('function')) { P.i++; if (eatOp('&')) { } var cparams = parseParams(); if (isId('use')) { P.i++; expectOp('('); while (!isOp(')') && pk().t !== 'eof') P.i++; expectOp(')'); } var cbody = parseBody(); return { k: 'closure', params: cparams, body: cbody }; }
            if (t.t === 'id') {
              var lw = t.v.toLowerCase();
              if (lw === 'true') { P.i++; return { k: 'bool', v: true }; }
              if (lw === 'false') { P.i++; return { k: 'bool', v: false }; }
              if (lw === 'null') { P.i++; return { k: 'null' }; }
              if (lw === 'array') { P.i++; expectOp('('); return { k: 'arr', entries: parseArrayEntries(')') }; }
              P.i++;
              if (isOp('(')) return { k: 'call', name: t.v, args: parseCallArgs() };
              return { k: 'const', name: t.v };
            }
            if (isOp('(')) {
              var t1 = P.toks[P.i + 1], t2 = P.toks[P.i + 2];
              if (t1 && t1.t === 'id' && ['int', 'integer', 'float', 'double', 'string', 'bool', 'boolean', 'array'].indexOf(t1.v.toLowerCase()) >= 0 && t2 && t2.t === 'op' && t2.v === ')') {
                P.i += 3;
                return { k: 'cast', type: t1.v.toLowerCase(), e: parseUnary() };
              }
              P.i++;
              var inner = parseExpr();
              expectOp(')');
              return inner;
            }
            if (isOp('[')) { P.i++; return { k: 'arr', entries: parseArrayEntries(']') }; }
            throw new Error('Parse error: မမျှော်လင့်တဲ့ token "' + (t.v || t.t) + '"');
          }

          return parseStmts();
        }

        function phpInterpolate(str, scope) {
          return str.replace(/\{\$([A-Za-z_]\w*)\}|\$([A-Za-z_]\w*)(?:\[([^\]]*)\])?/g, function (whole, g1, g2, g3) {
            var name = g1 || g2;
            var r = scope.lookup(name);
            var v = r.found ? r.v : null;
            if (g3 !== undefined && v instanceof PhpArr) {
              var key = g3.replace(/^['"]|['"]$/g, '');
              v = v.get(key);
            }
            return phpStr(v);
          });
        }
        function phpPrintR(v, indent) {
          var pad = '';
          for (var i = 0; i < indent * 4; i++) pad += ' ';
          if (v instanceof PhpArr) {
            var s = 'Array\n' + pad + '(\n';
            v.entries().forEach(function (en) {
              s += pad + '    [' + en[0] + '] => ' + (en[1] instanceof PhpArr || (en[1] && en[1].__cls) ? phpPrintR(en[1], indent + 1) : phpStr(en[1])) + '\n';
            });
            return s + pad + ')\n';
          }
          if (v && v.__cls) {
            var s2 = v.__cls + ' Object\n' + pad + '(\n';
            v.props.entries().forEach(function (en) { s2 += pad + '    [' + en[0] + '] => ' + phpStr(en[1]) + '\n'; });
            return s2 + pad + ')\n';
          }
          return phpStr(v);
        }
        function phpDump(v, indent) {
          var pad = '';
          for (var i = 0; i < indent * 2; i++) pad += ' ';
          if (v === null || v === undefined) return pad + 'NULL';
          if (typeof v === 'boolean') return pad + 'bool(' + v + ')';
          if (typeof v === 'number') return pad + (Number.isInteger(v) ? 'int(' + v + ')' : 'float(' + fmtNum(v) + ')');
          if (typeof v === 'string') return pad + 'string(' + v.length + ') "' + v + '"';
          if (v instanceof PhpArr) {
            var s = pad + 'array(' + v.size + ') {';
            v.entries().forEach(function (en) {
              s += '\n' + pad + '  [' + (typeof en[0] === 'string' ? '"' + en[0] + '"' : en[0]) + ']=>\n' + phpDump(en[1], indent + 1);
            });
            return s + '\n' + pad + '}';
          }
          if (v && v.__cls) {
            var s2 = pad + 'object(' + v.__cls + ') (' + v.props.size + ') {';
            v.props.entries().forEach(function (en) {
              s2 += '\n' + pad + '  ["' + en[0] + '"]=>\n' + phpDump(en[1], indent + 1);
            });
            return s2 + '\n' + pad + '}';
          }
          return pad + phpStr(v);
        }
        function phpToJS(v) {
          if (v instanceof PhpArr) {
            var es = v.entries(), seq = true;
            es.forEach(function (en, idx) { if (en[0] !== idx) seq = false; });
            if (seq) return es.map(function (en) { return phpToJS(en[1]); });
            var o = {};
            es.forEach(function (en) { o[String(en[0])] = phpToJS(en[1]); });
            return o;
          }
          if (v && v.__cls) { var o2 = {}; v.props.entries().forEach(function (en) { o2[String(en[0])] = phpToJS(en[1]); }); return o2; }
          return v === undefined ? null : v;
        }
        function phpHash(pw) {
          var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./';
          var h = 7, s = '';
          for (var i = 0; i < pw.length; i++) h = (h * 31 + pw.charCodeAt(i)) >>> 0;
          for (var j = 0; j < 53; j++) { h = (h * 1103515245 + 12345 + j * 97) >>> 0; s += chars.charAt((h >>> 8) % 64); }
          return '$2y$10$' + s;
        }

        function phpRegisterClass(st, node) {
          st.classes[node.name.toLowerCase()] = { name: node.name, parent: node.parent, props: node.props, methods: node.methods, consts: node.consts };
        }
        function phpFindClass(st, name) { return st.classes[String(name).toLowerCase()] || null; }
        function phpFindMethod(st, clsName, mname) {
          var seen = 0;
          while (clsName && seen++ < 20) {
            var def = phpFindClass(st, clsName);
            if (!def) return null;
            if (def.methods[mname.toLowerCase()]) return { def: def.methods[mname.toLowerCase()], owner: def };
            clsName = def.parent;
          }
          return null;
        }
        function phpBindParams(def, args, scope, st, out) {
          def.params.forEach(function (prm, idx) {
            var v = idx < args.length ? args[idx] : (prm.def ? phpEval(prm.def, scope, st, out) : null);
            scope.setVar(prm.name, v);
          });
        }
        function phpCallUserFunc(def, args, st, out) {
          var sc = new PhpScope(st.global);
          phpBindParams(def, args, sc, st, out);
          try {
            phpExecStmts(def.body, sc, st, out);
          } catch (sig) {
            if (sig && sig.__sig === 'return') return sig.v;
            throw sig;
          }
          return null;
        }
        function phpCallMethod(obj, name, args, st, out) {
          if (obj && obj.__cls === '__wpstub' && obj.__methods && typeof obj.__methods[name.toLowerCase()] === 'function') return obj.__methods[name.toLowerCase()](args, st, out, obj);
          if (obj && obj.__cls === 'WP_Query') { if (name.toLowerCase() === 'have_posts') { obj.props.set('_wpLoop', (obj.props.get('_wpLoop') || 0)); var n = obj.props.get('_wpLoop'); if (n < 2) { obj.props.set('_wpLoop', n + 1); return true; } return false; } if (name.toLowerCase() === 'the_post') return null; if (name.toLowerCase() === 'get_posts') return obj.props.get('_posts') || null; return null; }
          var found = phpFindMethod(st, obj.__cls, name);
          if (!found) throw new Error('Call to undefined method ' + obj.__cls + '::' + name + '()');
          var sc = new PhpScope(st.global);
          sc.thisVal = obj;
          phpBindParams(found.def, args, sc, st, out);
          try {
            phpExecStmts(found.def.body, sc, st, out);
          } catch (sig) {
            if (sig && sig.__sig === 'return') return sig.v;
            throw sig;
          }
          return null;
        }

        function phpSetTarget(t, v, scope, st, out) {
          if (t.k === 'var') { if (t.name !== 'this') scope.setVar(t.name, v); return; }
          if (t.k === 'index') {
            var arr = phpArrForWrite(t.base, scope, st, out);
            if (!arr) return;
            if (t.key === null) arr.push(v);
            else arr.set(phpEval(t.key, scope, st, out), v);
            return;
          }
          if (t.k === 'prop') {
            var obj = phpEval(t.base, scope, st, out);
            if (obj && obj.props) obj.props.set(t.name, v);
            return;
          }
        }
        function phpArrForWrite(t, scope, st, out) {
          if (t.k === 'var') {
            var r = scope.lookup(t.name);
            if (r.found && r.v instanceof PhpArr) return r.v;
            var na = new PhpArr();
            scope.setVar(t.name, na);
            return na;
          }
          if (t.k === 'index') {
            var parent = phpArrForWrite(t.base, scope, st, out);
            if (!parent) return null;
            var key = t.key === null ? null : phpEval(t.key, scope, st, out);
            var child = key === null ? null : parent.get(key);
            if (!(child instanceof PhpArr)) {
              child = new PhpArr();
              if (key === null) parent.push(child); else parent.set(key, child);
            }
            return child;
          }
          if (t.k === 'prop') {
            var obj = phpEval(t.base, scope, st, out);
            return obj && obj.props ? obj.props : null;
          }
          var v = phpEval(t, scope, st, out);
          return v instanceof PhpArr ? v : null;
        }
        function phpIsset(node, scope, st, out) {
          if (node.k === 'var') {
            if (node.name === 'this') return scope.thisVal !== null;
            var r = scope.lookup(node.name);
            return r.found && r.v !== null && r.v !== undefined;
          }
          if (node.k === 'index') {
            var b = phpEval(node.base, scope, st, out);
            if (b instanceof PhpArr && node.key) return b.has(phpEval(node.key, scope, st, out)) && b.get(phpEval(node.key, scope, st, out)) !== null;
            return false;
          }
          if (node.k === 'prop') {
            var o = phpEval(node.base, scope, st, out);
            return !!(o && o.props && o.props.has(node.name) && o.props.get(node.name) !== null);
          }
          var v = phpEval(node, scope, st, out);
          return v !== null && v !== undefined;
        }

        function phpEval(node, scope, st, out) {
          if (!node) return null;
          st.steps++;
          if (st.steps > 300000) throw new Error('Execution limit — infinite loop ဖြစ်နေနိုင်ပါတယ်');
          switch (node.k) {
            case 'num': case 'str': case 'bool': return node.v;
            case 'null': return null;
            case 'dstr': return phpInterpolate(node.v, scope);
            case 'var': {
              if (node.name === 'this') return scope.thisVal;
              var r = scope.lookup(node.name);
              return r.found ? r.v : null;
            }
            case 'const': {
              if (Object.prototype.hasOwnProperty.call(st.consts, node.name)) return st.consts[node.name];
              if (node.name === 'PASSWORD_DEFAULT') return '__PASSWORD_DEFAULT__';
              if (node.name === 'FILTER_VALIDATE_EMAIL') return '__FILTER_EMAIL__';
              if (node.name === 'FILTER_VALIDATE_INT') return '__FILTER_INT__';
              if (node.name === 'PHP_EOL') return '\n';
              return node.name;
            }
            case 'arr': {
              var a = new PhpArr();
              node.entries.forEach(function (en) {
                var val = phpEval(en.val, scope, st, out);
                if (en.key) a.set(phpEval(en.key, scope, st, out), val);
                else a.push(val);
              });
              return a;
            }
            case 'index': {
              var b = phpEval(node.base, scope, st, out);
              if (b instanceof PhpArr) {
                if (!node.key) return null;
                return b.get(phpEval(node.key, scope, st, out));
              }
              if (typeof b === 'string' && node.key) return b.charAt(phpNum(phpEval(node.key, scope, st, out))) || '';
              return null;
            }
            case 'prop': {
              var o = phpEval(node.base, scope, st, out);
              if (o && o.props) return o.props.get(node.name);
              return null;
            }
            case 'neg': return -phpNum(phpEval(node.e, scope, st, out));
            case 'not': return !phpBool(phpEval(node.e, scope, st, out));
            case 'cast': {
              var cv = phpEval(node.e, scope, st, out);
              if (node.type === 'int' || node.type === 'integer') return Math.trunc(phpNum(cv));
              if (node.type === 'float' || node.type === 'double') return phpNum(cv);
              if (node.type === 'string') return phpStr(cv);
              if (node.type === 'bool' || node.type === 'boolean') return phpBool(cv);
              if (node.type === 'array') { var ca = new PhpArr(); if (cv !== null) ca.push(cv); return ca; }
              return cv;
            }
            case 'tern': return phpBool(phpEval(node.c, scope, st, out)) ? phpEval(node.a, scope, st, out) : phpEval(node.b, scope, st, out);
            case 'instanceof': {
              var iv = phpEval(node.l, scope, st, out);
              if (!iv || !iv.__cls) return false;
              var cn = iv.__cls, seen = 0;
              while (cn && seen++ < 20) {
                if (cn.toLowerCase() === String(node.cls).toLowerCase()) return true;
                var cd = phpFindClass(st, cn);
                cn = cd ? cd.parent : null;
              }
              return false;
            }
            case 'bin': {
              if (node.op === '??') { var lv = phpEval(node.l, scope, st, out); return lv === null || lv === undefined ? phpEval(node.r, scope, st, out) : lv; }
              if (node.op === '&&') return phpBool(phpEval(node.l, scope, st, out)) ? phpBool(phpEval(node.r, scope, st, out)) : false;
              if (node.op === '||') return phpBool(phpEval(node.l, scope, st, out)) ? true : phpBool(phpEval(node.r, scope, st, out));
              var l = phpEval(node.l, scope, st, out), rr = phpEval(node.r, scope, st, out);
              switch (node.op) {
                case '.': return phpStr(l) + phpStr(rr);
                case '+': return phpNum(l) + phpNum(rr);
                case '-': return phpNum(l) - phpNum(rr);
                case '*': return phpNum(l) * phpNum(rr);
                case '/': return phpNum(rr) === 0 ? 0 : phpNum(l) / phpNum(rr);
                case '%': return Math.trunc(phpNum(rr)) === 0 ? 0 : Math.trunc(phpNum(l)) % Math.trunc(phpNum(rr));
                case '**': return Math.pow(phpNum(l), phpNum(rr));
                case '==': return phpLooseEq(l, rr);
                case '!=': return !phpLooseEq(l, rr);
                case '===': return phpStrictEq(l, rr);
                case '!==': return !phpStrictEq(l, rr);
                case '<': return phpCmpVals(l, rr) < 0;
                case '<=': return phpCmpVals(l, rr) <= 0;
                case '>': return phpCmpVals(l, rr) > 0;
                case '>=': return phpCmpVals(l, rr) >= 0;
              }
              return null;
            }
            case 'assign': {
              var val;
              if (node.op === '=') val = phpEval(node.value, scope, st, out);
              else {
                var cur = phpEval(node.target, scope, st, out), rhs = phpEval(node.value, scope, st, out);
                if (node.op === '+=') val = phpNum(cur) + phpNum(rhs);
                else if (node.op === '-=') val = phpNum(cur) - phpNum(rhs);
                else if (node.op === '*=') val = phpNum(cur) * phpNum(rhs);
                else if (node.op === '/=') val = phpNum(rhs) === 0 ? 0 : phpNum(cur) / phpNum(rhs);
                else if (node.op === '.=') val = phpStr(cur) + phpStr(rhs);
                else val = rhs;
              }
              phpSetTarget(node.target, val, scope, st, out);
              return val;
            }
            case 'pre': case 'post': {
              var old = phpNum(phpEval(node.target, scope, st, out));
              var nv = node.op === '++' ? old + 1 : old - 1;
              phpSetTarget(node.target, nv, scope, st, out);
              return node.k === 'pre' ? nv : old;
            }
            case 'closure': return { __cls: '__closure', params: node.params, body: node.body };
            case 'call': return phpCall(node, scope, st, out);
            case 'mcall': {
              var base = phpEval(node.base, scope, st, out);
              var margs = node.args.map(function (an) { return phpEval(an, scope, st, out); });
              if (base && base.__cls) return phpCallMethod(base, node.name, margs, st, out);
              throw new Error('Method ခေါ်လို့ မရပါ — object မဟုတ်ပါဘူး');
            }
            case 'scall': case 'cconst': return null;
            case 'new': {
              var def = phpFindClass(st, node.cls);
              if (!def && String(node.cls).toLowerCase() === 'wp_query') { var wq = { __cls: 'WP_Query', props: new PhpArr() }; wq.props.set('found_posts', 5); wq.props.set('post_count', 3); wq.props.set('_wpLoop', 0); return wq; }
              if (!def && String(node.cls).toLowerCase() === 'wp_user') { var wu = { __cls: '__wpstub', props: new PhpArr(), __methods: { set_role: function (aa, ss, oo, ob) { var rr = new PhpArr(); rr.push(aa[0]); ob.props.set('roles', rr); return null; } } }; wu.props.set('ID', (node.args[0] ? phpEval(node.args[0], scope, st, out) : 1)); wu.props.set('user_login', 'aung'); var wr0 = new PhpArr(); wr0.push('subscriber'); wu.props.set('roles', wr0); return wu; }
              if (!def && String(node.cls).toLowerCase() === 'wp_user_query') { var wuq = { __cls: '__wpstub', props: new PhpArr(), __methods: { get_total: function () { return 2; }, get_results: function () { var gr = new PhpArr(); gr.push(phpStubObj({ ID: 2, user_login: 'may' })); gr.push(phpStubObj({ ID: 3, user_login: 'aye' })); return gr; } } }; wuq.props.set('total', 2); return wuq; }
              if (!def) throw new Error('Class "' + node.cls + '" ကို မတွေ့ပါ');
              var obj = { __cls: def.name, props: new PhpArr() };
              var chain = [], cd2 = def, guard = 0;
              while (cd2 && guard++ < 20) { chain.unshift(cd2); cd2 = cd2.parent ? phpFindClass(st, cd2.parent) : null; }
              chain.forEach(function (cdx) {
                cdx.props.forEach(function (p) { obj.props.set(p.name, p.def ? phpEval(p.def, st.global, st, out) : null); });
              });
              var nargs = node.args.map(function (an) { return phpEval(an, scope, st, out); });
              if (phpFindMethod(st, def.name, '__construct')) phpCallMethod(obj, '__construct', nargs, st, out);
              return obj;
            }
          }
          return null;
        }


        function wpOpt(st, k) { if (!st.wpOptions) st.wpOptions = { blogname: 'My WordPress Site', blogdescription: 'Just another WordPress site' }; var v = st.wpOptions[k]; return v !== undefined && v !== null ? v : ''; }
        function phpStubObj(props, methods) { var o = { __cls: '__wpstub', props: new PhpArr(), __methods: methods || {} }; Object.keys(props || {}).forEach(function (k) { o.props.set(k, props[k]); }); return o; }
        function phpCall(node, scope, st, out) {
          var name = node.name, lname = name.toLowerCase();
          if (lname === 'isset') return node.args.every(function (an) { return phpIsset(an, scope, st, out); });
          if (lname === 'empty') return node.args.length ? !phpIsset(node.args[0], scope, st, out) || !phpBool(phpEval(node.args[0], scope, st, out)) : true;
          var args = node.args.map(function (an) { return phpEval(an, scope, st, out); });
          var a0 = args[0], a1 = args[1], a2 = args[2];
          switch (lname) {

            case 'get_bloginfo': { var bk = phpStr(a0); if (bk === 'name') return wpOpt(st, 'blogname'); if (bk === 'description') return wpOpt(st, 'blogdescription'); if (bk === 'url') return 'https://example.com'; if (bk === 'wpurl') return 'https://example.com'; if (bk === 'version') return '6.7'; if (bk === 'language') return 'my'; if (bk === 'charset') return 'UTF-8'; if (bk === 'admin_email') return 'admin@example.com'; if (bk === 'stylesheet_url') return 'https://example.com/wp-content/themes/twentytwentyfour/style.css'; if (bk === 'template_url') return 'https://example.com/wp-content/themes/twentytwentyfour'; return wpOpt(st, bk); }
            case 'bloginfo': return phpStr(a0) === 'name' ? wpOpt(st, 'blogname') : wpOpt(st, 'blogdescription');
            case 'home_url': return 'https://example.com' + (a0 === null || a0 === undefined || a0 === '' ? '' : '/' + phpStr(a0).replace(/^\//, ''));
            case 'site_url': return 'https://example.com' + (a0 === null || a0 === undefined || a0 === '' ? '' : '/' + phpStr(a0).replace(/^\//, ''));
            case 'get_permalink': return 'https://example.com/sample-post/';
            case 'get_the_title': return a0 ? 'Sample Post ' + phpStr(a0) : 'Sample Post';
            case 'get_the_excerpt': return 'WordPress ကို တစ်ပတ်အတွင်း အခြေခံမှ စတင်လေ့လာနိုင်မယ့် လမ်းညွှန်။';
            case 'get_the_content': return 'Sample post content — WordPress နဲ့ ရေးထားတဲ့ စာသား။';
            case 'the_title': out.push('Sample Post'); return '';
            case 'the_content': out.push('Sample post content — WordPress နဲ့ ရေးထားတဲ့ စာသား။'); return '';
            case 'the_excerpt': out.push('WordPress ကို တစ်ပတ်အတွင်း အခြေခံမှ စတင်လေ့လာနိုင်မယ့် လမ်းညွှန်။'); return '';
            case 'the_permalink': out.push('https://example.com/sample-post/'); return '';
            case 'get_theme_mod': { var tm = st.wpThemeMods ? st.wpThemeMods[phpStr(a0)] : undefined; return tm !== undefined && tm !== null ? tm : (a1 !== undefined && a1 !== null ? a1 : ''); }
            case 'set_theme_mod': if (!st.wpThemeMods) st.wpThemeMods = {}; st.wpThemeMods[phpStr(a0)] = a1; return true;
            case 'get_option': { var ov = st.wpOptions ? st.wpOptions[phpStr(a0)] : undefined; return ov !== undefined && ov !== null ? ov : (a1 !== undefined && a1 !== null ? a1 : ''); }
            case 'update_option': if (!st.wpOptions) st.wpOptions = {}; st.wpOptions[phpStr(a0)] = a1; return true;
            case 'delete_option': if (st.wpOptions) delete st.wpOptions[phpStr(a0)]; return true;
            case 'add_action': case 'add_filter': case 'remove_action': case 'remove_filter': case 'do_action': return true;
            case 'add_theme_support': case 'register_nav_menus': case 'register_sidebar': case 'register_post_type': case 'register_taxonomy': return true;
            case 'wp_insert_post': return a0 instanceof PhpArr && a0.get('ID') ? a0.get('ID') : 1;
            case 'wp_update_post': return a0 instanceof PhpArr && a0.get('ID') ? a0.get('ID') : 1;
            case 'update_post_meta': if (!st.wpPostMeta) st.wpPostMeta = {}; st.wpPostMeta[phpStr(a0) + '|' + phpStr(a1)] = a2; return true;
            case 'get_post_meta': { var pm = st.wpPostMeta ? st.wpPostMeta[phpStr(a0) + '|' + phpStr(a1)] : undefined; return pm !== undefined ? pm : ''; }
            case 'delete_post_meta': if (st.wpPostMeta) delete st.wpPostMeta[phpStr(a0) + '|' + phpStr(a1)]; return true;
            case 'wp_trash_post': case 'wp_untrash_post': case 'wp_delete_post': return true;
            case 'wp_set_password': case 'wp_create_user': return 1;
            case 'set_post_thumbnail': case 'wp_set_post_categories': case 'wp_set_post_tags': case 'wp_set_object_terms': case 'flush_rewrite_rules': case 'switch_theme': return true;
            case 'get_stylesheet': return 'twentytwentyfour-child';
            case 'get_template': return 'twentytwentyfour';
            case 'get_template_directory_uri': return 'https://example.com/wp-content/themes/twentytwentyfour';
            case 'get_stylesheet_directory_uri': return 'https://example.com/wp-content/themes/twentytwentyfour-child';
            case 'wp_get_theme': return phpStubObj({}, { get: function (aa) { return aa[0] === 'Name' ? 'Twenty Twenty-Four' : aa[0] === 'Version' ? '1.0' : '1.0'; } });
            case 'get_header_image': return 'https://example.com/wp-content/uploads/header.jpg';
            case 'get_custom_header': return phpStubObj({ width: 1200, height: 400 });
            case 'wp_get_attachment_url': return 'https://example.com/wp-content/uploads/image.jpg';
            case 'get_the_post_thumbnail_url': return 'https://example.com/wp-content/uploads/sample.jpg';
            case 'wp_upload_dir': { var ud = new PhpArr(); ud.set('basedir', '/home/aung/wordpress/wp-content/uploads'); ud.set('baseurl', 'https://example.com/wp-content/uploads'); return ud; }
            case 'get_post': return phpStubObj({ ID: a0 || 1, post_title: 'Sample Post', post_content: 'Sample post content.', post_excerpt: 'Sample excerpt.' });
            case 'get_posts': { var gp = new PhpArr(); gp.push(phpStubObj({ ID: 1, post_title: 'Sample Post 1' })); gp.push(phpStubObj({ ID: 2, post_title: 'Sample Post 2' })); return gp; }
            case 'have_posts': { st.wpLoop = (st.wpLoop || 0); if (st.wpLoop < 2) { st.wpLoop++; return true; } return false; }
            case 'the_post': return null;
            case 'wp_reset_postdata': case 'wp_reset_query': st.wpLoop = 0; return null;
            case 'get_site_transient': { var tr = phpStubObj({}); var resp = new PhpArr(); resp.push('twentytwentyfour'); tr.props.set('response', resp); return tr; }
            case 'get_plugins': { var pl = new PhpArr(); pl.set('hello.php', 'Hello Dolly'); return pl; }
            case 'activate_plugin': case 'deactivate_plugins': case 'delete_plugins': return true;
            case 'wp_create_nav_menu': return 1;
            case 'get_nav_menu_locations': { var nl = new PhpArr(); nl.set('primary', 2); return nl; }
            case 'set_nav_menu_locations': return true;
            case 'the_widget': return '';
            case 'is_active_sidebar': return true;
            case 'dynamic_sidebar': return true;
            case 'wp_enqueue_style': case 'wp_enqueue_script': return true;
            case 'get_header': case 'get_footer': case 'get_sidebar': return '';
            case 'wp_head': case 'wp_footer': return '';
            case 'is_single': case 'is_user_logged_in': return true;
            case 'is_page': case 'is_home': case 'is_admin': case 'is_front_page': case 'is_archive': return false;
            case 'current_user_can': return true;
            case 'sanitize_title': return phpStr(a0).toLowerCase().trim().replace(/[^a-z0-9\u1000-\u109f]+/g, '-').replace(/^-+|-+$/g, '');
            case 'sanitize_file_name': return phpStr(a0).replace(/\s+/g, '-').replace(/[^A-Za-z0-9.\-_\u1000-\u109f]/g, '');
            case 'sanitize_text_field': return phpStr(a0).replace(/<[^>]*>/g, '').trim();
            case 'esc_html': case 'esc_attr': return phpStr(a0).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            case 'esc_url': return phpStr(a0);
            case '__': return a0;
            case '_e': out.push(phpStr(a0)); return '';
            case 'do_shortcode': return '';
            case 'wp_is_mobile': return false;
            case 'get_page_template_slug': return '';
            case 'wc_get_page_id': return a0 === 'shop' ? 2 : a0 === 'cart' ? 3 : a0 === 'checkout' ? 4 : a0 === 'myaccount' ? 5 : 2;
            case 'class_exists': return phpStr(a0) === 'WP_Query';
            case 'function_exists': return false;
            case 'phpversion': return '8.3.0';
            case 'wp_get_post_revisions': { var rev = new PhpArr(); rev.push(phpStubObj({ post_date: '2026-01-05 10:30:00' })); rev.push(phpStubObj({ post_date: '2026-01-04 09:00:00' })); return rev; }
            case 'wp_update_nav_menu_item': return 1;
            case 'wp_nav_menu': return '<ul><li>ပင်မ စာစ်မ်ဘာ</li><li>ကျန်န်ုတ်အ ကြေင်း</li></ul>';
            case 'file_exists': case 'is_dir': case 'is_file': return true;
            case 'wp_delete_attachment': return true;
            case 'add_image_size': return true;
            case 'wp_generate_password': return 'Xk9#mQ2vLp7!zR4w';
            case 'get_core_updates': { var cu = new PhpArr(); cu.push(phpStubObj({ version: '6.8' })); return cu; }
            case 'get_woocommerce_currency': return wpOpt(st, 'woocommerce_currency') || 'MMK';
            case 'wc_get_order': return phpStubObj({ ID: a0 || 101 }, { get_status: function () { return 'processing'; }, get_total: function () { return '15000'; }, get_id: function () { return 101; } });
            case 'update_user_meta': if (!st.wpUserMeta) st.wpUserMeta = {}; st.wpUserMeta[phpStr(a0) + '|' + phpStr(a1)] = a2; return true;
            case 'get_user_meta': { var um = st.wpUserMeta ? st.wpUserMeta[phpStr(a0) + '|' + phpStr(a1)] : undefined; return um !== undefined ? um : ''; }
            case 'delete_user_meta': if (st.wpUserMeta) delete st.wpUserMeta[phpStr(a0) + '|' + phpStr(a1)]; return true;
            case 'wp_delete_user': return true;
            case 'get_author_posts_url': return 'https://example.com/author/aung-aung/';
            case 'count_user_posts': return 5;
            case 'get_current_user_id': return 1;
            case 'wp_get_current_user': return phpStubObj({ ID: 1, user_login: 'aung' }, { });
            case 'get_avatar': return '';
            case 'get_search_form': return '<form>Search</form>';
            case 'get_post_type': return 'post';
            case 'get_post_status': return 'publish';
            case 'get_comment_count': { var cc = new PhpArr(); cc.set('approved', 3); return cc; }
            case 'count': return a0 instanceof PhpArr ? a0.size : (a0 === null || a0 === undefined ? 0 : 1);
            case 'strlen': return phpStr(a0).length;
            case 'trim': return phpStr(a0).trim();
            case 'ltrim': return phpStr(a0).replace(/^\s+/, '');
            case 'rtrim': return phpStr(a0).replace(/\s+$/, '');
            case 'strtoupper': return phpStr(a0).toUpperCase();
            case 'strtolower': return phpStr(a0).toLowerCase();
            case 'ucfirst': { var s = phpStr(a0); return s.charAt(0).toUpperCase() + s.slice(1); }
            case 'lcfirst': { var s2 = phpStr(a0); return s2.charAt(0).toLowerCase() + s2.slice(1); }
            case 'str_replace': {
              if (a2 instanceof PhpArr) return a2;
              var subj = phpStr(a2);
              var searches = a0 instanceof PhpArr ? a0.entries().map(function (en) { return phpStr(en[1]); }) : [phpStr(a0)];
              searches.forEach(function (sr) { if (sr !== '') subj = subj.split(sr).join(phpStr(a1)); });
              return subj;
            }
            case 'str_repeat': return phpStr(a0).repeat(Math.max(0, Math.min(1000, phpNum(a1))));
            case 'substr': { var ss = phpStr(a0); return a2 === undefined || a2 === null ? ss.substr(phpNum(a1)) : ss.substr(phpNum(a1), phpNum(a2)); }
            case 'strpos': { var idx = phpStr(a0).indexOf(phpStr(a1)); return idx < 0 ? false : idx; }
            case 'str_contains': return phpStr(a0).indexOf(phpStr(a1)) >= 0;
            case 'explode': {
              var ea = new PhpArr();
              if (phpStr(a0) === '') { ea.push(phpStr(a1)); return ea; }
              phpStr(a1).split(phpStr(a0)).forEach(function (p) { ea.push(p); });
              return ea;
            }
            case 'implode': {
              if (args.length === 1 && a0 instanceof PhpArr) return a0.entries().map(function (en) { return phpStr(en[1]); }).join('');
              if (a1 instanceof PhpArr) return a1.entries().map(function (en) { return phpStr(en[1]); }).join(phpStr(a0));
              return '';
            }
            case 'in_array': {
              if (!(a1 instanceof PhpArr)) return false;
              var strict = args[2] === true;
              return a1.entries().some(function (en) { return strict ? phpStrictEq(en[1], a0) : phpLooseEq(en[1], a0); });
            }
            case 'array_push': {
              if (a0 instanceof PhpArr) { for (var i = 1; i < args.length; i++) a0.push(args[i]); return a0.size; }
              return 0;
            }
            case 'array_pop': {
              if (!(a0 instanceof PhpArr) || a0.size === 0) return null;
              var es = a0.entries(), last = es[es.length - 1];
              a0.map.delete(last[0]);
              return last[1];
            }
            case 'array_merge': {
              var ma = new PhpArr();
              args.forEach(function (arg) {
                if (arg instanceof PhpArr) arg.entries().forEach(function (en) {
                  if (typeof en[0] === 'string') ma.set(en[0], en[1]); else ma.push(en[1]);
                });
              });
              return ma;
            }
            case 'array_keys': { var ka = new PhpArr(); if (a0 instanceof PhpArr) a0.entries().forEach(function (en) { ka.push(en[0]); }); return ka; }
            case 'array_values': { var va = new PhpArr(); if (a0 instanceof PhpArr) a0.entries().forEach(function (en) { va.push(en[1]); }); return va; }
            case 'sort': case 'rsort': {
              if (a0 instanceof PhpArr) {
                var vals = a0.entries().map(function (en) { return en[1]; });
                vals.sort(function (x, y) { return phpCmpVals(x, y); });
                if (lname === 'rsort') vals.reverse();
                a0.map.clear(); a0.next = 0;
                vals.forEach(function (v) { a0.push(v); });
              }
              return true;
            }
            case 'print_r': out.push(phpPrintR(a0, 0)); return true;
            case 'var_dump': out.push(phpDump(a0, 0) + '\n'); return null;
            case 'is_numeric': return isNumericVal(a0);
            case 'is_string': return typeof a0 === 'string';
            case 'is_int': case 'is_integer': return typeof a0 === 'number' && Number.isInteger(a0);
            case 'is_float': case 'is_double': return typeof a0 === 'number' && !Number.isInteger(a0);
            case 'is_bool': return typeof a0 === 'boolean';
            case 'is_array': return a0 instanceof PhpArr;
            case 'is_null': return a0 === null || a0 === undefined;
            case 'is_object': return !!(a0 && a0.__cls);
            case 'intval': return Math.trunc(phpNum(a0));
            case 'floatval': return phpNum(a0);
            case 'strval': return phpStr(a0);
            case 'number_format': {
              var num = phpNum(a0), dec = a1 === undefined || a1 === null ? 0 : phpNum(a1);
              var parts = num.toFixed(dec).split('.');
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              return parts.join('.');
            }
            case 'round': return Math.round(phpNum(a0));
            case 'floor': return Math.floor(phpNum(a0));
            case 'ceil': return Math.ceil(phpNum(a0));
            case 'abs': return Math.abs(phpNum(a0));
            case 'max': case 'min': {
              var pool = (a0 instanceof PhpArr) ? a0.entries().map(function (en) { return en[1]; }) : args;
              if (!pool.length) return null;
              var best = pool[0];
              pool.forEach(function (v) { if (lname === 'max' ? phpCmpVals(v, best) > 0 : phpCmpVals(v, best) < 0) best = v; });
              return best;
            }
            case 'htmlspecialchars': return phpStr(a0).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
            case 'filter_var': {
              if (a1 === '__FILTER_EMAIL__') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(phpStr(a0)) ? a0 : false;
              if (a1 === '__FILTER_INT__') return /^-?\d+$/.test(phpStr(a0).trim()) ? parseInt(phpStr(a0), 10) : false;
              return a0;
            }
            case 'password_hash': { var h = phpHash(phpStr(a0)); st.hashes[h] = phpStr(a0); return h; }
            case 'password_verify': return st.hashes[phpStr(a1)] === phpStr(a0) || phpHash(phpStr(a0)) === phpStr(a1);
            case 'define': st.consts[phpStr(a0)] = a1; return true;
            case 'defined': return Object.prototype.hasOwnProperty.call(st.consts, phpStr(a0));
            case 'date': {
              var d = new Date(), f = phpStr(a0) || 'Y-m-d';
              function p2(x) { return (x < 10 ? '0' : '') + x; }
              return f.replace(/Y/g, d.getFullYear()).replace(/m/g, p2(d.getMonth() + 1)).replace(/d/g, p2(d.getDate())).replace(/H/g, p2(d.getHours())).replace(/i/g, p2(d.getMinutes())).replace(/s/g, p2(d.getSeconds()));
            }
            case 'time': return Math.floor(Date.now() / 1000);
            case 'header': return null;
            case 'session_start': return true;
            case 'gettype': return a0 === null || a0 === undefined ? 'NULL' : a0 instanceof PhpArr ? 'array' : (a0 && a0.__cls) ? 'object' : typeof a0 === 'number' ? (Number.isInteger(a0) ? 'integer' : 'double') : typeof a0;
            case 'json_encode': return JSON.stringify(phpToJS(a0));
          }
          var uf = st.funcs[lname];
          if (uf) return phpCallUserFunc(uf, args, st, out);
          throw new Error('Call to undefined function ' + name + '()');
        }

        function phpExecStmts(list, scope, st, out) {
          list.forEach(function (s) { phpExecStmt(s, scope, st, out); });
        }
        function phpExecStmt(s, scope, st, out) {
          st.steps++;
          if (st.steps > 300000) throw new Error('Execution limit — infinite loop ဖြစ်နေနိုင်ပါတယ်');
          switch (s.k) {
            case 'raw': out.push(s.v); return;
            case 'echo': s.list.forEach(function (e) { out.push(phpStr(phpEval(e, scope, st, out))); }); return;
            case 'expr': phpEval(s.e, scope, st, out); return;
            case 'block': phpExecStmts(s.body, scope, st, out); return;
            case 'if':
              if (phpBool(phpEval(s.c, scope, st, out))) phpExecStmts(s.then, scope, st, out);
              else if (s.els) phpExecStmts(s.els, scope, st, out);
              return;
            case 'while':
              while (phpBool(phpEval(s.c, scope, st, out))) {
                try { phpExecStmts(s.body, scope, st, out); }
                catch (sig) { if (sig && sig.__sig === 'break') break; if (sig && sig.__sig === 'continue') continue; throw sig; }
              }
              return;
            case 'do':
              do {
                try { phpExecStmts(s.body, scope, st, out); }
                catch (sig) { if (sig && sig.__sig === 'break') break; if (sig && sig.__sig === 'continue') { /* check condition below */ } else throw sig; }
              } while (phpBool(phpEval(s.c, scope, st, out)));
              return;
            case 'for': {
              s.init.forEach(function (e) { phpEval(e, scope, st, out); });
              while (s.cond === null || phpBool(phpEval(s.cond, scope, st, out))) {
                var broke = false;
                try { phpExecStmts(s.body, scope, st, out); }
                catch (sig) { if (sig && sig.__sig === 'break') broke = true; else if (sig && sig.__sig === 'continue') { /* incr below */ } else throw sig; }
                if (broke) break;
                s.incr.forEach(function (e) { phpEval(e, scope, st, out); });
              }
              return;
            }
            case 'switch': {
              var sv = phpEval(s.subj, scope, st, out);
              var startIdx = -1, defIdx = -1;
              s.cases.forEach(function (cs, idx) {
                if (cs.isDefault) { if (defIdx < 0) defIdx = idx; }
                else if (startIdx < 0 && phpLooseEq(sv, phpEval(cs.v, scope, st, out))) startIdx = idx;
              });
              if (startIdx < 0) startIdx = defIdx;
              if (startIdx >= 0) {
                try {
                  for (var ci = startIdx; ci < s.cases.length; ci++) phpExecStmts(s.cases[ci].body, scope, st, out);
                } catch (sig) {
                  if (!(sig && sig.__sig === 'break')) throw sig;
                }
              }
              return;
            }
            case 'foreach': {
              var arr = phpEval(s.arr, scope, st, out);
              var items = [];
              if (arr instanceof PhpArr) items = arr.entries();
              else if (arr && arr.__cls) items = arr.props.entries();
              for (var i = 0; i < items.length; i++) {
                if (s.keyVar) scope.setVar(s.keyVar, items[i][0]);
                scope.setVar(s.valVar, items[i][1]);
                try { phpExecStmts(s.body, scope, st, out); }
                catch (sig) { if (sig && sig.__sig === 'break') break; if (sig && sig.__sig === 'continue') continue; throw sig; }
              }
              return;
            }
            case 'return': throw { __sig: 'return', v: s.v ? phpEval(s.v, scope, st, out) : null };
            case 'break': throw { __sig: 'break' };
            case 'continue': throw { __sig: 'continue' };
            case 'func': st.funcs[s.name.toLowerCase()] = s; return;
            case 'class': phpRegisterClass(st, s); return;
            case 'const': st.consts[s.name] = phpEval(s.v, scope, st, out); return;
          }
        }

        function phpSeedSuperglobals(g) {
          function arrOf(obj) {
            var a = new PhpArr();
            Object.keys(obj).forEach(function (k) { a.set(k, obj[k]); });
            return a;
          }
          g.setVar('_GET', arrOf({ q: 'php tutorial' }));
          g.setVar('_POST', arrOf({ name: 'Aung Aung', email: 'aung@example.com', age: '20', password: 'secret123' }));
          g.setVar('_SERVER', arrOf({ REQUEST_METHOD: 'POST', SERVER_NAME: 'localhost', PHP_SELF: '/index.php' }));
          g.setVar('_SESSION', new PhpArr());
          g.setVar('_COOKIE', new PhpArr());
          g.setVar('_REQUEST', arrOf({ q: 'php tutorial', name: 'Aung Aung' }));
          g.setVar('_FILES', new PhpArr());
        }

        function phpRun(code) {
          var st = { funcs: {}, classes: {}, consts: {}, steps: 0, hashes: {}, global: null };
          var out = [];
          var toks = [];
          if (code.indexOf('<?php') < 0 && code.indexOf('<?=') < 0) {
            toks = phpTokenize(code);
          } else {
            var pos = 0;
            while (pos < code.length) {
              var idx = code.indexOf('<?php', pos);
              if (idx < 0) { var tail = code.slice(pos); if (tail) toks.push({ t: 'raw', v: tail }); break; }
              if (idx > pos) toks.push({ t: 'raw', v: code.slice(pos, idx) });
              var end = code.indexOf('?>', idx + 5);
              var seg = end < 0 ? code.slice(idx + 5) : code.slice(idx + 5, end);
              toks = toks.concat(phpTokenize(seg));
              pos = end < 0 ? code.length : end + 2;
            }
          }
          toks.push({ t: 'eof', v: '' });
          var prog = phpParseProgram(toks);
          var g = new PhpScope(null);
          st.global = g;
          phpSeedSuperglobals(g);
          g.setVar('wp_version', '6.7');
          (function () { var roles = new PhpArr(); function roleObj(n) { var r = new PhpArr(); r.set('name', n); return r; } roles.set('administrator', roleObj('Administrator')); roles.set('editor', roleObj('Editor')); roles.set('author', roleObj('Author')); roles.set('contributor', roleObj('Contributor')); roles.set('subscriber', roleObj('Subscriber')); var wr = { __cls: '__wpstub', props: new PhpArr(), __methods: {} }; wr.props.set('roles', roles); g.setVar('wp_roles', wr); })();
          prog.forEach(function (s) {
            if (s.k === 'func') st.funcs[s.name.toLowerCase()] = s;
            if (s.k === 'class') phpRegisterClass(st, s);
          });
          try {
            phpExecStmts(prog, g, st, out);
          } catch (sig) {
            if (!(sig && sig.__sig === 'return')) throw sig;
          }
          return out.join('');
        }

        function phpOutputDoc(code) {
          var body, errHtml = '';
          try {
            body = phpRun(code);
          } catch (e) {
            body = '';
            errHtml = '<div style="margin-top:8px;color:#b91c1c;background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:6px 10px;font:12.5px monospace">PHP Error: ' + esc(e.message || String(e)) + '</div>';
          }
          if (!body && !errHtml) body = '<span style="color:#6b7280">(output မရှိပါ — echo နဲ့ ထုတ်ကြည့်ပါ)</span>';
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#fff;color:#111;font-family:sans-serif">' +
            '<div style="padding:10px 12px;white-space:pre-wrap;word-break:break-word;font-size:14px;line-height:1.65">' + body + errHtml + '</div>' +
            HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- MySQL lessons: simulated query results ----------
           SQL examples run against a small built-in sample database
           (users / products / categories / orders) so learners see result
           tables without a server. State resets on every Run. */
        function sqlCol(name, type, flags) {
          return { name: name, type: type, pk: !!(flags && flags.pk), ai: !!(flags && flags.ai), nn: !!(flags && flags.nn), uni: !!(flags && flags.uni), fk: !!(flags && flags.fk), def: flags && Object.prototype.hasOwnProperty.call(flags, 'def') ? flags.def : null };
        }
        function sqlFreshDB() {
          var tables = {};
          tables.users = {
            cols: [sqlCol('id', 'INT', { pk: 1, ai: 1, nn: 1 }), sqlCol('name', 'VARCHAR(100)', { nn: 1 }), sqlCol('email', 'VARCHAR(150)', { uni: 1 }), sqlCol('age', 'INT'), sqlCol('city', 'VARCHAR(100)')],
            rows: [
              { id: 1, name: 'Aung Aung', email: 'aung@example.com', age: 20, city: 'Yangon' },
              { id: 2, name: 'Su Su', email: 'susu@example.com', age: 23, city: 'Mandalay' },
              { id: 3, name: 'Zaw Zaw', email: 'zaw@example.com', age: 19, city: 'Yangon' },
              { id: 4, name: 'Nanda', email: 'nanda@example.com', age: 28, city: 'Bago' }
            ],
            nextAi: 5
          };
          tables.products = {
            cols: [sqlCol('id', 'INT', { pk: 1, ai: 1, nn: 1 }), sqlCol('name', 'VARCHAR(150)', { nn: 1 }), sqlCol('price', 'DECIMAL(10,2)'), sqlCol('stock', 'INT'), sqlCol('category_id', 'INT', { fk: 1 })],
            rows: [
              { id: 1, name: 'HTML Book', price: 15000, stock: 12, category_id: 1 },
              { id: 2, name: 'PHP Book', price: 25000, stock: 8, category_id: 1 },
              { id: 3, name: 'Wireless Mouse', price: 35000, stock: 20, category_id: 2 },
              { id: 4, name: 'Keyboard', price: 45000, stock: 0, category_id: 2 },
              { id: 5, name: 'Laravel Book', price: 30000, stock: 5, category_id: 1 }
            ],
            nextAi: 6
          };
          tables.categories = {
            cols: [sqlCol('id', 'INT', { pk: 1, ai: 1, nn: 1 }), sqlCol('name', 'VARCHAR(100)', { nn: 1 })],
            rows: [{ id: 1, name: 'Books' }, { id: 2, name: 'Electronics' }],
            nextAi: 3
          };
          tables.orders = {
            cols: [sqlCol('id', 'INT', { pk: 1, ai: 1, nn: 1 }), sqlCol('user_id', 'INT', { fk: 1 }), sqlCol('product_id', 'INT', { fk: 1 }), sqlCol('qty', 'INT')],
            rows: [
              { id: 1, user_id: 1, product_id: 2, qty: 1 },
              { id: 2, user_id: 1, product_id: 1, qty: 2 },
              { id: 3, user_id: 2, product_id: 3, qty: 1 }
            ],
            nextAi: 4
          };
          return { tables: tables, databases: ['information_schema', 'mysql', 'performance_schema', 'school_db'], current: 'school_db' };
        }
        function sqlVal(tok) {
          var t = String(tok).trim();
          if (/^NULL$/i.test(t)) return null;
          if (t.length >= 2 && t.charAt(0) === "'" && t.charAt(t.length - 1) === "'") return t.slice(1, -1).replace(/''/g, "'");
          if (/^-?\d+$/.test(t)) return parseInt(t, 10);
          if (/^-?\d*\.\d+$/.test(t)) return parseFloat(t);
          return t.replace(/^`|`$/g, '');
        }
        function sqlIsNum(v) {
          return typeof v === 'number' || (typeof v === 'string' && /^-?\d+(\.\d+)?$/.test(v.trim()));
        }
        function sqlSplitTop(str, sep) {
          var parts = [], depth = 0, cur = '', inQ = false;
          for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (inQ) {
              cur += c;
              if (c === "'") { if (str.charAt(i + 1) === "'") { cur += "'"; i++; } else inQ = false; }
              continue;
            }
            if (c === "'") { inQ = true; cur += c; continue; }
            if (c === '(') depth++;
            else if (c === ')') depth--;
            if (c === sep && depth === 0) { parts.push(cur); cur = ''; continue; }
            cur += c;
          }
          if (cur.trim() !== '' || parts.length) parts.push(cur);
          return parts;
        }
        function sqlGroups(str) {
          var groups = [], depth = 0, start = -1, inQ = false;
          for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (inQ) { if (c === "'") { if (str.charAt(i + 1) === "'") i++; else inQ = false; } continue; }
            if (c === "'") { inQ = true; continue; }
            if (c === '(') { if (depth === 0) start = i + 1; depth++; }
            else if (c === ')') { depth--; if (depth === 0 && start >= 0) { groups.push(str.slice(start, i)); start = -1; } }
          }
          return groups;
        }
        function sqlStatements(code) {
          var clean = code.split('\n').filter(function (ln) { return ln.trim().indexOf('--') !== 0; }).join('\n');
          return sqlSplitTop(clean, ';').map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
        }
        function sqlWhereTokens(s) {
          var toks = [], i = 0, m;
          while (i < s.length) {
            var c = s.charAt(i), rest = s.slice(i);
            if (/\s/.test(c)) { i++; continue; }
            if (c === "'") {
              var j = i + 1, val = '';
              while (j < s.length) {
                if (s.charAt(j) === "'") { if (s.charAt(j + 1) === "'") { val += "'"; j += 2; continue; } j++; break; }
                val += s.charAt(j); j++;
              }
              toks.push({ t: 'str', v: val }); i = j; continue;
            }
            if ((m = /^-?\d+(\.\d+)?/.exec(rest)) && /\d/.test(c)) { toks.push({ t: 'num', v: parseFloat(m[0]) }); i += m[0].length; continue; }
            if ((m = /^[A-Za-z_][\w.]*/.exec(rest))) { toks.push({ t: 'word', v: m[0] }); i += m[0].length; continue; }
            var two = s.substr(i, 2);
            if (['>=', '<=', '!=', '<>'].indexOf(two) >= 0) { toks.push({ t: 'op', v: two }); i += 2; continue; }
            if ('=<>(),'.indexOf(c) >= 0) { toks.push({ t: 'op', v: c }); i++; continue; }
            i++;
          }
          return toks;
        }
        function sqlParseWhere(s) {
          var P = { toks: sqlWhereTokens(s), i: 0 };
          function pk() { return P.toks[P.i]; }
          function isWord(w) { var t = pk(); return t && t.t === 'word' && t.v.toUpperCase() === w; }
          function eatWord(w) { if (isWord(w)) { P.i++; return true; } return false; }
          function isOp(v) { var t = pk(); return t && t.t === 'op' && t.v === v; }
          function parseOr() { var l = parseAnd(); while (eatWord('OR')) l = { op: 'or', l: l, r: parseAnd() }; return l; }
          function parseAnd() { var l = parseNot(); while (eatWord('AND')) l = { op: 'and', l: l, r: parseNot() }; return l; }
          function parseNot() { if (eatWord('NOT')) return { op: 'not', e: parseNot() }; return parsePred(); }
          function parseOperand() {
            var t = pk();
            if (!t) return { lit: null };
            P.i++;
            if (t.t === 'str' || t.t === 'num') return { lit: t.v };
            if (t.t === 'word') {
              var u = t.v.toUpperCase();
              if (u === 'NULL') return { lit: null };
              if (u === 'TRUE') return { lit: 1 };
              if (u === 'FALSE') return { lit: 0 };
              return { ref: t.v };
            }
            return { lit: null };
          }
          function parsePred() {
            if (isOp('(')) { P.i++; var e = parseOr(); if (isOp(')')) P.i++; return e; }
            var left = parseOperand();
            if (eatWord('IS')) {
              var neg = eatWord('NOT');
              eatWord('NULL');
              return { op: 'isnull', e: left, neg: neg };
            }
            var neg2 = false;
            if (isWord('NOT')) { P.i++; neg2 = true; }
            if (eatWord('LIKE')) return { op: 'like', l: left, r: parseOperand(), neg: neg2 };
            if (eatWord('IN')) {
              var list = [];
              if (isOp('(')) {
                P.i++;
                while (!isOp(')') && pk()) { list.push(parseOperand()); if (isOp(',')) { P.i++; continue; } break; }
                if (isOp(')')) P.i++;
              }
              return { op: 'in', l: left, list: list, neg: neg2 };
            }
            if (eatWord('BETWEEN')) {
              var lo = parseOperand();
              eatWord('AND');
              var hi = parseOperand();
              return { op: 'between', l: left, lo: lo, hi: hi, neg: neg2 };
            }
            var t = pk();
            if (t && t.t === 'op' && ['=', '!=', '<>', '>', '<', '>=', '<='].indexOf(t.v) >= 0) {
              P.i++;
              return { op: 'cmp', cmp: t.v, l: left, r: parseOperand() };
            }
            return { op: 'truthy', e: left };
          }
          return parseOr();
        }
        function sqlOperandVal(node, resolve) {
          if (!node) return null;
          if (Object.prototype.hasOwnProperty.call(node, 'lit')) return node.lit;
          return resolve(node.ref);
        }
        function sqlCompare(l, cmp, r) {
          if (l === null || l === undefined || r === null || r === undefined) return false;
          var c;
          if (sqlIsNum(l) && sqlIsNum(r)) { var d = parseFloat(l) - parseFloat(r); c = d < 0 ? -1 : d > 0 ? 1 : 0; }
          else { var a = String(l).toLowerCase(), b = String(r).toLowerCase(); c = a < b ? -1 : a > b ? 1 : 0; }
          switch (cmp) {
            case '=': return c === 0;
            case '!=': case '<>': return c !== 0;
            case '>': return c > 0;
            case '<': return c < 0;
            case '>=': return c >= 0;
            case '<=': return c <= 0;
          }
          return false;
        }
        function sqlEvalWhere(node, resolve) {
          if (!node) return true;
          switch (node.op) {
            case 'or': return sqlEvalWhere(node.l, resolve) || sqlEvalWhere(node.r, resolve);
            case 'and': return sqlEvalWhere(node.l, resolve) && sqlEvalWhere(node.r, resolve);
            case 'not': return !sqlEvalWhere(node.e, resolve);
            case 'truthy': { var v = sqlOperandVal(node.e, resolve); return v !== null && v !== 0 && v !== '' && v !== false; }
            case 'isnull': { var v2 = sqlOperandVal(node.e, resolve); return node.neg ? v2 !== null && v2 !== undefined : v2 === null || v2 === undefined; }
            case 'cmp': return sqlCompare(sqlOperandVal(node.l, resolve), node.cmp, sqlOperandVal(node.r, resolve));
            case 'like': {
              var lv = sqlOperandVal(node.l, resolve), pat = sqlOperandVal(node.r, resolve);
              if (lv === null || pat === null) return false;
              var re = '^' + String(pat).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/%/g, '[\\s\\S]*').replace(/_/g, '[\\s\\S]') + '$';
              var ok = new RegExp(re, 'i').test(String(lv));
              return node.neg ? !ok : ok;
            }
            case 'in': {
              var iv = sqlOperandVal(node.l, resolve);
              var found = node.list.some(function (o) { return sqlCompare(iv, '=', sqlOperandVal(o, resolve)); });
              return node.neg ? !found : found;
            }
            case 'between': {
              var bv = sqlOperandVal(node.l, resolve);
              var ok2 = sqlCompare(bv, '>=', sqlOperandVal(node.lo, resolve)) && sqlCompare(bv, '<=', sqlOperandVal(node.hi, resolve));
              return node.neg ? !ok2 : ok2;
            }
          }
          return true;
        }
        function sqlCtx(tableName, table, row) {
          var ctx = { __tables: [tableName] };
          table.cols.forEach(function (c) {
            ctx[tableName + '.' + c.name] = row[c.name] === undefined ? null : row[c.name];
            if (!(c.name in ctx)) ctx[c.name] = ctx[tableName + '.' + c.name];
          });
          return ctx;
        }
        function sqlMergeCtx(a, b) {
          var m = { __tables: a.__tables.concat(b.__tables) };
          Object.keys(b).forEach(function (k) { if (k !== '__tables' && k.indexOf('.') > 0) m[k] = b[k]; });
          Object.keys(a).forEach(function (k) { if (k !== '__tables') m[k] = a[k]; });
          Object.keys(b).forEach(function (k) { if (k !== '__tables' && k.indexOf('.') < 0 && !(k in m)) m[k] = b[k]; });
          return m;
        }
        function sqlResolve(ctx, ref) {
          if (!ctx || !ref) return null;
          if (ref in ctx) { var v = ctx[ref]; return v === undefined ? null : v; }
          return null;
        }
        function sqlAgg(fn, ref, ctxs) {
          if (fn === 'COUNT') {
            if (ref === '*') return ctxs.length;
            return ctxs.filter(function (c) { return sqlResolve(c, ref) !== null; }).length;
          }
          var vals = ctxs.map(function (c) { return sqlResolve(c, ref); }).filter(function (v) { return v !== null && sqlIsNum(v); }).map(function (v) { return parseFloat(v); });
          if (!vals.length) return null;
          if (fn === 'SUM') return vals.reduce(function (x, y) { return x + y; }, 0);
          if (fn === 'AVG') return Math.round((vals.reduce(function (x, y) { return x + y; }, 0) / vals.length) * 10000) / 10000;
          if (fn === 'MIN') return Math.min.apply(null, vals);
          if (fn === 'MAX') return Math.max.apply(null, vals);
          return null;
        }
        function sqlMsg(text) { return { kind: 'msg', text: text }; }
        function sqlTableResult(cols, rows) { return { kind: 'table', cols: cols, rows: rows }; }

        function sqlExecSelect(db, stmt) {
          var m = /^SELECT\s+([\s\S]+?)\s+FROM\s+`?(\w+)`?([\s\S]*)$/i.exec(stmt);
          if (!m) return sqlMsg('Query OK (နမူနာ simulation)');
          var selectList = m[1].trim(), baseName = m[2], rest = m[3] || '';
          var base = db.tables[baseName];
          if (!base) return { kind: 'err', text: "Table '" + baseName + "' doesn't exist (နမူနာ database မှာ မရှိပါ)" };
          // Joins
          var joins = [];
          rest = rest.replace(/(INNER\s+JOIN|LEFT\s+JOIN|RIGHT\s+JOIN|JOIN)\s+`?(\w+)`?\s+ON\s+([\w.]+)\s*=\s*([\w.]+)/gi, function (whole, type, tname, lref, rref) {
            joins.push({ type: type.toUpperCase().indexOf('LEFT') >= 0 ? 'LEFT' : type.toUpperCase().indexOf('RIGHT') >= 0 ? 'RIGHT' : 'INNER', table: tname, l: lref, r: rref });
            return ' ';
          });
          var whereM = /WHERE\s+([\s\S]+?)(?=\s+GROUP\s+BY|\s+ORDER\s+BY|\s+LIMIT|$)/i.exec(rest);
          var groupM = /GROUP\s+BY\s+([\w.,\s]+?)(?=\s+ORDER\s+BY|\s+LIMIT|$)/i.exec(rest);
          var orderM = /ORDER\s+BY\s+([\w.]+)(\s+(DESC|ASC))?/i.exec(rest);
          var limitM = /LIMIT\s+(\d+)(?:\s*,\s*(\d+)|\s+OFFSET\s+(\d+))?/i.exec(rest);
          var ctxs = base.rows.map(function (r) { return sqlCtx(baseName, base, r); });
          joins.forEach(function (j) {
            var jt = db.tables[j.table];
            if (!jt) return;
            var jctxs = jt.rows.map(function (r) { return sqlCtx(j.table, jt, r); });
            var outCtxs = [];
            if (j.type === 'RIGHT') {
              jctxs.forEach(function (rc) {
                var matched = false;
                ctxs.forEach(function (lc) {
                  var merged = sqlMergeCtx(lc, rc);
                  if (sqlCompare(sqlResolve(merged, j.l), '=', sqlResolve(merged, j.r))) { outCtxs.push(merged); matched = true; }
                });
                if (!matched) {
                  var empty = {};
                  base.cols.forEach(function (c) { empty[c.name] = null; });
                  outCtxs.push(sqlMergeCtx(sqlCtx(baseName, base, empty), rc));
                }
              });
            } else {
              ctxs.forEach(function (lc) {
                var matched = false;
                jctxs.forEach(function (rc) {
                  var merged = sqlMergeCtx(lc, rc);
                  if (sqlCompare(sqlResolve(merged, j.l), '=', sqlResolve(merged, j.r))) { outCtxs.push(merged); matched = true; }
                });
                if (!matched && j.type === 'LEFT') {
                  var empty2 = {};
                  jt.cols.forEach(function (c) { empty2[c.name] = null; });
                  outCtxs.push(sqlMergeCtx(lc, sqlCtx(j.table, jt, empty2)));
                }
              });
            }
            ctxs = outCtxs;
          });
          if (whereM) {
            var ast = sqlParseWhere(whereM[1]);
            ctxs = ctxs.filter(function (c) { return sqlEvalWhere(ast, function (ref) { return sqlResolve(c, ref); }); });
          }
          // Select items
          var distinct = /^DISTINCT\s+/i.test(selectList);
          if (distinct) selectList = selectList.replace(/^DISTINCT\s+/i, '');
          var items = sqlSplitTop(selectList, ',').map(function (raw) {
            var t = raw.trim();
            var aggM = /^(COUNT|SUM|AVG|MIN|MAX)\s*\(\s*([\w.*]+)\s*\)(?:\s+AS\s+`?(\w+)`?)?$/i.exec(t);
            if (aggM) return { agg: aggM[1].toUpperCase(), ref: aggM[2], header: aggM[3] || t.replace(/\s+/g, '') };
            var asM = /^([\s\S]+?)\s+AS\s+`?(\w+)`?$/i.exec(t);
            if (asM) return { ref: asM[1].trim(), header: asM[2] };
            return { ref: t, header: t.indexOf('.') > 0 ? t.split('.').pop() : t };
          });
          var aliasMap = {};
          items.forEach(function (it) { if (it.ref && it.header !== it.ref) aliasMap[it.header] = it.ref; });
          var hasAgg = items.some(function (it) { return !!it.agg; });
          // Grouping
          var groups = null;
          if (groupM) {
            var grefs = groupM[1].split(',').map(function (s) { return s.trim(); });
            var gmap = {}, gorder = [];
            ctxs.forEach(function (c) {
              var key = grefs.map(function (g) { return String(sqlResolve(c, g)); }).join('\u0001');
              if (!gmap[key]) { gmap[key] = { rep: c, members: [] }; gorder.push(key); }
              gmap[key].members.push(c);
            });
            groups = gorder.map(function (k) { return gmap[k]; });
          } else if (hasAgg) {
            groups = [{ rep: ctxs[0] || sqlCtx(baseName, base, {}), members: ctxs }];
          }
          if (orderM && !groups) {
            var oref = aliasMap[orderM[1]] || orderM[1];
            var desc = (orderM[3] || '').toUpperCase() === 'DESC';
            ctxs = ctxs.slice().sort(function (x, y) {
              var vx = sqlResolve(x, oref), vy = sqlResolve(y, oref);
              if (vx === null && vy === null) return 0;
              if (vx === null) return desc ? 1 : -1;
              if (vy === null) return desc ? -1 : 1;
              var c = sqlIsNum(vx) && sqlIsNum(vy) ? parseFloat(vx) - parseFloat(vy) : (String(vx).toLowerCase() < String(vy).toLowerCase() ? -1 : String(vx).toLowerCase() > String(vy).toLowerCase() ? 1 : 0);
              return desc ? -c : c;
            });
          }
          var tableNames = [baseName].concat(joins.map(function (j) { return j.table; }));
          function project(ctx, members) {
            var row = [];
            items.forEach(function (it) {
              if (it.agg) { row.push(sqlAgg(it.agg, it.ref, members || [ctx])); return; }
              if (it.ref === '*') {
                tableNames.forEach(function (tn) {
                  var tb = db.tables[tn];
                  if (tb) tb.cols.forEach(function (c) { row.push(sqlResolve(ctx, tn + '.' + c.name)); });
                });
                return;
              }
              if (/\.\*$/.test(it.ref)) {
                var tn2 = it.ref.split('.')[0], tb2 = db.tables[tn2];
                if (tb2) tb2.cols.forEach(function (c) { row.push(sqlResolve(ctx, tn2 + '.' + c.name)); });
                return;
              }
              row.push(sqlResolve(ctx, it.ref));
            });
            return row;
          }
          function headers() {
            var hs = [];
            items.forEach(function (it) {
              if (it.agg) { hs.push(it.header); return; }
              if (it.ref === '*') {
                tableNames.forEach(function (tn) { var tb = db.tables[tn]; if (tb) tb.cols.forEach(function (c) { hs.push(c.name); }); });
                return;
              }
              if (/\.\*$/.test(it.ref || '')) {
                var tb2 = db.tables[it.ref.split('.')[0]];
                if (tb2) tb2.cols.forEach(function (c) { hs.push(c.name); });
                return;
              }
              hs.push(it.header);
            });
            return hs;
          }
          var rows;
          if (groups) rows = groups.map(function (g) { return project(g.rep, g.members); });
          else rows = ctxs.map(function (c) { return project(c, null); });
          if (limitM) {
            var offset = 0, count = parseInt(limitM[1], 10);
            if (limitM[2]) { offset = count; count = parseInt(limitM[2], 10); }
            else if (limitM[3]) offset = parseInt(limitM[3], 10);
            rows = rows.slice(offset, offset + count);
          }
          if (distinct) {
            var seen = {}, uniq = [];
            rows.forEach(function (r) { var k = JSON.stringify(r); if (!seen[k]) { seen[k] = 1; uniq.push(r); } });
            rows = uniq;
          }
          return sqlTableResult(headers(), rows);
        }

        function sqlExec(db, stmt) {
          var s = stmt.trim();
          var m;
          if (/^SHOW\s+DATABASES/i.test(s)) return sqlTableResult(['Database'], db.databases.map(function (d) { return [d]; }));
          if (/^SHOW\s+TABLES/i.test(s)) {
            var col = 'Tables_in_' + db.current;
            return sqlTableResult([col], Object.keys(db.tables).map(function (t) { return [t]; }));
          }
          if ((m = /^CREATE\s+DATABASE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?/i.exec(s))) {
            if (db.databases.indexOf(m[1]) < 0) db.databases.push(m[1]);
            return sqlMsg('Query OK, 1 row affected');
          }
          if ((m = /^USE\s+`?(\w+)`?/i.exec(s))) {
            db.current = m[1];
            if (db.databases.indexOf(m[1]) < 0) db.databases.push(m[1]);
            return sqlMsg('Database changed');
          }
          if ((m = /^CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?(\w+)`?\s*\(([\s\S]+)\)\s*$/i.exec(s))) {
            var tname = m[1], cols = [], fkColName = null;
            sqlSplitTop(m[2], ',').forEach(function (d0) {
              var fm = /^FOREIGN\s+KEY\s*\(\s*`?(\w+)`?\s*\)/i.exec(d0.trim());
              if (fm) fkColName = fm[1];
            });
            sqlSplitTop(m[2], ',').forEach(function (defRaw) {
              var def = defRaw.trim();
              if (/^FOREIGN\s+KEY/i.test(def)) return;
              var pkm = /^PRIMARY\s+KEY\s*\(\s*`?(\w+)`?\s*\)/i.exec(def);
              if (pkm) { cols.forEach(function (c) { if (c.name === pkm[1]) c.pk = true; }); return; }
              if (/^(CONSTRAINT|UNIQUE\s*\(|KEY\s|INDEX\s|CHECK)/i.test(def)) return;
              var cm = /^`?(\w+)`?\s+([A-Za-z]+(?:\s*\(\s*[\d,]+\s*\))?)([\s\S]*)$/.exec(def);
              if (!cm) return;
              var flags = {
                pk: /PRIMARY\s+KEY/i.test(cm[3]),
                ai: /AUTO_INCREMENT/i.test(cm[3]),
                nn: /NOT\s+NULL/i.test(cm[3]) || /PRIMARY\s+KEY/i.test(cm[3]),
                uni: /UNIQUE/i.test(cm[3]),
                fk: fkColName === cm[1]
              };
              var dm = /DEFAULT\s+('[^']*'|[^\s,]+)/i.exec(cm[3]);
              if (dm) flags.def = sqlVal(dm[1]);
              cols.push(sqlCol(cm[1], cm[2].replace(/\s+/g, '').toUpperCase(), flags));
            });
            db.tables[tname] = { cols: cols, rows: [], nextAi: 1 };
            return sqlMsg('Query OK, 0 rows affected');
          }
          if ((m = /^(?:DESCRIBE|DESC)\s+`?(\w+)`?/i.exec(s)) || (m = /^SHOW\s+COLUMNS\s+FROM\s+`?(\w+)`?/i.exec(s))) {
            var dt = db.tables[m[1]];
            if (!dt) return { kind: 'err', text: "Table '" + m[1] + "' doesn't exist" };
            return sqlTableResult(['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'], dt.cols.map(function (c) {
              return [c.name, c.type.toLowerCase(), c.nn ? 'NO' : 'YES', c.pk ? 'PRI' : c.uni ? 'UNI' : c.fk ? 'MUL' : '', c.def === null ? null : c.def, c.ai ? 'auto_increment' : ''];
            }));
          }
          if ((m = /^INSERT\s+INTO\s+`?(\w+)`?\s*(?:\(([^)]*)\))?\s*VALUES\s*([\s\S]+)$/i.exec(s))) {
            var it = db.tables[m[1]];
            if (!it) {
              var newCols = (m[2] || 'id').split(',').map(function (c) { return sqlCol(c.trim().replace(/`/g, ''), 'TEXT', {}); });
              it = db.tables[m[1]] = { cols: newCols, rows: [], nextAi: 1 };
            }
            var colNames = m[2] ? m[2].split(',').map(function (c) { return c.trim().replace(/`/g, ''); }) : it.cols.map(function (c) { return c.name; });
            var groups = sqlGroups(m[3]);
            groups.forEach(function (g) {
              var vals = sqlSplitTop(g, ',').map(function (v) { return sqlVal(v); });
              var row = {};
              it.cols.forEach(function (c) {
                var idx = colNames.indexOf(c.name);
                if (idx >= 0 && idx < vals.length) row[c.name] = vals[idx];
                else if (c.ai) row[c.name] = it.nextAi++;
                else if (c.def !== null) row[c.name] = c.def;
                else row[c.name] = null;
                if (c.ai && typeof row[c.name] === 'number' && row[c.name] >= it.nextAi) it.nextAi = row[c.name] + 1;
              });
              it.rows.push(row);
            });
            return sqlMsg('Query OK, ' + groups.length + ' row' + (groups.length === 1 ? '' : 's') + ' affected');
          }
          if ((m = /^UPDATE\s+`?(\w+)`?\s+SET\s+([\s\S]+?)(?:\s+WHERE\s+([\s\S]+))?$/i.exec(s))) {
            var ut = db.tables[m[1]];
            if (!ut) return { kind: 'err', text: "Table '" + m[1] + "' doesn't exist" };
            var assigns = sqlSplitTop(m[2], ',').map(function (a) {
              var am = /^\s*`?(\w+)`?\s*=\s*([\s\S]+)$/.exec(a);
              return am ? { col: am[1], val: sqlVal(am[2]) } : null;
            }).filter(Boolean);
            var uast = m[3] ? sqlParseWhere(m[3]) : null;
            var changed = 0;
            ut.rows.forEach(function (row) {
              var ctx = sqlCtx(m[1], ut, row);
              if (!uast || sqlEvalWhere(uast, function (ref) { return sqlResolve(ctx, ref); })) {
                assigns.forEach(function (a) { row[a.col] = a.val; });
                changed++;
              }
            });
            return sqlMsg('Query OK, ' + changed + ' row' + (changed === 1 ? '' : 's') + ' affected');
          }
          if ((m = /^DELETE\s+FROM\s+`?(\w+)`?(?:\s+WHERE\s+([\s\S]+))?$/i.exec(s))) {
            var dtb = db.tables[m[1]];
            if (!dtb) return { kind: 'err', text: "Table '" + m[1] + "' doesn't exist" };
            var dast = m[2] ? sqlParseWhere(m[2]) : null;
            var before = dtb.rows.length;
            dtb.rows = dtb.rows.filter(function (row) {
              if (!dast) return false;
              var ctx = sqlCtx(m[1], dtb, row);
              return !sqlEvalWhere(dast, function (ref) { return sqlResolve(ctx, ref); });
            });
            var del = before - dtb.rows.length;
            return sqlMsg('Query OK, ' + del + ' row' + (del === 1 ? '' : 's') + ' affected');
          }
          if ((m = /^DROP\s+TABLE\s+(?:IF\s+EXISTS\s+)?`?(\w+)`?/i.exec(s))) { delete db.tables[m[1]]; return sqlMsg('Query OK, 0 rows affected'); }
          if (/^DROP\s+DATABASE/i.test(s)) return sqlMsg('Query OK, 0 rows affected');
          if (/^TRUNCATE/i.test(s)) {
            var tm = /`?(\w+)`?\s*$/i.exec(s.replace(/^TRUNCATE\s+(TABLE\s+)?/i, ''));
            if (tm && db.tables[tm[1]]) { db.tables[tm[1]].rows = []; db.tables[tm[1]].nextAi = 1; }
            return sqlMsg('Query OK, 0 rows affected');
          }
          if (/^ALTER\s+TABLE/i.test(s)) return sqlMsg('Query OK, 0 rows affected');
          if (/^SELECT/i.test(s)) return sqlExecSelect(db, s);
          return sqlMsg('Query OK (နမူနာ simulation)');
        }

        function sqlCell(v) {
          if (v === null || v === undefined) return '<span style="color:#6e7681;font-style:italic">NULL</span>';
          return esc(typeof v === 'number' ? fmtNum(v) : String(v));
        }
        function sqlOutputDoc(code) {
          var db = sqlFreshDB();
          var stmts = sqlStatements(code);
          var html = '';
          if (!stmts.length) html = '<div style="color:#8b949e">SQL query ရေးပြီး Run နှိပ်ပါ</div>';
          stmts.forEach(function (stmt) {
            html += '<div style="margin-top:10px"><span style="color:#3fb950;font-weight:bold">mysql&gt;</span> ' + esc(stmt) + ';</div>';
            var res;
            try { res = sqlExec(db, stmt); } catch (e) { res = { kind: 'err', text: e.message || String(e) }; }
            if (res.kind === 'table') {
              html += '<table style="border-collapse:collapse;margin:6px 0 4px;font-size:12.5px"><thead><tr>' +
                res.cols.map(function (c) { return '<th style="border:1px solid #30363d;padding:3px 10px;background:#161b22;text-align:left;color:#e6edf3">' + esc(c) + '</th>'; }).join('') +
                '</tr></thead><tbody>' +
                res.rows.map(function (r) { return '<tr>' + r.map(function (v) { return '<td style="border:1px solid #30363d;padding:3px 10px">' + sqlCell(v) + '</td>'; }).join('') + '</tr>'; }).join('') +
                '</tbody></table>';
              html += '<div style="color:#8b949e;margin-bottom:6px">' + res.rows.length + ' row' + (res.rows.length === 1 ? '' : 's') + ' in set</div>';
            } else if (res.kind === 'err') {
              html += '<div style="color:#f87171;margin:2px 0 6px">ERROR: ' + esc(res.text) + '</div>';
            } else {
              html += '<div style="color:#8b949e;margin:2px 0 6px">' + esc(res.text) + '</div>';
            }
          });
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.7 monospace;padding:12px 14px;word-break:break-word">' +
            '<div style="color:#6e7681;margin-bottom:4px">MYSQL · နမူနာ data နဲ့ simulation — တကယ့် MySQL / phpMyAdmin မှာ ကိုယ်တိုင် စမ်းကြည့်ပါ</div>' +
            html + HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- Laravel lessons: simulated terminal (Composer / Artisan) ----------
           Laravel cannot run in a browser, so command examples show sample
           terminal output, like the Git lessons. Real runs need PHP + Composer. */

        // Bash simulation helpers: expand $VAR / ${VAR} / $(date ...) / $((...)).
        function shellVarVal(k, vars) {
          if (vars && Object.prototype.hasOwnProperty.call(vars, k)) return vars[k];
          if (k === 'BASH_VERSION') return '5.2.21';
          if (k === 'HOME') return '/home/aung';
          if (k === 'USER') return 'aung';
          if (k === 'PWD') return '/home/aung/my-project';
          if (k === 'HOSTNAME') return 'aung-pc';
          if (k === '0') return 'bash';
          return '';
        }
        function shellDateStr(fmt) {
          var d = new Date();
          function pad(n) { return (n < 10 ? '0' : '') + n; }
          if (fmt === '+%Y-%m-%d') return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
          if (fmt === '+%H:%M:%S') return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
          if (fmt === '+%Y') return '' + d.getFullYear();
          var off = -d.getTimezoneOffset();
          var sign = off >= 0 ? '+' : '-';
          var tz = sign + pad(Math.floor(Math.abs(off) / 60)) + pad(Math.abs(off) % 60);
          return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()] + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()] + ' ' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + ' ' + tz + ' ' + d.getFullYear();
        }
        function expandShell(text, vars) {
          text = text.replace(/\$\(\s*date\s*([^)]*)\)/g, function (m, fmt) { return shellDateStr((fmt || '').trim()); });
          text = text.replace(/\$\(\(([^)]*)\)\)/g, function (m, expr) {
            if (!/^[0-9+\-*/%()\s]+$/.test(expr)) return '';
            try { return String(Function('return (' + expr + ')')()); } catch (e) { return ''; }
          });
          text = text.replace(/\$\([^)]*\)/g, '');
          text = text.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g, function (m, k) { return shellVarVal(k, vars); });
          text = text.replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g, function (m, k) { return shellVarVal(k, vars); });
          text = text.replace(/\$@/g, '').replace(/\$\*/g, '').replace(/\$\#/g, '0').replace(/\$\?/g, '0');
          return text;
        }
        function stripShellQuotes(s) {
          s = s.trim();
          if ((s.charAt(0) === '"' && s.slice(-1) === '"') || (s.charAt(0) === "'" && s.slice(-1) === "'")) return s.slice(1, -1);
          return s;
        }
        function shellSampleOutput(cmd, vars) {
          var m;
          if (/^echo\b/.test(cmd)) {
            var s = cmd.replace(/^echo\s+/, '').replace(/\s+$/, '').replace(/^-n\s+/, '');
            var single = s.charAt(0) === "'" && s.slice(-1) === "'";
            if (!single) s = expandShell(s, vars);
            return stripShellQuotes(s);
          }
          if (/^pwd\b/.test(cmd)) return '/home/aung/my-project';
          if (/^whoami\b/.test(cmd)) return 'aung';
          if (/^hostname\b/.test(cmd)) return 'aung-pc';
          if (/^date\b/.test(cmd)) { var dm = /^date\s+(.*)$/.exec(cmd); return shellDateStr(dm ? dm[1].trim() : ''); }
          if (/^printenv\s+([A-Za-z_][A-Za-z0-9_]*)/.test(cmd)) { var pm = /^printenv\s+([A-Za-z_][A-Za-z0-9_]*)/.exec(cmd); return shellVarVal(pm[1], vars); }
          if (/^printenv\b/.test(cmd)) return 'HOME=/home/aung\nUSER=aung\nSHELL=/bin/bash';
          if (/^env\b/.test(cmd)) return 'HOME=/home/aung\nUSER=aung\nSHELL=/bin/bash';
          if (/^ls\b/.test(cmd)) { if (/ -l/.test(cmd)) return 'total 12\ndrwxr-xr-x 2 aung aung 4096 Nov 28 00:00 my-project\n-rw-r--r-- 1 aung aung   42 Nov 28 00:00 notes.txt\n-rw-r--r-- 1 aung aung  128 Nov 28 00:00 hello.sh'; return 'hello.sh  index.html  notes.txt  style.css'; }
          if (/^cat\s+/.test(cmd)) { var cf = cmd.replace(/^cat\s+/, '').trim(); return '--- ' + cf + ' ---\nမင်္ဂလာပါ\nHello World'; }
          if (/^(head|tail)\b/.test(cmd)) return 'မင်္ဂလာပါ\nHello World';
          if (/^grep\s+/.test(cmd)) return 'မင်္ဂလာပါ — ဒီစာကြောင်းမှာ ရှာတဲ့စာသား ပါပါတယ်';
          if (/^find\b/.test(cmd)) return './notes.txt\n./hello.sh\n./index.html';
          if (/^sort\b/.test(cmd)) return 'Aye\nMg\nSu';
          if (/^wc\b/.test(cmd)) return '  3  12  48 notes.txt';
          if (/^ps\b/.test(cmd)) return '  PID TTY          TIME CMD\n 1234 pts/0    00:00:00 bash\n 2345 pts/0    00:00:00 node';
          if (/^df\b/.test(cmd)) return 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   20G   28G  42% /';
          if (/^du\b/.test(cmd)) return '4.0K\t./my-project';
          if (/^uname\b/.test(cmd)) return 'Linux aung-pc 6.8.0 x86_64 GNU/Linux';
          if (/^id\b/.test(cmd)) return 'uid=1000(aung) gid=1000(aung) groups=1000(aung)';
          if (/^read\s/.test(cmd)) { var rp = /-p\s+"([^"]*)"/.exec(cmd); return (rp ? rp[1] : '') + 'Aye'; }
          if (/^bash --version/.test(cmd)) return 'GNU bash, version 5.2.21(1)-release (x86_64-pc-linux-gnu)';
          if (/^bash -x\s/.test(cmd)) return '+ echo "မင်္ဂလာပါ"';
          if (/^docker --version/.test(cmd)) return 'Docker version 27.3.1, build ce12230';
          if (/^docker ps/.test(cmd)) return 'CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\na1b2c3d4e5f6   myapp     "node app.js"   2 hours ago   Up 2 hours   0.0.0.0:3000->3000/tcp   myapp';
          if (/^docker images/.test(cmd)) return 'REPOSITORY   TAG       IMAGE ID       CREATED       SIZE\nmyapp        latest    a1b2c3d4e5f6   2 hours ago   125MB';
          if (/^docker build/.test(cmd)) return 'Sending build context to Docker daemon\nStep 1/5 : FROM node:20\n ---> Using cache\nSuccessfully built a1b2c3d4e5f6\nSuccessfully tagged myapp:latest';
          if (/^docker run/.test(cmd)) return 'Hello from Docker!\nThis message shows that your installation appears to be working correctly.';
          if (/^docker (pull|push|stop|start|rm|rmi|logs|exec|inspect|compose|volume|network)/.test(cmd)) return '(Docker command executed — sample output)';
          if (/^aws sts get-caller-identity/.test(cmd)) return '{\n    "UserId": "AIDACKCEVSQ6C2EXAMPLE",\n    "Account": "123456789012",\n    "Arn": "arn:aws:iam::123456789012:user/aung"\n}';
          if (/^aws s3 ls/.test(cmd)) return '2026-11-28 00:00:00  learn-aye-bucket\n2026-11-28 00:00:00  myapp-backups';
          if (/^aws s3 /.test(cmd)) return 'upload: ./index.html to s3://learn-aye-bucket/index.html';
          if (/^aws ec2 describe-instances/.test(cmd)) return '{\n    "Reservations": [\n        {\n            "Instances": [\n                {\n                    "InstanceId": "i-0123456789abcdef0",\n                    "State": { "Name": "running" }\n                }\n            ]\n        }\n    ]\n}';
          if (/^aws /.test(cmd)) return '(AWS command executed — sample output)';
          if (/^gcloud /.test(cmd)) return '(gcloud command executed — sample output)';
          if (/^az /.test(cmd)) return '(az command executed — sample output)';
          if (/^kubectl /.test(cmd)) return 'NAME        READY   STATUS    RESTARTS   AGE\nmyapp-pod   1/1     Running   0          2h';
          if (/^terraform /.test(cmd)) return 'Terraform v1.9.0\nApply complete! Resources: 1 added, 0 changed, 0 destroyed.';
          if (/^mysql\s/.test(cmd)) return 'Welcome to the MySQL monitor. Commands end with ; or \\g.\nmysql> ';
          if (/^redis-cli\s/.test(cmd)) return 'OK';
          if (/^sam\s/.test(cmd)) return 'SAM CLI, version 1.120.0\nBuild Succeeded';
          if (/^yum\s/.test(cmd)) return 'Loaded plugins\nNothing to do';
          if (/^winget install/.test(cmd)) return 'Found Docker Desktop [Docker.DockerDesktop]\nSuccessfully installed';
          if (/^brew install/.test(cmd)) return '==> Downloading...\nDocker was successfully installed!';
          if (/^hadolint\s/.test(cmd)) return 'Dockerfile:1 DL3008 warning: Pin versions in apt get install';

          if ((m = /^composer create-project\s+\S+\s+(\S+)/.exec(cmd))) return 'Creating a "laravel/laravel" project at "./' + m[1] + '"\nInstalling laravel/laravel (v11.x)\n  - Extracting archive\n> @php artisan key:generate --ansi\n\nApplication key set successfully.\nApplication ready! Build something amazing.';
          if (/^composer create-project/.test(cmd)) return 'Creating a "laravel/laravel" project\nInstalling laravel/laravel (v11.x)\n  - Extracting archive\nApplication key set successfully.\nApplication ready! Build something amazing.';
          if ((m = /^composer require\s+(\S+)/.exec(cmd))) return 'Using version ^1.0 for ' + m[1] + '\n  - Installing ' + m[1] + ': Extracting archive\nPackage operations: 1 install, 0 updates, 0 removals\nGenerating optimized autoload files';
          if (/^composer (install|update)/.test(cmd)) return 'Installing dependencies from lock file\nNothing to install, update or remove\nGenerating optimized autoload files';
          if (/^php artisan --version/.test(cmd)) return 'Laravel Framework 11.31.0';
          if (/^php artisan key:generate/.test(cmd)) return '   INFO  Application key set successfully.';
          if (/^php artisan serve/.test(cmd)) return '   INFO  Server running on [http://127.0.0.1:8000].\n\n  Press Ctrl+C to stop the server';
          if (/^php artisan migrate:fresh/.test(cmd)) return '   INFO  Dropping all tables. ................................. DONE\n   INFO  Running migrations.\n  0001_01_01_000000_create_users_table ...................... DONE\n  0001_01_01_000001_create_cache_table ...................... DONE\n  2026_01_05_000000_create_products_table ................... DONE' + (/--seed/.test(cmd) ? '\n   INFO  Seeding database.\n  Database\\Seeders\\ProductSeeder ........................... DONE' : '');
          if (/^php artisan migrate/.test(cmd)) return '   INFO  Running migrations.\n  2026_01_05_000000_create_products_table ................... DONE\n  2026_01_05_000001_create_categories_table ................. DONE';
          if ((m = /^php artisan make:migration\s+(\S+)/.exec(cmd))) return '   INFO  Migration [database/migrations/2026_01_05_000000_' + m[1] + '.php] created successfully.';
          if ((m = /^php artisan make:model\s+(\S+)/.exec(cmd))) {
            var out = '   INFO  Model [app/Models/' + m[1] + '.php] created successfully.';
            if (/\s-m\b|--migration/.test(cmd)) out += '\n   INFO  Migration [database/migrations/2026_01_05_000000_create_' + m[1].toLowerCase() + 's_table.php] created successfully.';
            if (/\s-c\b|--controller/.test(cmd)) out += '\n   INFO  Controller [app/Http/Controllers/' + m[1] + 'Controller.php] created successfully.';
            if (/\s-r\b|--resource/.test(cmd)) out += '\n   INFO  Controller [app/Http/Controllers/' + m[1] + 'Controller.php] created successfully.';
            return out;
          }
          if ((m = /^php artisan make:controller\s+(\S+)/.exec(cmd))) return '   INFO  Controller [app/Http/Controllers/' + m[1] + '.php] created successfully.';
          if ((m = /^php artisan make:request\s+(\S+)/.exec(cmd))) return '   INFO  Request [app/Http/Requests/' + m[1] + '.php] created successfully.';
          if ((m = /^php artisan make:resource\s+(\S+)/.exec(cmd))) return '   INFO  Resource [app/Http/Resources/' + m[1] + '.php] created successfully.';
          if ((m = /^php artisan make:seeder\s+(\S+)/.exec(cmd))) return '   INFO  Seeder [database/seeders/' + m[1] + '.php] created successfully.';
          if (/^php artisan db:seed/.test(cmd)) return '   INFO  Seeding database.\n  Database\\Seeders\\ProductSeeder ........................... DONE';
          if (/^php artisan route:list/.test(cmd)) return '  GET|HEAD   / ............................... welcome\n  GET|HEAD   products ........ products.index > ProductController@index\n  POST       products ........ products.store > ProductController@store\n  GET|HEAD   products/{product} .. products.show > ProductController@show\n  PUT|PATCH  products/{product} products.update > ProductController@update\n  DELETE     products/{product} products.destroy > ProductController@destroy\n\n  Showing [6] routes';
          if (/^php artisan storage:link/.test(cmd)) return '   INFO  The [public/storage] link has been connected to [storage/app/public].';
          if (/^php artisan test/.test(cmd)) return '   PASS  Tests\\Feature\\ProductTest\n  v product list can be viewed\n  v product can be created\n\n  Tests:    2 passed (5 assertions)\n  Duration: 0.42s';
          if ((m = /^php artisan make:(\w+)\s+(\S+)/.exec(cmd))) return '   INFO  ' + m[1] + ' [' + m[2] + '] created successfully.';
          if (/^php artisan tinker/.test(cmd)) return 'Psy Shell v0.12 (PHP 8.3 — Laravel 11)\n> // ဒီမှာ Eloquent code တွေ စမ်းရိုက်နိုင်ပါတယ်';
          if (/^npm run dev/.test(cmd)) return '  VITE v6.0.0  ready in 320 ms\n  Local:   http://localhost:5173/';
          if (/^npm run build/.test(cmd)) return 'vite v6.0.0 building for production...\n✓ 34 modules transformed.\ndist/index.html                  0.46 kB\ndist/assets/index-Bx3k2p9a.js  185.20 kB\n✓ built in 1.12s';
          if ((m = /^npm create vite(@latest)?\s+(\S+)/.exec(cmd))) return 'Scaffolding project in ./' + m[2] + '...\nDone. Now run:\n  cd ' + m[2] + '\n  npm install\n  npm run dev';
          if (/^npm create vite/.test(cmd)) return 'Scaffolding project...\nDone. Now run:\n  npm install\n  npm run dev';
          if ((m = /^npm install\s+(\S+)/.exec(cmd))) return 'added 1 package in 2s\n  + ' + m[1];
          if (/^npm install/.test(cmd)) return 'added 85 packages in 4s';
          if (/^flutter --version/.test(cmd)) return 'Flutter 3.27.0 • channel stable\nFramework • revision 8495dee1fd\nTools • Dart 3.6.0';
          if (/^flutter doctor/.test(cmd)) return '[✓] Flutter (Channel stable, 3.27.0, on Microsoft Windows)\n[✓] Android toolchain - develop for Android devices (Android SDK 35.0.0)\n[✓] Chrome - develop for the web\n[✓] VS Code (version 1.96)\n• No issues found!';
          if ((m = /^flutter create\s+(\S+)/.exec(cmd))) return 'Creating project ' + m[1] + '...\nResolving dependencies in `' + m[1] + '`...\nGot dependencies in `' + m[1] + '`.\nWrote 129 files.\n\nAll done!\nIn order to run your application, type:\n  $ cd ' + m[1] + '\n  $ flutter run';
          if (/^flutter run/.test(cmd)) return 'Launching lib/main.dart on Chrome in debug mode...\nWaiting for connection from debug service on Chrome...             12.4s\n\nFlutter run key commands.\nr Hot reload. 🔥🔥🔥\nR Hot restart.\nq Quit (terminate the application on the device).';
          if ((m = /^flutter pub add\s+(\S+)/.exec(cmd))) return 'Resolving dependencies...\n+ ' + m[1] + ' 1.2.0\nChanged 1 dependency!';
          if (/^flutter pub get/.test(cmd)) return 'Resolving dependencies...\nGot dependencies!';
          if (/^flutter build apk/.test(cmd)) return 'Running Gradle task \'assembleRelease\'...                      42.3s\n✓ Built build/app/outputs/flutter-apk/app-release.apk (18.2 MB)';
          if (/^dart --version/.test(cmd)) return 'Dart SDK version: 3.6.0 (stable) on "windows_x64"';
          if ((m = /^dart create\s+(\S+)/.exec(cmd))) return 'Creating ' + m[1] + ' using template console...\n  ' + m[1] + '/bin/' + m[1] + '.dart\n  ' + m[1] + '/pubspec.yaml\nCreated project ' + m[1] + '! In order to run, type:\n  cd ' + m[1] + '\n  dart run';
          if (/^dart run/.test(cmd)) return 'Building package executable...\nHello world!';
          return '';
        }

        function shellTerminalDoc(code) {
          var html = '';
          var vars = {};
          code.split('\n').forEach(function (raw) {
            var line = raw.replace(/\s+$/, '');
            if (!line.trim()) return;
            var t = line.trim();
            if (t.charAt(0) === '#' || t.indexOf('//') === 0) {
              html += '<div style="color:#6e7681;font-style:italic">' + esc(line) + '</div>';
              return;
            }
            var am = /^(export\s+)?([A-Za-z_][A-Za-z0-9_]*)=([\s\S]*)$/.exec(t);
            if (am) {
              vars[am[2]] = expandShell(stripShellQuotes(am[3]), vars);
              html += '<div style="color:#8b949e">' + esc(line) + '</div>';
              return;
            }
            if (/^(if|then|else|elif|fi|for|do|done|while|until|case|esac|select|function)\b/.test(t) || /\{\s*$/.test(t) || t === '}' || /^set\s+-[a-z]+/.test(t) || /^umask\b/.test(t)) {
              var fm = /^for\s+(\w+)\s+in\s+([^;]+);?\s*do/.exec(t);
              if (fm) { var items = fm[2].trim().split(/\s+/); if (items.length) vars[fm[1]] = items[0]; }
              html += '<div style="color:#8b949e">' + esc(line) + '</div>';
              return;
            }
            html += '<div><span style="color:#3fb950;font-weight:bold">$</span> ' + esc(line) + '</div>';
            var out = shellSampleOutput(t, vars) || gitSampleOutput(t);
            if (out) html += '<div style="color:#8b949e">' + esc(out) + '</div>';
            if (/^read\s/.test(t)) { var toks = t.split(/\s+/); vars[toks[toks.length - 1]] = 'Aye'; }
          });
          if (!html) html = '<div style="color:#8b949e">Command တွေ ရေးပြီး Run နှိပ်ပါ</div>';
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.75 monospace;padding:12px 14px;white-space:pre-wrap;word-break:break-word">' +
            '<div style="color:#6e7681;margin-bottom:8px">TERMINAL · နမူနာ output (simulation) — တကယ့် terminal မှာ ကိုယ်တိုင် စမ်းကြည့်ပါ</div>' +
            html + HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- Laravel lessons: route simulation ----------
           Parses Route:: lines and shows what each URL would do. */
        function laravelRouteDoc(code) {
          var rows = [];
          function respFor(tail) {
            var m;
            if ((m = /return\s+["']([^"']*)["']/.exec(tail))) return 'ပြန်စာ: "' + m[1] + '"';
            if ((m = /view\(\s*["']([^"']+)["']/.exec(tail))) return 'View: ' + m[1] + '.blade.php ကို ပြပေးမည်';
            if ((m = /\[\s*(\w+)::class\s*,\s*["'](\w+)["']/.exec(tail))) return m[1] + '@' + m[2] + ' method ကို ခေါ်မည်';
            if (/redirect\(/.test(tail)) return 'Redirect ပြန်ပို့မည်';
            return 'Controller / closure ကို ခေါ်မည်';
          }
          var re = /Route::(get|post|put|patch|delete|view|resource|apiResource)\s*\(\s*['"]([^'"]+)['"]/g, mm;
          while ((mm = re.exec(code))) {
            var method = mm[1], path = mm[2];
            var tail = code.slice(mm.index, mm.index + 300);
            if (method === 'resource' || method === 'apiResource') {
              var base = (method === 'apiResource' ? '/api/' : '/') + path.replace(/^\//, '');
              rows.push(['GET', base, 'index — စာရင်း ပြမည်']);
              if (method === 'resource') rows.push(['GET', base + '/create', 'create — အသစ်ထည့်ရန် form ပြမည်']);
              rows.push(['POST', base, 'store — အသစ် သိမ်းမည်']);
              rows.push(['GET', base + '/{id}', 'show — တစ်ခု အသေးစိတ် ပြမည်']);
              if (method === 'resource') rows.push(['GET', base + '/{id}/edit', 'edit — ပြင်ရန် form ပြမည်']);
              rows.push(['PUT/PATCH', base + '/{id}', 'update — ပြင်ဆင် သိမ်းမည်']);
              rows.push(['DELETE', base + '/{id}', 'destroy — ဖျက်မည်']);
            } else if (method === 'view') {
              var vm = /,\s*["']([^"']+)["']/.exec(tail);
              rows.push(['GET', path, 'View: ' + (vm ? vm[1] : path.replace(/\//g, '.')) + '.blade.php ကို ပြပေးမည်']);
            } else {
              rows.push([method.toUpperCase(), path, respFor(tail)]);
            }
          }
          var html;
          if (!rows.length) {
            html = '<div style="color:#8b949e">Route:: နဲ့ စတဲ့ route မတွေ့ပါ — routes/web.php ပုံစံ code ရေးပြီး Run ကြည့်ပါ</div>';
          } else {
            html = rows.map(function (r) {
              var color = r[0] === 'GET' ? '#3fb950' : r[0] === 'POST' ? '#d29922' : r[0] === 'DELETE' ? '#f85149' : '#58a6ff';
              return '<div style="display:flex;gap:10px;padding:7px 0;border-bottom:1px solid #21262d;flex-wrap:wrap"><span style="color:' + color + ';font-weight:bold;min-width:78px">' + esc(r[0]) + '</span><span style="min-width:180px">' + esc(r[1]) + '</span><span style="color:#8b949e">' + esc(r[2]) + '</span></div>';
            }).join('');
          }
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.7 monospace;padding:12px 14px;word-break:break-word">' +
            '<div style="color:#6e7681;margin-bottom:6px">ROUTES · Laravel route simulation — php artisan serve နဲ့ browser မှာ တကယ် စမ်းကြည့်ပါ</div>' +
            html + HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- REST API lessons: simulated API server ----------
           Parses "METHOD /path" request examples (or curl) and answers from a
           small sample database, with real status codes and error shapes. */
        var API_SAMPLE = {
          products: [
            { id: 1, name: 'Laptop', price: 1500000, stock: 12 },
            { id: 2, name: 'Wireless Mouse', price: 35000, stock: 40 },
            { id: 3, name: 'Mechanical Keyboard', price: 85000, stock: 25 }
          ],
          users: [
            { id: 1, name: 'Aung Aung', email: 'aung@example.com' },
            { id: 2, name: 'May Thazin', email: 'may@example.com' }
          ],
          posts: [
            { id: 1, title: 'Laravel စတင်နည်း', user_id: 1 },
            { id: 2, title: 'API ဆိုတာ ဘာလဲ', user_id: 2 }
          ],
          categories: [
            { id: 1, name: 'Electronics' },
            { id: 2, name: 'Books' }
          ]
        };

        function apiRespond(method, rawPath, headers, bodyText) {
          var path = rawPath.split('?')[0].replace(/\/+$/, '') || '/';
          var seg = path.split('/').filter(function (s) { return s !== ''; });
          var body = null, bodyErr = false;
          if (bodyText) { try { body = JSON.parse(bodyText); } catch (e) { bodyErr = true; } }
          if (bodyErr && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            return { status: 400, statusText: 'Bad Request', obj: { message: 'Invalid JSON body.' } };
          }
          if (seg[0] !== 'api' || seg.length < 2) {
            return { status: 404, statusText: 'Not Found', obj: { message: 'Not Found — /api/... ပုံစံ path သုံးပါ' } };
          }
          var resource = seg[1];
          var id = seg[2] !== undefined ? parseInt(seg[2], 10) : null;
          if (resource === 'login' && method === 'POST') {
            if (body && body.email && body.password) {
              return { status: 200, statusText: 'OK', obj: { message: 'Login successful', token: '1|f8K2xQ9sampleSanctumToken7dPz', user: API_SAMPLE.users[0] } };
            }
            return { status: 401, statusText: 'Unauthorized', obj: { message: 'Invalid credentials' } };
          }
          if (resource === 'register' && method === 'POST') {
            var errs = {};
            ['name', 'email', 'password'].forEach(function (f) { if (!body || !body[f]) errs[f] = ['The ' + f + ' field is required.']; });
            if (Object.keys(errs).length) return { status: 422, statusText: 'Unprocessable Entity', obj: { message: 'The given data was invalid.', errors: errs } };
            return { status: 201, statusText: 'Created', obj: { id: 3, name: body.name, email: body.email } };
          }
          if (resource === 'user' && method === 'GET') {
            var auth = headers['authorization'] || '';
            if (/^Bearer\s+\S+/.test(auth)) return { status: 200, statusText: 'OK', obj: API_SAMPLE.users[0] };
            return { status: 401, statusText: 'Unauthorized', obj: { message: 'Unauthenticated.' } };
          }
          var table = API_SAMPLE[resource];
          if (!table) return { status: 404, statusText: 'Not Found', obj: { message: 'Not Found' } };
          var item = null, i;
          if (id !== null) { for (i = 0; i < table.length; i++) if (table[i].id === id) item = table[i]; }
          if (method === 'GET' && id === null) return { status: 200, statusText: 'OK', obj: table };
          if (method === 'GET') return item ? { status: 200, statusText: 'OK', obj: item } : { status: 404, statusText: 'Not Found', obj: { message: 'Not Found' } };
          if (method === 'POST' && id === null) {
            var required = resource === 'products' ? ['name', 'price'] : resource === 'posts' ? ['title'] : resource === 'users' ? ['name', 'email'] : ['name'];
            var errs2 = {};
            required.forEach(function (f) { if (!body || body[f] === undefined || body[f] === '') errs2[f] = ['The ' + f + ' field is required.']; });
            if (Object.keys(errs2).length) return { status: 422, statusText: 'Unprocessable Entity', obj: { message: 'The given data was invalid.', errors: errs2 } };
            var ordered = { id: table.length + 1 };
            Object.keys(body).forEach(function (k) { ordered[k] = body[k]; });
            ordered.created_at = '2026-01-05T10:30:00.000000Z';
            return { status: 201, statusText: 'Created', obj: ordered };
          }
          if ((method === 'PUT' || method === 'PATCH') && id !== null) {
            if (!item) return { status: 404, statusText: 'Not Found', obj: { message: 'Not Found' } };
            var updated = {};
            Object.keys(item).forEach(function (k) { updated[k] = item[k]; });
            if (body) Object.keys(body).forEach(function (k) { updated[k] = body[k]; });
            return { status: 200, statusText: 'OK', obj: updated };
          }
          if (method === 'DELETE' && id !== null) {
            if (!item) return { status: 404, statusText: 'Not Found', obj: { message: 'Not Found' } };
            return { status: 200, statusText: 'OK', obj: { message: 'Deleted successfully.' } };
          }
          return { status: 405, statusText: 'Method Not Allowed', obj: { message: 'Method Not Allowed' } };
        }

        function apiDocShell(reqLine, status, statusText, obj) {
          var color = status && status.charAt(0) === '2' ? '#3fb950' : status && status.charAt(0) === '4' ? '#d29922' : '#8b949e';
          var statusHtml = status
            ? '<div style="margin-top:8px"><span style="color:' + color + ';font-weight:bold">' + esc(status) + '</span> <span style="color:#8b949e">' + esc(statusText) + '</span></div>'
            : '<div style="margin-top:8px;color:#8b949e">' + esc(statusText) + '</div>';
          var bodyHtml = obj === null || obj === undefined ? '' : '<pre style="margin:8px 0 0;white-space:pre-wrap;word-break:break-word;color:#d1fae5">' + esc(JSON.stringify(obj, null, 2)) + '</pre>';
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.7 monospace;padding:12px 14px;word-break:break-word">' +
            '<div style="color:#6e7681">API SIMULATION · နမူနာ data နဲ့ ဖြေပေးထားတာ — တကယ့် Laravel API မှာ ကိုယ်တိုင် စမ်းကြည့်ပါ</div>' +
            '<div style="margin-top:8px;color:#58a6ff;font-weight:bold">' + esc(reqLine) + '</div>' +
            statusHtml + bodyHtml + HEIGHT_PRELUDE + '</body></html>';
        }

        function apiOutputDoc(code) {
          var text = code.replace(/\r/g, '');
          var trimmed = text.trim();
          if (!trimmed) return apiDocShell('—', '', 'Request တစ်ကြောင်း ရေးပြီး Run နှိပ်ပါ — ဥပမာ GET /api/products', null);
          if (trimmed.charAt(0) === '{' || trimmed.charAt(0) === '[') {
            try {
              var parsed = JSON.parse(trimmed);
              return apiDocShell('JSON စစ်ဆေးခြင်း', '200', 'Valid JSON — ပုံစံ မှန်ပါတယ်', parsed);
            } catch (e) {
              return apiDocShell('JSON စစ်ဆေးခြင်း', '400', 'Invalid JSON — ' + e.message, null);
            }
          }
          var method = 'GET', path = '/', headers = {}, bodyText = '';
          if (/(^|\n)\s*curl\s/.test(text)) {
            var urlM = /(https?:\/\/[^\s'"\\]+)/.exec(trimmed);
            if (urlM) {
              try { var u = new URL(urlM[1]); path = u.pathname + (u.search || ''); } catch (e2) { path = urlM[1]; }
            }
            var xm = /-X\s+(\w+)/.exec(trimmed);
            if (xm) method = xm[1].toUpperCase();
            var dm = /-d\s+'([^']*)'/.exec(trimmed) || /-d\s+"([^"]*)"/.exec(trimmed);
            if (dm) { bodyText = dm[1]; if (!xm) method = 'POST'; }
            var hm = /-H\s+'([^']+)'/g, hh;
            while ((hh = hm.exec(trimmed))) { var p = hh[1].split(':'); if (p.length > 1) headers[p[0].trim().toLowerCase()] = p.slice(1).join(':').trim(); }
            var hm2 = /-H\s+"([^"]+)"/g;
            while ((hh = hm2.exec(trimmed))) { var p2 = hh[1].split(':'); if (p2.length > 1) headers[p2[0].trim().toLowerCase()] = p2.slice(1).join(':').trim(); }
          } else {
            var lines = text.split('\n');
            var firstIdx = -1, i;
            for (i = 0; i < lines.length; i++) { if (lines[i].trim()) { firstIdx = i; break; } }
            var fm = /^(GET|POST|PUT|PATCH|DELETE)\s+(\S+)/i.exec(lines[firstIdx].trim());
            if (!fm) return apiDocShell(lines[firstIdx].trim(), '', 'ပထမစာကြောင်းက "GET /api/products" ပုံစံ ဖြစ်ရပါမယ်', null);
            method = fm[1].toUpperCase(); path = fm[2];
            var bodyLines = [], inBody = false;
            for (var j = firstIdx + 1; j < lines.length; j++) {
              var ln = lines[j];
              if (!inBody && /^[\w-]+\s*:/.test(ln.trim()) && ln.trim().charAt(0) !== '{') {
                var hp = ln.split(':');
                headers[hp[0].trim().toLowerCase()] = hp.slice(1).join(':').trim();
              } else { inBody = true; bodyLines.push(ln); }
            }
            bodyText = bodyLines.join('\n').trim();
          }
          var res = apiRespond(method, path, headers, bodyText);
          return apiDocShell(method + ' ' + path, String(res.status), res.statusText, res.obj);
        }

        /* ---------- React lessons: live JSX runner ----------
           React cannot be pre-built here, so examples run in the preview with
           React 18 UMD + Babel standalone from CDN (internet needed). The code
           is placed in a text/babel script and rendered into #root. */
        function reactDoc(code) {
          return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"><\/script>' +
            '<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"><\/script>' +
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.4/babel.min.js"><\/script>' +
            '<style>body{font-family:sans-serif;margin:10px;color:#1c2420}button{cursor:pointer;font:inherit}input,select,textarea{font:inherit;padding:6px 8px}img{max-width:100%}</style></head>' +
            '<body><div id="root"></div>' + JS_CONSOLE_PRELUDE +
            '<script type="text/babel" data-presets="env,react">\n' + code + '\n<\/script>' +
            HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- Dart & Flutter lessons: code note ----------
           Dart/Flutter cannot run in a browser. Non-terminal examples show this
           panel instead of pretending to execute; terminal examples use the
           shell simulation like the Git/Laravel lessons. */
        function flutterNoteDoc(isDart) {
          var head = isDart
            ? 'DART · Dart code ကို browser မှာ run လို့မရပါ'
            : 'FLUTTER · Dart code ကို browser မှာ run လို့မရပါ';
          var body = isDart
            ? 'ဒီ code ကို <span style="color:#3fb950">dartpad.dev</span> မှာ ကူးထည့် run နိုင်သလို၊ ကိုယ့် computer မှာ Dart console project ဆောက်ပြီး <span style="color:#3fb950">dart run</span> နဲ့လည်း စမ်းနိုင်ပါတယ်။'
            : 'ဒီ code ကို VS Code / Android Studio မှာ ကူးထည့်ပြီး <span style="color:#3fb950">flutter run</span> နဲ့ emulator သို့ ဖုန်းပေါ်မှာ စမ်းပါ။ ပြင်ထားတဲ့ code အတိုင်း app က hot reload နဲ့ ချက်ချင်း ပြောင်းလဲတာ မြင်ရပါလိမ့်မယ်။';
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.75 monospace;padding:12px 14px;word-break:break-word">' +
            '<div style="color:#6e7681">' + head + '</div>' +
            '<div style="margin-top:8px">' + body + '</div>' +
            HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- Java / C / Go / Rust / C# / DSA / Docker / Node.js / Express / WordPress / Cloud / Django / Shell / AWS / SEO / Cyber Security lessons: no browser runner ----------
           These languages cannot run in the browser, so Run shows a note telling
           learners the local command instead of fake output. Do not invent a
           runtime here; the lesson articles carry the same hint. */
        function localRunDoc(group) {
          var info = {
            java: ['JAVA', 'javac Main.java && java Main'],
            c: ['C', 'gcc main.c -o main && ./main'],
            go: ['GO', 'go run main.go'],
            rust: ['RUST', 'cargo run'],
            csharp: ['C#', 'dotnet run'],
            dsa: ['DSA', 'node solution.js'],
            docker: ['DOCKER', 'docker build -t app . && docker run app'],
            nodejs: ['NODEJS', 'node app.js'],
            express: ['EXPRESS', 'npm start'],
            wordpress: ['WORDPRESS', 'php -S localhost:8000'],
            cloud: ['CLOUD', '', 'ဒီ lesson က cloud console မှာ လုပ်ရမယ့် အဆင့်တွေ ဖြစ်လို့ ကိုယ့် cloud account ရဲ့ console မှာ လုပ်ပါ။'],
            django: ['DJANGO', 'python manage.py runserver'],
            shell: ['SHELL', 'bash script.sh'],
            aws: ['AWS', 'aws s3 ls'],
            seo: ['SEO', '', 'ဒီ lesson မှာ run စရာ code မဟုတ်ဘဲ SEO checklist ဖြစ်လို့ ကိုယ့် website မှာ စစ်ပါ။'],
            cybersecurity: ['CYBERSECURITY', '', 'ဒီ lesson က လုံခြုံတဲ့ lab မှာ လက်တွေ့စမ်းရမယ့် အကြောင်းဖြစ်လို့ ကိုယ့် computer ရဲ့ သီးသန့် lab environment မှာ စမ်းပါ။']
          }[group] || ['CODE', ''];
          return '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
            '<body style="margin:0;background:#0d1117;color:#e6edf3;font:13px/1.75 monospace;padding:12px 14px;word-break:break-word">' +
            '<div style="color:#6e7681">' + info[0] + ' · ဒီ code ကို browser မှာ run လို့မရပါ</div>' +
            (info[2] ? '<div style="margin-top:8px">' + info[2] + '</div>' : '<div style="margin-top:8px">ဒီ code ကို ကိုယ့် computer မှာ <span style="color:#3fb950">' + info[1] + '</span> နဲ့ run ပါ။</div>') +
            HEIGHT_PRELUDE + '</body></html>';
        }

        function codeNoteDoc(code, label, note) {
          return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<style>body{margin:0;background:#0d1117;color:#e6edf3;font:13px/1.7 ui-monospace,monospace;padding:12px 14px} .label{color:#8b949e;font-size:11px;letter-spacing:.08em} .note{color:#9db0a6;margin:8px 0 12px} pre{margin:0;white-space:pre-wrap;word-break:break-word;color:#d2f4df}</style></head>' +
            '<body><div class="label">' + esc(label || 'CODE EXAMPLE') + ' · PREVIEW</div>' +
            '<div class="note">' + esc(note || 'ဒီ code ကို သက်ဆိုင်ရာ project environment မှာ စမ်းပါ။') + '</div>' +
            '<pre><code>' + esc(code) + '</code></pre>' + HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- Python lessons: browser Python runtime ----------
           Python is not a browser language, so load Pyodide in the isolated
           preview and mirror stdout/stderr into the same visible output panel
           used by JavaScript examples. The fallback message is intentional:
           it tells learners when a CDN/runtime cannot be reached.
           Version note: use Pyodide 0.26.4, not 0.26.2. The preview iframe is
           sandboxed (allow-scripts, no allow-same-origin), and 0.26.2 crashed
           on load there: its environment check read window.sessionStorage,
           which throws a SecurityError in a sandboxed iframe without
           allow-same-origin, so loadPyodide was never defined and every Run
           showed "Python runtime ကို မဖွင့်နိုင်ပါ". Fixed upstream in 0.26.4
           (pyodide/pyodide#5186), which checks "sessionStorage" in window
           instead. Do not downgrade below 0.26.4, and do not "fix" this by
           adding allow-same-origin to the iframe: that would let user-edited
           code reach the parent page. */
        function pythonDoc(code, prelude, rewriteRelative, label) {
          var safeCode = JSON.stringify(code).replace(/<\//g, '<\\/');
          var safePrelude = prelude ? JSON.stringify(prelude).replace(/<\//g, '<\\/') : '""';
          return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<script src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js"><\/script>' +
            '<style>body{margin:0;background:#0d1117;color:#e6edf3;font:13px/1.7 ui-monospace,monospace;padding:12px 14px;word-break:break-word}.label{color:#8b949e;font-size:11px;letter-spacing:.08em}.out{margin-top:8px;color:#d2f4df;white-space:pre-wrap}.err{margin-top:8px;color:#f87171;white-space:pre-wrap}</style></head>' +
            '<body><div class="label">' + (label || 'PYTHON 3') + ' · OUTPUT</div><div id="status" class="out">Python runtime ကို ဖွင့်နေပါတယ်…</div><div id="output" class="out"></div>' +
            '<script>\n' +
            'var source=' + safeCode + ';\n' +
            'var prelude=' + safePrelude + ';\n' +
            'var rewriteRelative=' + (rewriteRelative ? 'true' : 'false') + ';\n' +
            'if (rewriteRelative) {\n' +
            'source = source.replace(/^from \\.(\\w+) import (.+)$/gm, function (m, mod, names) { return names.split(",").map(function (n) { var p = n.trim().split(/\\s+as\\s+/); return (p[1] || p[0]) + " = _DJAny"; }).join("\\n"); });\n' +
            'source = source.replace(/^from \\. import (.+)$/gm, function (m, names) { return names.split(",").map(function (n) { var p = n.trim().split(/\\s+as\\s+/); return (p[1] || p[0]) + " = _DJAny()"; }).join("\\n"); });\n' +
            '}\n' +
            'var statusBox=document.getElementById("status"), outputBox=document.getElementById("output");\n' +
            'function write(text, cls){var line=document.createElement("div");line.className=cls||"out";line.textContent=String(text);outputBox.appendChild(line);}\n' +
            '(async function(){try{if(typeof loadPyodide!=="function")throw new Error("Python runtime ကို မဖွင့်နိုင်ပါ။ အင်တာနက်ချိတ်ဆက်မှုကို စစ်ပါ။");' +
            'var py=await loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"});' +
            'py.setStdout({batched:function(text){write(text);}});py.setStderr({batched:function(text){write(text,"err");}});' +
            'statusBox.textContent="RUNNING…";await py.runPythonAsync("import builtins\\nbuiltins.input=lambda prompt=\\\"\\\": \\\"Aye\\\"\\n"+(prelude?prelude+"\\n":"")+source);' +
            'statusBox.textContent="✓ Python code အလုပ်လုပ်ပြီးပါပြီ";' +
            '}catch(error){statusBox.textContent="✗ Python error";write(error&&error.message?error.message:error,"err");}})();\n' +
            '<\/script>' + HEIGHT_PRELUDE + '</body></html>';
        }

        /* ---------- TypeScript lessons: transpile then execute ----------
           TypeScript's type syntax is removed with the official compiler in the
           preview. The emitted JavaScript then uses the existing console panel,
           so learners get the same edit → Run → output flow as JavaScript. */
        function typeScriptDoc(code) {
          var safeCode = JSON.stringify(code).replace(/<\//g, '<\\/');
          return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.2/lib/typescript.js"><\/script>' +
            '<style>body{font-family:sans-serif;margin:10px;color:#1c2420} .ts-status{font:12px ui-monospace,monospace;color:#52665b;margin:8px 0}</style></head>' +
            '<body><div class="ts-status" id="ts-status">TypeScript compile လုပ်နေပါတယ်…</div>' + JS_CONSOLE_PRELUDE +
            '<script>\n' +
            'var source=' + safeCode + ';var statusBox=document.getElementById("ts-status");\n' +
            'try{if(!window.ts)throw new Error("TypeScript compiler ကို မဖွင့်နိုင်ပါ။ အင်တာနက်ချိတ်ဆက်မှုကို စစ်ပါ။");' +
            'var result=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.None,strict:true}});' +
            'statusBox.textContent="✓ TypeScript compile အောင်မြင်ပါပြီ";new Function(result.outputText)();' +
            '}catch(error){statusBox.textContent="✗ TypeScript error";if(window.console&&console.error)console.error(error&&error.message?error.message:error);}\n' +
            '<\/script>' + HEIGHT_PRELUDE + '</body></html>';
        }

        function runExample(ex) {
          var code = ex.querySelector('.code-edit').value;
          var iframe = ex.querySelector('iframe.preview');
          var page = ex.closest ? ex.closest('.page') : null;
          var isTailwind = page && page.dataset.group === 'tailwind';
          var isJS = page && page.dataset.group === 'js';
          var isGit = page && page.dataset.group === 'git';
          var isPHP = page && page.dataset.group === 'php';
          var isMySQL = page && page.dataset.group === 'mysql';
          var isLaravel = page && page.dataset.group === 'laravel';
          var isAPI = page && page.dataset.group === 'api';
          var isReact = page && page.dataset.group === 'react';
          var isDart = page && page.dataset.group === 'dart';
          var isFlutter = page && page.dataset.group === 'flutter';
          var isPython = page && page.dataset.group === 'python';
          var isTypeScript = page && page.dataset.group === 'typescript';
          var isJava = page && page.dataset.group === 'java';
          var isC = page && page.dataset.group === 'c';
          var isGo = page && page.dataset.group === 'go';
          var isRust = page && page.dataset.group === 'rust';
          var isCSharp = page && page.dataset.group === 'csharp';
          var isDsa = page && page.dataset.group === 'dsa';
          var isDocker = page && page.dataset.group === 'docker';
          var isNodejs = page && page.dataset.group === 'nodejs';
          var isExpress = page && page.dataset.group === 'express';
          var isWordpress = page && page.dataset.group === 'wordpress';
          var isCloud = page && page.dataset.group === 'cloud';
          var isDjango = page && page.dataset.group === 'django';
          var isShell = page && page.dataset.group === 'shell';
          var isAws = page && page.dataset.group === 'aws';
          var isSeo = page && page.dataset.group === 'seo';
          var isCyberSecurity = page && page.dataset.group === 'cybersecurity';
          var group = page ? page.dataset.group : '';
          if ((isLaravel || isAPI) && /Route::/.test(code)) {
            iframe.srcdoc = laravelRouteDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if ((isLaravel || isAPI || isReact || isDart || isFlutter) && /(^|\n)\s*(php artisan|composer|cd|cp|npm|npx|flutter|dart|git)\b/.test(code)) {
            iframe.srcdoc = shellTerminalDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isReact) {
            iframe.srcdoc = reactDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 400);
              setTimeout(function () { autoHeight(iframe); }, 1200);
            };
            return;
          }
          if (isDart || isFlutter) {
            iframe.srcdoc = flutterNoteDoc(isDart);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isPython) {
            iframe.srcdoc = pythonDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 500);
              setTimeout(function () { autoHeight(iframe); }, 1500);
            };
            return;
          }
          if (isTypeScript) {
            iframe.srcdoc = typeScriptDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 400);
              setTimeout(function () { autoHeight(iframe); }, 1200);
            };
            return;
          }
          if (isDsa) {
            iframe.srcdoc = jsRunDoc(code, false);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
              setTimeout(function () { autoHeight(iframe); }, 1200);
            };
            return;
          }
          if (isNodejs || isExpress) {
            iframe.srcdoc = jsRunDoc(code, true);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
              setTimeout(function () { autoHeight(iframe); }, 1200);
            };
            return;
          }
          if (isWordpress) {
            if (code.indexOf('<?php') < 0 && code.indexOf('<?=') < 0) {
              if (/^\s*</.test(code) && /<(h1|h2|h3|p|div|img|a\s|ul|ol|li|form|button|section|article|span|table)[\s>]/.test(code)) {
                iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;margin:10px">' + code + HEIGHT_PRELUDE + '</body></html>';
              } else {
                iframe.srcdoc = codeNoteDoc(code, 'WordPress', 'ဒီ lesson က WordPress shortcode / block / .htaccess နမူနာ ဖြစ်လို့ ကိုယ့် WordPress site မှာ စမ်းပါ။');
              }
            } else {
              iframe.srcdoc = phpOutputDoc(code);
            }
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isDjango || isCyberSecurity) {
            var firstLine = firstCodeLine(code);
            if (isDjango && /^(pip(\s|$)|python(\s|$)|python3(\s|$)|django-admin\b|source(\s|$)|cd(\s|$)|mkdir(\s|$)|code(\s|$)|git(\s|$)|npm(\s|$)|node(\s|$))/.test(firstLine)) {
              iframe.srcdoc = shellTerminalDoc(code);
            } else if (isDjango && /^(\{%|\{\{)/.test(firstLine)) {
              iframe.srcdoc = codeNoteDoc(code, 'DJANGO TEMPLATE', 'ဒီ lesson က Django template နမူနာ ဖြစ်လို့ ကိုယ့် Django project ရဲ့ template ဖိုင်မှာ စမ်းပါ။');
            } else if (isDjango && /^</.test(firstLine)) {
              iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;margin:10px">' + code + HEIGHT_PRELUDE + '</body></html>';
            } else if (isCyberSecurity && (/^(function\s|const\s|let\s|var\s)/.test(firstLine) || /(document|window)\./.test(code))) {
              iframe.srcdoc = jsRunDoc(code, false);
            } else if (!firstLine) {
              iframe.srcdoc = codeNoteDoc(code, isDjango ? 'DJANGO' : 'CYBERSECURITY', 'ဒီ lesson မှာ run စရာ code မဟုတ်ဘဲ မှတ်စု / checklist ဖြစ်ပါတယ်။');
            } else {
              iframe.srcdoc = pythonDoc(code, isDjango ? DJANGO_PRELUDE : CYBER_PRELUDE, isDjango, isDjango ? 'DJANGO' : 'CYBERSECURITY');
            }
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 500);
              setTimeout(function () { autoHeight(iframe); }, 1500);
            };
            return;
          }
          if (isShell || isDocker || isCloud || isAws) {
            if ((isDocker && isDockerfileOrConfig(code)) || ((isAws || isDocker) && code.trim().charAt(0) === '{') || (isCloud && !firstCodeLine(code))) {
              iframe.srcdoc = codeNoteDoc(code, group.toUpperCase(), 'ဒီ lesson က config / document နမူနာ ဖြစ်လို့ သက်ဆိုင်ရာ project မှာ စမ်းပါ။');
            } else if ((isCloud || isAws) && /lambda_handler/.test(code)) {
              iframe.srcdoc = pythonDoc(code);
            } else {
              iframe.srcdoc = shellTerminalDoc(code);
            }
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isSeo) {
            if (/<(h1|h2|h3|p|div|img|a\s|ul|ol|li|form|button|section|article|span|table|video)[\s>]/.test(code)) {
              iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;margin:10px">' + code + HEIGHT_PRELUDE + '</body></html>';
            } else {
              iframe.srcdoc = codeNoteDoc(code, 'SEO', 'ဒီ lesson မှာ SEO checklist / မှတ်စု ဖြစ်လို့ ကိုယ့် website မှာ စစ်ပါ။');
            }
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isJava || isC || isGo || isRust || isCSharp) {
            iframe.srcdoc = localRunDoc(group);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isLaravel || group === 'security' || group === 'deploy' || group === 'ci' || group === 'quality') {
            iframe.srcdoc = codeNoteDoc(code, ex.dataset.language, ex.querySelector('.hint').textContent);
            iframe.onload = function () { autoHeight(iframe); };
            return;
          }
          if (isMySQL && /(WITH\s+RECURSIVE|CREATE\s+(PROCEDURE|FUNCTION|TRIGGER|EVENT)|OVER\s*\(|MATCH\s*\(|GENERATED\s+ALWAYS|EXPLAIN)/i.test(code)) {
            iframe.srcdoc = codeNoteDoc(code, 'MySQL', 'ဒီ syntax ကို preview မှာ дүр эсгэн ажиллуулахгүй. Өөрийн MySQL server မှာ version болон schema-тэй нь шалгаပါ.');
            iframe.onload = function () { autoHeight(iframe); };
            return;
          }
          if (isAPI && /(Idempotency-Key|If-Match|X-Signature|\/api\/webhooks|HTTP\/1\.1|openapi:|AbortController|Retry-After|Range:)/i.test(code)) {
            iframe.srcdoc = codeNoteDoc(code, 'HTTP Request', 'Preview нь header-ийн бүх policy-г хэрэгжүүлэхгүй. Энэ хэсгийг API server болон integration test дээр шалгаарай.');
            iframe.onload = function () { autoHeight(iframe); };
            return;
          }
          if (isAPI && !/fetch\s*\(/.test(code)) {
            iframe.srcdoc = apiOutputDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isPHP) {
            iframe.srcdoc = phpOutputDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isMySQL) {
            iframe.srcdoc = sqlOutputDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (isGit) {
            iframe.srcdoc = gitTerminalDoc(code);
            iframe.onload = function () {
              autoHeight(iframe);
              setTimeout(function () { autoHeight(iframe); }, 300);
            };
            return;
          }
          if (/<!doctype|<html[\s>]/i.test(code)) {
            iframe.srcdoc = /<\/body>/i.test(code)
              ? code.replace(/<\/body>/i, HEIGHT_PRELUDE + '</body>')
              : code + HEIGHT_PRELUDE;
          } else if (isTailwind && !/cdn\.tailwindcss\.com/.test(code)) {
            // Tailwind lessons: load the Play CDN inside the preview so utility classes work
            iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script src="https://cdn.tailwindcss.com"><\/script></head><body style="font-family:sans-serif;margin:10px">' + code + HEIGHT_PRELUDE + '</body></html>';
          } else if (isJS || isAPI) {
            iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;margin:10px">' + JS_CONSOLE_PRELUDE + code + HEIGHT_PRELUDE + '</body></html>';
          } else {
            iframe.srcdoc = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:sans-serif;margin:10px">' + code + HEIGHT_PRELUDE + '</body></html>';
          }
          iframe.onload = function () {
            autoHeight(iframe);
            if (isTailwind) {
              // Tailwind generates styles after load — measure again once it has applied
              setTimeout(function () { autoHeight(iframe); }, 350);
              setTimeout(function () { autoHeight(iframe); }, 900);
            }
            if (isJS || isAPI) {
              // Scripts may add content (console panel, lists) after first paint
              setTimeout(function () { autoHeight(iframe); }, 300);
            }
          };
        }

        /* ---------- Syntax highlighting ---------- */
        function esc(s) {
          return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        function tk(cls, txt) { return '<span class="tk-' + cls + '">' + esc(txt) + '</span>'; }

        function highlightCSSValue(raw) {
          var out = '', i = 0, n = raw.length, m;
          while (i < n) {
            var c = raw.charAt(i), rest = raw.slice(i);
            if (c === '"' || c === "'") {
              var j = i + 1;
              while (j < n && raw.charAt(j) !== c) { if (raw.charAt(j) === '\\') j++; j++; }
              j = Math.min(n, j + 1);
              out += tk('str', raw.slice(i, j)); i = j; continue;
            }
            if ((m = /^#[0-9a-fA-F]{3,8}\b/.exec(rest))) { out += tk('num', m[0]); i += m[0].length; continue; }
            if ((m = /^--[\w-]+/.exec(rest))) { out += tk('prop', m[0]); i += m[0].length; continue; }
            if ((m = /^-?\d*\.?\d+(px|rem|em|%|vh|vw|vmin|vmax|ms|s|fr|deg|pt|pc|ch|ex|cm|mm)?\b/.exec(rest))) { out += tk('num', m[0]); i += m[0].length; continue; }
            if ((m = /^!important\b/.exec(rest))) { out += tk('kw', m[0]); i += m[0].length; continue; }
            if ((m = /^var\(/.exec(rest))) { out += tk('kw', 'var') + tk('punc', '('); i += m[0].length; continue; }
            if ('(),'.indexOf(c) >= 0) { out += tk('punc', c); i++; continue; }
            out += esc(c); i++;
          }
          return out;
        }

        function highlightCSS(code) {
          var out = '', i = 0, n = code.length;
          var stack = ['sel'];
          var nextCtx = 'decl';
          function ctx() { return stack[stack.length - 1]; }
          while (i < n) {
            var c = code.charAt(i), rest = code.slice(i), m;
            if (c === '/' && code.charAt(i + 1) === '*') {
              var e = code.indexOf('*/', i + 2); e = e < 0 ? n : e + 2;
              out += tk('com', code.slice(i, e)); i = e; continue;
            }
            if (c === '"' || c === "'") {
              var j = i + 1;
              while (j < n && code.charAt(j) !== c) { if (code.charAt(j) === '\\') j++; j++; }
              j = Math.min(n, j + 1);
              out += tk('str', code.slice(i, j)); i = j; continue;
            }
            if (ctx() === 'sel') {
              if (c === '{') { out += tk('punc', '{'); stack.push(nextCtx); nextCtx = 'decl'; i++; continue; }
              if (c === '}') { out += tk('punc', '}'); if (stack.length > 1) stack.pop(); i++; continue; }
              if (c === ';') { out += tk('punc', ';'); i++; continue; }
              m = /^[^{};]+/.exec(rest);
              if (m) {
                var chunk = m[0];
                var trimmed = chunk.replace(/^\s+/, '');
                if (trimmed.charAt(0) === '@') {
                  var lead = chunk.slice(0, chunk.length - trimmed.length);
                  var wm = /^@[\w-]+/.exec(trimmed);
                  out += esc(lead) + tk('kw', wm[0]) + highlightCSSValue(trimmed.slice(wm[0].length));
                  nextCtx = 'sel';
                } else {
                  out += tk('sel', chunk);
                  nextCtx = 'decl';
                }
                i += chunk.length; continue;
              }
              out += esc(c); i++; continue;
            }
            // declaration context
            if (/\s/.test(c)) { out += esc(c); i++; continue; }
            if (c === '}') { out += tk('punc', '}'); if (stack.length > 1) stack.pop(); i++; continue; }
            if (c === ';') { out += tk('punc', ';'); i++; continue; }
            m = /^(--[\w-]+|-?[a-zA-Z_][\w-]*)/.exec(rest);
            if (m) {
              var k = i + m[0].length;
              while (k < n && /\s/.test(code.charAt(k))) k++;
              if (code.charAt(k) === ':') {
                out += tk('prop', m[0]) + esc(code.slice(i + m[0].length, k)) + tk('punc', ':');
                i = k + 1;
                var vstart = i, depth = 0;
                while (i < n) {
                  var vc = code.charAt(i);
                  if (vc === '"' || vc === "'") {
                    var q2 = vc; i++;
                    while (i < n && code.charAt(i) !== q2) { if (code.charAt(i) === '\\') i++; i++; }
                    i = Math.min(n, i + 1); continue;
                  }
                  if (vc === '(') depth++;
                  else if (vc === ')') depth--;
                  else if (depth === 0 && (vc === ';' || vc === '}')) break;
                  else if (vc === '/' && code.charAt(i + 1) === '*') break;
                  i++;
                }
                out += highlightCSSValue(code.slice(vstart, i));
                continue;
              }
              out += esc(m[0]); i += m[0].length; continue;
            }
            out += esc(c); i++;
          }
          return out;
        }

        var JS_KW = { 'var': 1, 'let': 1, 'const': 1, 'function': 1, 'return': 1, 'if': 1, 'else': 1, 'for': 1, 'while': 1, 'do': 1, 'break': 1, 'continue': 1, 'new': 1, 'typeof': 1, 'instanceof': 1, 'in': 1, 'of': 1, 'switch': 1, 'case': 1, 'default': 1, 'try': 1, 'catch': 1, 'finally': 1, 'throw': 1, 'class': 1, 'extends': 1, 'this': 1, 'true': 1, 'false': 1, 'null': 1, 'undefined': 1, 'delete': 1, 'void': 1, 'async': 1, 'await': 1, 'static': 1, 'get': 1, 'set': 1, 'super': 1 };

        function highlightJS(code) {
          var out = '', i = 0, n = code.length, m;
          while (i < n) {
            var c = code.charAt(i), rest = code.slice(i);
            if (c === '/' && code.charAt(i + 1) === '/') {
              var e = code.indexOf('\n', i); e = e < 0 ? n : e;
              out += tk('com', code.slice(i, e)); i = e; continue;
            }
            if (c === '/' && code.charAt(i + 1) === '*') {
              var e2 = code.indexOf('*/', i + 2); e2 = e2 < 0 ? n : e2 + 2;
              out += tk('com', code.slice(i, e2)); i = e2; continue;
            }
            if (c === '"' || c === "'") {
              var j = i + 1;
              while (j < n && code.charAt(j) !== c && code.charAt(j) !== '\n') { if (code.charAt(j) === '\\') j++; j++; }
              j = Math.min(n, j + 1);
              out += tk('str', code.slice(i, j)); i = j; continue;
            }
            if (c === '`') {
              // Template literal: string parts stay str, ${...} is highlighted as JS
              var buf = '`', k = i + 1, closed = false;
              while (k < n) {
                var tc = code.charAt(k);
                if (tc === '\\') { buf += code.slice(k, k + 2); k += 2; continue; }
                if (tc === '`') { buf += '`'; k++; closed = true; break; }
                if (tc === '$' && code.charAt(k + 1) === '{') {
                  out += tk('str', buf); buf = '';
                  out += tk('punc', '${');
                  var depth = 1, s = k + 2, p = s;
                  while (p < n && depth > 0) {
                    var pc = code.charAt(p);
                    if (pc === '{') depth++;
                    else if (pc === '}') { depth--; if (depth === 0) break; }
                    else if (pc === '"' || pc === "'" || pc === '`') {
                      var q = pc; p++;
                      while (p < n && code.charAt(p) !== q) { if (code.charAt(p) === '\\') p++; p++; }
                    }
                    p++;
                  }
                  out += highlightJS(code.slice(s, p));
                  out += tk('punc', '}');
                  k = p + 1; continue;
                }
                buf += tc; k++;
              }
              if (buf) out += tk('str', buf);
              i = k; continue;
            }
            if ((m = /^0[xX][0-9a-fA-F]+|^\d[\d_]*(\.\d+)?([eE][+-]?\d+)?/.exec(rest))) {
              out += tk('num', m[0]); i += m[0].length; continue;
            }
            if ((m = /^[A-Za-z_$][\w$]*/.exec(rest))) {
              var word = m[0];
              if (JS_KW[word]) { out += tk('kw', word); }
              else {
                var p2 = i - 1;
                while (p2 >= 0 && /\s/.test(code.charAt(p2))) p2--;
                var q2 = i + word.length;
                while (q2 < n && /\s/.test(code.charAt(q2))) q2++;
                if (p2 >= 0 && code.charAt(p2) === '.') out += tk('prop', word);
                else if (q2 < n && code.charAt(q2) === '(') out += tk('fn', word);
                else out += esc(word);
              }
              i += word.length; continue;
            }
            if ('(){}[];,:.'.indexOf(c) >= 0) { out += tk('punc', c); i++; continue; }
            out += esc(c); i++;
          }
          return out;
        }

        var PY_KW = { 'and': 1, 'as': 1, 'assert': 1, 'async': 1, 'await': 1, 'break': 1, 'class': 1, 'continue': 1, 'def': 1, 'del': 1, 'elif': 1, 'else': 1, 'False': 1, 'finally': 1, 'for': 1, 'from': 1, 'global': 1, 'if': 1, 'import': 1, 'in': 1, 'is': 1, 'lambda': 1, 'None': 1, 'not': 1, 'or': 1, 'pass': 1, 'raise': 1, 'return': 1, 'True': 1, 'try': 1, 'while': 1, 'with': 1, 'yield': 1 };

        function highlightPython(code) {
          var out = '', i = 0, n = code.length, m;
          while (i < n) {
            var c = code.charAt(i), rest = code.slice(i);
            if (c === '#') { var e = code.indexOf('\n', i); e = e < 0 ? n : e; out += tk('com', code.slice(i, e)); i = e; continue; }
            if (c === '"' || c === "'") {
              var triple = code.substr(i, 3) === c + c + c, end = code.indexOf(triple ? c + c + c : c, i + (triple ? 3 : 1));
              end = end < 0 ? n : end + (triple ? 3 : 1); out += tk('str', code.slice(i, end)); i = end; continue;
            }
            if ((m = /^\d[\d_]*(\.\d+)?/.exec(rest))) { out += tk('num', m[0]); i += m[0].length; continue; }
            if ((m = /^[A-Za-z_]\w*/.exec(rest))) {
              var word = m[0], q = i + word.length; while (q < n && /\s/.test(code.charAt(q))) q++;
              out += PY_KW[word] ? tk('kw', word) : code.charAt(q) === '(' ? tk('fn', word) : esc(word); i += word.length; continue;
            }
            if ('(){}[]:,.'.indexOf(c) >= 0) { out += tk('punc', c); i++; continue; }
            out += esc(c); i++;
          }
          return out;
        }

        var PHP_KW = { 'echo': 1, 'print': 1, 'function': 1, 'return': 1, 'if': 1, 'elseif': 1, 'else': 1, 'foreach': 1, 'as': 1, 'for': 1, 'while': 1, 'do': 1, 'switch': 1, 'case': 1, 'default': 1, 'break': 1, 'continue': 1, 'class': 1, 'public': 1, 'private': 1, 'protected': 1, 'static': 1, 'new': 1, 'extends': 1, 'implements': 1, 'const': 1, 'try': 1, 'catch': 1, 'finally': 1, 'throw': 1, 'true': 1, 'false': 1, 'null': 1, 'and': 1, 'or': 1, 'instanceof': 1, 'use': 1, 'namespace': 1, 'require': 1, 'require_once': 1, 'include': 1, 'include_once': 1, 'global': 1, 'isset': 1, 'empty': 1, 'unset': 1, 'array': 1, 'abstract': 1, 'final': 1, 'var': 1 };

        function highlightPHP(code) {
          var out = '', i = 0, n = code.length, m;
          while (i < n) {
            var c = code.charAt(i), rest = code.slice(i);
            if (rest.indexOf('<?php') === 0) { out += tk('kw', '<?php'); i += 5; continue; }
            if (rest.indexOf('?>') === 0) { out += tk('kw', '?>'); i += 2; continue; }
            if ((c === '/' && code.charAt(i + 1) === '/') || c === '#') {
              var e = code.indexOf('\n', i); e = e < 0 ? n : e;
              out += tk('com', code.slice(i, e)); i = e; continue;
            }
            if (c === '/' && code.charAt(i + 1) === '*') {
              var e2 = code.indexOf('*/', i + 2); e2 = e2 < 0 ? n : e2 + 2;
              out += tk('com', code.slice(i, e2)); i = e2; continue;
            }
            if (c === "'") {
              var j = i + 1;
              while (j < n && code.charAt(j) !== "'") { if (code.charAt(j) === '\\') j++; j++; }
              j = Math.min(n, j + 1);
              out += tk('str', code.slice(i, j)); i = j; continue;
            }
            if (c === '"') {
              // Double-quoted string: $var interpolation highlighted as variable
              var buf = '"', k = i + 1;
              while (k < n) {
                var dc = code.charAt(k);
                if (dc === '\\') { buf += code.slice(k, k + 2); k += 2; continue; }
                if (dc === '"') { buf += '"'; k++; break; }
                if (dc === '$' && /[A-Za-z_{]/.test(code.charAt(k + 1))) {
                  out += tk('str', buf); buf = '';
                  var vm = /^\{\$[A-Za-z_]\w*\}|^\$[A-Za-z_]\w*/.exec(code.slice(k));
                  if (vm) { out += tk('var', vm[0]); k += vm[0].length; } else { out += tk('var', '$'); k++; }
                  continue;
                }
                buf += dc; k++;
              }
              if (buf) out += tk('str', buf);
              i = k; continue;
            }
            if ((m = /^\$[A-Za-z_]\w*/.exec(rest))) { out += tk('var', m[0]); i += m[0].length; continue; }
            if ((m = /^\d[\d_]*(\.\d+)?/.exec(rest))) { out += tk('num', m[0]); i += m[0].length; continue; }
            if ((m = /^[A-Za-z_]\w*/.exec(rest))) {
              var word = m[0], lw = word.toLowerCase();
              if (PHP_KW[lw]) out += tk('kw', word);
              else if (/^[A-Z_][A-Z0-9_]*$/.test(word)) out += tk('num', word);
              else {
                var q = i + word.length;
                while (q < n && /\s/.test(code.charAt(q))) q++;
                out += (code.charAt(q) === '(' || code.substr(q, 2) === '::') ? tk('fn', word) : esc(word);
              }
              i += word.length; continue;
            }
            if ('(){}[];,:.?'.indexOf(c) >= 0) { out += tk('punc', c); i++; continue; }
            out += esc(c); i++;
          }
          return out;
        }

        var SQL_KW = { 'SELECT': 1, 'FROM': 1, 'WHERE': 1, 'INSERT': 1, 'INTO': 1, 'VALUES': 1, 'UPDATE': 1, 'SET': 1, 'DELETE': 1, 'CREATE': 1, 'TABLE': 1, 'DATABASE': 1, 'PRIMARY': 1, 'KEY': 1, 'FOREIGN': 1, 'REFERENCES': 1, 'NOT': 1, 'NULL': 1, 'AUTO_INCREMENT': 1, 'UNIQUE': 1, 'DEFAULT': 1, 'ORDER': 1, 'BY': 1, 'GROUP': 1, 'HAVING': 1, 'LIMIT': 1, 'OFFSET': 1, 'JOIN': 1, 'INNER': 1, 'LEFT': 1, 'RIGHT': 1, 'FULL': 1, 'OUTER': 1, 'ON': 1, 'AS': 1, 'AND': 1, 'OR': 1, 'IN': 1, 'LIKE': 1, 'BETWEEN': 1, 'IS': 1, 'DISTINCT': 1, 'USE': 1, 'SHOW': 1, 'DESCRIBE': 1, 'DESC': 1, 'ASC': 1, 'ALTER': 1, 'DROP': 1, 'ADD': 1, 'COLUMN': 1, 'INDEX': 1, 'IF': 1, 'EXISTS': 1, 'INT': 1, 'BIGINT': 1, 'VARCHAR': 1, 'TEXT': 1, 'DECIMAL': 1, 'DATE': 1, 'DATETIME': 1, 'TIMESTAMP': 1, 'BOOLEAN': 1, 'TINYINT': 1, 'CHAR': 1, 'TRUNCATE': 1 };

        function highlightSQL(code) {
          var out = '', i = 0, n = code.length, m;
          while (i < n) {
            var c = code.charAt(i), rest = code.slice(i);
            if (c === '-' && code.charAt(i + 1) === '-' && (i + 2 >= n || /\s/.test(code.charAt(i + 2)))) {
              var e = code.indexOf('\n', i); e = e < 0 ? n : e;
              out += tk('com', code.slice(i, e)); i = e; continue;
            }
            if (c === '#') {
              var e1 = code.indexOf('\n', i); e1 = e1 < 0 ? n : e1;
              out += tk('com', code.slice(i, e1)); i = e1; continue;
            }
            if (c === '/' && code.charAt(i + 1) === '*') {
              var e2 = code.indexOf('*/', i + 2); e2 = e2 < 0 ? n : e2 + 2;
              out += tk('com', code.slice(i, e2)); i = e2; continue;
            }
            if (c === "'") {
              var j = i + 1;
              while (j < n) {
                if (code.charAt(j) === "'") { if (code.charAt(j + 1) === "'") { j += 2; continue; } j++; break; }
                j++;
              }
              j = Math.min(n, j);
              out += tk('str', code.slice(i, j)); i = j; continue;
            }
            if (c === '`') {
              var j2 = code.indexOf('`', i + 1); j2 = j2 < 0 ? n : j2 + 1;
              out += tk('attr', code.slice(i, j2)); i = j2; continue;
            }
            if ((m = /^\d+(\.\d+)?/.exec(rest))) { out += tk('num', m[0]); i += m[0].length; continue; }
            if ((m = /^[A-Za-z_][\w]*/.exec(rest))) {
              var word = m[0];
              if (SQL_KW[word.toUpperCase()]) out += tk('kw', word);
              else {
                var q = i + word.length;
                while (q < n && /\s/.test(code.charAt(q))) q++;
                out += code.charAt(q) === '(' ? tk('fn', word) : esc(word);
              }
              i += word.length; continue;
            }
            if ('(),;.*'.indexOf(c) >= 0) { out += tk('punc', c); i++; continue; }
            out += esc(c); i++;
          }
          return out;
        }

        function highlightHTML(code) {
          var out = '', i = 0, n = code.length;
          while (i < n) {
            if (code.slice(i, i + 4) === '<!--') {
              var e = code.indexOf('-->', i + 4); e = e < 0 ? n : e + 3;
              out += tk('com', code.slice(i, e)); i = e; continue;
            }
            var c = code.charAt(i);
            if (c === '<' && /[a-zA-Z!\/]/.test(code.charAt(i + 1))) {
              if (code.charAt(i + 1) === '!') {
                var e2 = code.indexOf('>', i); e2 = e2 < 0 ? n : e2 + 1;
                out += tk('kw', code.slice(i, e2)); i = e2; continue;
              }
              var j = i, closing = code.charAt(i + 1) === '/';
              out += tk('punc', closing ? '</' : '<');
              j += closing ? 2 : 1;
              var m = /^[a-zA-Z][\w-]*/.exec(code.slice(j));
              if (!m) { i = j; continue; }
              var tag = m[0], lower = tag.toLowerCase();
              out += tk('tag', tag); j += tag.length;
              while (j < n && code.charAt(j) !== '>') {
                var ch = code.charAt(j);
                if (ch === '/') { out += tk('punc', '/'); j++; continue; }
                if (/\s/.test(ch)) { out += esc(ch); j++; continue; }
                var am = /^[^\s=\/>]+/.exec(code.slice(j));
                if (am) {
                  out += tk('attr', am[0]); j += am[0].length;
                  var k = j;
                  while (k < n && /\s/.test(code.charAt(k))) k++;
                  if (code.charAt(k) === '=') {
                    out += esc(code.slice(j, k)) + tk('punc', '=');
                    k++;
                    while (k < n && /\s/.test(code.charAt(k))) { out += esc(code.charAt(k)); k++; }
                    var q = code.charAt(k);
                    if (q === '"' || q === "'") {
                      var e3 = code.indexOf(q, k + 1); e3 = e3 < 0 ? n : e3 + 1;
                      out += tk('str', code.slice(k, e3)); k = e3;
                    } else {
                      var vm = /^[^\s>]+/.exec(code.slice(k));
                      if (vm) { out += tk('str', vm[0]); k += vm[0].length; }
                    }
                    j = k;
                  }
                  continue;
                }
                out += esc(ch); j++;
              }
              if (j < n) { out += tk('punc', '>'); j++; }
              i = j;
              if (!closing && (lower === 'style' || lower === 'script' || lower === 'textarea' || lower === 'title')) {
                var idx = code.toLowerCase().indexOf('</' + lower, i);
                var inner = idx < 0 ? code.slice(i) : code.slice(i, idx);
                out += lower === 'style' ? highlightCSS(inner) : (lower === 'script' ? highlightJS(inner) : esc(inner));
                i = idx < 0 ? n : idx;
              }
              continue;
            }
            out += esc(c); i++;
          }
          return out;
        }

        /* ---------- Code editor (highlight overlay + line numbers) ---------- */
        var editors = [];
        function buildEditor(ex) {
          var ta = ex.querySelector('.code-edit');
          var original = ta.value;
          ta.setAttribute('wrap', 'off');
          ta.setAttribute('autocomplete', 'off');
          ta.setAttribute('autocapitalize', 'off');
          var editor = document.createElement('div');
          editor.className = 'editor';
          var gutter = document.createElement('div');
          gutter.className = 'gutter';
          gutter.setAttribute('aria-hidden', 'true');
          var gutterInner = document.createElement('div');
          gutterInner.className = 'gutter-inner';
          gutter.appendChild(gutterInner);
          var scroll = document.createElement('div');
          scroll.className = 'code-scroll';
          var pre = document.createElement('pre');
          pre.className = 'code-hl';
          pre.setAttribute('aria-hidden', 'true');
          var codeEl = document.createElement('code');
          pre.appendChild(codeEl);
          ta.parentNode.insertBefore(editor, ta);
          editor.appendChild(gutter);
          editor.appendChild(scroll);
          scroll.appendChild(pre);
          scroll.appendChild(ta);

          var ed = { ex: ex, ta: ta, original: original };
          var edPage = ex.closest ? ex.closest('.page') : null;
          var edGroup = edPage ? edPage.dataset.group : '';
          function syncScroll() {
            pre.style.transform = 'translate(' + (-ta.scrollLeft) + 'px,' + (-ta.scrollTop) + 'px)';
            gutterInner.style.transform = 'translateY(' + (-ta.scrollTop) + 'px)';
          }
          ed.render = function () {
            var v = ta.value;
            var hl = (edGroup === 'php' || edGroup === 'laravel' || edGroup === 'wordpress') ? highlightPHP(v) : edGroup === 'python' || edGroup === 'django' ? highlightPython(v) : edGroup === 'typescript' || edGroup === 'js' || edGroup === 'api' || edGroup === 'react' || edGroup === 'flutter' || edGroup === 'project' || edGroup === 'java' || edGroup === 'c' || edGroup === 'go' || edGroup === 'rust' || edGroup === 'csharp' || edGroup === 'dsa' || edGroup === 'nodejs' || edGroup === 'express' ? highlightJS(v) : edGroup === 'mysql' ? highlightSQL(v) : highlightHTML(v);
            codeEl.innerHTML = hl + (v === '' || v.charAt(v.length - 1) === '\n' ? ' ' : '');
            var lines = v.split('\n').length, nums = '';
            for (var li = 1; li <= lines; li++) nums += '<div>' + li + '</div>';
            gutterInner.innerHTML = nums;
            syncScroll();
          };
          ed.fit = function () {
            var cs = window.getComputedStyle(ta);
            var lh = parseFloat(cs.lineHeight) || 21;
            var pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
            var h = Math.round(ta.value.split('\n').length * lh + pad + 2);
            scroll.style.height = Math.min(430, Math.max(72, h)) + 'px';
          };
          ta.addEventListener('input', ed.render);
          ta.addEventListener('scroll', syncScroll);
          ed.render();
          return ed;
        }

        // Wire examples
        document.querySelectorAll('.example').forEach(function (ex) {
          var runBtn = ex.querySelector('.run-btn');
          var copyBtn = ex.querySelector('[data-copy]');
          var ed = buildEditor(ex);
          editors.push(ed);
          var ta = ed.ta;

          // Language badge + Reset button in the example header
          var head = ex.querySelector('.ex-head');
          var badge = document.createElement('span');
          badge.className = 'lang-badge';
          var exPage = ex.closest ? ex.closest('.page') : null;
          badge.textContent = ex.dataset.language || ((exPage && exPage.dataset.group === 'git') ? 'TERMINAL' : (exPage && exPage.dataset.group === 'php') ? 'PHP' : (exPage && exPage.dataset.group === 'mysql') ? 'SQL' : (exPage && exPage.dataset.group === 'laravel') ? 'LARAVEL' : (exPage && exPage.dataset.group === 'api') ? 'API / JSON' : (exPage && exPage.dataset.group === 'react') ? 'REACT / JSX' : (exPage && exPage.dataset.group === 'dart') ? 'DART' : (exPage && exPage.dataset.group === 'flutter') ? 'FLUTTER' : (exPage && exPage.dataset.group === 'tailwind') ? 'TAILWIND' : (exPage && exPage.dataset.group === 'js') ? 'JAVASCRIPT' : (exPage && exPage.dataset.group === 'python') ? 'PYTHON' : (exPage && exPage.dataset.group === 'typescript') ? 'TYPESCRIPT' : (exPage && exPage.dataset.group === 'java') ? 'JAVA' : (exPage && exPage.dataset.group === 'c') ? 'C' : (exPage && exPage.dataset.group === 'go') ? 'GO' : (exPage && exPage.dataset.group === 'rust') ? 'RUST' : (exPage && exPage.dataset.group === 'csharp') ? 'CSHARP' : (exPage && exPage.dataset.group === 'dsa') ? 'DSA' : (exPage && exPage.dataset.group === 'docker') ? 'DOCKER' : (exPage && exPage.dataset.group === 'nodejs') ? 'NODEJS' : (exPage && exPage.dataset.group === 'express') ? 'EXPRESS' : (exPage && exPage.dataset.group === 'wordpress') ? 'WORDPRESS' : (exPage && exPage.dataset.group === 'cloud') ? 'CLOUD' : (exPage && exPage.dataset.group === 'django') ? 'DJANGO' : (exPage && exPage.dataset.group === 'shell') ? 'SHELL' : (exPage && exPage.dataset.group === 'aws') ? 'AWS' : (exPage && exPage.dataset.group === 'seo') ? 'SEO' : (exPage && exPage.dataset.group === 'cybersecurity') ? 'CYBERSECURITY' : (/<style[\s>]/i.test(ed.original) ? 'HTML + CSS' : (ed.original.indexOf('<') >= 0 ? 'HTML' : 'CSS')));
          head.insertBefore(badge, copyBtn);
          var resetBtn = document.createElement('button');
          resetBtn.className = 'mini-btn';
          resetBtn.textContent = 'Reset';
          resetBtn.setAttribute('title', 'မူရင်း code ပြန်ထားရန်');
          resetBtn.addEventListener('click', function () {
            ta.value = ed.original;
            ed.render(); ed.fit();
            runExample(ex);
            resetBtn.textContent = 'Reset ✓';
            setTimeout(function () { resetBtn.textContent = 'Reset'; }, 1200);
          });
          head.insertBefore(resetBtn, copyBtn);

          // Editor keys: Ctrl+Enter run, Tab indent, Enter auto-indent
          ta.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
              e.preventDefault(); runExample(ex); return;
            }
            if (e.key === 'Tab') {
              e.preventDefault();
              var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value;
              if (!e.shiftKey && s === en) {
                ta.setRangeText('  ', s, en, 'end');
              } else {
                var ls = v.lastIndexOf('\n', s - 1) + 1;
                var block = v.slice(ls, en);
                var arr = block.split('\n').map(function (ln) {
                  return e.shiftKey ? ln.replace(/^ {1,2}/, '').replace(/^\t/, '') : '  ' + ln;
                });
                var nb = arr.join('\n');
                ta.setRangeText(nb, ls, en, 'end');
                ta.setSelectionRange(ls, ls + nb.length);
              }
              ed.render();
            } else if (e.key === 'Enter') {
              e.preventDefault();
              var val = ta.value, pos = ta.selectionStart, end = ta.selectionEnd;
              var ls2 = val.lastIndexOf('\n', pos - 1) + 1;
              var indent = /^[ \t]*/.exec(val.slice(ls2, pos))[0];
              var before = val.slice(0, pos).replace(/\s+$/, '');
              var extra = '';
              if (/\{$/.test(before)) { extra = '  '; }
              else {
                var lt = before.lastIndexOf('<');
                var lastTag = lt >= 0 ? before.slice(lt) : '';
                if (/^<[a-zA-Z][^>]*>$/.test(lastTag) && !/\/>$/.test(lastTag) &&
                    !/^<(br|hr|img|input|meta|link|source|area|base|col|embed|track|wbr)\b/i.test(lastTag)) extra = '  ';
              }
              var after = val.slice(end).replace(/^[ \t]+/, '');
              if (extra && (after.charAt(0) === '}' || after.indexOf('</') === 0)) {
                ta.setRangeText('\n' + indent + extra + '\n' + indent, pos, end, 'end');
                var caret = pos + 1 + indent.length + extra.length;
                ta.setSelectionRange(caret, caret);
              } else {
                ta.setRangeText('\n' + indent + extra, pos, end, 'end');
              }
              ed.render();
            }
          });

          runBtn.addEventListener('click', function () { runExample(ex); });
          copyBtn.addEventListener('click', function () {
            ta.select();
            var done = function () {
              copyBtn.textContent = 'Copied ✓';
              setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1400);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(ta.value).then(done, function () { document.execCommand('copy'); done(); });
            } else { document.execCommand('copy'); done(); }
          });
        });

        function showPage(id) {
          pages.forEach(function (p) { p.classList.toggle('active', p.id === id); });
          Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.toggle('active', k === id); });
          visited[id] = true;
          navLinks[id].classList.add('visited');
          var page = document.getElementById(id);
          showSidebarGroup(page.dataset.group);
          // Auto-run examples on first view
          page.querySelectorAll('.example').forEach(function (ex) {
            if (!ex.dataset.ran) { ex.dataset.ran = '1'; runExample(ex); }
          });
          // Fit code editor heights now that this page is visible
          requestAnimationFrame(function () {
            editors.forEach(function (ed) { if (page.contains(ed.ex)) ed.fit(); });
          });
          document.querySelectorAll('.tab-btn').forEach(function (t) {
            var isActiveTab = t.dataset.tab === page.dataset.group;
            t.classList.toggle('active', isActiveTab);
            if (isActiveTab && t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
          });
          window.scrollTo({ top: 0 });
          document.getElementById('main').scrollTop = 0;
          var active = navLinks[id];
          if (active && sidebar.scrollHeight > sidebar.clientHeight) {
            var y = active.offsetTop - sidebar.clientHeight / 2;
            sidebar.scrollTo({ top: Math.max(0, y) });
          }
        }

        // Tabs jump to first page of the group
        document.querySelectorAll('.tab-btn').forEach(function (t) {
          t.addEventListener('click', function () {
            var first = document.querySelector('.page[data-group="' + t.dataset.tab + '"]');
            if (first) {
              showPage(first.id);
              closeNav();
              if (t.scrollIntoView) t.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
            }
          });
        });

        // Search filters nav links
        searchInput.addEventListener('input', function () {
          applySidebarSearch();
          if (searchInput.value.trim() && window.innerWidth <= 832) document.body.classList.add('nav-open');
        });
        searchInput.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            var firstVisible = Object.keys(navLinks).map(function (k) { return navLinks[k]; })
              .filter(function (b) { return b.style.display !== 'none'; })[0];
            if (firstVisible) { showPage(firstVisible.dataset.pageId); closeNav(); searchInput.blur(); }
          }
        });

        // Mobile nav
        var menuBtn = document.getElementById('menuBtn');
        function closeNav() { document.body.classList.remove('nav-open'); }
        menuBtn.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
        document.getElementById('scrim').addEventListener('click', closeNav);

        document.querySelectorAll('[data-open-dialog]').forEach(function (button) {
          button.addEventListener('click', function () {
            var dialog = document.getElementById(button.dataset.openDialog);
            closeNav();
            if (dialog && !dialog.open) dialog.showModal();
          });
        });
        document.querySelectorAll('[data-target-page]').forEach(function (button) {
          button.addEventListener('click', function () {
            var target = document.getElementById(button.dataset.targetPage);
            if (target) { showPage(target.id); closeNav(); }
          });
        });
        document.querySelectorAll('[data-close-dialog]').forEach(function (button) {
          button.addEventListener('click', function () { button.closest('dialog').close(); });
        });
        document.querySelectorAll('.info-dialog').forEach(function (dialog) {
          dialog.addEventListener('click', function (event) {
            if (event.target === dialog) dialog.close();
          });
        });

        function copyPaymentNumber(value) {
          if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(value);
          return new Promise(function (resolve, reject) {
            var field = document.createElement('textarea');
            field.value = value;
            field.setAttribute('readonly', '');
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.appendChild(field);
            field.select();
            var copied = document.execCommand('copy');
            field.remove();
            if (copied) resolve(); else reject(new Error('Copy failed'));
          });
        }
        var copyHint = document.querySelector('.copy-hint');
        document.querySelectorAll('[data-copy-number]').forEach(function (button) {
          button.addEventListener('click', function () {
            copyPaymentNumber(button.dataset.copyNumber).then(function () {
              button.textContent = 'Copied ✓';
              copyHint.textContent = 'နံပါတ်ကို ကူးယူပြီးပါပြီ။';
              window.setTimeout(function () {
                button.textContent = 'Copy';
                copyHint.textContent = 'Copy ကိုနှိပ်ပြီး နံပါတ်ကို ကူးယူနိုင်ပါတယ်။';
              }, 1800);
            }).catch(function () {
              copyHint.textContent = 'ကူးယူမရပါ။ နံပါတ်ကို ဖိထားပြီး ကိုယ်တိုင်ကူးယူပါ။';
            });
          });
        });

        document.getElementById('startLearning').addEventListener('click', function () {
          document.body.classList.remove('welcome-view');
          showPage(pages[0].id);
        });
      })();
    
