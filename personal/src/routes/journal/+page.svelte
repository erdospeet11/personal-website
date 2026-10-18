<script lang="ts">
	import SiteShell from '$lib/components/SiteShell.svelte';
</script>

<SiteShell title="Journal | Erdős Péter">
	<section class="journal" aria-label="Journal">
		<h2 class="kicker">JOURNAL</h2>
		<p class="empty">No entries yet.</p>
	</section>
</SiteShell>

<style>
	.journal {
		display: flex;
		flex: 1;
		min-height: 0;
		flex-direction: column;
		border: 1px solid var(--line);
	}

	.kicker {
		margin: 0;
		padding: 10px 14px;
		border-bottom: 3px solid var(--rule);
		color: var(--orange);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.04em;
	}

	.empty {
		margin: 0;
		padding: 16px 14px;
		color: var(--muted);
		font-weight: 400;
	}
</style>
