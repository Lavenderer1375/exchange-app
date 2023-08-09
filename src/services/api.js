import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2030d&locale=en";

const getCoin = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export { getCoin };
