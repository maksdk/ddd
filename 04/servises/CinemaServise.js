import ApplicationService from './ApplicationService';
import {
   Film,
   CinemaHall,
   FilmScreening
} from '../entities';

export default class CinemaServise extends ApplicationService {
   createCinemaHall(name, rows, cols) {
      const cinemaHall = new CinemaHall(name, rows, cols);
      this.CinemaHallRepository.save(cinemaHall);
      return cinemaHall;
    }
  
    createFilmScreening(filmId, cinemaHallId, time) {
      const cinemaHall = this.CinemaHallRepository.find(cinemaHallId);
      const film = this.FilmRepository.find(filmId);
      const filmScreening = new FilmScreening(film, cinemaHall, time);
      this.FilmScreeningRepository.save(filmScreening);
      return filmScreening;
    }

   createFilm(name, duration) {
      const film = new Film(name, duration);
      this.FilmRepository.save(film);
      return film;
   }
}