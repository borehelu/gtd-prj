import { memo } from "react";
import { useDrag } from "react-dnd";
import { InboxItem } from "./styles";

function InboxItemDr({ item }) {
	const [{ isDragging }, drag] = useDrag({
		type: "inbox",
		item: { item },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	let border = isDragging ? "1px dotted var(--primary-color)" : "none";
	let backgroundColor = isDragging ? "#f7f7f7" : "#fff";
	return (
		<InboxItem ref={drag} style={{ border, backgroundColor }}>
			{item.item}
		</InboxItem>
	);
}

export default InboxItemDr;
