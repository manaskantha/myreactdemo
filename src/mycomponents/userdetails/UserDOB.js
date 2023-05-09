import React from "react";

import "./UserDOB.css";

const UserDOBDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="userdob-date">
      <div className="userdob-date__month">{month}</div>
      <div className="userdob-date__year">{year}</div>
      <div className="userdob-date__day">{day}</div>
    </div>
  );
};

export default UserDOBDate;
