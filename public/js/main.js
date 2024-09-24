const BASE_URL = "http://localhost:5000";
async function fetchData() {
  try {
    // Fetch and display students
    const studentsResponse = await fetch(BASE_URL + "/students");
    const studentsData = await studentsResponse.json();
    const studentsTable = document
      .getElementById("studentsTable")
      .getElementsByTagName("tbody")[0];
    studentsData.forEach((student, index) => {
      const row = `
                <tr>
                    <td class="py-3 px-6">${index + 1}</td>
                    <td class="py-3 px-6">${student.name}</td>
                    <td class="py-3 px-6">${student.adm}</td>
                </tr>
            `;
      studentsTable.innerHTML += row;
    });

    // Fetch and display teachers
    const teachersResponse = await fetch(BASE_URL + "/teachers");
    const teachersData = await teachersResponse.json();
    const teachersTable = document
      .getElementById("teachersTable")
      .getElementsByTagName("tbody")[0];
    teachersData.forEach((teacher, index) => {
      const row = `
                <tr>
                    <td class="py-3 px-6">${index + 1}</td>
                    <td class="py-3 px-6">${teacher.name}</td>
                    <td class="py-3 px-6">${teacher.subject}</td>
                </tr>
            `;
      teachersTable.innerHTML += row;
    });

    // Fetch and display subjects
    const subjectsResponse = await fetch(BASE_URL + "/subjects");
    const subjectsData = await subjectsResponse.json();
    const subjectsTable = document
      .getElementById("subjectsTable")
      .getElementsByTagName("tbody")[0];
    subjectsData.forEach((subject, index) => {
      const row = `
                <tr>
                    <td class="py-3 px-6">${index + 1}</td>
                    <td class="py-3 px-6">${subject.name}</td>
                    <td class="py-3 px-6">${subject.code}</td>
                </tr>
            `;
      subjectsTable.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchData);
