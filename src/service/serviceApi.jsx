import axios from "axios";

const getAllTransactions = async (page = 1, limit = 14) => {
  const { data } = await axios.get(
    `https://ethereum-back-test.onrender.com/api/transactions?page=${page}&limit=${limit}`
  );
  return data;
};

const getTransactionsBySearch = async (dataForm, page = 1, limit = 14) => {
  const { data } = await axios.get(
    `https://ethereum-back-test.onrender.com/api/transactions/search?page=${page}&limit=${limit}&search=${dataForm.search}&type=${dataForm.type}`
  );
  return data;
};

export { getAllTransactions, getTransactionsBySearch };
