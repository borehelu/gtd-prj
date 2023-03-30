import { useState, useEffect } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";
import FormControl from "../../components/FormControl";
import useApi from "../../hooks/useApi";
import { nextActionSchema } from "../../schema";
import { ButtonGroup, NewContext } from "./styles";
import { IoAddOutline, IoChevronDownCircleOutline } from "react-icons/io5";
import { format } from "date-fns";

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

let contextOptions = [{ value: "", label: "No context found" }];

function EditNextAction({ onUpdate, active, isEditing, setIsEditing }) {
	const [context, setContext] = useState("");
	const [showContext, setShowContext] = useState(false);
	const [initialValues, setInitialValues] = useState({
		item_name: "",
		description: "",
		due_date: "",
		priority: "",
		status: "",
		context_id: "",
	});

	const { createItem: createContext, state } = useApi("context/");

	const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
		useFormik({
			initialValues,
			enableReinitialize: true,
			validationSchema: nextActionSchema,
			onSubmit: async () => {
				onUpdate(active.id, values);
			},
		});

	useEffect(() => {
		if (active) {
			setInitialValues({
				item_name: active.item_name,
				description: active.description,
				due_date: format(new Date(active.due_date), "yyyy-MM-dd"),
				priority: active.priority,
				status: active.status,
				context_id: active.context_id,
			});
		}
	}, [active]);

	if (!active) return null;

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
		<Modal show={isEditing} setShow={setIsEditing} title="Edit Next Action">
			<form onSubmit={handleSubmit}>
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
					<div
						className={`context-form ${showContext ? "show" : ""}`}
					>
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
					<button type="button" onClick={() => setIsEditing(false)}>
						Cancel
					</button>
				</ButtonGroup>
			</form>
		</Modal>
	);
}

export default EditNextAction;
