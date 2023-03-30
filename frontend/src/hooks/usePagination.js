import { useState, useEffect } from "react";

function usePagination(data, itemsPerPage = 5) {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentData, setCurrentData] = useState([]);

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		setCurrentData(data.slice(indexOfFirstItem, indexOfLastItem));
	}, [data, currentPage, itemsPerPage]);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return { handlePageChange, currentPage, currentData, setCurrentData };
}

export default usePagination;
