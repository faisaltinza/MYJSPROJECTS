const button = document.getElementById('submit');
const input = document.getElementById('birthday');
const resultE = document.querySelector('.result')
function calculateAge() {
    const BirthdayValue = input.value
    if(BirthdayValue === ""){
        alert("Please enter valid date");
    }else {
        const Birthdate = getAge(BirthdayValue);
        resultE.innerText = `You are ${Birthdate} years old`;
    }
}

function getAge(BirthdayValue) {
    const currentDate = new Date();
    const userDob = new Date(BirthdayValue)
    let age = currentDate.getFullYear() - userDob.getFullYear()
    const month = currentDate.getMonth() - userDob.getMonth()
    if(month < 0 || (month === 0 && currentDate.getDate() < userDob.getDate())) {
        age = --age
    }

    console.log(age, month)
    return age
}

button.addEventListener('click', () => {
    calculateAge();

})
