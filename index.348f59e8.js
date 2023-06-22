var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequire4383;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},e.parcelRequire4383=i);var r=i("1zbvg"),n=i("jT5kn");const a=(0,r.default)(".film_info_modal"),o=(0,r.default)(".modal"),d=(0,r.default)(".img_content"),u=(0,r.default)(".film-detail_votes"),c=(0,r.default)(".film-detail_votes2"),f=(0,r.default)(".film_title"),s=(0,r.default)(".film-detail_popularity"),g=(0,r.default)(".film-detail_original-title"),p=(0,r.default)(".film-detail_genre"),m=(0,r.default)(".film-detail_description"),y=(0,r.default)("#close-button"),b=(0,r.default)(".gallery"),v=(0,r.default)(".youtubeButton"),w=(0,r.default)(".trailer");function L(){let e=a.querySelectorAll('[class*="film-detail"]');e.forEach(e=>{e.innerHTML=""}),w.innerHTML=""}b.addEventListener("click",function(e){let t=e.target.parentNode,l=t.querySelector(".modal-info"),i=l.getAttribute("data-vote-count"),r=l.getAttribute("data-vote-avg"),n=Number(r);u.innerHTML=` ${Math.round(10*n)/10} `,c.innerHTML=` / ${i}`;let y=t.dataset.id;o.dataset.movieId=y;let b=t.querySelector("img"),v=b.getAttribute("src");d.innerHTML=`<img src="${v}">`;let w=t.querySelector(".container-info b"),L=w.textContent;f.innerHTML=` ${L} `;let T=l.getAttribute("data-popularity");s.innerHTML=`Popularity: ${Math.round(T)} `;let M=l.getAttribute("data_original_title");g.innerHTML=`Original-title: ${"undefined"===M?L:M} `;let _=t.querySelector(".container-info"),h=_.querySelector(".cont-descr"),H=h.querySelector("p").textContent;p.innerHTML=`Genre: ${H}`;let q=l.getAttribute("data-about");m.innerHTML+=` ${q} `,a.showModal()}),v.addEventListener("click",async()=>{let e=o.getAttribute("data-movie-id");console.log(e);let t=await (0,n.fetchMovieTrailer)(e);w.innerHTML=`<iframe
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
                                </iframe>`}),y.addEventListener("click",()=>{L(),a.close()}),window.addEventListener("click",e=>{e.target==a&&(L(),a.close())}),document.addEventListener("keydown",e=>{e.preventDefault(),console.log(e),27==e.keyCode&&(L(),a.close())});
//# sourceMappingURL=index.348f59e8.js.map
