import React from 'react';
import './App.css';
import {CollapseData} from './CollapseComponent/CollapseData';
import Collapse from './CollapseComponent/Collapse';
import ProgressLine from './ProgressLineComponent/ProgressLine';
import IncrementCounter from './IncrementingCounterComponent/IncrementCounter';

function App() {
  return (
    <div className="App">
      <ProgressLine options={[1, 2, 3, 4, 5, 6, 7]}/>
      <div className='line'/>
      <Collapse data={CollapseData} />
      <div className='line'/>
      <IncrementCounter start={0} end={1000} duration={5000} uniqeuId={'unique-div-id'} />
      <div className='line'/>
    </div>
  );
}

export default App;
