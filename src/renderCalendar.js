import { dateFormatter } from "./utils";

export function renderCalendar(currentDate) {
  const outputCalendar = document.querySelector(".outputCalendar");
  let outputCalendarHTML = "";
  const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const chosenMonth = document.querySelector(".chosenMonth");
  chosenMonth.innerHTML = dateFormatter.format(new Date(currentDate)).replace(",", "").split(" ")[1];

  for (let index = 1; index <= daysInCurrentMonth; index++) {
    const chosenDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), index);
    const [dayName, , date] = dateFormatter.format(chosenDate).replace(",", "").split(" ");

    const isWeekend = dayName === "Sat" || dayName === "Sun";
    outputCalendarHTML += `<td class="outputItem ${isWeekend ? "weekend" : ""}">
        <span class="outputDay">${dayName.slice(0, -1)}</span> 
        <span class="outputDate">${date}</span>
      </td>`;
    if (index === daysInCurrentMonth) {
      outputCalendarHTML += `
        <td class="outputItem">
          <span class = "outputDay">Sum</span>
        </td>
      `;
    }
  }
  outputCalendar.innerHTML = outputCalendarHTML;
}
