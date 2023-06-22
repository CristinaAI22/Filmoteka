function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=e.parcelRequire4383;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire4383=n);var o=n("2shzp"),l=n("7Y9D8");const r=t=>{let e=document.querySelector(t);if(e)return e;throw Error(`the ${t} does not exist`)};function d(t){let e=[];return t.forEach(t=>{e.push(t.id)}),e}const s=t=>localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):[],c=r(".library-gallery"),u=t=>{let e=t.map(t=>{let{genres:e,original_title:a,poster_path:i,id:n,release_date:o}=t;return`<div class="photo-card" data-id="${n}" >
      <div
        class="modal-info"
        data-vote-avg="${t.vote_average}"
        data-vote-count="${t.vote_count}"
        data-popularity="${t.popularity}"
        data-about="${t.overview}"
        data_original_title="${t.original_title}"
        >
      </div>
    <img src="${i=i?`https://image.tmdb.org/t/p/w500${i}`:"../../images/no-signal-img.jpg"}" class="image" alt="${a}" />
     <div class="overlay-text">
        <h1>${Math.round(10*t.vote_average)/10}</h1>
    </div>
  <div class="container-info">
    <b class="title">${a}</b>
    <div class="cont-descr">
      <p class="descr-item">${e=function(t){let e="";return t.forEach(t=>{e=e+t.name+", "}),e=e?e.slice(0,-2):"N/A"}(e)}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${o=function(t){let e=t?t.split("-")[0]:"N/A";return e}(o)}</p>
    </div>
  </div>
</div>`}).join("");c.innerHTML=e},m="toWatch",y=r(".no-movie");async function v(e){t(l).Loading.standard("Loading..."),y.classList.remove("is-hidden");try{let t=s(e);t=d(t);let a=await p(t);0!==a.length&&y.classList.add("is-hidden"),u(a)}catch(t){console.log(t)}finally{t(l).Loading.remove()}}const p=async t=>{let e=[];return await Promise.all(t.map(async t=>{try{let a=`https://api.themoviedb.org/3/movie/${t}?api_key=53b2ac0d64cbeedea763734f4fe8a4ce`,i=await (0,o.default).get(a),n=i.data;e.push(n)}catch(t){console.log(t)}})),e},g=async()=>{await v(m);let t=r('[data-whichLibrary="watched"]'),e=r('[data-whichLibrary="queue"]');t.addEventListener("click",async()=>{e.classList.contains("active-library")&&e.classList.remove("active-library"),t.classList.add("active-library"),await v(m)}),e.addEventListener("click",async()=>{t.classList.contains("active-library")&&t.classList.remove("active-library"),e.classList.add("active-library"),await v("toQueue")})};var f=n("jT5kn");const h=r(".library-film_info_modal"),L=r(".img_content"),b=r(".film-detail_votes"),E=r(".film-detail_votes2"),w=r(".film_title"),_=r(".film-detail_popularity"),M=r(".film-detail_original-title"),T=r(".film-detail_genre"),$=r(".film-detail_description"),S=r("#close-button"),k=r(".library-gallery"),O=r(".modal"),q=r(".youtubeButtonLibrary"),A=r(".trailerLibrary"),R=()=>{k.addEventListener("click",t=>{let e=t.target.parentNode,a=e.querySelector(".modal-info"),i=a.getAttribute("data-vote-count"),n=a.getAttribute("data-vote-avg"),o=Number(n);b.innerHTML=` ${Math.round(10*o)/10} `,E.innerHTML=` / ${i}`;let l=e.dataset.id;O.dataset.movieId=l;let r=e.querySelector("img"),d=r.getAttribute("src");L.innerHTML=`<img src="${d}">`;let s=e.querySelector(".container-info b"),c=s.textContent;w.innerHTML=` ${c} `;let u=a.getAttribute("data-popularity");_.innerHTML=`Popularity: ${Math.round(u)} `;let m=a.getAttribute("data_original_title");M.innerHTML=`Original-title: ${"undefined"===m?c:m} `;let y=e.querySelector(".container-info"),v=y.querySelector(".cont-descr"),p=v.querySelector("p").textContent;T.innerHTML=`Genre: ${p}`;let g=a.getAttribute("data-about");$.innerHTML+=` ${g} `,h.showModal()})};function x(){let t=h.querySelectorAll('[class*="film-detail"]');t.forEach(t=>{t.innerHTML=""}),A.innerHTML=""}q.addEventListener("click",async()=>{let t=O.getAttribute("data-movie-id");console.log(t);let e=await (0,f.fetchMovieTrailer)(t);A.innerHTML=`<iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/${e}"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer;
                                  autoplay;
                                  clipboard-write;
                                  encrypted-media;
                                  gyroscope;
                                  picture-in-picture;
                                  web-share"
                                  allowfullscreen
                                >
                                </iframe>`}),S.addEventListener("click",()=>{x(),h.close()}),window.addEventListener("click",t=>{t.target==h&&(x(),h.close())}),document.addEventListener("keydown",t=>{t.preventDefault(),27==t.keyCode&&(x(),h.close())});const C="toWatch",D="toQueue",H=r(".library-film_info_modal .modal"),Q=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},W=()=>{H.addEventListener("click",t=>{let e=t.target,a=t.currentTarget.dataset.movieId,i=s(C),n=s(D),o=d(i),l=d(n),r={id:a};"toWatch"===e.dataset.action?(o.includes(a)||(i.push(r),Q(C,i),e.textContent="REMOVE FROM WATCHED",e.dataset.action="toWatchRmv"),v(C)):"toQueue"===e.dataset.action?(l.includes(a)||(n.push(r),Q(D,n),e.textContent="REMOVE FROM QUEUE",e.dataset.action="toQueueRmv"),v(D)):"toWatchRmv"===e.dataset.action?(i=i.filter(t=>t.id!==a),Q(C,i),e.textContent="ADD TO WATCHED",e.dataset.action="toWatch",v(C)):"toQueueRmv"===e.dataset.action&&(n=n.filter(t=>t.id!==a),Q(D,n),e.textContent="ADD TO QUEUE",e.dataset.action="toQueue",v(D))})},U=r(".library-film_info_modal .modal"),N=r(".library-gallery"),I=(t,e,a)=>{let i=d(t);"toWatch"===e.dataset.action&&i.includes(a)&&(e.textContent="REMOVE FROM WATCHED",e.dataset.action="toWatchRmv"),"toWatchRmv"!==e.dataset.action||i.includes(a)||(e.textContent="ADD TO WATCHED",e.dataset.action="toWatch")},F=(t,e,a)=>{let i=d(t);"toQueue"===e.dataset.action&&i.includes(a)&&(e.textContent="REMOVE FROM QUEUE",e.dataset.action="toQueueRmv"),"toQueueRmv"!==e.dataset.action||i.includes(a)||(e.textContent="ADD TO QUEUE",e.dataset.action="toQueue")},V=t=>{let e=t.target.parentNode,a=U.querySelector(".watch"),i=U.querySelector(".queue"),n=e.dataset.id,o=s("toWatch"),l=s("toQueue");I(o,a,n),F(l,i,n)},j=()=>{N.addEventListener("click",V)};window.addEventListener("DOMContentLoaded",()=>{g(),R(),W(),j()});const J=document.querySelector("body"),P=document.querySelector(".dl-btn"),Y=document.querySelector(".fa-sun"),z=document.querySelector(".fa-moon");function B(t){localStorage.setItem("darkmode",t)}!function(){let t=localStorage.getItem("darkmode");null===t?(B(!1),Y.style.display="inline",z.style.display="none"):"true"===t?(J.classList.add("darkmode"),Y.style.display="none",z.style.display="inline"):"false"===t&&(Y.style.display="inline",z.style.display="none")}(),P.addEventListener("click",()=>{J.classList.toggle("darkmode"),Y.classList.add("animated"),z.classList.add("animated"),B(J.classList.contains("darkmode")),J.classList.contains("darkmode")?(Y.style.display="none",z.style.display="inline"):(Y.style.display="inline",z.style.display="none"),setTimeout(()=>{Y.classList.remove("animated"),z.classList.remove("anmated")},500)});
//# sourceMappingURL=library.ff8316a4.js.map
