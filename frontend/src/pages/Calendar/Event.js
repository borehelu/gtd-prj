import { EventContainer, Bar, Detail, Location, Time } from "./styles";
import { IoStopwatchOutline, IoLocationOutline } from "react-icons/io5";
import Options from "../../components/Options";
import { formatTimeRange } from "./helper";

export default function Event({ event, setSelected, onDelete, setIsEditing }) {
	return (
		<EventContainer>
			<Bar />
			<Detail>
				<h4>{event.event_name}</h4>

				<Location>
					<IoLocationOutline />
					{event.event_location}
				</Location>

				<Time>
					<IoStopwatchOutline />
					{formatTimeRange(event.event_start, event.event_end)}
				</Time>
			</Detail>
			<Options
				item={event}
				setActive={setSelected}
				onDelete={onDelete}
				setIsEditing={setIsEditing}
			/>
		</EventContainer>
	);
}
