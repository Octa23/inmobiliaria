import axios from "axios";
import Papa from "papaparse";

const getInfo = async (urll) => {
  return axios
    .get(urll, {
      responseType: "blob",
    })
    .then((response) => {
      return new Promise((resolve, _reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            return resolve(results.data);
          },
        });
      });
    });
};

export default getInfo;
