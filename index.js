import{a as c}from"./assets/vendor-B2YOV0tR.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const v={artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")};c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function P(r=1){const n={limit:8,page:r},t="/artists";try{return(await c.get(t,{params:n})).data}catch(e){throw console.error("Помилка при завантаженні артистів:",e.message),e}}async function O(r){const n=`/artists/${r}`;try{const t=await c.get(n);return console.log(t.data),t.data}catch(t){throw console.error("Помилка при отриманні артиста:",t.message),t}}async function S(r){const n=`/artists/${r}/albums`;try{return(await c.get(n)).data}catch(t){throw console.error("Помилка при отриманні альбомів артиста:",t.message),t}}async function T(r=1){const n="/feedbacks",t={limit:3,page:r};try{return(await c.get(n,{params:t})).data}catch(e){throw console.error("Помилка при отриманні відгуків:",e.message),e}}async function I(r){const{_id:n,strArtist:t,strArtistThumb:e,intFormedYear:s,intMembers:a,strCountry:o,strGender:l,strBiographyEN:f,genres:d=[],albumsList:g=[]}=r,_=d.map(u=>`<li class="artist__genre-item">${u}</li>`).join("");console.log("genres:",d);const y=g.map(({strAlbum:u,intYearReleased:h,tracks:$=[]})=>{const L=$.map(({strTrack:w,intDuration:m,movie:i})=>{const k=Math.floor(m/6e4),M=String(Math.floor(m%6e4/1e3)).padStart(2,"0"),A=i!=null&&i.startsWith("http")?i:i?`https://${i}`:"";return`
        <li class="track__row">
          <span class="track__title">${w}</span>
          <span class="track__time">${k}:${M}</span>
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
        <p class="album__name">${u} (${h})</p>
        <span>Track</span><span>Time</span><span>Link</span>
        <ul class="album__track-list">${L}</ul>
      </li>
    `}).join(""),b=`
    <li class="artists__item" data-id="${n}">
      <p class="artists__name">${t}</p>
      <div class="wrap-artists__image" style="background-image: url('${e}');"></div>
      <div class="artist__info">
        <p class="year">Years active <span class="artist__info-value">${s}–present</span></p>
        <p class="gender">Sex <span class="artist__info-value">${l}</span></p>
        <p class="members">Members <span class="artist__info-value">${a}</span></p>
        <p class="country">Country <span class="artist__info-value">${o}</span></p>
        <p class="title__biography">Biography</p>
        <p class="artists__biography">${f}</p>
      </div>
      <ul class="artists__genres-list">${_}</ul>
      <p class="title__albums-modal">Albums</p>
      <ul class="modal__album-list">${y}</ul>
    </li>
  `;v.modalAlbumList.innerHTML=b}const p="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const r=await O(p),e=((await P()).artists||[]).find(l=>l._id===p),s=(e==null?void 0:e.genres)||[],{albumsList:a=[]}=await S(p),o={...r,genres:s,albumsList:a};I(o)}catch(r){console.error("Помилка при завантаженні артиста або альбомів:",r.message)}});T();
//# sourceMappingURL=index.js.map
