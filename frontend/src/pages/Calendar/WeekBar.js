import { Week, Day } from "./styles";
import {
	getCurrentWeekDates,
	checkEventsForWeek,
	getClass,
	getCurrentDay,
} from "./helper";
import { useState, useEffect } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

function WeekBar({ active, setActive, today, state }) {
	const [currentWeekDates, setCurrentWeekDates] = useState(
		getCurrentWeekDates()
	);

	return (
		<Week>
			{days.map((day, i) => (
				<Day
					className={getClass(
						currentWeekDates[i].day,
						getCurrentDay(active),
						getCurrentDay(today),
						state
					)}
					key={day}
					onClick={() => setActive(currentWeekDates[i].date)}
				>
					<h2>{currentWeekDates[i].day}</h2>
					<p>{day}</p>
				</Day>
			))}
		</Week>
	);
}

export default WeekBar;
