import React from 'react';
import './App.css';
import ProgressLine from './ProgressLineComponent/ProgressLine';

function App() {
  return (
    <div className="App">
      <ProgressLine options={[1, 2, 3, 4, 5, 6, 7]}/>
    </div>
  );
}

export default App;
