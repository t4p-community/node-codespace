import { ToolHeader } from './components/ToolHeader.jsx';
import { CarTable } from './components/CarTable.jsx';

export function CarTool(props) {


  // const carObjects = [
  //   { id: 1, make: 'Tesla', model: 'Y', year: 2020, color: 'black', price: 50000 },
  //   { id: 1, make: 'Tesla', model: 'X', year: 2023, color: 'white', price: 110000 },

  // ];

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
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


