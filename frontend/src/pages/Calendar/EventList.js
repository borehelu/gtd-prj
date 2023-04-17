import LoadingSpinner from "../../components/LoadingSpinner";
import Empty from "../../components/Empty";
import { EventsWrapper } from "./styles";
import Event from "./Event";
import { getEventsForDay } from "./helper";

function EventList({ state, active, onDelete, setSelected, setIsEditing }) {
	return (
		<EventsWrapper>
			<h3>Your schedule today</h3>

			{state.loading ? <LoadingSpinner /> : null}

			{getEventsForDay(state.data, active).length > 0 ? (
				getEventsForDay(state.data, active).map((event) => (
					<Event
						key={event.id}
						event={event}
						onDelete={onDelete}
						setSelected={setSelected}
						setIsEditing={setIsEditing}
					/>
				))
			) : (
				<Empty />
			)}
		</EventsWrapper>
	);
}

export default EventList;
