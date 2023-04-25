export default function DisplayDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <div>
      <p>
        Today's date: {day}th {month} {year}
      </p>
    </div>
  );
}
