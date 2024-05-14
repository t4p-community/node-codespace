import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'red', hexcode: 'ff0000' },
  { id: 2, name: 'green', hexcode: '00ff00' },
  { id: 3, name: 'blue', hexcode: '0000ff' },
];

const cars = [
  {
    id: 1,
    make: 'Tesla',
    model: 'S',
    year: 2023,
    color: 'red',
    price: 120000.00
  },
  {
    id: 2,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2023,
    color: 'blue',
    price: 50000.00
  }
];  

function App() {

  return (
    <>
      <ColorTool colors={colorList} />
      <CarTool cars={cars} />
    </>
  );

}

export default App
