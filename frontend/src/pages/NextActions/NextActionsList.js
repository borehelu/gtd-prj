import NextAction from "./NextAction";
import Empty from "../../components/Empty";
import { Section } from "./styles";
import { handleFilter, handleSearch, checkFilters } from "./helper";

function NextActionsList({ data, onDelete, setActive, setIsEditing }) {
	// useEffect(() => {
	// 	if (searchQuery) {
	// 		setCurrentData(handleSearch(state.data, searchQuery));
	// 	} else {
	// 		setCurrentData(state.data);
	// 	}
	// }, [searchQuery]);

	// useEffect(() => {
	// 	if (checkFilters(filterParams)) {
	// 		setCurrentData(handleFilter(state.data, filterParams));
	// 	} else {
	// 		setCurrentData(state.data);
	// 	}
	// }, [filterParams]);

	return (
		<Section>
			{data.length > 0 ? (
				data.map((item) => (
					<NextAction
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
		</Section>
	);
}

export default NextActionsList;
