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
}
