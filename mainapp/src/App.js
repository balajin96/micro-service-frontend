import React, { Suspense, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [RemoteWidget, setRemoteWidget] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRemoteWidget = async () => {
      try {
        console.log('Starting to load remote widget...');
        
        // Try loading the original widget first
        const widgetModule = await import('remoteapp/Widget');
        console.log('Widget module loaded:', widgetModule);
        console.log('Widget module type:', typeof widgetModule);
        console.log('Widget module keys:', Object.keys(widgetModule));
        
        // Check if the module has a default export
        if (widgetModule && widgetModule.default) {
          console.log('Default export found:', widgetModule.default);
          console.log('Default export type:', typeof widgetModule.default);
          setRemoteWidget(() => widgetModule.default);
          setIsLoading(false);
        } else {
          console.error('No default export found in module');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to load remote widget:', error);
        console.error('Error details:', error.message);
        setIsLoading(false);
      }
    };
    loadRemoteWidget();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Main App - Container</h1>
        <p>This is the main application that hosts remote components</p>
        
        <div className="remote-component-container">
          <h2>Remote Component:</h2>
          {isLoading ? (
            <div>Loading remote widget...</div>
          ) : RemoteWidget ? (
            <RemoteWidget />
          ) : (
            <div>Failed to load remote widget</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
