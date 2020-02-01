//@ts-check
import uuid from "uuid-js";
import ApplicationEntety from "./ApplicationEntety";

export default class CinemaHall extends ApplicationEntety {
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