import { ToolHeader } from './ToolHeader.jsx';
import { CarTable } from './CarTable.jsx';
import { CarForm } from './CarForm.jsx';
import { CarsHttpData } from '../services/carsHttpData';

import { useState, useCallback, useEffect } from 'react';

const carsData = new CarsHttpData("/api");


export function CarTool() {


  // const carObjects = [
  //   { id: 1, make: 'Tesla', model: 'Y', year: 2020, color: 'black', price: 50000 },
  //   { id: 1, make: 'Tesla', model: 'X', year: 2023, color: 'white', price: 110000 },

  // ];

  const [ cars, setCars ] = useState([]);

  const refreshCars = useCallback(async () => {
    setCars(await carsData.all());
  }, []);

  const addCar = useCallback(async newCar => {
    await carsData.append(newCar);
    await refreshCars();
  }, [refreshCars]);

  // // new COlors is the colorform object passed into the addColor function
  // const addCar = useCallback(newCar => {

  //   // SetColors will update the colors array and re-render
  //   setCars([ // the [ create a new array object]
  //     ...cars, // copy elements from the original array to the new array
  //     {  // { will cretae a new object}
  //       ...newCar, // copy properties from the colorform to the new object
  //       // get the max id in the colors array and increment by 1
  //       id: Math.max(...cars.map(c => c.id), 0) + 1,
  //     },
  //   ], [cars]);
  // })

  // const deleteCar = useCallback(carId => {  
  //   setCars(cars.filter(c => c.id !== carId));
  //   }, [cars]);
  
  const deleteCar = useCallback(async carId => {
    await carsData.remove(carId);
    await refreshCars();
  }, [refreshCars]);

  useEffect(() => {
    refreshCars();
  }, [refreshCars]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm onSubmitCar={addCar} />
      </>

  );
}
      {/* <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {props.carObjects.map(object => (
          <tr key={object.id}>
            <td>{object.id}</td>
            <td>{object.make}</td>
            <td>{object.model}</td>
            <td>{object.year}</td>
            <td>{object.color}</td>
            <td>{object.price}</td>
          </tr>
        ))}
        </tbody>
      </table> */}

      {/* <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td>1</td>
           <td>Tesla</td>
           <td>Model Y</td>
           <td>2020</td>
           <td>Black</td>
           <td>USD 50,000</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Tesla</td>
            <td>Model X</td>
            <td>2022</td>
            <td>White</td>
            <td>USD 110,000</td>
          </tr>
        </tbody>
     </table> */}


