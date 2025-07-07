import { useState } from 'react';
import DailyLogPage from './pages/DailyLogPage';
import Recipes from './pages/Recipes';
import Data from './pages/Data';


function App() {
  // Tracks which tab is active
  const [tab, setTab] = useState('log');

  // Function to render the correct page based on selected tab
  const renderTabContent = () => {
    switch (tab) {
      case 'log':
        return <DailyLogPage />;
      case 'recipes':
        return <Recipes/>;
      case 'data':
        return <Data/>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Tabs */}
      <div className="flex space-x-4 justify-center bg-white shadow-md">
        {[
          { label: 'Daily Log', key: 'log' },
          { label: 'Recipes', key: 'recipes' },
          { label: 'Data', key: 'data' },
        ].map(({ label, key }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              tab === key
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-500'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {renderTabContent()}
    </div>
  );
}

export default App;
