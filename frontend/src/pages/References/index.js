import { useState, useReducer, useEffect } from "react";
import useFilter from "../../hooks/useFilter";
import { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import ReferenceList from "./ReferenceList";
import EditReference from "./EditReference";
import { IoDocumentTextOutline } from "react-icons/io5";

function References() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();
  return (
    <Main>
      <Toaster />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search references..."
        icon={<IoDocumentTextOutline className="icon" />}
      />
      <EditReference />
      <ReferenceList
        searchQuery={searchQuery}
        filterParams={filterParams}
        dispatch={dispatch}
      />
    </Main>
  );
}

export default References;
