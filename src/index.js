import { Calendar } from "./components/calendar";
import { ModalForm } from "./components/modalForm";
import { ModalLoader } from "./components/modalLoader";
import { ModalError } from "./components/modalError";
import { departmentTeams } from "./data";

let calendar = new Calendar(departmentTeams);
calendar.render();
const modalLoader = new ModalLoader({
  parentSelector:"#app",
  dayFrom:new Date(),
  dayTo:new Date(2020,11,12),
  closeOnBackdrop:false,
  swap:false,
  selectItems:departmentTeams.teams[0].members,
  options: departmentTeams.options
});
const modalError = new ModalError({
  parentSelector:"#app",
  dayFrom:new Date(),
  dayTo:new Date(2020,11,12),
  closeOnBackdrop:true,
  swap:false,
  selectItems:departmentTeams.teams[0].members,
  options: departmentTeams.options
});
let modal;
modalLoader.render();

modalError.render();

modalLoader.show();

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify(departmentTeams),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => 
  {
    setTimeout(() => {
      modalLoader.hide();
      modal = new ModalForm({
        parentSelector:"#app",
        dayFrom:new Date(),
        dayTo:new Date(2020,11,12),
        closeOnBackdrop:true,
        swap:true,
        selectItems:json.teams[0].members,
        options: json.options,
        loadingHandler: modalLoader,
        errorHandler: modalError
      });
      modal.render();
      modal.show();
    }, 2000);
  });





// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify(departmentTeams),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
