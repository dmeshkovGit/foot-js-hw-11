import{i as m,S as h}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="/foot-js-hw-11/assets/error-icon-d9b820e6.svg";function d(r=[]){return c.innerHTML=r.reduce((o,{webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:f})=>o+`
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
            <p>${i}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${u}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${f}</p>
          </li>
        </ul>
       </li>
        `,"")}function l(r){m.error({message:r,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#EF4040",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:3e3,iconUrl:`${p}`,theme:"dark"})}function g(r){r.innerHTML='<span class="loader"></span>'}function y(r){r.innerHTML=""}function L(){g(c);const r=$+`?key=${b}&q=${a.value.trim()}&image_type=photo&orientation=horizontal&safesearch=false`;fetch(r).then(o=>o.json()).then(o=>{o.hits.length===0?(y(c),l("Sorry, there are no images matching your search query. Please try again!")):(d(o.hits),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(o=>{l("URL error")}),a.value=""}const S=document.querySelector(".search-form"),a=document.querySelector(".search-form input"),c=document.querySelector(".gallery"),$="https://pixabay.com/api/",b="41789210-2260d99c0029effaf849d1b98";S.addEventListener("submit",r=>{r.preventDefault(),a.value.trim()!==""?L():l("Please fill the query")});
//# sourceMappingURL=commonHelpers.js.map
