export const FETCH_WEATHER = 'FETCH_WEATHER ';
export const fetchWeather = (city) => {
	return function (dispatch) {
		fetch(`http://api.weatherstack.com/current?
        key=eb6ef0c583617c203c3125b25068b03e=${city}`)
			.then((res) => {
				return res.json();
			})
			.then((JSONres) => {
				dispatch({
					type: 'FETCH_WEATHER',
					payload: JSONres,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
