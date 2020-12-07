import { Calendar } from "./components/calendar";
import { departmentTeams } from "./data";

let calendar = new Calendar(departmentTeams);
calendar.render();


// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify(departmentTeams),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
