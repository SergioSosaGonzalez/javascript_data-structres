class Dictionary {
    items;
    constructor() {
        this.items = {}
    }

    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value;
    }

    delete(key) {
        if(this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        let values = [];
        for( k in this.items) {
            if(this.has(k)) {
                values.push(this.items[k])
            }
        }
        return values;
    }

    keys() {
        return Object.keys(this.items)
    }

    size() {
        return Object.keys(this.items).length;
    }

    clear() {
        this.items = {}
    }

    getItems() {
        return this.items;
    }
}

module.exports.Dictionary = Dictionary;