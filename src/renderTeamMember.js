import { dateFormatter } from "./utils";

export function renderTeamMember(team, currentDate) {
  const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const teamMembers = team.members;

  let outputString = "";

  for (const teamMember of teamMembers) {
    outputString += `
            <tr>
                <td class = "team-row">
                    <p class = "team-member">${teamMember.name}</p>
                </td>
            
        `;

    for (let index = 1; index <= daysInCurrentMonth; index++) {
      const chosenDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), index);
      const [dayName, ,] = dateFormatter.format(chosenDate).replace(",", "").split(" ");

      outputString +=
        dayName === "Sat" || dayName === "Sun"
          ? `
                <td class="team-day team-day--weekend"></td>
                `
          : `
                <td class="team-day"></td>
                `;
    }

    outputString += `<td class="member-summary">${teamMember.summary}</td></tr>`;
  }

  return outputString;
}
