import axios from "axios";

export default {
  getEmployee: function () {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
};