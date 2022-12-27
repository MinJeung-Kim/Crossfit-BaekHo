import axios from "axios";

export default class AuthClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:8888",
      // params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async login(params) {
    return this.httpClient.get("login", params);
  }

  async logout(params) {
    return this.httpClient.get("logout", params);
  }
}
