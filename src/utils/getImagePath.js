/**
 * Get the correct image path with base URL for GitHub Pages
 * @param {string} path - The image path starting with /images/
 * @returns {string} - The full path with base URL
 */
export const getImagePath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if base already ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export default getImagePath;

