const student_url = "student";

let student1 = "ich bin noch nicht abgeholt student1";
let student2 = "ich bin noch nicht abgeholt student2";
function fetchStudent1() {
    fetch(student_url).then((response) => {
        if (response.ok) {
            response.json().then((student) => {
                // console.log(student);
                student1 = student;
            });
        }
    });
}
async function fetchStudent2() {
    console.log("fetchStudent2 gestartet");
    const resp = await fetch(student_url);
    console.log("fetchStudent2 response ist da");
    return await resp.json();
    //    .then((response) => {
    //    if (response.ok) {
    //        response.json().then((student) => {
    //            // console.log(student);
    //            student1 = student;
    //        });
    //    }
    //});
}

student2 = await fetchStudent2();
console.log("student2: ", student2);
