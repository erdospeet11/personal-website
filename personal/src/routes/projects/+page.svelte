<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div>
    <ul>
        <li class="main-list">PROJECTS</li>
        <ul>
            <li><a href="https://github.com/erdospeet11/fkg">FANTASY KOZMOZ LEAGUE</a></li>
            <li><a href="https://github.com/erdospeet11/beautiful-data-space">BEAUTIFUL SOLAR FLARE</a></li>
            <li><a href="https://github.com/erdospeet11/autobattler-simulator">AUTOBATTLER</a></li>
            <li><a href="https://github.com/erdospeet11/NodeFlow">NODEFLOW</a></li>
            <li><a href="/webgpu">WEBPGU RENDERING</a></li>
        </ul>
    </ul>

</div>

<style>
	:global(body){
		font-family: 'JetBrains Mono', monospace;
		background-color: black;
        border-width: 1px;
        font-weight: bold;
        color: rgb(135, 0, 150);
	}

    h1{
        font-weight: bold;
    }
    .main-list{
        list-style-type: "/";
        padding-left: 0rem;
    }
    ul{
        list-style-type: "[ ]";
        padding-left: 3rem;
        margin-bottom: 1rem;
    }
    a:hover{
        text-decoration: underline;
    }
</style>