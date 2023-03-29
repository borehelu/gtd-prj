import { IoEllipsisVertical, IoTimeOutline } from "react-icons/io5";
import { formatDate } from "../../utils/date";
import Options from "../Options/";
import useNextActions from "../../hooks/useNextActions";
import { useEffect } from "react";
import {
	NextItemContainer,
	Heading,
	Footer,
	Name,
	Description,
	Status,
	Priority,
	DueDate,
} from "./styles";

function NextItem({ item }) {
	const { removeItem, setSelected, setShowEditing } = useNextActions();

	return (
		<NextItemContainer>
			<Heading>
				<Name>{item.item_name}</Name>
				<Status className={`${formatStatus(item.status)}`}>
					<div className="dot"></div>
					{item.status}
				</Status>
				<Options
					item={item}
					removeItem={removeItem}
					setSelected={() => setSelected(item)}
					setShowEditing={setShowEditing}
				/>
			</Heading>

			<Description>{item.description}</Description>

			<DueDate>
				<IoTimeOutline />
				in {formatDate(new Date(item.due_date))}
			</DueDate>
		</NextItemContainer>
	);
}

function formatStatus(status) {
	switch (status) {
		case "Pending":
			return "pending";
		case "In Progress":
			return "inprogress";
		case "Complete":
			return "completed";
		default:
			return "";
	}
}

export default NextItem;
