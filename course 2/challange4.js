(function quiz(initScore) {
    function Question({ question, answers, correct }) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.ask = function() {
        console.log(this.question);
        this.answers.forEach(function(answer, index) {
            console.log((index + 1) + ': ' + answer);
        });
    };

    Question.prototype.checkCorrect = function(answer) {
        return answer - 1 === this.correct;
    };

    function askRandomQuestion(questions) {
        var qNum = Math.floor(Math.random() * questions.length);
        questions[qNum].ask();
        return qNum;
    }
    
    var lang = new Question({
        question: 'What language is used in browsers?',
        answers: [
            'C++',
            'Java',
            'JavaScript',
            'Lisp'
        ],
        correct: 2
    });
    
    var dogs = new Question({
        question: 'What is the cutest dogs breed?',
        answers: [
            'Bulldog',
            'Pug',
            'German Sheppard'
        ],
        correct: 1
    });

    var earth = new Question({
        question: 'What is the form of the Earth?',
        answers: [
            'Spheric',
            'Flat',
            'Cube'
        ],
        correct: 0
    });

    var questions = [lang, dogs, earth];
    var score = initScore || 0;
    var questionNum = askRandomQuestion(questions);
    var userAnswer = prompt('Enter your answer');

    if (userAnswer === 'exit') {
        console.log('Game over! Thanks for playing!');
        return;
    }
    2
    if ( questions[questionNum].checkCorrect(userAnswer) ) { 
        console.log('It\'s right answer'); 
        score++; 
    } else {
        console.log('Sorry you\'re wrong');
    } 
    console.log('Your score is: ' + score);

    quiz(score);
})();
