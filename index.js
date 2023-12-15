const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes";

// REFERENCES
const submit = document.getElementById("submit");
const root = document.getElementById("root");

// Created div that will show the output once the form is submitted
const div = document.createElement("div");
div.style.margin = "5%";

// Creates function to push input to the main div once we click the submit button
function addPartyInfo(e) {
  e.preventDefault();

  // Collect values from the form
  const Names = document.getElementById("name").value;
  const Dates = document.getElementById("date").value;
  const Times = document.getElementById("time").value;
  const Locations = document.getElementById("location").value;
  const Descriptions = document.getElementById("description").value;

  // Create an object with the collected values
  const eventData = {
    name: Names,
    date: Dates,
    time: Times,
    location: Locations,
    description: Descriptions,
  };

  // Push the object to the partyInfo array
  partyInfo.push(eventData);

  // Display the information in the main div
  div.innerHTML = `<p>Name: ${Names}</p>
                   <p>Date: ${Dates}</p>
                   <p>Time: ${Times}</p>
                   <p>Location: ${Locations}</p>
                   <p>Description: ${Descriptions}</p>`;

  // Append the main div to the root element
  root.appendChild(div);

  // Optional: Log the updated partyInfo array
  console.log("Updated partyInfo:", partyInfo);
}

// Create event listener
submit.addEventListener("click", addPartyInfo);

// Initialize partyInfo array
const partyInfo = [];

// Optional: Log the initial partyInfo array
console.log("Initial partyInfo:", partyInfo);
// //   REFERENCES
// const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes";
// const submit = document.getElementById("submit");
// const root = document.getElementById("root");
// // const output = document.getElementById('output')

// // Created div that will show the output once form is submitted
// const div = document.createElement("div");
// div.style.margin = "5%";

// const pName = document.createElement("p");
// pName.innerHTML = `Name: `;

// const pDate = document.createElement("p");
// pDate.innerHTML = `Date: `;

// const pTime = document.createElement("p");
// pTime.innerHTML = `Time: `;

// const pLocation = document.createElement("p");
// pLocation.innerHTML = `Location: `;

// const pDescription = document.createElement("p");
// pDescription.innerHTML = `Description: `;


// // Create event listener
// submit.addEventListener("click", addPartyInfo);
// // created const variables for value of our information we want from our form
// function addPartyInfo(e) {
//     e.preventDefault();
//     const Names = document.getElementById("name").value;
//     const Dates = document.getElementById("date").value;
//     const Times = document.getElementById("time").value;
//     const Locations = document.getElementById("location").value;
//     const Descriptions = document.getElementById("description").value;

//     // we will take the .value from the const variables above and put them int a function eventData()

//     const eventData = {
//         name: Names,
//         date: Dates,
//         time: Times,
//         location: Locations,
//         description: Descriptions,
//     };
    
//     partyInfo.push(eventData)
    
//     const outputDiv = document.getElementById('output')
//     outputDiv.innerHTML = partyInfo
// }
// // next we will create an array to hold the objects created

// const partyInfo = [];

// // after the array is created we will .push objects from the eventData() function into partyInfo[]

// div.appendChild(pName);
// div.appendChild(pDate);
// div.appendChild(pTime);
// div.appendChild(pLocation);
// div.appendChild(pDescription);
// root.appendChild(output)
// root.appendChild(div);






// // GET all CRUD that we will have to sync later!!
// const getJSON = async () => {
//   try {
//     const response = await fetch(
//       "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes",
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     // need link for response.Json
//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// // need link for getJSON
// getJSON();

// // Link JSON code into delete button to remove object from API
// const deleteJSON = async (info) => {
//   try {
//     // need URL for fetch
//     const response = await fetch("");
//      method:"DELETE"
//      headers: {
//       "Content-Type": "application/json",
//      }
//     console.log("success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// // need URL for deleteJSON
// deleteJSON("");


// // Link JSON code into submit button to add object onto API
// const putJSON = async (user_id, data) => {
//   try {
//     const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/recipes${user_id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response;
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };