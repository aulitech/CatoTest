import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-ibrawg.svelte-ibrawg{display:flex;flex-direction:row;align-items:center;justify-content:center}nav.svelte-ibrawg a.svelte-ibrawg{margin:.5em;color:#000000;text-decoration:none;font-weight:800}nav.svelte-ibrawg a.svelte-ibrawg:hover{text-decoration:underline}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-ibrawg" data-svelte-h="svelte-z5895b"><a href="/" class="svelte-ibrawg">Home</a> <a href="/signup" class="svelte-ibrawg">Sign Up</a> </nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-2qq9k{display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="svelte-2qq9k">${slots.default ? slots.default({}) : ``}</main> ${$$result.head += `<!-- HEAD_svelte-9iry20_START --><style data-svelte-h="svelte-1m7n93n">body{
              margin:0;
          }
      </style><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"><!-- HEAD_svelte-9iry20_END -->`, ""}`;
});
export {
  Layout as default
};
