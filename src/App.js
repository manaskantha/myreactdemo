import "./mycomponents/styles.css";
import DisplayDate from "./mycomponents/DateHeader";
import Store from "./reduxlib/Store";

export default function App() {
  const newDate = new Date();
  return (
    <div className="App">
      <h1>User Details Form</h1>
      <>
        {/* <span>Please</span> <span>enter your </span>
        <span>details below</span> */}
        <DisplayDate date={newDate} />
        
      </>
      {/* <Store /> */}
    </div>
  );
}
