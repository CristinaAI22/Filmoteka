!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=e.parcelRequire4383;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},e.parcelRequire4383=o);var n=o("dIxxU"),l=o("6JpON");let r=t=>{let e=document.querySelector(t);if(e)return e;throw Error(`the ${t} dose not exist`)};function d(t){let e=[];return t.forEach(t=>{e.push(t.id)}),e}let c=t=>localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):[],s=r(".library-gallery"),u=t=>{let e=t.map(t=>{let e,{genres:a,original_title:i,poster_path:o,id:n,release_date:l}=t;return e="",a.forEach(t=>{e=e+t.name+", "}),`<div class="photo-card" data-id="${n}" >
      <div
        class="modal-info"
        data-vote-avg="${t.vote_average}"
        data-vote-count="${t.vote_count}"
        data-popularity="${t.popularity}"
        data-about="${t.overview}"
        data_original_title="${t.original_title}"
        >
      </div>
    <img src="${o=o?`https://image.tmdb.org/t/p/w500${o}`:"../../images/no-signal-img.jpg"}" class="image" alt="${i}" />
  <div class="container-info">
    <b class="title">${i}</b>
    <div class="cont-descr">
      <p class="descr-item">${a=e=e?e.slice(0,-2):"N/A"}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${l=function(t){let e=t?t.split("-")[0]:"N/A";return e}(l)}</p>
    </div>
  </div>
</div>`}).join("");s.innerHTML=e},m="toWatch",v=r(".no-movie"),g=async e=>{t(l).Loading.standard("Loading..."),v.classList.remove("is-hidden");try{let t=c(e);t=d(t);let a=await f(t);0!==a.length&&v.classList.add("is-hidden"),u(a)}catch(t){console.log(t)}finally{t(l).Loading.remove()}},f=async t=>{let e=[];return await Promise.all(t.map(async t=>{try{let a=`https://api.themoviedb.org/3/movie/${t}?api_key=53b2ac0d64cbeedea763734f4fe8a4ce`,i=await (0,n.default).get(a),o=i.data;e.push(o)}catch(t){console.log(t)}})),e},p=async()=>{await g(m);let t=r('[data-whichLibrary="watched"]'),e=r('[data-whichLibrary="queue"]');t.addEventListener("click",async()=>{e.classList.contains("active-library")&&e.classList.remove("active-library"),t.classList.add("active-library"),await g(m)}),e.addEventListener("click",async()=>{t.classList.contains("active-library")&&t.classList.remove("active-library"),e.classList.add("active-library"),await g("toQueue")})},y=r(".library-film_info_modal"),h=r(".img_content"),b=r(".film-detail_votes"),E=r(".film_title"),L=r(".film-detail_popularity"),_=r(".film-detail_original-title"),$=r(".film-detail_genre"),w=r(".film-detail_description"),M=r("#close-button"),T=r(".library-gallery"),O=()=>{T.addEventListener("click",t=>{let e=t.target.parentNode,a=e.querySelector(".modal-info"),i=a.getAttribute("data-vote-count"),o=a.getAttribute("data-vote-avg");b.innerHTML=`Vote / Votes: ${o} / ${i}`;let n=r(".modal"),l=e.dataset.id;n.dataset.movieId=l;let d=e.querySelector("img"),c=d.getAttribute("src");h.innerHTML=`<img src="${c}">`;let s=e.querySelector(".container-info b"),u=s.textContent;E.innerHTML=` ${u} `;let m=a.getAttribute("data-popularity");L.innerHTML=`Popularity: ${m} `;let v=a.getAttribute("data_original_title");_.innerHTML=`Original-title: ${"undefined"===v?u:v} `;let g=e.querySelector(".container-info"),f=g.querySelector(".cont-descr"),p=f.querySelector("p").textContent;$.innerHTML=`Genre: ${p}`;let M=a.getAttribute("data-about");w.innerHTML+=` ${M} `,y.showModal()})};M.addEventListener("click",()=>{(function(){let t=y.querySelectorAll('[class*="film-detail"]');t.forEach(t=>{t.innerHTML=""})})(),y.close()});let x="toWatch",R="toQueue",C=r(".library-film_info_modal .modal"),A=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},Q=()=>{C.addEventListener("click",t=>{let e=t.target,a=t.currentTarget.dataset.movieId,i=c(x),o=c(R),n=d(i),l=d(o),r={id:a};"toWatch"===e.dataset.action?n.includes(a)||(i.push(r),A(x,i),e.textContent="REMOVE FROM WATCHED",e.dataset.action="toWatchRmv"):"toQueue"===e.dataset.action?l.includes(a)||(o.push(r),A(R,o),e.textContent="REMOVE FROM QUEUE",e.dataset.action="toQueueRmv"):"toWatchRmv"===e.dataset.action?(i=i.filter(t=>t.id!==a),A(x,i),e.textContent="TO WATCHED",e.dataset.action="toWatch"):"toQueueRmv"===e.dataset.action&&(o=o.filter(t=>t.id!==a),A(R,o),e.textContent="ADD TO QUEUE",e.dataset.action="toQueue")})},S=r(".library-film_info_modal .modal"),W=r(".library-gallery"),q=(t,e,a)=>{let i=d(t);"toWatch"===e.dataset.action&&i.includes(a)&&(e.textContent="REMOVE FROM WATCHED",e.dataset.action="toWatchRmv"),"toWatchRmv"!==e.dataset.action||i.includes(a)||(e.textContent="TO WATCHED",e.dataset.action="toWatch")},H=(t,e,a)=>{let i=d(t);"toQueue"===e.dataset.action&&i.includes(a)&&(e.textContent="REMOVE FROM QUEUE",e.dataset.action="toQueueRmv"),"toQueueRmv"!==e.dataset.action||i.includes(a)||(e.textContent="ADD TO QUEUE",e.dataset.action="toQueue")},D=t=>{let e=t.target.parentNode,a=S.querySelector(".watch"),i=S.querySelector(".queue"),o=e.dataset.id,n=c("toWatch"),l=c("toQueue");q(n,a,o),H(l,i,o)},U=()=>{W.addEventListener("click",D)};window.addEventListener("DOMContentLoaded",()=>{p(),O(),Q(),U()})}();
//# sourceMappingURL=library.c674ba09.js.map
