"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[136],{326:function(e,t,n){n.d(t,{TP:function(){return o},XT:function(){return c},gH:function(){return u},tx:function(){return p},zv:function(){return l}});var r=n(861),a=n(757),s=n.n(a),i=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0d2c8f8ee54bc3ab0aecf9b789c7f474"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t,page:1,include_adul:!1}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t),{params:{language:"en-US"}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},555:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(87),u=n(689),o=n(791),l=n(323),p="movie-details_container__Jv1ir",v="movie-details_image__idb6Z",d="movie-details_box__zDsdh",m="movie-details_title__+Bg+p",f="movie-details_rating__mgcRJ",h="movie-details_subtitle__p6d4E",_="movie-details_descr__om5eb",x="movie-details_genres__46wDv",g="movie-details_link__k0S34",w="movie-details_activeLink__jFFyv movie-details_link__k0S34",b="movie-details_button__-27Fy",j=n(326),k=n(184),N=function(){var e,t=(0,o.useState)({}),n=(0,a.Z)(t,2),s=n[0],N=n[1],y=(0,o.useState)(!1),Z=(0,a.Z)(y,2),S=Z[0],C=Z[1],F=(0,o.useState)(null),L=(0,a.Z)(F,2),O=L[0],T=L[1],U=(0,u.UO)().movieId,A=(0,u.s0)(),R=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/";(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),e.next=4,(0,j.TP)(U);case 4:t=e.sent,N(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),T(e.t0);case 11:return e.prev=11,C(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[U]);var z=s.poster_path,B=s.title,D=s.vote_average,E=s.genres,G=s.overview,H=s.name;return(0,k.jsxs)("div",{children:[S&&(0,k.jsx)(l.Z,{}),O&&(0,k.jsx)("p",{children:O}),(0,k.jsx)("button",{type:"button",className:b,onClick:function(){A(R)},children:"GoBack"}),(0,k.jsx)("div",{children:(0,k.jsxs)("div",{className:p,children:[(0,k.jsx)("img",{className:v,src:z?"https://image.tmdb.org/t/p/w300".concat(z):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png",alt:B||H,widht:"300",height:"450"}),(0,k.jsxs)("div",{className:d,children:[(0,k.jsxs)("h2",{className:m,children:[B||H," "]}),(0,k.jsxs)("p",{className:f,children:["User Score:",(0,k.jsx)("span",{className:_,children:Number(D).toFixed(1)})]}),(0,k.jsxs)("p",{className:h,children:["Overview:",(0,k.jsx)("span",{className:_,children:G})]}),(0,k.jsxs)("p",{className:h,children:["Genres:",(0,k.jsx)("span",{className:x,children:E&&E.map((function(e){return e.name})).join(" / ")})]})]})]})}),(0,k.jsx)("p",{children:"Aditional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(c.OL,{className:function(e){return e.isActive?w:g},state:{from:R},to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(c.OL,{className:function(e){return e.isActive?w:g},state:{from:R},to:"reviews",children:"Reviews"})})]}),(0,k.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=136.8fa783a0.chunk.js.map