//@ts-check
import uuid from "uuid-js";

export default class CinemaHall {
   constructor(name, rows, cols) {
      this.cinemaHallName = name;
      this.rows = rows;
      this.cols = cols;
      this.filmScreenings = [];
      this.id = uuid.create();
      this.createdAt = new Date();
   }

   addFilmScreening(filmScreening) {
      this.filmScreenings.push(filmScreening);
   }
}