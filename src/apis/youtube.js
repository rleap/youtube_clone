import axios from "axios";

const KEY = "AIzaSyCXk8M6L2cP82i6db6P455QCsVhnvOkezs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
