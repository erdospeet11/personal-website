<script lang="ts">
	import { onMount } from 'svelte';
	import portrait from '$lib/assets/profilepic.png';

	type Tone = 'purple' | 'orange';
	type IconName = 'list' | 'loop' | 'mail' | 'clock';

	interface Tag {
		label: string;
		tone: Tone;
	}

	interface WorkItem {
		title: string;
		detail: string;
		when?: string;
		href?: string;
		external?: boolean;
		tags: Tag[];
	}

	interface ActivityItem {
		count: string;
		icon: IconName;
		title: string;
		href?: string;
		external?: boolean;
		tags: Tag[];
		meta: string;
		date?: string;
		marked?: boolean;
		preview: string;
	}

	const nav = [
		{ label: 'Activity', href: '/', active: true },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Email Contact', href: 'mailto:erdospepep9@gmail.com' },
		{ label: 'Journal' },
		{ label: 'Download CV', href: '/cv.pdf', external: true }
	];

	const studies = 'Eötvös Loránd University · Computer Science Engineer · 2021 — 2026';
	const achievement = 'SINCE AI Hackathon · 1st place, Sandvik Challenge · 2024';

	const work: WorkItem[] = [
		{
			title: 'SINCE AI Hackathon — Sandvik Challenge',
			detail:
				'First place. A Teams bot that classifies spare-parts inquiries and matches them with a RAG pipeline.',
			when: '2024',
			href: 'https://github.com/erdospeet11/SINCE-AI-SANDVIK-CHALLENGE',
			external: true,
			tags: [
				{ label: 'AI', tone: 'purple' },
				{ label: '1ST', tone: 'orange' }
			]
		},
		{
			title: 'NodeFlow',
			detail: 'Visual workflow editor and script constructor built from custom nodes.',
			href: 'https://github.com/erdospeet11/NodeFlow',
			external: true,
			tags: [
				{ label: 'SVELTE', tone: 'purple' },
				{ label: 'AZURE', tone: 'purple' }
			]
		},
		{
			title: 'Fantasy Kozmoz League',
			detail: 'Fantasy league app with automated drafts, live statistics, and team management.',
			href: 'https://github.com/erdospeet11/fkg',
			external: true,
			tags: [
				{ label: '.NET', tone: 'purple' },
				{ label: 'SQL', tone: 'purple' }
			]
		},
		{
			title: 'Beautiful Solar Flare',
			detail: 'Interactive dashboard for historic solar flares and celestial events.',
			href: 'https://github.com/erdospeet11/beautiful-data-space',
			external: true,
			tags: [
				{ label: 'PYTHON', tone: 'purple' },
				{ label: 'SVELTE', tone: 'purple' }
			]
		}
	];

	const skills = [
		{ id: 'figma', label: 'Figma' },
		{ id: 'azure', label: 'Azure' },
		{ id: 'blender', label: 'Blender' },
		{ id: 'cs', label: 'C#' },
		{ id: 'css', label: 'CSS' },
		{ id: 'dotnet', label: '.NET' },
		{ id: 'flask', label: 'Flask' },
		{ id: 'githubactions', label: 'GitHub Actions' },
		{ id: 'go', label: 'Go' },
		{ id: 'godot', label: 'Godot' },
		{ id: 'graphql', label: 'GraphQL' },
		{ id: 'html', label: 'HTML' },
		{ id: 'js', label: 'JavaScript' },
		{ id: 'lua', label: 'Lua' },
		{ id: 'mint', label: 'Mint' },
		{ id: 'neovim', label: 'Neovim' },
		{ id: 'nodejs', label: 'Node.js' },
		{ id: 'postgres', label: 'PostgreSQL' },
		{ id: 'postman', label: 'Postman' },
		{ id: 'py', label: 'Python' },
		{ id: 'react', label: 'React' },
		{ id: 'sqlite', label: 'SQLite' },
		{ id: 'supabase', label: 'Supabase' },
		{ id: 'svelte', label: 'Svelte' },
		{ id: 'threejs', label: 'Three.js' },
		{ id: 'terraform', label: 'Terraform' },
		{ id: 'ts', label: 'TypeScript' },
		{ id: 'unity', label: 'Unity' },
		{ id: 'vscode', label: 'VS Code' },
		{ id: 'webpack', label: 'Webpack' }
	];

	const activity: ActivityItem[] = [
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

	let now = $state(new Date());
	let theme = $state<'light' | 'dark'>('light');

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
	}

	const dateLabel = $derived(
		new Intl.DateTimeFormat('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
			timeZone: 'Europe/Budapest'
		}).format(now)
	);

	const clockLabel = $derived(
		new Intl.DateTimeFormat('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hourCycle: 'h23',
			timeZone: 'Europe/Budapest'
		}).format(now)
	);

	onMount(() => {
		const id = setInterval(() => {
			now = new Date();
		}, 1000);
		return () => clearInterval(id);
	});
