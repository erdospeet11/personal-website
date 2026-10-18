export interface ContributionDay {
	date: string;
	count: number;
	level: number;
}

export interface CalendarCell {
	date: string;
	count: number;
	level: number;
	inRange: boolean;
}

export interface CalendarMonth {
	key: string;
	label: string;
	cells: CalendarCell[];
}

const monthLabel = new Intl.DateTimeFormat('en-GB', {
	month: 'short',
	year: 'numeric',
	timeZone: 'UTC'
});

const dayLabel = new Intl.DateTimeFormat('en-GB', {
	day: 'numeric',
	month: 'short',
	year: 'numeric',
	timeZone: 'UTC'
});

export function calendarMonths(days: ContributionDay[]): CalendarMonth[] {
	if (days.length === 0) return [];

	const byDate = new Map(days.map((day) => [day.date, day]));
	const dates = days.map((day) => day.date).sort();
	const [startYear, startMonth] = dates[0].split('-').map(Number);
	const [endYear, endMonth] = dates[dates.length - 1].split('-').map(Number);

	const months: CalendarMonth[] = [];
	let year = startYear;
	let month = startMonth;

	while (year * 12 + month <= endYear * 12 + endMonth) {
		const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
		const lead = (firstWeekday + 6) % 7;
		const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
		const cells: CalendarCell[] = [];

		for (let index = 0; index < lead; index += 1) {
			cells.push({ date: '', count: 0, level: 0, inRange: false });
		}

		for (let day = 1; day <= daysInMonth; day += 1) {
			const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
			const hit = byDate.get(date);
			cells.push(
				hit
					? { date, count: hit.count, level: hit.level, inRange: true }
					: { date, count: 0, level: 0, inRange: false }
			);
		}

		while (cells.length < 42) {
			cells.push({ date: '', count: 0, level: 0, inRange: false });
		}

		months.push({
			key: `${year}-${month}`,
			label: monthLabel.format(new Date(Date.UTC(year, month - 1, 1))),
			cells
		});

		month += 1;
		if (month > 12) {
			month = 1;
			year += 1;
		}
	}

	return months;
}

export function formatContributionDate(date: string) {
	const [year, month, day] = date.split('-').map(Number);
	return dayLabel.format(new Date(Date.UTC(year, month - 1, day)));
}

export function contributionCountLabel(count: number) {
	return count === 1 ? '1 contribution' : `${count} contributions`;
}
