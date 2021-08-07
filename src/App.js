import React from 'react'
import BuilderForm from './components/BuilderForm'
import './App.css';


const WHEEL_OPTIONS = [
  {make: 'Stans', price: 400.00},
  {make: 'CADEX', price: 3400.00},
  {make: 'ENVE', price: 1600.00},
  {make: 'Shimano', price: 1200.00},
  {make: 'HED', price: 1100.00}
]

const SADDLE_OPTIONS = [
  {make: 'Fizik Arione', price: 200.00},
  {make: 'Specialized Mirror', price: 450.00},
  {make: 'Shimano PRO Stealth', price: 180.00},
  {make: 'Brooks', price: 120.00}
]

const App = () => {
  return (
    <div>
      <h1>Main App</h1>
      <BuilderForm parts={WHEEL_OPTIONS, SADDLE_OPTIONS} />
    </div>
  );
}

export default App;
