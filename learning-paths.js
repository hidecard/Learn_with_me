(function () {
  var paths = [
    { group: 'mysql', steps: [
      ['page-mysql-intro', 'Database, table နဲ့ row ကိုနားလည်ပါ', 'Database ထဲမှာ table တည်ဆောက်ပြီး SQL ကိုဘယ်နေရာမှာ run မလဲ လေ့လာပါ။'],
      ['page-mysql-types', 'Column type နဲ့ Primary Key ရွေးပါ', 'သိမ်းမည့် data အလိုက် type သတ်မှတ်ပြီး row ကို ID နဲ့ခွဲပါ။'],
      ['page-mysql-crud', 'Data ကို ထည့်၊ ဖတ်၊ ပြင်၊ ဖျက်ပါ', 'CRUD query လေးမျိုးကို sample table တစ်ခုမှာ အစဉ်လိုက်စမ်းပါ။'],
      ['page-mysql-filter', 'WHERE နဲ့ ရလဒ်ကို စစ်ထုတ်ပါ', 'သတ်မှတ်ချက်တစ်ခုချင်းစီထည့်ပြီး query result ပြောင်းပုံကိုကြည့်ပါ။'],
      ['page-mysql-relationships', 'Table တွေကို Foreign Key နဲ့ချိတ်ပါ', 'Customer နဲ့ order ကိုဆက်စပ်ပြီး သက်ဆိုင်ရာ record များကိုစစ်ပါ။']
    ]},
    { group: 'laravel', steps: [
      ['page-laravel-intro', 'Project ကိုဖန်တီးပြီး စတင်ပါ', 'လိုအပ်ချက်စစ်၊ project အသစ်လုပ်၊ development server ဖွင့်ပါ။'],
      ['page-laravel-structure', 'Folder နဲ့ MVC အခန်းကဏ္ဍကို သိပါ', 'Request တစ်ခုက route, controller, model, view တို့ကိုဖြတ်သွားပုံလိုက်ကြည့်ပါ။'],
      ['page-laravel-routes', 'Route ကနေ View အထိ ချိတ်ဆက်ပါ', 'URL သတ်မှတ်၊ controller ရေး၊ view ထဲ data ပို့ပါ။'],
      ['page-laravel-blade', 'Blade ဖြင့် Page တည်ဆောက်ပါ', 'Layout ဖန်တီး၊ section ဖြည့်ပြီး data ကို escape လုပ်ပြပါ။'],
      ['page-laravel-migrations', 'Migration ဖြင့် Table ပြင်ဆင်ပါ', 'Model နှင့် migration ဖန်တီး၊ migrate လုပ်၊ rollback ကိုစမ်းပါ။']
    ]},
    { group: 'api', steps: [
      ['page-api-intro', 'Request, response နဲ့ JSON ကိုသိပါ', 'Client request ပို့၊ server response ရယူပြီး JSON field များဖတ်ပါ။'],
      ['page-api-http', 'HTTP Method နဲ့ Status Code ကိုရွေးပါ', 'GET/POST တောင်းဆိုမှုများပြုလုပ်ပြီး အောင်မြင်မှုနဲ့ error code ခွဲပါ။'],
      ['page-api-routes', 'API Route တစ်ခုဖွင့်ပါ', 'Route သတ်မှတ်၊ controller ချိတ်ပြီး JSON response ပြန်ပေးပါ။'],
      ['page-api-crud', 'Resource အတွက် CRUD endpoint တည်ဆောက်ပါ', 'Create, read, update, delete route များကို sample resource နဲ့စမ်းပါ။'],
      ['page-api-validation', 'မှားယွင်းသော input ကို ကိုင်တွယ်ပါ', 'မှန်ကန်/မမှန်ကန်သော body ပို့ပြီး validation error format ကိုစစ်ပါ။']
    ]},
    { group: 'react', steps: [
      ['page-react-intro', 'React project ကိုဖွင့်ပြီး run ပါ', 'Project စတင်၊ development server ဖွင့်ပြီး entry file ကိုရှာပါ။'],
      ['page-react-jsx', 'JSX ဖြင့် UI ရေးပါ', 'Element များရေး၊ JavaScript expression ထည့်ပြီး component render လုပ်ပါ။'],
      ['page-react-components', 'Component နဲ့ Props ကိုသုံးပါ', 'သီးခြား component တစ်ခုလုပ်ပြီး parent က data ပို့ပါ။'],
      ['page-react-state', 'State နဲ့ Event ဖြင့် UI ပြောင်းပါ', 'Button click မှာ state update လုပ်ပြီး ပြောင်းလဲမှုကိုကြည့်ပါ။'],
      ['page-react-conditional', 'Condition နဲ့ List ကို render လုပ်ပါ', 'Empty state ထည့်ပြီး sample data ကို map ဖြင့်ပြပါ။']
    ]},
    { group: 'dart', steps: [
      ['page-dart-basics', 'Variable နဲ့ Dart syntax ကိုစတင်ပါ', 'DartPad သို့မဟုတ် project မှာ variable သတ်မှတ်ပြီး output ကြည့်ပါ။'],
      ['page-dart-control', 'Condition နဲ့ loop ကိုအသုံးပြုပါ', 'if/switch နှင့် loop ကိုအသုံးပြုပြီး ရလဒ်မတူသော input များစမ်းပါ။'],
      ['page-dart-collections', 'List, Map, Set ထဲ data စုပါ', 'Data ထည့်၊ ရှာ၊ ပြင်ပြီး collection တစ်မျိုးစီ ဘာအတွက်သင့်လဲနှိုင်းပါ။'],
      ['page-dart-functions', 'Function ဖြင့် အလုပ်ခွဲပါ', 'Parameter လက်ခံပြီး result ပြန်ပေးသော function တစ်ခုရေးပါ။'],
      ['page-dart-oop', 'Class နဲ့ Null Safety ကိုစမ်းပါ', 'Object ဖန်တီးပြီး nullable value ကို null မဖြစ်အောင်စစ်ပါ။']
    ]},
    { group: 'flutter', steps: [
      ['page-flutter-intro', 'Flutter app အသစ်ကို run ပါ', 'Project ဖန်တီး၊ device ရွေးပြီး starter screen ကိုဖွင့်ပါ။'],
      ['page-flutter-widgets', 'Widget နဲ့ Layout တည်ဆောက်ပါ', 'Text, Row, Column, Padding တို့ကိုပေါင်းပြီး screen တစ်ခုဆောက်ပါ။'],
      ['page-flutter-navigation', 'Screen နှစ်ခုအကြား သွားပါ', 'List မှ detail screen သို့ data ပို့ပြီး back navigation စမ်းပါ။'],
      ['page-flutter-forms', 'Form input ကို စစ်ဆေးပါ', 'TextField ထည့်၊ validation ပြပြီး မှန်ကန်သည့်အခါ submit လုပ်ပါ။'],
      ['page-flutter-lists', 'List နဲ့ Detail ကို data ဖြင့်ပြပါ', 'Sample item များပြပြီး တစ်ခုရွေးသောအခါ detail ပြောင်းပါ။']
    ]},
    { group: 'security', steps: [
      ['page-security-basics', 'Asset နဲ့ risk ကို အရင်စဉ်းစားပါ', 'ကာကွယ်ရမည့် data၊ အသုံးပြုသူနှင့် အန္တရာယ်ဖြစ်နိုင်သည့်နေရာကိုစာရင်းချပါ။'],
      ['page-security-xss-sql', 'User input ကို မယုံကြည်ဘဲ စစ်ဆေးပါ', 'Output escape လုပ်ပြီး query ကို parameterize လုပ်ရမည့်နေရာကိုရှာပါ။'],
      ['page-security-auth-csrf', 'Login နဲ့ permission ကိုခွဲပါ', 'အသုံးပြုသူအတည်ပြုခြင်းနှင့် action ခွင့်ပြုခြင်းကို route နှစ်ခုဖြင့်စစ်ပါ။'],
      ['page-security-secrets', 'Secret နဲ့ HTTPS ကို ကာကွယ်ပါ', 'Secret ကို source မှဖယ်၊ environment ထဲထည့်ပြီး HTTPS ကိုစစ်ပါ။'],
      ['page-security-review', 'အခြေခံ security review လုပ်ပါ', 'Feature တစ်ခုကို input, access, data storage, logging အစဉ်ဖြင့်စစ်ပါ။']
    ]},
    { group: 'deploy', steps: [
      ['page-deploy-plan', 'တင်မည့်နေရာနဲ့ လိုအပ်ချက်ကိုရွေးပါ', 'Static သို့မဟုတ် server app ဖြစ်မှုနှင့် domain လိုအပ်ချက်ကိုသတ်မှတ်ပါ။'],
      ['page-deploy-pages', 'ပထမ static site ကို publish လုပ်ပါ', 'Repository ချိတ်၊ build ထုတ်ပြီး published URL ကိုဖွင့်စစ်ပါ။'],
      ['page-deploy-env-domain', 'Environment နဲ့ Domain ကိုချိတ်ပါ', 'Environment value ထည့်၊ DNS ပြင်ပြီး HTTPS ဖြင့်ဝင်ကြည့်ပါ။'],
      ['page-deploy-branch-pr', 'ပြောင်းလဲမှုကို Branch မှ Release အထိပို့ပါ', 'Feature branch လုပ်၊ pull request ဖွင့်၊ review ပြီး merge လုပ်ပါ။'],
      ['page-deploy-build-artifacts', 'Build Artifact ကိုစစ်ပြီး Deploy လုပ်ပါ', 'Production build ထုတ်၊ output စစ်၊ တူညီသော artifact ကိုတင်ပါ။']
    ]},
    { group: 'ci', steps: [
      ['page-extra-ci-workflow-file-anatomy', 'Workflow file အစိတ်အပိုင်းများကိုဖတ်ပါ', 'Trigger, job, step နဲ့ runner တို့ကို ခွဲခြားဖတ်ပါ။'],
      ['page-extra-ci-pull-request-validation', 'Pull Request မှာ အလိုအလျောက်စစ်ပါ', 'Lint, test နဲ့ build ကို PR တစ်ခုမှာ run စေပြီး result ကြည့်ပါ။'],
      ['page-extra-ci-job-step-dependencies', 'Job အစဉ်နဲ့ Dependency ချိတ်ပါ', 'Test အောင်မှ build run မည့် dependency သတ်မှတ်ပါ။'],
      ['page-deploy-actions', 'CI အောင်မှ Deploy ဆက်လုပ်ပါ', 'Build အောင်မြင်မှုကို deploy job နဲ့ချိတ်ပြီး failure flow စမ်းပါ။'],
      ['page-extra-ci-test-lint-build-gates', 'Quality Gate ထည့်ပြီး Release ကိုကာကွယ်ပါ', 'မအောင်မြင်သော check တစ်ခုကြောင့် release ရပ်သွားကြောင်းစစ်ပါ။']
    ]},
    { group: 'python', steps: [
      ['page-extra-python-01', 'Python ကိုတပ်ဆင်ပြီး ပထမဆုံး program ရေးပါ', 'Python 3 interpreter ကိုရွေး၊ file ဖန်တီးပြီး print နဲ့ output ထုတ်ပါ။'],
      ['page-extra-python-11', 'Variable နဲ့ data type ကိုနားလည်ပါ', 'String၊ number၊ boolean နဲ့ input ကိုခွဲပြီး type conversion စမ်းပါ။'],
      ['page-extra-python-21', 'Operator နဲ့ condition ကိုအသုံးပြုပါ', 'if/elif/else ဖြင့် input အခြေအနေအလိုက် ရလဒ်ရွေးပါ။'],
      ['page-extra-python-31', 'Loop နဲ့ collection ကိုတွဲသုံးပါ', 'List၊ dictionary နဲ့ for loop ဖြင့် data အစဉ်လိုက်ကိုင်တွယ်ပါ။'],
      ['page-extra-python-51', 'Function ရေးပြီး ပြန်သုံးပါ', 'Parameter နဲ့ return value ပါသော function ကိုရေးပြီးစမ်းပါ။']
    ]},
    { group: 'typescript', steps: [
      ['page-extra-typescript-01', 'TypeScript project ကိုစတင်တည်ဆောက်ပါ', 'TypeScript compiler နဲ့ tsconfig ကိုပြင်ဆင်ပြီး ပထမ .ts file ကို compile လုပ်ပါ။'],
      ['page-extra-typescript-11', 'Primitive type နဲ့ inference ကိုဖတ်ပါ', 'String၊ number၊ boolean နဲ့ null တန်ဖိုးတွေကို type-safe သုံးပါ။'],
      ['page-extra-typescript-21', 'Function အတွက် type သတ်မှတ်ပါ', 'Parameter၊ return value နဲ့ optional argument တို့ကိုကြေညာပါ။'],
      ['page-extra-typescript-41', 'Union နဲ့ type narrowing ကိုသုံးပါ', 'Type guard တည်ဆောက်ပြီး ဖြစ်နိုင်သည့်အခြေအနေအားလုံးကိုစစ်ပါ။'],
      ['page-extra-typescript-61', 'Generic ဖြင့် ပြန်သုံးနိုင်သော code ရေးပါ', 'Input type ကိုထိန်းထားသော generic function သို့မဟုတ် interface တည်ဆောက်ပါ။']
    ]},
    { group: 'quality', steps: [
      ['page-quality-measure', 'ပြဿနာကို မပြင်မီ တိုင်းတာပါ', 'Page load ကိုစမ်းပြီး အချိန်ယူသောနေရာနှင့် metric ကိုမှတ်ပါ။'],
      ['page-quality-assets', 'Image, Font နဲ့ Script ကိုစစ်ပါ', 'အကြီးဆုံး resource ကိုရှာပြီး တစ်ခုချင်းပြင်ကာ ရလဒ်နှိုင်းပါ။'],
      ['page-quality-semantic', 'HTML ကို Keyboard နဲ့ဖတ်ရှုစမ်းပါ', 'Heading အစဉ်၊ landmark နဲ့ keyboard focus ကိုစစ်ပါ။'],
      ['page-quality-forms', 'Form ကို အမှားအပါအဝင် စမ်းသပ်ပါ', 'Label, error message, contrast နဲ့ reduced motion ကိုစစ်ပါ။'],
      ['page-quality-accessible-navigation', 'Navigation ပြောင်းလဲမှုကို လက်လှမ်းမီစေပါ', 'Focus, active state နှင့် update announcement ကို keyboard ဖြင့်စမ်းပါ။']
    ]}
  ];

  var main = document.getElementById('main');
  if (!main) return;

  paths.forEach(function (path) {
    var firstPage = main.querySelector('.page[data-group="' + path.group + '"]');
    if (!firstPage) return;
    var card = document.createElement('section');
    card.className = 'learning-path';
    var heading = document.createElement('h2');
    heading.textContent = 'Basic Level — အခြေခံမှ တစ်ဆင့်ချင်း လေ့လာရန်';
    card.appendChild(heading);
    var description = document.createElement('p');
    description.className = 'path-intro';
    description.textContent = 'အောက်ပါအစဉ်အတိုင်း လေ့လာပြီး အဆင့်တစ်ခုစီကို ကိုယ်တိုင်စမ်းသပ်ပြီးမှ နောက်တစ်ဆင့်ကို ဆက်ပါ။';
    card.appendChild(description);
    var list = document.createElement('ol');
    list.className = 'path-steps';
    path.steps.forEach(function (step, index) {
      var item = document.createElement('li');
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'path-step-link';
      button.dataset.targetPage = step[0];
      button.innerHTML = '<span class="path-step-number">' + String(index + 1).padStart(2, '0') + '</span><span class="path-step-copy"><strong></strong><small></small></span>';
      button.querySelector('strong').textContent = step[1];
      button.querySelector('small').textContent = step[2];
      item.appendChild(button);
      list.appendChild(item);
    });
    card.appendChild(list);
    var introduction = firstPage.querySelector('.lede');
    if (introduction) introduction.after(card); else firstPage.appendChild(card);
  });
})();
