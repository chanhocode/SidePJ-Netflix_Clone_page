import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4ef1d7168839b243f2467d5281742e1f",
    language: "ko-KR",
  },
});

export default instance;
