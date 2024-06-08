
import { ToolHeader } from './ToolHeader.jsx';
import { ColorList } from './ColorList.jsx'
import { ColorForm } from './ColorForm.jsx';
import { ColorsHttpData } from '../services/colorsHttpData';

import { useState, useCallback, useEffect } from 'react';

const colorsData = new ColorsHttpData("/api");

export function ColorTool() {


  // props and anything accessed through props is immutable

  // props.colors = [] // this is wrong, bad, fired
  // props.newProp = "some value" // this is wrong, bad and fired
  // delete props.colors // this code is wrong, bad  and fired

  // // the single worst line of code that a programmer could ever write
  // // this code will get you fired, sued, and your career destroyed
  // props.colors.push({id: 4, name: "yellow", hexcode: "00ffff "});
  
  const [ colors, setColors ] = useState([]);

  const refreshColors = useCallback(async () => {

    setColors(await colorsData.all());
  }, []);

  // new COlors is the colorform object passed into the addColor function
  const addColor = useCallback(async newColor => {

    await colorsData.append(newColor);
    await refreshColors();

  }, [refreshColors]);

  //   // SetColors will update the colors array and re-render
  //   setColors([ // the [ create a new array object]
  //     ...colors, // copy elements from the original array to the new array
  //     {  // { will cretae a new object}
  //       ...newColor, // copy properties from the colorform to the new object
  //       // get the max id in the colors array and increment by 1
  //       id: Math.max(...colors.map(c => c.id), 0) + 1,
  //     },
  //   ]);
  // }, [colors]);

  // this will run one-time after the initial render
  // to initially load the colors
    useEffect(() => {

      refreshColors();

    }, [refreshColors]);


  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm onSubmitColor={addColor} />
      {/* <ul>
        {props.colors.map(
          color => <li key={color.id}>
            {color.name} - {color.hexcode}
          </li>
        )}
      </ul> */}
    </>
  );

}