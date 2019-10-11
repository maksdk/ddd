//@ts-check
import uuid from "uuid-js";
import AppEntity from "./AppEntity";

export default class Film extends AppEntity{
   constructor(name, duration) {
      super();

      this.filmName = name;
      this.duration = duration;
      this.id = uuid.create();
      this.createdAt = new Date();
   }
}