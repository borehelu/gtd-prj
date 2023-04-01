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

function Options({ item, onDelete, setActive, setIsEditing, url }) {
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
		navigate(`${url + item.id}`);
	};

	return (
		<OptionsContainer>
			<button onClick={() => setShow(!show)}>
				<IoEllipsisVerticalOutline />
			</button>
			{show && (
				<OptionsMenu>
					{url && (
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
