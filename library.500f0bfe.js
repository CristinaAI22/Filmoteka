!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},l=t.parcelRequire4383;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire4383=l);var o=l("dIxxU"),n=l("6JpON");let r=e=>{let t=document.querySelector(e);if(t)return t;throw Error(`the ${e} does not exist`)};function d(e){let t=[];return e.forEach(e=>{t.push(e.id)}),t}let s=e=>localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[],c=r(".library-gallery"),u=e=>{let t=e.map(e=>{let t,{genres:a,original_title:i,poster_path:l,id:o,release_date:n}=e;return t="",a.forEach(e=>{t=t+e.name+", "}),`<div class="photo-card" data-id="${o}" >
      <div
        class="modal-info"
        data-vote-avg="${e.vote_average}"
        data-vote-count="${e.vote_count}"
        data-popularity="${e.popularity}"
        data-about="${e.overview}"
        data_original_title="${e.original_title}"
        >
      </div>
    <img src="${l=l?`https://image.tmdb.org/t/p/w500${l}`:"../../images/no-signal-img.jpg"}" class="image" alt="${i}" />
     <div class="overlay-text">
        <h1>${Math.round(10*e.vote_average)/10}</h1>
    </div>
  <div class="container-info">
    <b class="title">${i}</b>
    <div class="cont-descr">
      <p class="descr-item">${a=t=t?t.slice(0,-2):"N/A"}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${n=function(e){let t=e?e.split("-")[0]:"N/A";return t}(n)}</p>
    </div>
  </div>
</div>`}).join("");c.innerHTML=t},m="toWatch",y=r(".no-movie");async function v(t){e(n).Loading.standard("Loading..."),y.classList.remove("is-hidden");try{let e=s(t);e=d(e);let a=await p(e);0!==a.length&&y.classList.add("is-hidden"),u(a)}catch(e){console.log(e)}finally{e(n).Loading.remove()}}let p=async e=>{let t=[];return await Promise.all(e.map(async e=>{try{let a=`https://api.themoviedb.org/3/movie/${e}?api_key=53b2ac0d64cbeedea763734f4fe8a4ce`,i=await (0,o.default).get(a),l=i.data;t.push(l)}catch(e){console.log(e)}})),t},g=async()=>{await v(m);let e=r('[data-whichLibrary="watched"]'),t=r('[data-whichLibrary="queue"]');e.addEventListener("click",async()=>{t.classList.contains("active-library")&&t.classList.remove("active-library"),e.classList.add("active-library"),await v(m)}),t.addEventListener("click",async()=>{e.classList.contains("active-library")&&e.classList.remove("active-library"),t.classList.add("active-library"),await v("toQueue")})};var f=l("aWjK1");let h=r(".library-film_info_modal"),L=r(".img_content"),b=r(".film-detail_votes"),E=r(".film-detail_votes2"),w=r(".film_title"),_=r(".film-detail_popularity"),M=r(".film-detail_original-title"),T=r(".film-detail_genre"),$=r(".film-detail_description"),S=r("#close-button"),O=r(".library-gallery"),x=r(".modal"),k=r(".youtubeButtonLibrary"),q=r(".trailerLibrary"),A=()=>{O.addEventListener("click",e=>{let t=e.target.parentNode,a=t.querySelector(".modal-info"),i=a.getAttribute("data-vote-count"),l=a.getAttribute("data-vote-avg"),o=Number(l);b.innerHTML=` ${Math.round(10*o)/10} `,E.innerHTML=` / ${i}`;let n=t.dataset.id;x.dataset.movieId=n;let r=t.querySelector("img"),d=r.getAttribute("src");L.innerHTML=`<img src="${d}">`;let s=t.querySelector(".container-info b"),c=s.textContent;w.innerHTML=` ${c} `;let u=a.getAttribute("data-popularity");_.innerHTML=`Popularity: ${Math.round(u)} `;let m=a.getAttribute("data_original_title");M.innerHTML=`Original-title: ${"undefined"===m?c:m} `;let y=t.querySelector(".container-info"),v=y.querySelector(".cont-descr"),p=v.querySelector("p").textContent;T.innerHTML=`Genre: ${p}`;let g=a.getAttribute("data-about");$.innerHTML+=` ${g} `,h.showModal()})};function R(){let e=h.querySelectorAll('[class*="film-detail"]');e.forEach(e=>{e.innerHTML=""}),q.innerHTML=""}k.addEventListener("click",async()=>{let e=x.getAttribute("data-movie-id");console.log(e);let t=await (0,f.fetchMovieTrailer)(e);q.innerHTML=`<iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/${t}"
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
                                </iframe>`}),S.addEventListener("click",()=>{R(),h.close()}),window.addEventListener("click",e=>{e.target==h&&(R(),h.close())}),document.addEventListener("keydown",e=>{e.preventDefault(),27==e.keyCode&&(R(),h.close())});let C="toWatch",D="toQueue",H=r(".library-film_info_modal .modal"),W=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},Q=()=>{H.addEventListener("click",e=>{let t=e.target,a=e.currentTarget.dataset.movieId,i=s(C),l=s(D),o=d(i),n=d(l),r={id:a};"toWatch"===t.dataset.action?(o.includes(a)||(i.push(r),W(C,i),t.textContent="REMOVE FROM WATCHED",t.dataset.action="toWatchRmv"),v(C)):"toQueue"===t.dataset.action?(n.includes(a)||(l.push(r),W(D,l),t.textContent="REMOVE FROM QUEUE",t.dataset.action="toQueueRmv"),v(D)):"toWatchRmv"===t.dataset.action?(i=i.filter(e=>e.id!==a),W(C,i),t.textContent="ADD TO WATCHED",t.dataset.action="toWatch",v(C)):"toQueueRmv"===t.dataset.action&&(l=l.filter(e=>e.id!==a),W(D,l),t.textContent="ADD TO QUEUE",t.dataset.action="toQueue",v(D))})},U=r(".library-film_info_modal .modal"),N=r(".library-gallery"),I=(e,t,a)=>{let i=d(e);"toWatch"===t.dataset.action&&i.includes(a)&&(t.textContent="REMOVE FROM WATCHED",t.dataset.action="toWatchRmv"),"toWatchRmv"!==t.dataset.action||i.includes(a)||(t.textContent="ADD TO WATCHED",t.dataset.action="toWatch")},F=(e,t,a)=>{let i=d(e);"toQueue"===t.dataset.action&&i.includes(a)&&(t.textContent="REMOVE FROM QUEUE",t.dataset.action="toQueueRmv"),"toQueueRmv"!==t.dataset.action||i.includes(a)||(t.textContent="ADD TO QUEUE",t.dataset.action="toQueue")},V=e=>{let t=e.target.parentNode,a=U.querySelector(".watch"),i=U.querySelector(".queue"),l=t.dataset.id,o=s("toWatch"),n=s("toQueue");I(o,a,l),F(n,i,l)},j=()=>{N.addEventListener("click",V)};window.addEventListener("DOMContentLoaded",()=>{g(),A(),Q(),j()});let J=document.querySelector("body"),P=document.querySelector(".dl-btn"),B=document.querySelector(".fa-sun"),G=document.querySelector(".fa-moon");function K(e){localStorage.setItem("darkmode",e)}!function(){let e=localStorage.getItem("darkmode");null===e?(K(!1),B.style.display="inline",G.style.display="none"):"true"===e?(J.classList.add("darkmode"),B.style.display="none",G.style.display="inline"):"false"===e&&(B.style.display="inline",G.style.display="none")}(),P.addEventListener("click",()=>{J.classList.toggle("darkmode"),B.classList.add("animated"),G.classList.add("animated"),K(J.classList.contains("darkmode")),J.classList.contains("darkmode")?(B.style.display="none",G.style.display="inline"):(B.style.display="inline",G.style.display="none"),setTimeout(()=>{B.classList.remove("animated"),G.classList.remove("anmated")},500)})}();
//# sourceMappingURL=library.500f0bfe.js.map
