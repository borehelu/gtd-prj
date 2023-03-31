import { useState, useEffect } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";
import FormControl from "../../components/FormControl";
import useApi from "../../hooks/useApi";
import { projectSchema } from "../../schema";
import { ButtonGroup } from "./styles";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";
import { format } from "date-fns";
import { priorityOptions, statusOptions, dueDateOptions } from "./helper";

function EditProject({ onUpdate, active, isEditing, setIsEditing }) {
	const [initialValues, setInitialValues] = useState({
		project_name: "",
		description: "",
		outcome: "",
		due_date: "",
		priority: "",
		status: "",
	});

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues,
			enableReinitialize: true,
			validationSchema: projectSchema,
			onSubmit: () => {
				onUpdate(active.id, values);
			},
		});

	useEffect(() => {
		if (active) {
			setInitialValues({
				project_name: active.project_name,
				description: active.description,
				outcome: active.outcome,
				due_date: format(new Date(active.due_date), "yyyy-MM-dd"),
				priority: active.priority,
				status: active.status,
			});
		}
	}, [active]);

	if (!active) return null;

	return (
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Project">
			<form onSubmit={handleSubmit}>
				<FormControl
					type="text"
					id="project_name"
					label="Project Name"
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
					id="outcome"
					label="Project outcome"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
				/>

				<FormControl
					type="select"
					id="priority"
					label="Priority"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
					options={priorityOptions}
				/>

				<FormControl
					type="select"
					id="status"
					label="Status"
					handleBlur={handleBlur}
					handleChange={handleChange}
					touched={touched}
					errors={errors}
					values={values}
					options={statusOptions}
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

export default EditProject;
