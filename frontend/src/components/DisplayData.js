import { useEffect, useState } from "react";
import Empty from "./Empty";
import Pagination from "./Pagination";

function DisplayData({
  isLoading,
  error,
  data,
  ItemComponent,
  itemsPerPage = 6,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentData(data.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) return <Empty />;

  return (
    <>
      {currentData.map((item) => (
        <ItemComponent key={item.id} data={item} />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default DisplayData;
