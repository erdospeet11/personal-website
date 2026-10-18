<script lang="ts">
	import ActivityFeed from '$lib/components/ActivityFeed.svelte';
	import SiteShell from '$lib/components/SiteShell.svelte';
	import portrait from '$lib/assets/profilepic.png';
	import type { Tag } from '$lib/site';
	import { theme } from '$lib/theme.svelte';

	interface WorkItem {
		title: string;
		when: string;
		points: string[];
		tags: Tag[];
	}

	const studies = 'Eötvös Loránd University · Computer Science Engineer · 2021 — 2026';
	const achievement = 'SINCE AI Hackathon · 1st place, Sandvik Challenge · 2024';

	const work: WorkItem[] = [
		{
			title: 'Digital Solutions Intern · Ernst & Young Advisory Ltd.',
			when: 'Dec 2024 – May 2025',
			points: [
				'Developed a RAG-based enterprise LLM chatbot on .NET, Azure, and React. After the project ended, several other service lines adopted it for their own business needs.',
				'Built internal automation tools with ExcelScript and Microsoft Power Platform that streamlined business processes across organizational units.',
				'Used AI-assisted development tools (GitHub Copilot) daily to speed up the development workflow.'
			],
			tags: [
				{ label: '.NET', tone: 'purple' },
				{ label: 'React', tone: 'purple' },
				{ label: 'Azure', tone: 'purple' },
				{ label: 'Python', tone: 'purple' },
				{ label: 'ExcelScript', tone: 'purple' },
				{ label: 'Power Platform', tone: 'purple' },
				{ label: 'GitHub Copilot', tone: 'purple' },
				{ label: 'RAG', tone: 'orange' },
				{ label: 'LLM', tone: 'orange' }
			]
		},
		{
			title: 'Systems Engineer Intern · MVMI Zrt.',
			when: 'Nov 2025 – May 2026',
			points: [
				'Gained insight into running a large-enterprise IT infrastructure, including the day-to-day practice of Azure-based systems and Terraform (Infrastructure as Code) automation.',
				'Joined operations and development meetings on Microsoft Entra ID access management and virtual machine configuration.'
			],
			tags: [
				{ label: 'Azure', tone: 'purple' },
				{ label: 'Terraform', tone: 'purple' },
				{ label: 'Git', tone: 'purple' },
				{ label: 'Jenkins', tone: 'purple' },
				{ label: 'Prometheus', tone: 'purple' },
				{ label: 'Microsoft Entra ID', tone: 'orange' }
			]
		}
	];

	const skillGroups: { title: string; icons: { name: string; light: string; dark: string }[] }[] = [
		{
			title: 'Development',
			icons: [
				{ name: 'C#', light: 'csharp', dark: 'csharp' },
				{ name: 'Python', light: 'python', dark: 'python' },
				{ name: 'TypeScript', light: 'typescript', dark: 'typescript' },
				{ name: 'Go', light: 'golang', dark: 'golang' },
				{ name: 'Svelte', light: 'svelte', dark: 'svelte' },
				{ name: 'React', light: 'reactjs', dark: 'reactjs' },
				{ name: '.NET', light: 'dotnet', dark: 'dotnet' },
				{ name: 'Node.js', light: 'nodejs', dark: 'nodejs' }
			]
		},
		{
			title: 'Cloud & DevOps',
			icons: [
				{ name: 'Azure', light: 'azure', dark: 'azure' },
				{ name: 'Entra ID', light: 'entra-id', dark: 'entra-id' },
				{ name: 'AWS', light: 'aws', dark: 'aws-light' },
				{ name: 'Terraform', light: 'terraform', dark: 'terraform' },
				{ name: 'Docker', light: 'docker', dark: 'docker' },
				{ name: 'Kubernetes', light: 'kubernetes', dark: 'kubernetes' },
				{ name: 'Jenkins', light: 'jenkins', dark: 'jenkins' },
				{ name: 'Git', light: 'git', dark: 'git' }
			]
		},
		{
			title: 'AI & automation',
			icons: [
				{ name: 'GitHub Copilot', light: 'github-copilot', dark: 'github-copilot-dark' },
				{ name: 'Microsoft Copilot', light: 'microsoft-copilot', dark: 'microsoft-copilot' },
				{ name: 'Claude', light: 'claude-ai', dark: 'claude-ai' },
				{ name: 'Power Automate', light: 'microsoft-power-automate', dark: 'microsoft-power-automate' },
				{ name: 'n8n', light: 'n8n', dark: 'n8n' }
			]
		},
		{
			title: 'Databases',
			icons: [
				{ name: 'PostgreSQL', light: 'postgresql', dark: 'postgresql' },
				{ name: 'Supabase', light: 'supabase', dark: 'supabase' },
				{ name: 'SQLite', light: 'sqlite', dark: 'sqlite' },
				{ name: 'MySQL', light: 'mysql', dark: 'mysql' },
				{ name: 'Microsoft SQL Server', light: 'microsoft-sql-server', dark: 'microsoft-sql-server-light' }
			]
		},
		{
			title: 'Design',
			icons: [
				{ name: 'Blender', light: 'blender', dark: 'blender' },
				{ name: 'Godot', light: 'godot', dark: 'godot' },
				{ name: 'Unity', light: 'unity', dark: 'unity-dark' },
				{ name: 'Figma', light: 'figma', dark: 'figma' },
				{ name: 'draw.io', light: 'draw-io', dark: 'draw-io' }
			]
		}
	];


	function sharedIconSize(count: number, width: number, height: number, gap: number) {
		let size = 0;
		for (let cols = 1; cols <= count; cols++) {
			const rows = Math.ceil(count / cols);
			const byWidth = (width - gap * (cols - 1)) / cols;
			const byHeight = (height - gap * (rows - 1)) / rows;
			size = Math.max(size, Math.floor(Math.min(byWidth, byHeight)));
		}
		return Math.max(1, size);
	}

	let skillsEl = $state<HTMLElement | undefined>();
	let iconSize = $state(48);

	$effect(() => {
		const root = skillsEl;
		if (!root) return;

		const measure = () => {
			const lists = [...root.querySelectorAll<HTMLElement>('.skill-cols ul')].filter(
				(list) => list.childElementCount > 0 && list.clientWidth >= 8 && list.clientHeight >= 8
			);
			if (lists.length === 0) return;
			const count = Math.max(...lists.map((list) => list.childElementCount));
			const fullest = lists.filter((list) => list.childElementCount === count);
			const narrowest = fullest.reduce((a, b) => (a.clientWidth <= b.clientWidth ? a : b));
			const shortest = fullest.reduce((a, b) => (a.clientHeight <= b.clientHeight ? a : b));
			const gap = Number.parseFloat(getComputedStyle(narrowest).columnGap) || 8;
			const next = sharedIconSize(count, narrowest.clientWidth, shortest.clientHeight, gap);
			if (next !== iconSize) iconSize = next;
		};

		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(root);
		return () => observer.disconnect();
	});
