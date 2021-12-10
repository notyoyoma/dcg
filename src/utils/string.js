export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(string) {
  const words = string.split(" ");
  return words.map(capitalize).join(" ");
}
