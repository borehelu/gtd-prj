import Modal from "../../components/Modal";
import useApi from "../../hooks/useApi";
import styled from "styled-components";
import {
	ButtonGroup,
	FormControl,
	ContextWrapper,
	ContextInput,
} from "./styles";
import { useState, useEffect } from "react";
import { priorityOptions, statusOptions, dueDateOptions } from "./helper";

function FilterModal({ showFilter, setShowFilter, dispatch }) {
	const [priority, setPriority] = useState("");
	const [status, setStatus] = useState("");
	const [dueDate, setDueDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const filter = {
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
