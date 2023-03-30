import { useState, useReducer, useEffect } from "react";
import useFilter from "../../hooks/useFilter";
import { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import WaitingForList from "./WaitingForList";
import EditWaitingFor from "./EditWaitingFor";
import { IoPeopleCircleOutline } from "react-icons/io5";

function WaitingFor() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();
  return (
    <Main>
      <Toaster />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search waiting for..."
        icon={<IoPeopleCircleOutline className="icon" />}
      />
      <EditWaitingFor />
      <WaitingForList
        searchQuery={searchQuery}
        filterParams={filterParams}
        dispatch={dispatch}
      />
    </Main>
  );
}

export default WaitingFor;
