import axios from "axios";
import qs from "qs";

export async function getNotes(queryParams) {
  const url = `http://localhost:3001/get?${qs.stringify(queryParams)}`;

  const request = {
    method: "get",
    url: url,
    params: {},
    headers: {},
  };

  return await axios(request).then((response) => response.data);
}
