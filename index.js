import{a as l,S}from"./assets/vendor-Breb73Hu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const A={artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")};l.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(a=1){const r={limit:8,page:a},e="/artists";try{return(await l.get(e,{params:r})).data}catch(n){throw console.error("Помилка при завантаженні артистів:",n.message),n}}async function B(a){const r=`/artists/${a}`;try{const e=await l.get(r);return console.log(e.data),e.data}catch(e){throw console.error("Помилка при отриманні артиста:",e.message),e}}async function F(a){const r=`/artists/${a}/albums`;try{return(await l.get(r)).data}catch(e){throw console.error("Помилка при отриманні альбомів артиста:",e.message),e}}async function P(a=1){const r=[],e="/feedbacks",t={limit:25,page:a};try{const s=await l.get(e,{params:t}),i=s.data.data[0];r.push(i);const g=s.data.total,d=Math.ceil(g/25);let u;do u=Math.floor(Math.random()*d)+1;while(u===1||u===d);const p=(await l.get(e,{params:{limit:25,page:u}})).data.data,f=p[Math.floor(Math.random()*p.length)];r.push(f);const h=(await l.get(e,{params:{limit:25,page:d}})).data.data.at(-1);return r.push(h),console.log(r),r}catch(s){throw console.error("Помилка при отриманні відгуків:",s.message),s}}const T="/src/img/sprite.svg",q="icon-youtube";async function O(a){const{_id:r,strArtist:e,strArtistThumb:n,intFormedYear:t,intMembers:s,strCountry:o,strGender:i,strBiographyEN:g,genres:d=[],albumsList:u=[]}=a,b=d.map(m=>`<li class="artist__genre-item">${m}</li>`).join("");console.log("genres:",d);const p=u.map(({strAlbum:m,intYearReleased:_,tracks:h=[]})=>{const k=h.map(({strTrack:L,intDuration:w,movie:c})=>{const $=Math.floor(w/6e4),v=String(Math.floor(w%6e4/1e3)).padStart(2,"0"),M=c!=null&&c.startsWith("http")?c:c?`https://${c}`:"";return`
        <li class="track__row">
          <span class="track__title">${L}</span>
          <span class="track__time">${$}:${v}</span>
          <span class="track__link">
            ${c?`<a href="${M}" target="_blank" aria-label="YouTube link">
              <svg class="icon-youtube">
                <use href="${T}#${q}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="artist__genre-item">
        <p class="album__name">${m} (${_})</p>
        <span>Track</span><span>Time</span><span>Link</span>
        <ul class="album__track-list">${k}</ul>
      </li>
    `}).join(""),f=`
    <li class="artists__item" data-id="${r}">
      <p class="artists__name">${e}</p>
      <div class="wrap-artists__image" style="background-image: url('${n}');"></div>
      <div class="artist__info">
        <p class="year">Years active <span class="artist__info-value">${t}–present</span></p>
        <p class="gender">Sex <span class="artist__info-value">${i}</span></p>
        <p class="members">Members <span class="artist__info-value">${s}</span></p>
        <p class="country">Country <span class="artist__info-value">${o}</span></p>
        <p class="title__biography">Biography</p>
        <p class="artists__biography">${g}</p>
      </div>
      <ul class="artists__genres-list">${b}</ul>
      <p class="title__albums-modal">Albums</p>
      <ul class="modal__album-list">${p}</ul>
    </li>
  `;A.modalAlbumList.innerHTML=f}function D(a){const r=document.querySelector(".swiper-wrapper"),e=a.map(({name:n,rating:t,descr:s})=>`
    <div class="swiper-slide">
        <p class="feedback-stars">${t} (тут будуть зірочки :) )</p>
        <p class="feedback-descr">"${s}"</p>
        <p class="feedback-name">${n}</p>
    </div>
  `).join("");r.innerHTML=e,console.log(r)}const y="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const a=await B(y),n=((await E()).artists||[]).find(i=>i._id===y),t=(n==null?void 0:n.genres)||[],{albumsList:s=[]}=await F(y),o={...a,genres:t,albumsList:s};O(o)}catch(a){console.error("Помилка при завантаженні артиста або альбомів:",a.message)}});function I(){new S(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:!0})}async function x(){const a=await P();D(a),I()}x();document.addEventListener("DOMContentLoaded",()=>{const a={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},r={scrollBehavior:"smooth",scrollDelay:300},e=t=>{a.menu.classList.toggle("is-open",t),document.body.style.overflow=t?"hidden":"",document.documentElement.style.scrollBehavior=t?"auto":r.scrollBehavior},n=t=>{const s=document.querySelector(t);if(!s)return;const o=a.header.offsetHeight,i=s.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:i,behavior:r.scrollBehavior})};a.openBtn.addEventListener("click",()=>e(!0)),a.closeBtn.addEventListener("click",()=>e(!1)),a.menu.addEventListener("click",t=>{!t.target.closest("[data-menu-close]")&&!t.target.closest(".link-menu")&&!t.target.closest(".link-logo")&&e(!1)}),a.links.forEach(t=>{t.addEventListener("click",s=>{const o=t.getAttribute("href");if(!o.startsWith("#"))return;s.preventDefault(),a.menu.classList.contains("is-open")?(e(!1),setTimeout(()=>n(o),r.scrollDelay)):n(o)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a.menu.classList.contains("is-open")&&e(!1)})});
//# sourceMappingURL=index.js.map
