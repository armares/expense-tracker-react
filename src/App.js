import React from 'react';
import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
      </div>
    </React.Fragment>
  );
}

export default App;
