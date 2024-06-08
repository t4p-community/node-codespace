import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ColorTool } from './components/ColorTool.jsx';
import { CarTool } from './components/CarTool.jsx';

// const colorList = [
//   { id: 1, name: 'red', hexcode: 'ff0000' },
//   { id: 2, name: 'green', hexcode: '00ff00' },
//   { id: 3, name: 'blue', hexcode: '0000ff' },
// ];

// const cars = [
//   {
//     id: 1,
//     make: 'Tesla',
//     model: 'S',
//     year: 2023,
//     color: 'red',
//     price: 120000.00
//   },
//   {
//     id: 2,
//     make: 'BMW',
//     model: 'X',
//     year: 2023,
//     color: 'blue',
//     price: 50000.00
//   }
// ];  

function App() {

  return (
    <>
      {/* <ColorTool colors={colorList} /> */}
      <ColorTool />
      {/* <CarTool cars={cars} /> */}
      <CarTool />
    </>
  );

}

export default App
