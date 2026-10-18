<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { nav } from '$lib/site';
	import { theme, toggleTheme } from '$lib/theme.svelte';

	let { children, title = 'Erdős Péter | Software Engineer' } = $props();

	let now = $state(new Date());

	function isCurrent(href: string, external = false) {
		if (external || href.startsWith('mailto:')) return false;
		return href === '/' ? page.url.pathname === '/' : page.url.pathname === href;
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
	<title>{title}</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="shell" data-theme={theme.value}>
	<div class="frame">
		<header class="top">
			<nav class="nav" aria-label="Primary">
				{#each nav as item, i}
					{#if i > 0}<span class="pipe" aria-hidden="true">|</span>{/if}
					<a
						class="nav-btn"
						class:active={isCurrent(item.href, item.external)}
						href={item.href}
						target={item.external ? '_blank' : undefined}
						rel={item.external ? 'noopener noreferrer' : undefined}
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="corner">
				<button
					class="theme-btn"
					type="button"
					onclick={toggleTheme}
					aria-label={theme.value === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
				>
					{#if theme.value === 'light'}
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

		{@render children()}
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
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding-bottom: 10px;
		border-bottom: 3px solid var(--line);
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
	}

	.nav-btn {
		border: 0;
		padding: 0;
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
		color: var(--ink);
		font-weight: 400;
	}

	.clock {
		color: var(--orange);
		font-weight: 700;
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
	}
</style>
