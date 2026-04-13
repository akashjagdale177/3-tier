const API_URL = "https://YOUR-BACKEND.onrender.com";

async function loadStudents() {
    const response = await fetch(`${API_URL}/students`);
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

async function addStudent() {

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    const response = await fetch(`${API_URL}/addstudent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            course,
            email
        })
    });

    const result = await response.json();

    document.getElementById("msg").innerHTML = result.message;

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";

    loadStudents();
}

loadStudents();