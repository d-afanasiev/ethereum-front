import FormSearch from "../FormSearch";
import Table from "../Table";
import Pagination from "../Pagination";

export default function Filter() {
  return (
    <main>
      <div className="container">
        <section className="filter">
          <FormSearch />
          <Table />
          <Pagination />
        </section>
      </div>
    </main>
  );
}
