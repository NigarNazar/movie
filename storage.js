class Storage {
    static StorageToFromAdd(newFilm) {
        let movie = this.StorageFromTo()
        movie.push(newFilm);
        localStorage.setItem("movie", JSON.stringify(movie));
    }

    static StorageFromTo() {

        let movie
        if (localStorage.getItem('movie') === null) {
            movie = []
        }
        else {
            movie = JSON.parse(localStorage.getItem('movie'))
        }

        return movie
    }

    static deleteFromStorageAdd(movieTitle) {
        let movie = this.StorageFromTo()
        movie.forEach((movies, index) => {
            if (movies.title === movieTitle) {
                movie.splice(index, 1)
            }
        });

        localStorage.setItem("movie", JSON.stringify(movie));
    }


    static StorageClearAllFrom() {
        localStorage.removeItem('movie');
    }
}

