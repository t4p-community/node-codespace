
export function ColorList(props) {

  return (
    <>
      <ul>
        {props.colors.map(
          color => <li key={color.id}>
            {color.name} - {color.hexcode}
          </li>
        )}
      </ul>
    </>
  );

}