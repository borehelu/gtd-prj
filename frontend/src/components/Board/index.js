import { useState, useEffect } from "react";
import { MdDragIndicator } from "react-icons/md";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useApi from "../../hooks/useApi";
import {
	Section,
	FolderContainer,
	BoardList,
	FolderList,
	InboxItem,
} from "./styles";

import Folder from "./Folder";
import InboxItemDr from "./InboxItem";
import Modal from "../Modal";
import NextActionsForm from "./Forms/NextActionsForm";
import CalendarForm from "./Forms/CalendarForm";
import ProjectsForm from "./Forms/ProjectsForm";
import ReferencesForm from "./Forms/ReferencesForm";
import SomedayForm from "./Forms/SomedayForm";
import WaitingForForm from "./Forms/WaitingForForm";

const folders = [
	"next-actions",
	"projects",
	"calendar",
	"waiting-for",
	"someday-maybe",
	"references",
];

function Board({ state, onDelete }) {
	const [show, setShow] = useState(false);
	const [selectedForm, setSelectedForm] = useState(null);

	function handleDrop(item, type) {
		switch (type) {
			case "next-actions":
				setSelectedForm(
					<NextActionsForm
						show={show}
						setShow={setShow}
						onDelete={onDelete}
						selected={item.item}
					/>
				);
				break;
			case "projects":
				setSelectedForm(
					<ProjectsForm
						show={show}
						setShow={setShow}
						onDelete={onDelete}
						selected={item.item}
					/>
				);
				break;
			case "calendar":
				setSelectedForm(
					<CalendarForm
						show={show}
						setShow={setShow}
						onDelete={onDelete}
						selected={item.item}
					/>
				);
				break;
			case "waiting-for":
				setSelectedForm(
					<WaitingForForm
						show={show}
						setShow={setShow}
						onDelete={onDelete}
						selected={item.item}
					/>
				);
				break;
			case "someday-maybe":
				setSelectedForm(
					<SomedayForm
						show={show}
						setShow={setShow}
						onDelete={onDelete}
						selected={item.item}
					/>
				);
				break;
			case "references":
				setSelectedForm(
					<ReferencesForm
						show={show}
						setShow={setShow}
						onDelete={onDelete}
						selected={item.item}
					/>
				);
				break;
		}

		setShow(true);
	}
	return (
		<>
			<Modal show={show} setShow={setShow} title={"Process Inbox"}>
				{selectedForm}
			</Modal>
			<DndProvider backend={HTML5Backend}>
				<Section>
					<BoardList>
						<h2>Your inbox</h2>
						<p>Drag items to the appropriate folders.</p>
						{state.data.map((item, index) => (
							<InboxItemDr
								key={item.id}
								item={item}
								type="item"
							/>
						))}
					</BoardList>
					<FolderList>
						{folders.map((item, index) => (
							<Folder
								accept={"item"}
								onDrop={(item, type) => handleDrop(item, type)}
								key={index}
								type={item}
							/>
						))}
					</FolderList>
				</Section>
			</DndProvider>
		</>
	);
}

export default Board;
