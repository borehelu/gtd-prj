export function handleSearch(data, searchQuery) {
	const results = data.filter((item) => {
		if (
			item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.description.toLowerCase().includes(searchQuery.toLowerCase())
		)
			return true;
		return false;
	});

	return results;
}

export function checkFilters(filterParams) {
	if (filterParams.priority || filterParams.status) return true;
	return false;
}

export function handleFilter(data, filterParams) {
	const filtered = data.filter((item) => {
		if (filterParams.priority && filterParams.status) {
			if (
				item.priority === filterParams.priority &&
				filterParams.status === item.status
			)
				return true;
		} else if (filterParams.priority) {
			if (item.priority === filterParams.priority) return true;
		} else if (filterParams.status) {
			if (filterParams.status === item.status) return true;
		} else {
			return false;
		}
	});

	return filtered;
}

export function searchAndFilter(data, searchQuery, filterParams) {
	if (checkFilters(filterParams)) {
		let results = handleFilter(data, filterParams);
		return handleSearch(results, searchQuery);
	} else {
		return handleSearch(data, searchQuery);
	}
}

export const priorityOptions = [
	{ value: "High", label: "High" },
	{ value: "Medium", label: "Medium" },
	{ value: "Low", label: "Low" },
];

export const statusOptions = [
	{ value: "Pending", label: "Pending" },
	{ value: "In Progress", label: "In Progress" },
	{ value: "Complete", label: "Complete" },
];

export const dueDateOptions = [
	{ value: "Pending", label: "Today" },
	{ value: "In Progress", label: "Tomorrow" },
	{ value: "Complete", label: "This week" },
];
