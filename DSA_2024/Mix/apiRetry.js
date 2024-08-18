/*
Implement and explain fetch with retry mechanism with jsonplaceholder api. 


Explain scenario and code both by understanding asynchronous and synchronous task. 



How do you do same thing in react / angular in modern technology
*/

//lets fetch the data first
const fetchTheData = async () => {
  try {
    console.log("we are in try block");
    await apicall();
  } catch (error) {
    console.log("we are in catch block");
    console.log(`something went wrong ${error.message}`);
    console.log("calling api again after 3 seconds");
    setTimeout(() => {
        console.log("insode settimeout");
         apicall();
    }, 3000);
  }
};

const apicall = async () => {
  const api = await fetch("https://xjsonplaceholder.typicode.com/users");
  const data = await api.json();
  console.log(data);
};

fetchTheData();
