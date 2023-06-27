import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-jygzno{color:#000000;margin-bottom:.5em;text-shadow:0 0 2px #ffffff}button.svelte-jygzno{width:100%;background-color:#FFF;transition:all 0.3s ease-in}button.svelte-jygzno:hover{cursor:pointer;text-decoration:underline;color:#FFF;background-color:#4d4c4c;transition:all 0.3s ease-in}.btn-auth-img.svelte-jygzno:hover{box-shadow:0px 0px 10px rgba(0, 0, 0, 0.5)}.btn-auth.svelte-jygzno{border:0;background-color:rgba(84, 81, 81, 0.0);padding:.01em}.btn-auth.svelte-jygzno:hover{border:0;padding:.01em;text-decoration:none;background-color:rgba(84, 81, 81, 0.0)}.auth-form.svelte-jygzno{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.sign-in-wrapper.svelte-jygzno{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100vh;width:100%;background-size:cover;background-position:center center;background-repeat:no-repeat}.sign-in-content.svelte-jygzno{max-width:350px;background-color:rgba(84, 81, 81, 0.35);padding:1em;border-radius:5px}.sign-in-wrapper.svelte-jygzno{height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  console.log("signup/page.svelte");
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="sign-in-wrapper svelte-jygzno" data-svelte-h="svelte-1l63huc"><div class="sign-in-content svelte-jygzno"><h2>Sign In</h2> <form class="auth-form svelte-jygzno" method="post" action="?/OAuth2"><div class="svelte-jygzno"><button class="btn-auth svelte-jygzno" type="submit"><img class="btn-auth-img svelte-jygzno" src="/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png" alt="google sign in"></button></div></form></div> </div>`;
});
export {
  Page as default
};
