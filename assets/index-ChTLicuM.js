var H=Object.defineProperty;var q=(e,t,s)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>q(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const C=()=>{const e=new Set;return{subscribe:n=>e.add(n),notify:()=>e.forEach(n=>n())}},B=(e,t)=>{const{subscribe:s,notify:n}=C();let o={...e};const l=m=>{o={...o,...m},n()},i=()=>({...o}),c=Object.fromEntries(Object.entries(t).map(([m,P])=>[m,(...F)=>l(P(i(),...F))]));return{getState:i,setState:l,subscribe:s,actions:c}},T=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)}),$="/front_5th_chapter1-2",G=e=>{const{subscribe:t,notify:s}=C(),n=()=>window.location.pathname,o=()=>e[n()],l=i=>{window.history.pushState(null,null,$+i),s()};return window.addEventListener("popstate",()=>s()),{get path(){return n()},push:l,subscribe:t,getTarget:o}};function r(e,t,...s){const n=s.flat(1/0).filter(o=>o===0||!!o);return{type:e,props:t,children:n}}const u=new Map,v=new Set;function I(e){u.forEach((t,s)=>{v.has(s)||(e.addEventListener(s,n=>{let o=n.target;for(;o&&o!==e&&(t.has(o)&&[...t.get(o)].forEach(i=>{i(n)}),!n.cancelBubble);)o=o.parentNode},!1),v.add(s))})}function U(e,t,s){u.has(t)||(u.set(t,new Map),document.body&&I(document.body));const n=u.get(t);n.has(e)||n.set(e,[]);const o=n.get(e);o.indexOf(s)===-1&&o.push(s)}function V(e,t,s){if(!u.has(t))return;const n=u.get(t);if(!n.has(e))return;const o=n.get(e),l=o.indexOf(s);l>-1&&(o.splice(l,1),o.length===0&&n.delete(e))}function d(e){if(Array.isArray(e)){const s=document.createDocumentFragment();return e.forEach(n=>{s.appendChild(d(n))}),s}if(typeof e=="boolean"||e==null)return document.createTextNode("");if(typeof e!="object")return document.createTextNode(e);if(typeof e.type=="function")throw new Error("컴포넌트를 createElement로 생성할 수 없습니다.");const t=document.createElement(e.type);return e.props&&W(t,e.props),e.children&&(Array.isArray(e.children)?e.children.map(d).forEach(n=>t.appendChild(n)):t.appendChild(d(e.children))),t}function W(e,t={}){Object.entries(t).forEach(([s,n])=>{if(s.startsWith("on")&&typeof n=="function"){const o=s.toLowerCase().substring(2);U(e,o,n);return}if(s==="className"){e.setAttribute("class",n);return}n===!0?e.setAttribute(s,""):n!==!1&&n!==null&&n!==void 0&&e.setAttribute(s,n)})}function E(e){if(typeof e=="boolean"||e==null)return"";if(typeof e!="object")return String(e);if(typeof e.type=="function"){const t=e.type,s={...e.props,children:e.children||[]};return E(t(s))}if(typeof e.type=="string"){const{type:t,props:s}=e,n=(e.children||[]).map(o=>E(o)).filter(o=>o!=="");return{type:t,props:s,children:n}}return e}function _(e,t,s){for(const n in s)if(n.startsWith("on")&&typeof s[n]=="function"){const o=n.toLowerCase().substring(2);(!(n in t)||t[n]!==s[n])&&V(e,o,s[n])}else n in t||(n==="className"?e.removeAttribute("class"):n!=="children"&&e.removeAttribute(n));for(const n in t)if(t[n]!==s[n])if(n.startsWith("on")&&typeof s[n]=="function"){const o=n.toLowerCase().substring(2);U(e,o,t[n])}else n==="className"?e.setAttribute("class",t[n]):n!=="children"&&(t[n]===!0?e.setAttribute(n,""):t[n]!==!1&&t[n]!==null&&t[n]!==void 0?e.setAttribute(n,t[n]):e.removeAttribute(n))}function D(e,t,s,n=0){if(!e)return;if(!s){e.appendChild(d(t));return}if(!t){e.removeChild(e.childNodes[n]);return}if(s.type!==t.type){e.replaceChild(d(t),e.childNodes[n]);return}if(typeof s=="string"&&typeof t=="string"){s!==t&&(e.childNodes[n].textContent=t);return}_(e.childNodes[n],t.props||{},s.props||{});const o=t.children||[],l=s.children||[],i=Math.max(l.length,o.length);for(let c=0;c<i;c++)D(e.childNodes[n],o[c],l[c],c)}function z(e,t){const s=E(e),n=t.__oldNode;if(n)D(t,s,n);else{const o=d(s);t.innerHTML="",t.appendChild(o),I(t)}t.__oldNode=s}const h=T("user"),J=1e3,g=J*60,K=g*60,a=B({currentUser:h.get(),loggedIn:!!h.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*g,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*g,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*g,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*g,content:"주말에 등산 가실 minutes 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*K,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return h.reset(),{...e,currentUser:null,loggedIn:!1}},togglePostLike(e,t){const s=e.posts.map(n=>{if(n.id===t){const o=e.currentUser.username,i=n.likeUsers.includes(o)?n.likeUsers.filter(c=>c!==o):[...n.likeUsers,o];return{...n,likeUsers:i}}return n});return{...e,posts:s}},addPost(e,t){const n=[{id:e.posts.length>0?Math.max(...e.posts.map(o=>o.id))+1:1,author:e.currentUser.username,time:Date.now(),content:t.trim(),likeUsers:[]},...e.posts];return{...e,posts:n}}}),R=1e3,L=R*60,k=L*60,Y=k*24,Q=e=>{const t=Date.now()-e;return t<L?"방금 전":t<k?`${Math.floor(t/L)}분 전`:t<Y?`${Math.floor(t/k)}시간 전`:new Date(e).toLocaleString()},X=({author:e,time:t,content:s,likeUsers:n,activationLike:o=!1,id:l})=>{const{loggedIn:i}=a.getState(),c=()=>{if(i)a.actions.togglePostLike(l);else{alert("로그인 후 이용해주세요");return}};return r("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},r("div",{className:"flex items-center mb-2"},r("div",null,r("div",{className:"font-bold"},e),r("div",{className:"text-gray-500 text-sm"},Q(t)))),r("p",null,s),r("div",{className:"mt-2 flex justify-between text-gray-500"},r("span",{className:`like-button cursor-pointer${o?" text-blue-500":""}`,onClick:c},"좋아요 ",n.length),r("span",null,"댓글"),r("span",null,"공유")))},Z=()=>{const{loggedIn:e}=a.getState();return r("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},r("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),r("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:()=>{const s=document.getElementById("post-content"),n=s.value;if(!n||n.trim()===""){alert("내용을 입력해주세요.");return}if(e)a.actions.addPost(n),s.value="";else{alert("로그인 후 이용해주세요.");return}}},"게시"))},O=()=>r("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},r("h1",{className:"text-2xl font-bold"},"항해플러스")),j=()=>r("footer",{className:"bg-gray-200 p-4 text-center"},r("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),f={value:null,get(){return this.value},set(e){this.value=e}},N=e=>window.location.pathname===e?"text-blue-600 font-bold":"text-gray-600";function S({onClick:e,children:t,...s}){return r("a",{onClick:o=>{o.preventDefault(),e==null||e(),f.get().push(o.target.href.replace(window.location.origin,""))},...s},t)}const M=()=>{const{loggedIn:e}=a.getState(),{logout:t}=a.actions;return r("nav",{className:"bg-white shadow-md p-2 sticky top-14"},r("ul",{className:"flex justify-around"},r("li",null,r(S,{href:"/",className:N("/")},"홈")),!e&&r("li",null,r(S,{href:"/login",className:N("/login")},"로그인")),e&&r("li",null,r(S,{href:"/profile",className:N("/profile")},"프로필")),e&&r("li",null,r("a",{href:"#",id:"logout",className:"text-gray-600",onClick:s=>{s.preventDefault(),t()}},"로그아웃"))))},ee=()=>{const{loggedIn:e,posts:t,currentUser:s}=a.getState();return r("div",{className:"bg-gray-100 min-h-screen flex justify-center"},r("div",{className:"max-w-md w-full"},r(O,null),r(M,null),r("main",{className:"p-4"},e&&r(Z,null),r("div",{id:"posts-container",className:"space-y-4"},[...t].sort((n,o)=>o.time-n.time).map(n=>{const o=n.likeUsers.includes(s==null?void 0:s.username);return r(X,{...n,activationLike:o})}))),r(j,null)))};function te(e){const t={username:e,email:"",bio:""};a.setState({currentUser:t,loggedIn:!0}),h.set(t)}const ne=()=>r("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},r("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},r("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),r("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const s=document.getElementById("username").value;te(s)}},r("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),r("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),r("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),r("div",{className:"mt-4 text-center"},r("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),r("hr",{className:"my-6"}),r("div",{className:"text-center"},r("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),se=()=>r("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},r("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},r("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),r("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),r("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),r("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),r("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function re(e){const t={...a.getState().currentUser,...e};a.setState({currentUser:t}),h.set(t),alert("프로필이 업데이트되었습니다.")}const oe=()=>{const{loggedIn:e,currentUser:t}=a.getState(),{username:s="",email:n="",bio:o=""}=t??{};return r("div",{className:"bg-gray-100 min-h-screen flex justify-center"},r("div",{className:"max-w-md w-full"},r(O,null),r(M,{loggedIn:e}),r("main",{className:"p-4"},r("div",{className:"bg-white p-8 rounded-lg shadow-md"},r("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),r("form",{id:"profile-form",onSubmit:i=>{i.preventDefault();const c=new FormData(i.target),m=Object.fromEntries(c);re(m)}},r("div",{className:"mb-4"},r("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),r("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:s,required:!0})),r("div",{className:"mb-4"},r("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),r("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:n,required:!0})),r("div",{className:"mb-6"},r("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),r("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},o)),r("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),r(j,null)))},y=class y extends Error{constructor(){super(y.MESSAGE)}};w(y,"MESSAGE","ForbiddenError");let p=y;const x=class x extends Error{constructor(){super(x.MESSAGE)}};w(x,"MESSAGE","UnauthorizedError");let b=x;function A(){const e=f.get().getTarget()??se,t=document.querySelector("#root");try{z(r(e,null),t)}catch(s){if(s instanceof p){f.get().push("/");return}if(s instanceof b){f.get().push("/login");return}console.error(s)}}f.set(G({"/":ee,"/login":()=>{const{loggedIn:e}=a.getState();if(e)throw new p;return r(ne,null)},"/profile":()=>{const{loggedIn:e}=a.getState();if(!e)throw new b;return r(oe,null)}}));function le(){f.get().subscribe(A),a.subscribe(A),A()}le();
