

import { useState, useCallback } from 'react';


export function ColorForm({ onSubmitColor }) {


  const [ colorform, setColorForm ] = useState({ name: '', hexcode: '' });

  
  const change = useCallback(e => {  

    // ...colorform = colopes properties from opne object to another
    setColorForm({
      ...colorform,
      [e.target.name]: e.target.value
    });

  }, [colorform]);

  const submitColor = useCallback(() => {  

      // ...colorform copies properties from opne object to another
      onSubmitColor({ ...colorform });
      setColorForm({ name: '', hexcode: ''});

  }, [colorform, onSubmitColor]);

  console.log(colorform);

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorform.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorform.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>Add Color</button>
    </form>
  );
}

// import { useState, useCallback } from 'react';


// export function ColorForm() {

//   const initialColorForm = { name: '', hexcode: '' };

//   const colorFormState = useState();

//   const colorForm = colorFormState[0]; // first element of array/tuple is the form data
//   const setColorForm = colorFormState[1] // second element of the array/tuple is the update function for the form

//   const change = useCallback(e => {

//     const inputElement = e.target;
//     const inputValue = inputElement.value;
//     const inputName = inputElement.name;
    
//     // new object for react to know the state changed

//     const newColorForm = {
//       name: colorForm.name,
//       hexcode: colorForm.hexcode,
//     }


//     // update name or hexcode based on the input element typed into 
//     newColorForm[inputName] = inputValue;

//     // update state and trigger the re-render
//     setColorForm(newColorForm);

//   }, [colorForm, setColorForm]);

//   console.log(colorForm);

//   return (
//     <form>
//       <label>
//         Name:
//         <input type="text" name="name" value={colorForm.name} onChange={change} />
//       </label>
//       <label>
//         Hexcode:
//         <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
//       </label>
//       <button>Add Color</button>
//     </form>
//   );
// }