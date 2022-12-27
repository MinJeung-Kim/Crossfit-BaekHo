import axios from "axios"; 
export default class fakeAuthClient {
  async login() { 
    return axios.get(`/mocDatas/users.json`);
  }

  async logout() {
    return axios.get(`/videos/popular.json`);
  }
}
