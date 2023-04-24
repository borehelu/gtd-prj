import { useState, useEffect } from "react";
import { useFormik } from "formik";
import FormControl from "../../components/FormControl";
import { somedaySchema } from "../../schema/";
import { ButtonGroup } from "./styles";
import Modal from "../../components/Modal";

function EditSomeday({ onUpdate, active, isEditing, setIsEditing }) {
	const [initialValues, setInitialValues] = useState({
		item_name: "",
		description: "",
	});
	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: initialValues,
			validationSchema: somedaySchema,
			enableReinitialize: true,
			onSubmit: async () => {
				onUpdate(active.id, values);
			},
		});

	useEffect(() => {
		if (active) {
			setInitialValues({
				item_name: active.item_name,
				description: active.description,
			});
		}
	}, [active]);

	if (!active) return null;

	return (
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Someday">
			<form onSubmit={handleSubmit}>
				<p>
					Provide the details of the someday - <b>{active.item}</b>
				</p>
				<FormControl
					type="text"
					id="item_name"
					label="Name"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
				/>

				<FormControl
					type="textarea"
					id="description"
					label="Description"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
				/>
				<ButtonGroup>
					<button className="primary" type="submit">
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

export default EditSomeday;
