import { FilterContainer, FilterChip } from "./styles";
import { IoOptionsOutline, IoCloseCircleOutline } from "react-icons/io5";

function FilterBar({ dispatch, filterParams }) {
	return (
		<FilterContainer>
			{filterParams.context.map((context, i) => (
				<FilterChip key={i}>
					{context.name}
					<IoCloseCircleOutline
						onClick={() =>
							dispatch({
								type: "REMOVE_CONTEXT",
								payload: context.id,
							})
						}
					/>
				</FilterChip>
			))}

			{filterParams.status && (
				<FilterChip>
					{filterParams.status}{" "}
					<IoCloseCircleOutline
						onClick={() =>
							dispatch({
								type: "SET_STATUS",
								payload: "",
							})
						}
					/>
				</FilterChip>
			)}

			{filterParams.priority && (
				<FilterChip>
					{filterParams.priority}{" "}
					<IoCloseCircleOutline
						onClick={() =>
							dispatch({
								type: "SET_PRIORITY",
								payload: "",
							})
						}
					/>
				</FilterChip>
			)}

			{filterParams.due_date && (
				<FilterChip>
					{filterParams.due_date}{" "}
					<IoCloseCircleOutline
						onClick={() =>
							dispatch({
								type: "SET_DUE_DATE",
								payload: "",
							})
						}
					/>
				</FilterChip>
			)}
		</FilterContainer>
	);
}

export default FilterBar;
