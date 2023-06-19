!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=a.parcelRequire4383;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,a){i[e]=a},a.parcelRequire4383=r);var l=r("dIxxU"),o=r("6JpON");let s=e=>{let a=document.querySelector(e);if(a)return a;throw Error(`the ${e} dose not exist`)},n=e=>localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[],d=s(".library-gallery"),c=e=>{let a=e.map(e=>{let a,{genres:t,homepage:i,original_title:r,poster_path:l,id:o,release_date:s}=e;return a="",t.forEach(e=>{a=a+e.name+", "}),`<div class="photo-card" data-id="${o}" >
      <div
        class="modal-info"
        data-vote-avg="${e.vote_average}"
        data-vote-count="${e.vote_count}"
        data-popularity="${e.popularity}"
        data-about="${e.overview}"
        data_original_title="${e.original_title}"
        >
      </div>
      <a href="${i}" target="_blank">
    <img src="${l=l?`https://image.tmdb.org/t/p/w500${l}`:"../../images/no-signal-img.jpg"}" class="image" alt="${r}" />
      </a>
  <div class="container-info">
    <b class="title">${r}</b>
    <div class="cont-descr">
      <p class="descr-item">${t=a=a?a.slice(0,-2):"N/A"}</p>
      <p class="descr-item">|</p>
      <p class="descr-item">${s=function(e){let a=e?e.split("-")[0]:"N/A";return a}(s)}</p>
    </div>
  </div>
</div>`}).join("");d.innerHTML=a},p="toWatch",u=s(".no-movie"),v=async a=>{e(o).Loading.standard("Loading..."),u.classList.remove("is-hidden");try{let e=n(a);e=function(e){let a=[];return e.forEach(e=>{a.push(e.id)}),a}(e);let t=await g(e);0!==t.length&&u.classList.add("is-hidden"),c(t)}catch(e){console.log(e)}finally{e(o).Loading.remove()}},g=async e=>{let a=[];return await Promise.all(e.map(async e=>{try{let t=`https://api.themoviedb.org/3/movie/${e}?api_key=53b2ac0d64cbeedea763734f4fe8a4ce`,i=await (0,l.default).get(t),r=i.data;a.push(r)}catch(e){console.log(e)}})),a},f=async()=>{await v(p);let e=s('[data-whichLibrary="watched"]'),a=s('[data-whichLibrary="queue"]');e.addEventListener("click",async()=>{a.classList.contains("active-library")&&a.classList.remove("active-library"),e.classList.add("active-library"),await v(p)}),a.addEventListener("click",async()=>{e.classList.contains("active-library")&&e.classList.remove("active-library"),a.classList.add("active-library"),await v("toQueue")})};window.addEventListener("DOMContentLoaded",f)}();
//# sourceMappingURL=library.f495cc22.js.map
