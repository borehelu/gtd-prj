import { useState } from "react";
import { useFormik } from "formik";
import FormControl from "../../FormControl";
import { somedaySchema } from "../../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, NewContext } from "./styles";
import useApi from "../../../hooks/useApi";
import useInbox from "../../../hooks/useInbox";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

function SomedayForm({ inbox, selected, show, setShow }) {
	const { createItem } = useApi("someday/");
	const { removeItem } = useInbox();
	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: {
				item_name: "",
				description: "",
			},
			validationSchema: somedaySchema,
			onSubmit: async () => {
				const toastId = toast.loading("Adding...");
				try {
					await createItem(values);
					toast.success("Someday added", { id: toastId });
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
				Provide the details of the someday - <b>{selected.item}</b>
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
				<button type="button" onClick={() => setShow(false)}>
					Cancel
				</button>
			</ButtonGroup>
		</form>
	);
}

export default SomedayForm;
