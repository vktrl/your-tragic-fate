import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type Skill, questions } from './data';
import type { Stat } from './data';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const letters = ['A', 'B', 'C', 'D', 'E'] as const;

export function getLetter(number: number) {
	return letters[number];
}

export function randomAnswer() {
	return Math.floor(Math.random() * letters.length);
}

export function getRandomState() {
	return Array(10).fill(0).map(randomAnswer);
}

export function getOutcome(state: number[]) {
	const stats: Record<Stat, number> = {
		strength: 5,
		intelligence: 5,
		agility: 5,
		charisma: 5,
		heart: 8,
	};

	const skillMap: { [key in Skill]?: number } = {};

	const extras: string[] = [];

	for (let i = 0; i < state.length; i++) {
		const answer = questions[i].answers[state[i]];

		for (const [key, value] of Object.entries(answer.stats || {})) {
			stats[key as Stat] += value;
		}

		for (const [key, value] of Object.entries(answer.skills || {})) {
			skillMap[key as Skill] = (skillMap[key as Skill] ?? 0) + value;
		}

		if (answer.extra) {
			extras.push(...answer.extra);
		}
	}

	const skills = Object.entries(skillMap).toSorted(([, v1], [, v2]) => v2 - v1);

	return { stats, extras, skills };
}
