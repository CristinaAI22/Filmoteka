!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequire4383;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},e.parcelRequire4383=i);var n=i("jIucq");let r=(0,n.default)("#film_info_modal"),a=(0,n.default)(".img_content"),o=(0,n.default)(".film-detail_votes"),d=(0,n.default)(".film-detail_votes2"),u=(0,n.default)(".film_title"),f=(0,n.default)(".film-detail_popularity"),c=(0,n.default)(".film-detail_original-title"),s=(0,n.default)(".film-detail_genre"),g=(0,n.default)(".film-detail_description"),p=(0,n.default)("#close-button"),m=(0,n.default)(".gallery");function y(){let e=r.querySelectorAll('[class*="film-detail"]');e.forEach(e=>{e.innerHTML=""})}m.addEventListener("click",function(e){let t=e.target.parentNode,l=t.querySelector(".modal-info"),i=l.getAttribute("data-vote-count"),p=l.getAttribute("data-vote-avg"),m=Number(p);o.innerHTML=` ${Math.round(10*m)/10} `,d.innerHTML=` / ${i}`;let y=(0,n.default)(".modal"),b=t.dataset.id;y.dataset.movieId=b;let v=t.querySelector("img"),_=v.getAttribute("src");a.innerHTML=`<img src="${_}">`;let L=t.querySelector(".container-info b"),M=L.textContent;u.innerHTML=` ${M} `;let T=l.getAttribute("data-popularity");f.innerHTML=`Popularity: ${Math.round(T)} `;let q=l.getAttribute("data_original_title");c.innerHTML=`Original-title: ${"undefined"===q?M:q} `;let H=t.querySelector(".container-info"),w=H.querySelector(".cont-descr"),$=w.querySelector("p").textContent;s.innerHTML=`Genre: ${$}`;let h=l.getAttribute("data-about");g.innerHTML+=` ${h} `,r.showModal()}),p.addEventListener("click",()=>{y(),r.close()}),window.addEventListener("click",e=>{e.target==r&&(y(),r.close())})}();
//# sourceMappingURL=index.6e2c102b.js.map
