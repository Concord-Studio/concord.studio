import { createSignal, onCleanup, onMount, Show } from "solid-js";

interface Props {
	titles: string[];
	summaries: string[];
}

export default function WorldPreview(props: Props) {
	const [step, setStep] = createSignal(0);
	const [phase, setPhase] = createSignal(-1);
	let root: HTMLElement | undefined;
	let emitTimer: number | undefined;
	let emitPlaying = false;

	const stopEmit = () => {
		emitPlaying = false;
		if (emitTimer !== undefined) {
			clearTimeout(emitTimer);
			emitTimer = undefined;
		}
		setPhase(-1);
	};

	const startEmit = () => {
		if (emitPlaying) return;
		emitPlaying = true;
		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduce) {
			setPhase(2);
			return;
		}
		const beat = (n: 0 | 1 | 2) => {
			if (!emitPlaying) return;
			setPhase(n);
			const wait = n === 2 ? 1200 : 750;
			const next: 0 | 1 | 2 = n === 2 ? 0 : ((n + 1) as 1 | 2);
			emitTimer = window.setTimeout(() => beat(next), wait);
		};
		beat(0);
	};

	onMount(() => {
		const tour = root?.closest(".home-tour");
		if (!tour) return;
		const nodes = [...tour.querySelectorAll<HTMLElement>(".home-step")];
		let frame = 0;

		const apply = (index: number) => {
			if (index === step()) return;
			setStep(index);
			for (const node of nodes) {
				node.classList.toggle("is-active", Number(node.dataset.step) === index);
			}
			if (index === nodes.length - 1) startEmit();
			else stopEmit();
		};

		const stacked = window.matchMedia("(max-width: 55.99rem)");
		const pin = root?.closest<HTMLElement>(".home-pin") ?? null;
		const stepsEl = tour.querySelector<HTMLElement>(".home-steps");

		const layoutPin = () => {
			if (!pin || !stepsEl || !(root instanceof HTMLElement)) return;
			const last = nodes[nodes.length - 1];
			const previewHeight = root.offsetHeight;
			const offset =
				last.getBoundingClientRect().top - stepsEl.getBoundingClientRect().top;
			const narrow = stacked.matches;
			const slack = 40;
			const height = narrow
				? previewHeight + offset - 8 + slack
				: previewHeight + Math.max(0, offset - 12) + slack;
			const margin = narrow ? 8 - offset - slack : 0;
			const nextHeight = `${Math.round(height)}px`;
			const nextMargin = margin ? `${Math.round(margin)}px` : "";
			if (pin.style.height === nextHeight && stepsEl.style.marginTop === nextMargin) {
				return;
			}
			pin.style.height = nextHeight;
			stepsEl.style.marginTop = nextMargin;
		};

		const marker = () => {
			const box = root?.getBoundingClientRect();
			if (!box) return 0;
			return stacked.matches ? box.bottom + 8 : box.top + 12;
		};

		const textBottom = (node: HTMLElement) => {
			const text = node.querySelector(".home-step-text");
			return (text ?? node).getBoundingClientRect().bottom;
		};

		const coverLine = () => {
			const box = root?.getBoundingClientRect();
			if (!box) return 0;
			return stacked.matches ? box.bottom : box.top + 12;
		};

		const update = () => {
			frame = 0;
			const box = root?.getBoundingClientRect();
			const pinBox = pin?.getBoundingClientRect();
			const released =
				!!box &&
				!!pinBox &&
				pinBox.bottom <= box.bottom + 2 &&
				box.bottom < window.innerHeight * 0.25;
			let current = 0;
			if (released) {
				current = nodes.length - 1;
			} else {
				const cover = coverLine();
				for (const node of nodes) {
					if (textBottom(node) <= cover) {
						current = Math.min(
							nodes.length - 1,
							Number(node.dataset.step) + 1,
						);
					}
				}
			}
			apply(current);
		};

		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(update);
		};

		const onClick = (event: Event) => {
			const node = event.currentTarget as HTMLElement;
			const index = Number(node.dataset.step);
			const edge =
				index > 0
					? textBottom(nodes[index - 1])
					: node.getBoundingClientRect().top;
			const delta = edge - (index > 0 ? coverLine() : marker());
			window.scrollBy({ top: delta, behavior: "smooth" });
		};

		const onResize = () => {
			layoutPin();
			onScroll();
		};

		layoutPin();
		const hashId = decodeURIComponent(location.hash.replace(/^#/, ""));
		if (hashId) {
			document.getElementById(hashId)?.scrollIntoView();
		}
		update();
		for (const node of nodes) node.addEventListener("click", onClick);
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		const pinObserver = new ResizeObserver(() => layoutPin());
		if (stepsEl) pinObserver.observe(stepsEl);
		if (root instanceof HTMLElement) pinObserver.observe(root);
		onCleanup(() => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
			for (const node of nodes) node.removeEventListener("click", onClick);
			if (frame) cancelAnimationFrame(frame);
			pinObserver.disconnect();
			stopEmit();
		});
	});

	const x = () => (phase() >= 2 ? 55 : 50);

	return (
		<aside class="home-preview not-content" ref={root}>
			<div class="home-preview-bar">
				<span class="home-preview-dot" />
				<span class="home-preview-dot" />
				<span class="home-preview-dot" />
				<span class="home-preview-title">{props.titles[step()]}</span>
			</div>
			<div class="home-preview-body">
				<svg
					class="home-diagram"
					viewBox="0 0 500 340"
					role="img"
					aria-label={props.summaries[step()]}
				>
					<title>{props.summaries[step()]}</title>
					<defs>
						<marker
							id="home-arrow"
							viewBox="0 0 8 8"
							refX="7"
							refY="4"
							markerWidth="7"
							markerHeight="7"
							orient="auto"
						>
							<path d="M0 0 L8 4 L0 8 Z" class="arrow-head" />
						</marker>
						<marker
							id="home-arrow-emit"
							viewBox="0 0 8 8"
							refX="7"
							refY="4"
							markerWidth="7"
							markerHeight="7"
							orient="auto"
						>
							<path d="M0 0 L8 4 L0 8 Z" class="arrow-head-emit" />
						</marker>
					</defs>

					<g
						classList={{
							"is-hidden": step() < 1,
							"is-dim": step() >= 3,
						}}
					>
						<rect x="8" y="6" width="156" height="32" rx="8" class="shape" />
						<text x="20" y="27" class="label">
							position
						</text>
						<text x="100" y="27" class="muted">
							x y
						</text>
					</g>

					<rect x="8" y="44" width="484" height="288" rx="14" class="world" />
					<text x="24" y="68" class="label">
						World
					</text>

					<g classList={{ "is-hidden": step() < 2 }}>
						<rect x="24" y="86" width="168" height="128" rx="10" class="entity" />
						<text x="38" y="110" class="label">
							Cat
						</text>
					</g>
					<g
						classList={{
							"is-hidden": step() < 2,
							"is-dim": step() >= 4,
						}}
					>
						<rect x="24" y="226" width="168" height="88" rx="10" class="entity" />
						<text x="38" y="276" class="label">
							Rock
						</text>
					</g>

					<g
						classList={{
							"is-hidden": step() < 3,
							"is-changed": phase() >= 2,
						}}
					>
						<rect x="38" y="124" width="140" height="74" rx="8" class="shape" />
						<text x="50" y="148" class="label">
							position
						</text>
						<text x="50" y="174" class="muted x-value">
							x {x()}
						</text>
						<text x="108" y="174" class="muted">
							y 50
						</text>
					</g>

					<g classList={{ "is-hidden": step() < 4 }}>
						<rect x="300" y="86" width="176" height="228" rx="12" class="system" />
						<text x="314" y="112" class="label">
							Movement
						</text>
						<rect
							x="314"
							y="196"
							width="148"
							height="100"
							rx="8"
							class="pool"
							classList={{ "is-changed": phase() >= 1 }}
						/>
						<text x="328" y="226" class="label">
							movers
						</text>
						<text x="328" y="252" class="muted">
							position
						</text>
						<line
							x1="314"
							y1="246"
							x2="192"
							y2="150"
							class="link"
							classList={{ "is-active": phase() >= 1 }}
							marker-end={
								phase() >= 1 ? "url(#home-arrow-emit)" : "url(#home-arrow)"
							}
						/>
					</g>

					<g classList={{ "is-hidden": step() < 5 }}>
						<rect x="314" y="128" width="96" height="36" rx="8" class="event" />
						<text x="340" y="151" class="label">
							move
						</text>
					</g>

					<g classList={{ "is-hidden": phase() < 0 }} class="emit-step">
						<line
							x1="214"
							y1="146"
							x2="310"
							y2="146"
							class="emit"
							marker-end="url(#home-arrow-emit)"
						/>
						<text x="418" y="151" class="emit-label">
							emit
						</text>
					</g>
					<g classList={{ "is-hidden": phase() < 1 }} class="emit-step">
						<line
							x1="362"
							y1="164"
							x2="362"
							y2="196"
							class="emit"
							marker-end="url(#home-arrow-emit)"
						/>
					</g>
				</svg>
			</div>
			<p class="home-sr">
				<Show when={props.summaries[step()]}>{props.summaries[step()]}</Show>
			</p>
		</aside>
	);
}
