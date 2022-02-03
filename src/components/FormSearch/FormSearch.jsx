// import { useState } from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { ReactComponent as Stroke } from "../../images/stroke.svg";

export default function FormSearch() {
  //   const [age, setAge] = useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  return (
    <form className="search">
      <div className="search__wrapperInput">
        <input
          type="text"
          name="search"
          className="search__input"
          placeholder="Search..."
        />
      </div>
      {/* <Box sx={{ width: 143, height: 48 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
      <div className="wrapper__select">
        <select name="select" className="search__select">
          <option value="Adress" selected>
            Adress
          </option>
          <option value="ID">ID</option>
          <option value="Number">Number</option>
        </select>
      </div>
      <button type="submit" className="search__button">
        <Stroke />
      </button>
    </form>
  );
}
