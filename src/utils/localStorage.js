export function getLSD(key) {
  const lsd = localStorage.getItem(key);
  if (lsd) return JSON.parse(lsd);
}

export function setLSD(key, data) {
  if (data) localStorage.setItem(key, JSON.stringify(data));
}
