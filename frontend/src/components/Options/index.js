import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { OptionsContainer, OptionsMenu } from "./styles";
import {
	IoCreateOutline,
	IoTrashOutline,
	IoEllipsisVerticalOutline,
	IoArrowRedoOutline,
} from "react-icons/io5";

function Options({ item, removeItem, setSelected, setShowEditing }) {
	const [show, setShow] = useState(false);

	const handleEdit = () => {
		setShow(false);
		setSelected(item);
		setShowEditing(true);
	};
	const handleDelete = () => {
		setShow(false);
		const toastId = toast.loading("Deleting...");
		try {
			removeItem(item.id);
			toast.success("Item deleted!", { id: toastId });
		} catch (e) {
			toast.error(e.message, { id: toastId });
		}
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
