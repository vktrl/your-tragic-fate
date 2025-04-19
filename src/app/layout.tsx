import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
	title: 'Your Tragic Fate',
	description: 'Character planner for Liberal Crime Squad: New Age',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-zinc-900">
			<body className={'antialiased h-screen overflow-hidden font-mono'}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
