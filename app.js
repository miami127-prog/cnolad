/* 크놀AD app.js */
const YT_API_KEY="AIzaSyDuLm7vkfA8ry3TmMdWoRcbh-p6hjRUKDQ";
const SUPA_URL="https://trkxmbtdcjcgoohdqpsz.supabase.co";
const SUPA_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRya3htYnRkY2pjZ29vaGRxcHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0Mzc0NjUsImV4cCI6MjA5NTAxMzQ2NX0.PH6G9bxocAJweZZg5r6zHAzJxt7Uv4yUbLHT515a83k";
const SH={apikey:SUPA_KEY,Authorization:"Bearer "+SUPA_KEY};
const CH=[
{id:"UCKS2r_4ncQKExyzQ0dvQE_A",name:"셀럽온",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"셀럽온",yt:17900,views:167010779,vids:411,ig:"398",tt:"285",prod:80,pub:35,featured:true},
{id:"UCq8JGyXj44NUed2rJ6DD_1Q",name:"찐예쁨",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"예뻐지고싶니",yt:13800,views:44280639,vids:327,ig:"892",tt:"1,567",prod:70,pub:30},
{id:"UCGqxMPGA56vREDntiTsMSHA",name:"미모지상주의",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"예뻐지고싶으면구독",yt:67100,views:63094802,vids:318,ig:"79",tt:"2,697",prod:70,pub:30},
{id:"UC5nb00jMo_erdMx03C4VVNg",name:"쇼잉",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"구독은너무좋아요",yt:381000,views:1774546338,vids:1559,ig:"6,967",tt:"886",prod:75,pub:30},
{id:"UCC08gcNmPTgAafZLc1s8ixw",name:"쇼숏",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"구독은행운입니다",yt:354000,views:1501320933,vids:1888,ig:"9,670",tt:"5,186",prod:75,pub:30},
{id:"UC5JiEeJKIVPwQl3xEA0nAyg",name:"슛됐다",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"구독은필수인거알지",yt:263000,views:1375344512,vids:2139,ig:"7,484",tt:null,prod:65,pub:30},
{id:"UCsYawrVV5k_AbW3o0GXbHGg",name:"밈튜브",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"mimtube777",yt:252000,views:734492589,vids:1234,ig:"2,426",tt:"1,724",prod:65,pub:30},
{id:"UCDsjR0rrz38EKkbZ-cRbmxA",name:"숏스커버리",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"숏스커버리",yt:213000,views:579225541,vids:1208,ig:"1,991",tt:null,prod:65,pub:30},
{id:"UC4MTOz8ZeRjT4ksmRA7Q_4Q",name:"유니랜드",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"유니랜드",yt:171000,views:782187166,vids:1297,ig:"4,274",tt:"290",prod:65,pub:30},
{id:"UCzGJpUxFgrewsIptjREZpQw",name:"신기+템",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"이뻐지고싶으면구독",yt:163000,views:660690675,vids:1245,ig:"1,700",tt:"13.1만",prod:65,pub:30},
{id:"UC1vPJZq6kVxeegVvyLCZC_w",name:"숏믈리에",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"숏믈리에",yt:61400,views:630351462,vids:599,ig:"1,210",tt:null,prod:65,pub:30},
{id:"UCuUB3my9E25DU64SQr9d8Hg",name:"디어랩",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"구독하면행운입니다",yt:40300,views:119308498,vids:250,ig:"1",tt:null,prod:65,pub:30},
{id:"UCTkydXC8Sypb470IiG7ClOw",name:"숏픽",read:null,region:"KR",plat:["YouTube","Instagram","TikTok"],handle:"구독을해야지",yt:39500,views:235396123,vids:535,ig:"236",tt:"88",prod:65,pub:30},
{id:"UCTR62nKhNEYAdiis1uXVB2g",name:"두근두근",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"두근두근좋아요",yt:24700,views:169008713,vids:344,ig:"1,035",tt:null,prod:65,pub:30},
{id:"UC_bImrFbEwJ69242sFwgxdA",name:"전국댓글자랑",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"전국댓글자랑",yt:33300,views:247060617,vids:430,ig:"517",tt:null,prod:65,pub:30},
{id:"UCdOaqkwqLinP6bCxdgwXfow",name:"숏플래시",read:null,region:"KR",plat:["YouTube"],handle:"구독짱좋아요",yt:48500,views:383542821,vids:405,ig:null,tt:null,prod:65,pub:30},
{id:"UCm7P9kGI_7Icwlva9sIpxCA",name:"출석체크",read:null,region:"KR",plat:["YouTube","Instagram"],handle:"쌤몰래보는채널",yt:18200,views:152873023,vids:198,ig:null,tt:null,prod:65,pub:30},
{id:"UCwVVW0KKd3USzwI537ActQg",name:"한편만",read:null,region:"KR",plat:["YouTube"],handle:"funnyrtzz",yt:19000,views:10718054,vids:83,ig:null,tt:null,prod:65,pub:30},
{id:"UCiNwcnMDShpDb-aDHswUWIw",name:"ワクワク",read:"와쿠와쿠",region:"JP",plat:["YouTube","Instagram"],handle:"フォローわくわく",yt:208000,views:1088412091,vids:1099,ig:"9,121",tt:null,prod:65,pub:30},
{id:"UCwGf0f1Cr4GMR7cTqZWWQMA",name:"スポログ",read:"스포로그",region:"JP",plat:["YouTube","Instagram"],handle:"スポログ",yt:91100,views:718414098,vids:1109,ig:"1만",tt:null,prod:65,pub:30},
{id:"UCWzrd_Lg59D5plQill_pxLw",name:"笑撃の一秒",read:"웃음의 1초",region:"JP",plat:["YouTube"],handle:"笑撃の一秒",yt:66800,views:498127180,vids:613,ig:null,tt:null,prod:65,pub:30},
{id:"UCMYYP_OHhlgCyiM4haqMl7w",name:"おもしろ塾",read:"재미학원",region:"JP",plat:["YouTube"],handle:"おもしろ塾",yt:16700,views:67555799,vids:206,ig:null,tt:null,prod:65,pub:30},
{id:"UCIdWSLcWlW5dCFGhUztBg5w",name:"一瞬劇場",read:"순간극장",region:"JP",plat:["YouTube"],handle:"一瞬劇場",yt:14300,views:125115643,vids:268,ig:null,tt:null,prod:65,pub:30},
{id:"UCbezaxqU2mDufjmFxbTgF9w",name:"絆タイム",read:"인연의 시간",region:"JP",plat:["YouTube"],handle:"絆タイム",yt:17200,views:162043713,vids:331,ig:null,tt:null,prod:65,pub:30},
{id:"UCcmWbfOez2uSHFvn7Ml7QFA",name:"チーズケーキ",read:"치즈케이크",region:"JP",plat:["YouTube"],handle:"チーズケーキ777",yt:5230,views:45343965,vids:205,ig:null,tt:null,prod:65,pub:30},
{id:"UCYmMeHSKuvQjcIvQR-NGtBg",name:"オイシイワールド",read:"맛있는 세계",region:"JP",plat:["YouTube"],handle:"オイシイワールド",yt:5810,views:31918180,vids:131,ig:null,tt:null,prod:65,pub:30},
{id:"UCcvwI1XlOWS3EwXb8j5-Zsw",name:"モグモグ",read:"모구모구",region:"JP",plat:["YouTube"],handle:"MoguMogu_Ham",yt:13400,views:83550280,vids:273,ig:null,tt:null,prod:65,pub:30},
{id:"UCQ4hIx2_4vYFbt7CN23E4ig",name:"トレ韓",read:"토레칸",region:"JP",plat:["YouTube","Instagram"],handle:"トレ韓",yt:46700,views:544168696,vids:590,ig:"1,799",tt:null,prod:65,pub:30},
{id:"UCtfDMssguy3mUW0TUk_Uvyg",name:"沼落ちKPOP",read:"누마오치 KPOP",region:"JP",plat:["YouTube"],handle:"沼落ちKPOP",yt:92,views:580510,vids:16,ig:null,tt:null,prod:65,pub:30},
{id:"UCDJikeprAhIMW7uKPzZnUdw",name:"スゴっ",read:"스고",region:"JP",plat:["YouTube"],handle:"スゴっ",yt:31300,views:248584654,vids:495,ig:null,tt:null,prod:65,pub:30},
{id:"UC38D9AsPEhJ3OdLz1OBsA5g",name:"一瞬で神",read:"한순간에 神",region:"JP",plat:["YouTube"],handle:"一瞬で神",yt:933,views:4574681,vids:28,ig:null,tt:null,prod:65,pub:30},
{id:"UC3B1yQWf-Gdgqoqrl53ZWVg",name:"チラ見シネマ",read:"살짝보기 시네마",region:"JP",plat:["YouTube"],handle:"gekire_cinema",yt:8050,views:44667956,vids:95,ig:null,tt:null,prod:65,pub:30},
{id:"UCBfwnliZeZfOc2OuVtTpMnQ",name:"楽しい1分",read:"즐거운 1분",region:"JP",plat:["YouTube"],handle:"Ipuun_Tanoshii",yt:29,views:15728,vids:12,ig:null,tt:null,prod:65,pub:30},
{id:"UCDAGHDuQpchWqaJztqYSR0A",name:"ぼっち映画",read:"혼자 영화",region:"JP",plat:["YouTube"],handle:"botchieiga_movie",yt:1940,views:7094638,vids:34,ig:null,tt:null,prod:65,pub:30},
{id:"UCKk4ZPziethv4gE1hfype_A",name:"エグエグ",read:"에구에구",region:"JP",plat:["YouTube"],handle:"登録しろサムライたち",yt:5250,views:19556046,vids:45,ig:null,tt:null,prod:65,pub:30},
{id:"UCUlzj-b_X9MSDIyGjUN52tQ",name:"切りぬクッキー",read:"키리누 쿠키",region:"JP",plat:["YouTube"],handle:"切りぬクッキー",yt:67,views:360666,vids:21,ig:null,tt:null,prod:65,pub:30,isNew:true},
{id:"UCi3q_5ZCXzdIPc2ZCjZPAtA",name:"そんなバナナ",read:"그런 바나나",region:"JP",plat:["YouTube"],handle:"そんなバナナ-x2r",yt:40,views:271460,vids:21,ig:null,tt:null,prod:65,pub:30,isNew:true},
{id:"UC-xgOG-CsVXlt7dth87uHbg",name:"PopFlow",read:null,region:"US",plat:["YouTube"],handle:"K-PopFlow",yt:7790,views:32637007,vids:116,ig:null,tt:null,prod:65,pub:30},
{id:"UCyfYBtZkh5anII0AUn2ehww",name:"KPOPVERSE",read:null,region:"US",plat:["YouTube"],handle:"K-popverse_k",yt:3410,views:24419729,vids:87,ig:null,tt:null,prod:65,pub:30}];
const REGION_LABEL={KR:"국내",JP:"일본",US:"미국"};
const STATUS_STYLE={"검토 대기중":"text-amber-700 bg-amber-50","승인 완료":"text-emerald-700 bg-emerald-50","반려":"text-red-700 bg-red-50","수정 요청":"text-orange-700 bg-orange-50","진행중":"text-blue bg-blue-tint","업로드 완료":"text-teal-700 bg-teal-50","리포트 완료":"text-cyan-700 bg-cyan-50","종료":"text-g600 bg-g100","결제 대기중":"text-amber-700 bg-amber-50","결제 완료":"text-emerald-700 bg-emerald-50","입금 확인중":"text-blue bg-blue-tint"};
const PLATFORM_STYLE={YouTube:"text-red-500 bg-red-50",Instagram:"text-pink-500 bg-pink-50",TikTok:"text-g800 bg-g100"};
const LEGAL={
terms:{t:"이용약관",b:`제1조 (목적)\n본 약관은 에이치알컴퍼니(주)(이하 '회사')가 운영하는 크놀AD 서비스의 이용 조건 및 절차를 규정합니다.\n\n제2조 (서비스)\n회사는 자체 보유 숏폼 채널을 통한 콘텐츠 광고의 기획·제작·발행·집행·리포트 서비스를 제공합니다.\n\n제3조 (신청 및 승인)\n캠페인 신청은 내부 검토 및 승인 후 진행되며, 회사는 적합성·일정 등을 고려해 승인을 거부·보류할 수 있습니다.\n\n제4조 (대금 및 수정)\n단가는 채널별로 상이하며 VAT 별도입니다. 콘티·영상 수정은 각 2회 무상, 3회차부터 추가요금이 발생합니다.\n\n제5조 (책임의 한계)\n외부 플랫폼 정책 변경 등 불가항력적 사유로 인한 결과에 대하여는 책임이 제한될 수 있습니다.\n\n제6조 (계정)\n승인 완료 시 입력하신 이메일을 아이디로 계정이 생성되며, 계정 관리 책임은 고객에게 있습니다.`},
privacy:{t:"개인정보 수집 및 이용 동의",b:`회사는 「개인정보 보호법」을 준수하며 아래와 같이 개인정보를 수집·이용합니다.\n\n1. 수집 항목(필수)\n· 담당자명, 이메일, 연락처, 브랜드/회사명\n· 캠페인 신청 내용(제품 링크·소재·희망 채널·컨셉·요청사항)\n\n2. 자동 수집 정보\n· 접속 IP, 브라우저·기기 정보\n· 이용 기록(접속 로그, 폼 제출·클릭 등 이벤트 로그)\n· 쿠키 및 로컬 저장소\n\n3. 이용 목적\n· 신청 검토·승인, 계정(아이디·비밀번호) 생성 및 안내\n· 캠페인 진행·정산·고객 응대, 서비스 개선 및 통계\n\n4. 보유 기간\n· 목적 달성 또는 회원 탈퇴 시까지(관계 법령에 따라 일정 기간 보관 가능).\n\n5. 동의 거부 시\n· 필수 항목 미동의 시 캠페인 신청이 제한됩니다.\n\n문의: 에이치알컴퍼니(주) (사업자등록번호 577-86-02157)`},
cookie:{t:"쿠키정책",b:`크놀AD는 원활한 서비스 제공을 위해 쿠키 및 로컬 저장소를 사용합니다.\n\n1. 사용 목적\n· 로그인 상태 유지 및 세션 관리\n· 이용 통계 및 성능 개선, 사용자 설정 저장\n\n2. 거부 방법\n· 브라우저 설정에서 쿠키를 거부·삭제할 수 있으나, 로그인 유지 등 일부 기능이 제한될 수 있습니다.`}};

