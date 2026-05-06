// function getData() {
//     return new Promise((resolve, reject) => {
//         if (2 > 3) {
//             setTimeout(() => {
//                 resolve("Data received");
//             }, 2000);
//         } else {
//             reject("not working");
//         }
//     });
// }

// // API Fetch
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json())
//     .then(data => data.filter(d => d.id % 2 === 0))
//     .then(data => data.map(d => {
//         return {
//             ...d,
//             title: "Aaryan " + d.title
//         };
//     }))
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));

// // Calling getData()
// getData()
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));

// console.log("test");



fetch("https://api.restful-api.dev/objects/4")
 .then(response => {
   if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
   return response.json();
 })
 .then(data => console.log(data))
 .catch(err => console.error(err));