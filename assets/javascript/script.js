


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

    var Russell = new questionObject("What player has won the most NBA Titles in NBA History?", ["Michael Jordan", "Shaq", "Magic Johnson", "Bill Russell"], "Bill Russell", "assets/images/russell.gif");
    var Kareem = new questionObject("Who has scored the most Points in NBA history?", ["Michael Jordan", "Kareem Abdul Jabbar", "Lebron James", "Karl Malone"], "Kareem Abdul Jabbar", "assets/images/kareem.gif");
    var Stock = new questionObject("Who has the most Assists in NBA history?", ["Chris Paul", "Steve Nash", "John Stockton", "Magic Johnson"], "John Stockton", "assets/images/stock.gif");
    var Wilt = new questionObject("Who has the most Rebounds in NBA history?", ["Hakeem Olajuwon", "Wilt Chamberlain", "Tim Duncan", "Moses Malone"], "Wilt Chamberlain", "assets/images/wilt.gif");
    var Celtics = new questionObject("What team has the won the most NBA Titles in NBA history?", ["Los Angelas Lakers", "Chicago Bulls", "Boston Celtics", "San Antonio Spurs"], "Boston Celtics", "assets/images/celtics.gif");
   

    var objectArray = [Russell, Kareem, Stock, Wilt, Celtics];


    startButton.appendChild(buttonText);
    document.body.appendChild(startButton);


    startButton.addEventListener("click", function() {
        var index = 0
        var timeCount = 30;
        var timeCountP = document.createElement("p");
        div1.appendChild(timeCountP);
        var strValue;
        var answerButton;
        body.removeChild(startButton);
        nextQuestion(index);
        // Prob make this interval into a function
        var timeInterval = setInterval(function(){ 
            if(timeCount > 0) {
                timeCountP.textContent = timeCount;
                timeCount--;
            } else {
                timeCount = 30;
                nextQuestion();
            }
        }, 1000)
    })
    var index = 0;
    function nextQuestion(index) {
        questionP.textContent = objectArray[index].question;
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
                    clearInterval(timeInterval);
                } else if(this.getAttribute("id") !== "correctAnswer") {
                    // Need to increment an answer score to show player at end of game
                    response = "Incorrect! ";
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
            div2.appendChild(image);
            responseText.textContent = response + "The answer was " + objectArray[index].correctAnswer + "!";
            div2.appendChild(responseText);
            // index++; isnt seen by original index
            setTimeout(function(){
                removeElements();
                index++;
                nextQuestion(index);
            },1000 * 5)
        } 
        function removeElements() {
            while (div2.firstChild) { // Does work
                div2.removeChild(div2.firstChild);
            }
        }
        console.log(index);
    }

    




}

