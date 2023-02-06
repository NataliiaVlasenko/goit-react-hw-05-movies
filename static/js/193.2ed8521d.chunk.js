"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[193],{8193:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(5861),a=t(9439),s=t(7757),c=t.n(s),i=t(2791),u=t(7689),o=t(409),p=t(1087),v=t(184),f=function(e){var r,t=e.movie,n=(0,u.TH)(),a=(0,u.s0)(),s=(0,u.UO)().movieId,c=t.genres?t.genres.map((function(e){return e.name})).join(" / "):"",o=null===(r=n.state)||void 0===r?void 0:r.from;return(0,v.jsxs)("div",{children:[(0,v.jsx)("button",{onClick:function(){a(null!==o&&void 0!==o?o:"/movies")},children:"Go back"}),t&&(0,v.jsx)("h2",{children:t.title}),(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.title}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("p",{children:["User Score: ",t.popularity]}),(0,v.jsx)("p",{children:"Overview"}),(0,v.jsx)("p",{children:t.overview}),(0,v.jsx)("p",{children:"Genres"}),(0,v.jsx)("p",{children:c})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Additional Information"}),(0,v.jsx)(p.OL,{state:{from:o},to:"/movies/".concat(s,"/reviews"),children:(0,v.jsx)("p",{children:"Reviews"})}),(0,v.jsx)(p.OL,{state:{from:o},to:"/movies/".concat(s,"/cast"),children:(0,v.jsx)("p",{children:"Cast"})}),(0,v.jsx)("hr",{}),(0,v.jsx)(i.Suspense,{fallback:null,children:(0,v.jsx)(u.j3,{})})]})]})},d=function(){var e=(0,u.UO)().movieId,r=(0,i.useState)({}),t=(0,a.Z)(r,2),s=t[0],p=t[1],d=(0,i.useState)(!1),l=(0,a.Z)(d,2),h=(l[0],l[1]),m=(0,i.useState)(null),x=(0,a.Z)(m,2),j=(x[0],x[1]);(0,u.TH)();return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,h(!0),r.next=4,(0,o.Yp)(e);case 4:t=r.sent,p(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),j(r.t0.message);case 11:return r.prev=11,h(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,v.jsx)("div",{children:(0,v.jsx)(f,{movie:s,id:e})})}},409:function(e,r,t){t.d(r,{Df:function(){return i},IQ:function(){return p},Jh:function(){return v},Yp:function(){return u},z1:function(){return o}});var n=t(5861),a=t(7757),s=t.n(a),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"42198471976a286e57d85c87e47247c5",_limit:20}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var r,t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("/trending/movie/day?",{params:{page:r}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=193.2ed8521d.chunk.js.map