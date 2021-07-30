// 1. A trie storages the data in steps.
// 2. Each step is an node in trie
// 3. Use for storages the words (to make a string)
// 4. Each step represent single word
// 5. For example we have ba ll/t -> ba is connected with word ball and bat
// 6. We have a map structure in which we have for example key a with the key of a (content of our so-called folder), b with the key of b and so on
// 7.We have this.end which indicates that if the end of the world in structure (when the word is commplete)

const Node = function () {
  this.keys = new Map();
  this.end = false;

  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

const Trie = function () {
  this.root = new Node();

  this.add = function (input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        //   If we are passing fo example word tree, but out trie ahs only a,b,c as first letters then return false
        return false;
      } else {
        node = node.keys.get(word[0]);
        // When out passed word fit to first word in out trie then we are going to the next node and set this next node to the node (we get the node by the word[0])
        word = word.substr(1);
        // Here we cut first word and for example we have end instead of send
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
    // Here when we have the word and this is the end of the trie we return true
  };

  this.print = function () {
    let words = [];
    let search = function (node, string) {
      if (node.keys.size !== 0) {
        // Some letters are in trie
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

const trie = new Trie();
trie.add("ball");
trie.add("bat");

console.log(trie.isWord("ball"));
