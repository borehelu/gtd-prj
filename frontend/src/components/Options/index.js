import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { OptionsContainer, OptionsMenu } from "./styles";
import {
	IoCreateOutline,
	IoTrashOutline,
	IoEllipsisVerticalOutline,
	IoArrowRedoOutline,
	IoEyeOutline,
} from "react-icons/io5";

function Options({ item, onDelete, setActive, setIsEditing, setIsShown }) {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleEdit = () => {
		setShow(false);
		setActive(item);
		setIsEditing(true);
	};
	const handleDelete = () => {
		setShow(false);
		onDelete(item.id);
	};

	const handleView = () => {
		setActive(item);
		setShow(false);
		setIsShown(true);
	};

	return (
		<OptionsContainer>
			<button onClick={() => setShow(!show)}>
				<IoEllipsisVerticalOutline />
			</button>
			{show && (
				<OptionsMenu>
					{setIsShown && (
						<button onClick={handleView}>
							<IoEyeOutline /> view
						</button>
					)}

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
