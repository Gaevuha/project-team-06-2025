import{a as c,S}from"./assets/vendor-Breb73Hu.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const v={artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")};c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function F(r=1){const a={limit:8,page:r},e="/artists";try{return(await c.get(e,{params:a})).data}catch(n){throw console.error("Помилка при завантаженні артистів:",n.message),n}}async function P(r){const a=`/artists/${r}`;try{const e=await c.get(a);return console.log(e.data),e.data}catch(e){throw console.error("Помилка при отриманні артиста:",e.message),e}}async function T(r){const a=`/artists/${r}/albums`;try{return(await c.get(a)).data}catch(e){throw console.error("Помилка при отриманні альбомів артиста:",e.message),e}}async function O(r=1){const a=[],e="/feedbacks",t={limit:25,page:r};try{const s=await c.get(e,{params:t}),d=s.data.data[0];a.push(d);const g=s.data.total,l=Math.ceil(g/25);let p;do p=Math.floor(Math.random()*l)+1;while(p===1||p===l);const u=(await c.get(e,{params:{limit:25,page:p}})).data.data,f=u[Math.floor(Math.random()*u.length)];a.push(f);const b=(await c.get(e,{params:{limit:25,page:l}})).data.data.at(-1);return a.push(b),console.log(a),a}catch(s){throw console.error("Помилка при отриманні відгуків:",s.message),s}}async function E(r){const{_id:a,strArtist:e,strArtistThumb:n,intFormedYear:t,intMembers:s,strCountry:o,strGender:d,strBiographyEN:g,genres:l=[],albumsList:p=[]}=r,y=l.map(m=>`<li class="artist__genre-item">${m}</li>`).join("");console.log("genres:",l);const u=p.map(({strAlbum:m,intYearReleased:h,tracks:b=[]})=>{const k=b.map(({strTrack:$,intDuration:w,movie:i})=>{const M=Math.floor(w/6e4),L=String(Math.floor(w%6e4/1e3)).padStart(2,"0"),A=i!=null&&i.startsWith("http")?i:i?`https://${i}`:"";return`
        <li class="track__row">
          <span class="track__title">${$}</span>
          <span class="track__time">${M}:${L}</span>
          <span class="track__link">
            ${i?`<a href="${A}" target="_blank" aria-label="YouTube link">
              <svg class="icon-youtube">
                <use href="/img/sprite.svg#icon-youtube"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="artist__genre-item">
        <p class="album__name">${m} (${h})</p>
        <span>Track</span><span>Time</span><span>Link</span>
        <ul class="album__track-list">${k}</ul>
      </li>
    `}).join(""),f=`
    <li class="artists__item" data-id="${a}">
      <p class="artists__name">${e}</p>
      <div class="wrap-artists__image" style="background-image: url('${n}');"></div>
      <div class="artist__info">
        <p class="year">Years active <span class="artist__info-value">${t}–present</span></p>
        <p class="gender">Sex <span class="artist__info-value">${d}</span></p>
        <p class="members">Members <span class="artist__info-value">${s}</span></p>
        <p class="country">Country <span class="artist__info-value">${o}</span></p>
        <p class="title__biography">Biography</p>
        <p class="artists__biography">${g}</p>
      </div>
      <ul class="artists__genres-list">${y}</ul>
      <p class="title__albums-modal">Albums</p>
      <ul class="modal__album-list">${u}</ul>
    </li>
  `;v.modalAlbumList.innerHTML=f}function x(r){const a=document.querySelector(".swiper-wrapper"),e=r.map(({name:n,rating:t,descr:s})=>`
    <div class="swiper-slide">
        <p class="feedback-stars">${t} (тут будуть зірочки :) )</p>
        <p class="feedback-descr">"${s}"</p>
        <p class="feedback-name">${n}</p>
    </div>
  `).join("");a.innerHTML=e,console.log(a)}const _="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const r=await P(_),n=((await F()).artists||[]).find(d=>d._id===_),t=(n==null?void 0:n.genres)||[],{albumsList:s=[]}=await T(_),o={...r,genres:t,albumsList:s};E(o)}catch(r){console.error("Помилка при завантаженні артиста або альбомів:",r.message)}});function j(){new S(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:!0})}async function q(){const r=await O();x(r),j()}q();
//# sourceMappingURL=index.js.map
