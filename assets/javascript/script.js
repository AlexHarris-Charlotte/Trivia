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

    var testQuestion = new questionObject("What is 1 + 2", [1, 2, 3, 4], "3", "assets/images/test.jpg")





    // Creates Button
    startButton.appendChild(buttonText);
    document.body.appendChild(startButton);




    

    startButton.addEventListener("click", function() {
        var i;
        var intValue;
        var answerButton;
        body.removeChild(startButton);
        // we want the content of the object to populate dynamically created elements
        questionText = document.createTextNode(testQuestion.question);
        questionP.appendChild(questionText);
        div1.appendChild(questionP);
        for(i = 0; i < testQuestion.answers.length; i++) {
            let buttonText = document.createTextNode(testQuestion.answers[i]);
            answerButton = document.createElement("button");
            answerButton.className += "answers";
            strValue = testQuestion.answers[i].toString();
            // need for loop to add 
            if(testQuestion.answers[i] == testQuestion.correctAnswer) {
                answerButton.setAttribute("id", "correctAnswer");
                console.log(answerButton);
            }

            answerButton.addEventListener("click", answerClick);
            answerButton.appendChild(buttonText);
            div1.appendChild(answerButton);
        }


        function answerClick() { 
            if(answerButton.getAttribute("id") === "correctAnswer"){    // Logic works
                console.log(answerButton)
                console.log("got the correct answer");
            } else {
                console.log(answerButton)
                console.log("not the correct answer");
            }
        }
    })



    







}






