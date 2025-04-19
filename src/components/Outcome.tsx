'use client';
import { cn, getLetter, getOutcome, getRandomState } from '@/utils';

type OutcomeProps = {
	state: number[];
	setState: (state: number[]) => void;
	className?: string;
};

export function Outcome({ state, setState, className }: OutcomeProps) {
	const outCome = getOutcome(state);

	return (
		<div
			className={cn(
				'grid grid-cols-2 gap-8  text-sm p-8 w-full max-w-lg h-fit',
				className
			)}
		>
			<div className="flex gap-4 justify-between col-span-2">
				<div>
					<h4 className="text-xl font-bold mb-2 text-zinc-200">
						Your Tragic Fate
					</h4>
					<p className="text-xs text-zinc-400">
						<span>
							Character planner for{' '}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://jonathansfox.com/lcs-new-age/"
								className="underline"
							>
								Liberal Crime Squad: New Age
							</a>
							.
						</span>
						<br />
						<span>Report an issue or contribute </span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/vktrl/your-tragic-fate"
							className="underline"
						>
							on GitHub
						</a>
						.
					</p>
				</div>
				<button
					type="button"
					className="h-8 w-8 p-2 -mx-2 bg-zinc-900 flex items-center justify-center cursor-pointer min-w-0 shrink-0"
					onClick={() => setState(getRandomState())}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-refresh-cw-icon lucide-refresh-cw"
					>
						<title>Refresh Icon</title>
						<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
						<path d="M21 3v5h-5" />
						<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
						<path d="M8 16H3v5" />
					</svg>
				</button>
			</div>
			<div className="text-sm font-bold col-span-2 ">
				{state.map((n) => getLetter(n)).join(' - ')}
			</div>
			<div className="flex flex-col gap-y-2 col-span-2 md:col-span-1">
				{Object.entries(outCome.stats).map(([key, value]) => (
					<div className="flex gap-2 justify-between" key={key}>
						<div className="capitalize">{key}</div>
						<div className="flex gap-2 whitespace-pre justify-end">
							{value.toString().padStart(2, ' ')}
							<span className="opacity-30">
								{`(${Math.floor(value * 0.6 + value)})`.padStart(4, ' ')}
							</span>
						</div>
					</div>
				))}
				{outCome.extras.length && (
					<div className="mt-8">{outCome.extras.join(', ')}</div>
				)}
			</div>
			<div className="flex flex-col col-span-2 md:col-span-1 gap-2">
				{outCome.skills.map(([key, value]) => (
					<div className="flex gap-2 justify-between" key={key}>
						<div className="capitalize">{key}</div>
						<div className="flex gap-2 whitespace-pre justify-end">
							{value.toString().padStart(2, ' ')}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
