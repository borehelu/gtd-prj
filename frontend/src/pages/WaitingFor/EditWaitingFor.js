import { useState, useEffect } from "react";
import { useFormik } from "formik";
import FormControl from "../../components/FormControl";
import { waitingforSchema } from "../../schema/";
import { ButtonGroup } from "./styles";
import Modal from "../../components/Modal";
import { formatDate } from "./helper";

function EditWaitingFor({ onUpdate, active, isEditing, setIsEditing }) {
	const [initialValues, setInitialValues] = useState({
		item_name: "",
		description: "",
		contact_name: "",
		contact_email: "",
		due_date: "",
	});
	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: initialValues,
			validationSchema: waitingforSchema,
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
				contact_name: active.contact_name,
				contact_email: active.contact_email,
				due_date: formatDate(active.due_date),
			});
		}
	}, [active]);

	if (!active) return null;
	return (
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Someday">
			<form onSubmit={handleSubmit}>
				<p>
					Provide the details of the waiting for -{" "}
					<b>{active.item}</b>
				</p>
				<FormControl
					type="text"
					id="item_name"
					label="Item Name"
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
					type="text"
					id="contact_name"
					label="Name - (Waiting for?)"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
				/>

				<FormControl
					type="text"
					id="contact_email"
					label="Email"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
				/>

				<FormControl
					type="date"
					id="due_date"
					label="Due date"
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

export default EditWaitingFor;
