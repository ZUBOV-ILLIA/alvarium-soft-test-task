import { BASE_CURRENCY_URL } from "./api"

export const getCurrency = async () => {
  const response = await fetch(BASE_CURRENCY_URL);

  if (!response.ok) {
    throw new Error('something wrong in step getCurrency');
  }

  return response.json();
}