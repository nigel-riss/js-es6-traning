(function quiz() {
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

    var questions = [lang, dogs];

    function askRandomQuestion() {
        var qNum = Math.floor(Math.random() * questions.length);
        questions[qNum].ask();
        return qNum;
    }

    console.log(questions[askRandomQuestion()].checkCorrect(prompt('Enter your answer')) ? 'Yes!' : 'No!');
})();
