import React, { useState, useEffect } from 'react';
import { chromeApi } from '../utils/chromeApi';

function BlockSettings() {
  const [blockedSites, setBlockedSites] = useState([]);
  const [newSite, setNewSite] = useState('');

  useEffect(() => {
    chromeApi.storage.sync.get(['blockedSites'], (result) => {
      setBlockedSites(result.blockedSites || []);
    });
  }, []);

  const addSite = () => {
    if (newSite && !blockedSites.includes(newSite)) {
      const updatedSites = [...blockedSites, newSite];
      setBlockedSites(updatedSites);
      chromeApi.storage.sync.set({ blockedSites: updatedSites });
      setNewSite('');
    }
  };

  const removeSite = (site) => {
    const updatedSites = blockedSites.filter(s => s !== site);
    setBlockedSites(updatedSites);
    chromeApi.storage.sync.set({ blockedSites: updatedSites });
  };

  return (
    <div className="block-settings">
      <h2>Blocked Sites</h2>
      <div className="add-site">
        <input
          value={newSite}
          onChange={(e) => setNewSite(e.target.value)}
          placeholder="example.com"
        />
        <button onClick={addSite}>Add</button>
      </div>
      <div className="blocked-list">
        {blockedSites.map(site => (
          <div key={site} className="site-item">
            <span>{site}</span>
            <button onClick={() => removeSite(site)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockSettings;