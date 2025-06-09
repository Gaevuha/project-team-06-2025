import{a as l,S as P}from"./assets/vendor-Breb73Hu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const v={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")},I="/project-team-06-2025/assets/sprite-DlB3TLA7.svg",H="icon-youtube",U="learn-more";function j(t,r){if(!t)return"No description available";const e=t.indexOf(".");return e!==-1&&e<=r?t.slice(0,e+1).trim():t.length<=r?t.trim():t.slice(0,r).trim()+"..."}function Y(){const t=window.innerWidth;return t<768?60:t<1024?160:147}function S(){const t=Y(),r=h.map(e=>{const n=(e.genres||[]).map(o=>`<li class="artist-genre">${o}</li>`).join(""),s=e.strArtistThumb||"/img/placeholder-image-mini.jpg",a=j(e.strBiographyEN,t);return`
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
                <use href="${I}#${U}"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("");v.artistsList.innerHTML=r}function T(){const t=document.querySelector(".loader");t.style.display="block"}function m(){const t=document.querySelector(".loader");t.style.display="none"}function N(){const t=document.querySelector(".load-more-btn");t.style.display="block"}function k(){const t=document.querySelector(".load-more-btn");t.style.display="none"}async function V(t){const{_id:r,strArtist:e,strArtistThumb:n,intFormedYear:s,intMembers:a,strCountry:o,strGender:i,strBiographyEN:A,genres:d=[],albumsList:u=[]}=t,M=d.map(f=>`<li class="artist__genre-item">${f}</li>`).join("");console.log("genres:",d);const g=u.map(({strAlbum:f,intYearReleased:B,tracks:b=[]})=>{const q=b.map(({strTrack:C,intDuration:E,movie:c})=>{const F=Math.floor(E/6e4),O=String(Math.floor(E%6e4/1e3)).padStart(2,"0"),D=c!=null&&c.startsWith("http")?c:c?`https://${c}`:"";return`
        <li class="track__row">
          <span class="track__title">${C}</span>
          <span class="track__time">${F}:${O}</span>
          <span class="track__link">
            ${c?`<a href="${D}" target="_blank" aria-label="YouTube link">
              <svg class="icon-youtube">
                <use href="${I}#${H}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="artist__genre-item">
        <p class="album__name">${f} (${B})</p>
        <span>Track</span><span>Time</span><span>Link</span>
        <ul class="album__track-list">${q}</ul>
      </li>
    `}).join(""),y=`
    <li class="artists__item" data-id="${r}">
      <p class="artists__name">${e}</p>
      <div class="wrap-artists__image" style="background-image: url('${n}');"></div>
      <div class="artist__info">
        <p class="year">Years active <span class="artist__info-value">${s}–present</span></p>
        <p class="gender">Sex <span class="artist__info-value">${i}</span></p>
        <p class="members">Members <span class="artist__info-value">${a}</span></p>
        <p class="country">Country <span class="artist__info-value">${o}</span></p>
        <p class="title__biography">Biography</p>
        <p class="artists__biography">${A}</p>
      </div>
      <ul class="artists__genres-list">${M}</ul>
      <p class="title__albums-modal">Albums</p>
      <ul class="modal__album-list">${g}</ul>
    </li>
  `;v.modalAlbumList.innerHTML=y}function Q(t){const r=document.querySelector(".swiper-wrapper"),e=t.map(({name:n,rating:s,descr:a})=>`
    <div class="swiper-slide">
        <div class="rating" data-rating="${s}"></div>
        <p class="feedback-descr">"${a}"</p>
        <p class="feedback-name">${n}</p>
    </div>
  `).join("");r.innerHTML=e}l.defaults.baseURL="https://sound-wave.b.goit.study/api";let h=[],p=1;const W=8;let L=0,$;window.addEventListener("resize",()=>{clearTimeout($),$=setTimeout(()=>{S()},300)});async function _(t=1){const r={limit:8,page:t},e="/artists";try{return(await l.get(e,{params:r})).data}catch(n){throw console.error("Помилка при завантаженні артистів:",n.message),n}}T();_(p).then(t=>{h=t.artists,L=Math.ceil(t.totalArtists/W),S(),m(),p>=L?k():N()}).catch(t=>{console.error("Error during initial loading of artists:",t.message),m()});async function z(){T(),p+=1;try{const r=(await _(p)).artists;if(!r.length){alert("We're sorry, there are no more artists to load."),m(),k();return}h=[...h,...r],S(),m(),p>=L&&k()}catch(t){console.error("Error loading new artists:",t.message),m()}}v.loadMoreBtn.addEventListener("click",z);document.addEventListener("click",t=>{if(t.target.classList.contains("learn-more-artist-btn")){const r=t.target.dataset.artistId;console.log(r)}});async function J(t){const r=`/artists/${t}`;try{const e=await l.get(r);return console.log(e.data),e.data}catch(e){throw console.error("Помилка при отриманні артиста:",e.message),e}}async function R(t){const r=`/artists/${t}/albums`;try{return(await l.get(r)).data}catch(e){throw console.error("Помилка при отриманні альбомів артиста:",e.message),e}}async function G(t=1){const r=[],e="/feedbacks",s={limit:25,page:t};try{const a=await l.get(e,{params:s}),i=a.data.data[0];r.push(i);const A=a.data.total,d=Math.ceil(A/25);let u;do u=Math.floor(Math.random()*d)+1;while(u===1||u===d);const g=(await l.get(e,{params:{limit:25,page:u}})).data.data,y=g[Math.floor(Math.random()*g.length)];r.push(y);const b=(await l.get(e,{params:{limit:25,page:d}})).data.data.at(-1);return r.push(b),r}catch(a){throw console.error("Помилка при отриманні відгуків:",a.message),a}}const w="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const t=await J(w),n=((await _()).artists||[]).find(i=>i._id===w),s=(n==null?void 0:n.genres)||[],{albumsList:a=[]}=await R(w),o={...t,genres:s,albumsList:a};V(o)}catch(t){console.error("Помилка при завантаженні артиста або альбомів:",t.message)}});const K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function x(){document.querySelectorAll(".rating").forEach(r=>{const e=parseFloat(r.dataset.rating)||0,n=Math.round(e),s=5-n;let a="";for(let o=0;o<n;o++)a+=`<i class="star-custom" style="background-image: url('${K}');"></i>`;for(let o=0;o<s;o++)a+=`<i class="star-custom" style="background-image: url('${Z}');"></i>`;r.innerHTML=a})}function X(){new P(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:!0})}async function tt(){const t=await G();Q(t),X(),x()}tt();document.addEventListener("DOMContentLoaded",()=>{const t={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},r={scrollBehavior:"smooth",scrollDelay:300},e=s=>{t.menu.classList.toggle("is-open",s),document.body.style.overflow=s?"hidden":"",document.documentElement.style.scrollBehavior=s?"auto":r.scrollBehavior},n=s=>{const a=document.querySelector(s);if(!a)return;const o=t.header.offsetHeight,i=a.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:i,behavior:r.scrollBehavior})};t.openBtn.addEventListener("click",()=>e(!0)),t.closeBtn.addEventListener("click",()=>e(!1)),t.menu.addEventListener("click",s=>{!s.target.closest("[data-menu-close]")&&!s.target.closest(".link-menu")&&!s.target.closest(".link-logo")&&e(!1)}),t.links.forEach(s=>{s.addEventListener("click",a=>{const o=s.getAttribute("href");if(!o.startsWith("#"))return;a.preventDefault(),t.menu.classList.contains("is-open")?(e(!1),setTimeout(()=>n(o),r.scrollDelay)):n(o)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&t.menu.classList.contains("is-open")&&e(!1)})});
//# sourceMappingURL=index.js.map
