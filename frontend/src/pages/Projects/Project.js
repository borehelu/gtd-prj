import { IoEllipsisVertical, IoTimeOutline } from "react-icons/io5";
import { formatDate } from "../../utils/date";
import formatStatus from "../../utils/status";
import Options from "../../components/Options/";
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

function Project({ item, onDelete, setActive, setIsEditing, setIsShown }) {
	return (
		<NextItemContainer>
			<Heading>
				<Name>{item.project_name}</Name>
				<Status className={`${formatStatus(item.status)}`}>
					<div className="dot"></div>
					{item.status}
				</Status>
				<Options
					item={item}
					setActive={setActive}
					onDelete={onDelete}
					setIsEditing={setIsEditing}
					setIsShown={setIsShown}
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

export default Project;
