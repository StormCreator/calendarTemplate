import { Calendar } from "./components/Calendar";
import { departmentTeams } from "./data";

const calendar = new Calendar(departmentTeams);
calendar.render();
