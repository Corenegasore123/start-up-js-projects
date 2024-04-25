const btnEl = document.getElementById("calculate");
const birthdayEl = document.getElementById("dob");
const resultEl = document.getElementById("result");

function calculateAge(){
    const dob = birthdayEl.value;
    if(birthdayEl === ""){
        resultEl.innerText = `Please enter your birthday`;
    }else{
        const age = getAge (dob);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(dob){
    const currentDate = new Date();
    const birthday = new Date(dob);
    let age = currentDate.getFullYear() - birthday.getFullYear();
    const month = currentDate.getMonth() - birthday.getMonth();

    if(month < 0 || month === 0 && currentDate.getDate() < birthday.getDate()){
        age-- ;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);