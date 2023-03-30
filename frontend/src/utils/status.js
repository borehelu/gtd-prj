function formatStatus(status) {
	switch (status) {
		case "Pending":
			return "pending";
		case "In Progress":
			return "inprogress";
		case "Complete":
			return "completed";
		default:
			return "";
	}
}

export default formatStatus;
