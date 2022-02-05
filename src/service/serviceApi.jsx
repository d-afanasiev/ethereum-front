import axios from "axios";

const getAllTransactions = async (page = 1, limit = 14) => {
  const { data } = await axios.get(
    `https://ethereum-back-test.herokuapp.com/api/transactions?page=${page}&limit=${limit}`
  );
  console.log("get", data);
  return data;
};

const getTransactionsBySearch = async (dataForm, page = 1, limit = 14) => {
  const { data } = await axios.get(
    `https://ethereum-back-test.herokuapp.com/api/transactions/search?page=${page}&limit=${limit}&search=${dataForm.search}&type=${dataForm.type}`
  );
  console.log("search", data);
  return data;
};

export { getAllTransactions, getTransactionsBySearch };
