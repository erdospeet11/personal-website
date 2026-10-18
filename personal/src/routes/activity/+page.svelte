<script lang="ts">
	import ActivityFeed from '$lib/components/ActivityFeed.svelte';
	import ContributionHeatmap from '$lib/components/ContributionHeatmap.svelte';
	import SiteShell from '$lib/components/SiteShell.svelte';

	let { data } = $props();
</script>

<SiteShell title="Activity | Erdős Péter">
	<div class="page">
		<ActivityFeed />
		<ContributionHeatmap
			contributions={data.contributions}
			total={data.total}
			unavailable={data.unavailable}
		/>
	</div>
</SiteShell>

<style>
	.page {
		display: grid;
		flex: 1;
		grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.15fr);
		gap: 14px;
		min-height: 0;
	}

	@media (max-width: 980px) {
		.page {
			grid-template-columns: 1fr;
		}
	}
</style>
