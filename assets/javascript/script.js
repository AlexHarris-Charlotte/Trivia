// Need a start button to activate first question when clicked
    // Dynamically create a start button and attach a click event
// Display the question, four answers, and timer to the DOM
    // Dynamically display current question/answer/time text to DOM
// Allow the user to click the answers, on hover change style of this answer
    // Attach event handler to the answers div (child element get the handler through Event Delegation)
// When clicked we will show the correct answer and a gif for 5-7 seconds 
    // Dynamically create the answer and gif
// We then show the next answer and repeat this process through all of the questions
    // Probably need a loop or some way to cycle through answers
// After all of the questions have been answer, we display the stats of correct, incorrect, unanswered
// After displaying the stats for 5-7 seconds, recreate the start button and let the user rerun the game
//


window.onload = function() {
    var body = document.getElementsByTagName("body")[0];
    var startButton = document.createElement("button");
    startButton.setAttribute("id", "start");
    var buttonText = document.createTextNode("Start");
    var div1 = document.getElementById("container");
    var newDiv = document.createElement("div");
    var timeP = document.createElement("p");
    var questionP = document.createElement("p");

    function questionObject(question, answers, correctAnswer, gif) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.gif = gif;
    }

    var Russel = new questionObject("What player has won the most NBA titles in NBA History?", ["Michael Jordan", "Shaq", "Magic Johnson", "Bill Russel"], "Bill Russel", "assets/images/test.jpg");
    var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");


    var objectArray = [Russel, Kareem];


    // Creates Button
    startButton.appendChild(buttonText);
    document.body.appendChild(startButton);


    startButton.addEventListener("click", function() {
        var strValue;
        var answerButton;
        // need timer to decrement using SetInterval
        body.removeChild(startButton);
        nextQuestion();
    })

    function nextQuestion() {
        var index = 0;
        questionText = document.createTextNode(objectArray[index].question);
        questionP.appendChild(questionText);
        div1.appendChild(questionP);
        for(var i = 0; i < objectArray[index].answers.length; i++) {
            let buttonText = document.createTextNode(objectArray[index].answers[i]);
            answerButton = document.createElement("button");
            answerButton.className += "answers";
            // strValue = objectArray[index].answers[i].toString();
            if(objectArray[index].answers[i] === objectArray[index].correctAnswer) {
                answerButton.setAttribute("id", "correctAnswer");
                console.log(answerButton);
            }
            addEventStuff(answerButton);
            // className = document.getElementsByClassName("answers");
            
            answerButton.appendChild(buttonText);
            div1.appendChild(answerButton);
        }

        function addEventStuff(answerButton){ 
            answerButton.addEventListener("click", function() {
                if(this.getAttribute("id") === "correctAnswer"){    // Logic works
                    console.log(this)
                    console.log("got the correct answer");
                } else {
                    console.log(this)
                    console.log("not the correct answer");
                } 
            });
        }
    }






}

