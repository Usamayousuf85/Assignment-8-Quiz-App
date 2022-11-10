var questionsArray = [
    {
        question: "Full Form of RAM is ?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is ?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is ?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is ?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is ?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];

function getname(){
    var input = document.getElementById("userName");
    sessionStorage.setItem("name",input.value);
    startQuiz()

    input.value = ""
}

function startQuiz(){
    window.location.href = "index.html";
}

function startTime(){
    var startMin = 2;
    var time = startMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}

function showquestion(e){
    var questionelement = document.getElementById("questionelement");
    questionelement.innerHTML = questionsArray[e].question;

    var optionElement = document.getElementsByClassName("optionelement");
    for (var i = 0; i < optionElement.length; i++){
        optionElement[i].innerHTML = questionsArray[e].options[i];
    }
}

var questioncount = 0;
var score = 0;

function nextquestion(){
    checkanswer(questioncount)
    questioncount++;
    if(questioncount <= questionsArray.length-1){
        showquestion(questioncount);
    }
    removeactiveclass()
    setresult() 
}
function putactiveclass(e){
    removeactiveclass()
    e.classList.add("active")
}
function removeactiveclass(){
    var active = document.getElementsByClassName('active')
    for(var i = 0; i < active.length; i++){
        active[i].classList.remove('active')
    }
}
function checkanswer(e){
    var Answer = document.getElementsByClassName('active');
    if (Answer[0].innerHTML == questionsArray[e].answer){
        score += 10
    }
}


// Result page

function setresult(){
    if(questioncount == questionsArray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById('result')
    sessionStorage.setItem('userscore', score)
}
function renderresult(){
    var rr = sessionStorage.getItem('userscore');
    result.innerHTML = "You Scored " + rr + " out of 50";
}
function takeagain(){
    window.location.href = "start.html"
}

