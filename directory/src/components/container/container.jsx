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

  //loading users when component mounts
  componentDidMount() {
    Api.getEmployees()
    .then((res) =>
    this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results,
    })
    )
    .catch((err) => console.log(err));
  }

  //search filter by name
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return <div></div>;
}
