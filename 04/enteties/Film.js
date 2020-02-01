//@ts-check
import uuid from "uuid-js";
import ApplicationEntety from "./ApplicationEntety";

export default class Film extends ApplicationEntety{
   constructor(name, duration) {
      super();

      this.filmName = name;
      this.duration = duration;
      this.id = uuid.create();
      this.createdAt = new Date();
   }
}