import { renderCalendar } from "./renderCalendar";

let currentDate = new Date();

renderCalendar(currentDate);

/*
const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" }],
  },
];
*/


let preBtn=document.querySelector(".pre");
let nextBtn=document.querySelector(".next");
let currentMonth = currentDate.getMonth();


preBtn.addEventListener("click", function(){
  currentMonth=(currentDate.getMonth() - 1);;
  let newDate = new Date(
    currentDate.getFullYear(),
    currentMonth,
    currentDate.getDate()
    );
   
 renderCalendar(newDate); 
 currentDate=newDate;
});

nextBtn.addEventListener("click", function(){
  currentMonth=(currentDate.getMonth() + 1);;
  let newDate = new Date(
    currentDate.getFullYear(),
    currentMonth,
    currentDate.getDate()
    );
   
 renderCalendar(newDate); 
 currentDate=newDate;
});