import axios from "axios";

export function getRequest(url, responseType) {
  return axios.get(url, {
    crossdomain: true,
    responseType: responseType !== undefined ? responseType : "json",
  });
}
