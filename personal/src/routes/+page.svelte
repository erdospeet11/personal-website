<script lang="ts">
	let lang = $state<'en' | 'hu'>('en');

	const i18n = {
		en: {
			subtitle: 'Software Engineer · DevOps, ML, Game Development',
			projects: 'Projects',
			certs: 'Certifications',
			skills: 'Skills',
			achievements: 'Achievements',
			studies: 'Studies',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			cv: 'CV',
			viewSource: 'View Source',
			university: 'University',
			hackathons: 'Hackathons',
			email: 'Email',
			sinceDescription:
				'An intelligent Microsoft Teams bot that monitors channel messages, classifies spare parts inquiries using a hybrid AI pipeline, and provides proactive notifications with RAG-based spare parts matching'
		},
		hu: {
			subtitle: 'Szoftverfejlesztő · DevOps, ML, Játékfejlesztés',
			projects: 'Projektek',
			certs: 'Tanúsítványok',
			skills: 'Készségek',
			achievements: 'Eredmények',
			studies: 'Tanulmányok',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			cv: 'Önéletrajz',
			viewSource: 'Forráskód',
			university: 'Egyetem',
			hackathons: 'Hackathonok',
			email: 'Email',
			sinceDescription:
				'Egy intelligens Microsoft Teams bot, amely figyeli a csatornaüzeneteket, hibrid AI-folyamat segítségével osztályozza a pótalkatrész-lekérdezéseket, és proaktív értesítéseket küld RAG-alapú pótalkatrész-párosítással'
		}
	};

	const profile = {
		name: 'Péter Erdős',
		links: {
			github: 'https://github.com/erdospeet11',
			linkedin: 'https://www.linkedin.com/in/erdospeterzs/',
			cv: '/cv.pdf',
			email: 'mailto:erdospepep9@gmail.com'
		},
		projects: [
			{
				title: 'NodeML',
				description: {
					en: 'A node-based machine learning interface for building and training machine learning models.',
					hu: 'Csomópont-alapú gépi tanulási felület gépi tanulási modellek építéséhez és betanításához.'
				},
				link: 'https://github.com/erdospeet11/node-ml-workflow'
			},
			{
				title: 'Beautiful Solar Flare',
				description: {
					en: 'A beautiful solar flare analysis and visualization.',
					hu: 'Gyönyörű napkitörés-elemzés és vizualizáció.'
				},
				link: 'https://github.com/erdospeet11/beautiful-data-space'
			},
			{
				title: 'Moba',
				description: {
					en: 'Not yet announced MOBA done in Godot and Golang',
					hu: 'Még nem bejelentett MOBA, Godot-ban és Golang-ban fejlesztve'
				}
			},
			{
				title: 'The Void Engine',
				description: {
					en: 'A 3D game engine done in C++, CMake, Conan, OpenGL',
					hu: '3D játékmotor C++, CMake, Conan és OpenGL segítségével'
				},
				link: 'https://github.com/erdospeet11/the-void-engine'
			},
			{
				title: 'SINCE AI HACKATHON Sandvik Challenge',
				description: {
					en: i18n.en.sinceDescription,
					hu: i18n.hu.sinceDescription
				},
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
		],
		achievements: [
			{
				title: {
					en: 'SINCE AI HACKATHON - 1st Place (Sandvik Challenge)',
					hu: 'SINCE AI HACKATHON - 1. helyezés (Sandvik Challenge)'
				},
				date: '2024'
			}
		],
		studies: [
			{
				institution: {
					en: 'Eötvös Loránd University',
					hu: 'Eötvös Loránd University'
				},
				degree: {
					en: 'Computer Science Engineer',
					hu: 'Programtervező Informatikus'
				},
				period: '2021 - 2026'
			}
		]
	};

	function toggleLang() {
		lang = lang === 'en' ? 'hu' : 'en';
	}
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
	<button class="lang-toggle" onclick={toggleLang} aria-label="Toggle Language">
		<span class={lang === 'en' ? 'active' : ''}>EN</span>
		<span class="separator">/</span>
		<span class={lang === 'hu' ? 'active' : ''}>HU</span>
	</button>

	<div class="glass-container">
		<section class="section name-section">
			<h1>{profile.name}</h1>
			<p class="subtitle">{i18n[lang].subtitle}</p>

			<div class="social-links">
				<a
					href={profile.links.github}
					target="_blank"
					rel="noopener noreferrer"
					class="social-btn"
					title={i18n[lang].github}
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
					<span>{i18n[lang].github}</span>
				</a>
				<a
					href={profile.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="social-btn"
					title={i18n[lang].linkedin}
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
					<span>{i18n[lang].linkedin}</span>
				</a>
				<a
					href={profile.links.cv}
					target="_blank"
					rel="noopener noreferrer"
					class="social-btn"
					title={i18n[lang].cv}
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
					<span>{i18n[lang].cv}</span>
				</a>
				<a href={profile.links.email} class="social-btn" title={i18n[lang].email}>
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
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						></path></svg
					>
					<span>{i18n[lang].email}</span>
				</a>
			</div>
		</section>

		<section class="section">
			<h2>{i18n[lang].projects}</h2>
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
									title={i18n[lang].viewSource}
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
									<span>{i18n[lang].github}</span>
								</a>
							{/if}
						</div>
						<p>{project.description[lang]}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2>{i18n[lang].achievements}</h2>
			<div class="achievements-list">
				{#each profile.achievements as achievement}
					<div class="achievement-item">
						<div class="achievement-header">
							<h3>{achievement.title[lang]}</h3>
							<span class="date-tag">{achievement.date}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2>{i18n[lang].studies}</h2>
			<div class="studies-list">
				{#each profile.studies as study}
					<div class="study-item">
						<div class="study-header">
							<h3>{study.institution[lang]}</h3>
							<span class="period-tag">{study.period}</span>
						</div>
						<p>{study.degree[lang]}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="section">
			<h2>{i18n[lang].certs}</h2>
			<ul>
				{#each profile.certs as cert}
					<li>{cert}</li>
				{/each}
			</ul>
		</section>

		<section class="section">
			<h2>{i18n[lang].skills}</h2>
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

	.lang-toggle {
		position: fixed;
		top: 2rem;
		right: 2rem;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 0.6rem 1.2rem;
		display: flex;
		gap: 0.6rem;
		cursor: pointer;
		font-family: inherit;
		color: rgba(255, 255, 255, 0.3);
		font-size: 0.85rem;
		font-weight: 700;
		transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
		z-index: 1000;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.lang-toggle:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.3);
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.lang-toggle span.active {
		color: white;
	}

	.separator {
		opacity: 0.2;
	}

	.achievements-list,
	.studies-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.achievement-item,
	.study-item {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.02);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.03);
		transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.achievement-item:hover,
	.study-item:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(255, 255, 255, 0.1);
		transform: translateX(4px);
	}

	.achievement-header,
	.study-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.achievement-item h3,
	.study-item h3 {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 600;
		color: #e0e0e0;
	}

	.study-item p {
		margin: 0;
		font-size: 0.9rem;
		font-weight: 300;
		opacity: 0.6;
		color: #b0b0b0;
	}

	.date-tag,
	.period-tag {
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.25rem 0.6rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		color: rgba(255, 255, 255, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.05);
		white-space: nowrap;
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
		font-size: 1rem;
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
