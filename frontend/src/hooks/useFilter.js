import { useReducer } from "react";

const initialState = {
	context: [],
	priority: "",
	status: "",
	due_date: "",
};

function filterReducer(state, action) {
	let new_context;
	switch (action.type) {
		case "SET_FILTER":
			return action.payload;
		case "ADD_CONTEXT":
			new_context = [...state.context, action.payload];
			return { ...state, context: new_context };
		case "REMOVE_CONTEXT":
			new_context = state.context.filter((c) => c.id !== action.payload);
			return { ...state, context: new_context };
		case "SET_PRIORITY":
			return { ...state, priority: action.payload };
		case "SET_STATUS":
			return { ...state, status: action.payload };
		case "SET_DUE_DATE":
			return { ...state, due_date: action.payload };
		default:
			return state;
	}
}

function useFilter() {
	const [filterParams, dispatch] = useReducer(filterReducer, initialState);

	return [filterParams, dispatch];
}

export default useFilter;
