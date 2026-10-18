<script lang="ts">
	import { activity } from '$lib/activity';
</script>

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
										<circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" stroke-width="1.4" />
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

<style>
	.activity {
		display: flex;
		min-width: 0;
		min-height: 0;
		flex: 1;
		flex-direction: column;
		border: 1px solid var(--line);
	}

	.kicker {
		display: block;
		margin: 0;
		color: var(--orange);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.head {
		padding: 10px 14px;
		border-bottom: 1px solid var(--rule);
	}

	.feed {
		flex: 1;
		min-height: 0;
		overflow-y: auto;
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
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		min-width: 0;
	}

	.title {
		min-width: 0;
		overflow: hidden;
		color: var(--title);
		font-weight: 600;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-decoration: none;
	}

	a.title:hover {
		color: var(--hover);
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
		.activity {
			min-height: 420px;
			max-height: 70vh;
		}
	}
</style>
