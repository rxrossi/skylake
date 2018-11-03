let volatileEntries = [];

export function saveEntry(entry) {
  volatileEntries = [...volatileEntries, entry];
  localStorage.setItem("entries", JSON.stringify(volatileEntries));
}

export function loadEntries() {
  let entries = [];

  try {
    entries = JSON.parse(localStorage.getItem("entries")) || [];
  } catch (e) {}

  return entries;
}
