import React, { Component } from "react";
import Api from "../../utils/Api";
import Directory from "../directory/directory";
import Search from "../search/search";

class EmployeesContainer extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
  };

  get initialSort() {
    return {
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

  sortBy = (key, primary = 0, secondary = 0) => {
    let sortedEmployees = this.state.filteredEmployees;
    if (this.state.sortDirections[key]) {
      this.setState({
        filteredEmployees: sortedEmployees.reverse(),
        sortDirections: {
          ...this.initialSortDirections,
          [key]: this.state.sortDirections[key] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
        a = a[key];
        b = b[key];

        if (primary) {
          if (secondary && a[primary] === b[primary]) {
            return a[secondary].localeCompare(b[secondary]);
          }
          return a[primary].localeCompare(b[primary]);
        } else {
          return a.localeCompare(b);
        }
      });

      this.setState({
        filteredEmployees: sortedEmployees,
        sortDirections: {
          ...this.initialSortDirections,
          [key]: "asc",
        },
      });
    }
  };

  filterEmployees = (input) => {
    if (input) {
      this.setState({
        filteredEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(input) ||
            employee.phone.includes(input) ||
            employee.phone.replace(/[^\w\s]/gi, "").includes(input) ||
            employee.email.includes(input) ||
            this.formatDate(employee.dob.date).includes(input)
          );
        }),
      });
    } else {
      this.setState({ filteredEmployees: this.state.employees });
    }
  };

  render() {
    return (
      <>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container mt-4">
          <Directory
            state={this.state}
            sortBy={this.sortBy}
            filterEmployees={this.filterEmployees}
            formatDate={this.formatDate}
          />
        </div>
      </>
    );
  }
}

export default EmployeesContainer;
