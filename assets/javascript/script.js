

window.onload = function() {
    var body = document.getElementsByTagName("body")[0];
    var startButton = document.createElement("button");
    startButton.setAttribute("id", "start");
    var buttonText = document.createTextNode("Start");
    var containerDiv = document.getElementById("container");
    var timeP = document.createElement("p");
    var timeDiv = document.getElementById("timeDiv");
    var questionP = document.createElement("p");
    var image = document.createElement("img");

    function questionObject(question, answers, correctAnswer, gif) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.gif = gif;
    }

    var Russell = new questionObject("What player has won the most NBA Titles in NBA History?", ["Michael Jordan", "Shaq", "Magic Johnson", "Bill Russell"], "Bill Russell", "assets/images/russell.gif");
    var Kareem = new questionObject("Who has scored the most Points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabbar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabbar", "assets/images/kareem.gif");
    var Stock = new questionObject("Who has the most Assists in NBA history?", ["Chris Paul", "Steve Nash", "John Stockton", "Magic Johnson"], "John Stockton", "assets/images/stock.gif");
    var Wilt = new questionObject("Who has the most Rebounds in NBA history?", ["Hakeem Olajuwon", "Wilt Chamberlain", "Tim Duncan", "Moses Malone"], "Wilt Chamberlain", "assets/images/wilt.gif");
    var Celtics = new questionObject("What team has the won the most NBA Titles in NBA history?", ["Los Angelas Lakers", "Chicago Bulls", "Boston Celtics", "San Antonio Spurs"], "Boston Celtics", "assets/images/celtics.gif");
   

    var objectArray = [Russell, Kareem, Stock, Wilt, Celtics];

        (function start() {
            containerDiv.style.visibility = "hidden";
            startButton.appendChild(buttonText);
            document.body.appendChild(startButton);
            var incorrectAnswers = 0;
            var correctAnswers = 0;
            var unanswered = 0;


            startButton.addEventListener("click", function() {
                containerDiv.style.visibility = "visible";
                var index = 0
                var strValue;
                var answerButton;
                body.removeChild(startButton);
                nextQuestion(index);
            })

            var index = 0;

            function nextQuestion(index) {
                var timeCount = 30;
                var response;
                containerDiv.appendChild(timeP);
                var timeInterval = setInterval(function(){ 
                    if(timeCount > 0) {
                        timeP.textContent = "Time: " + timeCount;
                        timeCount--;
                    } else {
                        timeCount = 30; 
                        unanswered++;
                        console.log("incorrects: " + incorrectAnswers);
                        response = "Incorrect ";
                        removeElements();
                        questionResponse(response);
                        clearInterval(timeInterval);
                    }
                }, 1000)
                questionP.textContent = objectArray[index].question;
                containerDiv.appendChild(questionP);

                // Creates Answer Buttons
                for(var i = 0; i < objectArray[index].answers.length; i++) {
                    let buttonText = document.createTextNode(objectArray[index].answers[i]);
                    answerButton = document.createElement("button");
                    answerButton.className += "answers";
                    // answerButton.className += " btn";
                    // answerButton.className += " btn-info";
                    if(objectArray[index].answers[i] === objectArray[index].correctAnswer) {
                        answerButton.setAttribute("id", "correctAnswer");
                        console.log(answerButton);
                    }
                    answerButton.appendChild(buttonText);
                    containerDiv.appendChild(answerButton); 
                    addEventStuff(answerButton);
                }
                
                function addEventStuff(answerButton){ 
                    answerButton.addEventListener("click", function() {
                        if(this.getAttribute("id") === "correctAnswer"){    
                            response = "Correct! ";
                            correctAnswers++ 
                            console.log("Corrects: " + correctAnswers);
                            questionResponse(response);
                            clearInterval(timeInterval);
                        } else if(this.getAttribute("id") !== "correctAnswer") {
                            response = "Incorrect! ";
                            incorrectAnswers++;
                            console.log("incorrects: " + incorrectAnswers);
                            questionResponse(response);
                            clearInterval(timeInterval);
                        } 
                    });

                }
                
                function questionResponse(response) {
                    var responseText = document.createElement("p");
                    removeElements();
                    image.setAttribute("src", objectArray[index].gif);
                    image.style.width = "300px";
                    image.style.height = "300px";
                    containerDiv.appendChild(image);
                    responseText.textContent = response + objectArray[index].correctAnswer + "!";
                    containerDiv.appendChild(responseText);
                    setTimeout(function(){
                        removeElements();
                        if(index < objectArray.length - 1) { 
                            index++; 
                            console.log("hello");   
                            nextQuestion(index);    
                        } else {
                            timeP.remove();
                            scoreCard(correctAnswers, incorrectAnswers);
                        } 
                    },1000 * 5)
                } 
                function removeElements() {
                    while (containerDiv.firstChild) { 
                        containerDiv.removeChild(containerDiv.firstChild);
                    }
                }

                function scoreCard(correctAnswers, incorrectAnswers) {
                    var correctAnswersP = document.createElement("p");
                    correctAnswersP.textContent = "Correct Answers: " + correctAnswers;
                    containerDiv.appendChild(correctAnswersP);
                    var incorrectAnswersP = document.createElement("p");
                    incorrectAnswersP.textContent = "Incorrect Answers: " + incorrectAnswers;
                    containerDiv.appendChild(incorrectAnswersP);
                    var unansweredP = document.createElement("p");
                    unansweredP.textContent = "Questions not answered: " + unanswered;
                    containerDiv.appendChild(unansweredP);
                    setTimeout(removeElements, 1000 * 5.8);
                    setTimeout(start, 1000 * 6);
                }
                console.log("index: " + index);  
            }
    })();
}



