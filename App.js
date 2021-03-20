import { StatusBar } from 'react-native';
import React from 'react'
import Home from './src/pages/Home';
import Routes from './src/routes';

export default function App() {
  return (
		<>
			<StatusBar barStyle='light-content' backgroundColor='#D42026' />
			<Routes />
		</>
  );
}