const fmtSub=n=>n>=1e8?(n/1e8).toFixed(1)+"억":n>=1e4?(n/1e4).toFixed(n>=1e5?1:2)+"만":n.toLocaleString("ko-KR");
const fmtView=n=>n>=1e8?(n/1e8).toFixed(n>=1e9?1:2)+"억":n>=1e4?Math.round(n/1e4).toLocaleString("ko-KR")+"만":n.toLocaleString("ko-KR");
const wonM=n=>"₩"+n.toLocaleString("ko-KR")+"만";
const esc=s=>(s==null?"":String(s)).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const avgView=c=>c.vids?Math.round(c.views/c.vids):0;

let S={view:"home",role:null,form:{},_submitted:null,_cameFrom:"apply",cust:null,wf:{step:1,edit:null},myCamps:[],activeCamp:null,notify:null,members:[]};
let SEL=new Set(),PROD={},_region="전체",_search="",ADM_ROWS=[],CRED_MSG="";

const CARD="bg-white rounded-[28px] shadow-card";
const INPUT="w-full px-5 py-4 rounded-[20px] text-[17px] bg-g100 border border-transparent text-g900 placeholder:text-g500 focus:outline-none focus:bg-white focus:border-blue/30 shadow-[inset_0_1px_2px_rgba(17,24,39,0.05)] focus:shadow-[0_0_0_4px_rgba(49,130,246,0.13)] transition-all";
const BTN="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[20px] bg-gradient-to-b from-blue to-blue-dark text-white font-bold text-[17px] shadow-[0_8px_20px_rgba(49,130,246,0.33),inset_0_1px_0_rgba(255,255,255,0.3)] hover:brightness-[1.05] active:scale-[0.97] transition-all";
const BTN_GHOST="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[20px] bg-white text-g700 font-bold text-[17px] shadow-[0_3px_10px_rgba(17,24,39,0.09)] hover:bg-g50 active:scale-[0.97] transition-all";
function logoMark(cls){return `<span class="${cls} inline-block flex-shrink-0"><svg viewBox="0 0 100 100" class="w-full h-full"><defs><clipPath id="kc"><path fill-rule="evenodd" d="M50 3a47 47 0 1 0 0 94a47 47 0 1 0 0-94M50 23a27 27 0 1 0 0 54a27 27 0 1 0 0-54"/></clipPath></defs><g clip-path="url(#kc)"><path fill="#2F80ED" d="M50 50 172.6 152.9-88.6 130Z"/><path fill="#EC3D8B" d="M50 50-88.6 130-88.6-30Z"/><path fill="#F2342F" d="M50 50-88.6-30 104.7-100.4Z"/><path fill="#FBB016" d="M50 50 104.7-100.4 172.6-52.9Z"/></g></svg></span>`;}
function statusBadge(s){return `<span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${STATUS_STYLE[s]||'text-g600 bg-g100'}">${s}</span>`;}
function platBadge(p){return `<span class="text-[11px] px-2 py-0.5 rounded-md font-bold ${PLATFORM_STYLE[p]||'text-g600 bg-g100'}">${p}</span>`;}
function logoEl(c,cl){return `<div class="${cl} rounded-[20px] bg-blue-tint flex items-center justify-center text-blue font-bold flex-shrink-0 overflow-hidden relative">`+(c.logo?`<img src="${c.logo}" referrerpolicy="no-referrer" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'">`:'')+`<span>${esc(c.name[0])}</span></div>`;}
function brandLogo(sm,clk){const i=`${logoMark(sm?'w-7 h-7':'w-9 h-9')}<span class="font-bold tracking-tight text-g900 ${sm?'text-[16px]':'text-xl'}">크놀<span class="text-blue">AD</span></span>`;return clk?`<button onclick="goHome()" class="flex items-center gap-2 cursor-pointer">${i}</button>`:`<div class="flex items-center gap-2">${i}</div>`;}
function field(l,inner){return `<div><label class="block text-[15px] font-medium text-g900 mb-2">${l}</label>${inner}</div>`;}
function pageHeader(e,t,sub){return `<div class="mb-8"><p class="text-[15px] font-bold text-blue mb-2">${e}</p><h1 class="text-[32px] font-bold text-g900 leading-tight tracking-tight">${t}</h1>${sub?`<p class="text-[16px] text-g500 mt-2">${sub}</p>`:""}</div>`;}
function modal(html){document.getElementById("modalRoot").innerHTML=`<div class="fixed inset-0 z-[300] bg-black/40 grid place-items-center p-5 fade-up" onclick="if(event.target===this)closeModal()"><div class="${CARD} p-7 max-w-md w-full shadow-pop">${html}</div></div>`;if(window.lucide)lucide.createIcons();}
function closeModal(){document.getElementById("modalRoot").innerHTML="";}
function openLegal(k){const L=LEGAL[k];modal(`<div class="flex items-center justify-between mb-3"><h3 class="text-[19px] font-bold text-g900">${L.t}</h3><button onclick="closeModal()" class="w-8 h-8 rounded-full bg-g100 grid place-items-center text-g500">✕</button></div><div class="text-[14px] text-g600 leading-relaxed whitespace-pre-line max-h-[58vh] overflow-y-auto pr-1">${esc(L.b)}</div><button onclick="closeModal()" class="${BTN} w-full mt-5">확인</button>`);}
function copyText(t){const ok=()=>toast("복사되었습니다");if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok).catch(()=>fbCopy(t));}else fbCopy(t);}
function fbCopy(t){const ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");toast("복사되었습니다");}catch(e){toast("복사 실패");}document.body.removeChild(ta);}

function go(v){S.view=v;render();window.scrollTo(0,0);}
function goHome(){S.view="home";render();window.scrollTo(0,0);}
function newApply(){if(S.role==="customer"){S.form={name:(S.cust&&S.cust.name)||"",email:(S.cust&&S.cust.email)||"",brand:(S.cust&&S.cust.brand)||""};SEL=new Set();PROD={};go("cust-apply");}else{S.form={};SEL=new Set();PROD={};go("apply");}}
function logout(){S.role=null;S.cust=null;S.wf={step:1,edit:null};S.activeCamp=null;S.myCamps=[];try{localStorage.removeItem("knollad_sess");}catch(_e){}go("home");}
function render(){
  const v=S.view;let h;
  if(v==="home"){
    if(S.role==="customer")h=viewHome();
    else if(S.role==="admin"){S.view="admin-dashboard";h=adminShell("admin-dashboard");}
    else h=viewApply();
  }
  else if(v==="apply")h=viewApply();
  else if(v==="channel-picker")h=viewPicker();
  else if(v==="apply-success")h=viewApplySuccess();
  else if(v==="login")h=viewLogin();
  else if(S.role==="customer")h=customerShell(v);
  else if(S.role==="admin")h=adminShell(v);
  else h=viewApply();
  document.getElementById("root").innerHTML=h;
  if(window.lucide)lucide.createIcons();
  if(S.view==="home"&&S.role==="customer")initCounters();
  if(v==="home"||v==="channel-picker"||v==="cust-channels"||v==="admin-channels")maybeLiveRefresh();
  if(S.role)saveSession();
}
function topbar(){const lnk="text-[15px] font-bold text-g600 hover:text-g900 px-3 py-2 rounded-2xl hover:bg-g100";const sol="text-[15px] font-bold px-4 py-2.5 rounded-2xl bg-g100 text-g800 hover:bg-g200";let nav;
if(S.role==="customer")nav=`<button onclick="newApply()" class="${lnk}">캠페인 신청하기</button><button onclick="go('customer-dashboard')" class="${lnk}">캠페인 관리</button><button onclick="go('mypage')" class="${lnk}">마이페이지</button><button onclick="logout()" class="${sol}">로그아웃</button>`;
else if(S.role==="admin")nav=`<button onclick="go('admin-dashboard')" class="${lnk}">관리자 화면</button><button onclick="logout()" class="${sol}">로그아웃</button>`;
else nav=`<button onclick="go('apply')" class="${lnk}">캠페인 신청</button><button onclick="go('login')" class="${sol}">로그인</button>`;
return `<header class="bg-white/85 backdrop-blur-xl border-b border-g100 sticky top-0 z-40"><div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-2">${brandLogo(false,true)}<nav class="flex items-center gap-1 flex-wrap justify-end">${nav}</nav></div></header>`;}
function siteFooter(){return `<footer class="border-t border-g100 bg-white"><div class="max-w-5xl mx-auto px-6 py-10"><div class="flex items-center gap-2 mb-4">${logoMark('w-7 h-7')}<span class="font-bold text-g800">크놀AD</span></div>
<p class="text-[14px] text-g500 leading-relaxed">© 2024 크놀애드 (에이치알컴퍼니 주식회사). All rights reserved.<br>사업자등록번호: 577-86-02157 · 본사: 대전 유성구 3-1 대전정보문화산업진흥원 3층 306호</p>
<div class="flex items-center gap-3 mt-4 text-[14px] text-g500"><button onclick="openLegal('terms')" class="hover:text-g900 font-medium">이용약관</button><span class="text-g300">·</span><button onclick="openLegal('privacy')" class="hover:text-g900 font-medium">개인정보처리방침</button><span class="text-g300">·</span><button onclick="openLegal('cookie')" class="hover:text-g900 font-medium">쿠키정책</button></div></div></footer>`;}
function viewHome(){const isCust=S.role==="customer";
return `<div class="min-h-screen bg-white">${topbar()}
<section class="px-6 pt-20 pb-14 text-center"><div class="max-w-3xl mx-auto fade-up">
<div class="flex items-center justify-center mb-3">${logoMark('w-20 h-20 md:w-24 md:h-24')}</div>
<h1 class="font-display text-[64px] md:text-[92px] font-bold tracking-tight text-g900 leading-[0.95]">크놀<span class="text-blue">AD</span></h1>
<h2 class="text-[30px] md:text-[40px] font-bold text-g900 mt-6 tracking-tight">광고대행사가 아닙니다.</h2>
<p class="text-[19px] md:text-[23px] text-g600 font-medium mt-4">자체 채널로 직접 실행하는 콘텐츠 광고 플랫폼입니다.</p>
<div class="mt-10 flex items-center justify-center gap-3 flex-wrap"><button onclick="newApply()" class="${BTN} px-9 text-[18px]">캠페인 신청하기 <i data-lucide="arrow-right" class="w-5 h-5"></i></button>${isCust?`<button onclick="go('customer-dashboard')" class="${BTN_GHOST} px-8">캠페인 관리</button>`:''}</div>
</div></section>
<section class="px-6 pb-28"><div class="max-w-5xl mx-auto fade-up">
<div class="relative overflow-hidden rounded-[30px] shadow-[0_30px_80px_rgba(10,16,40,0.45)]" style="background:radial-gradient(circle at 12% 0%,rgba(49,130,246,0.45),transparent 42%),radial-gradient(circle at 92% 105%,rgba(124,58,237,0.4),transparent 46%),linear-gradient(135deg,#0b1228,#0a1024 55%,#080d1c)">
<div class="absolute inset-0 opacity-[0.13] pointer-events-none" style="background-image:linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px);background-size:46px 46px"></div>
<div class="relative grid grid-cols-1 sm:grid-cols-3 gap-y-12 py-20 px-6">
${[["49","개","자체 숏폼 채널"],["700","만+","전체 구독자"],["30","억+","월 자체 조회수"]].map(st=>`<div class="text-center"><div class="font-display font-bold num leading-none tracking-tight"><span class="text-[58px] md:text-[80px] text-white ctr" data-to="${st[0]}">0</span><span class="text-[30px] md:text-[42px] text-[#5b9bff] ml-1">${st[1]}</span></div><div class="text-[16px] text-[#8a96b3] font-medium mt-5 tracking-wide">${st[2]}</div></div>`).join("")}
</div></div>
</div></section>${siteFooter()}</div>`;}
function initCounters(){document.querySelectorAll(".ctr").forEach(el=>{const to=+el.dataset.to,t0=performance.now(),dur=1500;const tick=now=>{const p=Math.min((now-t0)/dur,1);el.textContent=Math.round((1-Math.pow(1-p,4))*to).toLocaleString();if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);});}

/* ===== 신청폼 ===== */
function gv(id){const e=document.getElementById(id);return e?e.value:"";}
function gck(id){const e=document.getElementById(id);return e?e.checked:undefined;}
function saveForm(){const a1=gck("f_agree1"),a2=gck("f_agree2");S.form={name:gv("f_name")||S.form.name,email:gv("f_email")||S.form.email,phone:gv("f_phone")||S.form.phone,brand:gv("f_brand")||S.form.brand,date:gv("f_date")||S.form.date,link:gv("f_link")||S.form.link,material:gv("f_material")||S.form.material,ad:gv("f_ad")||S.form.ad,concept:gv("f_concept")||S.form.concept,note:gv("f_note")||S.form.note,agree1:a1===undefined?S.form.agree1:a1,agree2:a2===undefined?S.form.agree2:a2};}
function fv(k){return esc((S.form&&S.form[k])||"");}
function chSelectBtn(){return `<button type="button" onclick="openPicker()" class="w-full flex items-center gap-3 px-5 py-4 rounded-[20px] bg-g100 border border-transparent hover:border-blue/40 transition-all text-left"><i data-lucide="layers" class="w-[18px] h-[18px] text-g500"></i><span class="flex-1 text-[17px] text-g500">채널 목록에서 선택하기 (복수 선택 가능)</span><i data-lucide="chevron-right" class="w-[18px] h-[18px] text-g400"></i></button>`;}
function applyFields(){return `<div class="space-y-4">
<div class="grid grid-cols-2 gap-3">${field('담당자명 <span class="text-blue">*</span>',`<input id="f_name" value="${fv('name')}" placeholder="홍길동" class="${INPUT}">`)}${field('이메일 <span class="text-blue">*</span>',`<input id="f_email" value="${fv('email')}" type="email" placeholder="name@company.com" class="${INPUT}">`)}</div>
<div class="grid grid-cols-2 gap-3">${field('연락처 <span class="text-blue">*</span>',`<input id="f_phone" value="${fv('phone')}" placeholder="010-0000-0000" class="${INPUT}">`)}${field('브랜드 / 회사명 <span class="text-blue">*</span>',`<input id="f_brand" value="${fv('brand')}" placeholder="브랜드 / 회사명" class="${INPUT}">`)}</div>
<div class="grid grid-cols-2 gap-3">${field('업로드 희망일',`<input id="f_date" value="${fv('date')}" type="date" class="${INPUT}">`)}${field('제품 링크',`<input id="f_link" value="${fv('link')}" placeholder="https://" class="${INPUT}">`)}</div>
<div class="pt-1"><label class="block text-[15px] font-medium text-g900 mb-2">희망 채널 선택</label>${chSelectBtn()}<div id="selBox" class="${SEL.size?'mt-3':''}">${SEL.size?selectedSummary():''}</div></div>
${field('활용 소재',`<input id="f_material" value="${fv('material')}" placeholder="영상, 이미지, 직접 제작 등" class="${INPUT}">`)}
${field('광고 고지 방식',`<select id="f_ad" class="${INPUT}"><option ${S.form.ad==='광고표기 희망'?'selected':''}>광고표기 희망</option><option ${S.form.ad==='광고 미표기 희망'?'selected':''}>광고 미표기 희망</option><option ${S.form.ad==='별도 협의'?'selected':''}>별도 협의</option></select>`)}
${field('희망 영상 컨셉',`<textarea id="f_concept" rows="2" placeholder="분위기, 스타일, 레퍼런스 등을 자유롭게 적어주세요." class="${INPUT} resize-none">${fv('concept')}</textarea>`)}
${field('요청사항',`<textarea id="f_note" rows="2" placeholder="기타 요청사항" class="${INPUT} resize-none">${fv('note')}</textarea>`)}
<div class="pt-2 border-t border-g100 mt-2"><p class="text-[15px] font-medium text-g900 mb-2.5 mt-3">필수 동의 항목</p>
<label class="flex items-center gap-2.5 cursor-pointer py-1"><input type="checkbox" id="f_agree1" ${S.form.agree1?'checked':''} class="w-5 h-5 rounded accent-blue flex-shrink-0"><span class="text-[15px] text-g900 flex-1">이용약관 동의 <span class="text-blue font-bold">(필수)</span></span><button type="button" onclick="openLegal('terms')" class="text-[14px] text-g500 underline">내용 보기</button></label>
<label class="flex items-center gap-2.5 cursor-pointer py-1"><input type="checkbox" id="f_agree2" ${S.form.agree2?'checked':''} class="w-5 h-5 rounded accent-blue flex-shrink-0"><span class="text-[15px] text-g900 flex-1">개인정보 수집 및 이용 동의 <span class="text-blue font-bold">(필수)</span></span><button type="button" onclick="openLegal('privacy')" class="text-[14px] text-g500 underline">내용 보기</button></label></div>
</div>`;}
const NOTICE=`<div class="bg-blue-soft rounded-[20px] p-4 text-[15px] text-g800 leading-relaxed mb-6">캠페인 신청서를 제출하시면 내부 검토 후 승인 절차가 진행됩니다.<br>승인이 완료되면 고객 계정이 자동 생성되며, 로그인 정보가 이메일로 자동 발송됩니다.<br>이후 고객 전용 대시보드에서 캠페인 진행 현황, 자료 업로드, 컨펌 요청, 업로드 일정 및 리포트 현황을 실시간으로 확인하실 수 있습니다.</div>`;
function viewApply(){
return `<div class="min-h-screen">${topbar()}
<div class="max-w-2xl mx-auto px-5 py-8 fade-up">
<div class="${CARD} overflow-hidden">
<div class="px-6 md:px-8 py-5 border-b border-g100 flex items-center gap-3">${logoMark('w-11 h-11')}<div><p class="text-[18px] font-bold text-g900">크놀AD 캠페인 신청서</p><p class="text-[14px] text-g600">에이치알컴퍼니(주) 직접 검토 · 승인</p></div></div>
<div class="px-6 md:px-8 py-7">${NOTICE}${applyFields()}<button onclick="submitApply()" class="${BTN} w-full py-4 mt-6">캠페인 신청하기</button></div></div>
</div>${siteFooter()}</div>`;}

function selectedSummary(){
  if(SEL.size===0)return "";
  const items=[...SEL].map(id=>{const c=CH.find(x=>x.id===id),prod=PROD[id]||"production",price=prod==='production'?c.prod:c.pub;
    return `<div class="flex items-center gap-3 bg-g50 rounded-[20px] p-3">${logoEl(c,"w-11 h-11 text-base")}<div class="flex-1 min-w-0"><p class="font-bold text-g900 truncate">${esc(c.name)}</p><p class="text-[14px] text-g400">${prod==='production'?'제작+발행':'단순발행'} · <span class="num">${price}만원</span></p></div><div class="flex gap-1 p-0.5 bg-g100 rounded-2xl"><button onclick="setPickProduct('${c.id}','production')" class="px-2 py-1 rounded-xl text-[13px] font-bold ${prod==='production'?'bg-white text-blue shadow-sm':'text-g500'}">제작</button><button onclick="setPickProduct('${c.id}','publish')" class="px-2 py-1 rounded-xl text-[13px] font-bold ${prod==='publish'?'bg-white text-blue shadow-sm':'text-g500'}">발행</button></div><button onclick="togglePick('${c.id}')" class="w-7 h-7 rounded-full bg-g200 text-g500 grid place-items-center hover:bg-red-100 hover:text-red-500 flex-shrink-0"><i data-lucide="x" class="w-4 h-4"></i></button></div>`;}).join("");
  return `<div class="space-y-2">${items}</div><div class="flex justify-between items-center pt-3 mt-2 border-t border-g100"><span class="text-[16px] font-bold text-g600">합계 (VAT 별도)</span><span class="text-[19px] font-bold text-blue num">${wonM(selTotal())}</span></div>`;
}

/* ===== 채널 테이블 ===== */
function filteredCH(){const m={"국내":"KR","일본":"JP","미국":"US"};return CH.filter(c=>(_region==="전체"||c.region===m[_region])&&(c.name.includes(_search)||(c.read&&c.read.includes(_search))));}
function selTotal(){let t=0;SEL.forEach(id=>{const c=CH.find(x=>x.id===id);t+=(PROD[id]==="publish")?c.pub:c.prod;});return t;}
function pickRow(c,i){const sel=SEL.has(c.id);
const subs=[`<div class="flex items-center justify-between gap-3"><span class="inline-flex items-center gap-1.5 text-[12px] text-g500"><span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>YouTube</span><span class="font-bold text-g900 num text-[14px]">${fmtSub(c.yt)}</span></div>`];
if(c.ig)subs.push(`<div class="flex items-center justify-between gap-3"><span class="inline-flex items-center gap-1.5 text-[12px] text-g400"><span class="w-1.5 h-1.5 rounded-full bg-pink-500"></span>Instagram</span><span class="font-bold text-g600 num text-[13px]">${c.ig}</span></div>`);
if(c.tt)subs.push(`<div class="flex items-center justify-between gap-3"><span class="inline-flex items-center gap-1.5 text-[12px] text-g400"><span class="w-1.5 h-1.5 rounded-full bg-g800"></span>TikTok</span><span class="font-bold text-g600 num text-[13px]">${c.tt}</span></div>`);
return `<tr class="border-b border-g100 last:border-0 cursor-pointer ${sel?'bg-blue-soft':'hover:bg-g50'}" onclick="togglePick('${c.id}')">
<td class="px-4 py-4 text-[14px] text-g300 num align-middle font-bold">${String(i+1).padStart(2,"0")}</td>
<td class="px-4 py-4 align-middle"><div class="flex items-center gap-3">${logoEl(c,"w-12 h-12 text-base")}<div class="min-w-0"><div class="flex items-center gap-1.5"><p class="font-bold text-g900 truncate text-[16px]">${esc(c.name)}</p>${c.featured?'<span class="text-blue text-xs">★</span>':''}${c.isNew?'<span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">NEW</span>':''}</div>${c.read?`<p class="text-[13px] text-g400 truncate">${esc(c.read)}</p>`:''}<a href="https://www.youtube.com/@${encodeURIComponent(c.handle)}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" class="text-[12px] text-blue font-bold inline-flex items-center gap-0.5">채널 보기 ↗</a></div></div></td>
<td class="px-4 py-4 align-middle"><div class="flex gap-1 flex-wrap">${c.plat.map(platBadge).join("")}</div></td>
<td class="px-4 py-4 align-middle"><div class="space-y-1.5 min-w-[150px]">${subs.join("")}</div></td>
<td class="px-4 py-4 align-middle"><p class="text-[17px] font-bold text-g900 num leading-none">${fmtView(c.views)}</p><p class="text-[11px] text-g400 mt-1">총 조회수</p></td>
<td class="px-4 py-4 align-middle"><span class="text-[13px] font-bold text-g500 bg-g100 px-2 py-1 rounded-lg">${REGION_LABEL[c.region]}</span></td>
<td class="px-4 py-4 align-middle"><p class="text-[16px] font-bold text-blue num">${c.prod}만 원</p><p class="text-[11px] text-g400">VAT 별도</p></td>
<td class="px-4 py-4 align-middle"><p class="text-[16px] font-bold text-g900 num">${c.pub}만 원</p><p class="text-[11px] text-g400">VAT 별도</p></td>
<td class="px-4 py-4 align-middle text-center"><div class="cbx w-6 h-6 rounded-full grid place-items-center mx-auto ${sel?'bg-blue':'border-2 border-g300 bg-white'}">${sel?'<i data-lucide="check" class="w-3.5 h-3.5 text-white pop"></i>':''}</div></td></tr>`;}
function channelTableBlock(){const l=filteredCH();
return `<div class="bg-blue-soft rounded-2xl px-4 py-3 text-[14px] text-g700 mb-4 flex items-start gap-2"><i data-lucide="info" class="w-4 h-4 text-blue mt-0.5 flex-shrink-0"></i>인스타그램 또는 틱톡 계정을 운영하지 않는 채널의 경우, 다른 보유 채널을 통해 콘텐츠가 랜덤으로 업로드됩니다.</div>
<div class="flex items-center gap-3 mb-4 flex-wrap">
<div class="flex gap-2" id="pickChips">${["전체","국내","일본","미국"].map(r=>`<button onclick="setRegion('${r}')" class="px-4 py-2 rounded-2xl text-[14px] font-bold transition-all ${_region===r?'bg-blue text-white':'bg-white border border-g200 text-g600 hover:bg-g100'}">${r}</button>`).join("")}</div>
<div class="relative flex-1 min-w-[200px] max-w-sm"><i data-lucide="search" class="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-g400"></i><input oninput="onSearch(this.value)" value="${esc(_search)}" class="w-full pl-11 pr-4 py-2.5 rounded-2xl text-[15px] bg-white border border-g200 placeholder:text-g500 focus:outline-none focus:border-blue/40" placeholder="채널명 검색"></div>
<span class="ml-auto text-[14px] text-g400 font-medium" id="pickCount">${l.length}개 채널</span></div>
<div class="${CARD} overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-left min-w-[1060px]">
<thead><tr class="border-b border-g200 bg-g50">${["NO","채널명","플랫폼","구독자 / 팔로워","총 조회수","지역","제작+발행","단순발행","선택"].map(h=>`<th class="px-4 py-3 text-[13px] font-bold text-g500 whitespace-nowrap">${h}</th>`).join("")}</tr></thead>
<tbody id="pickRows">${l.map(pickRow).join("")}</tbody></table></div></div>`;}
function viewPicker(){
return `<div class="min-h-screen bg-g50 pb-12">
<div class="sticky top-0 z-40 bg-white border-b border-g100"><div class="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
<button onclick="finishPicker()" class="w-10 h-10 rounded-2xl bg-g100 grid place-items-center hover:bg-g200 flex-shrink-0"><i data-lucide="arrow-left" class="w-4 h-4 text-g700"></i></button>
<div class="min-w-0"><p class="text-[20px] font-bold text-g900 leading-none">채널 선택</p><p class="text-[14px] text-g500 mt-1 truncate">원하는 채널을 선택해주세요 (복수 선택 가능)</p></div>
<button onclick="finishPicker()" class="${BTN} ml-auto px-6 flex-shrink-0">선택 완료 <span id="selCnt">${SEL.size}</span></button></div></div>
<div class="max-w-7xl mx-auto px-6 pt-6">${channelTableBlock()}</div></div>`;}
function togglePick(id){if(SEL.has(id))SEL.delete(id);else{SEL.add(id);if(!PROD[id])PROD[id]="production";}applyChange();}
function setPickProduct(id,p){PROD[id]=p;applyChange();}
function applyChange(){const r=document.getElementById("pickRows");if(r)updateTable();const sc=document.getElementById("selCnt");if(sc)sc.textContent=SEL.size;const box=document.getElementById("selBox");if(box)box.innerHTML=selectedSummary();if(window.lucide)lucide.createIcons();}
function updateTable(){const l=filteredCH();const r=document.getElementById("pickRows");if(r)r.innerHTML=l.length?l.map(pickRow).join(""):`<tr><td colspan="9" class="text-center py-12 text-g400 text-sm">검색 결과가 없습니다.</td></tr>`;const c=document.getElementById("pickCount");if(c)c.textContent=l.length+"개 채널";if(window.lucide)lucide.createIcons();}
function onSearch(v){_search=v;updateTable();}
function setRegion(r){_region=r;updateTable();const ch=document.getElementById("pickChips");if(ch)ch.querySelectorAll("button").forEach(b=>{const on=b.textContent.trim()===r;b.className=`px-4 py-2 rounded-2xl text-[14px] font-bold transition-all ${on?'bg-blue text-white':'bg-white border border-g200 text-g600 hover:bg-g100'}`;});}
function openPicker(){saveForm();if(S.role==="customer"){go("cust-channels");}else{S._cameFrom="apply";go("channel-picker");}}
function finishPicker(){if(S.role==="customer"){go("cust-apply");}else{go(S._cameFrom||"apply");}}
function submitApply(){saveForm();const f=S.form;if(!f.name||!f.name.trim()||!f.email||!f.email.trim()||!f.phone||!f.phone.trim()||!f.brand||!f.brand.trim()){toast("필수: 담당자명·이메일·연락처·브랜드명을 모두 입력해주세요");return;}
  if(!f.agree1||!f.agree2){toast("필수 동의 항목(이용약관·개인정보)에 동의해주세요");return;}
  const chans=[...SEL].map(id=>{const c=CH.find(x=>x.id===id),p=PROD[id]||"production";return {id:c.id,name:c.name,product:p==='production'?'제작+발행':'단순발행',price:p==='production'?c.prod:c.pub};});
  S._submitted={brand:f.brand,email:f.email.toLowerCase(),channels:[...SEL].map(id=>({c:CH.find(x=>x.id===id),p:PROD[id]||"production"})),total:selTotal()};
  const payload={contact_name:f.name,email:f.email.toLowerCase(),phone:f.phone,brand_name:f.brand,preferred_date:f.date||null,product_link:f.link||null,material:f.material||null,ad_disclosure:f.ad||null,concept:f.concept||null,note:f.note||null,channels:chans,total_amount:selTotal()};
  fetch(SUPA_URL+"/rest/v1/knollad_applications",{method:"POST",headers:Object.assign({"Content-Type":"application/json","Prefer":"return=minimal"},SH),body:JSON.stringify(payload)}).then(r=>{if(!r.ok)console.warn("supabase",r.status);}).catch(e=>console.warn(e));
  if(S.role==="customer"){toast("추가 캠페인 신청이 접수되었습니다");SEL=new Set();PROD={};go("customer-dashboard");}else{go("apply-success");}}

function viewApplySuccess(){const sub=S._submitted;
const rows=sub&&sub.channels.length?`<div class="mt-5 space-y-2">${sub.channels.map(x=>`<div class="flex items-center gap-3 bg-g50 rounded-[20px] p-3">${logoEl(x.c,"w-10 h-10 text-base")}<div class="flex-1 text-left"><p class="text-[15px] font-bold text-g900">${esc(x.c.name)}</p><p class="text-[13px] text-g400">${x.p==='production'?'제작+발행':'단순발행'}</p></div><p class="text-[15px] font-bold text-g900 num">${wonM(x.p==='production'?x.c.prod:x.c.pub)}</p></div>`).join("")}<div class="flex justify-between items-center pt-3 px-1"><span class="text-[15px] font-bold text-g600">합계 (VAT 별도)</span><span class="text-[19px] font-bold text-blue num">${wonM(sub.total)}</span></div></div>`:"";
return `<div class="min-h-screen bg-g50 flex items-center justify-center px-6 py-16"><div class="max-w-md w-full fade-up"><div class="${CARD} p-8 text-center">
<div class="w-16 h-16 rounded-full bg-blue-tint flex items-center justify-center mx-auto mb-6"><i data-lucide="check" class="w-8 h-8 text-blue"></i></div>
<h1 class="text-[26px] font-bold text-g900 mb-1.5">신청이 접수되었어요</h1><p class="text-[16px] text-g500">${sub?esc(sub.brand)+' 캠페인':'크놀AD 캠페인'} 신청이 정상 접수되었습니다.</p>
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 mt-4"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span><span class="text-[14px] font-bold text-amber-700">검토 대기중</span></div>${rows}
<div class="mt-7 text-left bg-g50 rounded-[20px] p-4 text-[15px] text-g600 leading-relaxed">승인 완료 시 입력하신 이메일(${sub?esc(sub.email):'이메일'})을 아이디로 계정이 발급되고 비밀번호가 안내됩니다. ‘로그인’에서 로그인 후 진행 상태를 확인하세요.</div>
<button onclick="goHome()" class="${BTN_GHOST} w-full mt-5">홈으로 돌아가기</button></div></div></div>`;}

/* ===== 로그인 ===== */
function viewLogin(){return `<div class="min-h-screen bg-g50 flex items-center justify-center px-6"><div class="w-full max-w-sm fade-up">
<div class="text-center mb-8">${logoMark('w-14 h-14 mx-auto mb-3')}<h1 class="text-[24px] font-bold text-g900">로그인</h1><p class="text-[16px] text-g500 mt-1">승인된 고객 / 관리자 전용</p></div>
<div class="${CARD} p-7 space-y-4">${field('아이디 (이메일)',`<input id="loginEmail" type="text" placeholder="name@company.com" class="${INPUT}">`)}${field('비밀번호',`<input id="loginPw" type="password" placeholder="발급받은 비밀번호" class="${INPUT}" onkeydown="if(event.key==='Enter')doLogin()">`)}<button onclick="doLogin()" id="loginBtn" class="${BTN} w-full">로그인</button></div>
<p class="text-center text-[13px] text-g400 mt-4 leading-relaxed">관리자 승인 전에는 로그인할 수 없습니다.<br>승인 후 발급받은 이메일·비밀번호로 로그인하세요.</p><button onclick="goHome()" class="w-full text-center text-[15px] text-g500 hover:text-g800 mt-3">← 홈으로</button></div></div>`;}
function doLogin(){const e=(gv("loginEmail")||"").trim().toLowerCase();const pw=gv("loginPw")||"";
  if(e==="admin"){if(pw==="admin123"){S.role="admin";try{localStorage.setItem("knollad_sess",JSON.stringify({role:"admin"}));}catch(_e){}go("admin-dashboard");}else toast("관리자 비밀번호가 올바르지 않습니다");return;}
  if(!e||!pw){toast("아이디와 비밀번호를 입력해주세요");return;}
  const btn=document.getElementById("loginBtn");if(btn)btn.textContent="확인 중…";
  fetch(SUPA_URL+`/rest/v1/knollad_members?email=eq.${encodeURIComponent(e)}&password=eq.${encodeURIComponent(pw)}&select=brand_name,contact_name&limit=1`,{headers:SH})
  .then(r=>r.json()).then(rows=>{if(Array.isArray(rows)&&rows.length){S.role="customer";S.cust={email:e,brand:rows[0].brand_name,name:rows[0].contact_name};S.wf={step:1,edit:null};S.activeCamp=null;S.myCamps=[];try{localStorage.setItem("knollad_sess",JSON.stringify({role:"customer",cust:S.cust}));}catch(_e){}go("customer-dashboard");}else{if(btn)btn.textContent="로그인";toast("승인된 계정이 아니거나 정보가 일치하지 않습니다");}})
  .catch(()=>{if(btn)btn.textContent="로그인";toast("로그인 오류. 잠시 후 다시 시도해주세요");});}

/* ===== SHELLS ===== */
function sidebar(items,cur,badge,bell,bellT){return `<aside class="w-56 border-r border-g100 flex flex-col fixed top-0 bottom-0 z-20 bg-white"><div class="px-5 py-5"><div class="flex items-center justify-between">${brandLogo(true,true)}${bellT?`<button onclick="go('${bellT}')" class="relative w-9 h-9 rounded-full bg-g100 grid place-items-center text-g600 hover:bg-g200"><i data-lucide="bell" class="w-[18px] h-[18px]"></i>${bell>0?`<span class="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full text-white text-[10px] font-bold grid place-items-center" style="background:#EF4444">${bell>9?"9+":bell}</span>`:""}</button>`:""}</div>${badge?`<span class="mt-2 inline-flex px-2 py-0.5 rounded-md bg-blue-tint text-blue text-[11px] font-bold">${badge}</span>`:""}</div><nav class="flex-1 px-3 space-y-1 overflow-y-auto">${items.map(it=>{const a=cur===it.id;return `<button onclick="${it.act||("go('"+it.id+"')")}" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-[15px] font-bold ${a?'bg-blue-tint text-blue':'text-g500 hover:text-g800 hover:bg-g100'}"><i data-lucide="${it.icon}" class="w-[16px] h-[16px]"></i><span class="flex-1 text-left">${it.label}</span>${it.dot?'<span class="inline-flex items-center justify-center text-[10px] font-bold rounded-full w-4 h-4" style="background:#EF4444;color:#fff">N</span>':''}</button>`;}).join("")}</nav><div class="px-3 py-3 border-t border-g100"><button onclick="logout()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-[15px] font-bold text-g500 hover:text-g800 hover:bg-g100"><i data-lucide="log-out" class="w-[16px] h-[16px]"></i>로그아웃</button></div></aside>`;}
function customerShell(v){const items=[{id:"customer-dashboard",label:"캠페인 관리",icon:"layout-dashboard"},{id:"cust-channels",label:"채널 리스트",icon:"layers"},{id:"cust-apply",label:"캠페인 추가 신청",icon:"plus-circle",act:"newApply()"},{id:"workflow",label:"워크플로우",icon:"list-checks"},{id:"notes",label:"문의게시판",icon:"message-square"},{id:"calendar",label:"캠페인 일정",icon:"calendar"},{id:"settlement",label:"정산",icon:"receipt"},{id:"report",label:"리포트",icon:"bar-chart-3"},{id:"mypage",label:"마이페이지",icon:"user"}];
let b;if(v==="cust-channels")b=custChannels();else if(v==="cust-apply")b=custApply();else if(v==="workflow")b=viewWorkflow();else if(v==="calendar")b=viewCalendar();else if(v==="notes")b=viewNotes();else if(v==="settlement")b=viewSettlement();else if(v==="mypage")b=viewMyPage();else if(v==="report")b=viewReport();else b=viewCustomerDashboard();
const ua=S.activeCamp?unreadCount(S.activeCamp,"cust"):0;const bell=(S.myCamps||[]).reduce(function(t,c){return t+unreadCount(c,"cust");},0);
items.forEach(function(it){if(it.id==="workflow")it.dot=wfPending(S.activeCamp)||ua>0;if(it.id==="notes")it.dot=ua>0;});
return `<div class="flex min-h-screen bg-g50">${sidebar(items,v,null,bell,"workflow")}<main class="flex-1 ml-56 min-h-screen">${b}</main></div>`;}
function adminShell(v){const items=[{id:"admin-dashboard",label:"캠페인 관리",icon:"clipboard-list"},{id:"admin-workflow",label:"워크플로우 관리",icon:"list-checks"},{id:"admin-calendar",label:"캠페인 일정",icon:"calendar"},{id:"admin-members",label:"회원DB",icon:"users"},{id:"admin-channels",label:"채널 DB",icon:"layers"}];let b=v==="admin-members"?viewAdminMembers():v==="admin-channels"?viewAdminChannels():v==="admin-workflow"?viewAdminWorkflow():v==="admin-calendar"?viewAdminCalendar():viewAdminList();
const bell=(ADM_ROWS||[]).filter(function(a){return a.status==="승인 완료";}).reduce(function(t,c){return t+unreadCount(c,"adm");},0);
items.forEach(function(it){if(it.id==="admin-workflow")it.dot=bell>0;});
return `<div class="flex min-h-screen bg-g50">${sidebar(items,v,"관리자",bell,"admin-workflow")}<main class="flex-1 ml-56 min-h-screen">${b}</main></div>`;}
function custChannels(){return `<div class="p-8 md:p-10">
<div class="flex items-center justify-between mb-6 flex-wrap gap-3"><div><p class="text-[15px] font-bold text-blue mb-2">CHANNELS</p><h1 class="text-[32px] font-bold text-g900 tracking-tight">채널 리스트</h1><p class="text-[16px] text-g500 mt-2">원하는 채널을 체크하면 ‘캠페인 추가 신청’에 반영됩니다</p></div><button onclick="go('cust-apply')" class="${BTN} px-6">선택 완료 <span id="selCnt">${SEL.size}</span> →</button></div>
${channelTableBlock()}</div>`;}
function custApply(){return `<div class="p-8 md:p-10"><div class="max-w-2xl">${pageHeader("CAMPAIGN","캠페인 추가 신청","새 캠페인을 신청하면 동일하게 검토 후 진행됩니다")}
<div class="${CARD} p-6 md:p-8">${NOTICE}${applyFields()}<button onclick="submitApply()" class="${BTN} w-full py-4 mt-6">추가 캠페인 신청하기</button></div></div></div>`;}
const WF=[
{t:"문의 접수 및 상담",d:"단가·일정 안내 및 채널·제작 방향 협의",who:"완료"},
{t:"자료 공유",d:"소재·가이드·레퍼런스 전달 (고객 → 크놀AD)",who:"고객",act:"data"},
{t:"콘티 작성",d:"전달받은 자료로 콘티(기획안) 작성 후 전달 (크놀AD)",who:"크놀AD",act:"adminConti"},
{t:"콘티 컨펌 및 피드백",d:"전달받은 콘티 검토 후 컨펌 또는 수정 요청 (고객)",who:"고객",act:"conti"},
{t:"영상 제작",d:"확정 콘티로 촬영·편집 후 전달 (크놀AD)",who:"크놀AD",act:"adminVideo"},
{t:"영상 컨펌 및 피드백",d:"전달받은 영상 검토 후 컨펌 또는 수정 요청 (고객)",who:"고객",act:"video"}];
function wfPending(c){if(!c)return false;const wf=wfOf(c);const s=wf.step;if(s===2)return true;if(s===4)return !!wf.conti;if(s===6)return !!wf.video;return false;}
function asDeliver(v){if(!v)return null;if(typeof v==="string")return {link:v};return v;}
function unreadCount(camp,role){if(!camp)return 0;try{var seen=JSON.parse(localStorage.getItem("knollad_seen_"+role)||"{}");return Math.max(0,((camp.notes||[]).length)-(seen[camp.id]||0));}catch(e){return 0;}}
function markSeen(camp,role){if(!camp)return;try{var seen=JSON.parse(localStorage.getItem("knollad_seen_"+role)||"{}");seen[camp.id]=(camp.notes||[]).length;localStorage.setItem("knollad_seen_"+role,JSON.stringify(seen));}catch(e){}}
function wfOf(c){return (c&&c.wf)?c.wf:{step:(c&&c.status==="승인 완료")?2:1};}
function activeWf(){return wfOf(S.activeCamp);}
function loadMyCamps(){if(!S.cust)return;fetch(SUPA_URL+"/rest/v1/knollad_applications?email=eq."+encodeURIComponent(S.cust.email)+"&order=created_at.desc&select=*",{headers:SH}).then(r=>r.json()).then(rows=>{S.myCamps=Array.isArray(rows)?rows:[];var _had=!!S.activeCamp;if((!S.activeCamp)&&S.myCamps.length){S.activeCamp=S.myCamps.find(a=>a.status==="승인 완료")||S.myCamps[0];}else if(S.activeCamp){const f=S.myCamps.find(a=>String(a.id)===String(S.activeCamp.id));if(f)S.activeCamp=f;}renderMyCamps();if(!_had&&S.activeCamp&&["workflow","notes","settlement","mypage","calendar","report"].indexOf(S.view)>-1)render();}).catch(()=>{});}
function setActiveCamp(id){const a=(S.myCamps||[]).find(x=>String(x.id)===String(id));if(a){S.activeCamp=a;toast(a.brand_name+" 캠페인 선택됨");render();}}
function campDetail(id){const a=(S.myCamps||[]).find(x=>String(x.id)===String(id));if(!a)return;const ch=(a.channels||[]).map(c=>`${esc(c.name)} · ${c.product||''}${c.price?' '+c.price+'만':''}`).join("<br>")||"-";const row=(k,v)=>`<div class="py-2 border-b border-g100 last:border-0"><p class="text-[13px] text-g400 mb-0.5">${k}</p><div class="text-[15px] text-g800 break-all">${v||'-'}</div></div>`;modal(`<div class="flex items-center justify-between mb-3"><h3 class="text-[19px] font-bold text-g900 break-all">${esc(a.brand_name)} 신청내용</h3><button onclick="closeModal()" class="w-8 h-8 rounded-full bg-g100 grid place-items-center text-g500 flex-shrink-0">✕</button></div><div class="max-h-[60vh] overflow-y-auto">${row("상태",statusBadge(a.status))}${row("업로드 희망일",esc(a.preferred_date||''))}${row("제품 링크",a.product_link?`<a href="${esc(a.product_link)}" target="_blank" class="text-blue underline">${esc(a.product_link)}</a>`:'-')}${row("희망 채널",ch)}${row("활용 소재",esc(a.material||''))}${row("광고 고지 방식",esc(a.ad_disclosure||''))}${row("희망 영상 컨셉",esc(a.concept||''))}${row("요청사항",esc(a.note||''))}${row("금액 (VAT 별도)",`<span class="font-bold text-blue num">${wonM(a.total_amount||0)}</span>`)}</div><div class="flex gap-2 mt-4"><button onclick="setActiveCamp('${a.id}');closeModal();go('workflow')" class="${BTN} flex-1">워크플로우 진행 →</button><button onclick="closeModal()" class="${BTN_GHOST} px-5">닫기</button></div>`);}
function renderMyCamps(){const el=document.getElementById("myCampWrap");if(!el)return;const cs=S.myCamps||[];if(!cs.length){el.innerHTML='<div class="text-[15px] text-g400 text-center py-8">아직 신청한 캠페인이 없습니다.<br>상단 ‘캠페인 추가 신청’으로 시작하세요.</div>';return;}
el.innerHTML=cs.map(a=>{const on=S.activeCamp&&String(S.activeCamp.id)===String(a.id);return `<div onclick="setActiveCamp('${a.id}')" class="border ${on?'border-blue bg-blue-soft':'border-g100'} rounded-[20px] p-4 flex items-center gap-3 flex-wrap cursor-pointer hover:border-blue/50"><div class="flex-1 min-w-0"><div class="flex items-center gap-2"><p class="font-bold text-g900 text-[16px] truncate">${esc(a.brand_name)}</p>${statusBadge(a.status)}${a.status==="승인 완료"?statusBadge(a.pay_status||"결제 대기중"):""}${on?'<span class="text-[11px] font-bold text-blue">선택됨</span>':''}</div><p class="text-[13px] text-g500 mt-1 truncate">${(a.channels||[]).map(c=>c.name).join(", ")||"채널 미선택"}</p></div><div class="text-right flex-shrink-0"><p class="text-[16px] font-bold text-blue num">${wonM(a.total_amount||0)}</p><button onclick="event.stopPropagation();campDetail('${a.id}')" class="text-[12px] text-g500 font-bold underline">신청내용</button></div></div>`;}).join("");if(window.lucide)lucide.createIcons();}
function viewCustomerDashboard(){setTimeout(loadMyCamps,30);const c=S.activeCamp;const wf=c?wfOf(c):{step:1};const cur=Math.min(wf.step,7);const bn=(S.cust&&S.cust.brand)?S.cust.brand:"고객";const pct=Math.round(Math.min(cur,7)/7*100);
const todoMap={1:["승인 후 진행됩니다"],2:["소재·가이드 파일 업로드 후 제출"],3:["크놀AD 콘티 작성 대기"],4:["전달된 콘티 컨펌 또는 수정 요청"],5:["크놀AD 영상 제작 대기"],6:["전달된 영상 컨펌 또는 수정 요청"],7:["리포트에서 업로드·성과 확인","결제(정산) 진행"]};
const todo=todoMap[cur]||["진행 대기 중"];
const stageLabel=cur>=7?"완료 · 리포트 단계":(WF[cur-1]?WF[cur-1].t:"대기");
const steps=WF.map((st,i)=>{const idx=i+1;const done=idx<cur,act=idx===cur;return `<div class="flex items-center gap-3 px-3 py-2.5 rounded-2xl ${act?'bg-blue-tint':''}"><div class="w-6 h-6 rounded-full grid place-items-center flex-shrink-0 text-[12px] font-bold ${done?'bg-emerald-500 text-white':act?'bg-blue text-white':'bg-g200 text-g500'}">${done?'<i data-lucide="check" class="w-3 h-3"></i>':idx}</div><span class="text-[15px] flex-1 ${done?'text-g400 line-through':act?'text-g900 font-bold':'text-g500'}">${st.t}</span>${done?'<span class="text-[13px] text-emerald-600 font-bold">완료</span>':act?'<span class="text-[13px] text-blue font-bold">진행중</span>':'<span class="text-[13px] text-g300">대기</span>'}</div>`;}).join("");
return `<div class="p-8 md:p-10">${pageHeader("CAMPAIGN","캠페인 관리",esc(bn)+" 님의 캠페인 현황입니다. 캠페인을 누르면 신청 내용을 볼 수 있어요.")}
<div class="grid lg:grid-cols-3 gap-4 mb-4"><div class="${CARD} lg:col-span-2 p-7"><div class="flex items-center justify-between mb-4"><h2 class="text-[18px] font-bold text-g900">내 캠페인</h2><button onclick="newApply()" class="text-[14px] text-blue font-bold inline-flex items-center gap-1"><i data-lucide="plus" class="w-4 h-4"></i>캠페인 추가 신청</button></div><div id="myCampWrap" class="space-y-2"><div class="text-g400 text-center py-8 text-[15px]">불러오는 중…</div></div></div>
<div class="${CARD} p-7 flex flex-col items-center justify-center text-center"><p class="text-[14px] text-g400 mb-1">진행 단계</p><div class="font-display text-[48px] font-bold text-g900 num leading-none">${Math.min(cur,6)}<span class="text-[24px] text-g300">/6</span></div><p class="text-[13px] text-g500 mb-3">${esc(stageLabel)}</p><div class="w-full bg-g100 rounded-full h-2 mb-3"><div class="bg-blue h-2 rounded-full transition-all" style="width:${pct}%"></div></div><button onclick="go('workflow')" class="text-[15px] text-blue font-bold">워크플로우 진행하기 →</button></div></div>
<div class="grid lg:grid-cols-2 gap-4"><div class="${CARD} p-7"><h2 class="text-[16px] font-bold text-g900 mb-4">진행 단계</h2><div class="space-y-0.5">${steps}</div></div><div class="${CARD} p-7"><h2 class="text-[16px] font-bold text-g900 mb-3">현재 할 일</h2>${todo.map(it=>`<div class="flex items-center gap-3 py-1.5"><div class="w-2 h-2 rounded-full bg-blue flex-shrink-0"></div><span class="text-[16px] text-g700">${it}</span></div>`).join("")}<button onclick="go('workflow')" class="${BTN} w-full mt-4 py-3">워크플로우에서 처리하기</button></div></div></div>`;}
function viewMyPage(){setTimeout(loadMyCamps,30);const c=S.cust||{};const a=S.activeCamp||(S.myCamps&&S.myCamps[0])||{};const kv=(k,v)=>`<div class="flex justify-between py-2 border-b border-g100 last:border-0"><span class="text-g500 text-[15px]">${k}</span><span class="font-bold text-g900 text-[15px] text-right break-all">${esc(v||'-')}</span></div>`;
return `<div class="p-8 md:p-10"><div class="max-w-2xl">${pageHeader("MY PAGE","마이페이지","신청 정보 기준으로 생성된 내 정보입니다")}
<div class="${CARD} p-7 mb-4"><h2 class="text-[16px] font-bold text-g900 mb-3">내 정보</h2>${kv("담당자",c.name||a.contact_name)}${kv("아이디(이메일)",c.email||a.email)}${kv("연락처",a.phone)}${kv("회사/브랜드",c.brand||a.brand_name)}</div>
<div class="${CARD} p-7 mb-4"><h2 class="text-[16px] font-bold text-g900 mb-3">최근 신청 정보</h2>${kv("업로드 희망일",a.preferred_date)}${kv("희망 채널",(a.channels||[]).map(x=>x.name).join(", "))}${kv("활용 소재",a.material)}${kv("광고 고지 방식",a.ad_disclosure)}${kv("금액 (VAT 별도)",wonM(a.total_amount||0))}</div>
<div class="${CARD} p-7"><h2 class="text-[16px] font-bold text-g900 mb-1">사업자등록증 제출</h2><p class="text-[14px] text-g500 mb-3 leading-relaxed">세금계산서는 <b>크놀AD(에이치알컴퍼니)</b>가 발행합니다. 발행을 위해 사업자등록증을 제출해주세요.</p>${uploadZone("bizFile","사업자등록증 이미지 또는 PDF")}<button onclick="submitBiz()" class="${BTN} w-full mt-3">사업자등록증 제출</button></div>
</div></div>`;}
function submitBiz(){const c=S.activeCamp;if(c){fetch(SUPA_URL+"/rest/v1/knollad_applications?id=eq."+c.id,{method:"PATCH",headers:Object.assign({"Content-Type":"application/json","Prefer":"return=minimal"},SH),body:JSON.stringify({biz_reg:"제출됨"})}).catch(()=>{});}toast("사업자등록증이 제출되었습니다");}
function uploadZone(id,hint){id=id||"fileList";return `<label class="block border-2 border-dashed border-g300 rounded-[20px] p-7 text-center cursor-pointer hover:border-blue hover:bg-blue-soft transition-all"><input type="file" multiple class="hidden" onchange="showFiles(this,'${id}')"><i data-lucide="upload-cloud" class="w-9 h-9 text-g400 mx-auto mb-2"></i><p class="text-[17px] font-bold text-g700">파일을 끌어다 놓거나 클릭해서 업로드</p><p class="text-[14px] text-g400 mt-1">${hint||"제품 이미지·영상·로고·가이드 등 (여러 개 가능)"}</p></label><div id="${id}" class="space-y-2 mt-3"></div>`;}
function showFiles(input,id){const el=document.getElementById(id||"fileList");if(!el)return;const fs=[...input.files];el.innerHTML=fs.map(f=>`<div class="flex items-center gap-2 bg-g50 rounded-2xl px-3 py-2 text-[15px]"><i data-lucide="file" class="w-4 h-4 text-blue flex-shrink-0"></i><span class="flex-1 truncate text-g700">${esc(f.name)}</span><span class="text-g400 text-[12px] num">${(f.size/1024).toFixed(0)}KB</span></div>`).join("");if(window.lucide)lucide.createIcons();if(fs.length)toast(fs.length+"개 파일 선택됨");}
function wfSave(patch){const c=S.activeCamp;if(!c){toast("진행할 캠페인이 없습니다");return;}const wf=Object.assign({},wfOf(c),patch);c.wf=wf;fetch(SUPA_URL+"/rest/v1/knollad_applications?id=eq."+c.id,{method:"PATCH",headers:Object.assign({"Content-Type":"application/json","Prefer":"return=minimal"},SH),body:JSON.stringify({wf})}).then(r=>{if(!r.ok)toast("저장 실패");}).catch(()=>toast("저장 오류"));render();}
function wfDataSubmit(){const link=(gv("wfRef")||"").trim();const fi=document.getElementById("wfData");if(fi&&fi.files&&fi.files.length){uploadToStorage("wfData",function(url){wfSave({step:3,note:null,dataUrl:url,dataLink:link||null});toast("자료가 제출되었습니다 · 크놀AD가 콘티를 작성합니다");});}else if(link){wfSave({step:3,note:null,dataLink:link});toast("링크가 제출되었습니다 · 크놀AD가 콘티를 작성합니다");}else{toast("파일을 올리거나 링크를 입력해주세요");}}
function wfConfirm(){const wf=activeWf();if(wf.step===4)wfSave({step:5});else if(wf.step===6)wfSave({step:7});toast("컨펌되었습니다 · 다음 단계로 진행됩니다");}
function wfReqEdit(){const t=(gv("wfFb")||"").trim();const wf=activeWf();if(wf.step===4)wfSave({step:3,conti:null,note:t});else if(wf.step===6)wfSave({step:5,video:null,note:t});toast("수정 요청이 전달되었습니다 · 크놀AD가 반영 후 재전달합니다");}
function openLink(u){if(!u){toast("링크가 아직 없습니다");return;}window.open(u,"_blank");}
function wfPanel(st){const wf=activeWf();const act=st.act,P='class="space-y-3"';
if(act==="data")return `<div ${P}>${uploadZone("wfData","소재·가이드·레퍼런스 파일")}<textarea id="wfRef" rows="3" placeholder="전달할 내용을 입력하세요 (요청사항·참고 링크·메모 등)" class="${INPUT} resize-none"></textarea><button onclick="wfDataSubmit()" class="${BTN} w-full">자료 제출 완료 →</button></div>`;
if(act==="adminConti"||act==="adminVideo"){const lbl=act==="adminConti"?"콘티":"영상";return `<div ${P}><div class="bg-amber-50 rounded-2xl p-4 text-[15px] text-amber-800 flex items-start gap-3"><i data-lucide="loader-circle" class="w-5 h-5 mt-0.5 flex-shrink-0"></i><span>크놀AD에서 ${lbl}를 제작 중입니다. <b>전달이 완료되어야 다음 단계로 진행</b>할 수 있습니다.</span></div>${wf.note?`<p class="text-[13px] text-g500">최근 수정 요청: ${esc(wf.note)}</p>`:""}</div>`;}
if(act==="conti"||act==="video"){const isC=act==="conti";const lbl=isC?"콘티":"영상 초안";const d=asDeliver(isC?wf.conti:wf.video);if(!d)return `<div ${P}><div class="bg-amber-50 rounded-2xl p-4 text-[15px] text-amber-800 flex items-center gap-3"><i data-lucide="clock" class="w-5 h-5 flex-shrink-0"></i>크놀AD의 ${lbl} 전달을 기다리고 있습니다.</div></div>`;return `<div ${P}><div class="bg-blue-soft rounded-2xl p-5"><p class="text-[13px] font-bold text-blue mb-1">${lbl} 전달 도착</p>${d.title?`<p class="text-[19px] font-bold text-g900 mb-2">${esc(d.title)}</p>`:""}${d.text?`<p class="text-[16px] text-g700 whitespace-pre-wrap leading-relaxed mb-3">${esc(d.text)}</p>`:""}${(d.fileUrl||d.link)?`<div class="flex gap-2 flex-wrap">${d.fileUrl?`<button onclick="openLink('${esc(d.fileUrl)}')" class="${BTN_GHOST} text-[13px] px-4 py-2.5"><i data-lucide="paperclip" class="w-4 h-4"></i>첨부파일 열기 ↗</button>`:""}${d.link?`<button onclick="openLink('${esc(d.link)}')" class="${BTN_GHOST} text-[13px] px-4 py-2.5"><i data-lucide="link" class="w-4 h-4"></i>링크 열기 ↗</button>`:""}</div>`:""}</div><textarea id="wfFb" rows="3" placeholder="수정 요청 사항을 입력하세요 (선택)" class="${INPUT} resize-none text-[16px]"></textarea><div class="flex gap-2"><button onclick="wfReqEdit()" class="${BTN_GHOST} flex-1">수정 요청</button><button onclick="wfConfirm()" class="${BTN} flex-1">컨펌하고 다음 →</button></div></div>`;}
return "";}
function wfStepper(step){const S7=[["문의","message-circle"],["자료","upload"],["콘티","pen-tool"],["콘티 컨펌","badge-check"],["영상","clapperboard"],["영상 컨펌","badge-check"],["완료","party-popper"]];return `<div class="flex items-center justify-between overflow-x-auto pb-1">${S7.map((st,i)=>{const idx=i+1;const done=idx<step,act=idx===step||(step>=7&&i===6);return `${i>0?`<div class="h-[3px] flex-1 min-w-[12px] mx-1 rounded-full ${idx<step||step>=7?"bg-blue":idx===step?"bg-blue/40":"bg-g200"}"></div>`:""}<div class="flex flex-col items-center gap-1.5 flex-shrink-0"><div class="w-10 h-10 rounded-full grid place-items-center flex-shrink-0 ${done||act?"text-white":"bg-g100 text-g400"}" ${done?'style="background:#10b981"':act?'style="background:#3182F6"':''}>${done?'<i data-lucide="check" class="w-5 h-5"></i>':`<i data-lucide="${st[1]}" class="w-[18px] h-[18px]"></i>`}</div><span class="text-[11px] font-bold whitespace-nowrap ${act?"text-blue":done?"text-g700":"text-g400"}">${st[0]}</span></div>`;}).join("")}</div>`;}
