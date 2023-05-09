import React, { useState } from "react";

import UserDetailItems from "./UserDetailItems";
import Card from "../UI/Card";
import "./UserDetails.css";

const UserDetails = (props) => {
  //   const [filteredYear, setFilteredYear] = useState("2020");

  //   const filterChangeHandler = (selectedYear) => {
  //     setFilteredYear(selectedYear);
  //   };

  return (
    <div>
      <Card className="userdetails">
        {/* <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> */}
        {props.items.map((userdetails) => (
          <UserDetailItems
            firstName={userdetails.firstName}
            lastName={userdetails.lastName}
            dateOfBirth={userdetails.dob}
          />
        ))}
      </Card>
    </div>
  );
};

export default UserDetails;