</script>

<SiteShell title="Erdős Péter | Software Engineer">
		<div class="layout">
			<div class="left">
				<section class="identity">
					<div class="portrait">
						<img src={portrait} alt="Péter Erdős" />
					</div>
					<div class="identity-copy">
						<h1>Erdős Péter</h1>
						<div class="bar">
							<span class="kicker">STUDIES</span>
							<p>{studies}</p>
						</div>
						<div class="bar">
							<span class="kicker">ACHIEVEMENTS</span>
							<p>{achievement}</p>
						</div>
					</div>
				</section>

				<section class="panel work" aria-label="Work experiences">
					<h2 class="kicker">WORK</h2>
					<ul>
						{#each work as job}
							<li>
								<div class="job-top">
									<span class="job-title">{job.title}</span>
									<span class="when">{job.when}</span>
								</div>
								<ul class="points">
									{#each job.points as point}
										<li>{point}</li>
									{/each}
								</ul>
								<div class="tags">
									{#each job.tags as tag}
										<span class="tag" class:orange={tag.tone === 'orange'}>{tag.label}</span>
									{/each}
								</div>
							</li>
						{/each}
					</ul>
				</section>

				<section class="panel skills" aria-label="Skills" bind:this={skillsEl}>
					<h2 class="kicker">SKILLS</h2>
					<div class="skill-cols" style:--icon-size="{iconSize}px">
						{#each skillGroups as group}
							<div>
								<h3>{group.title}</h3>
								<ul>
									{#each group.icons as icon}
										<li>
											<img
												src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/{theme.value === 'dark' ? icon.dark : icon.light}.svg"
												alt={icon.name}
												title={icon.name}
											/>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</section>
			</div>

			<ActivityFeed />
		</div>
</SiteShell>

<style>
	.layout {
		display: grid;
		flex: 1;
		grid-template-columns: minmax(0, 1.75fr) minmax(280px, 0.9fr);
		gap: 14px;
		min-height: 0;
	}

	.left {
		display: flex;
		min-width: 0;
		min-height: 0;
		flex-direction: column;
		gap: 14px;
		overflow: hidden;
	}

	.identity {
		display: grid;
		grid-template-columns: 148px minmax(0, 1fr);
		align-items: center;
		gap: 18px;
	}

	.portrait {
		width: 148px;
		height: 148px;
		overflow: hidden;
		border: 3px solid var(--line);
		background: var(--portrait);
	}

	.portrait img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h1 {
		margin: 0 0 8px;
		color: var(--ink-strong);
		font-size: 22px;
		font-weight: 700;
		letter-spacing: 0.01em;
	}

	.bar {
		padding: 0;
	}

	.bar + .bar {
		margin-top: 10px;
		padding-bottom: 12px;
		border-bottom: 3px solid var(--line);
	}

	.bar p {
		margin: 0;
	}

	.kicker {
		display: block;
		margin: 0 0 4px;
		color: var(--orange);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.panel {
		padding: 4px 0 0;
	}

	.skills {
		display: flex;
		flex: 1;
		flex-direction: column;
		min-height: 0;
		padding-top: 14px;
		border-top: 3px solid var(--line);
	}

	.work ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.work > ul > li {
		padding: 8px 0 12px;
		border-bottom: 3px solid var(--rule);
	}

	.work > ul > li:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.points {
		margin: 6px 0 0;
		padding: 0;
		list-style: none;
	}

	.points li {
		position: relative;
		padding: 2px 0 2px 12px;
		color: var(--muted);
		font-size: 12.5px;
		font-weight: 400;
	}

	.points li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--ink);
	}

	.work .tags {
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 8px 0 0;
	}

	.job-top {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 0;
	}

	.job-title {
		min-width: 0;
		overflow: hidden;
		color: var(--title);
		font-weight: 600;
		text-overflow: ellipsis;
		white-space: normal;
		text-decoration: none;
	}

	.when {
		margin-left: 12px;
		color: var(--purple);
		font-weight: 500;
		white-space: nowrap;
	}

	.tags {
		display: flex;
		flex: none;
		gap: 6px;
		margin-left: auto;
	}

	.tag {
		border-radius: 999px;
		background: #6d37c1;
		color: #fff;
		padding: 2px 9px 1px;
		font-size: 10.5px;
		font-weight: 700;
		letter-spacing: 0.03em;
		line-height: 1.5;
	}

	.tag.orange {
		background: #ff6300;
	}

	.skill-cols {
		display: grid;
		flex: 1;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 10px 0;
		min-height: 0;
		margin-top: 8px;
	}

	.skill-cols > div {
		display: flex;
		min-width: 0;
		min-height: 0;
		flex-direction: column;
		padding-right: 14px;
	}

	.skill-cols > div:not(:first-child) {
		border-left: 3px dashed #8ea0a3;
		padding-left: 14px;
	}

	.skill-cols > div:last-child {
		padding-right: 0;
	}

	.skill-cols h3 {
		margin: 0 0 6px;
		color: var(--ink);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.skill-cols ul {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 8px;
		min-height: 0;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.skill-cols li {
		width: var(--icon-size);
		height: var(--icon-size);
		flex: none;
	}

	.skill-cols img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (max-width: 980px) {
		.layout {
			grid-template-columns: 1fr;
		}

		.identity {
			grid-template-columns: 96px minmax(0, 1fr);
		}

		.portrait {
			width: 96px;
			height: 96px;
		}

		.skill-cols {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.skill-cols > div,
		.skill-cols > div:last-child {
			border-left: 0;
			padding-left: 0;
			padding-right: 14px;
		}

		.skill-cols > div:nth-child(even) {
			border-left: 3px dashed #8ea0a3;
			padding-left: 14px;
			padding-right: 0;
		}
	}
</style>
