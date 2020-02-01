export default class {
    constructor() {
        this.entities = [];
    }

    save(entity) {
        this.entities.push(entity);
    }

    find(id) {
        return this.entities.find(entity => entity.id === id);
    }
}