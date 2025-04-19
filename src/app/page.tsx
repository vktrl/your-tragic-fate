import Main from '@/components/Main';
import { getRandomState } from '@/utils';

export default function Home() {
	const initialState = getRandomState();

	return <Main initialState={initialState} />;
}
