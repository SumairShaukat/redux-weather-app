import  React, { useState, useEffect } from 'react';
import { fetchWeather } from '../src/redux-store/actions/fetch-weather';
import { useSelector, useDispatch } from 'react-redux';




function App() {

	const [city, setCity] = useState('');

	const weatherSelector = useSelector((state) => state);
	const dispatch = useDispatch();
	const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));
	const getWeatherInfo = (e) => {
		e.preventDefault();
		if (city === '') {
			console.log('no city to searcch for');
		} else {
			getWeatherInfoAction(city);
			
		}
	};
   
     useEffect(() => {
       console.log(weatherSelector);
	 },[weatherSelector] )
    

  return (
		<>
			<div className="App">
				<h1>Weather App</h1>
				<p>powered by react</p>
			</div>
			<main>
				<form onSubmit={getWeatherInfo}>
					<div className="control">
						<input
							type="text"
							name="name"
							onChange={(e) => setCity(e.target.value)}
						/>
						<input type="submit" value="check weather" />
					</div>
				</form>
			
			</main>
		</>
	);
}

export default App;
