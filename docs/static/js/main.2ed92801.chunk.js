(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(e,t,a){e.exports={text:"answer_text__1ovWX",freeze:"answer_freeze__2DD1l",inactive:"answer_inactive__3xims",correct:"answer_correct__2s9KG",selected:"answer_selected__1OWae",wrong:"answer_wrong__3Zg7M",disabled:"answer_disabled__2YeqE"}},11:function(e,t,a){e.exports={earned:"gameOver_earned__uq6cp",end:"gameOver_end__-5J41",total:"gameOver_total__li07p",lang:"gameOver_lang__2xchl",root:"gameOver_root__2qZBn",item:"gameOver_item__1xH9u"}},14:function(e,t,a){e.exports={ask:"gameStart_ask__29YxO",start:"gameStart_start__LaI7u",lang:"gameStart_lang__3jtBk",root:"gameStart_root__37_qB",hand:"gameStart_hand__NotsE",triangle:"gameStart_triangle__3XpU0"}},19:function(e,t,a){e.exports={inactive:"cash_inactive__3kGdE",root:"cash_root__1tCSC",prev:"cash_prev__2ke-7"}},39:function(e,t,a){"use strict";a.r(t),a.d(t,"StoreContext",(function(){return R}));var r=a(18),n=a.n(r),s=a(15),c=a(3),i=a(0),o=a(9),u=a.n(o),d=a(12),l=a(26),j=a(27),b=a(2),m=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var r,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://opentdb.com/api.php?amount=1&type=multiple","&difficulty=").concat(t,"&token=").concat(a,"&encode=base64"),e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:if((s=e.sent).results[0].correct_answer=atob(s.results[0].correct_answer),s.results[0].question=atob(s.results[0].question),s.results[0].incorrect_answers=s.results[0].incorrect_answers.map((function(e){return atob(e)})),0!==s.response_code){e.next=12;break}return e.abrupt("return",s);case 12:throw Error("apiQuestion...getAnswer Error");case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),v=function(e){for(var t=Math.ceil(4*Math.random()),a=0;a<t;a+=1)e.unshift(e.pop());return e};Object(b.c)({enforceActions:"always"});var f=function(){function e(){Object(l.a)(this,e),this.money=["$500","$1,000","$2,000","$4,000","$8,000","$16,000","$32,000","$64,000","$125,000","$250,000","$500,000","$1,000,000"],this.question="",this.answer=[],this.correct="",this.cash=0,this.difficulty=["easy","easy","easy","easy","medium","medium","medium","medium","hard","hard","hard","hard"],this.token="",this.gameOver=!1,this.width=0,Object(b.e)(this,{money:b.f,question:b.f,answer:b.f,correct:b.f,cash:b.f,difficulty:b.f,token:b.f,gameOver:b.f,width:b.f,setWidth:b.b,setNewData:b.b,toGameOver:b.b})}return Object(j.a)(e,[{key:"setWidth",value:function(e){this.width=e}},{key:"toGameOver",value:function(e){this.gameOver=e}},{key:"setNewData",value:function(e,t,a){this.correct=e.results[0].correct_answer,this.question=e.results[0].question,this.answer=t,this.cash=a}},{key:"getData",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(this.difficulty[t],this.token);case 3:(a=e.sent).results[0].incorrect_answers.push(a.results[0].correct_answer),r=v(a.results[0].incorrect_answers),this.setNewData(a,r,t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0===this.width&&(this.width=window.innerWidth),e.prev=1,e.next=4,m();case 4:if(0!==(t=e.sent).response_code){e.next=9;break}Object(b.g)((function(){a.token=t.token})),e.next=10;break;case 9:throw new Error("whf...getToken Error");case 10:this.getData(0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),p=a(16),g=a.p+"static/media/triangle.a728191a.png",O=a.p+"static/media/hand.76f053d9.svg",_=a(14),x=a.n(_),A=a(1),k=Object(p.a)((function(){var e=Object(i.useContext)(R);return Object(i.useEffect)((function(){}),[]),""===e.token&&e.getToken(),Object(A.jsxs)("div",{className:x.a.root,children:[Object(A.jsx)("div",{className:x.a.hand,children:Object(A.jsx)("img",{src:O,alt:"hand"})}),Object(A.jsxs)("div",{className:x.a.ask,children:[Object(A.jsx)("p",{children:"Who wants to be a millionaire?"}),Object(A.jsx)("div",{children:Object(A.jsx)(s.b,{to:"/game",children:Object(A.jsx)("button",{type:"button",className:x.a.start,children:"Start"})})})]}),Object(A.jsx)("button",{type:"button",className:x.a.lang,children:"eng"}),Object(A.jsx)("img",{className:x.a.triangle,src:g,alt:""})]})})),w=a(10),N=a.n(w),T=function(e,t){var a=e.currentTarget.innerText.slice(1);if(e.currentTarget.className="",e.currentTarget.offsetParent.classList.add(N.a.freeze),e.currentTarget.classList.add(N.a.selected),t.correct===a){var r=e.currentTarget;new Promise((function(e){setTimeout((function(){r.className="",r.classList.add(N.a.correct),e(r)}),1e3)})).then((function(){setTimeout((function(){11===t.cash?t.toGameOver(!0):(t.getData(t.cash+1),r.offsetParent.classList.remove(N.a.freeze))}),1e3)}))}else{var n=e.currentTarget;new Promise((function(e){setTimeout((function(){n.className="",n.classList.add(N.a.wrong),e("")}),1e3)})).then((function(){setTimeout((function(){t.toGameOver(!0)}),1e3)}))}},y=function(e){var t=e.answer,a=e.letter,r=e.index,n=Object(i.useContext)(R);return Object(A.jsx)("div",{className:N.a.root,children:Object(A.jsx)("div",{tabIndex:r+1,role:"button",className:N.a.inactive,onClick:function(e){return T(e,n)},onKeyDown:function(e){return"Tab"!==e.code?T(e,n):null},children:Object(A.jsxs)("div",{className:N.a.text,children:[Object(A.jsx)("span",{children:a}),Object(A.jsx)("span",{children:t})]})})})},D=a(4),P=a.n(D),S=a(19),L=a.n(S),z=function(e){var t=e.position,a=e.money;return Object(A.jsx)("div",{className:L.a.root,children:Object(A.jsxs)("div",{className:L.a.inactive,children:[Object(A.jsx)("img",{src:"active"===t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAAoCAMAAADDuhHXAAABI1BMVEUAAAD/qlX/gED/kkn/gED/kjf/hzz/jzX/ijf/jTb/iTT/jDn/iDX/izT/jjn/jDX/jTX/izj/izf/jDb/izb/jzz/kD//jzz/jzv/jj3/izj/kED/kkP/k0P/kkT/k0X/kkL/kUL/kkP/kkP/kD7/kUD/kkL/k0X/kUH/kUL/k0T/kUH/kUL/kUH/kD//kUD/j0D/kD//kEH/pGL/pGP/pWP/jz//jz7/p2f/jz7/mk//m1P/p2n/qGr/qWv/kkP/k0T/qGn/qWn/qmv/q23/vY7/vY3/0a7/0a//0rD/07P/1LP/0a//2Lz/2b3/izf/0a//0bD/0rH/4cz/5ND/6Nf/6dn/7uL/7+P/7+T/8Ob/9Oz/9e3/+PP/+fX//v3///996NI6AAAAT3RSTlMAAwQHCA4RIiUmJygrLC0+Q0RPUFFmbnJ0dYCcna6wscDBxsfNztvb3N3d3uHj7u7w8fHx8fHy8/P09PT09PT19fX19fX4+f39/f39/v7+sxQefAAAAAFiS0dEYMW3fBAAAAFpSURBVGje7ZvZWsIwEEZDrUtR3HBBEXdFUWoVRau4CwqKO4sCJu//FHrpA7RfJ3/mPMK5aE4mUyHCwJ5ayhVfACjmFpO20AVrzj96b3YVAN3m26GfsvTwPrxz/qWAaJe24zp4H3VrCoyqm6Dv3fGeFRx1z6HuvX/3XgHymB+g7T22UlaQVNZon7DpG4kpXt4tUPY+fdpToPyczdD1PnbZVrB8X01Q9T548KGA+dx3OGgioUYzbWLLZQVOZZVi2qSvJbp4kmkDHDSk0wY6aP6nzTgHDaeNAUFDNG0MCJrg02Y+ANYvpDni5e1GEM5YfFTi+VOj8y2KD1fOSdMmZXyB4pGBaa8hPCTjW5RZY2F+COG0MSRo+LGb08a0oOGFJl7hCy1oiK/w8dJqZDheHc+7BmvaQiTcKpr3h70RoQHxrVILSXvrZHNIaIGV8guvjQ6C9E7jqXA8q8nPZ3/YyUwW43fLbGayLxRFv8tp/Cge4zNuAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAAoCAMAAADDuhHXAAABCFBMVEUAAACqqv+/v7/b29vf39/IyNvS0tLS0trPz9bQ0NfR0djS0tnQ0NXR0dbS0tfS0trR0dnOztrPz9jPz9nQ0NnS0trR0drS0tnR0drR0drPz9fT09nT09rT09rU1NvU1NvT09rS0trT09vT09rS0trS0tnT09rT09vS0trS0trT09rS0trT09rS0trS0trS0trS0trT09ra2uDb2+DS0trS0tnb2+LR0dnW1t3W1t7b2+Ld3eLS0tvT09vc3OLd3eLd3ePk5Onk5Ojs7O/s7PDt7fDs7O/v7/Lw8PLQ0Njs7O/s7PDt7fDz8/X09Pb29vf29vj4+Pn5+fr7+/v8/P39/f3+/v////+r0EikAAAASXRSTlMAAwQHCA4RIiUmJygrLC0+Q0RPUFFmbnJ0dYCcna6wscDBxsfNztvb3N3d3uHj7vDx8fHx8vPz9PT09PT19fX19fj5/f39/v7+Xs/a3AAAAAFiS0dEV30K2R8AAAFdSURBVGje7ZtZWsJAEAbHGJeguIGKC+6KAiYa0WhcQSPuEJD0/W+ijxwg+ejp+esI9ZDUzHQrlQV2cbvaeBdAo7pVsJUuWGvBxVe3TwLodz/9oGTp4X2mFvZIEHF4ktPB+5wbkTAiN8/fu+O9kTjansPd+0T9mQQSnU7y9j622ySRtPZ5/2E3HhKZ4ulpk7P35etfod5pcLPC1/v8XUxi6d0vcvU+df5Ngvk5cxA0SJuhoNlpknBaexaCBmkjP2hYp43ooBlOmwUEDdLGgKBhmjYGBE36abOeAge3iTnik8fDNJxB/KjE41Oj8ykKP1fkpGk3ZThA4crAtNcQXJLhFGXWtTAeQpA2hgQNHruRNqYFDQaaMMKXWdAwH+HD0OrIcLy2PO8ajGkrlZe3mPDizioNyB2HoqoyvjqaVlpglQL/oyNj+azz6l+uarJ89o9dKFdkrFtWykvjmSj6A3T/y2SZjdoMAAAAAElFTkSuQmCC",alt:""}),Object(A.jsx)("span",{className:"past"===t?L.a.prev:"",children:a})]})})},G=function(e,t,a){if(t&&a&&a.current&&t.current){var r=e.currentTarget.classList[0],n=r.split("_")[1];e.currentTarget.classList.remove(r),"close"===n&&(a.current.className="",a.current.classList.add(P.a.hidden),e.currentTarget.classList.add(P.a.burger),t.current.classList.add(P.a.visible),t.current.classList.add(P.a.game)),"burger"===n&&(t.current.className="",e.currentTarget.classList.add(P.a.close),t.current.classList.add(P.a.hidden),a.current.classList.add(P.a.visible),a.current.classList.add(P.a.cash_wrapper))}};var C=function(e,t,a){e&&t&&t.current&&e.current&&(e.current.className="",e.current.classList.add(P.a.visible),e.current.classList.add(P.a.game),t.current.className="",t.current.classList.add(P.a.cash_wrapper),a.setWidth(window.innerWidth),window.innerWidth<720&&t.current.classList.add(P.a.hidden))},U=Object(p.a)((function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(null),a=Object(i.useContext)(R);return window.addEventListener("resize",(function(){return C(e,t,a)})),Object(A.jsxs)("div",{className:P.a.root,children:[Object(A.jsxs)("div",{ref:e,className:"".concat(P.a.game," ").concat(P.a.visible),children:[Object(A.jsx)("p",{children:a.question}),Object(A.jsx)("div",{className:P.a.answer,children:Object(A.jsx)("div",{className:P.a.wrapper,children:a.answer.map((function(e,t){return Object(A.jsx)(y,{index:t,answer:a.answer[t],letter:String.fromCharCode(65+t)},e)}))})})]}),Object(A.jsx)("div",{ref:t,className:"".concat(P.a.cash_wrapper," ").concat(P.a.hidden),children:a.money.map((function(e,t){return t<a.cash?Object(A.jsx)(z,{position:"past",money:a.money[t]},e):t>a.cash?Object(A.jsx)(z,{position:"future",money:a.money[t]},e):Object(A.jsx)(z,{position:"active",money:a.money[t]},e)})).reverse()}),Object(A.jsx)("button",{id:"burger",type:"button",onClick:function(a){G(a,e,t)},className:P.a.burger,children:" "}),a.gameOver?Object(A.jsx)(c.a,{to:"/gameOver"}):"",""===a.token?Object(A.jsx)(c.a,{to:"/"}):""]})})),E=a(11),H=a.n(E),X=function(e){e.getData(0).then((function(){e.toGameOver(!1)}))},B=Object(p.a)((function(){var e=Object(i.useContext)(R);return Object(A.jsxs)("div",{className:H.a.root,children:[Object(A.jsx)("div",{className:H.a.item,children:Object(A.jsx)("img",{src:O,alt:"hand"})}),Object(A.jsxs)("div",{className:H.a.item,children:[Object(A.jsx)("div",{className:H.a.total,children:"Total score:"}),Object(A.jsxs)("div",{className:H.a.earned,children:[e.money[e.cash]," earned"]}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{type:"button",className:H.a.end,onClick:function(){return X(e)},children:Object(A.jsx)(s.b,{to:"/game",children:"Try again"})})})]}),Object(A.jsx)("button",{type:"button",className:H.a.lang,children:"eng"}),e.gameOver?"":Object(A.jsx)(c.a,{to:"/game"})]})})),q=function(){return Object(A.jsx)("div",{style:{display:"none"},children:["../../assets/img/cash/active.png","../../assets/img/cash/inactive.png","../../assets/img/hand.svg","../../assets/img/button/Correct.svg","../../assets/img/button/Hover.svg","../../assets/img/button/Inactive.svg","../../assets/img/button/Selected.svg","../../assets/img/button/Wrong.svg","../../assets/img/button/Mobile/correct.svg","../../assets/img/button/Mobile/inactive.svg","../../assets/img/button/Mobile/selected.svg","../../assets/img/button/Mobile/wrong.svg"].map((function(e){return Object(A.jsx)("img",{src:e,alt:""},e)}))})},R=Object(i.createContext)(new f);function W(){return Object(A.jsx)(s.a,{basename:"/test",children:Object(A.jsxs)(R.Provider,{value:new f,children:[Object(A.jsxs)(c.d,{children:[Object(A.jsx)(c.b,{exact:!0,path:"/",children:Object(A.jsx)(k,{})}),Object(A.jsx)(c.b,{path:"/game",children:Object(A.jsx)(U,{})}),Object(A.jsx)(c.b,{path:"/gameOver",children:Object(A.jsx)(B,{})}),Object(A.jsx)(c.b,{path:"*",render:function(){return Object(A.jsx)("div",{children:"404 NOT FOUND"})}})]}),Object(A.jsx)(q,{})]})})}t.default=n.a.render(Object(A.jsx)(W,{}),document.getElementById("root"))},4:function(e,t,a){e.exports={game:"InGame_game__3GBOu",root:"InGame_root__Dc7RJ",answer:"InGame_answer__1ZFwZ",wrapper:"InGame_wrapper__3y0_b",cash_wrapper:"InGame_cash_wrapper__1jsiY",burger:"InGame_burger__3jVYU",close:"InGame_close__1eWEe",hidden:"InGame_hidden__3pjb7",visible:"InGame_visible__3Nlz0"}}},[[39,1,2]]]);
//# sourceMappingURL=main.2ed92801.chunk.js.map