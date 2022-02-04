import FormSearch from "../FormSearch";
import TransactionTable from "../Table";

export default function Filter() {
  return (
    <main>
      <div className="container">
        <section className="filter">
          <FormSearch />
          <TransactionTable />
        </section>
      </div>
    </main>
  );
}
