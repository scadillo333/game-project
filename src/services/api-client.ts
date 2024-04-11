import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e1ccf7f811b41dfb9ae8f529164b512",
  },
});
