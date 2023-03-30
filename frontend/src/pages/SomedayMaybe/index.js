import { useState, useReducer, useEffect } from "react";
import useFilter from "../../hooks/useFilter";
import { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import SomedayList from "./SomedayList";
import EditSomeday from "./EditSomeday";
import { IoBulbOutline } from "react-icons/io5";

function Someday() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();
  return (
    <Main>
      <Toaster />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search someday..."
        icon={<IoBulbOutline className="icon" />}
      />
      <EditSomeday />
      <SomedayList
        searchQuery={searchQuery}
        filterParams={filterParams}
        dispatch={dispatch}
      />
    </Main>
  );
}

export default Someday;
