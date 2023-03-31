import Empty from "../../components/Empty";
import { Section } from "./styles";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import Project from "./Project";

function ProjectsList({ data, onDelete, setActive, setIsEditing }) {
	const { handlePageChange, currentPage, currentData, setCurrentData } =
		usePagination(data, 5);

	return (
		<Section>
			{currentData.length > 0 ? (
				currentData.map((item) => (
					<Project
						key={item.id}
						item={item}
						onDelete={onDelete}
						setActive={setActive}
						setIsEditing={setIsEditing}
					/>
				))
			) : (
				<Empty />
			)}

			<Pagination
				itemsPerPage={5}
				totalItems={data.length}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</Section>
	);
}

export default ProjectsList;
