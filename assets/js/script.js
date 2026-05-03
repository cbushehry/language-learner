let app = {
  init: function() {
    let alts = document.querySelectorAll('.alternative');
    alts.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.checkAnswer(index);
      });
    });

    document.getElementById('play-again').addEventListener('click', () => this.start());

    this.start();
  },

  start: function() {
    this.currPosition = 0;
    this.score = 0;

    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('result').textContent = '';

    this.updateStats();
    this.showQuestion(questions[this.currPosition]);
  },

  showQuestion: function(q) {
    document.getElementById('result').textContent = '';
    document.getElementById('title').textContent = q.title;

    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element, index) {
      element.textContent = q.alternatives[index];
    });

    this.updateProgress();
  },

  checkAnswer: function(userSelected) {
    let currQuestion = questions[this.currPosition];
    let isLastQuestion = this.currPosition === questions.length - 1;

    if (currQuestion.correctAnswer === userSelected) {
      this.score++;
      this.showResult(true);
    } else {
      this.showResult(false);
    }

    this.updateStats();

    if (isLastQuestion) {
      this.showEndScreen();
    } else {
      this.currPosition++;
      this.showQuestion(questions[this.currPosition]);
    }
  },

  updateStats: function() {
    document.getElementById('score').textContent = `Score: ${this.score}`;
  },

  updateProgress: function() {
    document.getElementById('progress').textContent =
      `Question ${this.currPosition + 1} of ${questions.length}`;
  },

  showResult: function(isCorrect) {
    let resultDiv = document.getElementById('result');

    if (isCorrect) {
      resultDiv.textContent = 'Correct!';
    } else {
      let correctAnswerText = questions[this.currPosition].alternatives[
        questions[this.currPosition].correctAnswer
      ];
      resultDiv.textContent = `Wrong! Correct answer: ${correctAnswerText}`;
    }
  },

  showEndScreen: function() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent =
      `You scored ${this.score} out of ${questions.length}!`;
  }
};

app.init();
