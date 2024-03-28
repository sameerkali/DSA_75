// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }

// class linklist {
//     constructor(){
//         this.head = null;
//     }

//     addFirst(data){
//       if(this.head == null){
//         this.head = new Node(data);
//       }else{
//         let temp = new Node(data);
//         temp.next = this.head;
//         this.head = temp;

//       }
//       console.log(this.head)
//     }
//     display(){}
// }

// let a = new linklist();
// a.addFirst(4)
// a.addFirst(3)
// a.addFirst(2)
// a.addFirst(1)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }


  addFirst(data){
    if (this.head == null) {
      this.head = new Node(data)
    }else{
      let temp = new Node(data);
      temp.next = this.head;
      this.head = temp; 
    }
  }

  
  displayAll(){
    while(this.head != null){
      console.log(this.head.data);
      this.head = this.head.next
    }
  }
}

let a = new LinkedList();

a.addFirst(2);
a.addFirst(4);
a.addFirst(3);

a.displayAll();