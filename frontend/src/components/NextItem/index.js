import React from "react";
import { Card } from "./styles";
import { IoEllipsisVertical } from "react-icons/io5";

function NextItem({ item }) {
	return (
		<Card>
			<div className="top">
				<p className="item_name">{item.item_name}</p>
				<div className="status pending">
					<div className="dot"></div>
					<p>{item.status}</p>
				</div>
				<div className="action">
					<IoEllipsisVertical className="icon" />
				</div>
			</div>
			<p className="item_description">{item.description}</p>
			<div className="bottom">
				<div className="chip context">{item.context}</div>
				<div className="chip priority">{item.priority}</div>
				<div className="chip deadline">{item.due_date}</div>
			</div>
		</Card>
	);
}

export default NextItem;

// <div className="card next_action">
//   <div className="top">
//     <p className="item_name">Call Beth</p>
//     <div className="status pending">
//       <div className="dot"></div>
//       <p>Pending</p>
//     </div>
//     <div className="action">
//       <IoEllipsisVertical className="icon" />
//     </div>
//   </div>
//   <p className="item_description">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
//     accusamus.
//   </p>
//   <div className="bottom">
//     <div className="context chip">@Home</div>
//     <div className="chip priority">High</div>
//     <div className="chip deadline">In 3 weeks</div>
//   </div>
// </div>

// <div className="card next_action">
//   <div className="top">
//     <p className="item_name">Call Beth</p>
//     <div className="status completed">
//       <div className="dot"></div>
//       <p>Completed</p>
//     </div>
//     <div className="action">
//       <IoEllipsisVertical className="icon" />
//     </div>
//   </div>
//   <p className="item_description">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
//     accusamus.
//   </p>
//   <div className="bottom">
//     <div className="context chip">@Home</div>
//     <div className="chip priority">High</div>
//     <div className="chip deadline">In 1 hour</div>
//   </div>
// </div>

// <div className="card next_action">
//   <div className="top">
//     <p className="item_name">Call Beth</p>
//     <div className="status inprogress">
//       <div className="dot"></div>
//       <p>In progress</p>
//     </div>
//     <div className="action">
//       <IoEllipsisVertical className="icon" />
//     </div>
//   </div>
//   <p className="item_description">
//     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
//     accusamus.
//   </p>
//   <div className="bottom">
//     <div className="context chip">@Home</div>
//     <div className="chip priority">High</div>
//     <div className="chip deadline">In 1 hour</div>
//   </div>
// </div>
