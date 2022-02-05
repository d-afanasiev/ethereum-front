import { useState } from "react";
import FormSearch from "../FormSearch";
import TransactionTable from "../Table";

export default function Filter() {
  const [dataForm, setDataForm] = useState({});

  const changeDataForm = (data) => {
    setDataForm(data);
  };

  return (
    <main>
      <div className="container">
        <section className="filter">
          <FormSearch changeDataForm={changeDataForm} />
          <TransactionTable dataForm={dataForm} />
        </section>
      </div>
    </main>
  );
}
