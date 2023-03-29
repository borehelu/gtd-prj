import { useState } from "react";
import { useFormik } from "formik";
import FormControl from "../../FormControl";
import { referenceSchema } from "../../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, NewContext } from "./styles";
import useApi from "../../../hooks/useApi";
import useInbox from "../../../hooks/useInbox";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

const typeOptions = [
	{ value: "book", label: "Book" },
	{ value: "article", label: "Article" },
	{ value: "website", label: "Website" },
];

function ReferencesForm({ inbox, selected, show, setShow }) {
	const { createItem } = useApi("reference/");
	const { removeItem } = useInbox();
	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: {
				name: "",
				description: "",
				type: "book",
				path: "",
			},
			validationSchema: referenceSchema,
			onSubmit: async () => {
				const toastId = toast.loading("Adding...");
				try {
					await createItem(values);
					toast.success("Reference added", { id: toastId });
					removeItem(selected.id);
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
				Provide the details of the reference - <b>{selected.item}</b>
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
				<button type="button" onClick={() => setShow(false)}>
					Cancel
				</button>
			</ButtonGroup>
		</form>
	);
}

export default ReferencesForm;
