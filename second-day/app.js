let userName;
let age;
let programmingLanguage;

function gatheringUserInfo() {
    if (document.getElementById('name').value === '' || document.getElementById('age').value === '' || document.getElementById('programming-language').value === '') {
        alert('Please, fill all the fields!');
        return;
    }

    userName = document.getElementById('name').value;
    age = document.getElementById('age').value;
    programmingLanguage = document.getElementById('programming-language').value;

    alert(`Name: ${userName}\nAge: ${age}\nProgramming language: ${programmingLanguage}`);

    let question = prompt(`Do you like to study ${programmingLanguage}? (1 - Yes, 0 - No)`);

    if(question == 1) {
        alert('That is great! Keep studying!');
    } else if(question == 0) {
        alert('That is sad! Try another programming language!');
    } else {
        alert('Invalid option!');
    }
}