"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{326:function(t,e,n){n.d(e,{TP:function(){return o},XT:function(){return c},gH:function(){return u},tx:function(){return f},zv:function(){return p}});var r=n(861),a=n(757),i=n.n(a),s=n(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0d2c8f8ee54bc3ab0aecf9b789c7f474"}}),c=function(){var t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:e,page:1,include_adul:!1}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e),{params:{language:"en-US"}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},282:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(87),a=n(689),i="movie-list_content__item__PfDtX",s="movie-list_content__img__CB0ih",c="movie-list_box-description__Br6Bb",u="movie-list_content__title__dINBI",o="movie-list_content__text__KQknf",p="movie-list_content__popularity__rikdT",f="movie-list_content__list__iOUyl",l=n(184),m=function(t){var e=t.items,n=(0,a.TH)(),m=e.map((function(t){var e=t.id,a=t.title,f=t.name,m=t.poster_path,v=t.release_date,d=t.vote_average;return(0,l.jsx)("li",{className:i,"data-id":e,children:(0,l.jsxs)(r.rU,{to:"/movies/".concat(e),state:{from:n},children:[(0,l.jsx)("img",{className:s,"data-id":e,src:m?"https://image.tmdb.org/t/p/original/".concat(m):"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png",alt:a}),(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("h2",{className:u,children:a||f}),(0,l.jsx)("p",{className:o,children:v.slice(0,4)}),(0,l.jsx)("p",{className:p,children:d.toFixed(1)})]})]})},e)}));return(0,l.jsx)("ul",{className:f,children:m})},v=m;m.defaultProps={items:[]}},413:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),u=n(87),o=n(326),p=n(323),f=n(184),l=function(t){var e=t.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),i=r[0],s=r[1];return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i),s("")},children:[(0,f.jsx)("input",{name:"search",value:i,onChange:function(t){var e=t.target.value;s(e.trim())},type:"text",required:!0}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},m=n(282),v=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],v=(0,c.useState)(!1),d=(0,a.Z)(v,2),h=d[0],_=d[1],x=(0,c.useState)(null),g=(0,a.Z)(x,2),b=g[0],w=g[1],k=(0,u.lr)(),j=(0,a.Z)(k,2),Z=j[0],y=j[1],N=Z.get("search");(0,c.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),t.next=4,(0,o.gH)(N);case 4:e=t.sent,n=e.results,i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w(t.t0);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[N]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{onSubmit:function(t){y({search:t})}}),h&&(0,f.jsx)(p.Z,{}),b&&b.message,n.length>0&&(0,f.jsx)(m.Z,{items:n})]})}}}]);
//# sourceMappingURL=413.aad65d4c.chunk.js.map