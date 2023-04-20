class UI {
    static UiToFromAdd(newMovie) {
        const films = document.querySelector(".films");

        films.innerHTML += `
         <tbody>
                    <td><img src="${newMovie.url}" alt=""></td>
                    <td class><span>${newMovie.title}</span></td>
                    <td><a href="#" id="btn-btn">Delete</i></a></td>
                </tbody> 
        `
    }

    static ShowAlertUiTo(type, message) {
        const cardshow = document.querySelector('.card-show');
        const div = document.createElement('div');
        div.className = `alert alert-${type}`
        div.textContent = message
        div.style.width = "300px"
        cardshow.appendChild(div);

        setTimeout(() => {
            div.remove()
        }, 1000);

    }
    static deletFromUiAdd(movie) {
        movie.parentElement.parentElement.remove();
    }
    static movieUiAddToFrom(newMovie) {
        let movies = document.querySelector(".films");
        newMovie.forEach((movie) => {
            movies.innerHTML += `
        <tbody>
        <td><img src="${movie.url}" alt=""></td>
        <td class =><span>${movie.title}</span></td>
        <td><a href="#" id="btn-btn">Delete</i></a></td>
    </tbody> 
        `
        });
    }

    static clearAllUiFrom() {
        let movies = document.querySelector('.films');

        while (movies.firstElementChild !== null) {
            movies.firstElementChild.remove();
        }


    }


}
