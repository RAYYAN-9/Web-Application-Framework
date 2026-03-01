// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(value=>{
//     return value.json();//given a array of objects, if not used it give a jason formt ->"console.log(value);" 
// })
// .then(data => {
//     console.log(data);
// }).finally(() => {
//     console.log("Data Fetched.....");
// });

async function fetchData() {
    try {
        const value = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await value.json();
        console.log(data);
        console.log("Data Fetched.....");
    } catch(error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();