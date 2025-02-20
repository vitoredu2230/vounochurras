export class JokesService {
    constructor() {}

    async listJokes() {
        const url = 'https://dad-jokes7.p.rapidapi.com/dad-jokes/joke-of-the-day';
		const options = {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '2983844eefmsh5acfa9f307f927fp164591jsn6a1d47becbb7',
				'x-rapidapi-host': 'dad-jokes7.p.rapidapi.com'
			}
		};

		try {
			const response = await fetch(url, options);
			console.log(response)
			const result = await response.json();
			console.log(result);
			return result.joke;
		} catch (error) {
			console.error(error);
		}
	}
}