</script>

<svelte:head>
	<title>Péter Erdős | Portfolio</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="shell" data-theme={theme}>
	<div class="frame">
		<header class="top">
			<nav class="nav" aria-label="Primary">
				{#each nav as item}
					{#if item.href}
						<a
							class="nav-btn"
							class:active={item.active}
							href={item.href}
							target={item.external ? '_blank' : undefined}
							rel={item.external ? 'noopener noreferrer' : undefined}
						>
							{item.label}
						</a>
					{:else}
						<span class="nav-btn">{item.label}</span>
					{/if}
				{/each}
			</nav>

			<div class="corner">
				<button
					class="theme-btn"
					type="button"
					onclick={toggleTheme}
					aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
				>
					{#if theme === 'light'}
						<svg viewBox="0 0 16 16" aria-hidden="true">
							<path
								d="M10.2 2.4a5.5 5.5 0 1 0 3.5 9.6 4.4 4.4 0 0 1-3.5-9.6Z"
								fill="none"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linejoin="round"
							/>
						</svg>
					{:else}
						<svg viewBox="0 0 16 16" aria-hidden="true">
							<circle cx="8" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.4" />
							<path
								d="M8 1.7v1.7M8 12.6v1.7M1.7 8h1.7M12.6 8h1.7M3.5 3.5l1.2 1.2M11.3 11.3l1.2 1.2M12.5 3.5l-1.2 1.2M4.7 11.3l-1.2 1.2"
								fill="none"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
							/>
						</svg>
					{/if}
				</button>
				<div class="clock-box">
					<svg class="clock-icon" viewBox="0 0 16 16" aria-hidden="true">
						<circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" stroke-width="1.4" />
						<path
							d="M8 5.2V8.2L10.1 9.4"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
						/>
					</svg>
					<span>Budapest</span>
					<span class="pipe">|</span>
					<span>{dateLabel}</span>
					<span class="pipe">|</span>
					<time class="clock" datetime={now.toISOString()}>{clockLabel}</time>
				</div>
			</div>
		</header>

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
									{#if job.href}
										<a
											class="job-title"
											href={job.href}
											target={job.external ? '_blank' : undefined}
											rel={job.external ? 'noopener noreferrer' : undefined}
										>
											{job.title}
										</a>
									{:else}
										<span class="job-title">{job.title}</span>
									{/if}
									<span class="tags">
										{#each job.tags as tag}
											<span class="tag" class:orange={tag.tone === 'orange'}>{tag.label}</span>
										{/each}
									</span>
								</div>
								<p class="detail">
									{job.detail}
									{#if job.when}<span class="when">{job.when}</span>{/if}
								</p>
							</li>
						{/each}
					</ul>
				</section>

				<section class="panel skills" aria-label="Skill icons">
					<h2 class="kicker">SKILLS</h2>
					<ul class="skill-grid">
						{#each skills as skill}
							<li>
								<img
									src="https://skillicons.dev/icons?i={skill.id}"
									alt={skill.label}
									title={skill.label}
									width="48"
									height="48"
								/>
							</li>
						{/each}
					</ul>
				</section>
			</div>

			<aside class="activity" aria-label="Recent activity">
				<h2 class="kicker head">ACTIVITY</h2>
				<div class="feed">
					{#each activity as item}
						<article class="thread">
							<div class="row">
								<div class="gutter"><span class="count">{item.count}</span></div>
								<div class="cell">
									<div class="subject">
										<span class="subj-icon">
											{#if item.icon === 'list'}
												<svg viewBox="0 0 16 16" aria-hidden="true">
													<path
														d="M2.5 4h11M2.5 8h11M2.5 12h11"
														fill="none"
														stroke="currentColor"
														stroke-width="1.4"
														stroke-linecap="round"
													/>
												</svg>
											{:else if item.icon === 'loop'}
												<svg viewBox="0 0 16 16" aria-hidden="true">
													<path
														d="M8 3.1a4.9 4.9 0 1 0 4.2 2.4"
														fill="none"
														stroke="currentColor"
														stroke-width="1.4"
														stroke-linecap="round"
													/>
													<path
														d="M10.6 2.4h2.6V5"
														fill="none"
														stroke="currentColor"
														stroke-width="1.4"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											{:else if item.icon === 'clock'}
												<svg viewBox="0 0 16 16" aria-hidden="true">
													<circle
														cx="8"
														cy="8"
														r="5.2"
														fill="none"
														stroke="currentColor"
														stroke-width="1.4"
													/>
													<path
														d="M8 5.2V8.2L10.1 9.4"
														fill="none"
														stroke="currentColor"
														stroke-width="1.4"
														stroke-linecap="round"
													/>
												</svg>
											{:else}
												<svg viewBox="0 0 16 16" aria-hidden="true">
													<rect
														x="2.2"
														y="3.4"
														width="11.6"
														height="9.2"
														rx="1.2"
														fill="none"
														stroke="currentColor"
														stroke-width="1.35"
													/>
													<path
														d="M2.6 4.4 8 8.3l5.4-3.9"
														fill="none"
														stroke="currentColor"
														stroke-width="1.35"
														stroke-linejoin="round"
													/>
												</svg>
											{/if}
										</span>
										{#if item.href}
											<a
												class="title"
												href={item.href}
												target={item.external ? '_blank' : undefined}
												rel={item.external ? 'noopener noreferrer' : undefined}
											>
												{item.title}
											</a>
										{:else}
											<span class="title">{item.title}</span>
										{/if}
										<span class="tags">
											{#each item.tags as tag}
												<span class="tag" class:orange={tag.tone === 'orange'}>{tag.label}</span>
											{/each}
										</span>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="gutter">
									<svg class="tick" viewBox="0 0 16 16" aria-hidden="true">
										<path
											d="M3.2 8.4 6.4 11.5 12.8 4.4"
											fill="none"
											stroke="currentColor"
											stroke-width="1.7"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<div class="cell">
									<div class="meta">
										<span class="who" class:marked={item.marked}>{item.meta}</span>
										<span class="spacer"></span>
										{#if item.date}<span class="date">{item.date}</span>{/if}
										{#if item.marked}<span class="dot"></span>{/if}
									</div>
								</div>
							</div>
							<div class="row is-preview">
								<div class="gutter"></div>
								<div class="cell">
									<p class="preview">{item.preview}</p>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</aside>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #fff;
		color: #102e34;
		font-family: 'Roboto Mono', ui-monospace, monospace;
	}

	:global(body:has([data-theme='dark'])) {
		background: #070908;
		color: #e4eeef;
	}

	.shell {
		--bg: #fff;
		--ink: #102e34;
		--ink-strong: #071f26;
		--title: #102e34;
		--muted: #4c6264;
		--faint: #8ea0a3;
		--line: #243e3c;
		--rule: #243e3c;
		--gutter: #e7eef1;
		--count-bg: #083744;
		--count-fg: #fff;
		--purple: #6a45b0;
		--mark: #f3eef9;
		--orange: #ff6300;
		--preview-bar: #c5d0d2;
		--tick: #3f595c;
		--icon: #16383e;
		--scroll: #8ea0a3;
		--portrait: #e7eef1;
		--hover: #071f26;
		box-sizing: border-box;
		height: 100vh;
		height: 100dvh;
		overflow: hidden;
		padding: 14px;
		background: var(--bg);
		color: var(--ink);
		color-scheme: light;
		font-family: 'Roboto Mono', ui-monospace, monospace;
		font-size: 13px;
		font-weight: 500;
		line-height: 1.4;
	}

	.shell[data-theme='dark'] {
		--bg: #070908;
		--ink: #e4eeef;
		--ink-strong: #fff;
		--title: #e7eef0;
		--muted: #8ea0a3;
		--faint: #8ea0a3;
		--line: #c9d6d8;
		--rule: #243e3c;
		--gutter: #141a1c;
		--count-bg: #d7e4e6;
		--count-fg: #083744;
		--purple: #c4b0f0;
		--mark: #2a2140;
		--orange: #ff6300;
		--preview-bar: #3d5558;
		--tick: #8ea0a3;
		--icon: #d5e2e4;
		--scroll: #3d5558;
		--portrait: #101414;
		--hover: #fff;
		color-scheme: dark;
	}

	.shell *,
	.shell *::before,
	.shell *::after {
		box-sizing: border-box;
	}

	.frame {
		display: flex;
		flex-direction: column;
		gap: 14px;
		height: 100%;
		min-height: 0;
		padding: 14px;
		border: 1px solid var(--line);
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.nav-btn {
		border: 1px solid var(--line);
		padding: 6px 12px;
		color: var(--ink);
		background: transparent;
		font: inherit;
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
	}

	a.nav-btn:hover {
		color: var(--hover);
	}

	.nav-btn.active {
		color: var(--ink-strong);
		font-weight: 700;
	}

	.corner {
		display: flex;
		flex: none;
		align-items: stretch;
		gap: 8px;
	}

	.theme-btn {
		display: grid;
		width: 34px;
		place-items: center;
		border: 1px solid var(--line);
		padding: 0;
		color: var(--ink);
		background: transparent;
		cursor: pointer;
	}

	.theme-btn:hover {
		color: var(--hover);
	}

	.theme-btn svg {
		width: 16px;
		height: 16px;
	}

	.clock-box {
		display: flex;
		flex: none;
		align-items: center;
		gap: 8px;
		border: 1px solid var(--line);
		padding: 6px 12px;
		white-space: nowrap;
	}

	.clock-icon {
		width: 15px;
		height: 15px;
		color: var(--ink);
	}

	.pipe {
		color: var(--faint);
		font-weight: 400;
	}

	.clock {
		color: var(--orange);
		font-weight: 700;
	}

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
		overflow: auto;
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
		border: 1px solid var(--line);
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

	.bar,
	.panel {
		border: 1px solid var(--line);
	}

	.bar {
		padding: 8px 12px;
	}

	.bar + .bar {
		margin-top: 8px;
	}

	.bar p,
	.detail,
	.preview {
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
		padding: 12px 14px;
	}

	.work {
		flex: 1;
	}

	.work ul,
	.skill-grid {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.work li {
		padding: 8px 0;
		border-bottom: 1px solid var(--rule);
	}

	.work li:last-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.job-top,
	.subject,
	.meta {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 0;
	}

	.job-title,
	.title {
		min-width: 0;
		overflow: hidden;
		color: var(--title);
		font-weight: 600;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-decoration: none;
	}

	a.job-title:hover,
	a.title:hover {
		color: var(--hover);
	}

	.detail {
		margin-top: 3px;
		color: var(--muted);
		font-size: 12.5px;
		font-weight: 400;
	}

	.when {
		margin-left: 8px;
		color: var(--purple);
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

	.skill-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		margin-top: 10px;
	}

	.skill-grid img {
		display: block;
		width: 48px;
		height: 48px;
	}

	.activity {
		display: flex;
		min-width: 0;
		min-height: 0;
		flex-direction: column;
		border: 1px solid var(--line);
	}

	.head {
		margin: 0;
		padding: 10px 14px;
		border-bottom: 1px solid var(--rule);
	}

	.feed {
		flex: 1;
		min-height: 0;
		overflow-y: scroll;
		scrollbar-color: var(--scroll) transparent;
		scrollbar-width: thin;
	}

	.feed::-webkit-scrollbar {
		width: 10px;
	}

	.feed::-webkit-scrollbar-thumb {
		background: var(--scroll);
	}

	.thread {
		border-bottom: 1px solid var(--rule);
	}

	.row {
		display: grid;
		grid-template-columns: 48px minmax(0, 1fr);
		align-items: stretch;
	}

	.gutter {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 8px;
		background: var(--gutter);
	}

	.cell {
		display: flex;
		align-items: center;
		min-width: 0;
		padding: 2px 12px 2px 8px;
	}

	.row:first-child .gutter,
	.row:first-child .cell {
		padding-top: 7px;
	}

	.row:last-child .gutter,
	.row:last-child .cell {
		padding-bottom: 7px;
	}

	.count {
		display: grid;
		width: 28px;
		height: 18px;
		place-items: center;
		border-radius: 3px;
		background: var(--count-bg);
		color: var(--count-fg);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.tick {
		width: 15px;
		height: 15px;
		color: var(--tick);
	}

	.subj-icon {
		display: grid;
		width: 16px;
		height: 16px;
		flex: none;
		place-items: center;
		color: var(--icon);
	}

	.subj-icon svg {
		width: 16px;
		height: 16px;
	}

	.subject,
	.meta {
		width: 100%;
	}

	.who,
	.date {
		color: var(--purple);
		font-weight: 500;
	}

	.who.marked {
		background: var(--mark);
		padding: 1px 4px 2px;
	}

	.spacer {
		flex: 1;
	}

	.dot {
		width: 8px;
		height: 8px;
		flex: none;
		border-radius: 50%;
		background: #6d37c1;
	}

	.preview {
		margin: 2px 4px 4px 2px;
		padding-left: 10px;
		border-left: 2px solid var(--preview-bar);
		color: var(--muted);
		font-size: 12.5px;
		font-weight: 400;
		line-height: 1.45;
	}

	.is-preview .cell {
		align-items: stretch;
	}

	@media (max-width: 980px) {
		.shell {
			height: auto;
			overflow: auto;
		}

		.frame {
			height: auto;
		}

		.top {
			align-items: flex-start;
			flex-direction: column;
		}

		.layout {
			grid-template-columns: 1fr;
		}

		.activity {
			min-height: 420px;
			max-height: 70vh;
		}

		.identity {
			grid-template-columns: 96px minmax(0, 1fr);
		}

		.portrait {
			width: 96px;
			height: 96px;
		}
	}
</style>
