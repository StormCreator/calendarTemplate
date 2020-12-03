import { renderTeamMember } from "./renderTeamMember";

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
            <td class = "team-row">
                <p class="team-name">${departmentTeams[i].name}</p>
            </td>
        `;
        for(let i = 1; i <= daysInCurrentMonth + 1; i++){
            teamBody.innerHTML += `
                <td class="team-day"></td>
            `
        }

        teamBody.innerHTML += renderTeamMember(departmentTeams[i], currentDate);

        outputTeam.appendChild(teamBody);
    }

}