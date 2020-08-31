import React from 'react';

import MonthPicker from './components/month-picker/month-picker.component'
import OptionSelector from './components/option-selector/option-selector.compnent'

import './App.scss';

function App() {
  return (
    <div className = 'app'>
      <MonthPicker />
      <OptionSelector />
    </div>
  );
}

export default App;
