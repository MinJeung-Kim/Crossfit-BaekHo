export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return (
      this.apiClient
        .search({
          params: {
            part: "snippet",
            maxResults: 25,
            q: keyword,
          },
        })
        .then((res) => res.data.items)
        // items의 id가 객체로 들어가있을 경우 id에 videoId를 덮어 씌어줌.
        .then((items) =>
          items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
