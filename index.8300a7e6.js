var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequire4383;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},e.parcelRequire4383=i);var n=i("1zbvg");const o=(0,n.default)("#film_info_modal"),r=(0,n.default)(".img_content"),a=(0,n.default)(".film-detail_votes"),d=(0,n.default)(".film_title"),u=(0,n.default)(".film-detail_popularity"),f=(0,n.default)(".film-detail_original-title"),c=(0,n.default)(".film-detail_genre"),s=(0,n.default)(".film-detail_description"),g=(0,n.default)("#close-button"),p=(0,n.default)(".gallery");function m(){let e=o.querySelectorAll('[class*="film-detail"]');e.forEach(e=>{e.innerHTML=""})}p.addEventListener("click",function(e){let t=e.target.parentNode,l=t.querySelector(".modal-info"),i=l.getAttribute("data-vote-count"),g=l.getAttribute("data-vote-avg");a.innerHTML=`Vote / Votes: ${g} / ${i}`;let p=(0,n.default)(".modal"),m=t.dataset.id;p.dataset.movieId=m;let y=t.querySelector("img"),b=y.getAttribute("src");r.innerHTML=`<img src="${b}">`;let v=t.querySelector(".container-info b"),_=v.textContent;d.innerHTML=` ${_} `;let L=l.getAttribute("data-popularity");u.innerHTML=`Popularity: ${L} `;let T=l.getAttribute("data_original_title");f.innerHTML=`Original-title: ${"undefined"===T?_:T} `;let w=t.querySelector(".container-info"),M=w.querySelector(".cont-descr"),q=M.querySelector("p").textContent;c.innerHTML=`Genre: ${q}`;let H=l.getAttribute("data-about");s.innerHTML+=` ${H} `,o.showModal()}),g.addEventListener("click",()=>{m(),o.close()}),window.onclick=e=>{console.log(e.target)},window.onclick=e=>{e.target==o&&(m(),o.close())};
//# sourceMappingURL=index.8300a7e6.js.map