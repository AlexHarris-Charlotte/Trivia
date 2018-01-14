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
    var div1 = document.createElement("div");
    body.appendChild(div1);
    var div2 = document.getElementById("container");
    var newDiv = document.createElement("div");
    var timeP = document.createElement("p");
    var questionP = document.createElement("p");
    var image = document.createElement("img");

    function questionObject(question, answers, correctAnswer, gif) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.gif = gif;
    }

    var Russel = new questionObject("What player has won the most NBA titles in NBA History?", ["Michael Jordan", "Shaq", "Magic Johnson", "Bill Russel"], "Bill Russel", "assets/images/test.jpg");
    var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");
    var Stock = new questionObject("Who has the most assists in NBA history?", ["Chris Paul", "Steve Nash", "John Stockton", "Magic Johnson"], "John Stockton", "assets/images/test.jpg");
    //var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");
    //var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");
    //var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");
    //var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");
    //var Kareem = new questionObject("Who has scored the most points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabar", "assets/images/test.jpg");


    var objectArray = [Russel, Kareem];


    startButton.appendChild(buttonText);
    document.body.appendChild(startButton);


    startButton.addEventListener("click", function() {
        var timeCount = 30;
        var timeCountP = document.createElement("p");
        div1.appendChild(timeCountP);
        var strValue;
        var answerButton;
        body.removeChild(startButton);
        nextQuestion();
        // Prob make this interval into a function
        // setInterval(function(){ 
        //     if(timeCount > 0) {
        //         timeCountP.textContent = timeCount;
        //         timeCount--;
        //     } else {
        //         timeCount = 30;
        //         nextQuestion();
        //         // need to create a function that shows the gif and correct answer. this function
        //         // needs a callback to nextquestion
        //     }
        // }, 1000)
    })

    function nextQuestion() {
        var index = 0;
        questionText = document.createTextNode(objectArray[index].question);
        questionP.appendChild(questionText);
        div2.appendChild(questionP);
        for(var i = 0; i < objectArray[index].answers.length; i++) {
            let buttonText = document.createTextNode(objectArray[index].answers[i]);
            answerButton = document.createElement("button");
            answerButton.className += "answers";
            if(objectArray[index].answers[i] === objectArray[index].correctAnswer) {
                answerButton.setAttribute("id", "correctAnswer");
                console.log(answerButton);
            }
            answerButton.appendChild(buttonText);
            div2.appendChild(answerButton);
            addEventStuff(answerButton);
        }

        function addEventStuff(answerButton){ 
            var response;
            answerButton.addEventListener("click", function() {
                if(this.getAttribute("id") === "correctAnswer"){    
                    // Need to increment an answer score to show player at end of game
                    response = "Correct! ";
                    questionResponse(response);
                } else if(this.getAttribute("id") !== "correctAnswer") {
                    // Need to increment an answer score to show player at end of game
                    response = "Incorrect! ";
                    questionResponse(response);
                } 
            });
        }

        function questionResponse(response) {
            var responseText = document.createElement("p");
            removeElements();
            image.setAttribute("src", objectArray[index].gif);
            image.style.width = "300px";
            image.style.height = "300px";
            div2.appendChild(image);
            responseText.textContent = response + "The answer was " + objectArray[index].correctAnswer + "!";
            div2.appendChild(responseText);
            // index++; isnt seen by original index
            setTimeout(function(){
                removeElements();
                nextQuestion();
                // make call to nextQuestion here
            },1000 * 8)
        } 
        function removeElements() {
            while (div2.firstChild) { // works
                div2.removeChild(div2.firstChild);
            }
        }
        index++;
        console.log(index);
    }






}

