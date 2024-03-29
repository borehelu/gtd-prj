import toast, { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import NextActionsList from "./NextActionsList";
import EditNextAction from "./EditNextAction";
import ActionsBar from "./ActionsBar";
import { useState } from "react";
import useFilter from "../../hooks/useFilter";
import useApi from "../../hooks/useApi";
import { IoListOutline } from "react-icons/io5";
import LoadingSpinner from "../../components/LoadingSpinner";
import { searchAndFilter } from "./helper";

function NextActions() {
  const { state, createItem, updateItem, removeItem } = useApi("next-actions/");
  const [active, setActive] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();

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
        placeholder="Search next actions ..."
        icon={<IoListOutline className="icon" />}
      />
      <EditNextAction
        onUpdate={handleUpdate}
        active={active}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <ActionsBar filterParams={filterParams} dispatch={dispatch} />

      {state.loading ? (
        <LoadingSpinner />
      ) : (
        <NextActionsList
          data={searchAndFilter(state.data, searchQuery, filterParams)}
          onDelete={handleDelete}
          setActive={setActive}
          setIsEditing={setIsEditing}
        />
      )}
    </Main>
  );
}

export default NextActions;
