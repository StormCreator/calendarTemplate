import { renderCalendar } from "./renderCalendar";
import { renderTeam } from "./renderTeam";

const departmentTeams = [
  {
    name: "Frontend Team",
    percentageOfAbsent: 0,
    members: [{ name: "FE_Team_User1" }],
  },
];

let currentDate = new Date();

renderCalendar(currentDate);
renderTeam(currentDate, departmentTeams);




