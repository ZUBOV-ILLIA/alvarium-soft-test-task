import { BASE_URL } from "./api"

export const getProducts = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error('something wrong in step getProducts');
  }

  // console.log(response, 'console');

  return response.json();
}