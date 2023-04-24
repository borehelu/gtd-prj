import { useState, useEffect } from "react";
import { useFormik } from "formik";
import FormControl from "../../components/FormControl";
import { referenceSchema } from "../../schema/";
import { ButtonGroup } from "./styles";
import Modal from "../../components/Modal";
import { typeOptions } from "./helper";
function EditReference({ onUpdate, active, isEditing, setIsEditing }) {
	const [initialValues, setInitialValues] = useState({
		name: "",
		description: "",
		type: "book",
		path: "",
	});
	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: initialValues,
			validationSchema: referenceSchema,
			enableReinitialize: true,
			onSubmit: async () => {
				onUpdate(active.id, values);
			},
		});

	useEffect(() => {
		if (active) {
			setInitialValues({
				name: active.name,
				description: active.description,
				type: active.type,
				path: active.path,
			});
		}
	}, [active]);

	if (!active) return null;
	return (
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Reference">
			<form onSubmit={handleSubmit}>
				<p>
					Provide the details of the reference - <b>{active.item}</b>
				</p>
				<FormControl
					type="text"
					id="name"
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

				<FormControl
					type="select"
					id="type"
					label="Type"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
					options={typeOptions}
				/>

				<FormControl
					type="text"
					id="path"
					label="Path to resource"
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

export default EditReference;
