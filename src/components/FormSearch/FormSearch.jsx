import { useState } from "react";
import { ReactComponent as Stroke } from "../../images/stroke.svg";

export default function FormSearch({ changeDataForm }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("sender");

  const inputChange = (event) => {
    setSearch(event.target.value);
  };

  const selectChange = (event) => {
    setType(event.target.value);
  };

  const sentDataSearch = (e) => {
    e.preventDefault();
    changeDataForm({ search, type });
  };

  return (
    <form className="search" onSubmit={sentDataSearch}>
      <div className="search__wrapperInput">
        <input
          type="text"
          name="search"
          value={search}
          onChange={inputChange}
          className="search__input"
          placeholder="Search..."
        />
      </div>
      <div className="wrapper__select">
        <select
          name="select"
          className="search__select"
          onChange={selectChange}
          value={type}
        >
          <option value="sender" selected>
            Adress Sen
          </option>
          <option value="recipient">Adress Rec</option>
          <option value="id">ID</option>
          <option value="number">Number</option>
        </select>
      </div>
      <button type="submit" className="search__button">
        <Stroke />
      </button>
    </form>
  );
}
