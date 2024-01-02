"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{4649:function(e,a,l){l.r(a),l.d(a,{default:function(){return B}});var s=l(7437),n=l(2265);l(1713);var r=l(3023),t=l.n(r),i=l(6926),c=l.n(i),d=l(4943),o=l.n(d);let p={Red:"#d10000",Yellow:"#ffff37",Blue:"#260c88",Green:"#52f114",Black:"#181818"},m=e=>"Black"===e,x=t()(function(e){let a=e.demand,l=e.players.map(e=>({[e.name]:0})).reduce((e,a)=>({...e,...a}));if(0===a)return{sales:l};let s=c()(e.players,e=>100*e.appeal+(e.is_importer?0:1)),n=Object.keys(s).toSorted((e,a)=>Number(a)-Number(e)),r=[],t=s[n[0]][0].appeal;for(let e of o()(t+1).toReversed()){for(let t of n){if(s[t][0].appeal<e)continue;let n=s[t].filter(e=>l[e.name]<(e.supply?Math.min(e.appeal,e.supply):e.appeal));for(let e of n)l[e.name]++;if(a<n.length?(r=n,a=0):a-=n.length,!a)break}if(!a)break}return r.filter(e=>!e.is_importer).length>1?{sales:l,ties:r.map(e=>e.name)}:{sales:l}},e=>[e.name,e.demand,...e.players.flatMap(e=>[e.appeal,e.supply])].join("|"));l(6655),l(7013);var h=e=>{let{children:a,pos:l,onClick:r=()=>{}}=e,[t,i]=(0,n.useState)((0,s.jsx)(s.Fragment,{}));return(0,s.jsxs)("div",{className:"_1lqnirb0",style:{justifyContent:"left"==l?"start":"end"},onClick:e=>{r(),i((0,s.jsx)("div",{className:"_1lqnirb2"},Date.now().toString()))},children:[(0,s.jsx)("span",{className:"_1lqnirb3",children:a}),t]})},u=l(9135).Z,j=e=>{let{value:a,onUpdate:l,maskZero:n,style:r={}}=e;return(0,s.jsxs)(u,{className:"ykw8q31",style:r,xs:4,children:[(0,s.jsx)(h,{pos:"left",onClick:()=>a>0&&l(a-1),children:"-"}),(0,s.jsx)(h,{pos:"right",onClick:()=>l(a+1),children:"+"}),(0,s.jsx)(u,{display:"flex",justifyContent:"center",alignItems:"center",className:"ykw8q30",children:void 0!==n&&0==a?n:a})]})};l(3486);var y=e=>{let a,{player:l,sales:n,isTied:r=!1,onUpdate:t}=e;return(0,s.jsxs)(u,{container:!0,marginTop:"0.5em",style:{backgroundColor:l.color,color:.299*parseInt((a=l.color.replace(/^#/,"")).substring(0,2),16)+.587*parseInt(a.substring(2,4),16)+.114*parseInt(a.substring(4,6),16)>128?"#0c0c0c":"white"},className:"md6qqc5",xs:12,children:[(0,s.jsx)(u,{className:"md6qqc2 md6qqc0",xs:1,children:(0,s.jsx)("div",{className:"md6qqc4 md6qqc1",children:l.name})}),(0,s.jsx)(j,{value:l.appeal,onUpdate:e=>t({...l,appeal:e})}),l.is_importer?(0,s.jsx)(u,{xs:7}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{value:l.supply,onUpdate:e=>t({...l,supply:e}),maskZero:"-",style:{borderLeft:"2px solid rgba(0,0,0,0.3)"}}),(0,s.jsxs)(u,{xs:r?2:3,display:"flex",justifyContent:"center",alignItems:"center",className:"md6qqc6",children:[n,"/",(l.supply>0?l.supply:l.appeal)-n]}),r?(0,s.jsx)(u,{xs:.5,xsOffset:.5,className:"md6qqc3 md6qqc0",children:(0,s.jsx)("div",{className:"md6qqc1",children:"Tied"})}):null]})]})},f=l(33);l(6006);var g=e=>{let{value:a,max:l,onUpdate:n}=e;return(0,s.jsxs)(u,{container:!0,xs:12,className:"_8hv7zq0",children:[(0,s.jsx)(u,{xs:12,children:"Demand"}),(0,s.jsxs)(u,{container:!0,xs:12,alignItems:"center",justifyContent:"space-between",children:[(0,s.jsx)(u,{xs:10,style:{paddingRight:"1em"},children:(0,s.jsx)(f.ZP,{step:1,value:a,min:0,max:l,onChange:(e,a)=>n(a),style:{verticalAlign:"middle"}})}),(0,s.jsx)(u,{display:"flex",alignItems:"center",justifyContent:"center",className:"_8hv7zq1",xs:2,children:a})]})]})};l(6298);var b=l(2653),v=l(6493),q=l(7812),k=l(3285);l(1144);var C=()=>{let[e,a]=(0,n.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.Z,{size:"small",onClick:()=>a(!0),children:(0,s.jsx)(k.Z,{})}),(0,s.jsx)(v.Z,{open:e,onClose:()=>a(!1),children:(0,s.jsx)(q.Z,{className:"er5qov0",children:(0,s.jsx)(u,{display:"flex",justifyContent:"center",alignContent:"center",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Appeal calculator for"," ",(0,s.jsx)("a",{href:"https://boardgamegeek.com/boardgame/154825/arkwright",children:"Arkwright"}),"."]}),(0,s.jsxs)("p",{children:["Calculate the number of sales allocated to each player based on their current ",(0,s.jsx)("i",{children:"appeal"})," and ",(0,s.jsx)("i",{children:"supply"}),", and the"," ",(0,s.jsx)("i",{children:"demand"})," of the good."]}),(0,s.jsxs)("p",{children:["If ",(0,s.jsx)("i",{children:"supply"})," is not set (e.g. left as “",(0,s.jsx)("b",{children:"-"}),"”), it will default as equal to player’s"," ",(0,s.jsx)("i",{children:"appeal"}),"."]}),(0,s.jsxs)("p",{children:["If multiple players tie for sale allocation, all tied players will be awarded the sale. The calculator does not take"," ",(0,s.jsx)("i",{children:"quality"})," into account; players with higher good"," ",(0,s.jsx)("i",{children:"quality"})," should always win ties."]})]})})})})]})},N=e=>{let{good:a,onUpdate:l}=e,n=x(a),r=[...Array(a.players.length).keys()].map(e=>s=>l({...a,players:a.players.map((a,l)=>l===e?s:a)}));return(0,s.jsxs)(u,{container:!0,className:"_153acjr0",children:[(0,s.jsxs)(u,{container:!0,xs:12,alignItems:"end",children:[(0,s.jsx)(u,{display:"flex",justifyContent:"center",xs:1,children:(0,s.jsx)(C,{})}),(0,s.jsx)(u,{display:"flex",justifyContent:"center",xs:4,children:"Appeal"}),(0,s.jsx)(u,{display:"flex",justifyContent:"center",xs:4,children:"Supply"}),(0,s.jsx)(u,{display:"flex",justifyContent:"center",xs:3,children:"Sell/Store"})]}),a.players.map((e,a)=>{var l,t;return(0,s.jsx)(y,{player:e,sales:n.sales[e.name],isTied:(null!==(t=null===(l=n.ties)||void 0===l?void 0:l.findIndex(a=>a===e.name))&&void 0!==t?t:-1)>=0,onUpdate:r[a]},e.name)}),(0,s.jsx)(g,{max:a.maxDemand,value:a.demand,onUpdate:e=>{l({...a,demand:e})}})]})},w=l(200),_=l(2277),Z=l(3435),I=l(7370),D=l(361),S=l(6061),A=l(7445);let U=[{name:"Bread",maxDemand:20,color:"rgb(96, 53, 0)",icon:D.Z},{name:"Clothing",maxDemand:19,color:"#202020",icon:I.Z},{name:"Cutlery",maxDemand:18,color:"rgb(36, 9, 34)",icon:S.Z},{name:"Lamps",maxDemand:17,color:"rgb(3, 15, 30)",icon:A.Z}];var B=()=>{var e;let[a,l]=(0,Z.fP)(["arkwright"]),[r,t]=(0,n.useState)(null!==(e=a.arkwright)&&void 0!==e?e:U.map(e=>{var a,l;return a=e.name,l=e.maxDemand,{name:a,players:Object.keys(p).map(e=>({name:e,appeal:0,supply:0,color:p[e],is_importer:m(e)})),demand:0,maxDemand:l}})),i=U.map(e=>e.icon),c=U.map(e=>e.color),[d,o]=(0,n.useState)(0),x=e=>{l("arkwright",e),t(e)};return(0,s.jsxs)("main",{className:"_1kjl7gx0",style:{background:c[d]},children:[(0,s.jsx)(N,{good:r[d],onUpdate:e=>{x(r.map((a,l)=>l===d?e:a))}}),(0,s.jsx)(w.Z,{value:d,onChange:(e,a)=>o(a),"aria-label":"basic tabs example",variant:"fullWidth",children:r.map((e,a)=>{let l=i[a];return(0,s.jsx)(_.Z,{icon:(0,s.jsx)(l,{}),label:e.name},e.name)})})]})}}}]);