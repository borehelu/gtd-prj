import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { OptionsContainer, OptionsMenu } from "./styles";
import {
	IoCreateOutline,
	IoTrashOutline,
	IoEllipsisVerticalOutline,
	IoArrowRedoOutline,
} from "react-icons/io5";

function Options({ item, onDelete, setActive, setIsEditing }) {
	const [show, setShow] = useState(false);

	const handleEdit = () => {
		setShow(false);
		setActive(item);
		setIsEditing(true);
	};
	const handleDelete = () => {
		setShow(false);
		onDelete(item.id);
	};

	return (
		<OptionsContainer>
			<button onClick={() => setShow(!show)}>
				<IoEllipsisVerticalOutline />
			</button>
			{show && (
				<OptionsMenu>
					<button onClick={handleEdit}>
						<IoCreateOutline /> edit
					</button>

					<button onClick={handleDelete}>
						<IoTrashOutline /> remove
					</button>
				</OptionsMenu>
			)}
		</OptionsContainer>
	);
}

export default Options;
