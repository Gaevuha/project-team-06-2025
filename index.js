import{a as l,S as D}from"./assets/vendor-Breb73Hu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const M={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")},T="assets/sprite.svg",C="icon-youtube",N="learn-more";function W(t,r){if(!t)return"No description available";const e=t.indexOf(".");return e!==-1&&e<=r?t.slice(0,e+1).trim():t.length<=r?t.trim():t.slice(0,r).trim()+"..."}function H(){const t=window.innerWidth;return t<768?60:t<1024?160:147}function $(){const t=H(),r=h.map(e=>{const n=(e.genres||[]).map(o=>`<li class="artist-genre">${o}</li>`).join(""),s=e.strArtistThumb||"/img/placeholder-image-mini.jpg",a=W(e.strBiographyEN,t);return`
        <li class="artist-card" id="${e._id}">
          <div class="artist-image-wrapper">
            <img
              class="artist-image"
              src="${s}"
              alt="Фото виконавця ${e.strArtist}"
              loading="lazy"
            />
          </div>

          <div class="artist-content">
            <ul class="artist-genres">
              ${n}
            </ul>
            <h3 class="artist-name">${e.strArtist}</h3>
            <p class="artist-description">${a}</p>

            <button class="learn-more-artist-btn" data-artist-id="${e._id}">
              Learn More
              <svg class="learn-more-icon" width="8" height="15" aria-hidden="true">
                <use href="${T}#${N}"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("");M.artistsList.innerHTML=r}function q(){const t=document.querySelector(".loader");t.style.display="block"}function m(){const t=document.querySelector(".loader");t.style.display="none"}function z(){const t=document.querySelector(".load-more-btn");t.style.display="block"}function L(){const t=document.querySelector(".load-more-btn");t.style.display="none"}async function Y(t){const{_id:r,strArtist:e,strArtistThumb:n,intFormedYear:s,intMembers:a,strCountry:o,strGender:i,strBiographyEN:y,genres:d=[],albumsList:u=[]}=t,S=d.map(f=>`<li class="artist__genre-item">${f}</li>`).join("");console.log("genres:",d);const g=u.map(({strAlbum:f,intYearReleased:A,tracks:w=[]})=>{const P=w.map(({strTrack:F,intDuration:E,movie:c})=>{const I=Math.floor(E/6e4),O=String(Math.floor(E%6e4/1e3)).padStart(2,"0"),j=c!=null&&c.startsWith("http")?c:c?`https://${c}`:"";return`
        <li class="track__row">
          <span class="track__title">${F}</span>
          <span class="track__time">${I}:${O}</span>
          <span class="track__link">
            ${c?`<a href="${j}" target="_blank" aria-label="YouTube link">
              <svg class="icon-youtube">
                <use href="${T}#${C}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="artist__genre-item">
        <p class="album__name">${f} (${A})</p>
        <span>Track</span><span>Time</span><span>Link</span>
        <ul class="album__track-list">${P}</ul>
      </li>
    `}).join(""),b=`
    <li class="artists__item" data-id="${r}">
      <p class="artists__name">${e}</p>
      <div class="wrap-artists__image" style="background-image: url('${n}');"></div>
      <div class="artist__info">
        <p class="year">Years active <span class="artist__info-value">${s}–present</span></p>
        <p class="gender">Sex <span class="artist__info-value">${i}</span></p>
        <p class="members">Members <span class="artist__info-value">${a}</span></p>
        <p class="country">Country <span class="artist__info-value">${o}</span></p>
        <p class="title__biography">Biography</p>
        <p class="artists__biography">${y}</p>
      </div>
      <ul class="artists__genres-list">${S}</ul>
      <p class="title__albums-modal">Albums</p>
      <ul class="modal__album-list">${g}</ul>
    </li>
  `;M.modalAlbumList.innerHTML=b}function x(t){const r=document.querySelector(".swiper-wrapper"),e=t.map(({name:n,rating:s,descr:a})=>`
    <div class="swiper-slide">
        <p class="feedback-stars">${s} (тут будуть зірочки :) )</p>
        <p class="feedback-descr">"${a}"</p>
        <p class="feedback-name">${n}</p>
    </div>
  `).join("");r.innerHTML=e,console.log(r)}l.defaults.baseURL="https://sound-wave.b.goit.study/api";let h=[],p=1;const R=8;let k=0,B;window.addEventListener("resize",()=>{clearTimeout(B),B=setTimeout(()=>{$()},300)});async function v(t=1){const r={limit:8,page:t},e="/artists";try{return(await l.get(e,{params:r})).data}catch(n){throw console.error("Помилка при завантаженні артистів:",n.message),n}}q();v(p).then(t=>{h=t.artists,k=Math.ceil(t.totalArtists/R),$(),m(),p>=k?L():z()}).catch(t=>{console.error("Error during initial loading of artists:",t.message),m()});async function U(){q(),p+=1;try{const r=(await v(p)).artists;if(!r.length){alert("We're sorry, there are no more artists to load."),m(),L();return}h=[...h,...r],$(),m(),p>=k&&L()}catch(t){console.error("Error loading new artists:",t.message),m()}}M.loadMoreBtn.addEventListener("click",U);document.addEventListener("click",t=>{if(t.target.classList.contains("learn-more-artist-btn")){const r=t.target.dataset.artistId;console.log(r)}});async function K(t){const r=`/artists/${t}`;try{const e=await l.get(r);return console.log(e.data),e.data}catch(e){throw console.error("Помилка при отриманні артиста:",e.message),e}}async function G(t){const r=`/artists/${t}/albums`;try{return(await l.get(r)).data}catch(e){throw console.error("Помилка при отриманні альбомів артиста:",e.message),e}}async function J(t=1){const r=[],e="/feedbacks",s={limit:25,page:t};try{const a=await l.get(e,{params:s}),i=a.data.data[0];r.push(i);const y=a.data.total,d=Math.ceil(y/25);let u;do u=Math.floor(Math.random()*d)+1;while(u===1||u===d);const g=(await l.get(e,{params:{limit:25,page:u}})).data.data,b=g[Math.floor(Math.random()*g.length)];r.push(b);const w=(await l.get(e,{params:{limit:25,page:d}})).data.data.at(-1);return r.push(w),console.log(r),r}catch(a){throw console.error("Помилка при отриманні відгуків:",a.message),a}}const _="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const t=await K(_),n=((await v()).artists||[]).find(i=>i._id===_),s=(n==null?void 0:n.genres)||[],{albumsList:a=[]}=await G(_),o={...t,genres:s,albumsList:a};Y(o)}catch(t){console.error("Помилка при завантаженні артиста або альбомів:",t.message)}});function Q(){new D(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:!0})}async function V(){const t=await J();x(t),Q()}V();document.addEventListener("DOMContentLoaded",()=>{const t={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},r={scrollBehavior:"smooth",scrollDelay:300},e=s=>{t.menu.classList.toggle("is-open",s),document.body.style.overflow=s?"hidden":"",document.documentElement.style.scrollBehavior=s?"auto":r.scrollBehavior},n=s=>{const a=document.querySelector(s);if(!a)return;const o=t.header.offsetHeight,i=a.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:i,behavior:r.scrollBehavior})};t.openBtn.addEventListener("click",()=>e(!0)),t.closeBtn.addEventListener("click",()=>e(!1)),t.menu.addEventListener("click",s=>{!s.target.closest("[data-menu-close]")&&!s.target.closest(".link-menu")&&!s.target.closest(".link-logo")&&e(!1)}),t.links.forEach(s=>{s.addEventListener("click",a=>{const o=s.getAttribute("href");if(!o.startsWith("#"))return;a.preventDefault(),t.menu.classList.contains("is-open")?(e(!1),setTimeout(()=>n(o),r.scrollDelay)):n(o)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&t.menu.classList.contains("is-open")&&e(!1)})});
//# sourceMappingURL=index.js.map
