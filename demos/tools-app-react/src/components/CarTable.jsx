

export function CarTable() {

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
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
  )
}