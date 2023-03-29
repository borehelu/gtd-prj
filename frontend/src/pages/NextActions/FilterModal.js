import Modal from "../../components/Modal";
import useApi from "../../hooks/useApi";
import styled from "styled-components";
import { ButtonGroup } from "./styles";
import { useState, useEffect } from "react";

const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.3rem;

	& label {
		font-size: 0.9rem;
	}
	& select {
		background-color: #f7f7f7;
		border: none;
		padding: 8px 16px;
		border-radius: 8px;
		color: #555;
		font-size: 0.9rem;
	}
`;

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

const dueDateOptions = [
	{ value: "Pending", label: "Today" },
	{ value: "In Progress", label: "Tomorrow" },
	{ value: "Complete", label: "This week" },
];

const ContextWrapper = styled.div`
	font-size: 0.9rem;
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	& div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem 0.5rem;
	}
`;

const ContextInput = styled.div`
	display: grid;
	grid-template-columns: auto 1rem;
	border: 1px solid #ddd;
	border-radius: 1rem;
	padding: 5px 12px;
	font-size: 0.9rem;
`;

function FilterModal({ showFilter, setShowFilter, dispatch }) {
	const { state } = useApi("context/");
	const [selectedContext, setSelectedContext] = useState([]);
	const [priority, setPriority] = useState("");
	const [status, setStatus] = useState("");
	const [dueDate, setDueDate] = useState("");

	const handleChecked = (e) => {
		const { name, value, checked } = e.target;
		const selected = JSON.parse(value);
		if (checked) {
			setSelectedContext([...selectedContext, selected]);
		} else {
			setSelectedContext(
				selectedContext.filter((s) => s.id !== selected.id)
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const filter = {
			context: selectedContext,
			priority,
			status,
			due_date: dueDate,
		};
		dispatch({ type: "SET_FILTER", payload: filter });
		setShowFilter(false);
	};
	return (
		<Modal show={showFilter} setShow={setShowFilter} title="Filter">
			<form onSubmit={(e) => handleSubmit(e)}>
				<ContextWrapper>
					<p>Context</p>
					<div>
						{state.data.map((context) => (
							<ContextInput key={context.id}>
								<label htmlFor={context.name}>
									{context.name}
								</label>
								<input
									type="checkbox"
									value={JSON.stringify({
										id: context.id,
										name: context.name,
									})}
									id={context.name}
									onChange={handleChecked}
								/>
							</ContextInput>
						))}
					</div>
				</ContextWrapper>

				<FormControl>
					<label htmlFor="priority">Priority</label>
					<select
						name="priority"
						id="priority"
						onChange={(e) => setPriority(e.target.value)}
					>
						<option value="">Select priority</option>
						{priorityOptions.map((option) => (
							<option value={option.value} key={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</FormControl>

				<FormControl>
					<label htmlFor="status">Status</label>
					<select
						name="status"
						id="status"
						onChange={(e) => setStatus(e.target.value)}
					>
						<option value="">Select status</option>
						{statusOptions.map((option) => (
							<option value={option.value} key={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</FormControl>

				<FormControl>
					<label
						htmlFor="due_date"
						onChange={(e) => setDueDate(e.target.value)}
					>
						Due date
					</label>
					<select name="due_date" id="due_date">
						<option value="">Select Due date</option>
						{dueDateOptions.map((option) => (
							<option value={option.value} key={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</FormControl>
				<ButtonGroup>
					<button className="primary" type="submit">
						Apply
					</button>
					<button type="button" onClick={() => setShowFilter(false)}>
						Cancel
					</button>
				</ButtonGroup>
			</form>
		</Modal>
	);
}

export default FilterModal;
