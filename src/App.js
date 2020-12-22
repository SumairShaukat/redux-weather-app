import React from 'react';
import { Provider } from 'react-redux';
import store from '././redux-store/store';

function App() {
  return (
		<Provider store={store}>
			<div className="App">
				<h1>Weather App</h1>
				<p>powered by react</p>
			</div>
			<main>
				<p>The main content</p>
			</main>
		</Provider>
	);
}

export default App;
