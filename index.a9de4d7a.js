!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},l=e.parcelRequire4383;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in i){var l=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,l.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequire4383=l);var r=l("jIucq"),a=l("aWjK1");let n=(0,r.default)(".film_info_modal"),o=(0,r.default)(".modal"),d=(0,r.default)(".img_content"),u=(0,r.default)(".film-detail_votes"),c=(0,r.default)(".film-detail_votes2"),f=(0,r.default)(".film_title"),s=(0,r.default)(".film-detail_popularity"),p=(0,r.default)(".film-detail_original-title"),m=(0,r.default)(".film-detail_genre"),y=(0,r.default)(".film-detail_description"),g=(0,r.default)("#close-button"),b=(0,r.default)(".gallery"),v=(0,r.default)(".youtubeButton"),w=(0,r.default)(".trailer");function L(){let e=n.querySelectorAll('[class*="film-detail"]');e.forEach(e=>{e.innerHTML=""}),w.innerHTML=""}b.addEventListener("click",function(e){let t=e.target.parentNode,i=t.querySelector(".modal-info"),l=i.getAttribute("data-vote-count"),r=i.getAttribute("data-vote-avg"),a=Number(r);u.innerHTML=` ${(Math.round(10*a)/10).toFixed(1)} `,c.innerHTML=` / ${l}`;let g=t.dataset.id;o.dataset.movieId=g;let b=t.querySelector("img"),v=b.getAttribute("src");d.innerHTML=`<img src="${v}">`;let w=t.querySelector(".container-info b"),L=w.textContent;f.innerHTML=` ${L} `;let M=i.getAttribute("data-popularity");s.innerHTML=`Popularity: ${Math.round(M)} `;let T=i.getAttribute("data_original_title");p.innerHTML=`Original-title: ${"undefined"===T?L:T} `;let _=t.querySelector(".container-info"),H=_.querySelector(".cont-descr"),h=H.querySelector("p").textContent;m.innerHTML=`Genre: ${h}`;let q=i.getAttribute("data-about");y.innerHTML+=` ${q} `,n.showModal()}),v.addEventListener("click",async()=>{let e=o.getAttribute("data-movie-id"),t=await (0,a.fetchMovieTrailer)(e);w.innerHTML=`<iframe
                                 is="ytplayer"
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
                                </iframe>`}),g.addEventListener("click",()=>{L(),n.close()}),window.addEventListener("click",e=>{e.target==n&&(L(),n.close())}),n.addEventListener("keydown",e=>{e.preventDefault(),console.log(e),27==e.keyCode&&(L(),n.close())})}();
//# sourceMappingURL=index.a9de4d7a.js.map
