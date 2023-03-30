import { useState } from "react";
import { useFormik } from "formik";
import FormControl from "../../FormControl";
import { waitingforSchema } from "../../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, NewContext } from "./styles";
import useApi from "../../../hooks/useApi";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

function WaitingForForm({ inbox, onDelete, selected, show, setShow }) {
	const { createItem } = useApi("waiting-for/");

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: {
				item_name: "",
				description: "",
				contact_name: "",
				contact_email: "",
				due_date: "",
			},
			validationSchema: waitingforSchema,
			onSubmit: async () => {
				const toastId = toast.loading("Adding...");
				try {
					await createItem(values);
					toast.success("Item added", { id: toastId });
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
				Provide the details of the waiting for - <b>{selected.item}</b>
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
				<button type="button" onClick={() => setShow(false)}>
					Cancel
				</button>
			</ButtonGroup>
		</form>
	);
}

export default WaitingForForm;
