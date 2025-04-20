const questions = [
  {
    word: "cat",
    image: "level-gambar/cat.png",
    hint: "cat",
  },
  {
    word: "kitten",
    image: "level-gambar/kitten.png",
    hint: "kitten",
  },
  {
    word: "hungry",
    image: "level-gambar/hungry.png",
    hint: "hungry",
  },
  {
    word: "whiskers",
    image: "level-gambar/whiskers.png",
    hint: "whiskers",
  },
  {
    word: "paw",
    image: "level-gambar/paw.png",
    hint: "paw",
  },
  {
    word: "claw",
    image: "level-gambar/claw.png",
    hint: "claw",
  },
  {
    word: "tail",
    image: "level-gambar/tail.png",
    hint: "tail",
  },
  {
    word: "meow",
    image: "level-gambar/meow.png",
    hint: "meow",
  },
  {
    word: "purr",
    image: "level-gambar/purr.png",
    hint: "purr",
  },
  {
    word: "litter box",
    image: "level-gambar/litter-box.png",
    hint: "litter box",
  },
  {
    word: "cat food",
    image: "level-gambar/cat-food.png",
    hint: "cat food",
  },
  {
    word: "milk",
    image: "level-gambar/milk.png",
    hint: "milk",
  },
  {
    word: "fish",
    image: "level-gambar/fish.png",
    hint: "fish",
  },
  {
    word: "sleep",
    image: "level-gambar/sleep.png",
    hint: "sleep",
  },
  {
    word: "nap",
    image: "level-gambar/nap.png",
    hint: "nap",
  },
  {
    word: "jump",
    image: "level-gambar/jump.png",
    hint: "jump",
  },
  {
    word: "climb",
    image: "level-gambar/climb.png",
    hint: "climb",
  },
  {
    word: "scratch",
    image: "level-gambar/scratches.png",
    hint: "scratch",
  },
  {
    word: "play",
    image: "level-gambar/play.png",
    hint: "play",
  },
  {
    word: "chase",
    image: "level-gambar/chase.png",
    hint: "chase",
  },
  {
    word: "mouse",
    image: "level-gambar/mouse.png",
    hint: "mouse",
  },
  {
    word: "toys",
    image: "level-gambar/toys.png",
    hint: "toys",
  },
  {
    word: "collar",
    image: "level-gambar/collar.png",
    hint: "collar",
  },
  {
    word: "leash",
    image: "level-gambar/leash.png",
    hint: "leash",
  },
  {
    word: "owner",
    image: "level-gambar/owner.png",
    hint: "owner",
  },
  {
    word: "cage",
    image: "level-gambar/cage.png",
    hint: "cage",
  },
  {
    word: "vet",
    image: "level-gambar/vet.png",
    hint: "vet",
  },
  {
    word: "medicine",
    image: "level-gambar/medicine.png",
    hint: "medicine",
  },
  {
    word: "brush",
    image: "level-gambar/brush.png",
    hint: "brush",
  },
  {
    word: "run",
    image: "level-gambar/run.png",
    hint: "run",
  },
  {
    word: "clean",
    image: "level-gambar/clean.png",
    hint: "clean",
  },
  {
    word: "dirty",
    image: "level-gambar/dirty.png",
    hint: "dirty",
  },
  {
    word: "cute",
    image: "level-gambar/cute.png",
    hint: "cute",
  },
  {
    word: "warm",
    image: "level-gambar/warm.png",
    hint: "warm",
  },
  {
    word: "blanket",
    image: "level-gambar/blanked.png",
    hint: "blanket",
  },
  {
    word: "night",
    image: "level-gambar/night.png",
    hint: "night",
  },
  {
    word: "day",
    image: "level-gambar/day.png",
    hint: "day",
  },
  {
    word: "hunter",
    image: "level-gambar/hunter.png",
    hint: "hunter",
  },
  {
    word: "friend",
    image: "level-gambar/friend.png",
    hint: "friend",
  },
  {
    word: "health",
    image: "level-gambar/health.png",
    hint: "health",
  },
  {
    word: "shy",
    image: "level-gambar/shy.png",
    hint: "shy",
  },
  {
    word: "sick",
    image: "level-gambar/sick.png",
    hint: "sick",
  },
  {
    word: "sleepy",
    image: "level-gambar/sleepy.png",
    hint: "sleepy",
  },
  {
    word: "lazy",
    image: "level-gambar/lazy.png",
    hint: "lazy",
  },
  {
    word: "fast",
    image: "level-gambar/fast.png",
    hint: "fast",
  },
  {
    word: "eyes",
    image: "level-gambar/eyes.png",
    hint: "eyes",
  },
  {
    word: "ear",
    image: "level-gambar/ear.png",
    hint: "ear",
  },
  {
    word: "nose",
    image: "level-gambar/nose.png",
    hint: "nose",
  },
  {
    word: "tongue",
    image: "level-gambar/tongue.png",
    hint: "tongue",
  },
  {
    word: "teeth",
    image: "level-gambar/teeth.png",
    hint: "teeth",
  }
];

let currentQuestion = {};
let score = 0;
let level = 1;

function startGame() {
  score = 0;
  level = 1;
  loadQuestion();
}

function loadQuestion() {
  document.getElementById("message").textContent = "";
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question-image").src = currentQuestion.image;
  updateScore();
  speak("What is this?");
}

function updateScore() {
  document.getElementById("score").textContent = `Score: ${score} | Level: ${level}`;
}

function repeatQuestion() {
  speak("What is this?");
}

function listenAnswer() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.onresult = (event) => {
    const result = event.results[0][0].transcript.toLowerCase();
    checkAnswer(result);
  };
  recognition.start();
}

function checkAnswer(answer) {
  if (answer === currentQuestion.word.toLowerCase()) {
    score++;
    level++;
    speak("Correct! Good job!");
    setTimeout(loadQuestion, 1500);
  } else {
    speak(`Oops! The correct answer is ${currentQuestion.word}`);
    document.getElementById("message").textContent = `Salah! Jawaban yang benar: ${currentQuestion.word}`;
    score = 0;
    level = 1;
    updateScore();
  }
}

function submitTextAnswer() {
  const input = document.getElementById("textInput").value.trim().toLowerCase();
  if (input !== "") {
    checkAnswer(input);
    document.getElementById("textInput").value = "";
  }
}

function showHint() {
  document.getElementById("message").textContent = `Hint:\n${currentQuestion.hint}`;
  speak(currentQuestion.hint);
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

// Enter to submit
document.getElementById("textInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submitTextAnswer();
  }
});