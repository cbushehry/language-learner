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
    this.deck = this.shuffleQuestions(questions);

    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('end-screen').classList.add('hidden');
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.className = '';

    this.updateStats();
    this.showQuestion(this.deck[this.currPosition]);
  },

  shuffleQuestions: function(arr) {
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  showQuestion: function(q) {
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.className = '';
    document.getElementById('title').textContent = q.title;

    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element, index) {
      element.textContent = q.alternatives[index];
    });

    this.updateProgress();
  },

  checkAnswer: function(userSelected) {
    let currQuestion = this.deck[this.currPosition];
    let isLastQuestion = this.currPosition === this.deck.length - 1;

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
      this.showQuestion(this.deck[this.currPosition]);
    }
  },

  updateStats: function() {
    document.getElementById('score').textContent = `Score: ${this.score}`;
  },

  updateProgress: function() {
    document.getElementById('progress').textContent =
      `Question ${this.currPosition + 1} of ${this.deck.length}`;
  },

  showResult: function(isCorrect) {
    let resultDiv = document.getElementById('result');
    resultDiv.className = isCorrect ? 'correct' : 'wrong';

    if (isCorrect) {
      resultDiv.textContent = 'Correct!';
    } else {
      let currQuestion = this.deck[this.currPosition];
      let correctAnswerText = currQuestion.alternatives[currQuestion.correctAnswer];
      resultDiv.textContent = `Wrong! Correct answer: ${correctAnswerText}`;
    }
  },

  showEndScreen: function() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent =
      `You scored ${this.score} out of ${this.deck.length}!`;
  }
};

app.init();
