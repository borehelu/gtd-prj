import { useState } from "react";
import { useFormik } from "formik";
import FormControl from "../../FormControl";
import { calendarSchema } from "../../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, NewContext } from "./styles";
import useApi from "../../../hooks/useApi";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

function CalendarForm({ inbox, onDelete, selected, show, setShow }) {
	const { createItem } = useApi("calendar/");

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: {
				event_name: "",
				event_description: "",
				event_location: "",
				event_date: "",
				event_start: "",
				event_end: "",
			},
			validationSchema: calendarSchema,
			onSubmit: async () => {
				const toastId = toast.loading("Adding...");
				try {
					await createItem({
						...values,
						event_start: values.event_start + ":00",
						event_end: values.event_end + ":00",
					});
					toast.success("Calendar added", { id: toastId });
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
				Provide the details of the event/appointment -{" "}
				<b>{selected.item}</b>
			</p>
			<FormControl
				type="text"
				id="event_name"
				label="Name"
				handleBlur={handleBlur}
				handleChange={handleChange}
				touched={touched}
				errors={errors}
				values={values}
			/>

			<FormControl
				type="textarea"
				id="event_description"
				label="Description"
				handleBlur={handleBlur}
				handleChange={handleChange}
				touched={touched}
				errors={errors}
				values={values}
			/>

			<FormControl
				type="text"
				id="event_location"
				label="Location"
				handleBlur={handleBlur}
				handleChange={handleChange}
				touched={touched}
				errors={errors}
				values={values}
			/>

			<FormControl
				type="date"
				id="event_date"
				label="Event date"
				handleBlur={handleBlur}
				handleChange={handleChange}
				touched={touched}
				errors={errors}
				values={values}
			/>

			<FormControl
				type="time"
				id="event_start"
				label="Event start"
				handleBlur={handleBlur}
				handleChange={handleChange}
				touched={touched}
				errors={errors}
				values={values}
			/>

			<FormControl
				type="time"
				id="event_end"
				label="Event end"
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

export default CalendarForm;
