import axios from "axios";

const getEmployees = {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};

export default getEmployees;
