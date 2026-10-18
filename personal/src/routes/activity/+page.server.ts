import type { ContributionDay } from '$lib/contributions';
import type { PageServerLoad } from './$types';

const SOURCE = 'https://github-contributions-api.jogruber.de/v4/erdospeet11?y=last';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const response = await fetch(SOURCE);
		if (!response.ok) throw new Error(String(response.status));

		const body = await response.json();
		const contributions: ContributionDay[] = Array.isArray(body.contributions)
			? body.contributions.flatMap((day: Partial<ContributionDay>) => {
					if (typeof day?.date !== 'string' || typeof day.count !== 'number') return [];
					const level = typeof day.level === 'number' ? Math.min(4, Math.max(0, day.level)) : 0;
					return [{ date: day.date, count: day.count, level }];
				})
			: [];
		const total = Number(body.total?.lastYear ?? 0);

		return { contributions, total, unavailable: false };
	} catch {
		return { contributions: [] as ContributionDay[], total: 0, unavailable: true };
	}
};
