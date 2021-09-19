import React, { Component } from "react";
import Api from "../../utils/Api";
import Directory from "../directory/directory"

class EmployeesContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search:""
  };

  get initialSort() {
    return{
      name: "",
      phone: "",
      email: "",
    };
  }

  return <div></div>;
}
