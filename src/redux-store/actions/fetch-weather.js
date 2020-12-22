export const FETCH_WEATHER = 'FETCH_WEATHER ';
export const fetchWeather = (city) => {
	return function (dispatch) {
		fetch(
			`http://api.weatherstack.com/current?access_key=eb6ef0c583617c203c3125b25068b03e&query=${city}`
		)
			.then((res) => {
				return res.json();
			})
			.then((JSONres) => {
				console.log('jsonres', JSONres);
				dispatch({
					type: FETCH_WEATHER,
					payload: JSONres,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
