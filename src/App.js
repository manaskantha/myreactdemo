import "./mycomponents/styles.css";
import DisplayDate from "./mycomponents/DateHeader";

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
    </div>
  );
}
