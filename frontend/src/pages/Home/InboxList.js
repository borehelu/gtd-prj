import { useState } from "react";
import Inbox from "./Inbox";
import Empty from "../../components/Empty";
import Pagination from "../../components/Pagination";
import Board from "../../components/Board";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Section } from "./styles";
import { IoGridOutline, IoListOutline } from "react-icons/io5";
import usePagination from "../../hooks/usePagination";

const itemsPerPage = 5;
function InboxList({ state, onDelete, setActive, setIsEditing }) {
  const { handlePageChange, currentPage, currentData } = usePagination(
    state.data,
    itemsPerPage
  );
  const [view, toggleView] = useState("list");

  const handleToggleView = () => {
    toggleView((prev) => {
      if (prev === "list") return "grid";
      return "list";
    });
  };

  if (state.loading) return <LoadingSpinner />;

  if (state.data.length === 0) return <Empty />;

  const itemsJsx = currentData.map((item) => (
    <Inbox
      key={item.id}
      data={item}
      onDelete={onDelete}
      setActive={setActive}
      setIsEditing={setIsEditing}
    />
  ));

  return (
    <Section>
      <div className="heading">
        <h2>Inbox</h2>
        <button onClick={handleToggleView}>
          {view !== "grid" ? <IoGridOutline /> : <IoListOutline />}
        </button>
      </div>

      {view === "list" ? itemsJsx : <Board state={state} onDelete={onDelete} />}

      {view === "list" && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={state.data.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Section>
  );
}

export default InboxList;
