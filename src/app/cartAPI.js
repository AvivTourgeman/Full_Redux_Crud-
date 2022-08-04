
import axios from 'axios'
const SERVER_URL =" http://localhost:3005/orders/";


export function getCart() {
  return new Promise((resolve) =>
  axios(SERVER_URL).then((res) => resolve({ data: res.data }))
  );
}


export function buyProduct(newProd) {
  console.log(newProd)
  return new Promise((resolve) =>
  axios.post(SERVER_URL,newProd).then((res) => resolve({ data: res.data }))
  );
}

export function removeProduct(id) {
  
  return new Promise((resolve) =>
  axios.delete(SERVER_URL + id).then((res) => resolve({ data: res.data }))
  );
}
