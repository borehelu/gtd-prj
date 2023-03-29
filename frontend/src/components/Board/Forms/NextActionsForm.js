import { useState } from "react";
import { useFormik } from "formik";
import FormControl from "../../FormControl";
import { nextActionSchema } from "../../../schema/";
import toast, { Toaster } from "react-hot-toast";
import { ButtonGroup, NewContext } from "./styles";
import useApi from "../../../hooks/useApi";
import useInbox from "../../../hooks/useInbox";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";

const priorityOptions = [
	{ value: "High", label: "High" },
	{ value: "Medium", label: "Medium" },
	{ value: "Low", label: "Low" },
];

const statusOptions = [
	{ value: "Pending", label: "Pending" },
	{ value: "In Progress", label: "In Progress" },
	{ value: "Complete", label: "Complete" },
];

let contextOptions = [{ value: "", label: "No context found" }];

function NextActionsForm({ inbox, selected, show, setShow }) {
	const [context, setContext] = useState("");
	const [showContext, setShowContext] = useState(false);
	const { createItem } = useApi("next-actions/");
	const { createItem: createContext, state } = useApi("context/");
	const { removeItem } = useInbox();

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues: {
				item_name: "",
				description: "",
				due_date: "",
				priority: "Low",
				status: "Pending",
				context_id: "",
			},
			validationSchema: nextActionSchema,
			onSubmit: async () => {
				const toastId = toast.loading("Adding...");
				try {
					await createItem(values);
					toast.success("Next action added", { id: toastId });
					removeItem(selected.id);
				} catch (error) {
					toast.error("Error adding item", { id: toastId });
				} finally {
					setShow(false);
				}
			},
		});

	if (state.data.length > 0) {
		const options = state.data.map((context) => ({
			value: context.id,
			label: context.name,
		}));
		contextOptions = [{ value: "", label: "Select context " }, ...options];
	}

	const handleClick = async () => {
		if (context.trim()) {
			await createContext({ name: context });
		}
		return;
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>
				Provide the details of your next action - <b>{selected.item}</b>
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
			<FormControl
				type="select"
				id="context_id"
				label="Context"
				handleBlur={handleBlur}
				handleChange={handleChange}
				touched={touched}
				errors={errors}
				values={values}
				options={contextOptions}
			/>

			<NewContext>
				<div className="top">
					<p>Add new context</p>
					<button
						type="button"
						onClick={() => setShowContext(!showContext)}
					>
						<IoChevronDownCircleOutline />
					</button>
				</div>
				<div className={`context-form ${showContext ? "show" : ""}`}>
					<input
						type="text"
						placeholder="@Home"
						value={context}
						onChange={(e) => setContext(e.target.value)}
					/>
					<button type="button" onClick={handleClick}>
						<IoAddOutline /> Add Context
					</button>
				</div>
			</NewContext>

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

export default NextActionsForm;
