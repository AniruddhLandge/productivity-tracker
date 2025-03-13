export const chromeApi = {
    storage: {
      local: {
        get: (keys, callback) => {
          if (window.chrome && window.chrome.storage) {
            window.chrome.storage.local.get(keys, callback);
          }
        },
        set: (data) => {
          if (window.chrome && window.chrome.storage) {
            window.chrome.storage.local.set(data);
          }
        }
      },
      sync: {
        get: (keys, callback) => {
          if (window.chrome && window.chrome.storage) {
            window.chrome.storage.sync.get(keys, callback);
          }
        },
        set: (data) => {
          if (window.chrome && window.chrome.storage) {
            window.chrome.storage.sync.set(data);
          }
        }
      },
      onChanged: {
        addListener: (listener) => {
          if (window.chrome && window.chrome.storage) {
            window.chrome.storage.onChanged.addListener(listener);
          }
        },
        removeListener: (listener) => {
          if (window.chrome && window.chrome.storage) {
            window.chrome.storage.onChanged.removeListener(listener);
          }
        }
      }
    }
  };