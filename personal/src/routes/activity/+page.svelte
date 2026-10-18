<script lang="ts">
	import ActivityFeed from '$lib/components/ActivityFeed.svelte';
	import SiteShell from '$lib/components/SiteShell.svelte';
</script>

<SiteShell title="Activity | Erdős Péter">
	<div class="page">
		<ActivityFeed />
	</div>
</SiteShell>

<style>
	.page {
		display: flex;
		flex: 1;
		min-width: 0;
		min-height: 0;
	}
</style>
