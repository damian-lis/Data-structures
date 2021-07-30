// 1. Hash Tables converts string keys to hash through hash fns
// 2. When we have two identical strings its provides to so-called collision
// 3. In hash table index store an information
// 4. Hash tables are usually used to implement objects

const hash = (string, max) => {
  let hash = 0;

  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  return hash % max;
};

const hashTable = function () {
  const storage = [];
  const storageLimit = 4;
  //the storageLimit give us a range beteen 0 and 3 in related to the number of buckets

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    const index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [key, value];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        // In this case storage[index] is not undefined so we iterate on the storage[index].length and whe check on each iteration if the first pair includes the same key as we passed. If is true to the value of this key is replaced by passed value.
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
        //When during iteration nothing is inserted then to storage[index] is passing a new pair key-value in array
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    }
  };

  this.remove = function (key) {
    const index = hash(key, storageLimit);

    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    const index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

const ht = new hashTable();

ht.add("morek", "dog");
ht.add("dijon", "cat");

ht.print();
