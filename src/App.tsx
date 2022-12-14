import React from 'react';
import './App.css';
import { CollapseData } from './CollapseComponent/CollapseData';
import Collapse from './CollapseComponent/Collapse';
import ProgressLine from './ProgressLineComponent/ProgressLine';
import IncrementCounter from './IncrementingCounterComponent/IncrementCounter';
import RangeSlider from './RangeSliderComponent/RangeSlider';

function App() {
  return (
    <div className="App">
      <ProgressLine options={[1, 2, 3, 4, 5, 6, 7]} />
      <div className='line' />
      <Collapse data={CollapseData} />
      <div className='line' />
      <IncrementCounter start={0} end={1000} duration={5000} uniqeuId={'unique-div-id'} />
      <div className='line' />
      <RangeSlider
        steps={[50, 70, 100, 150, 200, 300, 500, 800, "1K"]}
        indexOfDefault={4}
        callback={(value: object) => { console.log(value) }} />
        <div className='line' />
    </div>
  );
}

export default App;
