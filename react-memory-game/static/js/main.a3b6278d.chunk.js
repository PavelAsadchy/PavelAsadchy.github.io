(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(17),r=n.n(i),d=n(6),s=n(7),l=n(18),u=n.p+"/static/media/Portishead - Glory Box (minus).c2197c2a.mp3",o=n(8),m=n(9),j=n(11),b=n(1),p=function(e){var t=e.handleName,n=Object(a.useState)({name:"",valid:!1}),c=Object(s.a)(n,2),i=c[0],r=c[1],l=Object(a.useState)(!1),u=Object(s.a)(l,2),p=u[0],O=u[1];return Object(b.jsx)("div",{className:"login-wrapper",children:Object(b.jsx)(m.a,{noValidate:!0,validated:i.validated,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),i.valid?t(i.name):O(!0)},children:Object(b.jsxs)(m.a.Group,{children:[Object(b.jsx)(m.a.Label,{children:"Enter Your Name:"}),Object(b.jsxs)(m.a.Row,{children:[Object(b.jsx)(j.a,{xs:"auto",children:Object(b.jsx)(m.a.Control,{className:"login",type:"text",placeholder:"Your Nickname",onChange:function(e){var t=!!e.target.value;t&&(r(Object(d.a)(Object(d.a)({},i),{},{name:e.target.value,valid:t})),O(!1))},required:!0})}),Object(b.jsx)(j.a,{xs:"auto",children:Object(b.jsx)(o.a,{variant:"primary",type:"submit",children:"Submit"})})]}),Object(b.jsx)(m.a.Control.Feedback,{type:"invalid",style:p?{display:"block"}:{display:"none"},children:"Please, choose a username"})]})})})},O=n(19),f=function(e){var t=e.card,n=e.handleClick;return Object(b.jsx)("div",{className:"card card-blank","data-check":"false","data-name":t.name,style:{backgroundImage:"url(".concat(t.pic,")")},onClick:n})},h="card-blank",v="data-check",x="data-name",g=!1,y=function(e){var t=e.cards,n=e.endRound,c=Object(a.useState)({prev:null,current:null}),i=Object(s.a)(c,2),r=i[0],l=i[1];Object(a.useEffect)((function(){0===document.getElementsByClassName("card-blank").length&&n(!0)}));var u=function(e){"true"===e.getAttribute(v)?(e.setAttribute(v,"false"),e.classList.add(h)):(e.setAttribute(v,"true"),e.classList.remove(h))},o=function(){l({prev:null,current:null})},m=function(e){if(!g){var t,n,a=e.target;if("true"!==a.getAttribute(v))if("found"!==a.getAttribute(v))u(a),r.prev?(g=!0,t=r.prev,n=a,t.getAttribute(x)!==n.getAttribute(x)?(setTimeout((function(){u(r.prev),u(a),g=!1}),1500),o()):(r.prev.setAttribute(v,"found"),a.setAttribute(v,"found"),o(),g=!1)):l(Object(d.a)(Object(d.a)({},r),{},{prev:a,current:null}))}};return Object(b.jsx)("div",{className:t.length<=8?"card-list":"card-list-extended",children:t.map((function(e,t){return Object(b.jsx)(f,{card:e,handleClick:m},t)}))})},k=function(e){var t=e.endRound,n=e.endGame,c=e.time,i=Object(a.useState)(c),r=Object(s.a)(i,2),d=r[0],l=r[1];return Object(a.useEffect)((function(){t||(0===d?n(!0):d>0&&setTimeout((function(){l(d-1)}),1e3))}),[d]),Object(b.jsxs)("div",{className:"timer",children:[Object(b.jsx)("span",{children:"Timer: "}),Object(b.jsx)("span",{children:d})]})},N=function(e){var t=e.name,n=e.round,a=e.endRound,c=e.endGame,i=e.time;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:["Round: ",n]}),Object(b.jsxs)("div",{children:["Player: ",t]}),Object(b.jsx)("div",{children:Object(b.jsx)(k,{endGame:c,time:i,endRound:a})})]})},S=function(e){var t=e.setNextRound;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"Well done, go to next round!"}),Object(b.jsx)(o.a,{variant:"primary",onClick:function(){return t(!0)},children:"I'm ready"})]})},R=function(e){var t=e.newGame;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"You've played well!"}),Object(b.jsx)(o.a,{onClick:function(){return t(!0)},children:"Try again"})]})},A=[{pic:n.p+"react-memory-game/static/media/BlueScull.ac944ebd.png",name:"BlueScull",flipped:!1},{pic:n.p+"react-memory-game/static/media/CreepyToy.cf17cfea.png",name:"CreepyToy",flipped:!1},{pic:n.p+"react-memory-game/static/media/Franc.9b2bb64d.png",name:"Franc",flipped:!1},{pic:n.p+"react-memory-game/static/media/FriendlyMonster.2f747a27.png",name:"FriendlyMonster",flipped:!1},{pic:n.p+"react-memory-game/static/media/KingScull.e72a1570.png",name:"KingScull",flipped:!1},{pic:n.p+"react-memory-game/static/media/LaMuerte.2693740f.png",name:"LaMuerte",flipped:!1},{pic:n.p+"react-memory-game/static/media/MexicanScull.1736cac2.png",name:"MexicanScull",flipped:!1},{pic:n.p+"react-memory-game/static/media/Pumpkin.b7b38c50.png",name:"Pumpkin",flipped:!1},{pic:n.p+"react-memory-game/static/media/PumpkinAngry.f686640b.png",name:"PumpkinAngry",flipped:!1},{pic:n.p+"react-memory-game/static/media/Skeleton.08a54eec.png",name:"Skeleton",flipped:!1},{pic:n.p+"react-memory-game/static/media/Vampire.5f71a27b.png",name:"Vampire",flipped:!1},{pic:n.p+"react-memory-game/static/media/Zombie.9d70c3b9.png",name:"Zombie",flipped:!1},{pic:n.p+"react-memory-game/static/media/ZombieKid.82c76aef.png",flipped:!1}],C=function(e){var t=e.name,n=Object(a.useState)({round:1,endRound:!1,endGame:!1,time:60}),c=Object(s.a)(n,2),i=c[0],r=c[1],l=0+Math.pow(2,i.round),u=A.slice(0,l),o=u.concat(Object(O.a)(u));!function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}(o);var m=function(e){if(e){var t=document.getElementsByClassName("card");Array.from(t).forEach((function(e){e.classList.add("card-blank"),e.setAttribute(v,"false")}))}};return Object(b.jsxs)("div",{className:"game",children:[i.endRound?Object(b.jsx)("div",{className:"end-round",children:Object(b.jsx)(S,{setNextRound:function(e){e&&(r(Object(d.a)(Object(d.a)({},i),{},{round:i.round+1,endRound:!1})),m(!0))}})}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(N,{name:t,round:i.round,time:i.time,endRound:i.endRound,endGame:function(e){e&&(r(Object(d.a)(Object(d.a)({},i),{},{endGame:!0,time:60})),m(!0))}})}),Object(b.jsx)("div",{className:"gameplay",children:Object(b.jsx)(y,{cards:o,endRound:function(e){e&&r(Object(d.a)(Object(d.a)({},i),{},{endRound:!0}))}})})]}),i.endGame?Object(b.jsx)("div",{className:"end-game",children:Object(b.jsx)(R,{newGame:function(e){e&&r(Object(d.a)(Object(d.a)({},i),{},{round:1,endRound:!1,endGame:!1,time:60}))}})}):null]})};n(28);var w=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({showLogin:!0,showgame:!1,name:null,score:0}),r=Object(s.a)(i,2),m=r[0],j=r[1],O=Object(l.a)(u),f=Object(s.a)(O,2),h=f[0],v=f[1].stop;return Object(b.jsxs)("div",{children:[Object(b.jsx)(o.a,{className:"sound",onClick:function(){n?v():h(),c(!n)},children:Object(b.jsx)("i",{className:n?"bi bi-volume-up":"bi bi-volume-mute"})}),m.showLogin?Object(b.jsx)(p,{handleName:function(e){j(Object(d.a)(Object(d.a)({},m),{},{showLogin:!1,name:e}))}}):Object(b.jsx)(C,{name:m.name})]})};n(29);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a3b6278d.chunk.js.map
