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

