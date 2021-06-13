class QueueClass {
    constructor (){
        this.item = [];
    }

    queue (element){
        this.item.push(element);
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
        console.log(this.item.toString());
    }
}

module.exports.QueueClass = QueueClass;