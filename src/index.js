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




