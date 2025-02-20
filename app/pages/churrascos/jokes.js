import { JokesService } from "../../services/jokes-service.js";

window.onload = function() {
    let joke = new JokesService();

    joke.listJokes()
    .then((jokes) => {
        console.log(jokes);

        const jokeArea = document.getElementById('joke-area');

        jokeArea.innerHTML = '';

        let jokeField = `
        <div class="container bg-light">
                <div class="col sm-12">
                    <div class="joke-input">${jokes}</div>
                </div>
        </div>`;
        

        jokeArea.innerHTML = jokeField;
    })
    .catch((error) => {
        alertify.error('Não foi possível gerar uma piada.');
    })
}