import React from 'react';
import TrackerDashboard from './components/TrackerDashboard';
import BlockSettings from './components/BlockSettings';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <div className="app">
      <nav>
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </nav>
      {activeTab === 'dashboard' ? <TrackerDashboard /> : <BlockSettings />}
    </div>
  );
}

export default App;