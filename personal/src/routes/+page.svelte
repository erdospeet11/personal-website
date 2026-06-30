<script lang="ts">
	//import dithered_image from '$lib/assets/image-dithered2.png';
	import dithered_image from '$lib/assets/ad.png';
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
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="bodyy">
	<div>
		<p>JetBrains Mono in a file</p>
		<a href="/projects">Projects</a>
	</div>

	<img alt="dithered image" src={dithered_image}>
</div>
<style>
	.bodyy{
		font-family: 'JetBrains Mono', monospace;
		background-color: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
	}

	a:hover{
        text-decoration: underline;
    }
</style>
