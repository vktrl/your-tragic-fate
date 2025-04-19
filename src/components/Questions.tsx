'use client';
import { questions } from '../data';
import { cn, getLetter } from '../utils';

export function Questions({
	className,
	state,
	setState,
}: {
	className?: string;
	state: number[];
	setState: (state: number[]) => void;
}) {
	return (
		<div className={cn('flex flex-col gap-10 w-full p-8 ', className)}>
			{questions.map((q, qIdx) => {
				return (
					<div key={q.text}>
						<h2 className="text-base font-semibold mb-4">{q.text}</h2>
						<ul className="flex flex-col gap-3">
							{q.answers.map((a, aIdx) => {
								const isSelected = state[qIdx] === aIdx;
								return (
									// biome-ignore lint/a11y/useKeyWithClickEvents:
									<li
										onClick={() => {
											setState(
												state.map((l, idx) => (idx === qIdx ? aIdx : l))
											);
										}}
										key={a.text}
										className={cn(
											'text-sm flex gap-2 cursor-pointer',
											isSelected ? 'opacity-100 text-zinc-100' : 'opacity-60'
										)}
									>
										<div>{getLetter(aIdx)} -</div>
										<div>
											<div>{a.text}</div>
											<div className={isSelected ? 'text-yellow-200' : ''}>
												{a.result}
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
}
