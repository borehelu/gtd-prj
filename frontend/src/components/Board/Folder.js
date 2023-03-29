import { FolderContainer } from "./styles";
import { memo } from "react";
import { useDrop } from "react-dnd";

function Folder({ onDrop, type }) {
	const [{ isOver }, drop] = useDrop({
		accept: "inbox",
		drop: (item, monitor) => {
			onDrop(item, type);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	let backgroundColor = isOver ? "#ddd" : "var(--primary-color)";

	return (
		<FolderContainer ref={drop}>
			<div className="folder">
				<div className="paper_wrapper">
					<div className="paper"></div>
				</div>
				<div className="folder_head"></div>
				<div className="folder_body" style={{ backgroundColor }}>
					{isOver ? "Drop here!" : type}
				</div>
			</div>
		</FolderContainer>
	);
}

export default Folder;
