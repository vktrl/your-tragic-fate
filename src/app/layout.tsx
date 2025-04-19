import type { Metadata } from 'next';
import './globals.css';

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
			</body>
		</html>
	);
}
