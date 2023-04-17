import { useState, useEffect } from "react";
import { useFormik } from "formik";
import FormControl from "../../components/FormControl";
import { calendarSchema } from "../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup } from "./styles";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

import { formatTime, formatDate } from "./helper";
import Modal from "../../components/Modal";

function EditCalendar({ onUpdate, selected, isEditing, setIsEditing }) {
	const [initialValues, setInitialValues] = useState({
		event_name: "",
		event_description: "",
		event_location: "",
		event_date: "",
		event_start: "",
		event_end: "",
	});
	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: initialValues,
			enableReinitialize: true,
			validationSchema: calendarSchema,
			onSubmit: async () => {
				onUpdate(selected.id, {
					...values,
					event_start: values.event_start + ":00",
					event_end: values.event_end + ":00",
				});
			},
		});

	useEffect(() => {
		if (selected) {
			setInitialValues({
				event_name: selected.event_name,
				event_description: selected.event_description,
				event_location: selected.event_location,
				event_date: formatDate(selected.event_date),
				event_start: formatTime(selected.event_start),
				event_end: formatTime(selected.event_end),
			});
		}
	}, [selected]);

	if (!selected) return null;
	return (
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Event">
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
					<button type="button" onClick={() => setIsEditing(false)}>
						Cancel
					</button>
				</ButtonGroup>
			</form>
		</Modal>
	);
}

export default EditCalendar;
