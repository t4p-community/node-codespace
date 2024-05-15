
import { CarViewRow } from './CarViewRow.jsx';
import { useState, useCallback } from 'react';


export function CarTable({ cars, onDeleteCar}) {

  const deleteCar = useCallback((carId) => {
    onDeleteCar(carId);
  }, [onDeleteCar]);
 

  return (
    <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
              <CarViewRow key={car.id} car={car} 
              onDeleteCar={deleteCar} />
          ))}
        </tbody>
        

        {/* <tbody>
        {props.cars.map(object => (
          <tr key={object.id}>
            <td>{object.id}</td>
            <td>{object.make}</td>
            <td>{object.model}</td>
            <td>{object.year}</td>
            <td>{object.color}</td>
            <td>{object.price}</td>
          </tr>
        ))}
        </tbody> */}
      </table>
  );
}