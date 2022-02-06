import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getAllTransactions,
  getTransactionsBySearch,
} from "../../service/serviceApi";
import Pagination from "../Pagination";

export default function TransactionTable({ dataForm }) {
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(20);

  useEffect(() => {
    if (Object.keys(dataForm).length === 0) {
      getAllTransactions(currentPage).then((data) => {
        setDataTable(data.docs);
        setTotalItems(data.totalDocs);
      });
    } else {
      getTransactionsBySearch(dataForm, currentPage).then((data) => {
        setDataTable(data.docs);
        setTotalItems(data.totalDocs);
      });
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    getTransactionsBySearch(dataForm, currentPage).then((data) => {
      setDataTable(data.docs);
      setTotalItems(data.totalDocs);
    });
  }, [dataForm]);

  const header = [
    "Block number",
    "Transaction ID",
    "Sender address",
    "Recipient's address",
    "Block confirmations",
    "Date",
    "Value",
    "Transaction Fee",
  ];

  return (
    <>
      <TableContainer component={Paper} className="wrapper_table">
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table"
        >
          <TableHead>
            <TableRow>
              {header.map((data) => (
                <TableCell className="table__title">{data}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map(
              ({
                _id,
                blockNumber,
                id,
                sender,
                recipient,
                confirmayions,
                date,
                value,
                fee,
              }) => (
                <TableRow
                  key={_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="table__column"
                  >
                    {blockNumber}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    <a href="https://etherscan.io/">{id}</a>
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {sender}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {recipient}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {confirmayions}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {date}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {value}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {fee}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        dataForm={dataForm}
        currentPage={currentPage}
        totalItems={totalItems}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
