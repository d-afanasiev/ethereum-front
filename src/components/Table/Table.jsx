import { useMemo } from "react";
import { useTable } from "react-table";
import { getAllTransactions } from "../../service/serviceApi";

export default function Table() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Block number",
        accessor: "blockNumber", // accessor is the "key" in the data
      },
      {
        Header: "Transaction ID",
        accessor: "transactionId",
      },
      {
        Header: "Sender address",
        accessor: "senderAddress",
      },
      {
        Header: "Recipient's address",
        accessor: "recipientAddress",
      },
      {
        Header: "Block confirmations",
        accessor: "blockConfirmations",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Value",
        accessor: "value",
      },
      {
        Header: "Transaction Fee",
        accessor: "transactionFee",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  getAllTransactions();
  return (
    <div className="wrapper_table">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="table__title">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
