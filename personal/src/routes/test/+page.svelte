<script lang="ts">
	type TagTone = 'purple' | 'orange';
	type SubjectIcon = 'list' | 'loop' | 'mail' | 'clock';

	interface Tag {
		label: string;
		tone: TagTone;
	}

	type MailRow =
		| { type: 'subject'; icon: SubjectIcon; title: string; tags: Tag[] }
		| {
				type: 'message';
				author: string;
				date: string;
				checked?: boolean;
				linked?: boolean;
				attachment?: boolean;
				unread?: boolean;
				marked?: boolean;
				aside?: 'clock';
		  }
		| { type: 'hidden'; n: number }
		| { type: 'preview'; text: string };

	interface Thread {
		count: string;
		rows: MailRow[];
	}

	const filters = ['ALL', 'Inbox', 'Unread', 'Today', 'Archive', 'Sent', 'Trash'];
	const views = ['Threads', 'Related', 'Preview'];

	const threads: Thread[] = [
		{
			count: '01',
			rows: [
				{ type: 'subject', icon: 'list', title: '[IMN] Last Take Day', tags: [] },
				{
					type: 'message',
					author: 'Claire Delattre',
					date: 'Today at 08:47',
					checked: true,
					linked: true,
					unread: true
				}
			]
		},
		{
			count: '03',
			rows: [
				{
					type: 'subject',
					icon: 'loop',
					title:
						'[rougier/numpy-100] Fix exercise 51: deprecated (type, 1) structured dtype -> scalar',
					tags: [{ label: 'NUMPY', tone: 'purple' }]
				},
				{
					type: 'message',
					author: 'Amit Subhash',
					date: 'Yesterday at 17:34',
					attachment: true
				},
				{ type: 'hidden', n: 1 },
				{
					type: 'message',
					author: 'Amit Subhash',
					date: 'Today at 06:04',
					checked: true,
					unread: true
				}
			]
		},
		{
			count: '09',
			rows: [
				{
					type: 'subject',
					icon: 'mail',
					title: "Besoin d'un formateur en Python",
					tags: [
						{ label: 'CNRS', tone: 'purple' },
						{ label: 'PYTHON', tone: 'purple' },
						{ label: 'TEACHING', tone: 'purple' }
					]
				},
				{
					type: 'message',
					author: 'GRAEBLING Elodie',
					date: 'May 19, 2026',
					attachment: true
				},
				{ type: 'hidden', n: 7 },
				{
					type: 'message',
					author: 'GRAEBLING Elodie',
					date: 'Yesterday at 08:56',
					checked: true,
					unread: true
				},
				{
					type: 'preview',
					text: `Pourras-tu m'envoyer tes programmes de formation ? La dernière formation qu'on ait fait avec toi date de 2023 et je n'ai pas les programmes dans le dossier… Merci d'avance et bonne journée Elodie ----- Mail original ----- De: "Nicolas P. Rougier,`
				}
			]
		},
		{
			count: '04',
			rows: [
				{
					type: 'subject',
					icon: 'loop',
					title:
						"[rougier/svg-tag-mode] With svg-tag at eol, when moving to eol, long string echo'ed in the minibuffer",
					tags: [{ label: 'EMACS', tone: 'purple' }]
				},
				{
					type: 'message',
					author: 'Howard Melman',
					date: 'June 02, 2026',
					attachment: true,
					marked: true
				},
				{ type: 'hidden', n: 2 },
				{
					type: 'message',
					author: 'Howard Melman',
					date: 'Monday at 17:16',
					checked: true,
					unread: true
				}
			]
		},
		{
			count: '01',
			rows: [
				{
					type: 'subject',
					icon: 'mail',
					title: 'COGMESH - DeepRAP - rappel to do list',
					tags: [
						{ label: 'COGMESH', tone: 'purple' },
						{ label: 'GRANT', tone: 'purple' },
						{ label: 'TODO', tone: 'orange' }
					]
				},
				{
					type: 'message',
					author: 'Lucia Marta',
					date: 'July 17, 2026',
					checked: true,
					linked: true,
					unread: true
				},
				{
					type: 'preview',
					text: `On se revoit jeudi 23 à 15h30, même lien visio. d'ici là, - Frédéric : contacter EDF (opérationnels en destinataires, et chef, binôme EDF et Inria + moi en CC au moins pour le 1er mail ) --> voir mon mail du 15/7 pour contacts EDF-Inria et contacter Uni`
				}
			]
		},
		{
			count: '17',
			rows: [
				{
					type: 'subject',
					icon: 'clock',
					title: 'Re: Episciences "Migration de 2 journaux (ReScience C et ReScience X)"',
					tags: [
						{ label: 'EPISCIENCES', tone: 'purple' },
						{ label: 'RESCIENCE', tone: 'purple' },
						{ label: 'TODO', tone: 'orange' }
					]
				},
				{
					type: 'message',
					author: 'Nicolas P. Rougier (inria)',
					date: 'May 11, 2026',
					attachment: true,
					aside: 'clock'
				},
				{ type: 'hidden', n: 15 },
				{
					type: 'message',
					author: 'Raphaël Tournoy',
					date: 'July 02, 2026',
					checked: true,
					unread: true
				},
				{
					type: 'preview',
					text: `toutes mes excuses pour le délai j'ai créé 2 bacs à sable : ReScience C https://resciencec-preprod.episciences.org/ ReScience X https://resciencex-preprod.episciences.org/ pour les logos j'ai bricolé si vous avez mieux en SVG je les change les compt`
				}
			]
		},
		{
			count: '08',
			rows: [
				{
					type: 'subject',
					icon: 'mail',
					title: 'Fwd: mail à envoyer pour les contributions technofascisme, à valider',
					tags: [
						{ label: 'BOOK', tone: 'purple' },
						{ label: 'TECHNOFASCISM', tone: 'orange' }
					]
				},
				{
					type: 'message',
					author: 'Autard Jean',
					date: 'January 05, 2026',
					linked: true,
					attachment: true
				},
				{ type: 'hidden', n: 6 },
				{
					type: 'message',
					author: 'Autard Jean',
					date: 'June 25, 2026',
					checked: true,
					linked: true,
					unread: true
				},
				{
					type: 'preview',
					text: `Voici la version relue par Guillaume Guimbretière (qui a fait de la physique au CNRS donc un peu plus compétent sur les aspects scientifiques) et moi même de la V1. Il y a pas mal de remarques de reformulations mais les prendre en compte ne devrait pas être`
				}
			]
		},
		{
			count: '01',
			rows: [
				{
					type: 'subject',
					icon: 'mail',
					title:
						'[ReScience/submissions] [Re] Ramp Metering for a Distant Downstream Bottleneck',
					tags: [{ label: 'RESCIENCE', tone: 'purple' }]
				},
				{
					type: 'message',
					author: 'DerKevinRiehl',
					date: 'June 24, 2026',
					checked: true,
					unread: true
				}
			]
		},
		{
			count: '01',
			rows: [
				{
					type: 'subject',
					icon: 'mail',
					title:
						'[ReScience/submissions] Submission: A Novel CNN Ablation Reveals Limited Fourier',
					tags: [{ label: 'RESCIENCE', tone: 'purple' }]
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Inbox</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app">
	<header class="nav">
		<div class="cluster">
			{#each filters as item, i}
				{#if i > 0}<span class="pipe">|</span>{/if}
				<span class="nav-item" class:active={item === 'ALL'}>{item}</span>
			{/each}
		</div>
		<div class="cluster">
			{#each views as item, i}
				{#if i > 0}<span class="pipe">|</span>{/if}
				<span class="nav-item">{item}</span>
			{/each}
			<span class="pipe">|</span>
			<svg class="search-icon" viewBox="0 0 16 16" aria-hidden="true">
				<circle cx="7" cy="7" r="4.25" fill="none" stroke="currentColor" stroke-width="1.4" />
				<path d="M10.2 10.2 13.2 13.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
			</svg>
		</div>
	</header>

	<div class="search">
		<span class="search-label">SEARCH</span>
		<span class="search-count">(n=23):</span>
		<span class="search-query">"maildir:/inria/inbox OR maildir:/gmail/inbox OR maildir:/univ/inbox"</span>
	</div>

	<div class="threads">
		{#each threads as thread}
			<article class="thread">
				{#each thread.rows as row}
					<div class="row" class:is-preview={row.type === 'preview'}>
						<div class="gutter">
							{#if row.type === 'subject'}
								<span class="count">{thread.count}</span>
							{:else if row.type === 'hidden'}
								<span class="dashes">--</span>
							{:else if row.type === 'message' && row.checked}
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
							{/if}
						</div>

						<div class="cell">
							{#if row.type === 'subject'}
								<div class="subject">
									<span class="subj-icon">
										{#if row.icon === 'list'}
											<svg viewBox="0 0 16 16" aria-hidden="true">
												<path d="M2.5 4h11M2.5 8h11M2.5 12h11" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
											</svg>
										{:else if row.icon === 'loop'}
											<svg viewBox="0 0 16 16" aria-hidden="true">
												<path d="M8 3.1a4.9 4.9 0 1 0 4.2 2.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
												<path d="M10.6 2.4h2.6V5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
										{:else if row.icon === 'clock'}
											<svg viewBox="0 0 16 16" aria-hidden="true">
												<circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" stroke-width="1.4" />
												<path d="M8 5.2V8.2L10.1 9.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
											</svg>
										{:else}
											<svg viewBox="0 0 16 16" aria-hidden="true">
												<rect x="2.2" y="3.4" width="11.6" height="9.2" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.35" />
												<path d="M2.6 4.4 8 8.3l5.4-3.9" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" />
											</svg>
										{/if}
									</span>
									<span class="title">{row.title}</span>
									{#if row.tags.length}
										<span class="tags">
											{#each row.tags as tag}
												<span class="tag" class:orange={tag.tone === 'orange'}>{tag.label}</span>
											{/each}
										</span>
									{/if}
								</div>
							{:else if row.type === 'message'}
								<div class="meta">
									<span class="who" class:marked={row.marked}>{row.author}</span>
									{#if row.linked}
										<svg class="mini" viewBox="0 0 16 16" aria-hidden="true">
											<path d="M6.6 8.8a2.6 2.6 0 0 1 0-3.7l1.4-1.4a2.6 2.6 0 0 1 3.7 3.7L10.6 8.5" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
											<path d="M9.4 7.2a2.6 2.6 0 0 1 0 3.7l-1.4 1.4a2.6 2.6 0 0 1-3.7-3.7L5.4 7.5" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
										</svg>
									{/if}
									{#if row.aside === 'clock'}
										<svg class="mini" viewBox="0 0 16 16" aria-hidden="true">
											<circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" stroke-width="1.35" />
											<path d="M8 5.1V8.1L10.2 9.4" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
										</svg>
									{/if}
									<span class="spacer"></span>
									<span class="when">
										<span class="date">{row.date}</span>
										{#if row.attachment}
											<svg class="attach" viewBox="0 0 16 16" aria-hidden="true">
												<rect x="2.4" y="3.2" width="11.2" height="9.6" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.3" />
												<path d="M2.4 6.2h11.2" fill="none" stroke="currentColor" stroke-width="1.2" />
											</svg>
										{/if}
										{#if row.unread}
											<span class="dot"></span>
										{/if}
									</span>
								</div>
							{:else if row.type === 'hidden'}
								<div class="hidden">
									<span>{row.n} hidden messages</span>
								</div>
							{:else}
								<p class="preview">{row.text}</p>
							{/if}
						</div>
					</div>
				{/each}
			</article>
		{/each}
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #fff;
		color: #102e34;
		font-family: 'Roboto Mono', ui-monospace, monospace;
	}

	.app {
		min-height: 100vh;
		background: #fff;
		color: #102e34;
		font-family: 'Roboto Mono', ui-monospace, monospace;
		font-size: 13px;
		line-height: 1.35;
		font-weight: 500;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		padding: 11px 18px 10px;
		border-bottom: 1.5px solid #243e3c;
	}

	.cluster {
		display: flex;
		align-items: center;
		gap: 11px;
		white-space: nowrap;
	}

	.nav-item {
		color: #0d3640;
		font-weight: 500;
	}

	.nav-item.active {
		font-weight: 700;
		color: #071f26;
	}

	.pipe {
		color: #1c3a38;
		font-weight: 400;
	}

	.search-icon {
		width: 15px;
		height: 15px;
		color: #0d3640;
	}

	.search {
		display: flex;
		align-items: baseline;
		gap: 8px;
		padding: 14px 18px 12px;
		white-space: nowrap;
		overflow: hidden;
	}

	.search-label {
		color: #ff6300;
		font-weight: 700;
	}

	.search-count {
		color: #8d989a;
		font-weight: 500;
	}

	.search-query {
		color: #122f35;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.thread {
		border-bottom: 1.5px solid #243e3c;
	}

	.row {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		align-items: stretch;
	}

	.gutter {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 14px;
		background: #e7eef1;
	}

	.row:first-child .gutter {
		padding-top: 7px;
	}

	.row:last-child .gutter {
		padding-bottom: 7px;
	}

	.cell {
		min-width: 0;
		padding: 1px 16px 1px 10px;
		display: flex;
		align-items: center;
	}

	.row:first-child .cell {
		padding-top: 8px;
	}

	.row:last-child .cell {
		padding-bottom: 8px;
	}

	.count {
		display: grid;
		place-items: center;
		width: 28px;
		height: 18px;
		border-radius: 3px;
		background: #083744;
		color: #fff;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.02em;
	}

	.tick {
		width: 15px;
		height: 15px;
		color: #3f595c;
	}

	.dashes {
		color: #8ea0a3;
		font-size: 12px;
		letter-spacing: 0.04em;
	}

	.subject,
	.meta {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		min-width: 0;
	}

	.subj-icon,
	.subj-icon svg,
	.mini,
	.attach {
		flex: none;
	}

	.subj-icon {
		display: grid;
		place-items: center;
		width: 16px;
		height: 16px;
		color: #16383e;
	}

	.subj-icon svg {
		width: 16px;
		height: 16px;
	}

	.title {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #102e34;
		font-weight: 600;
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

	.who,
	.date {
		color: #6a45b0;
		font-weight: 500;
	}

	.who.marked {
		background: #f3eef9;
		padding: 1px 4px 2px;
	}

	.mini {
		width: 13px;
		height: 13px;
		color: #8d7eae;
	}

	.spacer {
		flex: 1;
	}

	.when {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		flex: none;
	}

	.attach {
		width: 14px;
		height: 14px;
		color: #7d9094;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #6d37c1;
	}

	.hidden {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
		color: #8ea0a3;
		font-size: 12px;
		font-weight: 500;
	}

	.hidden::before,
	.hidden::after {
		content: '';
		flex: 1;
		height: 1px;
		background-image: linear-gradient(to right, #a9b8bb 0 7px, transparent 7px 11px);
		background-size: 11px 1px;
		background-repeat: repeat-x;
	}

	.preview {
		margin: 2px 8px 4px 2px;
		padding: 0 0 0 10px;
		border-left: 2px solid #c5d0d2;
		color: #4c6264;
		font-size: 12.5px;
		font-weight: 400;
		line-height: 1.45;
	}

	.is-preview .cell {
		align-items: stretch;
	}
</style>
