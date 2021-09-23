import React from "react";

const Employees = (props) => {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  let dob = formatDate(props.dob);

  return (
    <tr className="tr">
      <td>
        <img alt={props.firstName} src={props.icon} />
      </td>
      <td>
        {props.lastName} {props.firstName}
      </td>
      <td>{props.phone} </td>
      <td>{dob}</td>
      <td>{props.address}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default Employees;
