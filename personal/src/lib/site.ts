export type Tone = 'purple' | 'orange';

export interface Tag {
	label: string;
	tone: Tone;
}

export interface NavItem {
	label: string;
	href: string;
	external?: boolean;
}

export const nav: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Email Contact', href: 'mailto:erdospepep9@gmail.com' },
	{ label: 'Journal', href: '/journal' },
	{ label: 'Activity', href: '/activity' },
	{ label: 'Download CV', href: '/cv.pdf', external: true }
];
