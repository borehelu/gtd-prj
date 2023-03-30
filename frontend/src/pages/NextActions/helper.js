export function handleSearch(data, searchQuery) {
	const results = data.filter((item) => {
		const nameArray = item.item_name.toLowerCase().split(" ");
		const descriptionArray = item.description.toLowerCase().split(" ");
		if (
			nameArray.includes(searchQuery.toLowerCase()) ||
			descriptionArray.includes(searchQuery.toLowerCase())
		)
			return true;
		return false;
	});

	return results;
}

export function checkFilters(filterParams) {
	if (
		filterParams.context.length > 0 ||
		filterParams.priority ||
		filterParams.status
	)
		return true;
	return false;
}

export function handleFilter(data, filterParams) {
	const context = filterParams.context.map((c) => c.name);
	const filtered = data.filter((item) => {
		if (
			context.length > 0 &&
			filterParams.priority &&
			filterParams.status
		) {
			if (
				context.includes(item.context) &&
				item.priority === filterParams.priority &&
				filterParams.status === item.status
			)
				return true;
		} else if (context.length > 0 && filterParams.priority) {
			if (
				context.includes(item.context) &&
				item.priority === filterParams.priority
			)
				return true;
		} else if (context.length > 0 && filterParams.status) {
			if (
				context.includes(item.context) &&
				filterParams.status === item.status
			)
				return true;
		} else if (context.length > 0) {
			if (context.includes(item.context)) return true;
		} else if (filterParams.priority && filterParams.status) {
			if (
				item.priority === filterParams.priority &&
				filterParams.status === item.status
			)
				return true;
		} else if (filterParams.priority) {
			if (item.priority === filterParams.priority) return true;
		} else if (filterParams.status) {
			if (filterParams.status === item.status) return true;
		}
	});

	return filtered;
}
