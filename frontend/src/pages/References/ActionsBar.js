import FilterModal from "./FilterModal";
import FilterBar from "./FilterBar";
import { Section, SectionHeading, ActionButton } from "./styles";
import { IoOptionsOutline, IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

function ActionsBar({ dispatch, filterParams }) {
	const [showFilter, setShowFilter] = useState(false);
	return (
		<Section>
			<FilterModal
				showFilter={showFilter}
				setShowFilter={setShowFilter}
				dispatch={dispatch}
			/>
			<SectionHeading>
				<h2>Reference list</h2>
				{/* 
				<ActionButton onClick={() => setShowFilter(true)}>
					 <IoOptionsOutline />
					
				</ActionButton>
				*/}
			</SectionHeading>

			<FilterBar dispatch={dispatch} filterParams={filterParams} />
		</Section>
	);
}

export default ActionsBar;
