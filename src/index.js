import { renderCalendar } from "./renderCalendar";
import { renderTeam } from "./renderTeam";

const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    colorTheme: "blue",
    members: [{ name: "FE_Team_User1", summary: 0 }],
  },
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    colorTheme: "lightblue",
    members: [{ name: "FE_Team_User1", summary: 0},{ name: "FE_Team_User2", summary: 0}],
  },
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    colorTheme: "red",
    members: [{ name: "FE_Team_User1", summary: 0},{ name: "FE_Team_User1", summary: 0},{ name: "FE_Team_User1", summary: 0}],
  },
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    colorTheme: "orange",
    members: [{ name: "FE_Team_User1", summary: 0},{ name: "FE_Team_User1", summary: 0},{ name: "FE_Team_User1", summary: 0},{ name: "FE_Team_User1", summary: 0}],
  },
];

let currentDate = new Date();
let preBtn=document.querySelector(".pre");
let nextBtn=document.querySelector(".next");
let currentMonth = currentDate.getMonth();
const outputCalendar = document.querySelector(".outputCalendar");


renderCalendar(currentDate);
renderTeam(currentDate, departmentTeams);



preBtn.addEventListener("click", function(){
  currentMonth=(currentDate.getMonth() - 1);
  let newDate = new Date(
    currentDate.getFullYear(),
    currentMonth,
    currentDate.getDate()
    );
  renderCalendar(newDate);
  renderTeam(newDate, departmentTeams);  
  currentDate=newDate;
});

nextBtn.addEventListener("click", () => {
  currentMonth= (currentDate.getMonth() + 1);
  let newDate = new Date(
    currentDate.getFullYear(),
    currentMonth,
    currentDate.getDate()
  );
  renderCalendar(newDate);
  renderTeam(newDate, departmentTeams); 
  currentDate = newDate;
});

let teamArrows = document.querySelectorAll('.team-arrow');
teamArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    console.log('dada');
    if(arrow.parentNode.parentElement.classList.contains('close')){
      arrow.parentNode.parentElement.classList.remove('close');
    }else{
      arrow.parentNode.parentElement.classList.add('close');
    }
  });
});




let addVacation = document.createElement('tr');
  addVacation.classList.add('add-vacation');
  addVacation.innerHTML = `
    <tr class="add-vacation">
      <a href="#" class="add-btn">
        Add Vacation
      </a>
    </tr>
  `;

outputCalendar.insertAdjacentElement("beforebegin", addVacation);

