function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=t.parcelRequire4383;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire4383=n),n.register("1zbvg",function(e,t){Object.defineProperty(e.exports,"default",{get:function(){return a},set:void 0,enumerable:!0,configurable:!0});var a=e=>{let t=document.querySelector(e);if(t)return t;throw Error(`the ${e} dose not exist`)}});var l=n("2shzp");const i="53b2ac0d64cbeedea763734f4fe8a4ce",s="https://api.themoviedb.org/3";n("1zbvg");const r=(e,t,a)=>{a.innerHTML="";let o=e.map(e=>{let{genre_ids:a,title:o,name:n,poster_path:l,release_date:i,id:s}=e;return a=function(e,t){let a="";return t.forEach(t=>{e.includes(t.id)&&(a=a+t.name+", ")}),a=a?a.slice(0,-2):"Unknown"}(a,t),i=function(e){let t=e?e.split("-")[0]:"Unknown";return t}(i),o=o||n,`<div class="photo-card" data-id="${s}" >
      <div
        class="modal-info"
        data-vote-avg="${e.vote_average}"
        data-vote-count="${e.vote_count}"
        data-popularity="${e.popularity}"
        data-about="${e.overview}"
        data_original_title="${e.original_title}"
        >
      </div>
    <img src="${l=l?`https://image.tmdb.org/t/p/w500${l}`:"../images/no-signal-img.jpg"}" class="image" alt="${o}" />
    <div class="overlay-text">
        <h1>${Math.round(10*e.vote_average)/10}</h1>
    </div>
  <div class="container-info">
    <b class="title">${o}</b>
    <div class="cont-descr">
      <p class="descr-item">${a}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${i}</p>
    </div>
  </div>
</div>`}).join("");a.innerHTML=o};var d=n("1zbvg");const c=(0,d.default)("#prev-btn"),u=(0,d.default)("#next-btn"),p=(0,d.default)(".number-buttons"),m=e=>{c.disabled=!1,u.disabled=!1;let t=window.innerWidth;t<768?function(e){p.innerHTML="",1===C&&(c.disabled=!0),C===e&&(u.disabled=!0),C<3?g(3):C>=3&&C<e-2?g(C):g(e-2)}(e):function(e){p.innerHTML="",1===C&&(c.disabled=!0),C===e&&(u.disabled=!0),C<5?(f(5),v(),h(e)):C>=5&&C<e-4?(h(1),v(),g(C),v(),h(e)):(h(1),v(),f(e-2))}(e)};function g(e){for(let t=e-2;t<=e+2;t++){let e=document.createElement("button");e.innerText=t,e.classList.add("pagination__button"),e.dataset.page=t,C===t&&e.classList.add("active"),p.appendChild(e)}}function f(e){for(let t=e-3;t<=e+3;t++){let e=document.createElement("button");e.innerText=t-1,e.classList.add("pagination__button"),e.dataset.page=t-1,C===t-1&&e.classList.add("active"),p.appendChild(e)}}function v(){let e=document.createElement("button");e.innerText="...",e.classList.add("dot-btn"),e.disabled=!0,p.appendChild(e)}function h(e){let t=document.createElement("button");t.innerText=`${e}`,t.classList.add("pagination__button"),t.dataset.page=e,p.appendChild(t)}var y=n("7Y9D8");function w(){e(y).Loading.hourglass({svgColor:"#B92F2C"})}function b(){e(y).Loading.remove()}function _(){e(y).Notify.warning("Please enter the name of a movie to initiate a search.")}var d=n("1zbvg");const E=(0,d.default)(".pagination"),L="https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=",$="&api_key=53b2ac0d64cbeedea763734f4fe8a4ce&query=",T=(0,d.default)("#form__search input"),k=(0,d.default)("#form__search"),x=(0,d.default)(".gallery");let S="",M="allMovies",C=1;const q=()=>{let e=(0,d.default)(".pagination");e.addEventListener("click",O)};function O(e){console.log(M);let t=e.target;if(t.dataset.page){let e=t.dataset.page;C=e=Number(e),"allMovies"===M&&D(),"search"===M&&W()}t.dataset.prev&&(C-=1,"allMovies"===M&&D(),"search"===M&&W()),t.dataset.next&&(C+=1,"allMovies"===M&&D(),"search"===M&&W()),console.log(C)}const D=async()=>{w(),console.log(M="allMovies"),E.classList.contains("is-hidden")&&E.classList.remove("is-hidden");try{let e=(0,d.default)(".gallery"),t=`${s}/trending/all/day?page=${C}&api_key=${i}`,a=await (0,l.default).get(t),o=a.data,n=o.total_pages;n/=2;let c=o.results,u=await R();r(c,u,e),m(n),window.scrollTo({top:0,behavior:"smooth"})}catch(t){console.log(t),e(y).Notify.failure("Oops! Something went wrong. Please try again later.")}finally{b()}};async function R(){try{let e=`${s}/genre/movie/list?api_key=${i}`,t=await (0,l.default).get(e),a=t.data;return a=a.genres}catch(e){console.log(e)}}const F=async()=>{k.addEventListener("submit",async e=>{e.preventDefault(),w(),M="search",currentPageExport=1,C=1,S=T.value;try{if(""===S){D(),_();return}console.log(M),console.log(C),T.value=S;let e=`${L}${C}${$}${S}`,t=await (0,l.default).get(e),a=t.data,o=a.total_results,n=a.total_pages,i=a.results,s=await R();r(i,s,x),0===o&&(noMovie(),D()),n>1?m(n):E.classList.add("is-hidden"),window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.log(e)}finally{b()}})},W=async()=>{w(),T.value=S;try{if(""===S){D(),_();return}let e=`${L}${C}${$}${S}`,t=await (0,l.default).get(e),a=t.data,o=a.total_results,n=a.total_pages,i=a.results,s=await R();r(i,s,x),0===o&&(noMovie(),D()),m(n),window.scrollTo({top:0,behavior:"smooth"})}catch(e){console.log(e)}finally{b()}},U=async e=>{try{let t=`${s}/movie/${e.id}/videos?api_key=${i}`,a=await fetch(t),o=await a.json(),n=o.results;if(console.log(n),n.length>0){let e=n.find(e=>"Trailer"===e.type);if(e)return e.key}}catch(e){console.log(e)}return null},Q=async()=>{try{let e=`${s}/trending/all/day?api_key=${i}&language=en-US&page=1`,t=await fetch(e),a=await t.json(),o=a.results;z(o),j()}catch(t){console.log(t),e(y).Notify.warning("Oops! Something went wrong, but life goes on")}},H=document.querySelector(".carousel-prev"),I=document.querySelector(".carousel-next"),N=document.querySelector(".swiper__wrapper");let A=0;const z=e=>{N.innerHTML="",e.forEach((t,a)=>{let o=document.createElement("div");o.classList.add("swiper__slide"),o.dataset.index=a;let n=document.createElement("img");n.classList.add("swiper__image"),n.src=`https://image.tmdb.org/t/p/w500${t.poster_path}`,n.alt=t.title;let l=document.createElement("a");l.classList.add("watch-trailer-link"),l.href="#",l.dataset.movieId=t.id;let i=B();l.innerHTML=i,o.appendChild(l),o.appendChild(n),N.appendChild(o),l.addEventListener("click",async a=>{a.preventDefault();let o=a.target.dataset.movieId,n=e.find(e=>e.id===parseInt(o));if(n)try{let e=await U(t);if(e){let t=`https://www.youtube.com/watch?v=${e}`;window.open(t,"_blank")}else console.log("No trailer found for the movie.")}catch(e){console.log(e)}})})},j=()=>{let e=N.children.length,t=Math.floor(N.offsetWidth/200),a=e-t;H.addEventListener("click",()=>{A=(A-1+e)%e,o()}),I.addEventListener("click",()=>{A=(A+1)%e,o()});let o=()=>{let e=-(200*A);N.style.transition="transform 0.5s",N.style.transform=`translateX(${e}px)`,A===a&&setTimeout(()=>{N.style.transition="none",A=0,N.style.transform="translateX(0)"},500)},n=N.querySelectorAll(".swiper__slide");n.forEach(e=>{e.addEventListener("mouseover",()=>{e.querySelector(".swiper__image").style.transform="scale(1.1)"}),e.addEventListener("mouseout",()=>{e.querySelector(".swiper__image").style.transform="scale(1)"})}),setInterval(()=>{A=(A+1)%e,o()},3e3)},B=()=>`<svg class="youtube-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44">
    <circle cx="12" cy="12" r="10" fill="#FF0000" />
    <path fill="#FFFFFF" d="M9.75 7.52v8.956l6.25-4.478z" />
  </svg>`;var d=n("1zbvg");const P="toWatch",V="toQueue",J=(0,d.default)(".modal"),X=e=>localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[],Y=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},G=()=>{J.addEventListener("click",e=>{let t=e.target,a=e.currentTarget.dataset.movieId,o=X(P),n=X(V),l=K(o),i=K(n),s={id:a};"toWatch"===t.dataset.action?l.includes(a)||(o.push(s),Y(P,o),t.textContent="REMOVE FROM WATCHED",t.dataset.action="toWatchRmv"):"toQueue"===t.dataset.action?i.includes(a)||(n.push(s),Y(V,n),t.textContent="REMOVE FROM QUEUE",t.dataset.action="toQueueRmv"):"toWatchRmv"===t.dataset.action?(o=o.filter(e=>e.id!==a),Y(P,o),t.textContent="ADD TO WATCHED",t.dataset.action="toWatch"):"toQueueRmv"===t.dataset.action&&(n=n.filter(e=>e.id!==a),Y(V,n),t.textContent="ADD TO QUEUE",t.dataset.action="toQueue")})};function K(e){let t=[];return e.forEach(e=>{t.push(e.id)}),t}const Z=(e,t,a)=>{let o=K(e);"toWatch"===t.dataset.action&&o.includes(a)&&(t.textContent="REMOVE FROM WATCHED",t.dataset.action="toWatchRmv"),"toWatchRmv"!==t.dataset.action||o.includes(a)||(t.textContent="ADD TO WATCHED",t.dataset.action="toWatch")},ee=(e,t,a)=>{let o=K(e);"toQueue"===t.dataset.action&&o.includes(a)&&(t.textContent="REMOVE FROM QUEUE",t.dataset.action="toQueueRmv"),"toQueueRmv"!==t.dataset.action||o.includes(a)||(t.textContent="ADD TO QUEUE",t.dataset.action="toQueue")};var d=n("1zbvg");const et=(0,d.default)(".modal"),ea=(0,d.default)(".gallery"),eo=e=>{let t=e.target.parentNode,a=et.querySelector(".watch"),o=et.querySelector(".queue"),n=t.dataset.id,l=X(P),i=X(V);Z(l,a,n),ee(i,o,n)},en=()=>{ea.addEventListener("click",eo)};(async function(){try{let e=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key=${i}`),t=await e.json(),a=t.results.find(e=>e.vote_count>0),o=await fetch(`https://api.themoviedb.org/3/movie/${a.id}/videos?api_key=${i}`),n=await o.json(),l=n.results.find(e=>"Trailer"===e.type);if(l){let e=l.key,t=`https://www.youtube.com/embed/${e}`;return t}throw Error("No trailer found for the movie.")}catch(e){throw console.error("Error:",e),e}})().then(e=>{let t=document.querySelector(".video-frame"),a=document.createElement("iframe");a.src=e,a.width="100%",a.height="100%",a.allowFullscreen=!0,t.appendChild(a)}).catch(e=>{console.error("Error:",e)});const el=async()=>{Q(),D(),q(),G(),en(),F()};window.addEventListener("DOMContentLoaded",el);const ei=document.querySelector("body"),es=document.querySelector(".dl-btn"),er=document.querySelector(".fa-sun"),ed=document.querySelector(".fa-moon"),ec=document.querySelector(".modal"),eu=document.querySelector(".team__modal");function ep(e){localStorage.setItem("darkmode",e)}!function(){let e=localStorage.getItem("darkmode");null===e?(ep(!1),er.style.display="inline",ed.style.display="none"):"true"===e?(ei.classList.add("darkmode"),er.style.display="none",ed.style.display="inline"):"false"===e&&(er.style.display="inline",ed.style.display="none")}(),es.addEventListener("click",()=>{ei.classList.toggle("darkmode"),er.classList.add("animated"),ed.classList.add("animated"),ec.classList.toggle("darkmode"),eu.classList.toggle("darkmode"),ep(ei.classList.contains("darkmode")),ei.classList.contains("darkmode")?(er.style.display="none",ed.style.display="inline"):(er.style.display="inline",ed.style.display="none"),setTimeout(()=>{er.classList.remove("animated"),ed.classList.remove("anmated")},500)});const em=document.getElementById("scrollToTopBtn"),eg=document.querySelector(".scroll-btn__icon ");window.addEventListener("scroll",function(){window.scrollY>window.innerHeight/2?(em.style.display="block",eg.style.transform="rotate(180deg)"):(em.style.display="none",eg.style.transform="rotate(0deg)")}),em.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.cb996af6.js.map
