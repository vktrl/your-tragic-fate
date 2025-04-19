'use client';
import { useState } from 'react';
import { Outcome } from './Outcome';
import { Questions } from './Questions';
type MainProps = {
	initialState: number[];
};

export default function Main({ initialState }: MainProps) {
	const [state, setState] = useState<number[]>(initialState);

	return (
		<main className="flex flex-col md:flex-row overflow-hidden font-mono w-full text-zinc-200 bg-zinc-900">
			<div className="w-full max-h-screen overflow-auto flex flex-col items-end scrollbar scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
				<Outcome state={state} setState={setState} className="" />
			</div>
			<div className="w-full scrollbar scrollbar-track-zinc-900 scrollbar-thumb-zinc-700 md:max-h-screen md:overflow-auto">
				<Questions state={state} setState={setState} className="" />
			</div>
		</main>
	);
}
