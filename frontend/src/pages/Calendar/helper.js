import {
	format,
	addDays,
	startOfWeek,
	parse,
	getMonth,
	isSameDay,
	isSameMonth,
} from "date-fns";

const today = new Date();

export const getCurrentWeekDates = () => {
	const startDate = startOfWeek(today);
	const weekDates = Array.from({ length: 7 }, (_, i) =>
		addDays(startDate, i)
	);
	return weekDates.map((weekDate) => {
		return { date: weekDate, day: format(weekDate, "dd") };
	});
};

export const getCurrentDay = (date) => {
	return format(date, "dd");
};

export const checkEventsForWeek = (events) => {
	const weekEvents = events.filter((event) => {
		if (isSameMonth(new Date(event.event_date), today)) {
			if (
				getCurrentWeekDates().some(
					(obj) =>
						obj.day === format(new Date(event.event_date), "dd")
				)
			) {
				return true;
			}
			return false;
		}
		return false;
	});

	const eventDate = weekEvents.map((event) => {
		return format(new Date(event.event_date), "dd");
	});

	return eventDate;
};

export const getEventsForDay = (events, day) => {
	const daysEvents = events.filter((event) => {
		if (isSameDay(new Date(event.event_date), day)) return true;
		return false;
	});

	return daysEvents;
};

export function getClass(day, active, today, state) {
	let results = "";
	if (day === today && day === active) {
		results += "active";
	} else if (day === today && day !== active) {
		results += "today";
	} else if (day === active) {
		results += "active";
	} else {
		results = "";
	}

	if (checkEventsForWeek(state.data).includes(day)) {
		results += " event";
	}

	return results;
}

export function formatTime(timeStr) {
	const parsedTime = parse(timeStr, "HH:mm:ss", new Date());
	return format(parsedTime, "HH:mm");
}

export function formatDate(dateStr) {
	return format(new Date(dateStr), "yyyy-MM-dd");
}

export function formatTimeRange(start, end) {
	const startTime = format(new Date(`2000-01-01T${start}`), "h:mma");
	const endTime = format(new Date(`2000-01-01T${end}`), "h:mma");
	return `${startTime} - ${endTime}`;
}
