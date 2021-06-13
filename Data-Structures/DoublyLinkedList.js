class DoubleLinkingListClass {

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    append(element) {
        let node = new Node(element), current, prev;
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        }else {
            current = this.head;
            while(current.next) {
                current = current.next;
                current.prev = current;
            }
            this.tail = node;
            current.next = node;
        }

        this.length ++;
    }
    removeAt (position) {
        if (position > -1 && position < length){
            let current = this.head,
            previous,
            index = 0;
            if (position === 0){
                this.head = current.next; 
                if (length === 1){ 
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length-1){ 
                current = this.tail; 
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index++ < position){ 
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            } 
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    insert(position, element) {
        if(position > -1 && position< this.length) {
            let node = new Node(element),
            current = this.head,
            previous,
            index = 0;
            if(position === 0) {
                if(!this.head){
                    this.head = node;
                    this.tail = node;
                }else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            }else if(position === this.length){
                current = this.tail;     // {3}
                current.next = this.node;
                node.prev = this.current;
                this.tail = node;
            }else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            this.length++;
            return true;
        }else return false;
    }

    print() {
        console.log(this.head);
    }
    
}

function Node (element){
    this.element = element;
    this.next = null;
    this.prev = null;
}

module.exports.DoubleLinkingListClass = DoubleLinkingListClass;