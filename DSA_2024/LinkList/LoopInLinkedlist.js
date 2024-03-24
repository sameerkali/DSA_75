class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

class linklist {
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}

// const linklist2 = new linklist();
// linklist.addFirst(2);
// linklist.addFirst(3);
// console.log(linklist2)