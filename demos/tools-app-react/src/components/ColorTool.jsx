
import { ToolHeader } from './components/ToolHeader.jsx';
import { ColorList } from './ColorList.jsx'

export function ColorTool(props) {



  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={props.colors} />
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