(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1125:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return it}));var c=n(15),r=n(0),a=n(7),i=n(2),s=n(18),o=n(183),b=n(3),u=n.n(b),j=n(206);function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(j.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,r=function(){};return{s:r,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}var d,O,h,p,x,f,g,m,v,w,S,y,k,z,H,V,A,N,E,C,L,Q,T,P,I,D,U,F,W=n(12),R=n(16),Z=n(63),B=n(31),G=n(9),$=n(11),M=n.n($),q=n(56),J=n(19),_=n(108),K=n(159),X=n(137),Y=function(){var e=Object(r.useState)([]),t=Object(R.a)(e,2),n=t[0],c=t[1],a=Object(B.c)().account,i=Object(X.a)().fastRefresh;return Object(r.useEffect)((function(){a&&function(){var e=Object(W.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.a.map((function(e){return{address:Object(J.m)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(q.a)(_,t);case 3:n=e.sent,r=K.a.map((function(e,t){return Object(G.a)(Object(G.a)({},e),{},{balance:new M.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,i]),n},ee=n(44),te=n(111),ne=function(){var e=Object(r.useState)([]),t=Object(R.a)(e,2),n=t[0],c=t[1],a=Object(B.c)().account,i=Object(X.a)().fastRefresh;return Object(r.useEffect)((function(){a&&function(){var e=Object(W.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.a.map((function(e){return{address:Object(J.m)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(q.a)(_,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,i]),n},ce=n(28),re=n(27),ae=n(867),ie=n(290),se=n(1),oe=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,s=e.lineHeight,o=void 0===s?"1":s,b=e.prefix,u=void 0===b?"":b,j=e.bold,l=void 0===j||j,d=e.color,O=void 0===d?"text":d,h=Object(ie.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),p=h.countUp,x=h.update,f=Object(r.useRef)(x);return Object(r.useEffect)((function(){f.current(t)}),[t,f]),Object(se.jsxs)(i.Nb,{bold:l,fontSize:a,style:{lineHeight:o},color:O,children:[p,u]})},be=function(e){return Object(se.jsx)(oe,Object(G.a)({fontSize:"14px",lineHeight:"1.1",color:"textDisabled",prefix:"HUF",bold:!1,decimals:0},e))},ue=n(874),je=a.e.div(d||(d=Object(c.a)(["\n  margin-bottom: 24px;\n"]))),le=function(){var e=Object(s.b)().t,t=Object(B.c)().account,n=ne().reduce((function(e,t){var n=new M.a(t);return n.eq(0)?e:e+n.div(re.j).toNumber()}),0),c=Object(ce.G)(),r=new M.a(n).multipliedBy(c).toNumber();return t?Object(se.jsxs)(je,{children:[Object(se.jsx)(ae.a,{value:n,lineHeight:"1.5"}),c.gt(0)&&Object(se.jsx)(ue.a,{value:r}),c.gt(0)&&Object(se.jsx)(be,{value:344.611*r})]}):Object(se.jsx)(i.Nb,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},de=n(864),Oe=n(21),he=function(){var e=Object(s.b)().t,t=Object(de.a)(Object(J.d)()).balance,n=Object(ce.G)(),c=new $.BigNumber(Object(Oe.c)(t)).multipliedBy(n).toNumber();return Object(B.c)().account?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ae.a,{value:Object(Oe.c)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.gt(0)?Object(se.jsx)(ue.a,{value:c}):Object(se.jsx)("br",{}),Object(se.jsx)(be,{value:357.95*c})]}):Object(se.jsx)(i.Nb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},pe=Object(a.e)(i.s)(O||(O=Object(c.a)(["\n background-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n  min-height: 376px;\n   opacity: 0.92;\n\n    ) ;\n\n "]))),xe=a.e.div(h||(h=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),fe=a.e.img(p||(p=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),ge=a.e.div(x||(x=Object(c.a)(["\n  color: ",";\n  font-size: 17px;\n"])),(function(e){return e.theme.colors.textSubtle})),me=a.e.div(f||(f=Object(c.a)(["\n  margin-top: 24px;\n"]))),ve=function(){var e=Object(r.useState)(!1),t=Object(R.a)(e,2),n=t[0],c=t[1],a=Object(B.c)().account,o=Object(s.b)().t,b=Y(),j=Object(ee.n)(),d=b.filter((function(e){return e.balance.toNumber()>0})),O=Object(r.useCallback)(Object(W.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),t=l(d),e.prev=2,t.s();case 4:if((n=t.n()).done){e.next=15;break}return r=n.value,e.prev=6,e.next=9,Object(Z.b)(j,r.pid,a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),t.e(e.t1);case 20:return e.prev=20,t.f(),e.finish(20);case 23:c(!1);case 24:case"end":return e.stop()}}),e,null,[[2,17,20,23],[6,11]])}))),[a,d,j]);return Object(se.jsx)(pe,{children:Object(se.jsxs)(i.t,{children:[Object(se.jsx)(i.Q,{scale:"xl",mb:"15px",color:"secondary",children:o("Mining & Staking")}),Object(se.jsx)(fe,{src:"/images/tokens/VIZSLASWAP.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(se.jsxs)(xe,{children:[Object(se.jsxs)(ge,{children:[o("Vizslaswap to Harvest"),":"]}),Object(se.jsx)(le,{})]}),Object(se.jsxs)(xe,{children:[Object(se.jsxs)(ge,{children:[o("Vizslaswap in Wallet"),":"]}),Object(se.jsx)(he,{})]}),Object(se.jsx)(me,{children:a?Object(se.jsx)(i.o,{id:"harvest-all",disabled:d.length<=0||n,onClick:O,width:"100%",children:n?o("Collecting VizslaSwap"):o("Harvest all (%count%)",{count:d.length})}):Object(se.jsx)(te.a,{width:"100%"})})]})})},we=n(194),Se=Object(a.e)(i.s)(g||(g=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.92;\n  max-height: 100%;\n"]))),ye=a.e.img(m||(m=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),ke=a.e.div(v||(v=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ze=a.e.div(w||(w=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),He=function(){var e=Object(s.b)().t,t=Object(de.d)(),n=Object(de.b)(Object(J.d)()),c=Object(ce.G)(),r=t?t.minus(n):new we.a(0),a=(Object(Oe.c)(r),c.times(r),t?t.minus(0):new we.a(0)),o=c.times(a),b=c.times(o);c.times(344.61).times(a);return Object(se.jsx)(Se,{children:Object(se.jsxs)(i.t,{children:[Object(se.jsx)(ze,{children:e("VIZSLASWAP Stats")}),Object(se.jsx)(ye,{src:"/images/tokens/VIZSLASWAP.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(se.jsxs)(ke,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Price")}),Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(b),decimals:8,prefix:"$"})]}),Object(se.jsxs)(ke,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Market Cap")}),Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(o),decimals:0,prefix:"$"})]}),Object(se.jsxs)(ke,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Total Supply")}),t&&Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(t),decimals:0})]}),Object(se.jsxs)(ke,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Total Burned")}),Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(n),decimals:0})]}),Object(se.jsxs)(ke,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("VIZSLASWAP/block")}),Object(se.jsx)(ae.a,{fontSize:"17px",decimals:0,value:0})]}),Object(se.jsxs)(ke,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Active Pools")}),Object(se.jsx)(ae.a,{fontSize:"17px",decimals:0,value:0})]})]})})},Ve=Object(a.e)(i.s)(S||(S=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.92;\n  max-height: 100%;\n"]))),Ae=a.e.img(y||(y=Object(c.a)(["\nmargin-bottom: 10px;\n\n"]))),Ne=a.e.div(k||(k=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Ee=a.e.div(z||(z=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),Ce=function(){var e=Object(s.b)().t,t=Object(de.d)(),n=Object(de.b)(Object(J.i)()).times(1e9),c=Object(ce.G)(),r=t?t.minus(n):new we.a(0),a=(Object(Oe.c)(r),t?t.minus(0):new we.a(0)),o=c.times(a),b=(c.times(o),Object(ce.H)().times(1e18)),u=b.times(1e19);b.times(344.61).times(1e19);return Object(se.jsx)(Ve,{children:Object(se.jsxs)(i.t,{children:[Object(se.jsx)(Ee,{children:e("HVI Stats")}),Object(se.jsx)(Ae,{src:"/images/tokens/hvi.png",alt:"VIZSLASWAP Logo",width:64,height:64}),Object(se.jsxs)(Ne,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("HVI price")}),Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(b),decimals:17,prefix:"$"})]}),Object(se.jsxs)(Ne,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Market Cap")}),Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(u),decimals:0,prefix:"$"})]}),Object(se.jsxs)(Ne,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Total Supply")}),t&&Object(se.jsx)(ae.a,{fontSize:"17px",value:1e19,decimals:0})]}),Object(se.jsxs)(Ne,{children:[Object(se.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("Total Burned")}),Object(se.jsx)(ae.a,{fontSize:"17px",value:Object(Oe.c)(n),decimals:0})]})]})})},Le=Object(a.e)(i.s)(H||(H=Object(c.a)(["\n  opacity: 0.92;\n  font-size: 40px;\n  max-width: 100%;\n height: 100%;\n color: ",";\n font-weight: 900;\n background-color: rgb(0,0,0);\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.textSubtle})),Qe=a.e.div(V||(V=Object(c.a)(["\n  align-items: center;\n  font-size: 38px;\n  overflow: scroll;\n  max-width: 100%;\n height: 330px;\n color: ",";\n font-weight: 900;\n bottom: 10px;\n margin-top: 10px;\n"])),(function(e){return e.theme.colors.textSubtle})),Te=(a.e.div(A||(A=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(e){return e.theme.colors.contrast})),a.e.div(N||(N=Object(c.a)(["\n font-size: 38px;\n margin-bottom: 20px;\n max-width: 100%;\n height: 100%;\n overflow: scroll;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),function(){var e=Object(s.b)().t,t=Object(de.d)(),n=Object(de.b)(Object(J.d)()),c=Object(ce.G)(),r=t?t.minus(n):new we.a(0);Object(Oe.c)(r),c.times(r);return Object(se.jsx)(Le,{children:Object(se.jsxs)(i.t,{children:[e("Announcements"),Object(se.jsxs)(Qe,{children:[Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1516008844824133633",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner11.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515953309076574211",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner10.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1513986221386747904",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner5.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515637080684220422",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner4.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515570905195421696",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner3.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1515012436968976387",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner-2.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514800749712056324",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner-3.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514574778639990785",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner-4.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514438388593606658",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner-5.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514302826922528768",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner-6.png",alt:"hvi",height:"auto",width:"100%"})]}),Object(se.jsxs)("a",{href:"https://twitter.com/HunVizslainu/status/1514075985993515009",target:"blank",children:[" ",Object(se.jsx)("img",{src:"/images/banner-7.png",alt:"hvi",height:"auto",width:"100%"})]})]})]})})}),Pe=Object(a.e)(i.s)(E||(E=Object(c.a)(["\n  align-items: center;\n  flex: 1; \n  opacity: 0.85;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 170px;\n      "]))),Ie=function(){var e=Object(s.b)().t,t=function(){var e=Object(r.useState)(null),t=Object(R.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=Object(W.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://openapi.debank.com/v1/protocol?id=vizslaswap");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),n=t?t.tvl.toLocaleString("en-US",{maximumFractionDigits:0}):null;return Object(se.jsx)(Pe,{children:Object(se.jsxs)(i.t,{children:[Object(se.jsx)(i.Q,{scale:"lg",mb:"0px",color:"secondary",children:e("Total Value Locked (TVL)")}),t?Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(i.Q,{scale:"xl",children:"$".concat(n)}),Object(se.jsx)(i.Nb,{color:"textSubtle",children:e("Across all LPs and VizslaSwap Pool")})]}):Object(se.jsx)(i.Db,{height:66})]})})},De=n(943),Ue=n.n(De),Fe=n(104),We=n(49),Re=n(112),Ze=n(304),Be=Object(a.f)(C||(C=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),Ge=Object(a.e)(i.s)(L||(L=Object(c.a)(["\nbackground: linear-gradient(\n  240deg,\n  rgb(0,0,0) 0%,\n    rgb(0,0,0) 10%,\n    rgb(0, 0, 0)20%,\n    rgb(13, 36, 34) 30%,\n    rgb(18, 48, 46) 40%,\n    rgb(34,89,84) 50%,\n    rgb(18, 48, 46)60%,\n    rgb(13, 36, 34) 70%,\n    rgb(0, 0, 0) 80%,\n    rgb(0,0,0) 90%,\n    rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  opacity: 0.88;\n  \n  "," {\n    margin: 0;\n    max-width: none;\n    \n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),Be,(function(e){return e.theme.mediaQueries.lg})),$e=Object(a.e)(i.Q).attrs({scale:"xl"})(Q||(Q=Object(c.a)(["\n  line-height: 44px;\n"]))),Me=function(){var e=Object(r.useState)(!0),t=Object(R.a)(e,2),n=t[0],c=t[1],a=Object(s.b)().t,o=Object(ce.f)().data,b=Object(ce.G)(),j=Object(We.b)();Object(r.useEffect)((function(){(function(){var e=Object(W.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(Object(Re.c)(Re.d.map((function(e){return e.pid}))));case 3:return e.prev=3,c(!1),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})));return function(){return e.apply(this,arguments)}})()()}),[j,c]);var l=Object(r.useMemo)((function(){if(b.gt(0)){var e=o.map((function(e){if(0!==e.pid&&"0X"!==e.multiplier&&e.lpTotalInQuoteToken&&e.quoteToken.busdPrice){var t=new M.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice);return Object(Ze.a)(new M.a(e.poolWeight),b,t)}return null})),t=Ue()(e);return null===t||void 0===t?void 0:t.toLocaleString("en-US",{maximumFractionDigits:2})}return null}),[b,o]),d=l||"-",O=a("Earn up to %highestApr% APR in Mining",{highestApr:d}).split(d),h=Object(R.a)(O,2),p=h[0],x=h[1];return Object(se.jsx)(Ge,{children:Object(se.jsx)(Fe.b,{exact:!0,activeClassName:"active",to:"/liquiditymining",id:"farm-apr-cta",children:Object(se.jsxs)(i.t,{children:[Object(se.jsx)(i.Q,{color:"secondary",scale:"lg",children:p}),Object(se.jsx)($e,{color:"text",children:l&&!n?"".concat(l,"%"):Object(se.jsx)(i.Db,{animation:"pulse",variant:"rect",height:"44px"})}),Object(se.jsxs)(i.P,{justifyContent:"space-between",children:[Object(se.jsx)(i.Q,{color:"secondary",scale:"lg",children:x}),Object(se.jsx)(i.e,{mt:30,color:"secondary"})]})]})})})},qe=n(204),Je=n.n(qe),_e=n(69),Ke=Object(a.f)(T||(T=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),Xe=Object(a.e)(i.s)(P||(P=Object(c.a)(["\nbackground: linear-gradient(\n  240deg,\n  rgb(0,0,0) 0%,\n    rgb(0,0,0) 10%,\n    rgb(0, 0, 0)20%,\n    rgb(13, 36, 34) 30%,\n    rgb(18, 48, 46) 40%,\n    rgb(34,89,84) 50%,\n    rgb(18, 48, 46)60%,\n    rgb(13, 36, 34) 70%,\n    rgb(0, 0, 0) 80%,\n    rgb(0,0,0) 90%,\n    rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),Ke,(function(e){return e.theme.mediaQueries.lg})),Ye=Object(a.e)(i.Q).attrs({scale:"xl"})(I||(I=Object(c.a)(["\n  line-height: 44px;\n"]))),et=_e.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("CAKE")})),tt=[Je()(et,["sortOrder","pid"],["desc","desc"]).slice(0,2).map((function(e){return e.earningToken.symbol}))].join(", "),nt=function(){var e=(0,Object(s.b)().t)("Earn %assets% in Pools",{assets:tt}).split(tt),t=Object(R.a)(e,2),n=t[0],c=t[1];return Object(se.jsx)(Xe,{children:Object(se.jsx)(Fe.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(se.jsxs)(i.t,{children:[Object(se.jsx)(i.Q,{color:"secondary",scale:"lg",children:n}),Object(se.jsx)(Ye,{color:"text",children:tt}),Object(se.jsxs)(i.P,{justifyContent:"space-between",children:[Object(se.jsx)(i.Q,{color:"secondary",scale:"lg",children:c}),Object(se.jsx)(i.e,{mt:30,color:"primary"})]})]})})})},ct=a.e.div(D||(D=Object(c.a)(["\nalign-items: center;\nbackground-repeat: no-repeat;\nbackground-position: top center;\nbackground-image: url('images/banner1.jpg');\nbackground-size: 100% 100%;\nopacity: 0.92;\nborder-radius: 25px;\ndisplay: flex;\njustify-content: center;\nflex-direction: column;\nmargin: auto;\nmargin-bottom: 24px;\nmargin-top: 0px;\npadding-top: 115px;\ntext-align: center;\n  "," {\n    height: 360px;\n    padding-top: 0;\n        background-position: left center, right center;\n }\n"])),(function(e){return e.theme.mediaQueries.lg})),rt=Object(a.e)(i.i)(U||(U=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),at=Object(a.e)(i.i)(F||(F=Object(c.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),it=function(){var e=Object(s.b)().t;return Object(se.jsxs)(o.a,{children:[Object(se.jsxs)(ct,{children:[Object(se.jsx)(i.Q,{as:"h1",scale:"xl",mb:"24px",color:"secondary",children:e("")}),Object(se.jsx)(i.Nb,{children:e("")})]}),Object(se.jsxs)("div",{children:[Object(se.jsxs)(rt,{children:[Object(se.jsx)(ve,{}),Object(se.jsx)(Te,{}),Object(se.jsx)(He,{}),Object(se.jsx)(Ce,{})]}),Object(se.jsxs)(at,{children:[Object(se.jsx)(Ie,{}),Object(se.jsx)(Me,{}),Object(se.jsx)(nt,{})]})]})]})}},864:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return m}));var c,r=n(3),a=n.n(r),i=n(9),s=n(12),o=n(16),b=n(0),u=n(11),j=n.n(u),l=n(31),d=n(33),O=n(23),h=n(55),p=n(137),x=n(291);!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(c||(c={}));var f=function(){var e=Object(p.a)().slowRefresh,t=Object(b.useState)(),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(b.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new j.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},g=function(e){var t=Object(b.useState)(O.d),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(p.a)().slowRefresh,u=Object(h.a)();return Object(b.useEffect)((function(){(function(){var t=Object(s.a)(a.a.mark((function t(){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(d.a)(e,u),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=t.sent,r(new j.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[u,e,i]),c},m=function(){var e=Object(b.useState)(O.d),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(l.c)().account,i=Object(x.a)(),u=i.lastUpdated,d=i.setLastUpdated,p=Object(h.a)();return Object(b.useEffect)((function(){r&&function(){var e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.eth.getBalance(r);case 2:t=e.sent,c(new j.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,p,u,c]),{balance:n,refresh:d}};t.a=function(e){var t=c.NOT_FETCHED,n=c.SUCCESS,r=c.FAILED,u=Object(b.useState)({balance:O.d,fetchStatus:t}),x=Object(o.a)(u,2),f=x[0],g=x[1],m=Object(h.a)(),v=Object(l.c)().account,w=Object(p.a)().fastRefresh;return Object(b.useEffect)((function(){v&&function(){var t=Object(s.a)(a.a.mark((function t(){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(d.a)(e,m),t.prev=1,t.next=4,c.methods.balanceOf(v).call();case 4:s=t.sent,g({balance:new j.a(s),fetchStatus:n}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),g((function(e){return Object(i.a)(Object(i.a)({},e),{},{fetchStatus:r})}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),[v,e,m,w,n,r]),f}},867:function(e,t,n){"use strict";var c=n(0),r=n(290),a=n(2),i=n(1);t.a=function(e){var t=e.value,n=e.decimals,s=e.fontSize,o=void 0===s?"40px":s,b=e.lineHeight,u=void 0===b?"1":b,j=e.prefix,l=void 0===j?"":j,d=e.bold,O=void 0===d||d,h=e.color,p=void 0===h?"text":h,x=Object(r.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),f=x.countUp,g=x.update,m=Object(c.useRef)(g);return Object(c.useEffect)((function(){m.current(t)}),[t,m]),Object(i.jsxs)(a.Nb,{bold:O,fontSize:o,style:{lineHeight:u},color:p,children:[l,f]})}},874:function(e,t,n){"use strict";var c=n(9),r=(n(0),n(867)),a=n(1);t.a=function(e){return Object(a.jsx)(r.a,Object(c.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},943:function(e,t,n){var c=n(469),r=n(470),a=n(131);e.exports=function(e){return e&&e.length?c(e,a,r):void 0}}}]);
//# sourceMappingURL=9.0d016b6f.chunk.js.map