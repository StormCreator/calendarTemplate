export const departmentTeams = {
  teams: [
    {
      name: "Frontend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      members: [
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "08.12.2020", endDate: "18.12.2020", type: "Paid" },
            { startDate: "20.09.2020", endDate: "22.09.2020", type: "Paid" },
          ],
        },
        {
          name: "FE_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
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
    {
      name: "Backend Team",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "BA_Team_User1",
          vacations: [
            { startDate: "15.12.2020", endDate: "22.12.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "BA_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Managers",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "MA_Team_User1",
          vacations: [
            { startDate: "22.12.2020", endDate: "25.12.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "MA_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      name: "Designers",
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          name: "DE_Team_User1",
          vacations: [
            { startDate: "10.12.2020", endDate: "18.12.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
        {
          name: "DE_Team_User1",
          vacations: [
            { startDate: "20.02.2020", endDate: "22.02.2020", type: "UnPaid" },
            { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
          ],
        },
      ],
    },
  ],
  options: ["Paid", "Unpaid"],
};
