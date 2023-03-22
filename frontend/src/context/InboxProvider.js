import { createContext, useState } from "react";
import useApi from "../hooks/useApi";

const InboxContext = createContext({});

export const InboxProvider = ({ children }) => {
	const [selected, setSelected] = useState(null);
	const [showEditing, setShowEditing] = useState(false);
	const { state, createItem, updateItem, removeItem } = useApi("inbox/");
	return (
		<InboxContext.Provider
			value={{
				state,
				createItem,
				updateItem,
				removeItem,
				selected,
				setSelected,
				showEditing,
				setShowEditing,
			}}
		>
			{children}
		</InboxContext.Provider>
	);
};

export default InboxContext;
