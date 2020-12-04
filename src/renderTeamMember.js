import { dateFormatter } from "./utils"

export function renderTeamMember(team, currentDate) {
    let daysInCurrentMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      ).getDate();
    let teamMembers = team.members;

    let outputString = '';

    for(let i=0; i<teamMembers.length; i++){
        outputString+= `
            <tr>
                <td class = "team-row">
                    <p class = "team-member">${teamMembers[i].name}</p>
                </td>
            
        `;

        for (let i = 1; i <= daysInCurrentMonth; i++) {
            
            let chosenDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                i,
              );
            let [dayName, , date] = dateFormatter
            .format(chosenDate)
            .replace(",", "")
            .split(" ");

            if(dayName == "Sat" || dayName == "Sun"){
                outputString+=`
                <td class="team-day team-day--weekend"></td>
                `;
            }
            else{
                outputString+=`
                <td class="team-day"></td>
                `;
            }
        }

        outputString+= `<td class="member-summary">${teamMembers[i].summary}</td></tr>`;
    }

    return outputString;
}