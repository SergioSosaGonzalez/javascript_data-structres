const { QueueClass, PriorityQueueClass } = require('./Data-Structures');

let queue = new QueueClass();
queue.queue('John');
queue.queue('Jack');
queue.queue('Camila');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
console.log("Eliminado",queue.dequeue());
queue.print();

/* let queuePriority = new PriorityQueueClass();
queuePriority.queue("Johsn",2);
queuePriority.queue("Jack",1);
queuePriority.queue("Camila",5);
queuePriority.queue("Camil",3);
queuePriority.queue("Camisl",4);
queuePriority.print();*/