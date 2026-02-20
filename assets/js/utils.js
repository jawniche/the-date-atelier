export function convertToCSS(input) {
  return input.toLowerCase().replace(/\s+/g, '-').replace("'", '');
}

export function convertDashToSpace(input) {
  return input.replace(/-/g, ' ');
}