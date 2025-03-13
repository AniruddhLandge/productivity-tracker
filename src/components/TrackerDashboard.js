import React, { useState, useEffect } from 'react';
import { chromeApi } from '../utils/chromeApi';

function TrackerDashboard() {
  const [trackingData, setTrackingData] = useState({});

  useEffect(() => {
    chromeApi.storage.local.get(['timeTracking'], (result) => {
      setTrackingData(result.timeTracking || {});
    });

    const listener = (changes) => {
      if (changes.timeTracking) {
        setTrackingData(changes.timeTracking.newValue);
      }
    };
    chromeApi.storage.onChanged.addListener(listener);
    
    return () => chromeApi.storage.onChanged.removeListener(listener);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="dashboard">
      <h2>Time Tracking</h2>
      <div className="site-list">
        {Object.entries(trackingData).map(([site, data]) => (
          <div key={site} className="site-item">
            <span>{site}</span>
            <span>{formatTime(data.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackerDashboard;