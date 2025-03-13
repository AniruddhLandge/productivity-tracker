let timeTracking = {};
let blockedSites = [];

chrome.storage.sync.get(['blockedSites'], (result) => {
  blockedSites = result.blockedSites || [];
});

chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) {
    const url = new URL(details.url);
    const hostname = url.hostname;

    // Check if site is blocked
    if (blockedSites.includes(hostname)) {
      chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL('blocked.html') });
      return;
    }

    // Start tracking time
    if (!timeTracking[hostname]) {
      timeTracking[hostname] = { time: 0, lastStart: Date.now() };
    } else {
      timeTracking[hostname].lastStart = Date.now();
    }
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.storage.local.set({ timeTracking });
});

setInterval(() => {
  for (let site in timeTracking) {
    if (timeTracking[site].lastStart) {
      timeTracking[site].time += Math.floor((Date.now() - timeTracking[site].lastStart) / 1000);
      timeTracking[site].lastStart = Date.now();
    }
  }
  chrome.storage.local.set({ timeTracking });
}, 1000);