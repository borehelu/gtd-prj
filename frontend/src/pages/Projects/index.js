import { useState, useReducer, useEffect } from "react";
import useFilter from "../../hooks/useFilter";
import { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import ProjectsList from "./ProjectsList";
import EditProject from "./EditProject";
import { IoBriefcaseOutline } from "react-icons/io5";

function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();
  return (
    <Main>
      <Toaster />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search projects..."
        icon={<IoBriefcaseOutline className="icon" />}
      />
      <EditProject />
      <ProjectsList
        searchQuery={searchQuery}
        filterParams={filterParams}
        dispatch={dispatch}
      />
    </Main>
  );
}

export default Projects;
