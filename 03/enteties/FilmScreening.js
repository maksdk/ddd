//@ts-check
import uuid from "uuid-js";

export default class FilmScreening {
   constructor(film, cinemaHall, time) {
      this.film = film;
      this.time = time;
      this.id = uuid.create();
      this.createdAt = new Date();
      this.cinemaHall = cinemaHall;
   }
}