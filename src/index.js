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


renderCalendar(currentDate);
renderTeam(currentDate, departmentTeams);


let teamArrows = document.querySelectorAll('.team-arrow');
teamArrows.forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    if(arrow.parentNode.parentElement.classList.contains('close')){
      arrow.parentNode.parentElement.classList.remove('close');
    }else{
      arrow.parentNode.parentElement.classList.add('close');
    }
  });
});