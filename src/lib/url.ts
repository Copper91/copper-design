/** Prefix a root-relative path with the site's base path (e.g. "/copper-design" on GitHub Pages). */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string): string => (path.startsWith('/') && !path.startsWith('//') ? BASE + path : path);
/** Strip the base path from a pathname so it can be compared with root-relative hrefs. */
export const stripBase = (pathname: string): string =>
  BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
