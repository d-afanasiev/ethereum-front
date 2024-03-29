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
import Pag from "../Pagination";
import { HEADER } from "../../constants/table";
import EllipsisText from "react-ellipsis-text";

export default function TransactionTable({ dataForm }) {
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(20);
  const [currentDataForm, setcurrentDataForm] = useState(null);

  useEffect(() => {
    if (Object.keys(dataForm).length === 0) {
      getAllTransactions(currentPage).then((data) => {
        setDataTable(data.docs);
        setTotalItems(data.totalDocs);
      });
    } else {
      if (dataForm !== currentDataForm) {
        setCurrentPage(1);
      }
      setcurrentDataForm(dataForm);
      getTransactionsBySearch(dataForm, currentPage).then((data) => {
        setDataTable(data.docs);
        setTotalItems(data.totalDocs);
      });
    }
  }, [currentDataForm, currentPage, dataForm]);

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
              {HEADER.map((data) => (
                <TableCell key={data} className="table__title">
                  {data}
                </TableCell>
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
                    <a href="https://etherscan.io/">
                      <EllipsisText text={`${id}`} length={"18"} />
                    </a>
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    <EllipsisText text={`${sender}`} length={"20"} />
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    <EllipsisText text={`${recipient}`} length={"20"} />
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {confirmayions}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    {date}
                  </TableCell>
                  <TableCell align="left" className="table__column">
                    <EllipsisText
                      text={`${value}`}
                      length={"16"}
                      tooltip={value}
                    />
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
      <Pag
        dataForm={dataForm}
        currentPage={currentPage}
        totalItems={totalItems}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
