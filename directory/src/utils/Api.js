import axios from "axios";

const URL = "https://randomuser.me/api";

export default {
  importEmployees: function () {
    return axios.get(URL);
  },
};
