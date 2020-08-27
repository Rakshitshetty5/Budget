import React from 'react';

import MonthPicker from './components/month-picker/month-picker.component'
import Spendings from './components/spendings/spendings.component'

import './App.scss';

function App() {
  return (
    <div>
      <h1>Budget</h1>
      <MonthPicker />
      <div className="buttons">
        <button className="button active">
          Spendings
        </button>
        <button className="button">
          Transactions
        </button>
      </div>
      <Spendings />
    </div>
  );
}

export default App;
