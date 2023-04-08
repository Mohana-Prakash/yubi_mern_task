import axios from "axios";

export const apiService = async (method, url, body) => {
  await axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: body,
  })
    .then((e) => {
      return e;
    })
    .catch((err) => {
      return err;
    });
};
