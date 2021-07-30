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

