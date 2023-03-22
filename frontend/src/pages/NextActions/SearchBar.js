import { useRef, useEffect, useState } from "react";
import { IoSearchOutline, IoListOutline } from "react-icons/io5";
import { Main, Wrapper, Section, SearchBarForm } from "./styles";

function SearchBar() {
  const input_ref = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    input_ref.current.focus();
  }, []);

  return (
    <Wrapper>
      <SearchBarForm>
        <div className="form-control">
          <IoListOutline className="icon" />
          <input
            type="text"
            ref={input_ref}
            placeholder="Search next actions.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="primary">
          Search
          <IoSearchOutline className="icon" />
        </button>
      </SearchBarForm>
    </Wrapper>
  );
}

export default SearchBar;
