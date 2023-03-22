import { useState, useEffect } from "react";

import Inbox from "../../components/Inbox";
import Empty from "../../components/Empty";
import Pagination from "../../components/Pagination";
import { Section } from "./styles";
import useInbox from "../../hooks/useInbox";

function InboxList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const itemsPerPage = 6;
  const { state } = useInbox();

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentData(state.data.slice(indexOfFirstItem, indexOfLastItem));
  }, [state.data, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (state.data.length === 0) return <Empty />;

  return (
    <Section>
      <div className="heading">
        <h2>Inbox</h2>
      </div>
      {currentData.map((item) => (
        <Inbox key={item.id} data={item} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={state.data.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Section>
  );
}

export default InboxList;
