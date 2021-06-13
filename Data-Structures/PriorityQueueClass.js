class PriorityQueueClass {
    constructor (){
        this.item = [];
    }

    queue (element, priority){
        let queueElement = new QueueElement(element, priority);
        let added = false;

        for (let i=0;i<this.item.length; i++) {
            if( queueElement.priority < this.item[i].priority ){
                this.item.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added) this.item.push(queueElement);
    }

    dequeue (){
        return this.item.shift();
    }

    front (){
        return this.item[0];
    }

    isEmpty(){
        return this.item.length === 0;
    }

    size(){
        return this.item.length;
    }

    print(){
        for (let i=0;i<this.item.length;i++){
            console.log(`${this.item[i].element} - ${this.item[i].priority}`)
        }
    }
}

function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
}

module.exports.PriorityQueueClass = PriorityQueueClass;