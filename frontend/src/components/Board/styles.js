import styled from "styled-components";

export const FolderContainer = styled.div`
	display: flex;
	overflow: hidden;
	width: 100px;
	height: 80px;

	.folder {
		display: grid;
		width: 100%;
		height: 100%;
		background: transparent;
		grid-template-columns: 4fr 2fr;
		grid-template-rows: 0.8fr 0.8fr 6fr;
		grid-template-areas:
			"paper ."
			"paper head"
			"body body";
	}
	.paper_wrapper {
		grid-area: paper;
		overflow: hidden;
		position: relative;
	}
	.paper {
		position: absolute;
		top: 100%;
		width: 200%;
		height: 300%;
		background: rgb(217, 220, 224);
		background: linear-gradient(
			90deg,
			rgba(217, 220, 224, 1) 0%,
			rgba(255, 255, 255, 1) 50%
		);
		transform: translate(2%, 5%) rotate(12.5deg);
	}
	.folder_head {
		grid-area: head;
		display: flex;
		background: hsl(240, 100%, 7%);
		background: linear-gradient(
			90deg,
			hsla(240, 100%, 7%, 0.8) 0%,
			hsl(240, 100%, 7%) 100%
		);
		border-radius: 100vh 100vh 0px 0px;
	}
	.folder_body {
		grid-area: body;
		display: flex;
		background: hsl(240, 100%, 7%);
		background: linear-gradient(
			90deg,
			hsla(240, 100%, 7%, 0.82) 0%,
			hsl(240, 100%, 7%) 100%
		);
		width: 100%;
		height: 100%;
		--br: 0.25em;
		border-radius: var(--br) 0 var(--br) var(--br);
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 10% 10%;
		font-size: 0.825rem;
		color: #fff;
		font-weight: 700;
	}
`;

export const BoardList = styled.div`
	border-radius: 8px;
	background-color: #f8f8f8;
	height: 400px;
	padding: 0.8rem 1.5rem;
	display: flex;
	flex-direction: column;
	overflow: scroll;

	& h1 {
		font-size: 1.125rem;
		color: #333;
	}

	& p {
		font-size: 0.825rem;
		line-height: 1.4;
		margin-bottom: 0.5rem;
		color: #444;
	}
`;

export const InboxItem = styled.div`
	margin-bottom: 0.5rem;
	font-size: 0.925rem;
	color: #555;
	border-radius: 0.25rem;
	padding: 0.25rem 1rem;
	background-color: #fff;
	border: 1px solid #efefef;
	box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.15),
		2px 0 3px -2px rgba(0, 0, 0, 0.15);
	display: flex;
	column-gap: 0.8rem;
	cursor: pointer;

	& svg {
		font-size: 1.5rem;
	}
`;

export const Section = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	column-gap: 1rem;
`;

export const FolderList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
`;
