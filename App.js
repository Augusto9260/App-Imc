import React from 'react';
import Routes from './src/Routes/Routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<>
			<StatusBar style='dark' />
			<Routes />
		</>
	);
}