<script lang="ts">
	const profile = {
		name: 'Peter Erdos',
		projects: [
			{
				title: 'CosmicFlow Dashboard',
				description:
					'Real-time telemetry visualization for orbital satellites using SvelteKit and D3.js.'
			},
			{
				title: 'NeuroSync Interface',
				description: 'A brain-computer interface (BCI) experimental portal for neural data mapping.'
			},
			{
				title: 'Gethub Explorer',
				description: 'Advanced Git repository analytics tool with predictive growth modeling.'
			},
			{
				title: 'Aether Analytics',
				description:
					'Decentralized data processing platform focusing on low-latency edge computing.'
			}
		],
		certs: ['AWS Machine Learning Associate', 'Azure Fundamentals'],
		skills: ['SvelteKit', 'TypeScript', 'Vite', 'TailwindCSS', 'Node.js', 'PostgreSQL']
	};
</script>

<svelte:head>
	<title>{profile.name} | Portfolio</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="stars-container">
	<div class="stars-layer stars-small"></div>
	<div class="stars-layer stars-medium"></div>
	<div class="stars-layer stars-large"></div>
</div>

<div class="page-wrapper">
	<div class="glass-container">
		<section class="section name-section">
			<h1>{profile.name}</h1>
			<p class="subtitle">Full Stack Developer & Systems Architect</p>
		</section>

		<section class="section">
			<h2>Projects</h2>
			<div class="projects-list">
				{#each profile.projects as project}
					<div class="project-item">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2>Certifications</h2>
			<ul>
				{#each profile.certs as cert}
					<li>{cert}</li>
				{/each}
			</ul>
		</section>

		<section class="section">
			<h2>Skills</h2>
			<div class="skills-grid">
				{#each profile.skills as skill}
					<span class="skill-tag">{skill}</span>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Outfit', sans-serif;
		background: #050505;
		color: white;
		overflow-x: hidden;
	}

	.stars-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		overflow: hidden;
	}

	.stars-layer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.stars-small {
		background-image:
			radial-gradient(1px 1px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
			radial-gradient(1px 1px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
			radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
			radial-gradient(1px 1px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
			radial-gradient(1px 1px at 130px 80px, #fff, rgba(0, 0, 0, 0));
		background-size: 200px 200px;
		animation: moveStars 100s linear infinite;
	}

	.stars-medium {
		background-image:
			radial-gradient(2px 2px at 50px 100px, #eee, rgba(0, 0, 0, 0)),
			radial-gradient(2px 2px at 150px 150px, #fff, rgba(0, 0, 0, 0)),
			radial-gradient(2px 2px at 250px 50px, #ddd, rgba(0, 0, 0, 0));
		background-size: 300px 300px;
		animation: moveStars 150s linear infinite;
		opacity: 0.5;
	}

	.stars-large {
		background-image:
			radial-gradient(3px 3px at 100px 200px, #eee, rgba(0, 0, 0, 0)),
			radial-gradient(3px 3px at 300px 300px, #fff, rgba(0, 0, 0, 0));
		background-size: 500px 500px;
		animation: moveStars 200s linear infinite;
		opacity: 0.3;
	}

	@keyframes moveStars {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-2000px);
		}
	}

	.page-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		padding: 4rem 2rem;
		box-sizing: border-box;
	}

	.glass-container {
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 32px;
		padding: 3rem;
		width: 100%;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1);
		position: relative;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.name-section {
		text-align: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		padding-bottom: 2rem;
	}

	h1 {
		margin: 0;
		font-size: 3rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		background: linear-gradient(to bottom, #ffffff 0%, #a5a5a5 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.subtitle {
		margin: 0.5rem 0 0;
		font-weight: 300;
		opacity: 0.6;
		font-size: 1.2rem;
		letter-spacing: 0.02em;
	}

	h2 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		opacity: 0.4;
		color: white;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.project-item {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.project-item h3 {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 600;
		color: #e0e0e0;
	}

	.project-item p {
		margin: 0;
		font-size: 0.95rem;
		font-weight: 300;
		line-height: 1.5;
		opacity: 0.7;
		color: #b0b0b0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	li {
		padding-left: 1.5rem;
		position: relative;
		font-weight: 300;
		font-size: 1.1rem;
		color: #d0d0d0;
		transition: all 0.3s ease;
	}

	li:hover {
		transform: translateX(8px);
		color: white;
	}

	li::before {
		content: '→';
		position: absolute;
		left: 0;
		opacity: 0.5;
	}

	.skills-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.skill-tag {
		background: rgba(255, 255, 255, 0.05);
		padding: 0.5rem 1rem;
		border-radius: 8px;
		font-size: 0.9rem;
		font-weight: 400;
		border: 1px solid rgba(255, 255, 255, 0.05);
		transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		cursor: default;
		color: #a0a0a0;
	}

	.skill-tag:hover {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}
</style>
