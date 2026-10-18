<script lang="ts">
	import { untrack } from 'svelte';
	import {
		calendarMonths,
		contributionCountLabel,
		formatContributionDate,
		type CalendarCell,
		type ContributionDay
	} from '$lib/contributions';

	let {
		contributions,
		total,
		unavailable = false
	}: {
		contributions: ContributionDay[];
		total: number;
		unavailable?: boolean;
	} = $props();

	const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	const months = $derived(calendarMonths(contributions));

	let board: HTMLDivElement | undefined = $state();
	let columns = $state(4);
	let cell = $state(14);
	let active = $state<CalendarCell | null>(null);

	function fit(width: number, height: number, count: number, grow: boolean) {
		const rowGap = 16;
		const columnGap = 18;
		const label = 22;
		const weekday = 14;
		const cellGap = 3;
		let bestColumns = 2;
		let bestSize = 0;

		for (const nextColumns of [2, 3, 4]) {
			const rows = Math.ceil(count / nextColumns);
			const monthWidth = (width - columnGap * (nextColumns - 1)) / nextColumns;
			const monthHeight = (height - rowGap * (rows - 1)) / rows;
			const byWidth = (monthWidth - cellGap * 6) / 7;
			const byHeight = grow ? byWidth : (monthHeight - label - weekday - cellGap * 5) / 6;
			const size = Math.floor(Math.min(byWidth, byHeight));
			const capped = grow ? Math.min(18, size) : size;
			if (capped > bestSize || (capped === bestSize && nextColumns > bestColumns)) {
				bestSize = capped;
				bestColumns = nextColumns;
			}
		}

		return { columns: bestColumns, cell: Math.max(grow ? 10 : 8, bestSize) };
	}

	$effect(() => {
		const count = months.length;
		const node = board;
		if (!node || count === 0) return;

		const measure = () => {
			const style = getComputedStyle(node);
			const width =
				node.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
			const height =
				node.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
			const grow = window.matchMedia('(max-width: 980px)').matches;
			const next = fit(width, height, count, grow);
			untrack(() => {
				if (next.columns !== columns) columns = next.columns;
				if (next.cell !== cell) cell = next.cell;
			});
		};

		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(node);
		const query = window.matchMedia('(max-width: 980px)');
		query.addEventListener('change', measure);
		return () => {
			observer.disconnect();
			query.removeEventListener('change', measure);
		};
	});

	function show(day: CalendarCell) {
		if (day.inRange) active = day;
	}
</script>

<section class="calendar" aria-label="Contribution calendar">
	<header class="head">
		<h2 class="kicker">CONTRIBUTIONS</h2>
		{#if !unavailable}
			<a href="https://github.com/erdospeet11" target="_blank" rel="noopener noreferrer">
				{total} last year
			</a>
		{/if}
	</header>

	{#if unavailable}
		<p class="empty">Contribution history is unavailable.</p>
	{:else}
		<div class="board" bind:this={board} style:--cols={columns} style:--cell="{cell}px">
			<div class="months">
				{#each months as month (month.key)}
					<div class="month">
						<h3>{month.label}</h3>
						<div class="weekdays" aria-hidden="true">
							{#each weekdays as weekday, index (`${month.key}-${index}`)}
								<span>{weekday}</span>
							{/each}
						</div>
						<div class="days">
							{#each month.cells as day, index (`${month.key}-${index}`)}
								{#if day.inRange}
									<button
										class="day"
										type="button"
										data-level={day.level}
										aria-label="{formatContributionDate(day.date)}, {contributionCountLabel(day.count)}"
										onmouseenter={() => show(day)}
										onfocus={() => show(day)}
										onmouseleave={() => (active = null)}
										onblur={() => (active = null)}
									></button>
								{:else}
									<span class="day"></span>
								{/if}
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<footer class="foot">
			<div class="legend" aria-hidden="true">
				<span>Less</span>
				{#each [0, 1, 2, 3, 4] as level (level)}
					<span class="swatch" data-level={level}></span>
				{/each}
				<span>More</span>
			</div>
			<p class="detail">
				{#if active}
					{formatContributionDate(active.date)} · {contributionCountLabel(active.count)}
				{:else}
					GitHub contributions
				{/if}
			</p>
		</footer>
	{/if}
</section>

<style>
	.calendar {
		--heat-0: #e7eef1;
		--heat-1: #e4d8f6;
		--heat-2: #b794e6;
		--heat-3: #6a45b0;
		--heat-4: #ff6300;
		display: flex;
		min-width: 0;
		min-height: 0;
		flex-direction: column;
		border: 1px solid var(--line);
	}

	:global([data-theme='dark']) .calendar {
		--heat-0: #223033;
		--heat-1: #2c2440;
		--heat-2: #5c3d96;
		--heat-3: #c4b0f0;
		--heat-4: #ff6300;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 10px 14px;
		border-bottom: 1px solid var(--rule);
	}

	.kicker {
		margin: 0;
		color: var(--orange);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.head a {
		color: var(--purple);
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
	}

	.head a:hover {
		color: var(--hover);
	}

	.empty {
		margin: 0;
		padding: 16px 14px;
		color: var(--muted);
		font-weight: 400;
	}

	.board {
		display: grid;
		flex: 1;
		place-items: center;
		min-height: 0;
		padding: 14px;
	}

	.months {
		display: grid;
		grid-template-columns: repeat(var(--cols), max-content);
		gap: 16px 18px;
	}

	.month h3 {
		margin: 0 0 6px;
		color: var(--ink);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.03em;
	}

	.weekdays,
	.days {
		display: grid;
		grid-template-columns: repeat(7, var(--cell));
		gap: 3px;
	}

	.weekdays {
		margin-bottom: 3px;
		color: var(--faint);
		font-size: 9px;
		font-weight: 700;
		line-height: 11px;
		text-align: center;
	}

	.days {
		grid-auto-rows: var(--cell);
	}

	.day {
		display: block;
		width: var(--cell);
		height: var(--cell);
		border: 0;
		border-radius: 2px;
		padding: 0;
		background: transparent;
	}

	button.day {
		background: var(--heat-0);
		cursor: pointer;
	}

	button.day[data-level='1'] {
		background: var(--heat-1);
	}

	button.day[data-level='2'] {
		background: var(--heat-2);
	}

	button.day[data-level='3'] {
		background: var(--heat-3);
	}

	button.day[data-level='4'] {
		background: var(--heat-4);
	}

	button.day:hover,
	button.day:focus-visible {
		outline: 2px solid var(--ink);
		outline-offset: 1px;
	}

	.foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 10px 14px;
		border-top: 1px solid var(--rule);
	}

	.legend,
	.detail {
		color: var(--muted);
		font-size: 11px;
		font-weight: 500;
	}

	.legend {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.detail {
		margin: 0;
		text-align: right;
	}

	.swatch {
		width: 11px;
		height: 11px;
		border-radius: 2px;
		background: var(--heat-0);
	}

	.swatch[data-level='1'] {
		background: var(--heat-1);
	}

	.swatch[data-level='2'] {
		background: var(--heat-2);
	}

	.swatch[data-level='3'] {
		background: var(--heat-3);
	}

	.swatch[data-level='4'] {
		background: var(--heat-4);
	}

	@media (max-width: 980px) {
		.board {
			display: block;
			flex: none;
		}

		.months {
			margin-inline: auto;
		}
	}
</style>
