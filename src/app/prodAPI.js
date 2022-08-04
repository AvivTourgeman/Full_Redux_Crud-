
import axios from 'axios'
const SERVER_URL ="http://localhost:3005/products/";


export function getProducts() {
  return new Promise((resolve) =>
  axios(SERVER_URL).then((res) => resolve({ data: res.data }))
  );
}


export function addProducts(newProd) {
  return new Promise((resolve) =>
  axios.post(SERVER_URL,newProd).then((res) => resolve({ data: res.data }))
  );
}

export function updateProducts(newProd,id) {
  return new Promise((resolve) =>
  axios.put(SERVER_URL + id,newProd).then((res) => resolve({ data: res.data }))
  );
}


