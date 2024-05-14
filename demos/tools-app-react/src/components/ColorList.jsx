
export function ColorList() {

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