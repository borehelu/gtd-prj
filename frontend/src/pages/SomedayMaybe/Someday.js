import React from "react";

function Someday({ item, onDelete, setActive, setIsEditing, setIsShown }) {
	console.log(item);
	return <div>{item.item_name}</div>;
}

export default Someday;
