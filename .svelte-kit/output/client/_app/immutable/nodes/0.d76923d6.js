import{s as N,n as g,c as M,u as q,g as z,d as A}from"../chunks/scheduler.e108d1fd.js";import{S,i as k,g as m,h as f,x,k as p,a as h,f as c,r as E,s as $,u as H,c as b,j as I,y as T,v as j,z as L,d as w,t as C,w as D}from"../chunks/index.07593fae.js";function F(i){let t,o='<a href="/" class="svelte-ibrawg">Home</a> <a href="/signup" class="svelte-ibrawg">Sign Up</a>';return{c(){t=m("nav"),t.innerHTML=o,this.h()},l(s){t=f(s,"NAV",{class:!0,["data-svelte-h"]:!0}),x(t)!=="svelte-z5895b"&&(t.innerHTML=o),this.h()},h(){p(t,"class","svelte-ibrawg")},m(s,r){h(s,t,r)},p:g,i:g,o:g,d(s){s&&c(t)}}}class G extends S{constructor(t){super(),k(this,t,null,F,N,{})}}function K(i){let t,o,s,r,n,y=`body{
              margin:0;
          }
      `,_,u;t=new G({});const d=i[1].default,a=M(d,i,i[0],null);return{c(){E(t.$$.fragment),o=$(),s=m("main"),a&&a.c(),r=$(),n=m("style"),n.textContent=y,_=m("link"),this.h()},l(e){H(t.$$.fragment,e),o=b(e),s=f(e,"MAIN",{class:!0});var l=I(s);a&&a.l(l),l.forEach(c),r=b(e);const v=T("svelte-9iry20",document.head);n=f(v,"STYLE",{["data-svelte-h"]:!0}),x(n)!=="svelte-1m7n93n"&&(n.textContent=y),_=f(v,"LINK",{rel:!0,href:!0}),v.forEach(c),this.h()},h(){p(s,"class","svelte-2qq9k"),p(_,"rel","stylesheet"),p(_,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0")},m(e,l){j(t,e,l),h(e,o,l),h(e,s,l),a&&a.m(s,null),h(e,r,l),L(document.head,n),L(document.head,_),u=!0},p(e,[l]){a&&a.p&&(!u||l&1)&&q(a,d,e,e[0],u?A(d,e[0],l,null):z(e[0]),null)},i(e){u||(w(t.$$.fragment,e),w(a,e),u=!0)},o(e){C(t.$$.fragment,e),C(a,e),u=!1},d(e){e&&(c(o),c(s),c(r)),D(t,e),a&&a.d(e),c(n),c(_)}}}function O(i,t,o){let{$$slots:s={},$$scope:r}=t;return i.$$set=n=>{"$$scope"in n&&o(0,r=n.$$scope)},[r,s]}class V extends S{constructor(t){super(),k(this,t,O,K,N,{})}}export{V as component};
