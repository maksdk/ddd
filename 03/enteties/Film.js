//@ts-check
import uuid from "uuid-js";

export default class Film {
   constructor(name, duration) {
      this.filmName = name;
      this.duration = duration;
      this.id = uuid.create();
      this.createdAt = Date();
   }
}