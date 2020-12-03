import { renderTeamMember } from "./renderTeamMember";
import { dateFormatter } from "./utils"

export function renderTeam(currentDate, departmentTeams){

    const outputTeam = document.querySelector('.outputTeam');
    let daysInCurrentMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
    ).getDate();



    for(let i = 0; i < departmentTeams.length; i++){
        let teamBody = document.createElement('tr');
        teamBody.classList.add('team-body');
        teamBody.innerHTML = `
            <td class = "team-row team-row--first">
                <p class="team-name">${departmentTeams[i].name}</p>
            </td>
        `;
        for(let i = 1; i <= daysInCurrentMonth + 1; i++){
            
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
            teamBody.innerHTML += `
                <td class="team-day team-day--weekend"></td>
            `;
            }
            else{
            teamBody.innerHTML += `
                <td class="team-day team-day--first"></td>
            `;
            }
            
        }

        teamBody.innerHTML += renderTeamMember(departmentTeams[i], currentDate);

        outputTeam.appendChild(teamBody);
    }

}