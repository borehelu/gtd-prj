import React from "react";
import { InboxWrapper } from "./styles";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

function Inbox({ description, created_at }) {
	return (
		<InboxWrapper>
			<div>
				<p>{description}</p>
				<p>
					<small>{created_at}</small>
				</p>
			</div>
			<button>
				<IoEllipsisVerticalOutline />
			</button>
		</InboxWrapper>
	);
}

export default Inbox;
