import{S as d,i as h}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r=[]){return a.innerHTML=r.reduce((i,{webformatURL:s,largeImageURL:n,tags:e,likes:t,views:o,comments:f,downloads:m})=>i+`
      <li class = "gallery-item">
        <a class="gallery-link" href="${n}">
        <img class="gallery-image"
        src="${s}" 
        alt="${e}"/>
        </a>
         <ul class="info-list">
          <li class="info-item">
            <h2>Likes</h2>
            <p>${t}</p>
          </li>
          <li class="info-item">
            <h2>Vievs</h2>
            <p>${o}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${f}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${m}</p>
          </li>
        </ul>
       </li>
        `,"")}function c(r){h.error({message:r,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#EF4040",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:3e3,iconUrl:"/src/img/error-icon.svg",theme:"dark"})}function g(r){r.innerHTML='<span class="loader"></span>'}function y(r){r.innerHTML=""}function u(){g(a);const r=S+`?key=${E}&q=${l.value.trim()}&image_type=photo&orientation=horizontal&safesearch=false`;fetch(r).then(i=>i.json()).then(i=>{i.hits.length===0?(y(a),c("Sorry, there are no images matching your search query. Please try again!")):(p(i.hits),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(i=>{c("URL error")}),l.value=""}const l=document.querySelector(".search-form input"),L=document.querySelector(".search-form button"),a=document.querySelector(".gallery"),S="https://pixabay.com/api/",E="41789210-2260d99c0029effaf849d1b98";L.addEventListener("click",()=>{u()});l.addEventListener("keyup",r=>{r.keyCode===13&&u()});
//# sourceMappingURL=commonHelpers.js.map
