export function outputTeamMember(team, currentDate) {
    let daysInCurrentMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      ).getDate();
    let teamMembers = team.members;

    let outputString;

    for(let i=0; i<teamMembers.length; i++){
        outputString+= `<tr><td>${teamMembers[i].name}</td>`;

        for (let i = 1; i <= daysInCurrentMonth; i++) {
            outputString+=`<td></td>`;
        }

        outputString+=`<td>${teamMembers[i].summary}</td>`
        outputString+= `</tr>`;
    }

    return outputString;
}