import FormSearch from "../FormSearch";
import Table from "../Table";

export default function Filter() {
  return (
    <main>
      <div className="container">
        <section className="filter">
          <FormSearch />
          <Table />
        </section>
      </div>
    </main>
  );
}
