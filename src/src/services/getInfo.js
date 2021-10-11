import axios from 'axios'
import Papa from 'papaparse'

const getInfo = async () => {
  return axios
    .get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkMK9JhKKEkVSifYq-4Nwr4Xz1qrtb-6lSRESU2F0RVUYRfuy7_JmD4CzVCi_dVMHaY9l4zp9ZY59m/pub?gid=0&single=true&output=csv',
      {
        responseType: 'blob'
      }
    )
    .then(response => {
      return new Promise((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            return resolve(results.data)
          }
        })
      })
    })
}

export default getInfo
