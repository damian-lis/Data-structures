function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Damian", 2]);
pq.enqueue(["Kasia", 3]);
pq.enqueue(["Mateusz", 1]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();

// Lessons:
// In the case of PriorityQueue we have method enqueue when we have the following logic:
// 1. When we dont have values in array then we push first element
// 2. When we have elements, we must through iteration check each values priority and compare it to passed element. In the case when the passed element through iteration have less prior than iterate element then we put it to the array by splice method
// 3. When the element has bigger prior than each elements in array then we add it to the end of the array
