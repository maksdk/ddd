//@ts-check
import uuid from "uuid-js";
import AppEntity from "./AppEntity";

export default class CinemaHall extends AppEntity {
   constructor(name, rows, cols) {
      super();
      
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