import React from 'react';
import './App.css';
import Widget from './Widget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Remote App - Standalone</h1>
        <p>This is the remote application that can run independently or be consumed by the main app</p>
        
        <div style={{ margin: '20px 0' }}>
          <h2>Local Widget Component:</h2>
          <Widget />
        </div>
      </header>
    </div>
  );
}

export default App;
