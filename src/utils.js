// Resolves files that live in /public (e.g. "assets/13.jpeg") against Vite's base URL.
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
