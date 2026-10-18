import type { Tag } from '$lib/site';

export type ActivityIcon = 'list' | 'loop' | 'mail' | 'clock';

export interface ActivityItem {
	count: string;
	icon: ActivityIcon;
	title: string;
	href?: string;
	external?: boolean;
	tags: Tag[];
	meta?: string;
	date?: string;
	marked?: boolean;
	preview: string;
}

export const activity: ActivityItem[] = [
	{
		count: '01',
		icon: 'mail',
		title: 'SINCE AI Hackathon — Sandvik Challenge',
		href: 'https://github.com/erdospeet11/SINCE-AI-SANDVIK-CHALLENGE',
		external: true,
		tags: [
			{ label: 'AI', tone: 'purple' },
			{ label: '1ST', tone: 'orange' }
		],
		meta: 'Teams bot · RAG spare-parts matching',
		date: '2024',
		marked: true,
		preview:
			'Classifies channel inquiries with a hybrid pipeline and sends proactive matches back into the thread.'
	},
	{
		count: '02',
		icon: 'loop',
		title: 'NodeFlow',
		href: 'https://github.com/erdospeet11/NodeFlow',
		external: true,
		tags: [
			{ label: 'SVELTE', tone: 'purple' },
			{ label: 'K8S', tone: 'purple' }
		],
		meta: 'Visual workflow editor',
		preview: 'Custom nodes for interactive flow editing, logic mapping, and script construction.'
	},
	{
		count: '03',
		icon: 'list',
		title: 'Fantasy Kozmoz League',
		href: 'https://github.com/erdospeet11/fkg',
		external: true,
		tags: [
			{ label: '.NET', tone: 'purple' },
			{ label: 'SQL', tone: 'purple' }
		],
		meta: 'Kozmoz Universe',
		preview: 'Automated player drafts, live statistics, and dynamic team management.'
	},
	{
		count: '04',
		icon: 'list',
		title: 'Beautiful Solar Flare',
		href: 'https://github.com/erdospeet11/beautiful-data-space',
		external: true,
		tags: [
			{ label: 'PYTHON', tone: 'purple' },
			{ label: 'DATA', tone: 'orange' }
		],
		meta: 'Celestial events',
		preview: 'Historic solar-flare analysis and an interactive visualization dashboard.'
	},
	{
		count: '05',
		icon: 'loop',
		title: 'Autobattler',
		href: 'https://github.com/erdospeet11/autobattler-simulator',
		external: true,
		tags: [
			{ label: 'GODOT', tone: 'purple' },
			{ label: 'SIM', tone: 'orange' }
		],
		meta: 'Combat simulator',
		preview: 'Automated combat, unit pathfinding, and strategic team match-ups.'
	},
	{
		count: '06',
		icon: 'clock',
		title: 'WebGPU Rendering',
		href: '/webgpu',
		tags: [
			{ label: 'WEBGPU', tone: 'purple' },
			{ label: 'WGSL', tone: 'purple' }
		],
		meta: 'Experimental renderer',
		preview: 'GPU shaders, render pipelines, and hardware-accelerated drawing in the browser.'
	},
	{
		count: '07',
		icon: 'mail',
		title: 'Eötvös Loránd University',
		tags: [{ label: 'CS', tone: 'purple' }],
		meta: 'Computer Science Engineer',
		date: '2021 — 2026',
		preview: 'Undergraduate studies in software engineering, systems, and applied computing.'
	}
];
