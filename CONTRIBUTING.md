# Contributing / ပူးပေါင်းပါဝင်ခြင်း

Suggestions, corrections, and beginner-friendly lesson improvements are welcome. This guide explains how to contribute safely to **Learn_with_me**.

အကြံပြုချက်၊ အမှားပြင်ဆင်ချက်နှင့် စတင်လေ့လာသူများအတွက် အသုံးဝင်သော သင်ခန်းစာများကို ကြိုဆိုပါတယ်။ ဒီလမ်းညွှန်မှာ repository ကို လုံခြုံစွာ ပြင်ဆင်ပြီး contribution တင်သွင်းပုံကို ဖော်ပြထားပါတယ်။

## Content standards / အကြောင်းအရာ စံနှုန်းများ

- Write primarily in clear, natural Burmese; retain standard English technical terms where they improve accuracy. Explain unfamiliar terms the first time they appear.
- Keep each lesson focused, correct, and suitable for its stated level. Prefer small, runnable examples and explain expected results and useful next steps.
- Check code and commands for correctness. Clearly label requirements, environment assumptions, and whether output is simulated. Never present a browser simulation as a real server, shell, database, or external service.
- Make examples safe: use fictional data and placeholders; do not include real credentials, API keys, personal information, destructive commands, or instructions that put systems or users at risk.
- Avoid copying substantial material from sources without permission. Cite or link useful references when appropriate; do not introduce or claim a project license.
- Keep navigation, lesson titles, topic grouping, and learning-path targets coherent with the existing site.

- မြန်မာဘာသာဖြင့် ရှင်းလင်းသဘာဝကျစွာ အဓိကရေးပါ။ မှန်ကန်မှုအတွက် လိုအပ်ပါက English technical term ကိုသုံးပြီး မရင်းနှီးသောအသုံးအနှုန်းကို ပထမဆုံးအကြိမ်တွင် ရှင်းပြပါ။
- သင်ခန်းစာတစ်ခုစီကို အကြောင်းအရာတစ်ခုအပေါ် အာရုံစိုက်စေပြီး အဆင့်နှင့်ကိုက်ညီ၊ မှန်ကန်စေပါ။ သေးငယ်ပြီး run လုပ်နိုင်သော ဥပမာနှင့် မျှော်လင့်ရမည့်ရလဒ်ကို ဖော်ပြပါ။
- Code နှင့် command များကို စစ်ဆေးပါ။ လိုအပ်ချက်နှင့် environment ကို ဖော်ပြပြီး output သည် simulation ဖြစ်ပါက ထင်ရှားစွာ ရေးပါ။ Simulation ကို အမှန်တကယ် server၊ shell၊ database သို့မဟုတ် ပြင်ပ service ဟု မဖော်ပြပါနှင့်။
- ဥပမာများတွင် စိတ်ကူးယဉ် data နှင့် placeholder များကိုသာ သုံးပါ။ အမှန်တကယ် credential၊ API key၊ ကိုယ်ရေးအချက်အလက်၊ ဖျက်ဆီးနိုင်သော command သို့မဟုတ် အန္တရာယ်ဖြစ်စေမည့်ညွှန်ကြားချက်များ မထည့်ပါနှင့်။
- ခွင့်ပြုချက်မရှိဘဲ အခြားသူ၏ စာသားများကို အများအပြားကူးယူခြင်း မပြုပါနှင့်။ သင့်လျော်ပါက reference ချိတ်ဆက်ပါ။ Project တွင် license တစ်ခုရှိသည်ဟု ထည့်သွင်းမဆိုပါနှင့်။
- Navigation၊ lesson title၊ topic group နှင့် learning-path target များကို လက်ရှိ site ဖွဲ့စည်းပုံနှင့် ကိုက်ညီစေပါ။

## Safe contribution steps / လုံခြုံသော ပြင်ဆင်မှု အဆင့်များ

