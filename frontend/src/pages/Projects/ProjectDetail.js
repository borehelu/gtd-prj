import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useApi from "../../hooks/useApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import Options from "../../components/Options";
import Modal from "../../components/Modal";
import { formatDate } from "../../utils/date";
import formatStatus from "../../utils/status";
import {
	IoArrowBackOutline,
	IoStopwatchOutline,
	IoAddOutline,
} from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import EditProject from "./EditProject";
import { Status, DueDate } from "./styles";
import { HiOutlineHashtag } from "react-icons/hi2";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

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
	align-items: center;
	column-gap: 0.3rem;
	margin-top: ${(props) => (props.margin ? "1rem" : "0.4rem")};
	& svg {
		font-size: 0.8rem;
	}

	& h2 {
		font-size: 1.15rem;
		color: #555;
	}
`;

const ProjectDescription = styled.p`
	margin-left: 1.2rem;
	color: #666;
	font-size: 0.935rem;
`;

const ProjectDuedate = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.2rem;
	font-size: 0.85rem;
	color: #555;
`;

const ProjectNextActions = styled.div`
	margin-left: 1.2rem;
	color: #666;

	& button {
		display: flex;
		align-items: center;
		column-gap: 0.4rem;
		color: #666;
		font-size: 0.9rem;
		border-radius: 4px;
		padding: 0.3rem 0.8rem;
		border: 1px solid #ddd;
		margin: 1rem auto;
	}
`;

const FormControl = styled.div`
	display: flex;
	flex-direction: column;
`;

const nextactions = [
	{ id: 1, description: "Lorem ipusm asdf adfasdf", status: "Complete" },
	{ id: 2, description: "Lorem ipusm asdf adfasdf", status: "Complete" },
	{ id: 3, description: "Lorem ipusm asdf adfasdf", status: "Pending" },
];

function ProjectDetail({ isShown, setIsShown, active }) {
	const [nextActions, setNextActions] = useState([]);
	const [showInput, setShowInput] = useState(false);
	const axiosPrivate = useAxiosPrivate();

	useEffect(() => {
		async function fetchNextActions() {
			const res = await axiosPrivate(`projects/${active.id}/tasks`);
			setNextActions(res.data);
		}

		if (active) {
			fetchNextActions();
			console.log(nextActions);
		}
	}, [active]);

	if (!active) return null;
	return (
		<Modal show={isShown} setShow={setIsShown} title={active.project_name}>
			<Flex>
				<Status className={`${formatStatus(active.status)}`}>
					<div className="dot"></div>
					{active.status}
				</Status>
				<ProjectDuedate>
					<IoStopwatchOutline />
					Due in <em>{formatDate(new Date(active.due_date))}</em>
				</ProjectDuedate>
			</Flex>
			<Flex margin={true}>
				<HiOutlineHashtag />
				<h2>Description</h2>
			</Flex>
			<ProjectDescription>{active.description}</ProjectDescription>
			<Flex margin={true}>
				<HiOutlineHashtag />
				<h2>Outcome</h2>
			</Flex>
			<ProjectDescription>{active.outcome}</ProjectDescription>
			<Flex margin={true}>
				<HiOutlineHashtag />
				<h2>Next Actions</h2>
			</Flex>
			<ProjectNextActions>
				{nextActions.length > 0 ? (
					nextActions.map((item, i) => (
						<div>
							<label htmlFor="item.id">
								<input
									type="checkbox"
									id={item.id}
									checked={item.status === "Complete"}
								/>
								{item.description}
							</label>
						</div>
					))
				) : (
					<p>Next actions not added</p>
				)}

				{showInput && (
					<FormControl>
						<label htmlFor="next_action">Next action</label>
						<textarea name="" id="next_action"></textarea>
					</FormControl>
				)}

				<button onClick={() => setShowInput(!showInput)}>Add</button>
			</ProjectNextActions>
		</Modal>
	);
}

export default ProjectDetail;
