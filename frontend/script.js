async function loadStudents() {
    const response = await fetch("http://localhost:5000/students");
    const data = await response.json();

    let table = document.getElementById("studentsTable");
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
        </tr>
    `;

    data.forEach(student => {
        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.id;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.course;
        row.insertCell(3).innerHTML = student.email;
    });
}
