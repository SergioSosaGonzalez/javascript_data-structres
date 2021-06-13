class LinkingListClass {

    constructor(){
        this.length = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element), current;
        if(this.head === null) this.head = node;
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.length ++;
    }

    removeAt (position) {
        if(position > -1 && position< this.length) {
            let current = this.head, previus, index = 0;
            if(position === 0){
                this.head = current.next
            }else {
                while (index++ < position){
                    previus = current;
                    current = current.next;
                }
                previus.next = current.next;
            }
            this.length--;
            return current.element;
        }else {
            return null;
        }
    }

    insert(position, element) {
        if(position > -1 && position< this.length) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
            if(position === 0){
                node.next = current;
                head = node;
            }else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }else return false;
    }

    indexOf(element){
        let current = this.head, index = 0;
        while(current){
            if(element === current.element)
               return index;
            index++;
            current = current.next;
        }
        return -1;
    }

    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length;
    }
    getHead() {
        return this.head;
    }

    toString() {
        let current = this.head,string = '';
        while(current) {
            string += current.element +(current.next ? 'n':'');
            current = current.next;
        }
        return string;
    }
}

function Node (element){
    this.element = element;
    this.next = null;
}

module.exports.LinkingListClass = LinkingListClass;