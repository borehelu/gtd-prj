import { Container, Heading, Name, Description } from "./styles";
import Options from "../../components/Options";
function Someday({ item, onDelete, setActive, setIsEditing, setIsShown }) {
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
		</Container>
	);
}

export default Someday;
