"use strict";(self.webpackChunkgachoikhoanguyen=self.webpackChunkgachoikhoanguyen||[]).push([[160],{3160:(e,t,o)=>{o.d(t,{getVimeoVideoInfo:()=>a,resolveVimeoVideoId:()=>s});const n=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:(?:\?hash=|\?h=|\/)(.*))?/,i=new Map,c=new Map;function s(e){const t=e.match(n);return{videoId:t?.[1],hash:t?.[2]}}async function a(e,t,o){if(i.has(e))return i.get(e);if(c.has(e))return c.get(e);let n=`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${e}`;o&&(n=n.concat(`?h=${o}`));const s=window.fetch(n,{mode:"cors",signal:t.signal}).then((e=>e.json())).then((t=>{const o=t?.thumbnail_url?.match(/vimeocdn.com\/video\/(.*)?_/)?.[1],n=o?`https://i.vimeocdn.com/video/${o}_1920x1080.webp`:"",c={title:t?.title??"",duration:t?.duration??0,poster:n,pro:"basic"!==t.account_type};return i.set(e,c),c})).finally((()=>c.delete(e)));return c.set(e,s),s}}}]);