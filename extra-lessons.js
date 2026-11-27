(function () {
  var curriculum = [
    {
      group: 'mysql',
      lessons: [
        ['MySQL Server ကို CLI နှင့် Workbench မှ ချိတ်ဆက်ခြင်း', 'Server, database client, connection setting တို့၏ အခန်းကဏ္ဍကို ခွဲခြားပြီး local database တစ်ခုသို့ ချိတ်ဆက်ပုံကို လေ့လာပါ။', 'Local server တစ်ခုဖွင့်ပြီး CLI နှင့် GUI client နှစ်မျိုးလုံးမှ တူညီသော database ကို စာရင်းပြပါ။'],
        ['SQL Script ကို စနစ်တကျဖတ်ရှု၊ မှတ်ချက်ရေးခြင်း', 'Statement အဆုံးသတ်၊ comment ပုံစံ၊ indentation နှင့် keyword ကို စနစ်တကျစီခြင်းက query ကို review လုပ်ရလွယ်စေသည်။', 'SELECT query သုံးခုကို တစ်ကြောင်းတည်းရေးထားရာမှ အပိုင်းလိုက် format ပြောင်းပြီး အဓိပ္ပာယ်ရှိသော comment ထည့်ပါ။'],
        ['Schema ဖန်တီးခြင်းနှင့် မလိုအပ်တော့သော Schema ကို ဖယ်ရှားခြင်း', 'CREATE DATABASE နှင့် DROP DATABASE တို့ကို ရည်ရွယ်ချက်၊ ခွင့်ပြုချက်နှင့် ပတ်ဝန်းကျင်အလိုက် သတိထားအသုံးပြုပါ။', 'စမ်းသပ်ရေး schema တစ်ခုဖန်တီးပြီး မဖျက်မီ database အမည်ကို ပြန်စစ်သည့် checklist ရေးပါ။'],
        ['Database နှင့် Table အမည်ပေးစံ သတ်မှတ်ခြင်း', 'အမည်တစ်သမတ်တည်းဖြစ်ခြင်း၊ reserved word ရှောင်ခြင်းနှင့် schema နယ်နိမိတ်သတ်မှတ်ခြင်းက ရေရှည်ထိန်းသိမ်းမှုကို ကူညီသည်။', 'အသေးစား shop schema အတွက် table နှင့် column အမည် convention တစ်ခုရေးပြီး အဟောင်းအမည်များကို ပြန်ညှိပါ။'],
        ['NOT NULL နှင့် DEFAULT Constraint ကို ရွေးချယ်ခြင်း', 'မရှိမဖြစ်တန်ဖိုးနှင့် မပေးလျှင်သုံးမည့် default ကို database က အာမခံနိုင်ရန် column constraint များကို ရည်ရွယ်ချက်နှင့်ကိုက်ညီစွာ သတ်မှတ်ပါ။', 'အသုံးပြုသူ profile table တစ်ခုတွင် မဖြစ်မနေလိုအပ်သော field နှင့် default သင့်သော field များကို ခွဲရေးပါ။'],
        ['UNIQUE နှင့် CHECK Constraint ဖြင့် Data စည်းမျဉ်းထိန်းခြင်း', 'ထပ်မရသောတန်ဖိုးနှင့် လက်ခံနိုင်သော range ကို application တစ်ခုတည်းမဟုတ်ဘဲ database schema အတွင်းပါ ထိန်းထားနိုင်သည်။', 'Email တစ်ခုမထပ်စေရန်နှင့် quantity အနုတ်မဖြစ်စေရန် constraint များရေးပြီး မမှန်သော insert ကို စမ်းပါ။'],
        ['Composite Primary Key ကို သင့်တော်စွာအသုံးပြုခြင်း', 'ဆက်စပ် table တစ်ခုတွင် column အများအပြားပေါင်းမှ row ကို သီးခြားသတ်မှတ်နိုင်သောအခါ composite key ၏ အားသာချက်နှင့် trade-off ကို နားလည်ပါ။', 'Student-course enrollment table အတွက် composite key သတ်မှတ်ပြီး duplicate enrollment ကို စမ်းသပ်တားပါ။'],
        ['AUTO_INCREMENT အစဉ်နှင့် ID Gap ကို နားလည်ခြင်း', 'Generated ID များသည် အစဉ်တစ်ခုအဖြစ် အာမခံခြင်းမဟုတ်ကြောင်းနှင့် rollback၊ delete တို့ကြောင့် gap ရှိနိုင်ကြောင်း လေ့လာပါ။', 'Test table တွင် insert၊ delete၊ rollback လုပ်ပြီး ID ကို အစဉ်မပျက် invoice number အဖြစ် မသုံးသင့်သည့်အကြောင်း ရှင်းပြပါ။'],
        ['ENUM နှင့် Lookup Table ရွေးချယ်ခြင်း', 'တန်ဖိုးအနည်းငယ်တည်ငြိမ်သောအခါ ENUM သင့်နိုင်ပြီး ပြင်ဆင်နိုင်သောအုပ်စုနှင့် metadata လိုပါက lookup table ပိုသင့်တော်သည်။', 'Order status အတွက် ရွေးချယ်စရာများ တိုးလာသည့်အခါ ENUM နှင့် lookup table ကို နှိုင်းယှဉ်ပါ။'],
        ['Character Set နှင့် Collation ကို utf8mb4 ဖြင့် သတ်မှတ်ခြင်း', 'Character set က သိမ်းနိုင်သောစာလုံးကို သတ်မှတ်ပြီး collation က နှိုင်းယှဉ်၊ sort လုပ်ပုံကို သတ်မှတ်သည်။', 'မြန်မာစာနှင့် emoji ပါသော sample များကို သိမ်း၊ ရှာဖွေပြီး database/table/connection encoding ကို စစ်ပါ။'],
        ['DATE, DATETIME နှင့် TIMESTAMP ကို ရွေးချယ်ခြင်း', 'Calendar date၊ timezone ပါသောအချိန်နှင့် server conversion ပြုလုပ်ပုံတို့အရ date column type ကို ခွဲရွေးပါ။', 'မွေးနေ့၊ ဆိုင်ဖွင့်ရက်နှင့် UTC event time တို့အတွက် သင့်တော်သည့် column type ကိုရွေးပြီး အကြောင်းပြပါ။'],
        ['ငွေကြေးတန်ဖိုးကို DECIMAL ဖြင့် သိမ်းဆည်းခြင်း', 'ငွေကြေးတွက်ချက်မှုတွင် floating point rounding ကိုရှောင်ရန် precision နှင့် scale သတ်မှတ်ထားသော DECIMAL ကို အသုံးပြုပါ။', 'ဈေးနှုန်းနှင့် tax အတွက် DECIMAL column သတ်မှတ်ပြီး ငွေစုစုပေါင်းကို SQL ဖြင့်တွက်ပါ။'],
        ['Generated Column ဖြင့် တွက်ချက်တန်ဖိုးထုတ်ခြင်း', 'အခြား column များမှ အမြဲတွက်နိုင်သောတန်ဖိုးကို generated column အဖြစ်ထားနိုင်သည့်အခြေအနေကို လေ့လာပါ။', 'ပစ္စည်းဈေးနှင့် အရေအတွက်မှ line total တွက်ပြီး stored/virtual ပုံစံကို ရွေးချယ်ပါ။'],
        ['Bulk Insert ဖြင့် Row အများအပြား ထည့်သွင်းခြင်း', 'Insert statement များကို batch လုပ်ခြင်းက round-trip လျှော့နိုင်သော်လည်း batch size နှင့် error handling ကို ထိန်းရသည်။', 'Sample row 100 ခုကို batch အရွယ်အစားခွဲ၍ ထည့်ပြီး runtime နှင့် error ဖြစ်သော row များကို နှိုင်းယှဉ်ပါ။'],
        ['INSERT ON DUPLICATE KEY UPDATE ကို သုံးခြင်း', 'Unique key တိုက်မိသောအခါ insert အသစ်လုပ်မည့်အစား update လုပ်သည့် upsert pattern ၏ အကျိုးဆက်ကို နားလည်ပါ။', 'External ID တူသော inventory row များကို ထပ်ပို့သည့်အခါ stock count ကို မှန်ကန်စွာ update လုပ်ပါ။'],
        ['Safe Update အလေ့အကျင့်နှင့် WHERE စစ်ဆေးခြင်း', 'UPDATE နှင့် DELETE မလုပ်မီ target row ကို SELECT ဖြင့်ကြည့်ခြင်းနှင့် transaction အသုံးပြုခြင်းက မှားယွင်းပြောင်းလဲမှုကို လျှော့သည်။', 'စမ်းသပ် table တစ်ခုတွင် အရင် SELECT၊ ထို့နောက် WHERE ပါသော UPDATE လုပ်ပြီး မထိခိုက်သင့်သော row များကို စစ်ပါ။'],
        ['Transaction အတွင်း Error ဖြစ်လျှင် Rollback ပြုလုပ်ခြင်း', 'အလုပ်တစ်ခု၏ အဆင့်အချို့သာ အောင်မြင်သွားခြင်းကို transaction ဖြင့် ကာကွယ်ပြီး error ဖြစ်သည့်အခါ rollback လုပ်ပါ။', 'ငွေလွှဲနမူနာတွင် debit ပြီး credit မအောင်မြင်သည့်အခြေအနေ ဖန်တီး၍ balance မပြောင်းကြောင်းစစ်ပါ။'],
        ['ACID Property ကို Database အလုပ်နှင့် ချိတ်ဆက်ခြင်း', 'Atomicity, Consistency, Isolation, Durability တို့က transaction ၏ ယုံကြည်စိတ်ချရမှုကို ဘယ်လိုကာကွယ်ကြောင်း သင်ယူပါ။', 'Order တင်သည့်လုပ်ငန်းစဉ်တစ်ခုအတွက် ACID property တစ်ခုစီက ကာကွယ်ပေးမည့် failure ကို ဥပမာရေးပါ။'],
        ['Transaction Isolation Level များကို နှိုင်းယှဉ်ခြင်း', 'Concurrent transaction များအကြား dirty read၊ non-repeatable read နှင့် phantom read ဖြစ်နိုင်ပုံကို isolation setting နှင့်ချိတ်ဆက်ပါ။', 'Session နှစ်ခုတွင် တူညီသော row ဖတ်၊ ပြင်သည့် sequence ရေးပြီး လိုအပ်သော isolation ကို ဆုံးဖြတ်ပါ။'],
        ['Deadlock ဖြစ်ပုံနှင့် ပြန်လည်ကြိုးစားခြင်း', 'Transaction များက lock ကို ပြောင်းပြန်အစဉ်ဖြင့်ယူသောအခါ deadlock ဖြစ်နိုင်ပြီး application က bounded retry ပြုလုပ်သင့်သည်။', 'Account row နှစ်ခုကို မတူညီသောအစဉ်ဖြင့် update လုပ်သည့် sequence ရေးပြီး lock order တစ်သမတ်တည်းဖြစ်အောင် ပြင်ပါ။'],
        ['Common Table Expression ဖြင့် Query ကို ဖတ်လွယ်စေခြင်း', 'WITH clause ဖြင့် အမည်ပေးထားသော intermediate result များ ဖန်တီးပြီး query ကို အဆင့်လိုက်ခွဲဖတ်နိုင်သည်။', 'ရောင်းအားစုပေါင်း query ကို CTE နှစ်ဆင့်ခွဲရေးပြီး နောက်ဆုံး SELECT မှာ ရလဒ်ကို စစ်ပါ။'],
        ['Recursive CTE ဖြင့် Hierarchy ကို လိုက်ရှာခြင်း', 'Recursive CTE ၏ anchor နှင့် recursive member ကို အသုံးပြုပြီး tree ပုံစံအချက်အလက်ကို အဆင့်လိုက်ဖော်ထုတ်ပါ။', 'ဝန်ထမ်း manager hierarchy တစ်ခုမှ manager အောက်ရှိ အဆင့်အားလုံးကို ပြန်ထုတ်သည့် query ကိုရေးပါ။'],
        ['Window Function ဖြင့် အဆင့်သတ်မှတ်ခြင်း', 'GROUP BY နှင့်မတူဘဲ row တစ်ခုချင်းမပျောက်စေဘဲ အုပ်စုအတွင်း rank နှင့် running result တွက်ပါ။', 'ဌာနတစ်ခုစီ၏ ဝန်ထမ်းလစာကို DENSE_RANK ဖြင့် အဆင့်သတ်မှတ်ပါ။'],
        ['Window Frame ဖြင့် Running Total တွက်ခြင်း', 'PARTITION, ORDER နှင့် frame boundary ကို သတ်မှတ်ကာ အတန်းလိုက် တိုးလာသောစုစုပေါင်းကို ထုတ်ယူပါ။', 'ရက်အလိုက်ရောင်းအားအတွက် current row အထိ running total နှင့် rolling 7-row sum ကို နှိုင်းယှဉ်ပါ။'],
        ['CASE Expression ဖြင့် Conditional Value ဖန်တီးခြင်း', 'CASE ကို SELECT နှင့် aggregate အတွင်းသုံးပြီး စည်းမျဉ်းအလိုက် label သို့မဟုတ် subtotal များထုတ်ပါ။', 'Order တစ်ခုစီကို ပမာဏအလိုက် အုပ်စုခွဲပြီး category အလိုက် count တွက်ပါ။'],
        ['UNION နှင့် UNION ALL ကို ခွဲခြားအသုံးပြုခြင်း', 'Result set များကို column shape တူညီအောင်ပေါင်းပြီး duplicate ဖယ်ရှားမှုလို/မလိုအရ UNION variant ကိုရွေးပါ။', 'လက်ရှိနှင့် archive table မှ record များပေါင်းကာ duplicate စစ်ဆေးချိန်ကွာခြားမှုကိုတိုင်းပါ။'],
        ['EXISTS နှင့် NOT EXISTS ဖြင့် ဆက်စပ်မှုစစ်ခြင်း', 'ဆက်စပ် row ရှိ/မရှိကို EXISTS ဖြင့်စစ်ခြင်းက JOIN ထက် ပိုရှင်းသောအခါကို နားလည်ပါ။', 'မှာယူမှုရှိသော customer များနှင့် မှာယူမှုမရှိသေးသူများကို EXISTS/NOT EXISTS ဖြင့်ရှာပါ။'],
        ['JSON Column တွင် Document Data ကို သိမ်းခြင်း', 'JSON column သည် အပြောင်းအလဲများသော attribute များအတွက် အသုံးဝင်သော်လည်း relation နှင့် core field ကို အစားမထိုးသင့်ပါ။', 'Product ရဲ့ option မတူညီမှုကို JSON ထဲသိမ်းပြီး မကြာခဏရှာမည့် field များကို သီးခြား column ထားပါ။'],
        ['Full-Text Search ဖြင့် စာသားရှာဖွေခြင်း', 'FULLTEXT index နှင့် relevance score ကိုအသုံးပြုပြီး စကားလုံးရှာဖွေမှုကို LIKE pattern ထက် ထိရောက်စွာပြုလုပ်ပါ။', 'ဆောင်းပါး title/body အတွက် full-text query တည်ဆောက်ပြီး relevance အစဉ်လိုက် ပြပါ။'],
        ['Stored Procedure ၏ Input နှင့် Transaction Boundary', 'Stored procedure က database အတွင်းလုပ်ငန်းအဆင့်များကို စုစည်းနိုင်ပြီး input၊ output နှင့် transaction ပိုင်ဆိုင်မှုကို သတ်မှတ်ရသည်။', 'Order တင်ရန် procedure တစ်ခု၏ parameter နှင့် error အခြေအနေများကို စာရွက်ပေါ်တွင် ဒီဇိုင်းဆွဲပါ။'],
        ['Stored Function နှင့် Procedure ကို ရွေးချယ်ခြင်း', 'Function သည် expression ထဲမှတန်ဖိုးပြန်ပေးရန် ရည်ရွယ်ပြီး procedure သည် လုပ်ဆောင်ချက်အစဉ်ကို ကိုင်တွယ်သည်။', 'Discount တွက်ချက်မှုနှင့် order creation တို့ကို function/procedure မည်သည့်ပုံစံဖြင့်ရေးမည် ဆုံးဖြတ်ပါ။'],
        ['Trigger ၏ အသုံးဝင်မှုနှင့် Side Effect ကို ထိန်းခြင်း', 'Trigger သည် row ပြောင်းလဲမှုနောက်ကွယ်တွင် အလိုအလျောက်အလုပ်လုပ်နိုင်သော်လည်း မမြင်သာသော side effect များဖြစ်စေနိုင်သည်။', 'Audit log trigger တစ်ခုကိုရေးဆွဲပြီး application service မှာလုပ်ခြင်းနှင့် ဘယ်အခြေအနေက ပိုရှင်းသလဲ နှိုင်းယှဉ်ပါ။'],
        ['Event Scheduler ဖြင့် အချိန်သတ်မှတ်ထားသော SQL လုပ်ဆောင်ခြင်း', 'Database scheduler က သတ်မှတ်အချိန်တွင် SQL အလုပ်ကို run နိုင်သော်လည်း timezone၊ failure log နှင့် ownership ကို စီမံရသည်။', 'သက်တမ်းကုန်သော test record များကို ဖယ်ရှားမည့် event အတွက် interval နှင့် audit plan ရေးပါ။'],
        ['View ဖြင့် Query Contract နှင့် Column Access ကန့်သတ်ခြင်း', 'View သည် query ကို ပြန်သုံးနိုင်စေပြီး အသုံးပြုသူအချို့ထံ အကန့်အသတ်ရှိသော column များသာ ပြသရန်ကူညီနိုင်သည်။', 'ဝန်ထမ်းအများသုံး view တစ်ခုမှ လစာ column ကိုဖယ်ပြီး သက်ဆိုင်ရာ privilege ကိုစစ်ပါ။'],
        ['EXPLAIN ဖြင့် Query Plan ကို ဖတ်ရှုခြင်း', 'EXPLAIN ရလဒ်မှ table access၊ selected index၊ row ခန့်မှန်းချက်နှင့် join order ကိုဖတ်ပြီး bottleneck ရှာပါ။', 'Filter query တစ်ခုကို index မပါခင်၊ ထည့်ပြီးနောက် EXPLAIN နှိုင်းယှဉ်ပါ။'],
        ['Composite Index တွင် Column အစဉ်ရွေးချယ်ခြင်း', 'Composite index သည် leading column များကို အခြေခံသုံးသောကြောင့် query pattern နှင့် filter order ကိုကြည့်ပြီး အစဉ်ရွေးရသည်။', 'အများဆုံးသုံးသော filter သုံးမျိုးကို စုစည်းပြီး index order မတူသော EXPLAIN plan များကို နှိုင်းပါ။'],
        ['Invisible Index ဖြင့် Index ဖယ်ရှားမှုကို အရင်စမ်းခြင်း', 'Index ကို တကယ်မဖျက်မီ optimizer အတွက် invisible လုပ်ခြင်းက query များ၏ အကျိုးဆက်ကို လုံခြုံစွာစမ်းနိုင်သည်။', 'အသုံးမများဟုထင်သော index တစ်ခုအတွက် invisible စမ်းသပ်မှု၊ metric စောင့်ကြည့်မှုနှင့် rollback အစီအစဉ်ရေးပါ။']
      ]
    },
    {
      group: 'laravel',
      lessons: [
        ['Laravel Localization နှင့် ဘာသာစကားပြောင်းခြင်း', 'Language file များနှင့် translation key များကိုသုံးကာ စာသားကို code မှခွဲပြီး ဘာသာစကားအလိုက်ပြသပါ။', 'အတည်ပြုစာသားတစ်ခုကို မြန်မာ/အင်္ဂလိပ် translation file ထဲထည့်ပြီး locale ပြောင်းသည့်အခါစမ်းပါ။'],
        ['Exception Rendering ကို သတ်မှတ်ပြီး Error Response တစ်သမတ်တည်းထားခြင်း', 'Exception အမျိုးအစားအလိုက် log၊ HTTP status နှင့် အသုံးပြုသူမြင်ရမည့်စာသားကို ခွဲသတ်မှတ်ပါ။', 'မတွေ့သော resource နှင့် validation error တို့အတွက် JSON response shape တူညီစေရန် mapping ရေးပါ။'],
        ['Response Macro ဖြင့် ပြန်သုံးနိုင်သော Response ဖန်တီးခြင်း', 'Response macro သည် response formatting ကို ထပ်ခါတလဲလဲ မရေးဘဲ application-wide helper အဖြစ် စုစည်းပေးသည်။', 'API success response တစ်ခုအတွက် macro တည်ဆောက်ပြီး header နှင့် body ကို feature test ဖြင့်စစ်ပါ။'],
        ['Signed URL နှင့် Temporary Signed Route အသုံးပြုခြင်း', 'URL signature ဖြင့် link ပြင်ဆင်ခံရမှုကို စစ်နိုင်ပြီး သက်တမ်းကုန်ချိန်သတ်မှတ်ကာ အကန့်အသတ်ရှိသော action များကို ကာကွယ်နိုင်သည်။', 'အီးမေးလ်မှ account action link တစ်ခု ဖန်တီးပြီး signature ပျက်ခြင်းနှင့် expiry ကို စမ်းပါ။'],
        ['Session Driver နှင့် Session Fixation ကာကွယ်ခြင်း', 'Session driver ရွေးချယ်မှု၊ login နောက် session ID ပြောင်းခြင်းနှင့် logout အချိန် invalidate လုပ်ခြင်းကို နားလည်ပါ။', 'Login/logout feature test ရေးပြီး session identifier အသစ်ရရှိခြင်းနှင့် အဟောင်းမသုံးနိုင်ခြင်းကို စစ်ပါ။'],
        ['Password Reset Flow ကို လုံခြုံစွာ စီစဉ်ခြင်း', 'Reset token သက်တမ်း၊ one-time အသုံးပြုမှုနှင့် account enumeration မဖြစ်စေသော response များကို ဒီဇိုင်းဆွဲပါ။', 'မရှိသော email နှင့် ရှိသော email တို့အတွက် တုံ့ပြန်မှုတူညီကြောင်းနှင့် token သက်တမ်းကုန်ကြောင်း စမ်းပါ။'],
        ['Email Verification နှင့် Pending User အတွေ့အကြုံ', 'အီးမေးလ်အတည်ပြုမှုကို route protection၊ resend throttle နှင့် account state တို့နှင့် ချိတ်ဆက်ပါ။', 'အတည်မပြုရသေးသော user ၏ protected page access နှင့် verification နောက် redirect ကို test လုပ်ပါ။'],
        ['Custom Artisan Command နှင့် Interactive Option များ', 'Artisan command သည် ထပ်မံ run လုပ်နိုင်ခြင်း၊ option validation နှင့် ရှင်းလင်းသော console output ရှိသင့်သည်။', 'အဟောင်း data စစ်ဆေးသည့် command တစ်ခုလုပ်ပြီး dry-run option နှင့် exit code ထည့်ပါ။'],
        ['Scheduler Overlap နှင့် Timezone ကို စီမံခြင်း', 'Scheduled task ထပ်တူမပြေးစေရန် lock သုံးပြီး timezone၊ retry နှင့် failure notification ကို အတိအကျသတ်မှတ်ပါ။', 'နေ့စဉ် report task အတွက် overlap protection ထည့်ကာ test clock ဖြင့် အချိန်နှစ်ခုကိုစမ်းပါ။']
      ]
    },
    {
      group: 'api',
      lessons: [
        ['API Contract ကို Schema ဖြင့် စတင်ဒီဇိုင်းဆွဲခြင်း', 'Implementation မစမီ request၊ response၊ error နှင့် authentication ကို contract အဖြစ် သတ်မှတ်ခြင်းက client/server အဖွဲ့များကို ချိတ်ဆက်ပေးသည်။', 'Product list endpoint တစ်ခုအတွက် request/response schema ကိုရေးပြီး မဖြစ်မနေလိုအပ်သော field များကိုမှတ်ပါ။'],
        ['Resource URI နှင့် Nested Route အနက်ကို ရွေးချယ်ခြင်း', 'Resource ကို noun ဖြင့်ဖော်ပြပြီး nested route ကို parent-child အမှန်တကယ်ပိုင်ဆိုင်မှုရှိသောအခါသာသုံးပါ။', 'Organization, project, task များအတွက် အလွန်နက်သော URL မဖြစ်စေဘဲ endpoint များဒီဇိုင်းဆွဲပါ။'],
        ['Safe နှင့် Idempotent HTTP Semantics ကို ခွဲခြားခြင်း', 'Retry ဖြစ်နိုင်သော network တွင် method ၏ side effect နှင့် တူညီသော request ထပ်ပို့ခြင်း ဘယ်လိုအကျိုးဆက်ရှိသည်ကို ခွဲခြားသိပါ။', 'GET၊ PUT၊ PATCH၊ DELETE endpoint တစ်ခုစီအတွက် retry လုပ်လျှင် ဘာဖြစ်မည်ကို ဖော်ပြပါ။'],
        ['Content Negotiation နှင့် Media Type သတ်မှတ်ခြင်း', 'Accept နှင့် Content-Type header များက client လက်ခံနိုင်သည့် format နှင့် ပို့လိုက်သော body format ကို သတ်မှတ်သည်။', 'JSON သာလက်ခံသော endpoint အတွက် မှန်ကန်သော header နှင့် မကိုက်ညီသည့်အခါ response ကိုသတ်မှတ်ပါ။'],
        ['Problem Details ပုံစံဖြင့် API Error ဖော်ပြခြင်း', 'Error response တွင် status၊ machine-readable type၊ title နှင့် field detail ကို တစ်သမတ်တည်းပေးပါ။', 'Validation၊ not-found နှင့် permission error သုံးမျိုးကို client ကခွဲသိနိုင်မည့်ပုံစံရေးပါ။'],
        ['Response Envelope နှင့် Bare Resource ရွေးချယ်ခြင်း', 'အောင်မြင်သော response ကို wrapper ထဲထည့်မည်၊ resource ကိုတိုက်ရိုက်ပေးမည်ဆိုသည်ကို pagination metadata နှင့်အတူ အစကတည်းကသတ်မှတ်ပါ။', 'Single object၊ list နှင့် paginated list အတွက် response contract တစ်သမတ်တည်းဖြစ်အောင် ပြင်ဆင်ပါ။'],
        ['Cursor Pagination ဖြင့် အချက်အလက်များကို ရွှေ့ဖတ်ခြင်း', 'အချက်အလက်များအများကြီးနှင့် ပြောင်းလဲနေသောစာရင်းများတွင် cursor က offset ထက် တည်ငြိမ်သောအဆင့်လိုက်ဖတ်ရှုမှုကိုပေးနိုင်သည်။', 'ရက်စွဲနှင့် ID ပေါင်းစပ်ထားသော stable cursor ဖြင့် နောက်စာမျက်နှာကိုဖတ်သည့် contract ရေးပါ။'],
        ['Filter နှင့် Sort Parameter များအတွက် Query Grammar', 'Client က filter/sort ပေးနိုင်သည့် field နှင့် operator များကို whitelist လုပ်ခြင်းက API contract နှင့် security ကိုထိန်းသည်။', 'Order endpoint အတွက် ခွင့်ပြုမည့် filter၊ sort key နှင့် မှားယွင်းသော parameter response ကိုသတ်မှတ်ပါ။'],
        ['Sparse Fieldset ဖြင့် လိုအပ်သော Field များသာ ပြန်ပေးခြင်း', 'Client လိုအပ်သည့် field အနည်းငယ်သာ ပြန်ပေးခြင်းက payload လျှော့နိုင်သော်လည်း ရှုပ်ထွေးသော query အတွက် စည်းမျဉ်းလိုသည်။', 'Public profile endpoint တွင် ခွင့်ပြုသော field များနှင့် private field များကို allowlist ရေးပါ။'],
        ['Relationship Include ကို အကန့်အသတ်ဖြင့် ပံ့ပိုးခြင်း', 'Related resource ပါဝင်စေမည့် include parameter ကို depth၊ permission နှင့် query cost ဖြင့်ကန့်သတ်ပါ။', 'Article endpoint တွင် author နှင့် tags ကိုသာ include ခွင့်ပေးပြီး nested include ကိုတားပါ။'],
        ['Bulk Operation Endpoint နှင့် Partial Failure', 'အများအပြားလုပ်ဆောင်သည့် request တွင် all-or-nothing လိုသလား၊ row တစ်ခုချင်းရလဒ်ပြန်ပေးမလားကို ရှင်းလင်းစွာရွေးချယ်ပါ။', 'အများသုံး item update အတွက် invalid row တစ်ခုပါလာသောအခါ response အပြုအမူကိုဒီဇိုင်းဆွဲပါ။'],
        ['Idempotency Key ဖြင့် ထပ်ပို့သောငွေပေးချေမှုတားခြင်း', 'Client retry ကြောင့် side effect ထပ်မဖြစ်စေရန် key၊ request fingerprint နှင့် သိမ်းဆည်းမည့်သက်တမ်းကို သတ်မှတ်ပါ။', 'Order create request တစ်ခုကို key တူညီစွာနှစ်ကြိမ်ပို့ပြီး order တစ်ခုတည်းသာဖန်တီးကြောင်း စမ်းပါ။'],
        ['ETag ဖြင့် Optimistic Concurrency ထိန်းခြင်း', 'Resource version ကို ETag ဖြင့်ပေးပြီး If-Match မကိုက်ညီသော update ကို conflict အဖြစ်ပြန်ပေးနိုင်သည်။', 'Client နှစ်ခုက တူညီသော profile ကိုပြင်သည့်အခါ stale update ကို ကာကွယ်သည့် flow ရေးပါ။'],
        ['Conditional GET နှင့် If-None-Match အသုံးပြုခြင်း', 'ETag နှင့် conditional request က မပြောင်းလဲသော response ကို ပြန်ပို့ခြင်းလျှော့ပြီး cache ကိုမှန်ကန်စွာ update စေသည်။', 'Profile response အတွက် ETag ထုတ်ပေးပြီး တူညီသော tag ပြန်ပို့သည့်အခါ body မပါသော response ကိုစမ်းပါ။'],
        ['API Cache-Control ဖြင့် Private Data မပေါက်ကြားစေခြင်း', 'Public၊ private နှင့် no-store cache policy များကို response data sensitivity နှင့် ချိတ်ဆက်သတ်မှတ်ပါ။', 'Login user တစ်ဦးချင်းစီ၏ dashboard response ကို shared cache မသိမ်းကြောင်း header ဖြင့်စစ်ပါ။'],
        ['Retry-After နှင့် Rate Limited Client Behavior', 'Server က ပြန်ပေးသော Retry-After ကိုလိုက်နာပြီး client တွင် backoff နှင့် retry အများဆုံးအကြိမ်ကို သတ်မှတ်ပါ။', '429 response ရသော client flow အတွက် wait time နှင့် retry stop condition ရေးပါ။'],
        ['API Client တွင် Timeout နှင့် Cancellation စီမံခြင်း', 'Request timeout၊ user cancel နှင့် server error ကို ခွဲခြားပြီး မလိုအပ်သောအလုပ်ကို ဆက်မစေပါနှင့်။', 'ရှာဖွေမှု API တစ်ခုတွင် အဟောင်း request ကို cancel လုပ်ပြီး နောက်ဆုံး query ရလဒ်သာပြပါ။'],
        ['Asynchronous Job ကို 202 Accepted ဖြင့် စတင်ခြင်း', 'ကြာရှည်လုပ်ငန်းကို request တစ်ခုအတွင်းစောင့်မည့်အစား job resource နှင့် status polling ပုံစံကိုအသုံးပြုပါ။', 'Report ထုတ်ပေးသည့် endpoint အတွက် 202 response၊ status URL နှင့် completed result ကိုဒီဇိုင်းဆွဲပါ။'],
        ['Multipart Upload နှင့် Upload Session စီမံခြင်း', 'ဖိုင်ကြီးတင်ရာတွင် size၊ type၊ checksum နှင့် retry လုပ်နိုင်မှုကို အစကတည်းက API contract ထဲထည့်ပါ။', 'ဖိုင် upload endpoint အတွက် multipart field၊ validation error နှင့် upload success response ရေးပါ။'],
        ['Range Request ဖြင့် ဖိုင်ကို အပိုင်းလိုက်ပေးပို့ခြင်း', 'Range နှင့် Content-Range ကိုအသုံးပြုခြင်းက download ကိုပြန်ဆက်နိုင်စေပြီး partial content status ကိုလိုအပ်စေသည်။', 'ကြီးမားသော media ဖိုင်တစ်ခုအတွက် resume download လုပ်ရာတွင်လိုအပ်သော response header များကိုဖော်ပြပါ။'],
        ['Webhook Event Contract နှင့် Event ID သတ်မှတ်ခြင်း', 'Webhook တစ်ခုတွင် stable event ID၊ event type၊ timestamp နှင့် version ပါဝင်ရမည်။', 'Order paid event payload ရေးပြီး event ထပ်ရောက်သည့်အခါ consumer က duplicate မလုပ်ရန်လိုအပ်ချက်ထည့်ပါ။'],
        ['Webhook Signature ကို HMAC ဖြင့် စစ်ဆေးခြင်း', 'Shared secret signature ကို raw body နှင့် timestamp ပေါင်း၍စစ်ခြင်းက request ပြင်ဆင်ခံရမှုကိုရှာနိုင်သည်။', 'Signature မှားခြင်း၊ timestamp ဟောင်းခြင်းနှင့် body ပြင်ထားခြင်း သုံးမျိုးအတွက် test case ရေးပါ။'],
        ['Webhook Replay Attack နှင့် Duplicate Delivery ကာကွယ်ခြင်း', 'Webhook delivery သည် ထပ်ခါတလဲလဲရောက်နိုင်သောကြောင့် event ID ကို idempotent သိမ်းဆည်းပြီး replay window ထားပါ။', 'Event ID တူညီသော delivery နှစ်ခုရောက်သောအခါ side effect တစ်ကြိမ်သာဖြစ်ကြောင်း စမ်းပါ။'],
        ['Webhook Retry နှင့် Dead Letter လုပ်ငန်းစဉ်', 'Retry schedule၊ timeout နှင့် ဆက်တိုက်မအောင်မြင်သော event များကိုပြန်စစ်နိုင်သည့် dead-letter လမ်းကြောင်း သတ်မှတ်ပါ။', 'Receiver တစ်ခု ယာယီပျက်သည့်အခါ retry အကြိမ်နှင့် manual replay လုပ်ပုံကိုရေးပါ။'],
        ['OAuth 2.0 Grant ကို Client အမျိုးအစားအလိုက်ရွေးခြင်း', 'Browser၊ mobile နှင့် server client တို့အတွက် သင့်တော်သည့် OAuth flow ကိုရွေးပြီး client secret ကို public app ထဲမထည့်ပါနှင့်။', 'Mobile app နှင့် server-to-server integration အတွက် grant အမျိုးအစားရွေးကာ secret ထိန်းသိမ်းပုံကိုဖော်ပြပါ။'],
        ['JWT Claim, Audience နှင့် Expiry ကို စစ်ဆေးခြင်း', 'JWT ကို decode လုပ်ရုံဖြင့် ယုံကြည်၍မရဘဲ signature၊ issuer၊ audience၊ expiry နှင့် algorithm ကိုစစ်ရသည်။', 'မှန်ကန်သော signature ရှိသော်လည်း audience မကိုက်သော token ကို reject လုပ်သည့် test ရေးပါ။'],
        ['API Key ထုတ်ပေးခြင်း၊ အမည်ပေးခြင်းနှင့် Rotation', 'API key များကို hash ဖြင့်သိမ်း၊ scope ကန့်သတ်၊ နောက်ဆုံးအသုံးပြုချိန်ပြပြီး revoke/rotate လုပ်နိုင်အောင်ထားပါ။', 'အသုံးပြုသူတစ်ဦး key နှစ်ခုတပြိုင်နက်သုံးပြီး အဟောင်း revoke လုပ်နိုင်သည့် lifecycle ရေးပါ။'],
        ['Resource Ownership ဖြင့် Object-Level Access စစ်ခြင်း', 'Login အောင်မြင်ခြင်းက resource တိုင်းကိုဖတ်ခွင့်မဟုတ်သဖြင့် record ပိုင်ရှင်နှင့် tenant ကိုစစ်ပါ။', 'ID ပြောင်းပြီး အခြား user ၏ invoice ကိုတောင်းသည့် BOLA test case တည်ဆောက်ပါ။'],
        ['PKCE Flow ဖြင့် Public Client ကို Authenticate လုပ်ခြင်း', 'Public client တွင် client secret မသိမ်းနိုင်သောကြောင့် authorization code ကို verifier/challenge ဖြင့်ချိတ်ဆက်ပါ။', 'Verifier ပြောင်းထားသော token exchange ကို server ကလက်မခံကြောင်း flow diagram နှင့် test ရေးပါ။'],
        ['Access Token Revoke နှင့် Logout Semantics', 'Short-lived access token နှင့် revocable refresh token တို့ကိုခွဲပြီး logout နောက်သက်ရောက်မည့်အချိန်ကိုရှင်းလင်းပါ။', 'Logout ပြီး refresh token ပြန်သုံးသည့် request ကိုငြင်းပယ်ကြောင်းစမ်းပါ။'],
        ['Sensitive API Action များအတွက် Audit Event ထုတ်ခြင်း', 'ဘယ်သူက ဘယ် resource ကို ဘယ်အချိန်ပြောင်းခဲ့သည်ကို audit လုပ်ပြီး secret သို့မဟုတ် token ကို log မထည့်ပါနှင့်။', 'Role ပြောင်းလဲမှု endpoint အတွက် audit field များနှင့် ဖယ်ရှားရမည့် sensitive field များစာရင်းရေးပါ။'],
        ['OpenAPI Schema ကို Source of Truth အဖြစ်စီမံခြင်း', 'OpenAPI contract ကို version control ထဲထားပြီး implementation နှင့် example များကို တစ်ပြိုင်နက်စစ်ပါ။', 'Endpoint တစ်ခုအတွက် required field၊ error response၊ authentication နဲ့ example တို့ပါသော schema ရေးပါ။'],
        ['API Client ကို Schema မှထုတ်လုပ်ပြီး Version ကိုထိန်းခြင်း', 'Generated client က type error လျှော့ပေးနိုင်သော်လည်း schema change နှင့် client release အစဉ်ကို စီမံရသည်။', 'Breaking field rename တစ်ခုအတွက် server/client compatibility အစီအစဉ်ကို ဖော်ပြပါ။'],
        ['Consumer-Driven Contract Test ဖြင့် Client လိုအပ်ချက်စစ်ခြင်း', 'Client များ အမှန်တကယ်အားကိုးသော response shape ကို contract test ဖြင့်စစ်ပြီး မရည်ရွယ်သော breaking change ဖမ်းပါ။', 'Mobile client နှင့် web client တို့အတွက် သုံးသော field များကိုစာရင်းပြုစု၍ provider verification ရေးပါ။'],
        ['API Deprecation နှင့် Sunset ကို ကြိုတင်ကြေညာခြင်း', 'Version အဟောင်းဖယ်ရှားမည့်နေ့၊ migration guide နှင့် အသုံးပြုမှု metric များကို သတ်မှတ်ပြီး client များကိုကြိုတင်အသိပေးပါ။', 'Field တစ်ခုဖယ်ရှားမည့်အစီအစဉ်အတွက် warning header၊ sunset date နှင့် migration step ရေးပါ။'],
        ['API Gateway တွင် Routing နှင့် Cross-Cutting Policy ထားခြင်း', 'Gateway သည် routing၊ TLS နှင့် shared policy ကိုစုစည်းနိုင်သော်လည်း business authorization ကို မျက်ကွယ်မပြုသင့်ပါ။', 'Gateway လုပ်သင့်သောအလုပ်နှင့် application ထဲတွင်သာလုပ်သင့်သောအလုပ်ကို ခွဲခြားထားပါ။'],
        ['Backend-for-Frontend ဖြင့် Client လိုအပ်ချက်ကို ဖြည့်ဆည်းခြင်း', 'Client အမျိုးအစားတစ်ခုချင်းစီအတွက် သင့်တော်သော API composition ကိုထားပြီး duplicate business rule မဖြစ်စေရန်စီမံပါ။', 'Mobile home screen အတွက် service အများအပြားကိုပေါင်းပေးမည့် BFF boundary ကိုဆွဲပါ။'],
        ['Request ID ဖြင့် API Trace ကို အဆုံးမှအဆုံးလိုက်ခြင်း', 'Request တစ်ခုစီကို correlation ID ပေးပြီး gateway၊ service နှင့် log များတွင် ဆက်စပ်ကြည့်ရှုနိုင်စေပါ။', 'Request ID မရှိလာသောအခါထုတ်ပေးပုံနှင့် response header/log တွင် သယ်ဆောင်ပုံကိုသတ်မှတ်ပါ။'],
        ['Server-Sent Events ဖြင့် Long-Running Job Progress ပို့ခြင်း', 'Job status ကို polling အကြိမ်များစွာမလုပ်ဘဲ server က client ထံ progress event များကို တစ်လမ်းသွားပို့နိုင်သည်။', 'Report generation အတွက် progress event၊ reconnect နှင့် job ပြီးဆုံးချိန်ကို client/server နှစ်ဘက်တွင်သတ်မှတ်ပါ။'],
        ['API Body Size Limit နှင့် Resource Consumption ကန့်သတ်ခြင်း', 'Request အရွယ်အစား၊ array အရှည်နှင့် nested depth ကိုကန့်သတ်ခြင်းက မလိုအပ်သော memory/CPU အသုံးပြုမှုကိုတားဆီးသည်။', 'Bulk endpoint အတွက် body byte limit နှင့် item count limit သတ်မှတ်ပြီး limit ကျော်လွန်သော response ကိုရေးပါ။']
      ]
    },
    {
      group: 'react',
      lessons: [
        ['Portal ဖြင့် Modal နှင့် Overlay ကို DOM အပြင်ဘက်တင်ခြင်း', 'Portal သည် DOM hierarchy မတူသော်လည်း React tree အတွင်း event နှင့် context ဆက်စပ်မှုကို ထိန်းထားပေးသည်။', 'Modal ကို portal ဖြင့် body ထဲ render လုပ်ပြီး Escape ပိတ်ခြင်း၊ focus နှင့် backdrop click ကိုစမ်းပါ။'],
        ['Compound Component ဖြင့် အတူတကွအလုပ်လုပ်သော UI တည်ဆောက်ခြင်း', 'Parent နှင့် child component များကို ပေါင်းစပ်အသုံးပြုသူဘက်မှ သဘာဝကျစေပြီး shared state ကို context ဖြင့်ချိတ်ပါ။', 'Tabs၊ Tabs.List၊ Tabs.Panel ပုံစံတစ်ခုဆောက်ပြီး မမှန်သော composition ကိုကာကွယ်ပါ။'],
        ['Children Composition ဖြင့် Component ကို ပြောင်းလဲအသုံးပြုခြင်း', 'အတွင်းပိုင်းအကြောင်းအရာကို hard-code မလုပ်ဘဲ children နှင့် slot ပုံစံဖြင့် component ကို ပြန်သုံးနိုင်အောင်လုပ်ပါ။', 'Card component တစ်ခုတွင် title၊ body နှင့် action ကို children composition ဖြင့်ပံ့ပိုးပါ။'],
        ['useId ဖြင့် Accessible ID များ ချိတ်ဆက်ခြင်း', 'Server render နှင့် client render တို့တွင် တည်ငြိမ်သော ID ရရှိစေပြီး label၊ description နှင့် input ကိုချိတ်နိုင်သည်။', 'Reusable input component အတွက် label နှင့် error description ကို useId ဖြင့်ချိတ်ပါ။'],
        ['useLayoutEffect ဖြင့် Layout Measurement လုပ်ခြင်း', 'Paint မဖြစ်မီ DOM အရွယ်အစားလိုအပ်သောအခြေအနေတွင်သာ layout effect သုံးပြီး ပုံမှန် effect ကိုဦးစားပေးပါ။', 'Tooltip နေရာချထားရာတွင် measurement လိုသည့်အချိန်ကိုတိုင်းပြီး effect နှစ်မျိုး၏ flicker ကိုနှိုင်းပါ။'],
        ['useImperativeHandle ဖြင့် Ref API ကို ကန့်သတ်ခြင်း', 'Child component ၏ DOM အားလုံးကိုမဖော်ဘဲ parent လိုအပ်သော imperative method အနည်းငယ်သာ expose လုပ်ပါ။', 'Text input component မှ focus နှင့် clear method နှစ်ခုသာ parent ကိုပေးပါ။'],
        ['useSyncExternalStore ဖြင့် ပြင်ပ Store ချိတ်ဆက်ခြင်း', 'React အပြင်ဘက်ရှိ subscription store ကို concurrent rendering နှင့်ကိုက်ညီစွာ subscribe/getSnapshot ဖြင့်ချိတ်ပါ။', 'Window online/offline state ကို external store အဖြစ်ချိတ်ပြီး unsubscribe သန့်ရှင်းမှုစမ်းပါ။'],
        ['useTransition ဖြင့် အရေးမကြီးသော Update ကို ချောမွေ့စေခြင်း', 'အသုံးပြုသူမြင်သာသော input update ကို အရင်တုံ့ပြန်စေပြီး ကြီးမားသော UI update ကို transition အဖြစ်ခွဲပါ။', 'Search input ကို ချက်ချင်းပြပြီး ရလဒ်စာရင်းကြီးကို transition ဖြင့် update လုပ်ပါ။'],
        ['useDeferredValue ဖြင့် ရှာဖွေရလဒ် Rendering ကို ရွှေ့ခြင်း', 'တန်ဖိုးအသစ်ရတိုင်း လေးလံသော render ကိုချက်ချင်းမလုပ်ဘဲ deferred value ဖြင့် UI ကိုတုံ့ပြန်လွယ်စေပါ။', 'စာရင်းကြီးတစ်ခု filter လုပ်ရာတွင် input လက်ငင်းတုံ့ပြန်မှုနှင့် deferred result ကိုနှိုင်းယှဉ်ပါ။']
      ]
    },
    {
      group: 'dart',
      lessons: [
        ['Dart String, Unicode နှင့် Rune ကိုင်တွယ်ခြင်း', 'Dart string သည် UTF-16 code unit များအပေါ် အခြေခံနိုင်သဖြင့် မြန်မာစာနှင့် emoji ကို အက္ခရာရေတွက်ရာတွင် rune ကိုနားလည်ပါ။', 'Emoji နှင့် မြန်မာစာပါသော စာကြောင်းတစ်ခု၏ length နှင့် runes ကိုနှိုင်းယှဉ်ပြီး စာလုံးအရေအတွက်ပြပါ။'],
        ['const, final နှင့် Lazy Initialization ကို ရွေးချယ်ခြင်း', 'ပြောင်းလဲမည့်တန်ဖိုး၊ runtime မှာတစ်ကြိမ်သတ်မှတ်မည့်တန်ဖိုးနှင့် compile-time constant တို့၏ ကွာခြားချက်ကိုလေ့လာပါ။', 'App configuration object တစ်ခုတွင် const/final ကိုသင့်တော်သလိုသုံးပြီး ပြောင်းလဲမှုတားဆီးကြောင်းစမ်းပါ။'],
        ['String နှင့် Number Parsing ကို လုံခြုံစွာလုပ်ခြင်း', 'User input မှ parse လုပ်ရာတွင် format မမှန်နိုင်ကြောင်း ထည့်စဉ်းစားပြီး null result သို့မဟုတ် validation error ကိုကိုင်တွယ်ပါ။', 'ဈေးနှုန်း input မှ int/double ပြောင်းပြီး အလွတ်၊ အက္ခရာပါ၊ overflow ဖြစ်သည့်အခြေအနေများကို စမ်းပါ။'],
        ['Enum ကို Value နှင့် Switch Exhaustiveness အတွက်သုံးခြင်း', 'Enum သည် အကန့်အသတ်ရှိသော state များကိုဖော်ပြပြီး switch expression များတွင် case အားလုံးပြည့်စုံကြောင်း စစ်နိုင်သည်။', 'Order status enum တည်ဆောက်ပြီး status အားလုံးအတွက် label နှင့် အရောင်ကို switch ဖြင့်ပြန်ပေးပါ။'],
        ['Records ဖြင့် အမည်ပါသော Data ကို အတွဲလိုက်ပြန်ပေးခြင်း', 'Record သည် type အသစ်မဖန်တီးဘဲ positional သို့မဟုတ် named value များအုပ်စုကို function မှပြန်ပေးနိုင်သည်။', 'အမည်နှင့် အသက်ကို named record အဖြစ်ပြန်ပေးပြီး caller ဘက်တွင် destructure လုပ်ပါ။'],
        ['Pattern Matching ဖြင့် Data ကို ခွဲခြမ်းဖတ်ခြင်း', 'Pattern matching သည် type၊ structure နှင့် value ကိုတစ်နေရာတည်းစစ်ပြီး branch logic ကိုရှင်းလင်းစေသည်။', 'API result record ကို success/error shape အလိုက် pattern ဖြင့်ခွဲပြီး သင့်တော်သော message ပြပါ။'],
        ['Switch Expression နှင့် Guard ဖြင့် Branch ရေးခြင်း', 'Switch expression က value ပြန်ပေးနိုင်ပြီး guard condition ဖြင့် pattern တူသော်လည်း case ထပ်ခွဲနိုင်သည်။', 'အသက်အပိုင်းအခြားတွက်သည့် switch expression တစ်ခုရေးပြီး boundary တန်ဖိုးများကိုစမ်းပါ။'],
        ['Sealed Class ဖြင့် အမျိုးအစားကန့်သတ်ထားသော Result ဖန်တီးခြင်း', 'Sealed type ဖြင့် ဖြစ်နိုင်သော subtype များကိုကန့်သတ်ပြီး compiler က exhaustive handling ကိုကူညီစစ်ဆေးစေပါ။', 'Loading၊ data နှင့် failure state သုံးမျိုးပါသော result type တည်ဆောက်ပြီး UI mapping ရေးပါ။'],
        ['Type Alias နှင့် Function Type ကို ဖတ်လွယ်စေခြင်း', 'Type alias သည် ရှုပ်ထွေးသော generic သို့မဟုတ် callback type များကို အဓိပ္ပာယ်ရှိသောအမည်ပေးနိုင်သည်။', 'API callback type တစ်ခုကို typedef ဖြင့်အမည်ပေးပြီး function parameter တွင်သုံးပါ။'],
        ['Extension Type ဖြင့် Zero-Cost Domain Type များဖန်တီးခြင်း', 'Extension type သည် primitive value ပေါ် domain-specific API တည်ဆောက်နိုင်ပြီး representation ကိုမလိုအပ်ဘဲ ထပ်မထည့်ပါ။', 'User ID ကို int အပေါ် extension type လုပ်ပြီး ID နှစ်မျိုးရောမသုံးနိုင်အောင် type contract စမ်းပါ။'],
        ['Type Promotion နှင့် Flow Analysis ကို နားလည်ခြင်း', 'Null/type check ပြီးနောက် compiler က variable type ကို ပိုကျဉ်းစွာသိနိုင်သည့်အခြေအနေနှင့် promotion မဖြစ်သည့်အခြေအနေကို ခွဲခြားပါ။', 'Nullable object ကို type check စစ်ပြီး safe member access လုပ်ပြီး promotion ပျောက်နိုင်သည့် captured variable ဥပမာကိုစမ်းပါ။'],
        ['Covariant Generic နှင့် Type Safety အလဲအလှယ်', 'Generic type ၏ variance သည် subtype ကို ဘယ်နေရာတွင် အစားထိုးနိုင်မည်ကိုသက်ရောက်သဖြင့် API boundary မှာသတိထားပါ။', 'Animal/Dog list ဥပမာဖြင့် covariance ကြောင့် မလုံခြုံသော add operation ဖြစ်နိုင်ပုံကိုရှင်းပြပါ။'],
        ['Collection If, For နှင့် Spread ကို ပေါင်းစပ်အသုံးပြုခြင်း', 'Collection literal အတွင်း condition၊ loop နှင့် spread ထည့်ခြင်းက ရလဒ်စာရင်းကိုတိုတိုနှင့်ဖော်ပြနိုင်သည်။', 'ခွင့်ပြုချက်ရှိမှ menu item ထည့်ပြီး role အလိုက် list နှစ်ခုကို spread ဖြင့်ပေါင်းပါ။'],
        ['Synchronous နှင့် Asynchronous Generator ကို ခွဲသုံးခြင်း', 'sync* သည် Iterable ထုတ်ပေးပြီး async* သည် Stream ထုတ်ပေးသောကြောင့် consumer နှင့် timing အလိုက်ရွေးပါ။', 'ကိန်းဂဏန်း sequence တစ်ခုကို sync* နှင့် timer event များကို async* ဖြင့်ထုတ်ပေးပါ။'],
        ['Isolate ဖြင့် CPU အလုပ်ကို သီးခြားလုပ်ဆောင်ခြင်း', 'Isolate များတွင် memory သီးခြားရှိပြီး message ဖြင့်ဆက်သွယ်သဖြင့် UI thread ကိုပိတ်စေသော CPU အလုပ်များကိုခွဲနိုင်သည်။', 'ကြီးမားသော JSON list ကို parse လုပ်သည့်အလုပ်ကို isolate သို့ပို့ပြီး ရလဒ်ပြန်လက်ခံပါ။'],
        ['Isolate Message Protocol နှင့် Port ကို စီမံခြင်း', 'SendPort/ReceivePort lifecycle၊ message type နှင့် shutdown ကိုသတ်မှတ်ခြင်းက isolate ဆက်သွယ်မှုကိုယုံကြည်စိတ်ချစေသည်။', 'Worker isolate တစ်ခုထံ task၊ result နှင့် close message ပို့သည့် protocol ရေးပါ။'],
        ['Zone ဖြင့် Async Error နှင့် Context ကို ခြေရာခံခြင်း', 'Zone သည် asynchronous callback များတစ်လျှောက် error နှင့် context ကို စီမံနိုင်သော်လည်း ပုံမှန်အားဖြင့် မလိုအပ်ဘဲမသုံးသင့်ပါ။', 'Zone error handler ဖြင့် uncaught async error ကို log လုပ်ပြီး ပုံမှန် try/catch နှင့် ကွာခြားချက်ရေးပါ။'],
        ['StreamController နှင့် Subscription ကို သန့်ရှင်းစွာပိတ်ခြင်း', 'Stream event ထုတ်ပေးသူနှင့် listener တို့၏ lifecycle၊ cancellation နှင့် resource close တို့ကိုရှင်းလင်းစွာကိုင်တွယ်ပါ။', 'Timer မှတန်ဖိုးပို့သော stream တစ်ခုဖန်တီးပြီး cancel လုပ်သောအခါ Timer ကိုပိတ်ပါ။'],
        ['Stream Transformer ဖြင့် Event များကို ပြောင်းလဲခြင်း', 'Transformer သည် event ကို map၊ filter သို့မဟုတ် batch လုပ်နိုင်ပြီး error နှင့် done event များကိုလည်းဆက်လက်ပို့ရသည်။', 'Sensor stream မှ မမှန်သောတန်ဖိုးဖယ်ပြီး ကျန်တန်ဖိုးများကို normalize လုပ်ပါ။'],
        ['Future.wait နှင့် Partial Failure ကို ထိန်းခြင်း', 'Future အများအပြားကို တပြိုင်နက်စောင့်နိုင်သော်လည်း တစ်ခုမအောင်မြင်လျှင် အားလုံး၏ error behavior ကိုရွေးရသည်။', 'Profile နှင့် settings request နှစ်ခုကို parallel လုပ်ပြီး optional request ပျက်သော်လည်း screen ပြနိုင်အောင်စီမံပါ။'],
        ['Future Timeout နှင့် Retry Policy ကို ရွေးချယ်ခြင်း', 'Timeout သတ်မှတ်ခြင်းက caller ကိုစောင့်မနေစေသော်လည်း မူရင်းအလုပ်ကိုအလိုအလျောက်မရပ်စေနိုင်ကြောင်း နားလည်ပါ။', 'Network request ကို timeout လုပ်ပြီး idempotent read အတွက် bounded retry/backoff ထည့်ပါ။'],
        ['Async အလုပ်များတွင် Cancellation Token ပုံစံတည်ဆောက်ခြင်း', 'Dart Future ကိုယ်တိုင် အလုပ်တိုင်း cancel မလုပ်နိုင်သဖြင့် cancellation signal ကို API နှင့် resource တို့အကြား ဒီဇိုင်းဆွဲပါ။', 'Screen ပိတ်သွားသည့်အခါ ရလဒ်အသုံးမပြုတော့ရန် cancel flag ဖြင့် long-running task ကိုရပ်ပါ။'],
        ['Error, StackTrace နှင့် Rethrow ကို မှန်ကန်စွာအသုံးပြုခြင်း', 'Error ကိုဖမ်းပြီး context ထည့်နိုင်သော်လည်း stack trace မပျောက်စေရန် rethrow နှင့် typed exception ကိုသင့်တော်စွာသုံးပါ။', 'Repository error ကို domain exception ဖြင့်ပတ်ပြီး မူလ stack trace ကိုထိန်းသည့် code ရေးပါ။'],
        ['DateTime, UTC နှင့် Duration တွက်ချက်ခြင်း', 'Local time နှင့် UTC ကိုခွဲသိမ်းပြီး display အချိန်ပြောင်းခြင်း၊ duration နှင့် calendar date တွက်ခြင်းကိုသေချာစွာကိုင်တွယ်ပါ။', 'UTC timestamp ကို Myanmar local time ပြောင်းပြပြီး daylight-saving ရှိသော zone ကို hard-code မလုပ်ရသည့်အကြောင်းရှင်းပါ။'],
        ['RegExp ကို Validation နှင့် Parsing အတွက် ကန့်သတ်သုံးခြင်း', 'Regular expression သည် ရိုးရှင်းသော pattern အတွက်သင့်ပြီး nested grammar အစားထိုးရန်မသုံးသင့်ပါ။', 'Email မဟုတ်သော user ID format တစ်ခုကို RegExp ဖြင့် validate လုပ်ပြီး false positive များစမ်းပါ။'],
        ['Uri ဖြင့် Query Parameter နှင့် Path ကို လုံခြုံစွာဖွဲ့ခြင်း', 'String ကိုတိုက်ရိုက်ဆက်မည့်အစား Uri builder ကိုသုံးခြင်းက encoding နှင့် query parameter ထပ်တလဲလဲကိုစီမံပေးသည်။', 'Search text တွင် မြန်မာစာနှင့် space ပါသည့် API URL ကို Uri ဖြင့်တည်ဆောက်ပြီးပြန်ဖတ်ပါ။'],
        ['File နှင့် Directory I/O ကို Async အဖြစ်လုပ်ဆောင်ခြင်း', 'File ရေးဖတ်ခြင်းကို asynchronous လုပ်ပြီး path ကို platform-independent နည်းဖြင့်ဖွဲ့စည်းပါ။', 'JSON configuration ဖိုင်တစ်ခုကို temp directory ထဲရေး၊ ဖတ်ပြီး file ပျက်နေသည့်အခါကိုကိုင်တွယ်ပါ။'],
        ['Platform နှင့် Environment ကို Conditional လုပ်ဆောင်ခြင်း', 'Command-line၊ operating system နှင့် environment variable များကိုခွဲဖတ်ပြီး secret ကို source code ထဲမထည့်ပါနှင့်။', 'CLI tool တစ်ခုတွင် output path ကို environment variable မှယူပြီး မပေးလျှင်အသုံးပြုသူအားရှင်းပြပါ။'],
        ['pubspec Dependency Constraint နှင့် Lockfile စီမံခြင်း', 'Version constraint သည် လက်ခံနိုင်သည့် range ကိုသတ်မှတ်ပြီး application lockfile က ထပ်မံတည်ဆောက်နိုင်မှုကိုထိန်းသည်။', 'Dependency တစ်ခု update လုပ်ပြီး diff စစ်ကာ application နှင့် reusable package lockfile ကွာခြားချက်ရှင်းပါ။'],
        ['Package API နှင့် Internal Library Boundary ခွဲခြားခြင်း', 'Public export များကို barrel library မှစီမံပြီး implementation detail များကို package user ထံမဖော်ပါနှင့်။', 'Mini package တစ်ခု၏ public import path သတ်မှတ်ပြီး private implementation file များကိုခွဲပါ။'],
        ['Unit Test တွင် Fake နှင့် Mock ရွေးချယ်ခြင်း', 'Fake သည် behavior အနည်းငယ်အမှန်တကယ်အကောင်အထည်ဖော်နိုင်ပြီး mock သည် interaction ကိုစစ်ရန်အသုံးဝင်သည်။', 'In-memory repository fake တစ်ခုဖြင့် service test ရေးပြီး ဘာကြောင့် mock အစား fake သုံးသည်ကိုမှတ်ပါ။'],
        ['Async Test နှင့် Fake Clock ဖြင့် အချိန်စမ်းသပ်ခြင်း', 'အချိန်အပေါ်မူတည်သော code ကို အမှန်တကယ်စောင့်မနေဘဲ controllable clock သို့မဟုတ် fake async ဖြင့်စမ်းပါ။', 'Debounce လုပ်သည့် function အတွက် 300ms မစောင့်ဘဲ timer ကို advance လုပ်သော test ရေးပါ။'],
        ['Dart Formatter နှင့် Analyzer Diagnostic ကို အသုံးပြုခြင်း', 'Formatter က style ကိုတစ်သမတ်တည်းဖြစ်စေပြီး analyzer က type နှင့် သံသယဖြစ်ဖွယ် pattern များကိုပြသည်။', 'Project ကို format/analyze လုပ်ပြီး warning သုံးခုကို severity အလိုက်ပြင်ပါ။'],
        ['Linter Rule နှင့် Team Analysis Options သတ်မှတ်ခြင်း', 'Linter သည် team convention ကိုအလိုအလျောက်စစ်နိုင်ပြီး rule များကို project ရည်ရွယ်ချက်နှင့်ကိုက်ညီစွာရွေးပါ။', 'analysis_options.yaml တွင် အသုံးဝင်သော rule များသတ်မှတ်ပြီး code smell ဥပမာကိုရှာပါ။'],
        ['Public API အတွက် Dart Documentation ရေးခြင်း', 'Doc comment သည် public type နှင့် parameter ၏ ရည်ရွယ်ချက်၊ edge case နှင့် example ကို ရှင်းပြသင့်သည်။', 'Reusable date utility တစ်ခုအတွက် API doc နှင့် example ရေးပြီး dart doc ဖြင့်စစ်ပါ။'],
        ['Command-Line Argument နှင့် Exit Code ဒီဇိုင်းဆွဲခြင်း', 'CLI program သည် argument validation၊ usage message နှင့် success/failure exit code တို့ကို script များနားလည်နိုင်အောင်ပေးရသည်။', 'CSV စစ်ဆေးသည့် CLI တစ်ခုအတွက် --input option၊ usage text နှင့် invalid file exit code သတ်မှတ်ပါ။'],
        ['JSON Code Generation နှင့် Generated File Workflow', 'Code generation သည် model boilerplate လျှော့နိုင်သော်လည်း annotation၊ generator version နှင့် generated file စီမံပုံကို တစ်သမတ်တည်းထားပါ။', 'Nested response model တစ်ခုကို generator ဖြင့်ထုတ်ပြီး source နှင့် generated output ကိုခွဲစစ်ပါ။'],
        ['Dart Language Version နှင့် SDK Constraint နားလည်ခြင်း', 'SDK constraint သည် project အသုံးပြုနိုင်သော language feature နှင့် runtime compatibility ကို သတ်မှတ်ပေးသည်။', 'Package တစ်ခုအတွက် အနည်းဆုံး SDK version ရွေးပြီး အသုံးပြုထားသော syntax နှင့်ကိုက်ညီကြောင်းစစ်ပါ။']
      ]
    },
    {
      group: 'flutter',
      lessons: [
        ['Platform Channel ဖြင့် Native Android/iOS API ချိတ်ဆက်ခြင်း', 'Flutter plugin မရှိသော native capability ကို method channel မှတစ်ဆင့်ခေါ်နိုင်ပြီး message contract နှင့် platform error ကိုသတ်မှတ်ရသည်။', 'Battery level ဖတ်သည့် channel တစ်ခုကို Android/iOS နှစ်ဘက်တွင်ဒီဇိုင်းဆွဲပြီး unsupported platform ကိုကိုင်တွယ်ပါ။'],
        ['Runtime Permission ကို အချိန်မှန်တောင်းခြင်း', 'Camera/location permission ကို feature သုံးချိန်မှတောင်းပြီး denied၊ permanently denied နှင့် rationale အခြေအနေများကိုကွဲပြားစွာပြပါ။', 'Camera ဖွင့်သည့်အခါ permission flow တည်ဆောက်ပြီး deny ပြီးနောက် Settings သို့သွားနိုင်ရန်ပြပါ။'],
        ['App Lifecycle နှင့် Background/Resume State စီမံခြင်း', 'App inactive၊ paused နှင့် resumed အခြေအနေများတွင် timer၊ media နှင့် network resource များကိုသင့်တော်စွာထိန်းပါ။', 'App background သို့ဝင်သည့်အခါ media ကို pause လုပ်ပြီး ပြန်ဝင်သည့်အခါ state ကိုပြန်စစ်ပါ။'],
        ['Background Task ကို Platform ကန့်သတ်ချက်နှင့်အတူ စီစဉ်ခြင်း', 'Mobile OS သည် background execution ကိုကန့်သတ်နိုင်သဖြင့် မဖြစ်မနေအချိန်တိကျမှုလို/မလိုအရ task API ကိုရွေးပါ။', 'နေ့စဉ် sync လုပ်ငန်းတစ်ခုအတွက် best-effort schedule နှင့် user က app ပြန်ဖွင့်မှလုပ်မည့် fallback ကိုဒီဇိုင်းဆွဲပါ။'],
        ['Push Notification Permission နှင့် Token Lifecycle', 'Notification permission နှင့် push token သည် install/update အတွင်းပြောင်းနိုင်သောကြောင့် backend နှင့် lifecycle ကိုထိန်းညှိပါ။', 'Token အသစ်ရသောအခါ server ထံ register လုပ်ပြီး logout/uninstall အခြေအနေအတွက် cleanup plan ရေးပါ။'],
        ['Local Notification ကို Timezone နှင့်အတူ စီစဉ်ခြင်း', 'Local notification သည် device timezone ပြောင်းခြင်း၊ permission နှင့် schedule identifier များကြောင့် ထပ်တလဲလဲမပေါ်စေရန် စီမံရသည်။', 'Reminder တစ်ခုကို timezone ပြောင်းလဲမှုအောက်တွင်လည်း တစ်ကြိမ်သာပေါ်စေရန် schedule/update/cancel flow ရေးပါ။'],
        ['Camera နှင့် Media Resource ကို လုံခြုံစွာ အသုံးပြုခြင်း', 'Camera controller ကို init/dispose မှန်ကန်စွာလုပ်ပြီး permission၊ device မရှိခြင်းနှင့် app interruption ကိုကိုင်တွယ်ပါ။', 'ဓာတ်ပုံရိုက်သည့် screen တစ်ခုတွင် route ပိတ်ချိန် camera resource ပိတ်သွားကြောင်းစစ်ပါ။'],
        ['SQLite Database နှင့် Versioned Migration စီမံခြင်း', 'Local relational data အတွက် schema version နှင့် migration ရှိရမည်၊ user data မပျောက်စေရန် upgrade လမ်းကြောင်းစမ်းရသည်။', 'Version 1မှ version 2 သို့ column ထည့်သော migration ရေးပြီး test database တွင်အဟောင်း data မပျောက်ကြောင်းစစ်ပါ။'],
        ['Flutter Desktop တွင် Keyboard နှင့် Mouse Interaction', 'Desktop UI တွင် focus traversal၊ shortcut၊ hover နှင့် context menu များကို touch-first UI ထက်ပိုမိုထည့်စဉ်းစားပါ။', 'Keyboard သာသုံး၍ form တစ်ခုဖြည့်နိုင်အောင် focus order နှင့် submit shortcut ထည့်ပါ။'],
        ['Adaptive Navigation ဖြင့် Screen Size အလိုက် UI ပြောင်းခြင်း', 'Phone၊ tablet နှင့် desktop တို့တွင် တူညီသော destination များကို bottom navigation၊ rail သို့မဟုတ် side bar ဖြင့်ပြနိုင်သည်။', 'Destination သုံးခုပါသော app တစ်ခုတွင် breakpoint အလိုက် navigation widget ပြောင်းသော်လည်း state မပျောက်အောင်လုပ်ပါ။'],
        ['CustomPainter ဖြင့် Canvas ပေါ် Graphic ရေးဆွဲခြင်း', 'CustomPainter သည် widget အများကြီးမလိုသော chart သို့မဟုတ် diagram ကို canvas ပေါ်ထိရောက်စွာရေးဆွဲနိုင်သည်။', 'Progress ring တစ်ခုရေးဆွဲပြီး repaint လိုသည့်အခြေအနေနှင့် shouldRepaint ကိုသတ်မှတ်ပါ။'],
        ['Gesture Arena နှင့် Nested Scroll Gesture ကို ဖြေရှင်းခြင်း', 'Flutter ၏ gesture recognizer များသည် တူညီသော pointer အတွက်အနိုင်ရသူရွေးသဖြင့် nested scroll/drag ကိုနားလည်ပါ။', 'Scrollable card အတွင်း horizontal swipe ထည့်ပြီး vertical scroll နှင့် မတိုက်ခိုက်စေရန်စမ်းသပ်ပါ။'],
        ['Riverpod နှင့် Provider ကို Project လိုအပ်ချက်အလိုက် နှိုင်းယှဉ်ခြင်း', 'State management ရွေးချယ်ရာတွင် testability၊ dependency scope နှင့် team familiarity ကိုနှိုင်းပြီး framework များရောမသုံးပါနှင့်။', 'တူညီသော counter feature ကို Provider နှင့် Riverpod ဖြင့်အသေးစား prototype လုပ်၍ trade-off မှတ်တမ်းတင်ပါ။']
      ]
    },
    {
      group: 'security',
      lessons: [
        ['Asset Inventory ဖြင့် ကာကွယ်ရမည့်အရာများကို စာရင်းပြုစုခြင်း', 'Security ဆုံးဖြတ်ချက်မချမီ data၊ account၊ service နှင့် secret တို့၏ တန်ဖိုးနှင့် owner ကိုသတ်မှတ်ပါ။', 'သင်ခန်းစာ website အတွက် အရေးကြီးသော asset ငါးခုနှင့် တစ်ခုစီ၏ ထိခိုက်နိုင်မှုကိုရေးပါ။'],
        ['Threat Modeling ဖြင့် Attack Path ကို ကြိုတင်ရှာခြင်း', 'Threat model သည် attacker၊ entry point၊ trust boundary နှင့် အကျိုးဆက်တို့ကို စနစ်တကျကြည့်စေသည်။', 'File upload feature အတွက် data-flow ပုံဆွဲပြီး အနည်းဆုံး threat သုံးခုနှင့် mitigation ရေးပါ။'],
        ['Trust Boundary နှင့် Data Flow ကို ပုံဖော်ခြင်း', 'Browser၊ API၊ database နှင့် third-party service အကြား ယုံကြည်မှုအဆင့်ပြောင်းသည့်နေရာတိုင်းကို စစ်ဆေးပါ။', 'Login request ၏ data flow ကိုဆွဲပြီး validation နှင့် authorization ထားရမည့် boundary များမှတ်ပါ။'],
        ['Data Classification နှင့် Retention ကို သတ်မှတ်ခြင်း', 'Public၊ internal နှင့် sensitive data ကိုခွဲပြီး မလိုအပ်တော့သော personal data ကို ဘယ်အချိန်ဖျက်မည်သတ်မှတ်ပါ။', 'User profile field များကို sensitivity အလိုက်ခွဲပြီး retention rule နှင့် access owner ကိုရေးပါ။'],
        ['Password Hashing နှင့် Work Factor ကို နားလည်ခြင်း', 'Password ကို reversible encryption မလုပ်ဘဲ salt ပါသော သင့်တော်သည့် password hashing function ဖြင့်သိမ်းပါ။', 'Password storage flow ကိုရေးပြီး plaintext log၊ fast hash နှင့် salted password hash တို့၏အန္တရာယ်နှိုင်းပါ။'],
        ['MFA Enrollment နှင့် Recovery ကို လုံခြုံစွာဒီဇိုင်းဆွဲခြင်း', 'ဒုတိယအတည်ပြုနည်းထည့်ရာတွင် device ပျောက်သည့် recovery လမ်းကြောင်းကိုလည်း လုံခြုံစွာစီစဉ်ရသည်။', 'MFA ဖွင့်ခြင်း၊ backup code ထုတ်ခြင်းနှင့် recovery တောင်းဆိုမှုအတွက် threat များမှတ်ပါ။'],
        ['Passkey အခြေခံနှင့် Phishing ခံနိုင်ရည်ကို နားလည်ခြင်း', 'Passkey သည် origin နှင့်ချိတ်ထားသော public-key credential ကိုသုံးပြီး phishing အန္တရာယ်လျှော့ချနိုင်သည်။', 'Password login နှင့် passkey login flow ကိုနှိုင်းပြီး account recovery နှင့် device အများအပြားအတွက်လိုအပ်ချက်ရေးပါ။'],
        ['Account Enumeration မဖြစ်စေသော Login Response', 'Email ရှိ/မရှိကို response text၊ status နှင့် အချိန်ကွာခြားမှုကနေ ခန့်မှန်းမရအောင်ထားပါ။', 'Password reset request တွင် account ရှိ/မရှိမဖော်ပြသော response နှစ်ခုကိုဒီဇိုင်းဆွဲပါ။'],
        ['Brute-Force Login ကို အလွှာလိုက်ကာကွယ်ခြင်း', 'Rate limit၊ progressive delay၊ alert နှင့် account recovery တို့ကိုပေါင်းသုံးပြီး legitimate user များကိုလည်း မပိတ်မိစေပါနှင့်။', 'Password မှားကြိမ်များလာသည့်အခါ IP/account အလိုက် response အဆင့်ဆင့်ရေးပါ။'],
        ['Session Cookie ၏ Secure, HttpOnly နှင့် SameSite Flag', 'Cookie flag များက JavaScript access၊ HTTPS ပို့ဆောင်မှုနှင့် cross-site request အပြုအမူကိုထိန်းပေးသည်။', 'Authenticated session cookie အတွက် သင့်တော်သော flag များသတ်မှတ်ပြီး အကြောင်းပြပါ။'],
        ['Session Fixation နှင့် Login အချိန် Session Rotation', 'Login မတိုင်မီ attacker သိထားသော session identifier ကို login နောက်တွင် ဆက်မသုံးစေရန် rotate လုပ်ပါ။', 'Login flow အတွက် session ID မပြောင်းလဲသည့်အခါဖြစ်နိုင်သော attack ကိုသရုပ်ပြပါ။'],
        ['Session Revocation နှင့် Password ပြောင်းပြီးနောက် Logout', 'Credential ပြောင်းလဲမှု၊ account recovery နှင့် device ပျောက်ဆုံးမှုနောက် session အဟောင်းများကို invalidate လုပ်နိုင်ရမည်။', 'Password ပြောင်းပြီးနောက် device အားလုံးမှ session ရပ်စေမည့် data model နှင့် flow ရေးပါ။'],
        ['Remember-Me Token ကို ခန့်မှန်းမရအောင် စီမံခြင်း', 'Long-lived login token ကို random၊ hashed၊ rotatable လုပ်ပြီး account မှ revoke လုပ်နိုင်စေပါ။', 'Remember-me token ပျောက်သွားသည့်အခါ user တစ်ဦး၏ token သာ revoke လုပ်နိုင်မည့်ပုံစံဆွဲပါ။'],
        ['Open Redirect ကို Destination Allowlist ဖြင့် တားခြင်း', 'Login နောက် redirect URL ကို user input မှတိုက်ရိုက်မယူဘဲ internal path သို့မဟုတ် allowlist ဖြင့်စစ်ပါ။', 'Protocol-relative URL နှင့် external host ပါသော redirect parameter များကို reject လုပ်သည့်စည်းမျဉ်းရေးပါ။'],
        ['SameSite Cookie နှင့် CSRF Token ကို အလွှာလိုက်သုံးခြင်း', 'SameSite သည် ကူညီပေးသော်လည်း sensitive state-changing request များအတွက် CSRF defense တစ်ခုတည်းအဖြစ် မမှီခိုပါနှင့်။', 'Cookie-based form နှင့် JSON API အတွက် CSRF စစ်ဆေးရမည့်နေရာများကိုခွဲပါ။'],
        ['OAuth Redirect URI ကို တိတိကျကျ စစ်ဆေးခြင်း', 'Redirect URI ကို loose wildcard ဖြင့်မစစ်ဘဲ ကြိုတင်မှတ်ပုံတင်ထားသော URI နှင့် exact match လုပ်ပါ။', 'Subdomain တူသော်လည်း path မတူသော redirect URI ကို authorization server ကငြင်းကြောင်း test case ရေးပါ။'],
        ['Permission Change ကို အခါအားလျော်စွာ Review လုပ်ခြင်း', 'အသုံးမပြုတော့သော account၊ role နှင့် token များကိုစစ်ဆေးခြင်းက ခွင့်ပြုချက်တိုးပွားမှုကိုဖော်ထုတ်ပေးသည်။', 'Team member ထွက်သွားသည့်အခါ revoke လုပ်ရမည့် access အားလုံးကို checklist လုပ်ပါ။'],
        ['Multi-Tenant Data Isolation ကို Query Boundary တွင် စစ်ခြင်း', 'Tenant ID ကို client ထံမှယုံကြည်စိတ်ချစွာမယူဘဲ authenticated context နှင့် query အားလုံးတွင်ချိတ်ပါ။', 'Tenant A token ဖြင့် Tenant B record ID တောင်းသည့် negative test ရေးပါ။'],
        ['BOLA အန္တရာယ်နှင့် Record Ownership စစ်ဆေးခြင်း', 'Object ID ကိုခန့်မှန်းရခက်စေခြင်းတစ်ခုတည်းမလုံလောက်ဘဲ request တိုင်းတွင် record access ကိုစစ်ရသည်။', 'URL ထဲက record ID ပြောင်းရုံဖြင့် အခြားသူ၏ saved item ကိုဖတ်/ပြင်မရကြောင်းစစ်ပါ။'],
        ['DOM XSS အတွက် Safe Sink နှင့် Text Rendering ရွေးချယ်ခြင်း', 'Untrusted text ကို HTML အဖြစ် parse မလုပ်ဘဲ text sink ကိုသုံးပြီး HTML လိုပါက sanitize လုပ်ပါ။', 'User comment ကို innerHTML နှင့် textContent ဖြင့်ပြရာကွာခြားချက်ကို harmless test string ဖြင့်စမ်းပါ။'],
        ['Trusted Types ဖြင့် Dangerous DOM Sink များကို စောင့်ကြည့်ခြင်း', 'Trusted Types policy သည် innerHTML ကဲ့သို့ sink များသို့ဝင်သော string များကို review လုပ်ရလွယ်စေသည်။', 'Template တစ်ခုအတွင်း HTML sink ရှိရာနေရာစာရင်းပြုပြီး safe replacement သို့မဟုတ် policy လိုအပ်ချက်မှတ်ပါ။'],
        ['Nonce ပါသော CSP ဖြင့် Inline Script ကို ကန့်သတ်ခြင်း', 'Random per-response nonce နှင့် strict policy ကိုသုံးခြင်းက ခွင့်မပြုထားသော script execution ကိုလျှော့နိုင်သည်။', 'Inline script တစ်ခုအတွက် nonce generation၊ header နှင့် HTML attribute တူညီကြောင်းစစ်မည့်အစီအစဉ်ရေးပါ။'],
        ['Clickjacking ကို frame-ancestors ဖြင့် ကာကွယ်ခြင်း', 'မယုံကြည်ရသော site က page ကို frame ထဲထည့်မရစေရန် CSP frame-ancestors ကိုသတ်မှတ်ပါ။', 'ပုံမှန် page နှင့် သတ်မှတ်ထားသော embed partner တို့အတွက် ခွင့်ပြုမည့် frame policy ရေးပါ။'],
        ['CORS Origin ကို Exact Allowlist ဖြင့် စစ်ဆေးခြင်း', 'Credential ပါသော request အတွက် origin ကိုပြန် echo လုပ်မီ exact allowlist စစ်ပြီး wildcard မသုံးပါနှင့်။', 'Subdomain အတုနှင့် null origin ပါသော request များကို CORS policy ကငြင်းကြောင်းစမ်းပါ။'],
        ['SSRF ကာကွယ်ရန် Outbound Destination စစ်ဆေးခြင်း', 'Server က user ပေးသော URL ကိုခေါ်ရာတွင် private network၊ metadata endpoint နှင့် redirect chain ကိုကန့်သတ်ပါ။', 'Image fetch feature အတွက် internal IP နှင့် redirect ဖြင့် internal သို့သွားသည့် URL များကို reject လုပ်ပါ။'],
        ['DNS Rebinding နှင့် Hostname Re-Resolution ကို ထည့်စဉ်းစားခြင်း', 'Hostname ကိုတစ်ကြိမ်စစ်ရုံမလုံလောက်နိုင်သဖြင့် resolve လုပ်ပြီးနောက် connect target ကိုလည်းပြန်စစ်ပါ။', 'URL fetcher တစ်ခုအတွက် DNS အဖြေပြောင်းလဲသည့်အခါ private IP သို့မချိတ်မိစေရန် policy ရေးပါ။'],
        ['URL Parser ကွဲပြားမှုနှင့် Validation Bypass ကို ရှာဖွေခြင်း', 'Proxy၊ framework နှင့် application တို့ URL ကိုကွဲပြားစွာ parse လုပ်လျှင် allowlist ကိုကျော်လွှားနိုင်သည်။', 'Encoded slash၊ userinfo နှင့် mixed-case hostname ပါသော URL များအတွက် canonicalization test စာရင်းပြုစုပါ။'],
        ['Command Injection ကို Argument Array ဖြင့် ကာကွယ်ခြင်း', 'Shell command string ဆက်မရေးဘဲ process API ၏ argument array ကိုသုံးပြီး input ကို allowlist လုပ်ပါ။', 'Filename တွင် space နှင့် shell metacharacter ပါသောအခါ command မပျက်စီးကြောင်း harmless test ရေးပါ။'],
        ['Unsafe Deserialization နှင့် Type Confusion အန္တရာယ်', 'မယုံကြည်ရသော serialized object ကိုတိုက်ရိုက်ပြန်တည်ဆောက်ခြင်းက gadget execution နှင့် type confusion ဖြစ်စေနိုင်သည်။', 'External input ကို typed schema ဖြင့် parse လုပ်ပြီး ခွင့်ပြုမထားသော field/type များ reject လုပ်ပါ။'],
        ['Archive Extraction တွင် Zip Slip ကို ကာကွယ်ခြင်း', 'Archive entry path ကို output directory အတွင်း canonical path ဖြစ်ကြောင်းစစ်ပြီး traversal ကိုတားပါ။', 'Zip entry တွင် ../ ပါသည့်အခါ extraction မလုပ်ကြောင်း test fixture တည်ဆောက်ပါ။'],
        ['File Type ကို Extension မဟုတ်ဘဲ Content ဖြင့် စစ်ဆေးခြင်း', 'Filename extension နှင့် browser-provided MIME ကိုတစ်ခုတည်းမယုံဘဲ size၊ signature နှင့် storage rule စစ်ပါ။', 'Image upload endpoint တွင် image အမည်ပေးထားသော text file ကို reject လုပ်မည့် validation အဆင့်ရေးပါ။'],
        ['Upload File ကို Public Web Root အပြင်တွင် သိမ်းခြင်း', 'Private file များကိုတိုက်ရိုက် URL မပေးဘဲ authorization စစ်ပြီးမှ controlled download ဖြင့်ပေးပါ။', 'Private invoice upload အတွက် storage path နှင့် download permission flow ကိုဒီဇိုင်းဆွဲပါ။'],
        ['XXE ကာကွယ်ရန် XML External Entity ကို ပိတ်ခြင်း', 'XML parser က external entity ဖတ်ခွင့်ရှိလျှင် local file သို့မဟုတ် internal URL ပေါက်ကြားနိုင်သည်။', 'Third-party XML import အတွက် entity resolution ပိတ်ထားကြောင်း configuration review checklist ရေးပါ။'],
        ['Prototype Pollution နှင့် Object Merge Input စစ်ဆေးခြင်း', 'Untrusted object key များကို recursive merge လုပ်ရာတွင် prototype property များကိုပိတ်ပြီး plain schema သုံးပါ။', 'JSON payload ထဲတွင် __proto__ ပါသည့်အခါ configuration object မပြောင်းကြောင်း test ရေးပါ။'],
        ['Transitive Dependency နှင့် Vulnerability Priority သတ်မှတ်ခြင်း', 'တိုက်ရိုက်မထည့်ထားသော dependency မှလည်း vulnerability ရောက်နိုင်သဖြင့် reachability နှင့် exploitability ကိုစစ်ပါ။', 'Dependency alert တစ်ခုအတွက် affected path၊ အသုံးပြုနေသော function နှင့် upgrade/mitigation ကိုမှတ်တမ်းတင်ပါ။'],
        ['Lockfile Integrity နှင့် Dependency Update ကို Review လုပ်ခြင်း', 'Lockfile diff ကိုစစ်ခြင်းက transitive package ပြောင်းလဲမှုနှင့် မမျှော်လင့်သော source ပြောင်းလဲမှုကိုဖော်ထုတ်ပေးသည်။', 'Package update pull request တစ်ခုအတွက် version၊ maintainer၊ release note နှင့် checksum review checklist လုပ်ပါ။'],
        ['CI အတွင်း Secret Scanning နှင့် False Positive ကို ကိုင်တွယ်ခြင်း', 'Secret scanner ကို commit နှင့် history တွင် run လုပ်ပြီး တွေ့ရှိသော credential ကိုဖျက်ရုံမက revoke/rotate လုပ်ပါ။', 'Test secret တစ်ခုကို scanner ဖမ်းမိကြောင်းစမ်းပြီး leak ဖြစ်ပါက လုပ်ဆောင်ရမည့်အစဉ်ရေးပါ။'],
        ['Build Artifact Provenance နှင့် Signature ကို စစ်ဆေးခြင်း', 'Artifact ဘယ် source၊ workflow နှင့် dependency မှတည်ဆောက်ခဲ့သည်ကို provenance ဖြင့်ချိတ်ဆက်နိုင်သည်။', 'Release artifact တစ်ခုအတွက် source commit၊ workflow run နှင့် verification record များကိုစီမံပါ။'],
        ['PII ကို Log ထဲမထည့်ဘဲ Masking လုပ်ခြင်း', 'Log သည် debug အတွက်အသုံးဝင်သော်လည်း password၊ token၊ full email နှင့် payment data များကို မသိမ်းသင့်ပါ။', 'Authentication log format တစ်ခုအတွက် ခွင့်ပြု/ဖယ်ရှား/ mask လုပ်မည့် field များစာရင်းရေးပါ။'],
        ['Secure Error Message နှင့် Internal Detail ကို ခွဲခြားခြင်း', 'User ထံတွင် အသုံးဝင်သော်လည်း stack trace၊ SQL၊ file path တို့ကိုမဖော်သော error ပြပြီး detail ကိုကာကွယ်ထားသော log ထဲသိမ်းပါ။', 'Database failure တစ်ခုအတွက် user response နှင့် internal log ကို သီးခြားရေးသားပါ။'],
        ['HSTS ကို HTTPS အပြည့်အဝပြီးမှ စတင်အသုံးပြုခြင်း', 'HSTS ကိုစောလွန်းစွာဖွင့်လျှင် HTTP-only subdomain များဝင်မရနိုင်သဖြင့် max-age ကိုအဆင့်ဆင့်တိုးပါ။', 'HTTPS ပြည့်စုံမှုစစ်ဆေးချက်၊ rollout အဆင့်နှင့် rollback ကန့်သတ်ချက်ကိုမှတ်တမ်းတင်ပါ။'],
        ['Encryption Key Rotation နှင့် Key Access ကို စီမံခြင်း', 'Data encryption အပြင် key ကိုဘယ်သူအသုံးပြုနိုင်သလဲ၊ rotate လုပ်ပုံနှင့် backup/recovery ကိုစီစဉ်ပါ။', 'အသုံးပြုသူ data key rotate လုပ်မည့်အစီအစဉ်ကို downtime နှင့် old ciphertext ထည့်စဉ်းစားပြီးရေးပါ။']
      ]
    },
    {
      group: 'deploy',
      lessons: [
        ['Container Image ကို Layer နှင့် Cache အလိုက် တည်ဆောက်ခြင်း', 'Dependency layer မပြောင်းလျှင် cache ပြန်သုံးနိုင်အောင် build input အစဉ်ကိုစီပြီး runtime file ကိုသီးခြားထည့်ပါ။', 'Source ပြောင်းသော်လည်း dependency install layer မပြန်လုပ်ရသော Dockerfile အစဉ်ကိုရေးပါ။'],
        ['Multi-Stage Build ဖြင့် Runtime Image ကို သေးငယ်စေခြင်း', 'Build tool များကို final runtime image မှဖယ်ခြင်းက image size နှင့် attack surface ကိုလျှော့ပေးသည်။', 'Frontend သို့မဟုတ် app build stage နှင့် runtime stage ခွဲပြီး final image တွင်မလိုသော package များစစ်ပါ။'],
        ['Container Registry တွင် Immutable Image Tag သုံးခြင်း', 'latest ကဲ့သို့ပြောင်းလဲနိုင်သော tag အစား commit digest ဖြင့်တိကျသော artifact ကိုပြန်လည် deploy လုပ်နိုင်စေပါ။', 'Build တစ်ခု၏ image digest ကို staging မှ production သို့တူညီစွာ promote လုပ်မည့် flow ဆွဲပါ။'],
        ['Reverse Proxy Header နှင့် Trusted Proxy ကို စစ်ဆေးခြင်း', 'Forwarded host/proto/IP header ကို trusted proxy မှသာယုံကြည်ပြီး client အတုထည့်နိုင်မှုကိုပိတ်ပါ။', 'HTTPS proxy နောက်ရှိ app တွင် secure URL ထုတ်ပုံနှင့် forged forwarded header ကိုစမ်းပါ။'],
        ['Startup, Readiness နှင့် Liveness Probe ကို ခွဲခြားခြင်း', 'Process စတင်နိုင်ခြင်း၊ traffic လက်ခံနိုင်ခြင်းနှင့် ပြန်လည်စတင်ရန်လိုခြင်းတို့ကို probe သီးခြားဖြင့်ဖော်ပြပါ။', 'Database မရနိုင်ချိန်တွင် readiness ပိတ်ပြီး process အသက်ရှင်နေချိန် liveness ကိုမမှားစေရန် policy ရေးပါ။'],
        ['Graceful Shutdown နှင့် In-Flight Request ကို ထိန်းခြင်း', 'Deploy အချိန် process ပိတ်ရာတွင် request အသစ်လက်မခံတော့ဘဲ လက်ရှိအလုပ်ပြီးစီးရန် grace period ထားပါ။', 'SIGTERM ရရှိသည့်အခါ server ပိတ်ခြင်း၊ queue drain နှင့် timeout အစဉ်ကိုရေးပါ။']
      ]
    },
    {
      group: 'ci',
      lessons: [
        ['Branch Protection နှင့် Required Check ကို စီမံခြင်း', 'အရေးကြီး branch သို့ merge မလုပ်မီ review နှင့် မဖြစ်မနေ CI check အောင်မြင်ကြောင်း platform rule ဖြင့်ထိန်းပါ။', 'Main branch အတွက် required check၊ review အရေအတွက်နှင့် bypass ခွင့်ကိုစီစဉ်ပါ။'],
        ['Dependency Update Bot အတွက် Safe Review Flow', 'Automated dependency update များကို group လုပ်ပုံ၊ changelog review နှင့် CI gate ဖြင့် အန္တရာယ်နည်းစွာပေါင်းစည်းပါ။', 'Patch update နှင့် major update ကို approval/test policy မတူအောင်သတ်မှတ်ပါ။'],
        ['Build Provenance နှင့် Release Attestation ထုတ်ခြင်း', 'CI ကထုတ်သော artifact ကို source commit နှင့် workflow identity နှင့်ချိတ်ဆက်ထားခြင်းက supply-chain review ကိုကူညီသည်။', 'Release တစ်ခုအတွက် ဘယ် source နှင့် workflow မှလာကြောင်းစစ်နိုင်မည့် attestation data ကိုသတ်မှတ်ပါ။'],
        ['CI Database Service ဖြင့် Integration Test လုပ်ခြင်း', 'Workflow အတွင်း disposable database service သုံးခြင်းက developer စက်တစ်ခုတည်းအပေါ်မှီခိုမှုကိုလျှော့ချသည်။', 'Migration နှင့် integration test များအတွက် database service start၊ health wait နှင့် cleanup အဆင့်ရေးပါ။'],
        ['Workflow Artifact ကို Build Once, Promote Many လုပ်ခြင်း', 'ပတ်ဝန်းကျင်တိုင်းတွင် source ပြန် build မလုပ်ဘဲ တစ်ကြိမ်ထုတ် artifact တူညီမှုကို promote လုပ်ပါ။', 'Staging အောင်မြင်ပြီးသော artifact digest ကို production release တွင်ပြန်သုံးကြောင်း pipeline ဆွဲပါ။'],
        ['CI Runner တွင် Untrusted Pull Request ကို ခွဲခြားကာကွယ်ခြင်း', 'Fork မှလာသော code ကို secret ပါသော deployment job နှင့်မရောဘဲ permission အနည်းဆုံးဖြင့် test လုပ်ပါ။', 'Untrusted pull request အတွက် secret မရရှိကြောင်းနှင့် trusted branch merge နောက်မှသာ deploy လုပ်ကြောင်းစစ်ပါ။']
      ]
    },
    {
      group: 'quality',
      lessons: [
        ['Browser Rendering Pipeline နှင့် Critical Rendering Path', 'HTML parse၊ CSSOM၊ layout၊ paint နှင့် composite အဆင့်များကိုနားလည်ခြင်းက rendering delay ရင်းမြစ်ရှာရန်ကူညီသည်။', 'CSS အရေးကြီးသော resource တစ်ခုနောက်ကျသည့်အခါ first render ဘာကြောင့်နှောင့်နှေးသည်ကို trace ဖြင့်ရှင်းပြပါ။'],
        ['Lab Data နှင့် Real User Monitoring ကို နှိုင်းယှဉ်ခြင်း', 'Lab test သည် ထပ်တလဲလဲစမ်းနိုင်ပြီး field data သည် အမှန်တကယ် device/network အခြေအနေကိုပြသည်။', 'တူညီသော page အတွက် local Lighthouse ရလဒ်နှင့် real-user metric မတူသည့်အကြောင်းရင်းသုံးခုရေးပါ။'],
        ['Core Web Vitals ကို Page Template အလိုက် အဓိပ္ပာယ်ဖော်ခြင်း', 'အလယ်တန်ဖိုးနှင့် percentile distribution ကိုကြည့်ပြီး page အမျိုးအစားနှင့် device အလိုက်ပြဿနာကိုခွဲပါ။', 'Home၊ article နှင့် checkout template တို့အတွက် metric segment လုပ်မည့်စည်းမျဉ်းရေးပါ။'],
        ['Largest Contentful Paint Element ကို ရှာဖွေပြင်ဆင်ခြင်း', 'LCP ဖြစ်သော element ကိုသတ်မှတ်ပြီး server response၊ resource discovery နှင့် render delay ကိုခွဲစိတ်ပါ။', 'Hero image LCP နောက်ကျနေသည့် page တစ်ခုတွင် network waterfall မှ အဓိကကြာချိန်ကိုဖော်ထုတ်ပါ။'],
        ['Interaction to Next Paint အတွက် Input Delay ရှာခြင်း', 'Interaction တစ်ခုနောက် browser paint နှောင့်နှေးမှုကို event handler၊ main-thread task နှင့် rendering အဆင့်ခွဲကြည့်ပါ။', 'Search submit ကိုနှိပ်ပြီး response နောက်ကျသည့် trace တွင် အချိန်အများဆုံးယူသော callback ကိုရှာပါ။'],
        ['Cumulative Layout Shift ဖြစ်စေသော Element ကို ခြေရာခံခြင်း', 'Space ကြိုမထားသော image၊ font swap နှင့် dynamic banner တို့က layout ကိုရွှေ့နိုင်သည်။', 'ကြော်ငြာ banner နောက်မှပေါ်လာသည့်အခါ အနီးရှိစာသားမရွှေ့စေရန်နေရာကြိုသတ်မှတ်ပါ။'],
        ['Time to First Byte နှင့် Backend Wait ကို ခွဲခြားခြင်း', 'TTFB တွင် connection setup နှင့် server processing ပါဝင်နိုင်သဖြင့် frontend တစ်ခုတည်းပြင်၍မရနိုင်ပါ။', 'Request timing ထဲမှ DNS၊ TLS၊ queue နှင့် server wait ကိုခွဲပြီးကြာချိန်လျှော့မည့်နေရာရွေးပါ။'],
        ['First Contentful Paint နှင့် LCP ကို ခွဲခြားခြင်း', 'ပထမဆုံးမြင်ရသော content နှင့် အဓိက content ပေါ်ချိန်သည် မတူသော metric ဖြစ်သည်။', 'FCP ကောင်းပြီး LCP မကောင်းသော case တစ်ခုဖန်တီး၍ hero resource ကိုရှာပါ။'],
        ['Lighthouse CI ဖြင့် Performance Regression စောစစ်ခြင်း', 'CI budget သည် trend ပြောင်းလဲမှုကိုဖမ်းနိုင်သော်လည်း metric အပြောင်းအလဲကို လျှော့ချရန် တူညီသောအခြေအနေတွင် အကြိမ်ကြိမ်တိုင်းပြီး သင့်တော်သော threshold သတ်မှတ်ပါ။', 'Budget သတ်မှတ်ပြီး threshold ကျော်သည့်အခါ ပြန်စစ်မည့် Lighthouse CI စည်းမျဉ်းရေးပါ။'],
        ['Performance Trace ကို Record လုပ်ပြီး Main Thread ဖတ်ခြင်း', 'Trace တွင် task၊ style၊ layout နှင့် paint event များကို အချိန်အစဉ်လိုက်ဖတ်ပါ။', 'Click တစ်ခုနောက်ရှိ long task များကိုသတ်မှတ်ပြီး အလုပ်လုပ်သည့် function နှင့်ချိတ်ဆက်ပါ။'],
        ['Long Task ကို အပိုင်းခွဲပြီး UI တုံ့ပြန်မှုကောင်းစေခြင်း', 'Main thread ကိုကြာရှည်ပိတ်ထားသော JavaScript ကို chunk လုပ်ခြင်း သို့မဟုတ် background worker သို့ရွှေ့ခြင်းဖြင့် input response တိုးတက်နိုင်သည်။', 'ကြီးမားသော list transform ကို frame အလိုက်ခွဲပြီး ခလုတ်ကိုနှိပ်နိုင်ဆဲဖြစ်ကြောင်းစမ်းပါ။'],
        ['JavaScript Parse, Compile နှင့် Execution Cost ကို ခွဲခြားခြင်း', 'Bundle bytes လျှော့ရုံမက parse နှင့် run လုပ်ချိန်ကိုပါ device အားနည်းသောအခြေအနေတွင်တိုင်းပါ။', 'မလိုအပ်သော package တစ်ခုဖယ်ပြီး transfer၊ parse နှင့် execution metric ပြောင်းလဲမှုကိုကြည့်ပါ။'],
        ['Bundle Analyzer ဖြင့် ထပ်နေသော Dependency ရှာခြင်း', 'Bundle visualization က duplicate package၊ ကြီးမားသော module နှင့်မသုံးသော code ကိုဖော်ပြပေးသည်။', 'Bundle ထဲတွင် date library နှစ်မျိုးပါဝင်နေသည်ကိုရှာပြီး တစ်မျိုးတည်းသုံးအောင်ပြင်ပါ။'],
        ['Tree Shaking နှင့် Side Effect Import ကို စစ်ဆေးခြင်း', 'Static import နှင့် မှန်ကန်သော package metadata ရှိလျှင် မသုံးသော export များကို build မှဖယ်ရှားနိုင်သည်။', 'Library တစ်ခုလုံးနှင့် လိုအပ်သော function တစ်ခုသာ import လုပ်သည့် bundle ကိုနှိုင်းပါ။'],
        ['Route-Level Dynamic Import ဖြင့် Code ကို အပိုင်းခွဲခြင်း', 'အသုံးပြုသူမသွားသေးသော route code ကိုနောက်မှ load လုပ်ခြင်းက initial bundle ကိုလျှော့ပေးနိုင်သည်။', 'Settings page ကို dynamic import လုပ်ပြီး ပထမစာမျက်နှာတွင်မလိုသော chunk မတင်ကြောင်း Network panel ဖြင့်စစ်ပါ။'],
        ['Critical CSS နှင့် Render-Blocking Resource ကို စီမံခြင်း', 'ပထမမြင်ကွင်းအတွက်လိုသော style ကိုဦးစားပေးပြီး အခြား resource များက rendering ကိုမပိတ်စေရန်စီစဉ်ပါ။', 'Above-the-fold နှင့် နောက်မှလိုသော CSS ကိုခွဲပြီး FCP အပေါ်သက်ရောက်မှုကိုစမ်းပါ။'],
        ['Preload နှင့် Prefetch ကို အမှန်တကယ်လိုသည့်အခါသုံးခြင်း', 'Preload သည် လက်ရှိစာမျက်နှာတွင်မကြာမီလိုသော resource အတွက်ဖြစ်ပြီး prefetch သည် နောက် navigation အတွက်ဖြစ်သည်။', 'Hero font တစ်ခုကို preload လုပ်ပြီး မလိုသော asset preload မှ bandwidth ပြိုင်ဆိုင်မှုဖြစ်မဖြစ်စစ်ပါ။'],
        ['Preconnect နှင့် DNS Prefetch ကို Third-Party အလိုက်ရွေးခြင်း', 'Connection hint များက setup time လျှော့ပေးနိုင်သော်လည်း မသုံးသော origin များကိုစောစီးစွာချိတ်ခြင်းက resource ဖြုန်းတီးနိုင်သည်။', 'တကယ်သုံးသော font/API origin အနည်းငယ်အတွက် hint ထည့်ပြီး request waterfall ကိုနှိုင်းပါ။'],
        ['Font Subset နှင့် font-display ဖြင့် စာသားပြသမှုမြန်စေခြင်း', 'လိုအပ်သော glyph များသာတင်ခြင်းနှင့် fallback font strategy က font download ကိုလျှော့ပြီး text ကိုစောစောပြသည်။', 'မြန်မာစာ font subset ကိုစစ်ပြီး font မလာသေးသည့်အခါ fallback ပုံစံမရွှေ့ကြောင်းကြည့်ပါ။'],
        ['Responsive Image Source ဖြင့် Device နှင့်ကိုက်ညီသောပုံပေးခြင်း', 'srcset/sizes သို့မဟုတ် picture ကိုသုံးပြီး screen density နှင့် layout အရွယ်အစားအလိုက် သင့်တော်သော image ကိုပေးပါ။', 'Mobile နှင့် desktop အတွက် hero image file အရွယ်အစားမတူအောင်ရွေးချယ်ပြီး download byte နှိုင်းပါ။'],
        ['Below-the-Fold Image ကို Lazy Load လုပ်ခြင်း', 'ပထမမြင်ကွင်းပြင်ပရှိ image များကို နောက်မှတင်နိုင်သော်လည်း LCP image ကို lazy load မလုပ်ပါနှင့်။', 'စာမျက်နှာရှည်တစ်ခုတွင် နောက်ပိုင်း image များကို lazy-load လုပ်ပြီး LCP resource ကို eager ထားပါ။'],
        ['AVIF, WebP နှင့် Fallback Image ကို နှိုင်းယှဉ်ခြင်း', 'Modern image format သည် byte လျှော့နိုင်သော်လည်း quality၊ decode cost နှင့် fallback support ကိုပါစစ်ဆေးပါ။', 'တူညီသောပုံကို format သုံးမျိုးထုတ်ပြီး visual quality နှင့် transfer size ကိုတိုင်းပါ။'],
        ['CDN Cache Key နှင့် Query String ကို စီမံခြင်း', 'Cache key ထဲထည့်သည့် header/query များ များလွန်းလျှင် cache hit လျော့သွားနိုင်သည်။', 'Version ပါသော static asset URL အတွက် cache key ကိုသတ်မှတ်ပြီး cache hit/miss ကိုတွက်ပါ။'],
        ['Brotli နှင့် Gzip Compression ကို Resource အလိုက်ရွေးခြင်း', 'Text-based asset များကို compression လုပ်နိုင်သော်လည်း image/video ကို ထပ်ချုံ့၍အကျိုးနည်းနိုင်သည်။', 'HTML၊ JS၊ JPEG နှင့် WOFF2 တို့အတွက် compression ရလဒ်နှင့် CPU cost ကိုနှိုင်းပါ။'],
        ['HTTP Request တစ်ခုချင်း၏ Protocol နှင့် Waterfall Cost', 'Connection reuse၊ multiplexing နှင့် request အရေအတွက်တို့က load time ကိုဘယ်လိုပြောင်းစေသည်ကို network trace ဖြင့်စစ်ပါ။', 'Asset များစွာနှင့်တစ်ခုတည်းပေါင်းထားသော build ကို request count နှင့် latency ဖြင့်နှိုင်းပါ။'],
        ['WCAG POUR အခြေခံမူကို UI Review တွင် အသုံးချခြင်း', 'Perceivable၊ Operable၊ Understandable နှင့် Robust မူများက feature တစ်ခုကို accessibility အမြင်ဖြင့်စစ်ရန် framework ပေးသည်။', 'Form တစ်ခုကို POUR အခြေခံမူတစ်ခုစီဖြင့်စစ်ပြီး ပြင်ရန်အချက်တစ်ခုစီရေးပါ။'],
        ['Accessible Name ကို Label နှင့် Description မှ တွက်ချက်ခြင်း', 'Screen reader က control ၏ accessible name နှင့် description ကိုဘယ်ကရသည်ကိုသိပြီး label ချိတ်ဆက်ပါ။', 'Search input နှင့် icon button နှစ်ခုအတွက် visible label သို့မဟုတ် aria-label ကိုသင့်တော်စွာထည့်ပါ။'],
        ['Fieldset နှင့် Legend ဖြင့် ဆက်စပ် Form Control များကို အုပ်စုဖွဲ့ခြင်း', 'Radio/checkbox အုပ်စုတစ်ခု၏ မေးခွန်းကို fieldset/legend ဖြင့်ဖော်ပြခြင်းက assistive technology အတွက် context ပေးသည်။', 'Delivery option radio သုံးခုကို fieldset ဖြင့်အုပ်စုဖွဲ့ပြီး keyboard ဖြင့်ဖတ်ကြည့်ပါ။'],
        ['Form Error ကို Field နှင့် Live Region မှတစ်ဆင့် အသိပေးခြင်း', 'Error text ကို field နှင့်ချိတ်ပြီး submit နောက်မှ screen reader က update ကိုသိနိုင်အောင်လုပ်ပါ။', 'မှားသော email ဖြည့်ပြီး error ကို focus၊ aria-describedby နှင့် summary မှတစ်ဆင့်ဖတ်နိုင်အောင်စီစဉ်ပါ။'],
        ['Live Region ကို Status နှင့် Alert အတွက် သင့်တော်စွာသုံးခြင်း', 'အရေးမကြီးသော update ကို polite အဖြစ်၊ ချက်ချင်းအရေးယူရမည့် message ကိုသာ assertive အဖြစ်ဖော်ပြပါ။', 'Search result count update နှင့် payment error တို့အတွက် live region priority ကိုရွေးချယ်ပါ။'],
        ['Touch Target Size နှင့် Control Spacing စစ်ဆေးခြင်း', 'သေးငယ်ပြီးကပ်နေသော target များက motor difficulty ရှိသူများအတွက် ထိရန်ခက်စေသည်။', 'Mobile toolbar control များ၏ hit area ကိုတိုင်းပြီး မထိခိုက်ဘဲ gap တိုးနိုင်မည့်နေရာပြင်ပါ။'],
        ['Color Contrast ကို Text နှင့် UI State အလိုက်တွက်ချက်ခြင်း', 'Text၊ icon နှင့် component boundary များ၏ contrast ကို background အရောင်နှင့်တိုင်းပြီး state တစ်ခုချင်းစီစစ်ပါ။', 'Normal text၊ large text နှင့် disabled/focus state တို့အတွက် contrast ပြဿနာများမှတ်တမ်းတင်ပါ။'],
        ['Forced Colors Mode တွင် UI ကို ဖတ်ရှုနိုင်အောင်ထားခြင်း', 'High-contrast mode တွင် browser/user palette ကိုမပျက်စီးစေဘဲ border၊ focus နှင့် state ကိုထိန်းပါ။', 'Windows forced-colors mode ဖြင့် button၊ input နှင့် active tab တို့ကိုစစ်ပါ။'],
        ['Screen Reader Test ကို Task အလိုက် လုပ်ဆောင်ခြင်း', 'Screen reader စမ်းသပ်မှုတွင် heading၊ landmark၊ form နှင့် task completion ကိုအစအဆုံးသုံးကြည့်ပါ။', 'Keyboard နှင့် screen reader ဖြင့် registration flow ပြီးမြောက်ပြီး နားမလည်သည့်အချက်များမှတ်ပါ။'],
        ['Document Language နှင့် Content Language ကို သတ်မှတ်ခြင်း', 'HTML lang attribute နှင့် အပိုင်းလိုက် language marker သည် pronunciation နှင့် text processing ကိုကူညီသည်။', 'မြန်မာစာအတွင်း English phrase ရှိသော page အတွက် lang attribute များသတ်မှတ်ပါ။'],
        ['Table Caption နှင့် Header Scope ဖြင့် Data Table ဖော်ပြခြင်း', 'Caption နှင့် column/row header ဆက်စပ်မှုက screen reader user များအတွက် cell context ပေးသည်။', 'ရောင်းအားဇယားတစ်ခုတွင် caption၊ thead နှင့် scope ကိုထည့်ပြီး cell ဖတ်စဉ်စမ်းပါ။'],
        ['Link Text ကို Destination အဓိပ္ပာယ်ရှိအောင်ရေးခြင်း', '“ဒီမှာနှိပ်ပါ” ကဲ့သို့ context မရှိသော link text အစား destination သို့မဟုတ် action ကိုဖော်ပြပါ။', 'Page တစ်ခုအတွင်း link အားလုံးကိုသီးခြားဖတ်ပြီး အဓိပ္ပာယ်မရှင်းသောစာသားကိုပြင်ပါ။'],
        ['ARIA Role, State နှင့် Property ကို မလိုအပ်ဘဲမထပ်ရေးခြင်း', 'Native HTML element များက role နှင့် behavior ပေးပြီးဖြစ်သောကြောင့် ARIA သည်လိုအပ်သည့် state ကိုသာဖြည့်ပါ။', 'Button၊ checkbox နှင့် link တို့တွင် ထပ်နေသော role သို့မဟုတ် မမှန်သော aria attribute များကိုရှာပါ။'],
        ['ARIA Pattern ကို Keyboard Behavior နှင့်အတူ အကောင်အထည်ဖော်ခြင်း', 'Custom widget သည် role ပေးရုံမလုံလောက်ဘဲ arrow၊ tab နှင့် activation keyboard convention ကိုပါလိုက်နာရသည်။', 'Custom tab widget တစ်ခုအတွက် roving tabindex နှင့် arrow key behavior ရေးပြီး စမ်းပါ။'],
        ['State ကို အရောင်တစ်ခုတည်းဖြင့် မဖော်ပြခြင်း', 'Error၊ selected နှင့် success state များတွင် icon၊ text သို့မဟုတ် shape ထည့်ပြီး အရောင်မမြင်သူများလည်းသိနိုင်စေပါ။', 'Red/green status များကို icon နှင့် label ဖြင့်လည်းခွဲနိုင်အောင် component ပြင်ပါ။'],
        ['Accessible Chart အတွက် Data Summary နှင့် Table ပေးခြင်း', 'Canvas/SVG chart ကို text summary၊ data table သို့မဟုတ် အခြားနည်းဖြင့်အဓိပ္ပာယ်တူပေးပါ။', 'Bar chart တစ်ခု၏ အဓိကအချက်ကို summary ဖြင့်ဖော်ပြပြီး row data table ဖြင့်ဖြည့်ပါ။'],
        ['Focus Order နှင့် Focus Indicator ကို လက်တွေ့စစ်ခြင်း', 'DOM order နှင့် visual order ကိုကိုက်ညီစေပြီး keyboard focus ရောက်သည့်နေရာကို မရှုပ်ထွေးဘဲမြင်သာစေပါ။', 'Tab/Shift+Tab ဖြင့် landing navigation ကိုသုံးပြီး focus မမြင်ရသော control များကိုမှတ်ပါ။'],
      ]
    }
  ];

  function createLanguageLessons(language, units) {
    var lessons = [];
    units.forEach(function (unit, unitIndex) {
      unit.topics.forEach(function (topic, topicIndex) {
        lessons.push([
          language + ' · ' + String(unitIndex + 1).padStart(2, '0') + '.' + String(topicIndex + 1).padStart(2, '0') + ' ' + topic,
          unit.note + ' လေ့လာရာတွင် “' + topic + '” ကို အဓိကထားပြီး သက်ဆိုင်ရာ code ဥပမာနှင့် ချိတ်ဆက်နားလည်ပါ။',
          'လက်တွေ့လုပ်ဆောင်ရန် — ' + topic + ' ကို အသုံးပြုသည့် အသေးစားဥပမာတစ်ခုရေးပါ။ ပုံမှန် input၊ မမှန်သော input နှင့် edge case တို့ကိုစမ်းပြီး ရလဒ်ကိုမှတ်တမ်းတင်ပါ။',
          { unit: unit, topic: topic, unitIndex: unitIndex, topicIndex: topicIndex }
        ]);
      });
    });
    return lessons;
  }

  var pythonUnits = [
    { title: 'Getting Started', note: 'Python ကို install/run လုပ်ပုံ၊ file တည်ဆောက်ပုံနှင့် interpreter အလုပ်လုပ်ပုံကို နားလည်ပါ။', topics: ['Python ဘာသာစကားနှင့် အသုံးပြုနိုင်သည့်နေရာများ', 'Python တပ်ဆင်ခြင်းနှင့် version စစ်ခြင်း', 'Python REPL တွင် ပထမဆုံး command ရိုက်ခြင်း', 'ပထမဆုံး .py file ဖန်တီးပြီး run ခြင်း', 'print ဖြင့် output ထုတ်ခြင်း', 'Comment နှင့် code ဖတ်ရလွယ်သောပုံစံ', 'Indentation နှင့် code block', 'Syntax error message ကိုဖတ်ခြင်း', 'Script နှင့် interactive mode ကွာခြားချက်', 'VS Code တွင် Python interpreter ရွေးခြင်း'] },
    { title: 'Variables and Data Types', note: 'တန်ဖိုးသိမ်းဆည်းခြင်း၊ အခြေခံ data type များနှင့် type ပြောင်းလဲခြင်းကို လေ့လာပါ။', topics: ['Variable အမည်ပေးခြင်းနှင့် တန်ဖိုးသတ်မှတ်ခြင်း', 'int နှင့် float ဂဏန်းအမျိုးအစား', 'str စာသားအမျိုးအစား', 'bool မှန်/မှားတန်ဖိုး', 'None နှင့် တန်ဖိုးမရှိခြင်း', 'type ဖြင့် data type စစ်ခြင်း', 'int၊ float၊ str အဖြစ်ပြောင်းခြင်း', 'Input ကိုဖတ်ပြီးတန်ဖိုးသိမ်းခြင်း', 'f-string ဖြင့်စာသားနှင့်တန်ဖိုးပေါင်းခြင်း', 'Mutable နှင့် immutable တန်ဖိုးမိတ်ဆက်'] },
    { title: 'Operators and Decisions', note: 'တွက်ချက်မှု၊ နှိုင်းယှဉ်မှုနှင့် အခြေအနေအလိုက် code ရွေးချယ်လုပ်ဆောင်မှုကို နားလည်ပါ။', topics: ['Arithmetic operator များ', 'Comparison operator များ', 'and၊ or၊ not ဖြင့် logic တည်ဆောက်ခြင်း', 'if ဖြင့် အခြေအနေစစ်ခြင်း', 'if/else ဖြင့် ရွေးချယ်မှုနှစ်မျိုးလုပ်ခြင်း', 'elif ဖြင့် အခြေအနေများစွာစစ်ခြင်း', 'Nested condition ကိုဖတ်လွယ်အောင်ရေးခြင်း', 'Membership နှင့် in operator', 'Identity နှင့် is ကိုသတိထားသုံးခြင်း', 'Conditional expression ရေးခြင်း'] },
    { title: 'Loops and Iteration', note: 'ထပ်ခါတလဲလဲလုပ်ဆောင်မှု၊ loop ရပ်တန့်မှုနှင့် iteration အစဉ်ကိုလေ့လာပါ။', topics: ['for loop ဖြင့် sequence တစ်ခုလိုက်ဖတ်ခြင်း', 'range ဖြင့် အကြိမ်ရေသတ်မှတ်ခြင်း', 'while loop နှင့် ရပ်တန့်စည်းမျဉ်း', 'break ဖြင့် loop ရပ်ခြင်း', 'continue ဖြင့် iteration ကျော်ခြင်း', 'Loop အတွင်း counter စုဆောင်းခြင်း', 'Nested loop နှင့် grid data', 'enumerate ဖြင့် index နှင့်တန်ဖိုးယူခြင်း', 'zip ဖြင့် sequence နှစ်ခုတွဲဖတ်ခြင်း', 'Loop မပြီးဆုံးသောအမှားကိုရှာခြင်း'] },
    { title: 'Collections and Data Structures', note: 'Data အများအပြားကို သင့်တော်သည့် collection ထဲတွင် သိမ်း၊ ရှာ၊ ပြင်ဆင်ပုံကို လေ့လာပါ။', topics: ['List ဖန်တီးပြီး element များရယူခြင်း', 'List slicing နှင့် index နယ်နိမိတ်', 'List ထဲသို့ထည့်ခြင်းနှင့် ဖယ်ရှားခြင်း', 'Tuple ဖြင့် မပြောင်းလဲသည့်အတွဲသိမ်းခြင်း', 'Dictionary key/value အသုံးပြုခြင်း', 'Dictionary တွင် value ရှာပြီးပြင်ခြင်း', 'Set ဖြင့် duplicate ဖယ်ရှားခြင်း', 'Nested collection ကိုလုံခြုံစွာဖတ်ခြင်း', 'List၊ tuple၊ set၊ dict ရွေးချယ်ခြင်း', 'Comprehension ဖြင့် collection ဖန်တီးခြင်း'] },
    { title: 'Functions and Reusable Code', note: 'လုပ်ဆောင်ချက်ကို function အဖြစ်ခွဲထုတ်ပြီး input၊ return value နှင့် scope ကိုစီမံပါ။', topics: ['Function ကြေညာပြီးခေါ်သုံးခြင်း', 'Parameter နှင့် argument ကွာခြားချက်', 'return ဖြင့်ရလဒ်ပြန်ပေးခြင်း', 'Default parameter သတ်မှတ်ခြင်း', 'Keyword argument ဖြင့်ဖတ်လွယ်စေခြင်း', 'Positional နှင့် keyword-only parameter', '*args နှင့် **kwargs မိတ်ဆက်', 'Local နှင့် global scope', 'Lambda ကိုအသုံးပြုရမည့်အခြေအနေ', 'Docstring ဖြင့် function ရှင်းပြခြင်း'] },
    { title: 'Strings and Text Processing', note: 'စာသားကိုခွဲခြမ်းခြင်း၊ ပြင်ဆင်ခြင်း၊ ရှာဖွေခြင်းနှင့် Unicode ကိုမှန်ကန်စွာကိုင်တွယ်ပါ။', topics: ['String indexing နှင့် slicing', 'စာလုံးအကြီးအသေးပြောင်းခြင်း', 'strip ဖြင့် အပို whitespace ဖယ်ခြင်း', 'split နှင့် join ဖြင့်စာသားခွဲပေါင်းခြင်း', 'String ထဲတွင်တန်ဖိုးအစားထိုးခြင်း', 'အစ/အဆုံးနှင့် substring ရှာခြင်း', 'Raw string နှင့် escape character', 'Unicode နှင့် မြန်မာစာကိုင်တွယ်ခြင်း', 'Regex ဖြင့်ပုံစံရှာဖွေခြင်း', 'Text input ကိုစစ်ဆေးပြီးသန့်စင်ခြင်း'] },
    { title: 'Modules and Environments', note: 'Code ကို module/package ခွဲခြင်း၊ dependency စီမံခြင်းနှင့် project environment ခွဲသုံးခြင်းကို လေ့လာပါ။', topics: ['Built-in module import လုပ်ခြင်း', 'ကိုယ်ပိုင် module ဖန်တီးခြင်း', 'if __name__ == "__main__" အသုံးပြုခြင်း', 'Package နှင့် __init__.py မိတ်ဆက်', 'pip ဖြင့် package တပ်ဆင်ခြင်း', 'Virtual environment ဖန်တီးပြီး activate လုပ်ခြင်း', 'requirements.txt ထုတ်ပြီးသုံးခြင်း', 'Import path နှင့် module အမည်တိုက်မှု', 'Environment variable ဖတ်ခြင်း', 'Project folder ဖွဲ့စည်းပုံတည်ဆောက်ခြင်း'] },
    { title: 'Files and Error Handling', note: 'ဖိုင်ကိုသိမ်း၊ ဖတ်၊ ပိတ်ပုံနှင့် error ဖြစ်ချိန် program ကိုထိန်းသိမ်းပုံကို သင်ယူပါ။', topics: ['open ဖြင့် text file ဖတ်ခြင်း', 'with ဖြင့် file ကိုလုံခြုံစွာပိတ်ခြင်း', 'File ထဲသို့ စာသားရေးခြင်း', 'Pathlib ဖြင့် file path စီမံခြင်း', 'CSV ဖိုင်ဖတ်ပြီးရေးခြင်း', 'JSON ကိုဖတ်ပြီး Python object ပြောင်းခြင်း', 'JSON data ကိုဖိုင်သိမ်းခြင်း', 'try/except ဖြင့် error ကိုင်တွယ်ခြင်း', 'else/finally ဖြင့် cleanup လုပ်ခြင်း', 'Custom exception သတ်မှတ်ခြင်း'] },
    { title: 'Classes and Object-Oriented Python', note: 'Class၊ object၊ method နှင့် inheritance ကိုသုံးပြီး ဆက်စပ် state/behavior များကိုစုစည်းပါ။', topics: ['Class နှင့် object ဖန်တီးခြင်း', '__init__ နှင့် instance attribute', 'Instance method နှင့် self', 'Class attribute နှင့် instance attribute', 'Encapsulation နှင့် property', 'Inheritance နှင့် method override', 'super ဖြင့် parent behavior ခေါ်ခြင်း', 'Dataclass ဖြင့် data object ရေးခြင်း', 'Composition ဖြင့် class များချိတ်ခြင်း', 'Object representation နှင့် __str__'] },
    { title: 'Iterators, Generators, and Algorithms', note: 'Data အများအပြားကို memory သက်သာစွာဖြတ်သန်းပြီး algorithm ၏ အချိန်/နေရာကုန်ကျမှုကို သုံးသပ်ပါ။', topics: ['Iterable နှင့် iterator ကွာခြားချက်', 'iter နှင့် next ကိုအသုံးပြုခြင်း', 'yield ဖြင့် generator တည်ဆောက်ခြင်း', 'Generator expression ဖြင့် lazy evaluation', 'Sorting key ဖြင့် စာရင်းစီခြင်း', 'Linear search အဆင့်လိုက်ရေးခြင်း', 'Binary search အခြေခံ', 'Stack နှင့် queue ကို collection ဖြင့်တည်ဆောက်ခြင်း', 'Big O notation မိတ်ဆက်', 'Algorithm edge case နှင့် complexity စစ်ခြင်း'] },
    { title: 'Testing, Tooling, and Async Python', note: 'Test ရေးခြင်း၊ code quality စစ်ခြင်းနှင့် I/O အခြေပြု asynchronous task များကို စီမံပါ။', topics: ['assert ဖြင့် အခြေခံရလဒ်စစ်ခြင်း', 'unittest ဖြင့် test case ရေးခြင်း', 'pytest ဖြင့် test discovery လုပ်ခြင်း', 'Fixture ဖြင့် test data ပြင်ဆင်ခြင်း', 'Mock ဖြင့် external service ခွဲစမ်းခြင်း', 'Logging level နှင့် structured log', 'Type hint နှင့် annotation မိတ်ဆက်', 'async/await ဖြင့် asynchronous function', 'asyncio.gather ဖြင့် task များတွဲလုပ်ခြင်း', 'Project ကို format၊ lint၊ test ဖြင့်စစ်ခြင်း'] }
  ];

  var typeScriptUnits = [
    { title: 'Getting Started', note: 'TypeScript ကို JavaScript အပေါ် type checking ထပ်ပေါင်းထားသည့်ဘာသာအဖြစ် နားလည်ပြီး project ကိုစတင်တည်ဆောက်ပါ။', topics: ['TypeScript ၏အခန်းကဏ္ဍနှင့် JavaScript ဆက်နွယ်မှု', 'Node.js နှင့် TypeScript compiler စစ်ဆေးခြင်း', 'ပထမဆုံး .ts ဖိုင်ဖန်တီးခြင်း', 'tsc ဖြင့် JavaScript ထုတ်ခြင်း', 'Node နှင့် browser အတွက် project ရွေးခြင်း', 'tsconfig.json ဖန်တီးခြင်း', 'strict mode ဖွင့်ခြင်း', 'Type error ကိုဖတ်ပြီးပြင်ခြင်း', 'Editor ထဲတွင် type hint အသုံးပြုခြင်း', 'TypeScript project folder စီစဉ်ခြင်း'] },
    { title: 'Primitive Types and Variables', note: 'Primitive type များ၊ variable declaration နှင့် inference ကို အခြေခံမှတည်ဆောက်ပါ။', topics: ['let နှင့် const ရွေးချယ်ခြင်း', 'string type သတ်မှတ်ခြင်း', 'number type နှင့် numeric operation', 'boolean type နှင့် condition', 'null နှင့် undefined ကွာခြားချက်', 'Type inference ကိုဖတ်ခြင်း', 'Explicit annotation ရေးခြင်း', 'Literal type မိတ်ဆက်', 'unknown နှင့် any ကိုခွဲခြားခြင်း', 'never type ကိုနားလည်ခြင်း'] },
    { title: 'Functions and Call Signatures', note: 'Function parameter၊ return type နှင့် overload ကို အသုံးပြုပြီး API ကိုရှင်းလင်းစွာဖော်ပြပါ။', topics: ['Function parameter type ရေးခြင်း', 'Return type သတ်မှတ်ခြင်း', 'Optional parameter သုံးခြင်း', 'Default parameter နှင့် rest parameter', 'Arrow function type ရေးခြင်း', 'Function type alias ဖန်တီးခြင်း', 'Callback parameter ကို type ပေးခြင်း', 'Void return ကိုသင့်တော်စွာသုံးခြင်း', 'Function overload မိတ်ဆက်', 'Generic function signature ဖတ်ခြင်း'] },
    { title: 'Objects, Interfaces, and Type Aliases', note: 'Object shape ကို interface/type ဖြင့်ဖော်ပြပြီး property၊ readonly နှင့် composition ကို စီမံပါ။', topics: ['Object property များကို type သတ်မှတ်ခြင်း', 'Interface ဖန်တီးပြီး object စစ်ခြင်း', 'Type alias ဖြင့် object shape ရေးခြင်း', 'Optional property အသုံးပြုခြင်း', 'Readonly property ကာကွယ်ခြင်း', 'Index signature အခြေခံ', 'Interface ကို extends ဖြင့်ချဲ့ခြင်း', 'Type intersection ဖြင့်ပေါင်းခြင်း', 'Nested object type ဖတ်ခြင်း', 'Structural typing ကိုနားလည်ခြင်း'] },
    { title: 'Unions and Type Narrowing', note: 'Union type၊ discriminant နှင့် control flow ဖြင့် ဖြစ်နိုင်သည့် type များကို လုံခြုံစွာခွဲခြားပါ။', topics: ['Union type ဖြင့်ရွေးချယ်စရာဖော်ပြခြင်း', 'typeof ဖြင့် type narrowing', 'in operator ဖြင့် property စစ်ခြင်း', 'Discriminated union တည်ဆောက်ခြင်း', 'switch ဖြင့် union အားလုံးစစ်ခြင်း', 'never ဖြင့် exhaustive check', 'User-defined type guard ရေးခြင်း', 'Assertion နှင့် type cast ကိုသတိထားခြင်း', 'unknown data ကို validate လုပ်ခြင်း', 'Nullable value ကို guard လုပ်ခြင်း'] },
    { title: 'Arrays, Tuples, and Collections', note: 'Array၊ tuple နှင့် collection operation များကို type-safe အဖြစ်တည်ဆောက်ပါ။', topics: ['Typed array ဖန်တီးခြင်း', 'Array ထဲက item type ရယူခြင်း', 'Tuple ဖြင့် အစဉ်လိုက်တန်ဖိုးသတ်မှတ်ခြင်း', 'Readonly array ဖြင့်မပြောင်းစေခြင်း', 'map ဖြင့် type ပြောင်းခြင်း', 'filter ဖြင့် type guard အသုံးပြုခြင်း', 'reduce ကို accumulator type ဖြင့်ရေးခြင်း', 'Set နှင့် Map type သတ်မှတ်ခြင်း', 'Promise array ကိုအမျိုးအစားတပ်ခြင်း', 'Array index မရှိနိုင်မှုကိုစစ်ခြင်း'] },
    { title: 'Generics and Reusable Types', note: 'Generic parameter ဖြင့် data type မပျောက်စေဘဲ ပြန်သုံးနိုင်သော function၊ class နှင့် interface ရေးပါ။', topics: ['Generic function တည်ဆောက်ခြင်း', 'Type parameter အမည်နှင့်အသုံးပြုပုံ', 'Generic constraint ဖြင့်လိုအပ်ချက်သတ်မှတ်ခြင်း', 'keyof ဖြင့် object key type ရယူခြင်း', 'Generic interface ရေးခြင်း', 'Generic class ဖန်တီးခြင်း', 'Default generic parameter သတ်မှတ်ခြင်း', 'Generic API response type', 'Type parameter အများအပြားအသုံးပြုခြင်း', 'Generic ကိုဖတ်လွယ်အောင်ကန့်သတ်ခြင်း'] },
    { title: 'Classes and Object-Oriented TypeScript', note: 'Class၊ access modifier နှင့် abstract contract များကို type safety နဲ့ချိတ်ဆက်ပါ။', topics: ['Class နှင့် constructor ရေးခြင်း', 'public၊ private၊ protected ခွဲခြားခြင်း', 'readonly field သတ်မှတ်ခြင်း', 'implements ဖြင့် interface လိုက်နာခြင်း', 'extends ဖြင့် inheritance တည်ဆောက်ခြင်း', 'Abstract class မိတ်ဆက်', 'Getter နှင့် setter အသုံးပြုခြင်း', 'Static member နှင့် utility method', 'Composition ဖြင့် dependency ချိတ်ခြင်း', 'Class ကို interface နှင့် type အဖြစ်အသုံးပြုခြင်း'] },
    { title: 'Modules, Configuration, and Tooling', note: 'Module import/export၊ compiler option နှင့် build tool များကို နားလည်ပြီး project setup ကိုမှန်ကန်စွာထားပါ။', topics: ['Named export နှင့် import', 'Default export ရွေးချယ်ခြင်း', 'Module path နှင့် alias သတ်မှတ်ခြင်း', 'ES module နှင့် CommonJS ခွဲခြားခြင်း', 'tsconfig target နှင့် module option', 'Declaration file နှင့် ambient type မိတ်ဆက်', 'Third-party package type တပ်ဆင်ခြင်း', 'Source map ဖြင့် debug လုပ်ခြင်း', 'Vite project ထဲတွင် TypeScript သုံးခြင်း', 'Build script နှင့် type-check script ခွဲခြင်း'] },
    { title: 'Async Code, APIs, and DOM', note: 'Promise၊ fetch၊ browser DOM နှင့် event များကို type-safe နည်းဖြင့်အသုံးပြုပါ။', topics: ['Promise<T> return type ဖတ်ခြင်း', 'async/await function ရေးခြင်း', 'try/catch ဖြင့် async error ကိုင်တွယ်ခြင်း', 'fetch response ကို validate လုပ်ခြင်း', 'API response အတွက် type သတ်မှတ်ခြင်း', 'AbortController ဖြင့် request ရပ်ခြင်း', 'DOM element ကို null စစ်ပြီးအသုံးပြုခြင်း', 'Event target ကို type guard လုပ်ခြင်း', 'Form input value ကိုဖတ်ခြင်း', 'Browser storage data ကိုစစ်ပြီးပြန်ဖတ်ခြင်း'] },
    { title: 'Advanced Types and Type Transformations', note: 'keyof၊ indexed access၊ conditional နှင့် mapped type များကို အသုံးပြုပြီး type ကိုပြောင်းလဲတည်ဆောက်ပါ။', topics: ['keyof ဖြင့် property key များယူခြင်း', 'Indexed access type ဖြင့် property type ရယူခြင်း', 'typeof ဖြင့် value မှ type ထုတ်ခြင်း', 'Mapped type ဖြင့် property ပြောင်းခြင်း', 'Conditional type အခြေခံ', 'infer ဖြင့် type အစိတ်အပိုင်းထုတ်ခြင်း', 'Template literal type မိတ်ဆက်', 'Utility type Partial နှင့် Required', 'Pick၊ Omit နှင့် Record အသုံးပြုခြင်း', 'Type complexity ကိုထိန်းပြီးရှင်းလင်းစေခြင်း'] },
    { title: 'Testing, Runtime Safety, and Production', note: 'Compile-time type checking သည် runtime validation ကိုအစားမထိုးနိုင်ကြောင်းနားလည်ပြီး test၊ validation နှင့် release ကိုစီမံပါ။', topics: ['Compile-time နှင့် runtime error ခွဲခြားခြင်း', 'External JSON ကို schema ဖြင့်စစ်ခြင်း', 'Zod ဖြင့် input validate လုပ်ခြင်း', 'Unit test ဖြင့် function behavior စစ်ခြင်း', 'Mock ဖြင့် API dependency ခွဲခြင်း', 'Type test ဖြင့် public API စစ်ဆေးခြင်း', 'ESLint နှင့် formatter ချိတ်ဆက်ခြင်း', 'Environment variable ကို validate လုပ်ခြင်း', 'Production build အရင် type-check လုပ်ခြင်း', 'TypeScript migration ကို အဆင့်လိုက်လုပ်ခြင်း'] }
  ];

  // Python lessons are now hand-written <article> pages in index.html (JS format);
  // the generated lessons below are disabled so they do not duplicate them.
  // TypeScript lessons are now hand-written <article> pages in index.html (JS format);
  // the generated lessons below are disabled so they do not duplicate them.

  var main = document.getElementById('main');
  if (!main) return;

  function sampleFor(group, lesson) {
    var title = lesson[0].toLowerCase();
    var query = '';
    if (group === 'python' || group === 'typescript') {
      var meta = lesson[3] || { unitIndex: 0, topic: lesson[0] };
      var pythonExamples = [
        `name = input('သင့်နာမည်: ').strip()\nprint(f'မင်္ဂလာပါ {name}!')`,
        `price_text = '2500'\nprice = int(price_text)\ntax_rate = 0.05\ntotal = price * (1 + tax_rate)\nprint(f'{total:.0f} ကျပ်')`,
        `score = 78\nif score >= 80:\n    level = 'ကောင်း'\nelif score >= 50:\n    level = 'အောင်မြင်'\nelse:\n    level = 'ထပ်လေ့လာရန်'\nprint(level)`,
        `lessons = ['Python', 'SQL', 'API']\nfor index, lesson_name in enumerate(lessons, start=1):\n    print(index, lesson_name)`,
        `student = {'name': 'Aye', 'scores': [80, 92, 75]}\naverage = sum(student['scores']) / len(student['scores'])\nprint(student['name'], average)`,
        `def calculate_total(price: float, quantity: int = 1) -> float:\n    return price * quantity\n\nprint(calculate_total(2500, quantity=2))`,
        `text = '  Learn Python  '\nclean = text.strip().lower()\nwords = clean.split()\nprint(' '.join(words))`,
        `from pathlib import Path\n\nproject_file = Path('notes.txt')\nproject_file.write_text('Python lesson', encoding='utf-8')\nprint(project_file.read_text(encoding='utf-8'))`,
        `import json\n\ntry:\n    student = json.loads('{"name":"Aye","score":90}')\n    print(student['name'], student['score'])\nexcept (json.JSONDecodeError, KeyError) as error:\n    print('Data ကိုစစ်ပါ:', error)`,
        `from dataclasses import dataclass\n\n@dataclass\nclass Lesson:\n    title: str\n    minutes: int\n\nlesson = Lesson('Python basics', 20)\nprint(lesson.title, lesson.minutes)`,
        `import unittest\n\ndef calculate_total(price: int, quantity: int) -> int:\n    return price * quantity\n\nclass TotalTests(unittest.TestCase):\n    def test_multiplies_price_by_quantity(self):\n        self.assertEqual(calculate_total(2500, 2), 5000)\n\nif __name__ == '__main__':\n    unittest.main()`
      ];
      var typeScriptExamples = [
        `const learnerName: string = 'Aye';\nconsole.log('မင်္ဂလာပါ', learnerName);`,
        `const priceText = '2500';\nconst price: number = Number(priceText);\nconst taxRate = 0.05;\nconst total = price * (1 + taxRate);\nconsole.log(total.toFixed(0), 'ကျပ်');`,
        `const score = 78;\nlet level: string;\nif (score >= 80) level = 'ကောင်း';\nelse if (score >= 50) level = 'အောင်မြင်';\nelse level = 'ထပ်လေ့လာရန်';\nconsole.log(level);`,
        `const lessons: string[] = ['TypeScript', 'React', 'API'];\nlessons.forEach((lesson, index) => {\n  console.log(index + 1, lesson);\n});`,
        `type Student = { name: string; scores: number[] };\nconst student: Student = { name: 'Aye', scores: [80, 92, 75] };\nconst average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;\nconsole.log(student.name, average);`,
        `function calculateTotal(price: number, quantity = 1): number {\n  return price * quantity;\n}\nconsole.log(calculateTotal(2500, 2));`,
        `const text = '  Learn TypeScript  ';\nconst clean = text.trim().toLowerCase();\nconst words = clean.split(/\\s+/);\nconsole.log(words.join(' '));`,
        `type LessonFile = { path: string; content: string };\nfunction saveLesson(file: LessonFile): string {\n  return 'Saved ' + file.path + ' (' + file.content.length + ' chars)';\n}\nconsole.log(saveLesson({ path: 'notes.txt', content: 'TypeScript' }));`,
        `type ApiResult<T> = { ok: true; data: T } | { ok: false; error: string };\nfunction showResult<T>(result: ApiResult<T>): void {\n  if (result.ok) console.log(result.data);\n  else console.error(result.error);\n}\nshowResult({ ok: true, data: ['Python', 'TypeScript'] });`,
        `interface Lesson { title: string; minutes: number }\nclass LessonCard implements Lesson {\n  constructor(public title: string, public minutes: number) {}\n  summary(): string { return this.title + ': ' + this.minutes + ' min'; }\n}\nconsole.log(new LessonCard('TypeScript basics', 20).summary());`,
        `type UserInput = { name?: unknown; score?: unknown };\nfunction isValidUser(value: unknown): value is { name: string; score: number } {\n  if (typeof value !== 'object' || value === null) return false;\n  const input = value as UserInput;\n  return typeof input.name === 'string' && typeof input.score === 'number';\n}\nconst payload: unknown = JSON.parse('{"name":"Aye","score":90}');\nif (isValidUser(payload)) console.log(payload.name, payload.score);`
      ];
      var examples = group === 'python' ? pythonExamples : typeScriptExamples;
      query = (group === 'python' ? '# Focus: ' : '// Focus: ') + meta.topic + '\n' + examples[meta.unitIndex % examples.length];
      return {
        language: group === 'python' ? 'Python 3' : 'TypeScript',
        code: query,
        note: group === 'python'
          ? 'Run နှိပ်လျှင် browser ထဲက Python 3 runtime ဖြင့် output ပြပါမည်။ Input နဲ့တန်ဖိုးတွေပြောင်းပြီး output ကိုနှိုင်းယှဉ်ပါ။ အင်တာနက်မရှိလျှင် local Python 3 နဲ့ စမ်းပါ။'
          : 'Run နှိပ်လျှင် browser ထဲမှာ TypeScript ကို compile/transpile လုပ်ပြီး output ပြပါမည်။ Type error အပြည့်အစုံစစ်ရန် strict project ထဲမှာ tsc နဲ့လည်း စမ်းပါ။'
      };
    }
    if (group === 'mysql') {
      if (/cli|workbench|server.*connect/.test(title)) query = `SELECT VERSION() AS mysql_version;
SELECT DATABASE() AS current_database;
SHOW DATABASES;`;
      else if (/sql script|comment|format/.test(title)) query = `-- Select only the fields needed by this report.
SELECT id, name, price
FROM products
WHERE is_public = 1
ORDER BY name;`;
      else if (/schema.*(create|remove|drop)|database.*create/.test(title)) query = `-- Create a disposable practice schema first.
CREATE DATABASE practice_shop CHARACTER SET utf8mb4;
USE practice_shop;
CREATE TABLE lessons (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(120) NOT NULL
);
-- Check the schema name before any DROP DATABASE command.`;
      else if (/naming convention|အမည်ပေး/.test(title)) query = `CREATE TABLE lesson_progress (
  lesson_id BIGINT NOT NULL,
  student_id BIGINT NOT NULL,
  completed_at DATETIME NULL,
  PRIMARY KEY (lesson_id, student_id)
);`;
      else if (/composite primary key/.test(title)) query = `CREATE TABLE enrollments (
  student_id BIGINT NOT NULL,
  course_id BIGINT NOT NULL,
  enrolled_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (student_id, course_id)
);`;
      else if (/auto_increment|id gap/.test(title)) query = `CREATE TABLE practice_ids (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(80) NOT NULL
);
INSERT INTO practice_ids (label) VALUES ('first');
SELECT id, label FROM practice_ids;`;
      else if (/enum|lookup table/.test(title)) query = `CREATE TABLE order_statuses (
  id SMALLINT PRIMARY KEY,
  code VARCHAR(24) NOT NULL UNIQUE
);
INSERT INTO order_statuses (id, code)
VALUES (1, 'pending'), (2, 'paid');`;
      else if (/character set|collation|utf8mb4/.test(title)) query = `CREATE TABLE myanmar_notes (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(160) NOT NULL
) CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

INSERT INTO myanmar_notes (title) VALUES ('မြန်မာစာ သင်ခန်းစာ');`;
      else if (/deadlock|isolation|transaction|acid|row lock/.test(title)) query = `START TRANSACTION;
SELECT id, stock FROM products WHERE id = 1 FOR UPDATE;
UPDATE products SET stock = stock - 1 WHERE id = 1;
COMMIT;`;
      else if (/recursive cte/.test(title)) query = `WITH RECURSIVE team AS (
  SELECT id, manager_id, name, 0 AS depth
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.manager_id, e.name, t.depth + 1
  FROM employees e JOIN team t ON e.manager_id = t.id
)
SELECT name, depth FROM team;`;
      else if (/cte|common table/.test(title)) query = `WITH monthly_sales AS (
  SELECT customer_id, SUM(total) AS amount
  FROM orders GROUP BY customer_id
)
SELECT customer_id, amount
FROM monthly_sales ORDER BY amount DESC;`;
      else if (/window|rank|running total/.test(title)) query = `SELECT department_id, name, salary,
  DENSE_RANK() OVER (
    PARTITION BY department_id ORDER BY salary DESC
  ) AS salary_rank
FROM employees;`;
      else if (/case expression|conditional value/.test(title)) query = `SELECT id, total,
  CASE WHEN total >= 100000 THEN 'large'
       WHEN total >= 30000 THEN 'medium'
       ELSE 'small' END AS order_size
FROM orders;`;
      else if (/union/.test(title)) query = `SELECT email FROM active_users
UNION ALL
SELECT email FROM archived_users;`;
      else if (/exists/.test(title)) query = `SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.id
);`;
      else if (/json/.test(title)) query = `SELECT id,
  JSON_UNQUOTE(JSON_EXTRACT(options, '$.color')) AS color
FROM products;`;
      else if (/full-text/.test(title)) query = `SELECT id, title,
  MATCH(title, body) AGAINST ('database index') AS score
FROM articles
WHERE MATCH(title, body) AGAINST ('database index');`;
      else if (/procedure/.test(title)) query = `DELIMITER //
CREATE PROCEDURE find_product(IN product_id INT)
BEGIN
  SELECT id, name, price
  FROM products WHERE id = product_id;
END //
DELIMITER ;`;
      else if (/stored function/.test(title)) query = `CREATE FUNCTION add_tax(amount DECIMAL(10,2))
RETURNS DECIMAL(10,2) DETERMINISTIC
RETURN amount * 1.05;`;
      else if (/trigger/.test(title)) query = `CREATE TRIGGER products_audit
AFTER UPDATE ON products
FOR EACH ROW
  INSERT INTO product_audit(product_id, old_price, new_price)
  VALUES (OLD.id, OLD.price, NEW.price);`;
      else if (/event scheduler/.test(title)) query = `CREATE EVENT remove_old_sessions
ON SCHEDULE EVERY 1 DAY
DO DELETE FROM sessions
   WHERE last_activity < NOW() - INTERVAL 30 DAY;`;
      else if (/view/.test(title)) query = `CREATE VIEW public_products AS
SELECT id, name, price
FROM products WHERE is_public = 1;

SELECT * FROM public_products;`;
      else if (/explain|invisible index|composite index|index ကို/.test(title)) query = `EXPLAIN
SELECT id, name FROM products
WHERE category_id = 2 AND is_public = 1;

CREATE INDEX idx_products_category_public
ON products(category_id, is_public);`;
      else if (/date, datetime|utc|timezone/.test(title)) query = `SELECT UTC_TIMESTAMP() AS stored_utc,
  CONVERT_TZ(UTC_TIMESTAMP(), '+00:00', '+06:30') AS yangon_time;`;
      else if (/decimal|ငွေကြေး/.test(title)) query = `CREATE TABLE invoices (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  amount DECIMAL(12, 2) NOT NULL
);
SELECT amount * 1.05 AS total FROM invoices;`;
      else if (/generated column/.test(title)) query = `CREATE TABLE order_lines (
  quantity INT NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  line_total DECIMAL(12,2)
    GENERATED ALWAYS AS (quantity * unit_price) STORED
);`;
      else if (/unique|check constraint|not null|default constraint/.test(title)) query = `CREATE TABLE members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(190) NOT NULL UNIQUE,
  age INT CHECK (age >= 0),
  active BOOLEAN NOT NULL DEFAULT TRUE
);`;
      else if (/upsert/.test(title)) query = `INSERT INTO inventory (sku, quantity)
VALUES ('BOOK-01', 5)
ON DUPLICATE KEY UPDATE quantity = quantity + 5;`;
      else if (/bulk insert/.test(title)) query = `INSERT INTO products (name, price)
VALUES ('Notebook', 2500),
       ('Pen', 800),
       ('Ruler', 1200);`;
      else if (/safe update/.test(title)) query = `SELECT id, stock FROM products WHERE id = 1;
START TRANSACTION;
UPDATE products SET stock = 9 WHERE id = 1;
SELECT id, stock FROM products WHERE id = 1;
ROLLBACK;`;
      else if (/schema|database|workbench|client/.test(title)) query = `CREATE DATABASE practice_db;
USE practice_db;
CREATE TABLE notes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(120) NOT NULL
);
SHOW TABLES;`;
      else query = `SELECT id, name, price
FROM products
WHERE price >= 30000
ORDER BY price DESC
LIMIT 5;`;
      return { language: 'SQL', code: query, note: 'ဒီ preview က sample data ဖြင့် SQL ကို simulation လုပ်ပြသည်။ Version သို့မဟုတ် feature အပြည့်အစုံလိုသော query များကို ကိုယ်ပိုင် MySQL တွင်စမ်းပါ။' };
    }

    if (group === 'laravel') {
      if (/artisan command/.test(title)) query = `php artisan make:command CheckOldRecords
php artisan list
php artisan help migrate`;
      else if (/scheduler/.test(title)) query = `Schedule::command('reports:daily')
    ->dailyAt('02:00')
    ->withoutOverlapping();`;
      else if (/signed url/.test(title)) query = `URL::temporarySignedRoute(
    'account.confirm',
    now()->addMinutes(30),
    ['user' => $user->id]
);`;
      else if (/session driver|session fixation/.test(title)) query = `Auth::login($user);
request()->session()->regenerate();

Auth::logout();
request()->session()->invalidate();
request()->session()->regenerateToken();`;
      else if (/password reset/.test(title)) query = `$status = Password::sendResetLink(
    $request->only('email')
);`;
      else if (/email verification/.test(title)) query = `Route::get('/account', AccountController::class)
    ->middleware(['auth', 'verified']);`;
      else if (/response macro/.test(title)) query = `Response::macro('notice', function ($message) {
    return response()->json([
        'message' => $message,
    ]);
});`;
      else if (/exception rendering|error response/.test(title)) query = `->withExceptions(function (Exceptions $exceptions) {
    $exceptions->render(function (DomainException $error, Request $request) {
        return response()->json([
            'error' => 'Request could not be completed',
        ], 422);
    });
});`;
      else if (/localization/.test(title)) query = `// resources/lang/my/messages.php
return ['welcome' => 'ကြိုဆိုပါတယ်'];

// Controller / Blade
__('messages.welcome');`;
      else query = `Route::get('/products/{product}',
    [ProductController::class, 'show'])
    ->middleware('auth');`;
      return { language: /artisan command/.test(title) ? 'Terminal' : 'PHP · Laravel', code: query, note: 'ဤဥပမာသည် Laravel project အတွက်ဖြစ်သည်။ Route, config နှင့် framework version ကို စစ်ပြီး local environment တွင် စမ်းပါ။' };
    }

    if (group === 'api') {
      if (/contract|openapi|schema|consumer-driven/.test(title)) query = `openapi: 3.1.0
paths:
  /products/{productId}:
    get:
      responses:
        '200':
          description: Product found
        '404':
          description: Product not found`;
      else if (/resource uri|nested route|uri/.test(title)) query = `GET /api/users/42/orders?limit=20
Accept: application/json`;
      else if (/safe and idempotent|http semantics|idempotent/.test(title)) query = `GET /api/products/1
Accept: application/json

PUT /api/products/1
Content-Type: application/json

{"name":"Notebook","price":2500}`;
      else if (/content negotiation|media type/.test(title)) query = `GET /api/products/1
Accept: application/vnd.example.product+json`;
      else if (/problem details|api error/.test(title)) query = `HTTP/1.1 404 Not Found
Content-Type: application/problem+json

{"type":"/errors/not-found","title":"Product not found","status":404}`;
      else if (/envelope|bare resource/.test(title)) query = `HTTP/1.1 200 OK
Content-Type: application/json

{"data":{"id":1,"name":"Notebook"},"request_id":"req-001"}`;
      else if (/cursor pagination/.test(title)) query = `GET /api/products?limit=20&after=eyJpZCI6MjB9
Accept: application/json`;
      else if (/filter|sort|query grammar/.test(title)) query = `GET /api/products?filter[status]=active&sort=-created_at&limit=20
Accept: application/json`;
      else if (/sparse fieldset|field/.test(title)) query = `GET /api/products?fields[products]=name,price
Accept: application/json`;
      else if (/relationship|include/.test(title)) query = `GET /api/orders/42?include=items.product
Accept: application/json`;
      else if (/conditional get|if-none-match/.test(title)) query = `GET /api/products/1
If-None-Match: "product-v3"

HTTP/1.1 304 Not Modified`;
      else if (/cache-control|private data/.test(title)) query = `HTTP/1.1 200 OK
Cache-Control: private, no-store
Vary: Authorization`;
      else if (/retry-after|rate limit/.test(title)) query = `HTTP/1.1 429 Too Many Requests
Retry-After: 30
Content-Type: application/json

{"error":"rate_limited","retry_after_seconds":30}`;
      else if (/timeout|cancellation/.test(title)) query = `const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);
try {
  const response = await fetch('/api/products', { signal: controller.signal });
  console.log(response.status);
} finally {
  clearTimeout(timeout);
}`;
      else if (/asynchronous job|202 accepted|accepted/.test(title)) query = `HTTP/1.1 202 Accepted
Location: /api/jobs/job-123
Retry-After: 3

{"job_id":"job-123","status":"queued"}`;
      else if (/range request|range/.test(title)) query = `GET /files/lesson.pdf
Range: bytes=0-1023

HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/8192`;
      else if (/signature|webhook|event id|replay|duplicate delivery/.test(title)) query = `POST /api/webhooks/orders
X-Event-Id: evt_1001
X-Signature: sha256=example

{"type":"order.paid","order_id":42}`;
      else if (/bulk operation|partial failure/.test(title)) query = `POST /api/products/bulk
Content-Type: application/json

{"items":[{"sku":"A-1","price":2500},{"sku":"B-2","price":800}]}`;
      else if (/login|oauth|jwt|pkce|token revoke/.test(title)) query = `POST /api/login
Content-Type: application/json

{"email":"aung@example.com","password":"secret"}`;
      else if (/delete|revoke/.test(title)) query = `DELETE /api/products/1`;
      else if (/update|concurrency|etag/.test(title)) query = `PATCH /api/products/1
Content-Type: application/json
If-Match: "v3"

{"stock": 18}`;
      else if (/webhook|event contract|signature|replay/.test(title)) query = `POST /api/webhooks/orders
Content-Type: application/json
X-Event-Id: evt_1001
X-Signature: sha256=example

{"type":"order.paid","order_id":42}`;
      else if (/create|bulk|multipart|upload|idempotency/.test(title)) query = `POST /api/products
Content-Type: application/json
Idempotency-Key: order-request-001

{"name":"Notebook","price":2500,"stock":12}`;
      else query = `GET /api/products?limit=10
Accept: application/json`;
      return { language: 'HTTP Request', code: query, note: 'Run လုပ်လျှင် sample API သာ simulation လုပ်ပြသည်။ Header သို့မဟုတ် workflow အချို့ကို preview ကအပြည့်အဝအကောင်အထည်မဖော်နိုင်ပါ။' };
    }

    if (group === 'react') {
      if (/portal/.test(title)) query = `const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);
function HelpDialog() {
  return ReactDOM.createPortal(
    <div role="dialog" aria-modal="true">Help</div>,
    modalRoot
  );
}
createRoot(document.getElementById('root')).render(<HelpDialog />);`;
      else if (/compound component/.test(title)) query = `function Tabs({ children }) {
  return <div className="tabs">{children}</div>;
}
function Tab({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
createRoot(document.getElementById('root')).render(
  <Tabs><Tab>Overview</Tab><Tab>Lessons</Tab></Tabs>
);`;
      else if (/children composition/.test(title)) query = `function Card({ title, children }) {
  return <section><h2>{title}</h2><div>{children}</div></section>;
}
createRoot(document.getElementById('root')).render(
  <Card title="Profile"><p>Learn by building.</p></Card>
);`;
      else if (/useid/.test(title)) query = `function NameField() {
  const id = React.useId();
  return <>
    <label htmlFor={id}>Name</label>
    <input id={id} />
  </>;
}
createRoot(document.getElementById('root')).render(<NameField />);`;
      else if (/layouteffect/.test(title)) query = `function BoxSize() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  React.useLayoutEffect(() => {
    setWidth(ref.current.getBoundingClientRect().width);
  }, []);
  return <div ref={ref}>Width: {Math.round(width)}px</div>;
}
createRoot(document.getElementById('root')).render(<BoxSize />);`;
      else if (/imperativehandle/.test(title)) query = `const SearchBox = React.forwardRef(function SearchBox(props, ref) {
  const input = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    focus: () => input.current.focus()
  }));
  return <input ref={input} placeholder="Search" />;
});
createRoot(document.getElementById('root')).render(<SearchBox />);`;
      else if (/syncexternalstore/.test(title)) query = `function OnlineStatus() {
  const online = React.useSyncExternalStore(
    (notify) => {
      window.addEventListener('online', notify);
      window.addEventListener('offline', notify);
      return () => {
        window.removeEventListener('online', notify);
        window.removeEventListener('offline', notify);
      };
    },
    () => navigator.onLine
  );
  return <p>{online ? 'Online' : 'Offline'}</p>;
}
createRoot(document.getElementById('root')).render(<OnlineStatus />);`;
      else if (/usetransition/.test(title)) query = `function SearchList({ items }) {
  const [query, setQuery] = React.useState('');
  const [shown, setShown] = React.useState(items);
  const [pending, startTransition] = React.useTransition();
  function search(value) {
    setQuery(value);
    startTransition(() => {
      setShown(items.filter((item) => item.includes(value)));
    });
  }
  return <><input value={query} onChange={e => search(e.target.value)} />
    {pending ? 'Updating…' : shown.join(', ')}</>;
}`;
      else query = `function SearchList({ items }) {
  const [query, setQuery] = React.useState('');
  const deferredQuery = React.useDeferredValue(query);
  const results = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );
  return <>
    <input value={query} onChange={e => setQuery(e.target.value)} />
    <ul>{results.map(item => <li key={item}>{item}</li>)}</ul>
  </>;
}
createRoot(document.getElementById('root')).render(
  <SearchList items={['HTML', 'React', 'Flutter']} />
);`;
      return { language: 'React JSX', code: query, note: 'React preview нь browser ထဲတွင် React/Babel သုံးသည်။ CDN မရနိုင်ပါက code ကို project ထဲတွင် run ပါ။' };
    }

    if (group === 'dart') {
      if (/unicode|rune/.test(title)) query = `void main() {
  const text = 'မြန်မာစာ 👋';
  print(text.length);       // UTF-16 code unit
  print(text.runes.length); // Unicode code point
}`;
      else if (/const, final/.test(title)) query = `const appName = 'Learn With me';
final startedAt = DateTime.now();
print('$appName started at $startedAt');`;
      else if (/parsing/.test(title)) query = `void main() {
  final raw = '2500';
  final price = int.tryParse(raw);
  if (price == null) {
    print('တန်ဖိုးကို စစ်ဆေးပါ');
  } else {
    print(price * 2);
  }
}`;
      else if (/enum/.test(title)) query = `enum OrderStatus { pending, paid, shipped }

String label(OrderStatus status) => switch (status) {
  OrderStatus.pending => 'စောင့်ဆိုင်းနေ',
  OrderStatus.paid => 'ငွေပေးပြီး',
  OrderStatus.shipped => 'ပို့ပြီး',
};`;
      else if (/record/.test(title)) query = `(String, int) userInfo() => ('Aye', 20);

void main() {
  final (name, age) = userInfo();
  print('$name is $age');
}`;
      else if (/sealed class/.test(title)) query = `sealed class Result {}
class Loading extends Result {}
class Success extends Result { Success(this.value); final String value; }
class Failure extends Result { Failure(this.message); final String message; }

String label(Result result) => switch (result) {
  Loading() => 'Loading',
  Success(:final value) => value,
  Failure(:final message) => message,
};`;
      else if (/pattern matching|switch expression/.test(title)) query = `String describe(Object value) => switch (value) {
  int n when n > 0 => 'positive: $n',
  String s => 'text: $s',
  _ => 'other',
};`;
      else if (/type alias|typedef/.test(title)) query = `typedef PriceFormatter = String Function(num value);

String kyat(num value) => '$value ကျပ်';
void main() {
  PriceFormatter format = kyat;
  print(format(2500));
}`;
      else if (/isolate/.test(title)) query = `import 'dart:isolate';

Future<void> main() async {
  final result = await Isolate.run(() {
    return List.generate(1000, (i) => i).reduce((a, b) => a + b);
  });
  print(result);
}`;
      else if (/future\.wait/.test(title)) query = `Future<String> loadName() async => 'Aye';
Future<int> loadScore() async => 95;

Future<void> main() async {
  final values = await Future.wait([loadName(), loadScore()]);
  print(values);
}`;
      else if (/timeout/.test(title)) query = `import 'dart:async';

Future<String> loadData() async => 'ready';

Future<void> main() async {
  try {
    final value = await loadData().timeout(const Duration(seconds: 3));
    print(value);
  } on TimeoutException {
    print('တုံ့ပြန်ချိန် ကျော်လွန်သွားပါတယ်');
  }
}`;
      else if (/datetime|duration/.test(title)) query = `void main() {
  final utc = DateTime.now().toUtc();
  final later = utc.add(const Duration(hours: 2));
  print(utc.toIso8601String());
  print(later.difference(utc).inMinutes);
}`;
      else if (/regexp/.test(title)) query = `final idPattern = RegExp(r'^[A-Z]{2}-\d{4}$');
void main() {
  print(idPattern.hasMatch('AB-2026'));
  print(idPattern.hasMatch('wrong'));
}`;
      else if (/uri/.test(title)) query = `void main() {
  final uri = Uri.https('example.com', '/search', {'q': 'မြန်မာစာ'});
  print(uri);
}`;
      else if (/stream(?!controller| transformer)/.test(title)) query = `Stream<int> countToThree() async* {
  for (var i = 1; i <= 3; i++) {
    yield i;
  }
}

Future<void> main() async {
  await for (final value in countToThree()) {
    print(value);
  }
}`;
      else if (/collection if|spread/.test(title)) query = `void main() {
  final showTip = true;
  final base = ['SQL', 'Dart'];
  final topics = [...base, if (showTip) 'Flutter'];
  print(topics);
}`;
      else if (/generator/.test(title)) query = `Iterable<int> evenNumbers(int max) sync* {
  for (var value = 0; value <= max; value += 2) {
    yield value;
  }
}

void main() => print(evenNumbers(6).toList());`;
      else if (/streamcontroller|subscription/.test(title)) query = `import 'dart:async';

Future<void> main() async {
  final controller = StreamController<String>();
  final subscription = controller.stream.listen(print);
  controller.add('lesson started');
  await controller.close();
  await subscription.cancel();
}`;
      else if (/transformer/.test(title)) query = `Stream<int> values() async* {
  yield* [1, 2, 3, 4];
}

Future<void> main() async {
  final doubled = values().map((value) => value * 2);
  print(await doubled.toList());
}`;
      else if (/stacktrace|rethrow|error/.test(title)) query = `Future<void> save() async {
  try {
    throw StateError('Save failed');
  } catch (error, stackTrace) {
    print('Could not save: $error');
    print(stackTrace);
    rethrow;
  }
}`;
      else if (/uri|url/.test(title)) query = `void main() {
  final uri = Uri.https('example.com', '/search', {'q': 'Dart basics'});
  print(uri);
  print(uri.queryParameters['q']);
}`;
      else if (/command-line|argument|exit code/.test(title)) query = `void main(List<String> args) {
  if (args.isEmpty) {
    print('Usage: dart run app.dart <name>');
    return;
  }
  print('Hello, ' + args.first);
}`;
      else if (/documentation|public api/.test(title)) query = `/// Adds two values and returns the result.
///
/// Both values must use the same unit.
int add(int left, int right) => left + right;

void main() => print(add(2, 3));`;
      else query = `void main() {
  final values = <int>[3, 1, 2];
  final doubled = values.map((value) => value * 2).toList();
  print(doubled);
}`;
      return { language: 'Dart', code: query, note: 'Dart code ကို browser preview မှာ run မလုပ်ပါ။ DartPad သို့မဟုတ် local Dart project မှာ ကူးပြီးစမ်းပါ။' };
    }

    if (group === 'flutter') {
      if (/platform channel/.test(title)) query = `const channel = MethodChannel('app/device');

Future<int?> readBattery() async {
  try {
    return await channel.invokeMethod<int>('batteryLevel');
  } on PlatformException catch (error) {
    debugPrint('Platform call failed: $error');
    return null;
  }
}`;
      else if (/background task/.test(title)) query = `// Keep background work short and save progress before the app pauses.
Future<void> syncPendingItems() async {
  final pending = await repository.getPendingItems();
  for (final item in pending) {
    await repository.sync(item);
  }
}`;
      else if (/permission/.test(title)) query = `final status = await Permission.camera.request();
if (status.isGranted) {
  openCamera();
} else if (status.isPermanentlyDenied) {
  openAppSettings();
}`;
      else if (/local notification/.test(title)) query = `await notifications.zonedSchedule(
  1,
  'Study reminder',
  'Continue your lesson',
  scheduledDate,
  const NotificationDetails(
    android: AndroidNotificationDetails('study', 'Study reminders'),
  ),
  androidScheduleMode: AndroidScheduleMode.exactAllowWhileIdle,
);`;
      else if (/lifecycle/.test(title)) query = `class ScreenState extends State<Screen>
    with WidgetsBindingObserver {
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused) pauseMedia();
    if (state == AppLifecycleState.resumed) refreshData();
  }
}`;
      else if (/camera|media resource/.test(title)) query = `final result = await ImagePicker().pickImage(
  source: ImageSource.camera,
  imageQuality: 80,
);
if (result != null) {
  final file = File(result.path);
  await uploadService.upload(file);
}`;
      else if (/notification/.test(title)) query = `final settings = await messaging.requestPermission();
if (settings.authorizationStatus == AuthorizationStatus.authorized) {
  final token = await messaging.getToken();
  await api.registerDevice(token);
}`;
      else if (/sqlite|migration/.test(title)) query = `await db.execute('''
  CREATE TABLE notes (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL
  )
''');`;
      else if (/custompainter/.test(title)) query = `class RingPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = Colors.green;
    canvas.drawCircle(size.center(Offset.zero), 24, paint);
  }
  @override
  bool shouldRepaint(covariant RingPainter oldDelegate) => false;
}`;
      else if (/adaptive navigation|screen size/.test(title)) query = `Widget navigationFor(BoxConstraints size) {
  if (size.maxWidth >= 900) {
    return const NavigationRail(
      destinations: [
        NavigationRailDestination(icon: Icon(Icons.home), label: Text('Home')),
      ],
      selectedIndex: 0,
    );
  }
  return const NavigationBar(
    destinations: [NavigationDestination(icon: Icon(Icons.home), label: 'Home')],
  );
}`;
      else if (/keyboard|mouse/.test(title)) query = `Focus(
  autofocus: true,
  onKeyEvent: (node, event) {
    if (event is KeyDownEvent && event.logicalKey == LogicalKeyboardKey.enter) {
      openSelectedLesson();
      return KeyEventResult.handled;
    }
    return KeyEventResult.ignored;
  },
  child: const ListTile(title: Text('Open lesson')),
)`;
      else if (/gesture arena|nested scroll/.test(title)) query = `GestureDetector(
  behavior: HitTestBehavior.opaque,
  onTap: () => selectLesson(),
  child: const Padding(
    padding: EdgeInsets.all(16),
    child: Text('Select lesson'),
  ),
)`;
      else if (/riverpod|provider/.test(title)) query = `final lessonProvider = Provider<LessonRepository>((ref) {
  return LessonRepository(ref.watch(apiClientProvider));
});

class LessonList extends ConsumerWidget {
  const LessonList({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final lessons = ref.watch(lessonListProvider);
    return LessonListView(lessons: lessons);
  }
}`;
      else query = `class ExampleCard extends StatelessWidget {
  const ExampleCard({super.key, required this.title});
  final String title;

  @override
  Widget build(BuildContext context) {
    return Card(child: ListTile(title: Text(title)));
  }
}`;
      return { language: 'Dart · Flutter', code: query, note: 'Flutter code ကို browser preview မှာ run မလုပ်နိုင်ပါ။ VS Code သို့မဟုတ် Android Studio မှာ app ဖန်တီးပြီး emulator/ဖုန်းပေါ်မှာ စမ်းပါ။' };
    }

    if (group === 'security') {
      if (/asset inventory|threat modeling|trust boundary|data classification|retention/.test(title)) query = `asset: student-profile
owner: learning-team
data: email, lesson-progress
trust_boundary: browser -> api -> database
retention_days: 365
controls:
  - access_review
  - encrypted_backup
  - delete_request_process`;
      else if (/mfa|passkey|phishing/.test(title)) query = `// Verify the second factor on the server; never trust a client-side flag.
if (!await mfaService.verify(user.id, submittedCode)) {
  throw new AuthenticationError('Verification failed');
}
await sessionService.rotate(user.id);`;
      else if (/enumeration|brute.force|rate limit|login response/.test(title)) query = `const account = await users.findByEmail(email);
const valid = account && await passwords.verify(account, password);
if (!valid) {
  await limiter.recordAttempt(ipAddress, email);
  return response.status(401).json({ error: 'Invalid credentials' });
}
await limiter.clearAttempts(ipAddress, email);`;
      else if (/redirect|allowlist/.test(title)) query = `const allowedHosts = new Set(['learn.example']);
const destination = new URL(returnTo, 'https://learn.example');
if (!allowedHosts.has(destination.hostname)) {
  throw new Error('Redirect destination is not allowed');
}
return response.redirect(destination.toString());`;
      else if (/session fixation|session rotation|session revocation|remember.me/.test(title)) query = `await sessions.regenerateAfterLogin(user.id);
await sessions.revokeAllForUser(user.id); // e.g. after password change
const rememberToken = crypto.randomBytes(32).toString('hex');
await tokenStore.saveHash(user.id, hashToken(rememberToken));`;
      else if (/csrf|samesite/.test(title)) query = `const session = await sessions.fromCookie(request);
if (!timingSafeEqual(request.body.csrfToken, session.csrfToken)) {
  return response.status(403).send('Request rejected');
}
await updateProfile(request.body);`;
      else if (/multi-tenant|ownership|bola|object-level/.test(title)) query = `const record = await db.records.findOne({
  id: request.params.id,
  tenant_id: currentUser.tenantId,
  owner_id: currentUser.id
});
if (!record) return response.sendStatus(404);`;
      else if (/xss|safe sink|trusted types|dangerous dom/.test(title)) query = `const message = document.querySelector('#message');
// Render untrusted input as text; do not assign it to innerHTML.
message.textContent = userProvidedMessage;`;
      else if (/clickjacking|frame-ancestors/.test(title)) query = `Content-Security-Policy: default-src 'self'; frame-ancestors 'none'
X-Frame-Options: DENY`;
      else if (/command injection|argument array/.test(title)) query = `// Pass arguments separately; never concatenate user input into a shell string.
const result = await runFile('/usr/bin/convert', [validatedPath, outputPath]);
if (result.exitCode !== 0) throw new Error('Conversion failed');`;
      else if (/xxe|external entity/.test(title)) query = `const parser = new XMLParser({
  processEntities: false,
  allowExternalEntities: false
});
const document = parser.parse(xmlInput);`;
      else if (/prototype pollution|object merge/.test(title)) query = `const allowedKeys = new Set(['displayName', 'theme']);
for (const [key, value] of Object.entries(input)) {
  if (allowedKeys.has(key)) safeProfile[key] = value;
}`;
      else if (/dependency|lockfile|secret scanning|provenance|attestation/.test(title)) query = `name: supply-chain-check
on: [pull_request]
permissions:
  contents: read
jobs:
  scan:
    steps:
      - run: npm ci
      - run: npm audit --omit=dev
      - run: gitleaks detect --redact`;
      else if (/log|pii|mask/.test(title)) query = `logger.info('Login attempt', {
  userId: user.id,
  outcome: 'success'
  // Do not log password, access token, or full email address.
});`;
      else if (/error message|internal detail/.test(title)) query = `try {
  await saveRecord(input);
} catch (error) {
  logger.error('Record save failed', { requestId, error });
  return response.status(500).json({ error: 'Something went wrong', requestId });
}`;
      else if (/hsts|https/.test(title)) query = `Strict-Transport-Security: max-age=31536000; includeSubDomains
// Add preload only after every subdomain supports HTTPS.`;
      else if (/key rotation|encryption key/.test(title)) query = `const currentKey = keyStore.getActiveKey();
const encrypted = encrypt(plaintext, currentKey);
await keyStore.recordKeyVersion(currentKey.id);
// Keep old keys available only while existing data is being re-encrypted.`;
      else if (/password hashing/.test(title)) query = `// Plain text password မသိမ်းပါနှင့်။ Argon2id/bcrypt ကိုသုံးပါ။
// Framework-ийн password hashing API (Argon2id/bcrypt)-г ашигла.
$hash = Hash::make($plainPassword);
if (Hash::check($candidate, $hash)) {
    // зөв password
}`;
      else if (/cookie/.test(title)) query = `Set-Cookie: session=…; Secure; HttpOnly; SameSite=Lax; Path=/`;
      else if (/content security|nonce/.test(title)) query = `Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-{per-response-random}'`;
      else if (/cors/.test(title)) query = `const allowedOrigins = new Set(['https://learn.example']);
if (allowedOrigins.has(request.headers.origin)) {
  response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
}`;
      else if (/sql|query/.test(title)) query = `$stmt = $pdo->prepare(
    'SELECT id, name FROM users WHERE email = ?'
);
$stmt->execute([$email]);`;
      else if (/upload|archive|zip/.test(title)) query = `// Store uploads outside the public web root.
// Validate size + content signature; generate the storage name.
$name = bin2hex(random_bytes(16));
$storage->put($name, $validatedFile);`;
      else if (/ssrf|dns|url/.test(title)) query = `// Allow only known hosts; reject loopback/private addresses.
$host = parse_url($url, PHP_URL_HOST);
if (!in_array($host, $allowedHosts, true)) {
    throw new DomainException('Destination is not allowed');
}`;
      else query = `// Deny by default; check ownership for every record.
if ($record->user_id !== $currentUser->id) {
    abort(403);
}`;
      return { language: 'Security example', code: query, note: 'ဤဥပမာသည် လုံခြုံရေးကာကွယ်ပုံကို ပြထားခြင်းဖြစ်သည်။ အသုံးမပြုမီ framework API၊ hosting config နှင့် သက်ဆိုင်ရာ threat model ကို စစ်ဆေးပါ။' };
    }

    if (group === 'deploy' || group === 'ci') {
      if (/container|multi-stage/.test(title)) query = `FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html`;
      else if (/reverse proxy/.test(title)) query = `# Trust forwarded headers only from the known proxy.
TRUSTED_PROXIES=10.0.0.0/8
APP_URL=https://learn.example`;
      else if (group === 'deploy' && /readiness|liveness|probe/.test(title)) query = `services:
  web:
    image: example/learn:1.4.0
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health/ready"]
      interval: 15s
      timeout: 3s
      retries: 3`;
      else if (group === 'deploy' && /graceful shutdown|in-flight/.test(title)) query = `process.on('SIGTERM', async () => {
  server.close(async () => {
    await queue.stopAcceptingNewJobs();
    await queue.finishActiveJobs();
    process.exit(0);
  });
});`;
      else if (group === 'ci' && /branch protection|required check/.test(title)) query = `required_status_checks:
  strict: true
  contexts: [build, unit-tests]
required_pull_request_reviews:
  required_approving_review_count: 1
allow_force_pushes: false`;
      else if (group === 'ci' && /dependency update/.test(title)) query = `name: dependency-review
on: [pull_request]
permissions:
  contents: read
jobs:
  checks:
    steps:
      - run: npm ci
      - run: npm test
      - run: npm audit --omit=dev`;
      else if (group === 'ci' && /provenance|attestation/.test(title)) query = `jobs:
  release:
    permissions:
      contents: read
      id-token: write
      attestations: write
    steps:
      - run: npm run build
      - run: attest-build ./dist`;
      else if (group === 'ci' && /database service|integration test/.test(title)) query = `services:
  mysql:
    image: mysql:8.4
    env:
      MYSQL_ROOT_PASSWORD: test-only
      MYSQL_DATABASE: app_test
steps:
  - run: npm run migrate:test
  - run: npm run test:integration`;
      else if (group === 'ci' && /artifact|promote|build once/.test(title)) query = `jobs:
  build:
    steps:
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with: { name: web-dist, path: dist/ }
  deploy:
    needs: build
    steps:
      - uses: actions/download-artifact@v4
        with: { name: web-dist }`;
      else if (group === 'ci' && /untrusted pull request|untrusted/.test(title)) query = `on: [pull_request]
permissions:
  contents: read
jobs:
  checks:
    steps:
      - run: npm ci && npm test
      # Never expose deployment secrets to untrusted PR code.`;
      else query = `name: validate
on: [pull_request]
permissions:
  contents: read
jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build`;
      return { language: 'Dockerfile · YAML · Config', code: query, note: 'ဒီဥပမာကို production မှာ ချက်ချင်းမသုံးပါနဲ့။ Secret၊ version pin၊ permission နဲ့ hosting setting တွေကိုစစ်ပြီး staging မှာအရင်စမ်းပါ။' };
    }

    if (group === 'quality') {
      if (/largest contentful|lcp|first contentful|fcp|interaction to next paint|inp|layout shift|cls|first byte|ttfb/.test(title)) query = `// Observe a page metric in the browser Performance API.
const observer = new PerformanceObserver((entries) => {
  for (const entry of entries.getEntries()) {
    console.log(entry.name || entry.entryType, entry.startTime);
  }
});
observer.observe({ type: 'paint', buffered: true });
// Compare field data on the same page template before changing code.`;
      else if (/rendering pipeline|critical rendering path/.test(title)) query = `<!-- Keep essential content in HTML and load only critical styles first. -->
<link rel="stylesheet" href="critical.css">
<main><h1>Learn a new topic</h1><p>Start with the basics.</p></main>
<script src="app.js" defer></script>`;
      else if (/lighthouse ci|performance regression/.test(title)) query = `ci:
  collect:
    numberOfRuns: 3
  assert:
    assertions:
      largest-contentful-paint:
        - error
        - maxNumericValue: 2500`;
      else if (/long task|main thread|trace/.test(title)) query = `const observer = new PerformanceObserver((entries) => {
  entries.getEntries().forEach((entry) => {
    console.warn('Long task:', Math.round(entry.duration), 'ms');
  });
});
observer.observe({ type: 'longtask', buffered: true });`;
      else if (/bundle|tree shaking|dependency|dynamic import/.test(title)) query = `// Load a route only when the user opens it.
async function openSettings() {
  const module = await import('./settings.js');
  module.renderSettings(document.querySelector('#app'));
}`;
      else if (/preload|prefetch|preconnect|dns prefetch/.test(title)) query = `<link rel="preconnect" href="https://fonts.example" crossorigin>
<link rel="preload" href="/fonts/lesson.woff2" as="font" type="font/woff2" crossorigin>
<!-- Preload only assets needed immediately on this page. -->`;
      else if (/font subset|font-display/.test(title)) query = `@font-face {
  font-family: "MyanmarLesson";
  src: url("/fonts/myanmar-subset.woff2") format("woff2");
  font-display: swap;
}
body { font-family: "MyanmarLesson", sans-serif; }`;
      else if (/responsive image|lazy load|avif|webp/.test(title)) query = `<picture>
  <source srcset="/images/lesson.avif" type="image/avif">
  <source srcset="/images/lesson.webp" type="image/webp">
  <img src="/images/lesson.jpg" alt="Lesson illustration" width="960" height="540">
</picture>
<!-- Add loading="lazy" only to images below the first screen. -->`;
      else if (/cache key|cdn cache/.test(title)) query = `Cache-Control: public, max-age=31536000, immutable
<!-- Use a content-hashed URL such as app.8f31c2.js for versioned assets. -->`;
      else if (/brotli|gzip|compression/.test(title)) query = `# Compress text responses at the web server/CDN.
Content-Encoding: br
Vary: Accept-Encoding
# Already-compressed images usually gain little from another compression pass.`;
      else if (/accessible name|label|description/.test(title)) query = `<label for="search">သင်ခန်းစာရှာရန်</label>
<input id="search" aria-describedby="search-help">
<p id="search-help">ခေါင်းစဉ် သို့မဟုတ် topic ဖြင့်ရှာနိုင်ပါတယ်။</p>`;
      else if (/link text/.test(title)) query = `<a href="/lessons/mysql-basics">MySQL အခြေခံသင်ခန်းစာများကို ကြည့်ရန်</a>
<!-- The link still makes sense when read on its own. -->`;
      else if (/aria role|native html|aria pattern|keyboard behavior/.test(title)) query = `<button type="button" aria-pressed="false" id="save">
  သိမ်းရန်
</button>
<script>
  document.querySelector('#save').addEventListener('click', (event) => {
    event.currentTarget.setAttribute('aria-pressed', 'true');
  });
</script>`;
      else if (/focus order|focus indicator/.test(title)) query = `:focus-visible {
  outline: 3px solid #146c43;
  outline-offset: 3px;
}
/* Keep DOM order aligned with the visible reading order. */`;
      else if (/touch target|control spacing/.test(title)) query = `.toolbar button {
  min-width: 44px;
  min-height: 44px;
  padding: 10px;
  margin: 4px;
}`;
      else if (/forced colors/.test(title)) query = `@media (forced-colors: active) {
  button { border: 1px solid ButtonText; }
  :focus-visible { outline: 2px solid Highlight; }
}`;
      else if (/state.*color|color.*state/.test(title)) query = `<p class="status status-error">
  <span aria-hidden="true">⚠</span>
  <strong>Error:</strong> Email address needs checking.
</p>`;
      else if (/contrast/.test(title)) query = `/* Contrast is a design choice; verify the final colors with a checker. */
:root {
  --text: #173326;
  --surface: #ffffff;
}
body { color: var(--text); background: var(--surface); }`;
      else if (/fieldset/.test(title)) query = `<fieldset>
  <legend>ပို့ဆောင်နည်းကို ရွေးပါ</legend>
  <label><input type="radio" name="delivery" value="standard"> ပုံမှန်</label>
  <label><input type="radio" name="delivery" value="express"> အမြန်</label>
</fieldset>`;
      else if (/live region|error/.test(title)) query = `<label for="email">အီးမေးလ်</label>
<input id="email" aria-describedby="email-error">
<p id="email-error" role="status">အီးမေးလ်ပုံစံကို စစ်ဆေးပါ</p>`;
      else if (/table/.test(title)) query = `<table>
  <caption>လစဉ်အော်ဒါ အရေအတွက်</caption>
  <thead><tr><th scope="col">လ</th><th scope="col">အော်ဒါ</th></tr></thead>
  <tbody><tr><th scope="row">ဇန်နဝါရီ</th><td>24</td></tr></tbody>
</table>`;
      else if (/language/.test(title)) query = `<html lang="my">
  <body>မြန်မာစာ <span lang="en">Web Development</span></body>
</html>`;
      else if (/lazy load|responsive image/.test(title)) query = `<img
  src="lesson-640.webp"
  srcset="lesson-640.webp 640w, lesson-1280.webp 1280w"
  sizes="(max-width: 700px) 100vw, 700px"
  alt="သင်ခန်းစာနမူနာပုံ"
  loading="lazy">`;
      else query = `<!-- Use native HTML first; measure before optimizing. -->
<button type="button">သင်ခန်းစာကို စတင်ပါ</button>
<p>Load: <time>တိုင်းတာပြီးမှ ပြင်ဆင်ပါ</time></p>`;
      return { language: 'HTML · CSS · Performance', code: query, note: 'ဒီ snippet က စတင်လေ့လာဖို့ ဥပမာပါ။ တူညီတဲ့အခြေအနေမှာ performance ကိုတိုင်းပြီး keyboard နဲ့ screen reader အသုံးပြုနိုင်မှုကိုပါ စစ်ပါ။' };
    }

    return { language: 'Code', code: '// Read the lesson, change one value, then compare the result.', note: 'ဥပမာကို သက်ဆိုင်ရာ project environment မှာ စမ်းပါ။' };
  }

  function explanationFor(group, lesson) {
    var notes = {
      python: 'Python သည် whitespace အရေးပါသောဘာသာစကားဖြစ်လို့ indentation ကိုတစ်သမတ်တည်းထားပါ။ Input၊ data type၊ function နဲ့ error handling ကိုခွဲကြည့်ပြီး လက်တွေ့ code ကိုအသေးစားအဆင့်များဖြင့် run ပါ။',
      typescript: 'TypeScript သည် compile လုပ်ချိန်မှာ type ကိုစစ်ပေးသော်လည်း user/API မှဝင်လာသော data ကို runtime မှာလည်း validate လုပ်ရပါမယ်။ strict mode ဖွင့်ထားပြီး error ကိုဖတ်ကာ type ကိုတိတိကျကျ ပြင်ဆင်ပါ။',
      mysql: 'Query ကို run မလုပ်ခင် ဘယ် table နဲ့ row တွေကို ထိခိုက်မလဲ၊ ဘယ်ရလဒ်မျှော်လင့်လဲ သတ်မှတ်ပါ။ ဖျက်ခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်းပါဝင်တဲ့ query ကို sample database မှာအရင်စမ်းပါ။',
      laravel: 'Request ဝင်လာတဲ့ route၊ validation/permission စစ်တဲ့နေရာနဲ့ response ပြန်ပို့တဲ့နေရာကို လိုက်ဖတ်ပါ။ Secret နဲ့ production config ကို ဥပမာ code ထဲမထည့်ပါနဲ့။',
      api: 'Method၊ path၊ header၊ body နဲ့ status code တွေကို request/response သဘောတူညီချက်အဖြစ် ဖတ်ပါ။ Preview က တကယ့် server မဟုတ်ဘဲ sample API simulation ဖြစ်တာကို သတိပြုပါ။',
      react: 'Component input၊ state ပြောင်းလဲမှုနဲ့ render ရလဒ်ကို သီးခြားစောင့်ကြည့်ပါ။ State တစ်ခုကို ပြောင်းပြီး preview ကိုပြန် run ပါ။',
      dart: 'Type၊ nullable value နဲ့ function ရဲ့ input/output ကို စစ်ပါ။ Browser preview က Dart compiler မဟုတ်တဲ့အတွက် DartPad သို့မဟုတ် local project မှာ run ပါ။',
      flutter: 'Widget tree၊ state နဲ့ lifecycle တို့က ဘယ်အပိုင်းကို သက်ရောက်သလဲ လိုက်ကြည့်ပါ။ Flutter project ကို emulator သို့မဟုတ် ဖုန်းပေါ်မှာ စမ်းပါ။',
      security: 'ဒီဥပမာက လုံခြုံရေးကာကွယ်ပုံကို ပြထားပါတယ်။ Framework ရဲ့ security API နဲ့ configuration ကို စစ်ပြီးမှ ကိုယ့် project မှာအသုံးပြုပါ။',
      deploy: 'Build artifact၊ runtime configuration နှင့် deployment target ကို သီးခြားစဉ်းစားပါ။ အရင် staging မှာ စမ်းပြီးမှ production သို့တင်ပါ။',
      ci: 'Workflow ကို least privilege ဖြင့်စတင်ပြီး job တစ်ခုချင်း၏ input/output နှင့် secret access ကိုစစ်ပါ။ PR မှလာသော code ကို deploy secret မပေးပါနှင့်။',
      quality: 'ပြင်ဆင်မှုမစမီ baseline တိုင်းပါ။ Performance ကိုတူညီသောအခြေအနေတွင်ပြန်တိုင်းပြီး accessibility ကို keyboard နှင့် screen reader ဖြင့်စစ်ပါ။'
    };
    var lessonNote = lesson
      ? 'ဒီသင်ခန်းစာမှာ ' + lesson[1] + ' ကို လေ့လာပါမယ်။ ပြီးရင် code ဥပမာထဲက input၊ လုပ်ဆောင်ချက်နဲ့ ရလဒ်တို့ ဘယ်လိုဆက်စပ်နေသလဲ လိုက်ဖတ်ပါ။ လက်တွေ့အပိုင်းမှာ တန်ဖိုးတစ်ခုကို ပြောင်းစမ်းပြီး မျှော်မှန်းထားတဲ့ရလဒ်နဲ့ နှိုင်းယှဉ်ပါ။'
      : '';
    return [lessonNote, notes[group] || ''].filter(Boolean).join(' ');
  }

  function appendText(parent, tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    parent.appendChild(node);
    return node;
  }

  function codeExampleFor(group, lesson) {
    var sample = sampleFor(group, lesson);
    var box = document.createElement('div');
    box.className = 'example';
    box.dataset.language = sample.language;

    var head = document.createElement('div');
    head.className = 'ex-head';
    appendText(head, 'span', '', 'ဥပမာ — ' + lesson[0]);
    appendText(head, 'span', 'spacer', '');
    var copy = appendText(head, 'button', 'mini-btn', 'Copy');
    copy.type = 'button';
    copy.setAttribute('data-copy', '');
    box.appendChild(head);

    var editor = document.createElement('textarea');
    editor.className = 'code-edit';
    editor.rows = 12;
    editor.spellcheck = false;
    editor.setAttribute('aria-label', 'Code example for ' + lesson[0]);
    editor.value = sample.code;
    box.appendChild(editor);

    var actions = document.createElement('div');
    actions.className = 'ex-actions';
    var run = appendText(actions, 'button', 'run-btn', 'Run');
    run.type = 'button';
    appendText(actions, 'span', 'hint', sample.note);
    box.appendChild(actions);

    var preview = document.createElement('div');
    preview.className = 'preview-wrap';
    appendText(preview, 'div', 'pv-label', 'EXAMPLE PREVIEW');
    var frame = document.createElement('iframe');
    frame.className = 'preview';
    frame.title = 'Code example preview: ' + lesson[0];
    frame.setAttribute('sandbox', 'allow-scripts');
    preview.appendChild(frame);
    box.appendChild(preview);
    return box;
  }

  function readingPoints(group) {
    var points = {
      python: ['Variable တစ်ခုချင်းစီရဲ့ type နဲ့တန်ဖိုးကို စစ်ပါ။', 'Function ရဲ့ input၊ return value နဲ့ side effect ကိုခွဲဖတ်ပါ။', 'ပုံမှန် input နဲ့ မှားယွင်းတဲ့ input နှစ်မျိုးစမ်းပြီး traceback ကိုဖတ်ပါ။'],
      typescript: ['TypeScript က ခန့်မှန်းပေးတဲ့ type နဲ့ ကိုယ်တိုင်ကြေညာထားတဲ့ type ကိုနှိုင်းပါ။', 'Union သို့မဟုတ် nullable value ကိုအသုံးမပြုမီ narrowing/guard လုပ်ထားသလားစစ်ပါ။', 'Compile-time စစ်ဆေးမှုအပြင် runtime input validation ပါရှိသလားစစ်ပါ။'],
      mysql: ['FROM က ဘယ် table ကိုအသုံးပြုသလဲ ရှာပါ။', 'WHERE၊ JOIN သို့မဟုတ် constraint က ဘယ် data ကိုကန့်သတ်သလဲ ခွဲဖတ်ပါ။', 'Query ရလဒ်ကို မျှော်မှန်းထားတဲ့ row တွေနဲ့ နှိုင်းယှဉ်ပါ။'],
      laravel: ['Request က ဘယ် route သို့မဟုတ် method ထဲဝင်လာသလဲ ရှာပါ။', 'Validation၊ permission နဲ့ database ပြောင်းလဲမှု ဘယ်နေရာမှာရှိသလဲ ခွဲပါ။', 'Response နဲ့ အမှားအခြေအနေကို စမ်းသပ်ပါ။'],
      api: ['HTTP method၊ URL path နဲ့ header တွေကို အရင်ဖတ်ပါ။', 'Request body နဲ့ response status/body ကို နှိုင်းယှဉ်ပါ။', 'မမှန်တဲ့ input သို့မဟုတ် ထပ်ပို့တဲ့ request ကိုပါ စမ်းပါ။'],
      react: ['Component props နဲ့ state ကို ခွဲသတ်မှတ်ပါ။', 'Event handler က ဘယ် state ကိုပြောင်းသလဲ လိုက်ကြည့်ပါ။', 'Preview မှာ ပုံမှန်နဲ့ မမျှော်လင့်ထားတဲ့ state တွေကို စစ်ပါ။'],
      dart: ['Variable type၊ nullable value နဲ့ function input/output ကိုစစ်ပါ။', 'အဓိကလုပ်ဆောင်ချက်ရဲ့ input နဲ့ output ကို ခွဲဖတ်ပါ။', 'DartPad သို့မဟုတ် local project မှာ run ပြီး ရလဒ်ကိုအတည်ပြုပါ။'],
      flutter: ['Widget tree ထဲတွင် state ပိုင်ဆိုင်သူကိုရှာပါ။', 'Controller/resource တစ်ခုရှိပါက lifecycle ကိုလိုက်ပါ။', 'Hot reload လုပ်ပြီး screen နှင့် error state နှစ်မျိုးလုံးစမ်းပါ။'],
      security: ['ကာကွယ်ရမည့် data နှင့် trust boundary ကိုအရင်သတ်မှတ်ပါ။', 'Input ကိုဘယ်လို validate/encode/authorize လုပ်သလဲ စစ်ပါ။', 'Allow case နှင့် deny case နှစ်မျိုးလုံးကို စမ်းသပ်ပါ။'],
      deploy: ['Build ထွက်လာတဲ့ဖိုင်နဲ့ runtime config ကို သီးခြားစစ်ပါ။', 'Domain၊ storage၊ database နဲ့ rollback လိုအပ်ချက်တွေကိုစစ်ပါ။', 'Staging မှာ အခြေခံစစ်ဆေးမှုအောင်မှ production ကိုတင်ပါ။'],
      ci: ['Workflow ဘယ်အချိန်စမလဲနဲ့ ဘယ် runner သုံးမလဲ သတ်မှတ်ပါ။', 'Job permission၊ secret အသုံးပြုခွင့်နဲ့ artifact dependency ကိုစစ်ပါ။', 'PR၊ failure နဲ့ release အခြေအနေတွေကို သီးခြား run ပါ။'],
      quality: ['မပြင်ခင် baseline metric သို့မဟုတ် accessibility ပြဿနာကိုမှတ်ပါ။', 'တစ်ကြိမ်မှာ ပြောင်းလဲမှုတစ်ခုလုပ်ပြီး ရလဒ်ကိုတိုင်းပါ။', 'Keyboard၊ zoom၊ screen reader နဲ့ device အမျိုးမျိုးမှာ ပြန်စစ်ပါ။']
    };
    return points[group] || [];
  }

  function lessonSteps(group) {
    var steps = {
      python: ['Code ကို Python 3 interpreter သို့မဟုတ် virtual environment ထဲမှာ run ပါ။', 'Input၊ variable သို့မဟုတ် function တစ်ခုကို ပြောင်းပြီး output ကိုနှိုင်းပါ။', 'မမှန်တဲ့ input နဲ့ edge case ကိုစမ်းပြီး error ကိုကိုယ်တိုင်ရှင်းပြပါ။'],
      typescript: ['Snippet ကို strict mode ဖွင့်ထားတဲ့ TypeScript project ထဲမှာထားပါ။', 'Type ကိုတစ်ခု ပြောင်းပြီး compiler ပြတဲ့ error ကိုဖတ်ကာပြင်ပါ။', 'Valid နဲ့ invalid runtime data နှစ်မျိုးစမ်းပြီး type guard/validation ကိုစစ်ပါ။'],
      mysql: ['Code ကို sample database မှာ run လုပ်ပါ။', 'Table သို့မဟုတ် filter တန်ဖိုးတစ်ခုကို ပြောင်းပြီးပြန် run ပါ။', 'ထိခိုက်မသင့်တဲ့ row တွေ မပြောင်းသွားကြောင်းစစ်ပါ။'],
      laravel: ['Snippet ကို သက်ဆိုင်ရာ route သို့မဟုတ် service ထဲထည့်ပါ။', 'Local environment မှာ command သို့မဟုတ် request နဲ့စမ်းပါ။', 'အောင်မြင်မှု၊ validation error နဲ့ ခွင့်မရှိတဲ့ user အခြေအနေကို စစ်ပါ။'],
      api: ['Request method/path/header များကို စစ်ပြီး Run လုပ်ပါ။', 'Body တစ်ခု သို့မဟုတ် header တစ်ခုကိုပြောင်းပါ။', 'Status code နှင့် response body မျှော်မှန်းချက်နှင့်ကိုက်မကိုက်စစ်ပါ။'],
      react: ['Preview ကိုဖွင့်ပြီး UI ရလဒ်ကိုကြည့်ပါ။', 'State၊ prop သို့မဟုတ် input တစ်ခုကိုပြောင်းပါ။', 'Empty/error အခြေအနေပါ ထည့်ပြီး component အလုပ်လုပ်ပုံကို စစ်ပါ။'],
      dart: ['Code ကို DartPad သို့မဟုတ် project ထဲကူးပါ။', 'Run လုပ်ပြီး ပထမ output ကိုမှတ်ပါ။', 'Value တစ်ခုပြောင်းကာ type/error behavior ကိုစမ်းပါ။'],
      flutter: ['Snippet ကိုသက်ဆိုင်ရာ widget/state ထဲထည့်ပါ။', 'Emulator သို့မဟုတ် ဖုန်းပေါ်တွင် run/hot reload လုပ်ပါ။', 'Loading, error နှင့် route ပိတ်ချိန် lifecycle ကိုပါစစ်ပါ။'],
      security: ['Protected asset နှင့် attacker-controlled input ကိုခွဲပါ။', 'သတ်မှတ်ထားသော defensive control ကိုအကောင်အထည်ဖော်ပါ။', 'မမှန်သော input နှင့် ခွင့်မရှိသော user ကို deny လုပ်ကြောင်းစမ်းပါ။'],
      deploy: ['Snippet ကို staging config တွင်စတင်အသုံးပြုပါ။', 'Build နှင့် health check ကို Run လုပ်ပါ။', 'Rollback plan အလုပ်လုပ်ကြောင်း စမ်းပြီးမှ production ကိုစဉ်းစားပါ။'],
      ci: ['Workflow ကို branch သို့မဟုတ် PR ပေါ်တွင်စမ်းပါ။', 'Failure တစ်ခုကိုရည်ရွယ်ချက်ရှိရှိဖြစ်စေပြီး job dependency စစ်ပါ။', 'Secret မလိုသော job နှင့် deployment job permission ကိုခွဲပါ။'],
      quality: ['Baseline ကိုမှတ်တမ်းတင်ပါ။', 'တစ်ချက်ပြင်ပြီး တူညီသော viewport/device ဖြင့်ပြန်တိုင်းပါ။', 'Performance အပြင် keyboard နှင့် accessibility behavior ကိုစစ်ပါ။']
    };
    return steps[group] || [];
  }

  curriculum.forEach(function (course) {
    var pages = main.querySelectorAll('.page[data-group="' + course.group + '"]');
    var anchor = pages[pages.length - 1];
    if (!anchor && (course.group === 'python' || course.group === 'typescript')) {
      anchor = document.createElement('article');
      anchor.className = 'page';
      anchor.id = 'page-' + course.group + '-intro';
      anchor.dataset.group = course.group;
      anchor.dataset.title = course.group === 'python' ? 'Python စတင်လေ့လာရန်' : 'TypeScript စတင်လေ့လာရန်';
      appendText(anchor, 'p', 'eyebrow', 'LEARN WITH ME · ' + course.group.toUpperCase());
      appendText(anchor, 'h1', '', anchor.dataset.title);
      appendText(anchor, 'p', 'lede', course.group === 'python'
        ? 'Python ကို အခြေခံ syntax မှစပြီး data structure၊ function၊ file၊ testing နဲ့ asynchronous programming အထိ အဆင့်လိုက်လေ့လာပါ။'
        : 'TypeScript ကို setup နဲ့ type အခြေခံမှစပြီး function၊ generics၊ async code၊ runtime validation နဲ့ production tooling အထိ အဆင့်လိုက်လေ့လာပါ။');
      appendText(anchor, 'p', '', 'အောက်ပါ Basic Level လမ်းညွှန်အတိုင်း စတင်ပြီးနောက် lesson 120 ခုကို အစဉ်လိုက်ဆက်လေ့လာနိုင်ပါတယ်။');
      main.appendChild(anchor);
    }
    if (!anchor) return;

    var fragment = document.createDocumentFragment();
    course.lessons.forEach(function (lesson, index) {
      var page = document.createElement('article');
      page.className = 'page';
      page.id = 'page-extra-' + course.group + '-' + String(index + 1).padStart(2, '0');
      page.dataset.group = course.group;
      page.dataset.title = lesson[0];

      var progress = document.createElement('div');
      progress.className = 'progress-line';
      progress.innerHTML = '<div></div>';
      page.appendChild(progress);

      var title = document.createElement('h1');
      title.textContent = lesson[0];
      page.appendChild(title);

      var introduction = document.createElement('p');
      introduction.className = 'lede';
      introduction.textContent = lesson[1];
      page.appendChild(introduction);

      appendText(page, 'h2', '', 'အယူအဆကို အသေးစိတ်နားလည်ပါ');
      appendText(page, 'p', '', explanationFor(course.group, lesson));

      appendText(page, 'h2', '', 'Step by step လေ့လာပါ');
      var steps = document.createElement('ol');
      lessonSteps(course.group).forEach(function (text) {
        var item = document.createElement('li');
        item.textContent = text;
        steps.appendChild(item);
      });
      page.appendChild(steps);

      appendText(page, 'h2', '', 'Code ဥပမာ');
      page.appendChild(codeExampleFor(course.group, lesson));

      appendText(page, 'h2', '', 'Code ကိုဖတ်ရှုရာတွင် စစ်ဆေးရန်');
      var points = document.createElement('ul');
      readingPoints(course.group).forEach(function (text) {
        var item = document.createElement('li');
        item.textContent = text;
        points.appendChild(item);
      });
      page.appendChild(points);

      var caution = document.createElement('div');
      caution.className = 'note';
      appendText(caution, 'strong', '', 'မှတ်ချက်');
      appendText(caution, 'span', '', sampleFor(course.group, lesson).note);
      page.appendChild(caution);

      var practiceHeading = document.createElement('h2');
      practiceHeading.textContent = 'လက်တွေ့လုပ်ဆောင်ရန်';
      page.appendChild(practiceHeading);

      var practice = document.createElement('div');
      practice.className = 'tip';
      var practiceText = document.createElement('p');
      practiceText.textContent = lesson[2];
      practice.appendChild(practiceText);
      page.appendChild(practice);

      var checkHeading = document.createElement('h2');
      checkHeading.textContent = 'ပြီးမြောက်ရန် စစ်ဆေးပါ';
      page.appendChild(checkHeading);

      var checklist = document.createElement('ul');
      checklist.className = 'checklist';
      ['အဓိကအယူအဆကို ကိုယ့်စကားဖြင့် ရှင်းပြနိုင်သည်', 'ပေးထားသော လက်တွေ့လုပ်ဆောင်ချက်ကို ပြီးမြောက်အောင် စမ်းသပ်ထားသည်', 'အမှားဖြစ်နိုင်သည့်အခြေအနေနှင့် ဖြေရှင်းပုံကို မှတ်သားထားသည်'].forEach(function (text) {
        var item = document.createElement('li');
        item.textContent = text;
        checklist.appendChild(item);
      });
      page.appendChild(checklist);
      fragment.appendChild(page);
    });

    if (course.group === 'python' || course.group === 'typescript') {
      var courseIndex = document.createElement('section');
      courseIndex.className = 'language-course-index';
      appendText(courseIndex, 'h2', '', 'သင်ခန်းစာ ' + course.lessons.length + ' ခု — အဆင့်လိုက်ရွေးချယ်ပါ');
      appendText(courseIndex, 'p', '', 'Module တစ်ခုချင်းကိုဖွင့်ပြီး လေ့လာလိုသည့်ခေါင်းစဉ်ကိုနှိပ်ပါ။');
      var currentUnit = -1;
      var unitList = null;
      course.lessons.forEach(function (lesson, index) {
        var meta = lesson[3];
        if (meta.unitIndex !== currentUnit) {
          currentUnit = meta.unitIndex;
          var details = document.createElement('details');
          details.className = 'course-index-unit';
          if (currentUnit === 0) details.open = true;
          appendText(details, 'summary', '', String(currentUnit + 1).padStart(2, '0') + '. ' + meta.unit.title);
          unitList = document.createElement('ol');
          details.appendChild(unitList);
          courseIndex.appendChild(details);
        }
        var item = document.createElement('li');
        var button = appendText(item, 'button', 'course-index-link', lesson[0]);
        button.type = 'button';
        button.dataset.targetPage = 'page-extra-' + course.group + '-' + String(index + 1).padStart(2, '0');
        unitList.appendChild(item);
      });
      anchor.appendChild(courseIndex);
    }

    anchor.after(fragment);
  });
})();
