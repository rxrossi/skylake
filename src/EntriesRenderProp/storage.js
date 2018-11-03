let volatileEntries = [];

export function saveEntry(entry) {
  volatileEntries = [...volatileEntries, entry];
  localStorage.setItem("entries", volatileEntries);
}

export function loadEntries() {
  return localStorage.getItem("entries") || [];
}
