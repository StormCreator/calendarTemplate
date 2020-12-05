<<<<<<< HEAD
import { renderCalendar } from "./renderCalendar";
import { renderTeam } from "./renderTeam";
import { arrowListener } from "./arrowListener";

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
arrowListener();


preBtn.addEventListener("click", function(){
  currentMonth=(currentDate.getMonth() - 1);
  let newDate = new Date(
    currentDate.getFullYear(),
    currentMonth,
    currentDate.getDate()
    );
  renderCalendar(newDate);
  renderTeam(newDate, departmentTeams);
  arrowListener();  
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
  arrowListener();   
  currentDate = newDate;
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

=======
import { Calendar } from "./components";

const departmentTeams = {
  teams: [
    {
      name: "Frontend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      members: [
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.12.2020", endDate: "22.12.2020", type: "Paid" },
            { startDate: "20.11.2020", endDate: "22.11.2020", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Backend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "15.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
  ],
};

const calendar = new Calendar("#app");

window.calendar = calendar;

// setTimeout(() => calendar.render(), 4000);

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify(departmentTeams),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
>>>>>>> upstream/main
