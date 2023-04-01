import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import Options from "../../components/Options";
import { formatDate } from "../../utils/date";
import formatStatus from "../../utils/status";
import { IoArrowBackOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import EditProject from "./EditProject";
import { Status, DueDate } from "./styles";

const Main = styled.main`
	width: 100vw;
	height: 100%;
`;

const Wrapper = styled.section`
	width: 60%;
	max-width: 600px;
	margin: 3rem auto;
	padding: 1rem 2rem;

	& a {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		margin-bottom: 1rem;
		color: #222;
	}
`;

const Flex = styled.div`
	display: flex;
	column-gap: 1rem;
`;

const ProjectName = styled.h1``;
const ProjectDescription = styled.p``;
const ProjectOutcome = styled.p``;
const ProjectPriority = styled.div``;
const ProjectDuedate = styled.div``;

function ProjectDetail() {
	const { id } = useParams();
	const { state } = useApi(`projects/${id}`);
	const { updateItem, removeItem } = useApi("projects/");
	const [active, setActive] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	const handleUpdate = async (id, updatedItem) => {
		const toastId = toast.loading("Updating...");
		try {
			await updateItem(id, updatedItem);
			toast.success("Item updated", { id: toastId });
		} catch (error) {
			toast.error("Error updating item", { id: toastId });
		} finally {
			setIsEditing(false);
		}
	};

	const handleDelete = (id) => {
		const toastId = toast.loading("Deleting...");
		try {
			removeItem(id);
			toast.success("Item deleted!", { id: toastId });
			navigate("/projects/");
		} catch (e) {
			toast.error(e.message, { id: toastId });
		}
	};

	if (state.loading) return <LoadingSpinner />;

	return (
		<Main>
			<Toaster />
			<EditProject
				onUpdate={handleUpdate}
				active={active}
				isEditing={isEditing}
				setIsEditing={setIsEditing}
			/>
			<Wrapper>
				<Link to="/projects/">
					<IoArrowBackOutline /> Back to projects
				</Link>
				<Flex>
					<ProjectName>{state.data.project_name}</ProjectName>
					<Status className={`${formatStatus(state.data.status)}`}>
						<div className="dot"></div>
						{state.data.status}
					</Status>
					<Options
						item={state.data}
						setActive={setActive}
						onDelete={handleDelete}
						setIsEditing={setIsEditing}
					/>
				</Flex>
				<ProjectDuedate>
					{`In ` + formatDate(new Date(state.data.due_date))}
				</ProjectDuedate>
				<ProjectDescription>
					{state.data.description}
				</ProjectDescription>
				<ProjectOutcome>{state.data.outcome}</ProjectOutcome>
			</Wrapper>
		</Main>
	);
}

export default ProjectDetail;
