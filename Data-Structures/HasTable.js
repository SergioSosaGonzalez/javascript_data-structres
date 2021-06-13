const { LinkingListClass } = require("./index");

class HashTable {

    constructor() {
        this.table = []
    }

    loseloseHashCode (key) {
        let hash = 0;
        for( let i=0; i<key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37;
    }

    put (key, value) {
        const position = this.loseloseHashCode(key);

        if( this.table[position] === undefined) {
            this.table[position] = new LinkingListClass();
        }
        this.table[position].append(new ValuePair(key, value))
    }

    get(key) {
        const position = this.loseloseHashCode(key);
        if( position !== undefined) {
            const current = this.table[position].getHead();
            while(current.next){  //{5}
                if (current.element.key === key){ //{6}
                  return current.element.value; //{7}
                }
                current = current.next;
            }
            if (current.element.key === key){ //{9}
                return current.element.value;
            }
        }
        return undefined;
    }

    remove(key) {
        const position = this.loseloseHashCode(key);
        if (this.table[position] !== undefined){
            const current = this.table[position].getHead();
            while(current.next){
                if (current.element.key === key){ //{11}
                    this.table[position].remove(current.element); //{12}
                    if (this.table[position].isEmpty()){ //{13}
                        this.table[position] = undefined; //{14}
                    }
                    return true; //{15}
                }
                current = current.next;
            }
            if (current.element.key === key){ //{16}
                this.table[position].remove(current.element);
                if (this.table[position].isEmpty()){
                    this.table[position] = undefined;
                }
                return true;
            }
        }
     return false; //{17}
    }

    print() {
        for (let i=0;i<this.table.length; i++) {
            if(this.table[i] !== undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}

function ValuePair (key, value) {
    this.value = key;
    this.key = value;
    this.toString = function () {
        return `[${this.key} - ${this.value}]`
    }
}

module.exports.HasTable = HashTable;