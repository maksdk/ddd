//@ts-check
import uuid from "uuid-js";
import AppEntity from "./AppEntity";

export default class FilmScreening extends AppEntity {
   constructor(film, cinemaHall, time) {
      super();
      
      this.film = film;
      this.time = time;
      this.id = uuid.create();
      this.createdAt = new Date();
      this.cinemaHall = cinemaHall;
   }
}