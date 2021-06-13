const { LinkingListClass,DoubleLinkingListClass } = require('./Data-Structures');

let list = new LinkingListClass();
list.append(10);
list.append(15);
list.append(45);
list.append(44);
list.append(46);
list.append(40);
console.log(list.size());
/*let doubleLinkList = new DoubleLinkingListClass();
doubleLinkList.append(15);
doubleLinkList.insert(0,2);
doubleLinkList.print();*/
