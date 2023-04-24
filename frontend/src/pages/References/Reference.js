import { Container, Heading, Name, Description, Resource } from "./styles";
import Options from "../../components/Options";
import { IoGlobeOutline, IoBookOutline } from "react-icons/io5";

function Reference({ item, onDelete, setActive, setIsEditing, setIsShown }) {
	return (
		<Container>
			<Heading>
				<Name>{item.name}</Name>
				<Options
					item={item}
					setActive={setActive}
					onDelete={onDelete}
					setIsEditing={setIsEditing}
				/>
			</Heading>
			<Description>{item.description}</Description>
			{item.type === "book" ? (
				<Resource>
					<IoBookOutline /> Book
				</Resource>
			) : (
				<Resource>
					<IoGlobeOutline /> Website
				</Resource>
			)}
		</Container>
	);
}

export default Reference;
