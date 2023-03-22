import { PaginationWrapper, PaginationList, PageListItem } from "./styles";
import {
	BiChevronLeft,
	BiChevronRight,
	BiChevronsLeft,
	BiChevronsRight,
} from "react-icons/bi";

function Pagination({
	itemsPerPage,
	totalItems,
	currentPage,
	onPageChange,
	pageRangeDisplayed = 3,
}) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const pageNumbers = [];

	// Calculate the start and end pages for the current page range
	let startPage = Math.max(
		1,
		currentPage - Math.floor(pageRangeDisplayed / 2)
	);
	let endPage = Math.min(totalPages, startPage + pageRangeDisplayed - 1);

	// Adjust the start and end pages if the current range is too close to the edges
	if (
		totalPages > pageRangeDisplayed &&
		currentPage <= Math.ceil(pageRangeDisplayed / 2)
	) {
		endPage = pageRangeDisplayed;
	} else if (
		totalPages > pageRangeDisplayed &&
		currentPage > totalPages - Math.ceil(pageRangeDisplayed / 2)
	) {
		startPage = totalPages - pageRangeDisplayed + 1;
	}

	// Generate the page links for the current range
	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	const handlePrevClick = () => {
		onPageChange(currentPage - 1);
	};

	const handleNextClick = () => {
		onPageChange(currentPage + 1);
	};

	const handleFirstClick = () => {
		onPageChange(1);
	};

	const handleLastClick = () => {
		onPageChange(totalPages);
	};

	if (totalItems <= itemsPerPage) return null;

	return (
		<PaginationWrapper>
			<PaginationList>
				<PageListItem>
					<button
						onClick={handleFirstClick}
						disabled={currentPage === 1}
					>
						<BiChevronsLeft />
					</button>
				</PageListItem>
				<PageListItem>
					<button
						onClick={handlePrevClick}
						disabled={currentPage === 1}
					>
						<BiChevronLeft />
					</button>
				</PageListItem>

				{pageNumbers.map((number) => (
					<PageListItem
						key={number}
						className={`${currentPage === number ? "active" : ""}`}
					>
						<button onClick={() => onPageChange(number)}>
							{number}
						</button>
					</PageListItem>
				))}
				<PageListItem>
					<button
						onClick={handleNextClick}
						disabled={currentPage === totalPages}
					>
						<BiChevronRight />
					</button>
				</PageListItem>
				<PageListItem>
					<button
						onClick={handleLastClick}
						disabled={currentPage === totalPages}
					>
						<BiChevronsRight />
					</button>
				</PageListItem>
			</PaginationList>
		</PaginationWrapper>
	);
}

export default Pagination;
