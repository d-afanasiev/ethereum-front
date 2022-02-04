import axios from "axios";

const getAllTransactions = async (page = 1, limit = 14) => {
  const { data } = await axios.get(
    `https://ethereum-back-test.herokuapp.com/api/transactions?page=${page}?limit=${limit}`
  );
  console.log(data);
  return data;
};

export { getAllTransactions };
