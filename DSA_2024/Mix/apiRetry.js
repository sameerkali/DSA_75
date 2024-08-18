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
  const api = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await api.json();
  console.log(data);
};

fetchTheData();


/*
// Let's fetch the data with a retry mechanism
const fetchTheData = async (retries = 3, delay = 3000) => {
  try {
    console.log("Attempting API call...");
    await apicall();
  } catch (error) {
    console.log(`Something went wrong: ${error.message}`);
    if (retries > 0) {
      console.log(`Retrying API call in ${delay / 1000} seconds... (${retries} retries left)`);
      setTimeout(async () => {
        await fetchTheData(retries - 1, delay);
      }, delay);
    } else {
      console.log("All retries failed.");
    }
  }
};

const apicall = async () => {
  try {
    const api = await fetch("https://xjsonplaceholder.typicode.com/users"); // Intentional wrong URL for demonstration
    if (!api.ok) {
      throw new Error(`HTTP error! Status: ${api.status}`);
    }
    const data = await api.json();
    console.log(data);
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

// Start fetching the data
fetchTheData();

*/