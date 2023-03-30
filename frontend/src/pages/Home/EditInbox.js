import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Modal from "../../components/Modal";
import FormControl from "../../components/FormControl";
import { inboxSchema } from "../../schema";
import { ButtonGroup, NewContext } from "./styles";

function EditInbox({ onUpdate, active, isEditing, setIsEditing }) {
	const [initialValues, setInitialValues] = useState({ item: "" });

	useEffect(() => {
		if (active) setInitialValues({ item: active.item });
	}, [active]);

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues,
			enableReinitialize: true,
			validationSchema: inboxSchema,
			onSubmit: () => {
				onUpdate(active.id, { ...active, item: values.item });
			},
		});

	return (
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Item">
			<form onSubmit={handleSubmit}>
				<FormControl
					type="text"
					id="item"
					label="Inbox item"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
				/>

				<ButtonGroup>
					<button type="submit" className="primary">
						Save
					</button>
					<button type="button" onClick={() => setIsEditing(false)}>
						Cancel
					</button>
				</ButtonGroup>
			</form>
		</Modal>
	);
}

export default EditInbox;