1. Open an issue first for substantial changes or a new topic so the scope can be discussed. For a small typo or correction, a focused pull request is fine.
2. Fork the repository and create a short descriptive branch. Keep the change focused; do not reformat unrelated content or generated/minified sections.
3. Edit lesson content in the appropriate existing source file. Keep identifiers unique. If a lesson changes group or ID, update its topic/navigation or learning-path references as needed.
4. Review the diff before submission. Confirm no credentials, personal data, unrelated edits, or accidental bulk changes are present. Do not add a license unless explicitly requested by the project maintainers.
5. Run the checks below, then open a pull request with a concise summary, rationale, and any manual browser checks performed. Link the related issue when applicable.

1. အပြောင်းအလဲကြီး သို့မဟုတ် topic အသစ်အတွက် အရင် issue ဖွင့်ပြီး အတိုင်းအတာကို ညှိနှိုင်းပါ။ စာလုံးပေါင်း/အသေးစားပြင်ဆင်မှုအတွက် တိုက်ရိုက် pull request တင်နိုင်ပါတယ်။
2. Repository ကို fork လုပ်ပြီး အဓိပ္ပာယ်ရှင်းသော branch တစ်ခုဖန်တီးပါ။ ပြင်ဆင်မှုကို ရည်ရွယ်ချက်တစ်ခုတည်းအပေါ် ကန့်သတ်ပြီး မသက်ဆိုင်သောအပိုင်းများကို format ပြန်မလုပ်ပါနှင့်။
3. သက်ဆိုင်ရာ source file တွင် သင်ခန်းစာကို ပြင်ပါ။ ID မထပ်စေရန် စစ်ပါ။ Group သို့မဟုတ် ID ပြောင်းလဲပါက topic/navigation နှင့် learning-path ကိုလည်း လိုအပ်သလို ပြင်ဆင်ပါ။
4. မတင်သွင်းမီ diff ကို စစ်ပါ။ Credential၊ ကိုယ်ရေးအချက်အလက်၊ မသက်ဆိုင်သောပြင်ဆင်မှုနှင့် မရည်ရွယ်သော အစုလိုက်ပြောင်းလဲမှု မပါကြောင်း သေချာစေပါ။ Maintainer က မတောင်းဆိုပါက license မထည့်ပါနှင့်။
5. အောက်ပါ checks များကို run ပြီး summary၊ အကြောင်းပြချက်နှင့် browser ဖြင့် ကိုယ်တိုင်စစ်ထားမှုကို ဖော်ပြကာ pull request တင်ပါ။ သက်ဆိုင်ရာ issue ရှိပါက ချိတ်ဆက်ပါ။

## Checks / စစ်ဆေးရန်

From the repository root, run:

```bash
python3 scripts/validate_repo.py
```

The validator checks that the HTML contains 2,460 lesson articles with unique IDs, that groups match all 35 topic tabs and navigation groups, that the footer and README reflect the 2,702 lessons shown after `extra-lessons.js` loads, and that every learning-path target resolves. If Node.js is installed, it also runs `node --check` on `script.js`, `extra-lessons.js`, and `learning-paths.js`; without Node it reports that syntax check as skipped. Finally, open the site locally and manually inspect any changed lessons and previews.

Repository root မှ အောက်ပါ command ကို run ပါ။

```bash
python3 scripts/validate_repo.py
```

Validator သည် HTML ထဲရှိ lesson article 2,460 ခု၏ ID ထူးခြားမှု၊ topic 35 ခု၏ group/tab/navigation တူညီမှု၊ `extra-lessons.js` တင်ပြီးနောက် ဖော်ပြသော lesson စုစုပေါင်း 2,702 ခုကို README/footer တွင် မှန်ကန်စွာဖော်ပြမှုနှင့် learning-path target များကို စစ်ဆေးပါသည်။ Node.js ရှိပါက `script.js`, `extra-lessons.js`, `learning-paths.js` တို့ကို `node --check` ဖြင့် ထပ်မံစစ်ဆေးပြီး မရှိပါက syntax check ကို skip လုပ်ကြောင်း ပြပါမည်။ နောက်ဆုံးတွင် site ကို local server ဖြင့်ဖွင့်ပြီး ပြင်ထားသောသင်ခန်းစာနှင့် preview များကို ကိုယ်တိုင်ကြည့်ရှုပါ။
