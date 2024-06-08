



export function ToolHeader({ headerText }) {

  //const headerText = props.headerText;

 // Destrcuturing - the name of the variable must match the name of the property
 // const { headerText } = props;
  return (
    <header>
    <h1>{headerText}</h1>
  </header>

  );
  
  }


  // export const ToolHeader = ({ headerText })  =>
  //  <header><h1>{headerText}</h1></header>;