const DEFAULT_ERROR_MESSAGE =
	'Une erreur est survenue, veuillez réessayez ultérieurement.';
const URL = 'https://xlmd94l53b.execute-api.eu-west-2.amazonaws.com/api';

export const GetRestaurantsFromLoc = (lat: number, long: number) => {
	return fetch(`${URL}?lat=${lat}&long=${long}`)
		.catch(() => {
			throw DEFAULT_ERROR_MESSAGE;
		})
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			if (response.statusCode === 200) {
				return response.restaurants;
			}
			throw response.errorMessage ?? DEFAULT_ERROR_MESSAGE;
		});
};
