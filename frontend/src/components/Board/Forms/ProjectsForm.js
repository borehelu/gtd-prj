import { useState } from "react";
import { useFormik } from "formik";
import FormControl from "../../FormControl";
import { projectSchema } from "../../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, NewContext } from "./styles";
import useApi from "../../../hooks/useApi";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

const priorityOptions = [
	{ value: "High", label: "High" },
	{ value: "Mid", label: "Mid" },
	{ value: "Low", label: "Low" },
];

const statusOptions = [
	{ value: "Pending", label: "Pending" },
	{ value: "In Progress", label: "In Progress" },
	{ value: "Complete", label: "Complete" },
];

function ProjectsForm({ inbox, onDelete, selected, show, setShow }) {
	const { createItem } = useApi("projects/");

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: {
				project_name: "",
				description: "",
				outcome: "",
				due_date: "",
				priority: "Low",
				status: "Pending",
			},
			validationSchema: projectSchema,
			onSubmit: async () => {
				const toastId = toast.loading("Adding...");
				try {
					await createItem(values);
					toast.success("Project added", { id: toastId });
					onDelete(selected.id);
				} catch (error) {
					console.log(error);
					toast.error("Error adding item", { id: toastId });
				} finally {
					setShow(false);
				}
			},
		});
	return (
		<form onSubmit={handleSubmit}>
			<p>
				Provide the details of the project - <b>{selected.item}</b>
			</p>
			<FormControl
				type="text"
				id="project_name"
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
				type="text"
				id="outcome"
				label="Outcome"
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
				<button type="button" onClick={() => setShow(false)}>
					Cancel
				</button>
			</ButtonGroup>
		</form>
	);
}

export default ProjectsForm;
