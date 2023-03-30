import toast, { Toaster } from "react-hot-toast";
import { Main } from "./styles";
import SearchBar from "../../components/SearchBar";
import NextActionsList from "./NextActionsList";
import EditNextAction from "./EditNextAction";
import ActionsBar from "./ActionsBar";
import { useState, useReducer, useEffect } from "react";
import useFilter from "../../hooks/useFilter";
import useApi from "../../hooks/useApi";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import { IoListOutline } from "react-icons/io5";
import LoadingSpinner from "../../components/LoadingSpinner";
import { handleFilter, handleSearch, checkFilters } from "./helper";

function NextActions() {
  const { state, createItem, updateItem, removeItem } = useApi("next-actions/");
  const [active, setActive] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, dispatch] = useFilter();

  // const { handlePageChange, currentPage, currentData, setCurrentData } =
  //   usePagination(filteredData, 5);

  // useEffect(() => {
  //   if (searchQuery) {
  //     setCurrentData(handleSearch(state.data, searchQuery));
  //   } else {
  //     setCurrentData(state.data);
  //   }
  // }, [searchQuery]);

  // useEffect(() => {
  //   if (checkFilters(filterParams)) {
  //     setFilteredData(handleFilter(state.data, filterParams));
  //   } else {
  //     setFilteredData(currentData);
  //   }
  // }, [filterParams]);

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
          data={state.data}
          onDelete={handleDelete}
          setActive={setActive}
          setIsEditing={setIsEditing}
        />
      )}
    </Main>
  );
}

export default NextActions;

// <Pagination
//   itemsPerPage={5}
//   totalItems={state.data.length}
//   currentPage={currentPage}
//   onPageChange={handlePageChange}
// />
