!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=a.parcelRequire4383;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},a.parcelRequire4383=i),i.register("jIucq",function(t,a){e(t.exports,"default",function(){return n});var n=e=>{let t=document.querySelector(e);if(t)return t;throw Error(`the ${e} dose not exist`)}}),i.register("bEwRL",function(t,a){e(t.exports,"getStorageItem",function(){return d}),e(t.exports,"addToLocalStorag",function(){return c}),e(t.exports,"adjunstWatchBtns",function(){return p}),e(t.exports,"adjunstQueueBtns",function(){return m});var n=i("jIucq");let o="toWatch",l="toQueue",s=(0,n.default)(".modal");(0,n.default)(".gallery");let d=e=>localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[],r=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},c=()=>{s.addEventListener("click",e=>{let t=e.target,a=e.currentTarget.dataset.movieId,n=d(o),i=d(l),s=u(n),c=u(i),p={id:a};e.currentTarget,"toWatch"===t.dataset.action?s.includes(a)||(n.push(p),r(o,n),t.textContent="REMOVE FROM WATCHED",t.dataset.action="toWatchRmv"):"toQueue"===t.dataset.action?c.includes(a)||(i.push(p),r(l,i),t.textContent="REMOVE FROM QUEUE",t.dataset.action="toQueueRmv"):"toWatchRmv"===t.dataset.action?(n=n.filter(e=>e.id!==a),r(o,n),t.textContent="TO WATCHED",t.dataset.action="toWatch"):"toQueueRmv"!==t.dataset.action||c.includes(a)||(i=i.filter(e=>e.id!==a),r(l,i),t.textContent="ADD TO QUEUE",t.dataset.action="toQueue")})};function u(e){let t=[];return e.forEach(e=>{t.push(e.id)}),t}let p=(e,t,a)=>{let n=u(e);"toQueue"===t.dataset.action&&n.includes(a)&&(t.textContent="REMOVE FROM QUEUE",t.dataset.action="toWatchRmv"),"toQueueRmv"!==t.dataset.action||n.includes(a)||(t.textContent="TO WATCHED",t.dataset.action="toWatch")},m=(e,t,a)=>{let n=u(e);"toQueue"===t.dataset.action&&n.includes(a)&&(t.textContent="REMOVE FROM QUEUE",t.dataset.action="toWatchRmv"),"toQueueRmv"!==t.dataset.action||n.includes(a)||(t.textContent="ADD TO QUEUE",t.dataset.action="toQueue")}});var l=i("dIxxU"),s=i("jIucq");let d="53b2ac0d64cbeedea763734f4fe8a4ce",r=1,c="https://api.themoviedb.org/3",u=()=>{let e=(0,s.default)(".pagination");e.addEventListener("click",p)};function p(e){let t=e.target;if(t.dataset.page){let e=t.dataset.page;r=e=Number(e),_()}t.dataset.prev&&(r-=1,_()),t.dataset.next&&(r+=1,_())}i("jIucq");let m=(e,t,a)=>{a.innerHTML="";let n=e.map(e=>{var a;let n,{genre_ids:o,title:i,name:l,poster_path:s,release_date:d,id:r}=e;return a=o,n="",t.forEach(e=>{a.includes(e.id)&&(n=n+e.name+", ")}),o=n=n?n.slice(0,-2):"Unknown",d=function(e){let t=e?e.split("-")[0]:"Unknown";return t}(d),i=i||l,`<div class="photo-card" data-id="${r}" >
      <div
        class="modal-info"
        data-vote-avg="${e.vote_average}"
        data-vote-count="${e.vote_count}"
        data-popularity="${e.popularity}"
        data-about="${e.overview}"
        data_original_title="${e.original_title}"
        >
      </div>
    <img src="${s=s?`https://image.tmdb.org/t/p/w500${s}`:"../images/no-signal-img.jpg"}" class="image" alt="${i}" />
  <div class="container-info">
    <b class="title">${i}</b>
    <div class="cont-descr">
      <p class="descr-item">${o}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${d}</p>
    </div>
  </div>
</div>`}).join("");a.innerHTML=n};var s=i("jIucq");let g=(0,s.default)("#prev-btn"),f=(0,s.default)("#next-btn"),y=(0,s.default)(".number-buttons"),v=e=>{g.disabled=!1,f.disabled=!1;let t=window.innerWidth;t<768?(y.innerHTML="",1===r&&(g.disabled=!0),r===e&&(f.disabled=!0),r<3?h(3):r>=3&&r<e-2?h(r):h(e-2)):(y.innerHTML="",1===r&&(g.disabled=!0),r===e&&(f.disabled=!0),r<5?(E(5),b(),w(e)):r>=5&&r<e-4?(w(1),b(),h(r),b(),w(e)):(w(1),b(),E(e-2)))};function h(e){for(let t=e-2;t<=e+2;t++){let e=document.createElement("button");e.innerText=t,e.classList.add("pagination__button"),e.dataset.page=t,r===t&&e.classList.add("active"),y.appendChild(e)}}function E(e){for(let t=e-3;t<=e+3;t++){let e=document.createElement("button");e.innerText=t-1,e.classList.add("pagination__button"),e.dataset.page=t-1,r===t-1&&e.classList.add("active"),y.appendChild(e)}}function b(){let e=document.createElement("button");e.innerText="...",e.classList.add("dot-btn"),e.disabled=!0,y.appendChild(e)}function w(e){let t=document.createElement("button");t.innerText=`${e}`,t.classList.add("pagination__button"),t.dataset.page=e,y.appendChild(t)}var L=i("6JpON"),s=i("jIucq");let _=async()=>{t(L).Loading.standard("Loading...");try{let e=(0,s.default)(".gallery"),t=`${c}/trending/all/day?page=${r}&api_key=${d}`,a=await (0,l.default).get(t),n=a.data,o=n.total_pages;o/=2;let i=n.results,u=await x();m(i,u,e),v(o),window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.log(e),t(L).Notify.failure("Oops! Something went wrong. Please try again later.")}finally{t(L).Loading.remove()}};async function x(){try{let e=`${c}/genre/movie/list?api_key=${d}`,t=await (0,l.default).get(e),a=t.data;return a=a.genres}catch(e){console.log(e)}}let T=async()=>{try{let e=`${c}/trending/all/day?api_key=${d}&language=en-US&page=1`,t=await fetch(e),a=await t.json(),n=a.results;R(n),C()}catch(e){console.log(e),t(L).Notify.warning("Oops! Something went wrong, but life goes on")}},S=document.querySelector(".carousel-prev"),$=document.querySelector(".carousel-next"),O=document.querySelector(".swiper__wrapper"),q=0,R=e=>{O.innerHTML="",e.forEach((e,t)=>{let a=document.createElement("div");a.classList.add("swiper__slide"),a.dataset.index=t;let n=document.createElement("img");n.classList.add("swiper__image"),n.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,n.alt=e.title,a.appendChild(n),O.appendChild(a)})},C=()=>{let e=O.children.length,t=Math.floor(O.offsetWidth/200),a=e-t;S.addEventListener("click",()=>{q=(q-1+e)%e,n()}),$.addEventListener("click",()=>{q=(q+1)%e,n()});let n=()=>{let e=-(200*q);O.style.transition="transform 0.5s",O.style.transform=`translateX(${e}px)`,q===a&&setTimeout(()=>{O.style.transition="none",q=0,O.style.transform="translateX(0)"},500)},o=O.querySelectorAll(".swiper__slide");o.forEach(e=>{e.addEventListener("mouseover",()=>{e.querySelector(".swiper__image").style.transform="scale(1.1)"}),e.addEventListener("mouseout",()=>{e.querySelector(".swiper__image").style.transform="scale(1)"})}),setInterval(()=>{q=(q+1)%e,n()},3e3)};var k=i("bEwRL");let M=async()=>{T(),_(),u(),(0,k.addToLocalStorag)()};window.addEventListener("DOMContentLoaded",M);let I=document.querySelector("body"),Q=document.querySelector(".dl-btn"),U=document.querySelector(".fa-sun"),W=document.querySelector(".fa-moon");function j(e){localStorage.setItem("darkmode",e)}!function(){let e=localStorage.getItem("darkmode");null===e?(j(!1),U.style.display="inline",W.style.display="none"):"true"===e?(I.classList.add("darkmode"),U.style.display="none",W.style.display="inline"):"false"===e&&(U.style.display="inline",W.style.display="none")}(),Q.addEventListener("click",()=>{I.classList.toggle("darkmode"),U.classList.add("animated"),W.classList.add("animated"),j(I.classList.contains("darkmode")),I.classList.contains("darkmode")?(U.style.display="none",W.style.display="inline"):(U.style.display="inline",W.style.display="none"),setTimeout(()=>{U.classList.remove("animated"),W.classList.remove("anmated")},500)});let D=document.getElementById("scrollToTopBtn"),H=document.querySelector(".scroll-btn__icon ");window.addEventListener("scroll",function(){window.scrollY>window.innerHeight/2?(D.style.display="block",H.style.transform="rotate(180deg)"):(D.style.display="none",H.style.transform="rotate(0deg)")}),D.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}();
//# sourceMappingURL=index.7e0db973.js.map
