import { useRef, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Wrapper, SearchBarForm } from "./styles";

function SearchBar({ searchQuery, setSearchQuery, icon, placeholder }) {
  const input_ref = useRef(null);

  useEffect(() => {
    input_ref.current.focus();
  }, []);

  return (
    <Wrapper>
      <SearchBarForm onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          {icon}
          <input
            type="text"
            ref={input_ref}
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
        <button className="primary">
          Search
          <IoSearchOutline className="icon" />
        </button>
      </SearchBarForm>
    </Wrapper>
  );
}

export default SearchBar;
