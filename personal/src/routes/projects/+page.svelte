<script lang="ts">
	import { onMount } from 'svelte';

	let canvasEl = $state<HTMLCanvasElement | null>(null);

	onMount(() => {
		if (!canvasEl) return;
		const canvas = canvasEl;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const offscreenCanvas = document.createElement('canvas');
		const offCtx = offscreenCanvas.getContext('2d');
		if (!offCtx) return;

		const w_off = 320;
		const h_off = 480;
		offscreenCanvas.width = w_off;
		offscreenCanvas.height = h_off;

		const gridSize = 7;
		let W_main = canvas.clientWidth;
		let H_main = canvas.clientHeight;

		canvas.width = W_main;
		canvas.height = H_main;

		interface Dot {
			x: number;
			y: number;
			gridX: number;
			gridY: number;
			vx: number;
			vy: number;
			size: number;
		}

		let dots: Dot[] = [];
		const springStiffness = 0.05;
		const friction = 0.82;
		const maxDotRadius = gridSize * 0.46;

		interface Particle {
			x: number;
			y: number;
			vx: number;
			vy: number;
			life: number;
			decay: number;
			size: number;
			phase: number;
		}

		let particles: Particle[] = [];
		const maxParticles = 50;

		function initDots() {
			dots = [];
			W_main = canvas.width;
			H_main = canvas.height;
			const cols = Math.floor(W_main / gridSize);
			const rows = Math.floor(H_main / gridSize);

			for (let c = 0; c < cols; c++) {
				for (let r = 0; r < rows; r++) {
					const gx = c * gridSize + gridSize / 2;
					const gy = r * gridSize + gridSize / 2;
					dots.push({
						x: gx + (Math.random() - 0.5) * 3,
						y: gy + (Math.random() - 0.5) * 3,
						gridX: gx,
						gridY: gy,
						vx: 0,
						vy: 0,
						size: 0
					});
				}
			}
		}

		function initParticles() {
			particles = [];
			for (let i = 0; i < maxParticles; i++) {
				const p = {} as Particle;
				respawnParticle(p);
				p.life = Math.random();
				p.y = Math.random() * H_main;
				particles.push(p);
			}
		}

		function respawnParticle(p: Particle) {
			let spawned = false;
			for (let attempts = 0; attempts < 15; attempts++) {
				if (dots.length === 0) break;
				const idx = Math.floor(Math.random() * dots.length);
				const d = dots[idx];
				if (d && d.size > 1.2) {
					p.x = d.x + (Math.random() - 0.5) * 8;
					p.y = d.y + (Math.random() - 0.5) * 8;
					spawned = true;
					break;
				}
			}
			if (!spawned) {
				p.x = Math.random() * W_main;
				p.y = H_main - Math.random() * 40;
			}
			p.vx = (Math.random() - 0.5) * 0.25;
			p.vy = -0.3 - Math.random() * 0.5;
			p.life = 1.0;
			p.decay = 0.004 + Math.random() * 0.008;
			p.size = 0.6 + Math.random() * 1.2;
			p.phase = Math.random() * Math.PI * 2;
		}

		function drawLeaf(
			oCtx: CanvasRenderingContext2D,
			cx: number,
			cy: number,
			w: number,
			h: number,
			angle: number,
			intensity: number
		) {
			oCtx.save();
			oCtx.translate(cx, cy);
			oCtx.rotate(angle);
			oCtx.beginPath();
			oCtx.moveTo(0, 0);
			oCtx.quadraticCurveTo(-w * 0.7, -h * 0.3, -w * 0.25, -h);
			oCtx.lineTo(0, -h * 1.15);
			oCtx.lineTo(w * 0.25, -h);
			oCtx.quadraticCurveTo(w * 0.7, -h * 0.3, 0, 0);

			const col = Math.floor(intensity * 255);
			oCtx.fillStyle = `rgb(${col}, ${col}, ${col})`;
			oCtx.fill();

			const strokeCol = Math.floor(Math.min(255, intensity * 280));
			oCtx.strokeStyle = `rgb(${strokeCol}, ${strokeCol}, ${strokeCol})`;
			oCtx.lineWidth = 1;
			oCtx.stroke();
			oCtx.restore();
		}

		function drawColumn(
			oCtx: CanvasRenderingContext2D,
			xCenter: number,
			colWidth: number,
			yTop: number,
			yBottom: number,
			lightAng: number,
			timeVal: number
		) {
			const capitalHeight = colWidth * 0.75;
			const baseHeight = colWidth * 0.45;
			const shaftWidth = colWidth * 0.68;

			const ambient = 0.12;

			const numFlutes = 6;
			for (let i = 0; i < numFlutes; i++) {
				const fx = xCenter - shaftWidth / 2 + (i / numFlutes) * shaftWidth;
				const fw = shaftWidth / numFlutes;

				const uf = (i + 0.5) / numFlutes;
				const phi = (uf - 0.5) * Math.PI;

				const nx = Math.sin(phi);
				const nz = Math.cos(phi);

				const lx = Math.sin(lightAng);
				const lz = Math.cos(lightAng);

				const diffuse = Math.max(0, nx * lx + nz * lz);
				const intensity = ambient + 0.88 * diffuse;

				const fluteGrad = oCtx.createLinearGradient(fx, 0, fx + fw, 0);
				const colCenter = Math.floor(intensity * 255);
				const colEdge = Math.floor(intensity * 255 * 0.45);

				fluteGrad.addColorStop(0, `rgb(${colEdge}, ${colEdge}, ${colEdge})`);
				fluteGrad.addColorStop(0.4, `rgb(${colCenter}, ${colCenter}, ${colCenter})`);
				fluteGrad.addColorStop(1, `rgb(${colEdge}, ${colEdge}, ${colEdge})`);

				oCtx.fillStyle = fluteGrad;
				oCtx.fillRect(fx, yTop + capitalHeight, fw, yBottom - baseHeight - (yTop + capitalHeight));
			}

			const numSteps = 3;
			const stepHeights = [baseHeight * 0.25, baseHeight * 0.35, baseHeight * 0.4];
			const stepWidths = [shaftWidth * 1.15, shaftWidth * 1.3, shaftWidth * 1.48];
			let currentBaseY = yBottom - baseHeight;

			for (let i = 0; i < numSteps; i++) {
				const sH = stepHeights[i];
				const sW = stepWidths[i];
				const sX = xCenter - sW / 2;

				const stepGrad = oCtx.createLinearGradient(sX, 0, sX + sW, 0);
				const intensityL =
					ambient +
					0.88 *
						Math.max(
							0,
							Math.sin(-Math.PI / 3) * Math.sin(lightAng) +
								Math.cos(-Math.PI / 3) * Math.cos(lightAng)
						);
				const intensityC = ambient + 0.88 * Math.max(0, Math.cos(lightAng));
				const intensityR =
					ambient +
					0.88 *
						Math.max(
							0,
							Math.sin(Math.PI / 3) * Math.sin(lightAng) +
								Math.cos(Math.PI / 3) * Math.cos(lightAng)
						);

				const colL = Math.floor(intensityL * 255);
				const colC = Math.floor(intensityC * 255);
				const colR = Math.floor(intensityR * 255);

				stepGrad.addColorStop(0, `rgb(${colL}, ${colL}, ${colL})`);
				stepGrad.addColorStop(0.4, `rgb(${colC}, ${colC}, ${colC})`);
				stepGrad.addColorStop(1, `rgb(${colR}, ${colR}, ${colR})`);

				oCtx.fillStyle = stepGrad;
				oCtx.fillRect(sX, currentBaseY, sW, sH);

				const topHighlight = Math.floor(Math.min(255, intensityC * 255 * 1.3));
				oCtx.strokeStyle = `rgb(${topHighlight}, ${topHighlight}, ${topHighlight})`;
				oCtx.lineWidth = 1.2;
				oCtx.beginPath();
				oCtx.moveTo(sX, currentBaseY);
				oCtx.lineTo(sX + sW, currentBaseY);
				oCtx.stroke();

				currentBaseY += sH;
			}

			const abacusH = capitalHeight * 0.22;
			const abacusTopW = shaftWidth * 1.5;
			const abacusBotW = shaftWidth * 1.35;

			const abGrad = oCtx.createLinearGradient(
				xCenter - abacusTopW / 2,
				0,
				xCenter + abacusTopW / 2,
				0
			);
			const intL =
				ambient +
				0.88 *
					Math.max(
						0,
						Math.sin(-Math.PI / 3.5) * Math.sin(lightAng) +
							Math.cos(-Math.PI / 3.5) * Math.cos(lightAng)
					);
			const intC = ambient + 0.88 * Math.max(0, Math.cos(lightAng));
			const intR =
				ambient +
				0.88 *
					Math.max(
						0,
						Math.sin(Math.PI / 3.5) * Math.sin(lightAng) +
							Math.cos(Math.PI / 3.5) * Math.cos(lightAng)
					);

			abGrad.addColorStop(
				0,
				`rgb(${Math.floor(intL * 255)}, ${Math.floor(intL * 255)}, ${Math.floor(intL * 255)})`
			);
			abGrad.addColorStop(
				0.4,
				`rgb(${Math.floor(intC * 255)}, ${Math.floor(intC * 255)}, ${Math.floor(intC * 255)})`
			);
			abGrad.addColorStop(
				1,
				`rgb(${Math.floor(intR * 255)}, ${Math.floor(intR * 255)}, ${Math.floor(intR * 255)})`
			);

			oCtx.fillStyle = abGrad;
			oCtx.beginPath();
			oCtx.moveTo(xCenter - abacusTopW / 2, yTop);
			oCtx.lineTo(xCenter + abacusTopW / 2, yTop);
			oCtx.lineTo(xCenter + abacusBotW / 2, yTop + abacusH);
			oCtx.lineTo(xCenter - abacusBotW / 2, yTop + abacusH);
			oCtx.closePath();
			oCtx.fill();

			const neckY = yTop + capitalHeight;
			const neckH = capitalHeight * 0.08;
			const neckW = shaftWidth * 1.05;
			oCtx.fillStyle = `rgb(${Math.floor(intC * 220)}, ${Math.floor(intC * 220)}, ${Math.floor(intC * 220)})`;
			oCtx.fillRect(xCenter - neckW / 2, neckY - neckH, neckW, neckH);

			const leafBaseY = neckY - neckH;
			const leafH = capitalHeight * 0.65;

			drawLeaf(
				oCtx,
				xCenter - shaftWidth * 0.22,
				leafBaseY,
				shaftWidth * 0.28,
				leafH * 0.9,
				-0.22,
				intL
			);
			drawLeaf(
				oCtx,
				xCenter + shaftWidth * 0.22,
				leafBaseY,
				shaftWidth * 0.28,
				leafH * 0.9,
				0.22,
				intR
			);
			drawLeaf(oCtx, xCenter, leafBaseY, shaftWidth * 0.32, leafH, 0, intC);

			const volRad = shaftWidth * 0.26;
			const volY = yTop + abacusH + volRad * 0.7;
			const volXLeft = xCenter - shaftWidth * 0.45;
			const volXRight = xCenter + shaftWidth * 0.45;

			const drawSpiral = (
				cx: number,
				cy: number,
				radius: number,
				dir: number,
				intensity: number
			) => {
				oCtx.strokeStyle = `rgb(${Math.floor(intensity * 255)}, ${Math.floor(intensity * 255)}, ${Math.floor(intensity * 255)})`;
				oCtx.lineWidth = 1.5;
				oCtx.beginPath();
				for (let a = 0; a < Math.PI * 4; a += 0.1) {
					const r = radius * (1 - a / (Math.PI * 5));
					const sx = cx + Math.cos(a * dir - Math.PI / 2) * r;
					const sy = cy + Math.sin(a - Math.PI / 2) * r;
					if (a === 0) oCtx.moveTo(sx, sy);
					else oCtx.lineTo(sx, sy);
				}
				oCtx.stroke();
			};

			drawSpiral(volXLeft, volY, volRad, -1, intL);
			drawSpiral(volXRight, volY, volRad, 1, intR);
		}

		initDots();
		initParticles();

		let animationFrameId: number;
		let lightAngle = 0;

		function animate(time: number) {
			animationFrameId = requestAnimationFrame(animate);

			ctx.fillStyle = '#050505';
			ctx.fillRect(0, 0, W_main, H_main);

			offCtx.fillStyle = '#000000';
			offCtx.fillRect(0, 0, w_off, h_off);

			lightAngle = Math.sin(time * 0.0003) * 0.6;

			drawColumn(offCtx, w_off * 0.22, w_off * 0.18, h_off * 0.08, h_off * 0.92, lightAngle, time);
			drawColumn(offCtx, w_off * 0.78, w_off * 0.18, h_off * 0.08, h_off * 0.92, lightAngle, time);
			drawColumn(offCtx, w_off * 0.5, w_off * 0.15, h_off * 0.22, h_off * 0.92, lightAngle, time);

			const imgData = offCtx.getImageData(0, 0, w_off, h_off);
			const data = imgData.data;

			ctx.beginPath();

			for (let i = 0; i < dots.length; i++) {
				const dot = dots[i];

				const waveX = Math.sin(dot.gridY * 0.015 + time * 0.0003) * 1.2;
				const waveY = Math.cos(dot.gridX * 0.015 + time * 0.0003) * 0.35;
				const tx = dot.gridX + waveX;
				const ty = dot.gridY + waveY;
				let fx = (tx - dot.x) * springStiffness;
				let fy = (ty - dot.y) * springStiffness;

				dot.vx = (dot.vx + fx) * friction;
				dot.vy = (dot.vy + fy) * friction;
				dot.x += dot.vx;
				dot.y += dot.vy;

				const u = dot.gridX / W_main;
				const v = dot.gridY / H_main;
				let ox = Math.floor(u * w_off);
				let oy = Math.floor(v * h_off);
				ox = Math.max(0, Math.min(w_off - 1, ox));
				oy = Math.max(0, Math.min(h_off - 1, oy));

				const idx = (oy * w_off + ox) * 4;
				const brightness = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];

				const tSize = (brightness / 255) * maxDotRadius;

				dot.size += (tSize - dot.size) * 0.15;

				if (dot.size > 0.15) {
					ctx.moveTo(dot.x + dot.size, dot.y);
					ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
				}
			}

			ctx.fillStyle = '#e2e8f0';
			ctx.fill();

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				p.life -= p.decay;

				if (p.life <= 0) {
					respawnParticle(p);
				} else {
					p.vy += (Math.random() - 0.5) * 0.05;
					p.vy = Math.max(-1.0, Math.min(-0.2, p.vy));
					p.y += p.vy;
					p.x += p.vx + Math.sin(time * 0.015 + p.phase) * 0.2;
					if (p.x < 0) p.x = W_main;
					if (p.x > W_main) p.x = 0;

					ctx.fillStyle = `rgba(255, 255, 255, ${p.life.toFixed(2)})`;
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		}

		const resizeObserver = new ResizeObserver(() => {
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;
			initDots();
		});
		resizeObserver.observe(canvas);

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationFrameId);
			resizeObserver.disconnect();
		};
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="mx-auto grid min-h-[90vh] w-full max-w-7xl grid-cols-1 items-stretch gap-8 p-4 select-none md:p-8 lg:grid-cols-12"
>
	<!-- projects -->
	<div
		class="card-style flex h-[550px] flex-col justify-between rounded-lg border bg-black/40 p-6 shadow-2xl backdrop-blur-md transition-colors duration-500 lg:col-span-5 lg:h-[650px]"
	>
		<div>
			<h2 class="main-list mb-6 text-xl tracking-wider">PROJECTS</h2>
			<ul class="space-y-4 text-base md:text-lg">
				<li>
					<a href="https://github.com/erdospeet11/fkg" target="_blank" rel="noopener noreferrer"
						>FANTASY KOZMOZ LEAGUE</a
					>
				</li>
				<li>
					<a
						href="https://github.com/erdospeet11/beautiful-data-space"
						target="_blank"
						rel="noopener noreferrer">BEAUTIFUL SOLAR FLARE</a
					>
				</li>
				<li>
					<a
						href="https://github.com/erdospeet11/autobattler-simulator"
						target="_blank"
						rel="noopener noreferrer">AUTOBATTLER</a
					>
				</li>
				<li>
					<a
						href="https://github.com/erdospeet11/NodeFlow"
						target="_blank"
						rel="noopener noreferrer">NODEFLOW</a
					>
				</li>
				<li><a href="/webgpu">WEBPGU RENDERING</a></li>
			</ul>
		</div>
	</div>

	<!-- canvas -->
	<div
		class="card-style flex h-[550px] flex-col justify-between rounded-lg border bg-black/40 p-6 shadow-2xl backdrop-blur-md transition-colors duration-500 lg:col-span-7 lg:h-[650px]"
	>
		<div
			class="canvas-wrapper relative h-full w-full overflow-hidden rounded border border-zinc-900/80 bg-black/90"
		>
			<canvas bind:this={canvasEl} class="block h-full w-full"></canvas>
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'JetBrains Mono', monospace;
		background-color: #050505;
		border-width: 0;
		font-weight: bold;
		color: #e2e8f0;
		transition:
			background-color 0.5s ease,
			color 0.5s ease;
	}

	.card-style {
		border-color: rgba(255, 255, 255, 0.15);
	}

	.canvas-wrapper {
		border-color: rgba(255, 255, 255, 0.15);
	}

	.main-list {
		list-style-type: '/';
		padding-left: 0rem;
		font-weight: 800;
	}

	ul {
		list-style-type: '[ ]';
		padding-left: 1.5rem;
	}

	li {
		padding-left: 0.5rem;
	}

	a {
		color: #e2e8f0;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	a:hover {
		color: white;
		text-decoration: underline;
	}
</style>
