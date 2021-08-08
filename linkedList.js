// Linked list:

// 1. Dynamic size
// 2. Efficient insertions and deletions
// 3. No random access
// 4. No waste of memory

// Compare to array:
// 1. Fixed size
// 2. Inefficient insertions and deletions
// 3. Random access i.e. efficient indexing
// 4. May result in much memory waste

// General notes
// Each node has head and points to the next node head

function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    const node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  };

  this.addAt = function (index, element) {
    const node = new Node(element);

    let previousNode;
    let currentNode = head;
    let currentIndex = 0;

    if (index > length) return false;

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    let previousNode;
    let currentNode = head;
    let currentIndex = 0;

    if (index < 0 || index >= length) return null;

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

const linkedList = new LinkedList();

linkedList.add("Damian");
linkedList.add("Kasia");
linkedList.add("Mateusz");

// --------------------------------------------------------------------------------

class LinkedList2 {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
    // Its a extra convinient to store the tails becouse we can have quick access to the last element
  }

  append(value){
    const newNode = {value: value, next:null}
    if(this.tail){
      this.tail.next = newNode
      // Here we update the next node of the last element of the list
    }
    this.tail = newNode
    // Here we update the last element of the list
    if(!this.head){
      this.head = newNode
    }
  }

  prepend(value){
    const newNode = {value: value, next:this.head}
    this.head = newNode

    if(!this.tail){
      this.tail = newNode
    }
  }

  insertAfter(value, afterValue){
    const existingNode = this.find(afterValue)

    if(existingNode){
      const newNode = {value: value, next:existingNode.next}
      existingNode.next = newNode
    }
  }

  find(){
    if(!this.head){
      return null
    }

    const newNode = {value: value, next:null}

    let currNode = this.head
    while(currNode){
     if(currNode.value === value){
      return currNode
     }
     currNode = currNode.next
    }

    return null
  }

  delete(value){
    if(!this.head){
      return null
    }

    while(this.head && this.head.value === value){
      // We introduced here while loop becouse after deleting head node the next node would have the same value as previons node
      this.head = this.head.next
    }

    let currNode = this.head
    while(currNode.next){
      if(currNode.next.value === value){
        currNode.next = currNode.next.next
      }else{
        currNode = currNode.next
      }
    }

    if(this.tail.value === value){
      this.tail = currentNode
    }

  }

  toArray(){
    const elements = []

    let currNode = this.head
    while(currNode){
      elements.push(currNode)
      currNode = currNode.next
    }

    return elements
  }
}

const linkedList2 = new LinkedList2()

linkedList2.append(1)
linkedList2.append(2)
linkedList2.append(3)
linkedList2.prepend(5)

console.log(linkedList2.toArray())

// Few comments:
// - the main reason for using this kind of data structure is memory managment. You didn't have to specify (occupy) the size in advance,
// - nowadays, JS has dynamic arrays (dynamic resizing built in) and memory isn't really the primary issue in js apps,
// - linked list can be useful if you do a lot of inserions at the begining of lists - linked lists are faster than arrays at this

// Time complexity compare to arrays:
//                           Linked list             Arrays
// Element access:             O(n)                  O(1) <= advantage!!!
// Inserion at end:            O(1)                  O(1)
// Inserion at begining:       O(1) <= advantage!!!  O(n) <= becouse all index of the array must move 
// Insetion in the middle:  Search time + O(1)       O(n)
// Search elements:            O(n)                  O(n)


