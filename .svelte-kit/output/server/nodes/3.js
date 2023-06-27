import * as server from '../entries/pages/signup/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.js";
export const imports = ["_app/immutable/nodes/3.eefb261a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.07593fae.js"];
export const stylesheets = ["_app/immutable/assets/3.a83823d1.css"];
export const fonts = [];
