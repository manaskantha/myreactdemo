import React from "react";

import UserDOBDate from "./UserDOB";
import Card from "../UI/Card";
import "./UserDetailItems.css";

const UserDetailItem = (props) => {
  return (
    <Card className="user-item">
      <UserDOBDate date={props.dateOfBirth} />
      <div className="user-item__description">
        <h2>{props.firstName}</h2>
        <h2>{props.lastName}</h2>
        {/* <div className="user-item__price">${props.amount}</div> */}
      </div>
    </Card>
  );
};

export default UserDetailItem;
