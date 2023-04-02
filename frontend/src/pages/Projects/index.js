import { useState } from "react";
import useFilter from "../../hooks/useFilter";
import toast, { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import ProjectsList from "./ProjectsList";
import EditProject from "./EditProject";
import ActionsBar from "./ActionsBar";
import { IoBriefcaseOutline } from "react-icons/io5";
import useApi from "../../hooks/useApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import { searchAndFilter } from "./helper";
import ProjectDetail from "./ProjectDetail";

function Projects() {
  const { state, createItem, updateItem, removeItem } = useApi("projects/");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();
  const [active, setActive] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleUpdate = async (id, updatedItem) => {
    const toastId = toast.loading("Updating...");
    try {
      await updateItem(id, updatedItem);
      toast.success("Item updated", { id: toastId });
    } catch (error) {
      toast.error("Error updating item", { id: toastId });
    } finally {
      setIsEditing(false);
    }
  };

  const handleDelete = (id) => {
    const toastId = toast.loading("Deleting...");
    try {
      removeItem(id);
      toast.success("Item deleted!", { id: toastId });
    } catch (e) {
      toast.error(e.message, { id: toastId });
    }
  };

  return (
    <Main>
      <Toaster />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search projects..."
        icon={<IoBriefcaseOutline className="icon" />}
      />
      <EditProject
        onUpdate={handleUpdate}
        active={active}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <ProjectDetail
        active={active}
        isShown={isShown}
        setIsShown={setIsShown}
      />

      <ActionsBar filterParams={filterParams} dispatch={dispatch} />

      {state.loading ? (
        <LoadingSpinner />
      ) : (
        <ProjectsList
          data={searchAndFilter(state.data, searchQuery, filterParams)}
          onDelete={handleDelete}
          setActive={setActive}
          setIsEditing={setIsEditing}
          setIsShown={setIsShown}
        />
      )}
    </Main>
  );
}

export default Projects;

// searchAndFilter(state.data, searchQuery, filterParams)
