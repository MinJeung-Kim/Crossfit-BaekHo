import axios from "axios";
export default class fakeAuthClient {
  async login(account) {
    return axios.post("http://localhost:8000/login", account);
  }

  async register(inputs) {
    return axios.post("http://localhost:8000/users", inputs);
  }
}
