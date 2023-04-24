import {
	Container,
	Heading,
	Name,
	Description,
	DueDate,
	Flex,
	Contact,
} from "./styles";
import Options from "../../components/Options";
import { IoEllipsisVertical, IoTimeOutline } from "react-icons/io5";
import { formatDate } from "../../utils/date";

function WaitingFor({ item, onDelete, setActive, setIsEditing, setIsShown }) {
	return (
		<Container>
			<Heading>
				<Name>{item.item_name}</Name>
				<Options
					item={item}
					setActive={setActive}
					onDelete={onDelete}
					setIsEditing={setIsEditing}
				/>
			</Heading>
			<Description>{item.description}</Description>
			<Flex>
				<DueDate>
					<IoTimeOutline />
					in {formatDate(new Date(item.due_date))}
				</DueDate>
				<Contact>- {item.contact_name}</Contact>
			</Flex>
		</Container>
	);
}

export default WaitingFor;
