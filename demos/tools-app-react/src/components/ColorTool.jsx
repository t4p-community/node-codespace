
import { ToolHeader } from './ToolHeader.jsx';
import { ColorList } from './ColorList.jsx'
import { ColorForm } from './ColorForm.jsx';

export function ColorTool(props) {

  // props and anything accessed through props is immutable

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={props.colors} />
      <ColorForm />
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