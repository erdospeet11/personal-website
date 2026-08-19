<script lang="ts">
	import dithered_image from '$lib/assets/ad.png';

	const profile = {
		name: 'PÉTER ERDŐS',
		subtitle: 'Software Engineer · DevOps, ML, Game Development',
		links: [
			{ label: 'PROJECTS', href: '/projects', external: false },
			{ label: 'GITHUB', href: 'https://github.com/erdospeet11', external: true },
			{ label: 'LINKEDIN', href: 'https://www.linkedin.com/in/erdospeterzs/', external: true },
			{ label: 'CV', href: '/cv.pdf', external: true },
			{ label: 'EMAIL', href: 'mailto:erdospepep9@gmail.com', external: true }
		],
		skills: [
			'SvelteKit',
			'TypeScript',
			'Python',
			'C#',
			'Godot',
			'AWS',
			'Azure',
			'PostgreSQL',
			'Node.js',
			'TailwindCSS'
		],
		studies: {
			institution: 'Eötvös Loránd University',
			degree: 'Computer Science Engineer',
			period: '2021 — 2026'
		},
		achievement: {
			title: 'SINCE AI HACKATHON — 1st Place (Sandvik Challenge)',
			date: '2024'
		}
	};
</script>

<svelte:head>
	<title>{profile.name} | Portfolio</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="mx-auto grid min-h-[80vh] w-full max-w-7xl grid-cols-1 items-stretch gap-8 p-4 select-none md:p-8 lg:grid-cols-12"
>
	<!-- profile -->
	<div
		class="card-style flex h-auto flex-col overflow-y-auto rounded-lg border bg-black/40 p-6 shadow-2xl backdrop-blur-md transition-colors duration-500 lg:col-span-5 lg:h-[650px]"
	>
		<div class="flex h-full flex-col justify-between gap-8">
			<div class="space-y-8">
				<header class="space-y-3">
					<p class="font-mono text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase">
						Portfolio
					</p>
					<h1 class="text-2xl font-extrabold tracking-wider md:text-3xl">{profile.name}</h1>
					<p class="text-sm leading-relaxed font-medium text-zinc-400">{profile.subtitle}</p>
				</header>

				<nav>
					<h2 class="main-list mb-4 text-sm tracking-wider">LINKS</h2>
					<ul class="nav-list space-y-3 text-base md:text-lg">
						{#each profile.links as link}
							<li class="border-b border-zinc-900/40 pb-2 last:border-b-0">
								<a
									href={link.href}
									target={link.external ? '_blank' : undefined}
									rel={link.external ? 'noopener noreferrer' : undefined}
									class="group flex w-full items-center justify-between py-1 font-mono font-bold tracking-wider transition-colors duration-200 hover:text-white"
								>
									<span class="flex items-center gap-2">
										<span class="font-normal text-zinc-500">[ ]</span>
										{link.label}
									</span>
									<span
										class="font-normal text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400"
									>
										&gt;
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</nav>

				<section>
					<h2 class="main-list mb-4 text-sm tracking-wider">STUDIES</h2>
					<div class="space-y-1 pl-1 text-sm">
						<p class="font-bold tracking-wide">{profile.studies.institution}</p>
						<p class="text-zinc-400">{profile.studies.degree}</p>
						<p class="font-mono text-xs text-zinc-500">{profile.studies.period}</p>
					</div>
				</section>

				<section>
					<h2 class="main-list mb-4 text-sm tracking-wider">ACHIEVEMENT</h2>
					<div class="space-y-1 pl-1 text-sm">
						<p class="font-bold tracking-wide">{profile.achievement.title}</p>
						<p class="font-mono text-xs text-zinc-500">{profile.achievement.date}</p>
					</div>
				</section>
			</div>

			<div class="space-y-4">
				<section>
					<h2 class="main-list mb-3 text-sm tracking-wider">SKILLS</h2>
					<div class="flex flex-wrap gap-2">
						{#each profile.skills as skill}
							<span
								class="rounded border border-zinc-800/80 bg-zinc-950 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide text-zinc-400 uppercase select-none"
							>
								{skill}
							</span>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</div>

	<!-- visual -->
	<div
		class="card-style flex h-[550px] flex-col justify-between rounded-lg border bg-black/40 p-6 shadow-2xl backdrop-blur-md transition-colors duration-500 lg:col-span-7 lg:h-[650px]"
	>
		<div
			class="image-wrapper relative h-full w-full overflow-hidden rounded border border-zinc-900/80 bg-black/90"
		>
			<img
				alt="Dithered portrait"
				src={dithered_image}
				class="h-full w-full object-cover object-center opacity-90"
			/>
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'JetBrains Mono', monospace;
		background-color: #050505;
		border-width: 0;
		font-weight: bold;
		color: #e2e8f0;
		transition:
			background-color 0.5s ease,
			color 0.5s ease;
	}

	.card-style {
		border-color: rgba(255, 255, 255, 0.15);
	}

	.image-wrapper {
		border-color: rgba(255, 255, 255, 0.15);
	}

	.main-list {
		list-style-type: '/';
		padding-left: 0rem;
		font-weight: 800;
	}

	.nav-list {
		list-style-type: none;
		padding-left: 0;
	}

	.nav-list li {
		padding-left: 0;
	}

	a {
		color: #e2e8f0;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	a:hover {
		color: white;
		text-decoration: none;
	}
</style>
