import axios from "axios";

const client = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://api.iransweb.com/",
});

export async function getProducts() {
  // const { data } = await client("/products");
  const { data } = await client("/products/laptop");
  return data;
}

export async function getProduct(id: string | number) {
  const { data } = await client(`products/laptop/${id}`);
  return data;
}

export async function login(username: string, password: string) {
  const { data } = await client({
    method:"POST",
    url:"/login",
    data:{
        username,password
    },
  });
  return data;
}
