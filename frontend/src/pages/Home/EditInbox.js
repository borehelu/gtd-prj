import { useState, useEffect } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

import useInbox from "../../hooks/useInbox";
import Modal from "../../components/Modal";
import { InputWrapper } from "../../components/FormControl/styles";
import { inboxSchema } from "../../schema";
import { ButtonGroup } from "./styles";

function EditInbox() {
	const [item, setItem] = useState("");
	const [error, setError] = useState("");
	const { selected, showEditing, setShowEditing, updateItem } = useInbox();

	useEffect(() => {
		if (selected) setItem(selected.item);
	}, [selected]);

	if (!selected) return null;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (item.trim()) {
			updateItem(selected.id, { ...selected, item });
			setShowEditing(false);
		}
	};
	return (
		<Modal show={showEditing} setShow={setShowEditing} title="Edit Item">
			<form onSubmit={handleSubmit}>
				<InputWrapper>
					<input
						type="text"
						name="item"
						id="item"
						onChange={(e) => setItem(e.target.value)}
						value={item}
						required
					/>
					<label htmlFor="item">Item</label>
				</InputWrapper>
				{error && (
					<small>
						<RiErrorWarningLine /> {error}
					</small>
				)}

				<ButtonGroup>
					<button type="submit" className="primary">
						Save
					</button>
					<button type="button" onClick={() => setShowEditing(false)}>
						Cancel
					</button>
				</ButtonGroup>
			</form>
		</Modal>
	);
}

export default EditInbox;
