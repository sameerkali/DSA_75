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

//! secound
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(){
//     this.head = null;
//   }

//   addFirst(data){
//     if (this.head == null) {
//       this.head = new Node(data)
//     }else{
//       let temp = new Node(data);
//       temp.next = this.head;
//       this.head = temp;
//     }
//   }

//   displayAll(){
//     while(this.head != null){
//       console.log(this.head.data);
//       this.head = this.head.next
//     }
//   }
// }

// let a = new LinkedList();

// a.addFirst(2);
// a.addFirst(4);
// a.addFirst(3);

// a.displayAll();

// //! third

// class Node{
//   constructor(data){
//     this.data = data;
//     this.next= null;
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null;
//   }
//   addFirst(data){
//     if(this.head==null){
//       this.head = new Node(data);
//     }else{
//       let temp = new Node(data);
//       temp.next = this.head;
//       this.head = temp;
//     }

//     // console.log(this.head);
//   }
//   Display(){
//     while(this.head != null){
//       console.log(this.head.data);
//       this.head = this.head.next;
//     }
//   }
// }

// let list = new LinkedList();
// list.addFirst(2)
// list.addFirst(2)
// list.addFirst(2)
// list.Display()

//* fourth

// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null;
//   }
//   addFirst(data){
//     if(this.head == null){
//       this.head = new Node(data)
//     }else{
//       let temp = new Node(data);
//       temp.next = this.head
//       this.head = temp
//     }
//   }
//   displayAll(){
//     while(this.head != null){
//       console.log(this.head.data)
//       this.head = this.head.next;
//     }
//   }
//   removeFirst(){
//     if(this.head === null){
//       return
//     }
//     this.head = this.head.next;
//   }
//   addlast(){

//   }
// }
// let a = new LinkedList();
// a.addFirst(3)
// a.addFirst(2)
// a.addFirst(1)
// a.removeFirst()
// a.displayAll()

//! fifth

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   addFirst(data) {
//     if (this.head == null) {
//       this.head = new Node(data);
//     } else {
//       let temp = new Node(data);
//       temp.next = this.head;
//       this.head = temp;
//     }
//   }
//   removeFirst(){
//     if(this.head == null) return
//     this.head = this.head.next;
//   }

//   displayAll() {
//     while (this.head != null) {
//       console.log(this.head.data);
//       this.head = this.head.next;
//     }
//   }
// }

//! sixth

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null;
//   }
//   addFirst(data){
//     if(this.head == null){
//       this.head = new Node(data)
//     }else{
//       let temp = new Node(data);
//       temp.next = this.head;
//       this.head = temp;
//     }
//   }
//   removeFirst(){
//     if(this.head == null) return
//     this.head = this.head.next
//   }
//   displayAll(){
//     while(this.head != null){
//       console.log(this.head.data);
//       this.head = this.head.next;
//     }
//   }
// }

// //! seventh
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addFirst(data) {
//     if (this.head == null) {
//       this.head = new Node(data);
//     } else {
//       let temp = new Node(data);
//       temp.next = this.head;
//       this.head = temp;
//     }
//   }
//   displayAll() {
//     while(this.head != null) {
//       console.log(this.head.data)
//       this.head = this.head.next;
//     }
//   }
//   removeFirst() {
//     if(this.head == null) return
//     this.head = this.head.next;
//   }
// }

// new attempt

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    if (this.head == null) {
      this.head = new Node(data);
    } else {
      let temp = new Node(data);
      temp.next = this.head;
      this.head = temp;
    }
  }
  displayAll() {
    while (this.head != null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  removeFirst() {
    if (this.head == null) return;
    this.head = this.head.next;
  }
}

let a = new LinkedList();
a.addFirst(3);
a.addFirst(2);
a.addFirst(1);
a.addFirst(1);
a.addFirst(1);
a.displayAll();
a.displayAll();
