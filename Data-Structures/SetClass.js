class SetClass {
    constructor(){
        this.items = {}
    }

    has(value) {
        return this.items.hasOwnProperty(value)
    }

    add (value) {
        if(!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }

    remove (value) {
        if(this.has(value)){
            delete this.items[value];
            return true;
        }
        return false;
    }

    clear () {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length;
    }

    sizeLegacy() {
        let cont = 0;
        for (let key in this.items){
            if(this.items.hasOwnProperty(key))
            ++cont;
        }
        return cont;
    }

    values() {
        let values = [];
        for (let i=0, keys=Object.keys(this.items); i<keys.length; i++) values.push(this.items[keys[i]]);
        return values;
    }

    valuesLegacy() {
        let values = [];
        for(let key in this.items) {
            if(items.hasOwnProperty(key)) { //{8}
                values.push(items[key]);
            }
        }
        return values;
    }
    
    union (otherSet) {
        let unionSet = new SetClass()
        let values = this.values();
        for (let i=0; i<values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values();
        for (let i=0; i<values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet;
    }

    interseccion(otherSet) {
        let intersectionSet = new SetClass();
        let values = this.values();
        for (let i=0; i<values.length; i++){ 
            if (otherSet.has(values[i])) {    
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    difference (otherSet) {
        let differenceSet = new SetClass();
        let values = this.values();
        for (let i=0; i<values.length; i++){ 
            if (!otherSet.has(values[i])) {    
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    subset (otherSet) {
        if (this.size() > otherSet.size()){
            return false;
        } else {
            let values = this.values();
            for (let i=0; i<values.length; i++){
                if (!otherSet.has(values[i])){
                    return false;
                } 
            }
            return true;
        }
    }
}

module.exports.SetClass = SetClass;