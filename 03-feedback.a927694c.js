var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequire4c75=r);var o=r("kEUo3");const l={},n="feedback-form-state",i={form:document.querySelector(".feedback-form"),message:document.querySelector('textarea[name="message"]'),email:document.querySelector('input[name="email"]')};!function(){const e=localStorage.getItem(n);e&&(i.message.value=JSON.parse(e).message||"",i.email.value=JSON.parse(e).email||"",l.email=i.email.value,l.message=i.message.value)}(),i.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===i.message.value||""===i.email.value)return alert("Заповніть усі поля перед відправкою форми");console.log(l),e.currentTarget.reset(),localStorage.removeItem(n)})),i.form.addEventListener("input",(0,o.throttle)((e=>{l[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(l))}),500));
//# sourceMappingURL=03-feedback.a927694c.js.map
