//@ts-check
import uuid from "uuid-js";
import ApplicationEntety from "./ApplicationEntety";

export default class FilmScreening extends ApplicationEntety {
   constructor(film, cinemaHall, time) {
      super();
      
      this.film = film;
      this.time = time;
      this.id = uuid.create();
      this.createdAt = new Date();
      this.cinemaHall = cinemaHall;
   }
}