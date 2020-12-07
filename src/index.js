// import { Calendar } from "./components";
// import { Table } from "./components";
import { Calendar } from "./components/calendar";
import { departmentTeams } from "./data";


const calendar = new Calendar();
calendar.render();


// const calendar = new Calendar("#app","div","month-picker");

// const table = new Table("#app","table","table",departmentTeams);

// window.calendar = calendar;

// setTimeout(() => calendar.render(), 0);
// setTimeout(() => table.render(), 0);



fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify(departmentTeams),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
