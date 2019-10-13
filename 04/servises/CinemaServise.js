import ApplicationService from './ApplicationService';
import {
   Film,
   CinemaHall,
   FilmScreening
} from '../entities';

export default class extends ApplicationService {
   createFilm(name, duration) {
      const film = new Film(name, duration);
      this.FilmRepository.save(film);
      return film;
   }
}