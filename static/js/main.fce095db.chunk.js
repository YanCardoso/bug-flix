(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),c=n.n(s),i=(n(20),n(3)),o=n.n(i),l=n(4),u=n(5),d=(n(22),n(12)),j=n.n(d),m=n(14),b=n.n(m),h=n(1);var g=function(e){var t=e.title,n=e.items,a=Object(r.useState)(0),s=Object(u.a)(a,2),c=s[0],i=s[1];return Object(h.jsxs)("div",{className:"movieRow",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("div",{className:"movieRow--left",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)},children:Object(h.jsx)(j.a,{style:{fontSize:50}})}),Object(h.jsx)("div",{className:"movieRow--right",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)},children:Object(h.jsx)(b.a,{style:{fontSize:50}})}),Object(h.jsx)("div",{className:"movieRow--listarea",children:Object(h.jsx)("div",{className:"movieRow--list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(h.jsx)("div",{className:"movieRow--item",children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})};n(29);var f=function(e){var t=e.item,n=new Date(t.first_air_date),r=[];for(var a in t.genres)r.push(t.genres[a].name);var s=t.overview;return s.length>400&&(s=s.substring(0,400)+"..."),Object(h.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(h.jsx)("div",{className:"featured--vertical",children:Object(h.jsxs)("div",{className:"featured--horizontal",children:[Object(h.jsx)("div",{className:"featured--name",children:t.original_name}),Object(h.jsxs)("div",{className:"featured--info",children:[Object(h.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(h.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(h.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]}),Object(h.jsx)("div",{className:"featured--description",children:s}),Object(h.jsxs)("div",{className:"featured--buttons",children:[Object(h.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:"\u25b6 Assistir"}),Object(h.jsx)("a",{href:"/list/add".concat(t.id),className:"featured--mylistbutton",children:"+ Minha Lista"})]}),Object(h.jsxs)("div",{className:"featured--genres",children:[Object(h.jsx)("strong",{children:"G\xeaneros: "}),r.join(", ")]})]})]})})})};n(30);var v=function(e){var t=e.black;return Object(h.jsxs)("header",{className:t?"black":"",children:[Object(h.jsx)("div",{className:"header--logo",children:Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("img",{src:"netflix.png",alt:"netflix"})})}),Object(h.jsx)("div",{className:"header--user",children:Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("img",{src:"user.jpg",alt:"Usu\xe1rio"})})})]})},p="efb82a76211b8ef1a5e3019a7de40bbe",x=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(p));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Filmes e S\xe9ries Originais",items:e.t0},e.next=6,x("/trending/all/week?language=pt-BR&api_key=".concat(p));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendamos pra Voc\xea",items:e.t2},e.next=10,x("/movie/top_rated?language=pt-BR&api_key=".concat(p));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,x("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(p));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,x("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(p));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,x("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(p));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,x("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(p));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,x("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(p));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rio",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,x("/movie/".concat(t,"?language=pt-BR&api_key=").concat(p));case 7:return r=e.sent,e.abrupt("break",15);case 9:return e.next=11,x("/tv/".concat(t,"?language=pt-BR&api_key=").concat(p));case 11:return r=e.sent,e.abrupt("break",15);case 13:return r=null,e.abrupt("break",15);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};n(31);var w=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),c=Object(u.a)(s,2),i=c[0],d=c[1],j=Object(r.useState)(!1),m=Object(u.a)(j,2),b=m[0],p=m[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getHomeList();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,O.getMovieInfo(s.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=function(){window.scrollY>=10?p(!0):p(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(h.jsxs)("div",{className:"Page",children:[Object(h.jsx)(v,{black:b}),i&&Object(h.jsx)(f,{item:i}),Object(h.jsx)("section",{className:"list",children:n.map((function(e,t){return Object(h.jsx)(g,{title:e.title,items:e.items},t)}))}),Object(h.jsxs)("footer",{children:["Feito por ",Object(h.jsx)("span",{role:!0,children:"\ud83e\udd20"})," Yan Cardoso",Object(h.jsx)("img",{src:"tmdb.svg",alt:"TMDB"})]}),n.length<=0&&Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("img",{src:"netflix_virus_loading.gif",alt:"Carregando"})})]})};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.fce095db.chunk.js.map