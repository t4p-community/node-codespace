

import { useState, useCallback } from 'react';


export function CarForm({ onSubmitCar }) {


  const [ carform, setCarForm ] = useState({ make: '', model: '', year: 2020, color: '' , price: 0});

  
  const change = useCallback(e => {  

    // ...colorform = copies properties from one object to another
    setCarForm({
      ...carform,
      [e.target.name]: e.target.type === 'number' ? e.target.valueAsNumber : e.target.value
    });

  }, [carform]);

  const submitCar = useCallback(() => {  

    // ...carform copies properties from one object to another
    onSubmitCar({ ...carform });
    setCarForm({ make: '', model: '', year: 2020, color: '' , price: 0 });

}, [carform, onSubmitCar]);


  console.log(carform);

  return (
    <form>
      <label>
        Make:
        <input type="text" name="make" value={carform.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={carform.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="text" name="year" value={carform.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={carform.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={carform.price} onChange={change} />
      </label>
      <button onClick={submitCar}>Add Car</button>
    </form>
  );
}