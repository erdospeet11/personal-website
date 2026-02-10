<script lang="ts">
	const profile = {
		name: 'Peter Erdos',
		links: {
			github: 'https://github.com/erdospeet11',
			linkedin: 'https://www.linkedin.com/in/erdospeterzs/',
			cv: '/cv.pdf'
		},
		projects: [
			{
				title: 'NodeML',
				description:
					'A node-based machine learning interface for building and training machine learning models.',
				link: 'https://github.com/erdospeet11/node-ml-workflow'
			},
			{
				title: 'Beautiful Solar Flare',
				description: 'A beautiful solar flare analysis and visualization.',
				link: 'https://github.com/erdospeet11/beautiful-data-space'
			},
			{
				title: 'Moba',
				description: 'Not yet announced MOBA done in Godot and Golang'
			},
			{
				title: 'The Void Engine',
				description: 'A 3D game engine done in C++, CMake, Conan, OpenGL',
				link: 'https://github.com/erdospeet11/the-void-engine'
			},
			{
				title: 'SINCE AI HACKATHON Sandvik Challenge ',
				description:
					'An intelligent Microsoft Teams bot that monitors channel messages, classifies spare parts inquiries using a hybrid AI pipeline, and provides proactive notifications with RAG-based spare parts matching',
				link: 'https://github.com/erdospeet11/SINCE-AI-SANDVIK-CHALLENGE'
			}
		],
		certs: ['AWS Machine Learning Associate', 'Azure Fundamentals'],
		skills: [
			'SvelteKit',
			'TypeScript',
			'Vite',
			'TailwindCSS',
			'Node.js',
			'PostgreSQL',
			'C#',
			'Python',
			'Godot',
			'AWS',
			'Azure'
		]
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
			<p class="subtitle">Software Engineer · DevOps, ML, Game Development</p>

			<div class="social-links">
				<a
					href={profile.links.github}
					target="_blank"
					rel="noopener noreferrer"
					class="social-btn"
					title="GitHub"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
						></path></svg
					>
					<span>GitHub</span>
				</a>
				<a
					href={profile.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="social-btn"
					title="LinkedIn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"
						></circle></svg
					>
					<span>LinkedIn</span>
				</a>
				<a
					href={profile.links.cv}
					target="_blank"
					rel="noopener noreferrer"
					class="social-btn"
					title="CV"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline
							points="14 2 14 8 20 8"
						></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line
							x1="16"
							y1="17"
							x2="8"
							y2="17"
						></line><polyline points="10 9 9 9 8 9"></polyline></svg
					>
					<span>CV</span>
				</a>
			</div>
		</section>

		<section class="section">
			<h2>Projects</h2>
			<div class="projects-list">
				{#each profile.projects as project}
					<div class="project-item">
						<div class="project-header">
							<h3>{project.title}</h3>
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="social-btn project-link-btn"
									title="View Source"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										><path
											d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
										></path></svg
									>
									<span>GitHub</span>
								</a>
							{/if}
						</div>
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

	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.social-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		color: white;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.social-btn:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.social-btn svg {
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}

	.social-btn:hover svg {
		opacity: 1;
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
		gap: 0.6rem;
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.project-link-btn {
		padding: 0.4rem 0.8rem;
		font-size: 0.8rem;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.03);
		white-space: nowrap;
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
