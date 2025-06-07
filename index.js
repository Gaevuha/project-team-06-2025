import{a as c,S as A}from"./assets/vendor-Breb73Hu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const S={artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")};c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function P(e=1){const r={limit:8,page:e},t="/artists";try{return(await c.get(t,{params:r})).data}catch(a){throw console.error("Помилка при завантаженні артистів:",a.message),a}}async function O(e){const r=`/artists/${e}`;try{const t=await c.get(r);return console.log(t.data),t.data}catch(t){throw console.error("Помилка при отриманні артиста:",t.message),t}}async function E(e){const r=`/artists/${e}/albums`;try{return(await c.get(r)).data}catch(t){throw console.error("Помилка при отриманні альбомів артиста:",t.message),t}}async function T(e=1){const r="/feedbacks",t={limit:3,page:e};try{return(await c.get(r,{params:t})).data}catch(a){throw console.error("Помилка при отриманні відгуків:",a.message),a}}async function F(e){const{_id:r,strArtist:t,strArtistThumb:a,intFormedYear:s,intMembers:n,strCountry:i,strGender:l,strBiographyEN:f,genres:d=[],albumsList:g=[]}=e,_=d.map(p=>`<li class="artist__genre-item">${p}</li>`).join("");console.log("genres:",d);const b=g.map(({strAlbum:p,intYearReleased:h,tracks:w=[]})=>{const $=w.map(({strTrack:k,intDuration:m,movie:o})=>{const L=Math.floor(m/6e4),M=String(Math.floor(m%6e4/1e3)).padStart(2,"0"),v=o!=null&&o.startsWith("http")?o:o?`https://${o}`:"";return`
        <li class="track__row">
          <span class="track__title">${k}</span>
          <span class="track__time">${L}:${M}</span>
          <span class="track__link">
            ${o?`<a href="${v}" target="_blank" aria-label="YouTube link">
              <svg class="icon-youtube">
                <use href="/img/sprite.svg#icon-youtube"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="artist__genre-item">
        <p class="album__name">${p} (${h})</p>
        <span>Track</span><span>Time</span><span>Link</span>
        <ul class="album__track-list">${$}</ul>
      </li>
    `}).join(""),y=`
    <li class="artists__item" data-id="${r}">
      <p class="artists__name">${t}</p>
      <div class="wrap-artists__image" style="background-image: url('${a}');"></div>
      <div class="artist__info">
        <p class="year">Years active <span class="artist__info-value">${s}–present</span></p>
        <p class="gender">Sex <span class="artist__info-value">${l}</span></p>
        <p class="members">Members <span class="artist__info-value">${n}</span></p>
        <p class="country">Country <span class="artist__info-value">${i}</span></p>
        <p class="title__biography">Biography</p>
        <p class="artists__biography">${f}</p>
      </div>
      <ul class="artists__genres-list">${_}</ul>
      <p class="title__albums-modal">Albums</p>
      <ul class="modal__album-list">${b}</ul>
    </li>
  `;S.modalAlbumList.innerHTML=y}function j(e){const r=document.querySelector(".swiper-wrapper"),t=e.map(({name:a,rating:s,descr:n})=>`
    <div class="swiper-slide">
        <p class="feedback-stars">${s}</p>
        <p class="feedback-descr">"${n}"</p>
        <p class="feedback-name">${a}</p>
    </div>
  `).join("");r.innerHTML=t,console.log(r)}const u="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const e=await O(u),a=((await P()).artists||[]).find(l=>l._id===u),s=(a==null?void 0:a.genres)||[],{albumsList:n=[]}=await E(u),i={...e,genres:s,albumsList:n};F(i)}catch(e){console.error("Помилка при завантаженні артиста або альбомів:",e.message)}});function q(){new A(".swiper",{cssMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0})}async function x(){const e=await T();j(e.data),q()}x();
//# sourceMappingURL=index.js.map
