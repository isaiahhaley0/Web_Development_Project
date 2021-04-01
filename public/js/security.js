function updateQuestion1 () {
    var question1 = document.getElementById("question1").value;
    var questionAnswer = document.getElementById("questionAns");

    if (question1 == "maidenName" || question1 =="firstPet") {
        questionAnswer.classList.remove("invisible");
        questionAnswer.classList.add("visible")
    }
    else {
        questionAnswer.classList.remove("visible")
        questionAnswer.classList.add("invisible")
    }
}

function updateQuestion2 () {
    var question2 = document.getElementById("question2").value;
    var questionAnswer2 = document.getElementById("questionAns2");

    if (question2 == "firstCar" || question2 =="elementarySchool") {
        questionAnswer2.classList.remove("invisible");
        questionAnswer2.classList.add("visible")
    }
    else {
        questionAnswer2.classList.remove("visible")
        questionAnswer2.classList.add("invisible")
    }
}

function updateQuestion3 () {
    var question3 = document.getElementById("question3").value;
    var questionAnswer3 = document.getElementById("questionAns3");

    if (question3 == "cityBorn" || question3 =="childhoodNickname") {
        questionAnswer3.classList.remove("invisible");
        questionAnswer3.classList.add("visible")
    }
    else {
        questionAnswer3.classList.remove("visible")
        questionAnswer3.classList.add("invisible")
    }
}