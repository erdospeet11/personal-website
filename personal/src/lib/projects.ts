import type { ActivityIcon, ActivityItem } from '$lib/activity';

export interface Project {
	title: string;
	url: string;
	description: string;
	tech: string[];
}

export const projects: Project[] = [
	{
		title: 'FANTASY KOZMOZ LEAGUE',
		url: 'https://github.com/erdospeet11/fkg',
		description:
			'A fantasy league application built for my Kozmoz Universe, featuring automated player drafts, live statistics tracking, and dynamic team management.',
		tech: ['Angular', 'PostgreSQL', 'TailwindCSS', '.NET']
	},
	{
		title: 'BEAUTIFUL SOLAR FLARE',
		url: 'https://github.com/erdospeet11/beautiful-data-space',
		description:
			'An interactive analysis and data visualization dashboard for tracking historic solar flares and celestial events using advanced plotting libraries.',
		tech: ['SvelteKit', 'scikit-learn', 'Python', 'Pandas']
	},
	{
		title: 'AUTOBATTLER',
		url: 'https://github.com/erdospeet11/autobattler-simulator',
		description:
			'A simulation engine and visualizer for observing automated combat scenarios, unit pathfinding behaviors, and strategic team match-ups.',
		tech: ['Godot', 'GDScript', 'Blender']
	},
	{
		title: 'NODEFLOW',
		url: 'https://github.com/erdospeet11/NodeFlow',
		description:
			'A visual workflow editor and script constructor using custom nodes, enabling interactive flow editing and logic mapping.',
		tech: ['Svelte', 'Python', 'Terraform', 'Kubernetes', 'Azure']
	},
	{
		title: 'WEBPGU RENDERING',
		url: '/webgpu',
		description:
			'An experimental 3D renderer written in WebGPU, showcasing high-performance GPU shaders, render pipelines, and hardware-accelerated computing.',
		tech: ['WebGPU', 'WGSL', 'TypeScript', 'Vite']
	}
];

const feedTitle: Record<string, string> = {
	'FANTASY KOZMOZ LEAGUE': 'Fantasy Kozmoz League',
	'BEAUTIFUL SOLAR FLARE': 'Beautiful Solar Flare',
	AUTOBATTLER: 'Autobattler',
	NODEFLOW: 'NodeFlow',
	'WEBPGU RENDERING': 'WebGPU Rendering'
};

const feedIcon: ActivityIcon[] = ['list', 'list', 'loop', 'loop', 'clock'];

export const projectFeed: ActivityItem[] = projects.map((project, index) => ({
	count: String(index + 1).padStart(2, '0'),
	icon: feedIcon[index] ?? 'list',
	title: feedTitle[project.title] ?? project.title,
	href: project.url,
	external: project.url.startsWith('http'),
	tags: project.tech.map((label) => ({ label: label.toUpperCase(), tone: 'purple' as const })),
	preview: project.description
}));
