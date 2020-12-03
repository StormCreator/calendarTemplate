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

        for (let i = 1; i <= daysInCurrentMonth + 1; i++) {
            outputString+=`<td class="team-day"></td>`;
        }

        outputString+= `</tr>`;
    }

    return outputString;
}