const quizData = [
  {
    question: "Which is an example of active listening?",
    options: {
      a: "Interrupting the speaker",
      b: "Nodding and giving feedback",
      c: "Looking at your phone",
      d: "Thinking about your response"
    },
    correct: "b"
  },
  {
    question: "Identify the verb in the sentence: 'She runs every morning.'",
    options: {
      a: "She",
      b: "runs",
      c: "every",
      d: "morning"
    },
    correct: "b"
  },
  {
    question: "Choose the correct sentence:",
    options: {
      a: "The list of items are on the desk.",
      b: "The list of items is on the desk.",
      c: "The lists of items is on the desk.",
      d: "The list of item are on the desk."
    },
    correct: "b"
  },
  {
    question: "Which of the following is a noun phrase?",
    options: {
      a: "to run quickly",
      b: "the big brown dog",
      c: "on the roof",
      d: "as if he knew"
    },
    correct: "b"
  },
  {
    question: "What part of speech is the word 'quickly'?",
    options: {
      a: "Adjective",
      b: "Noun",
      c: "Verb",
      d: "Adverb"
    },
    correct: "d"
  },
  {
    question: "Identify the prepositional phrase:",
    options: {
      a: "will be singing",
      b: "under the bridge",
      c: "a tall man",
      d: "running fast"
    },
    correct: "b"
  },
  {
    question: "Which sentence contains an independent clause?",
    options: {
      a: "Because I was late",
      b: "When he arrived",
      c: "She went to the store",
      d: "If they call"
    },
    correct: "c"
  },
  {
    question: "Which sentence has correct subject-verb agreement?",
    options: {
      a: "Each of the players have a locker.",
      b: "Each of the players has a locker.",
      c: "Each player have lockers.",
      d: "Each players has a locker."
    },
    correct: "b"
  },
  {
    question: "Identify the dependent clause:",
    options: {
      a: "They danced all night",
      b: "Although it was raining",
      c: "The cat slept",
      d: "He spoke loudly"
    },
    correct: "b"
  },
  {
    question: "Which is a compound sentence?",
    options: {
      a: "He ran and fell.",
      b: "He ran, and she walked.",
      c: "Because he ran fast.",
      d: "After he ran fast."
    },
    correct: "b"
  },
  {
    question: "Which of these is a simple sentence?",
    options: {
      a: "Although he was tired, he worked.",
      b: "He was tired.",
      c: "He worked and she rested.",
      d: "If he goes, we will follow."
    },
    correct: "b"
  },
  {
    question: "What should you avoid during active listening?",
    options: {
      a: "Making eye contact",
      b: "Giving verbal feedback",
      c: "Interrupting",
      d: "Paraphrasing"
    },
    correct: "c"
  },
  {
    question: "Which part of speech shows action?",
    options: {
      a: "Noun",
      b: "Adjective",
      c: "Verb",
      d: "Adverb"
    },
    correct: "c"
  },
  {
    question: "Which of the following is an adjective phrase?",
    options: {
      a: "very tired",
      b: "in the box",
      c: "run quickly",
      d: "beside the bed"
    },
    correct: "a"
  },
  {
    question: "Identify the object of the prepositional phrase: 'on the shelf'",
    options: {
      a: "on",
      b: "the",
      c: "shelf",
      d: "on the"
    },
    correct: "c"
  },
  {
    question: "Which of the following contains a relative clause?",
    options: {
      a: "She is very smart.",
      b: "The man who called is my friend.",
      c: "It was raining.",
      d: "We went to the park."
    },
    correct: "b"
  },
  {
    question: "Choose the correct verb: 'Either the teacher or the students ___ going to present.'",
    options: {
      a: "is",
      b: "was",
      c: "are",
      d: "has"
    },
    correct: "c"
  },
  {
    question: "Which is a complex sentence?",
    options: {
      a: "He studies every night.",
      b: "He studies and works hard.",
      c: "He studies because he wants to succeed.",
      d: "He studies; he passes."
    },
    correct: "c"
  },
  {
    question: "Which sentence demonstrates subject-verb agreement?",
    options: {
      a: "The dogs barks.",
      b: "The dog bark.",
      c: "The dog barks.",
      d: "The dogs barks."
    },
    correct: "c"
  },
  {
    question: "Which part of speech modifies a verb?",
    options: {
      a: "Noun",
      b: "Adverb",
      c: "Pronoun",
      d: "Preposition"
    },
    correct: "b"
  },
  {
    question: "Which of these is not a part of speech?",
    options: {
      a: "Noun",
      b: "Clause",
      c: "Adjective",
      d: "Interjection"
    },
    correct: "b"
  },
  {
    question: "Which shows good listening skills?",
    options: {
      a: "Finishing their sentences",
      b: "Maintaining eye contact",
      c: "Interrupting frequently",
      d: "Looking away constantly"
    },
    correct: "b"
  },
  {
    question: "Which of these is a verbal phrase?",
    options: {
      a: "jumping over the fence",
      b: "in the basket",
      c: "the tall boy",
      d: "before sunset"
    },
    correct: "a"
  },
  {
    question: "Which sentence uses a noun clause?",
    options: {
      a: "He knows the answer.",
      b: "What she said was surprising.",
      c: "He walked away.",
      d: "The dog barked loudly."
    },
    correct: "b"
  },
  {
    question: "Identify the subject in: 'The tall man ran quickly.'",
    options: {
      a: "tall",
      b: "man",
      c: "ran",
      d: "quickly"
    },
    correct: "b"
  },
  {
    question: "What does an interjection express?",
    options: {
      a: "Action",
      b: "Description",
      c: "Emotion",
      d: "Relation"
    },
    correct: "c"
  },
  {
    question: "Identify the adverb in: 'She sings beautifully.'",
    options: {
      a: "She",
      b: "sings",
      c: "beautifully",
      d: "None"
    },
    correct: "c"
  },
  {
    question: "Which shows poor listening?",
    options: {
      a: "Asking questions",
      b: "Ignoring distractions",
      c: "Thinking about other tasks",
      d: "Repeating key points"
    },
    correct: "c"
  },
  {
    question: "Which of the following is a gerund phrase?",
    options: {
      a: "running fast",
      b: "to run quickly",
      c: "ran quickly",
      d: "has been running"
    },
    correct: "a"
  },
  {
    question: "Which of the following is not a clause?",
    options: {
      a: "Although he came late",
      b: "because she smiled",
      c: "walking slowly",
      d: "when the sun rises"
    },
    correct: "c"
  },
  {
    question: "Which part of speech is used to name a person, place, or thing?",
    options: {
      a: "Verb",
      b: "Adjective",
      c: "Noun",
      d: "Conjunction"
    },
    correct: "c"
  },
  {
    question: "Identify the pronoun in: 'They are going to the mall.'",
    options: {
      a: "going",
      b: "mall",
      c: "They",
      d: "to"
    },
    correct: "c"
  },
  {
    question: "Which sentence uses correct subject-verb agreement?",
    options: {
      a: "There is many reasons to try.",
      b: "There are many reasons to try.",
      c: "There is many reason to try.",
      d: "There are much reasons to try."
    },
    correct: "b"
  },
  {
    question: "Choose the correct sentence:",
    options: {
      a: "The pack of wolves were howling.",
      b: "The pack of wolves was howling.",
      c: "The pack of wolves is howling.",
      d: "The packs of wolves was howling."
    },
    correct: "b"
  },
  {
    question: "Which is a correct example of parallel structure?",
    options: {
      a: "She likes dancing, to swim, and biking.",
      b: "She likes to dance, swim, and bike.",
      c: "She likes dancing, swimming, and to bike.",
      d: "She likes dance, swimming, and biking."
    },
    correct: "b"
  },
  {
    question: "Which of the following is a compound-complex sentence?",
    options: {
      a: "I went home because I was tired.",
      b: "She likes tea, and he likes coffee.",
      c: "Although it was late, he stayed up and studied.",
      d: "He ate dinner, then he went to bed."
    },
    correct: "c"
  },
  {
    question: "Which part of speech connects words or phrases?",
    options: {
      a: "Preposition",
      b: "Conjunction",
      c: "Adverb",
      d: "Interjection"
    },
    correct: "b"
  },
  {
    question: "Identify the preposition in: 'The book is under the table.'",
    options: {
      a: "book",
      b: "is",
      c: "under",
      d: "table"
    },
    correct: "c"
  },
  {
    question: "Which question shows you're actively listening?",
    options: {
      a: "Why are you talking?",
      b: "What do you mean by that?",
      c: "Can you hurry up?",
      d: "What else?"
    },
    correct: "b"
  },
  {
    question: "Which phrase functions as an adjective?",
    options: {
      a: "in the corner",
      b: "very quietly",
      c: "covered with dust",
      d: "to run quickly"
    },
    correct: "c"
  },
  {
    question: "Which clause is independent?",
    options: {
      a: "because she was late",
      b: "after the show ended",
      c: "he called his friend",
      d: "if I can find it"
    },
    correct: "c"
  },
  {
    question: "Which of the following is a sentence fragment?",
    options: {
      a: "He played the piano beautifully.",
      b: "While she was cooking.",
      c: "They went to the mall.",
      d: "The dog barked loudly."
    },
    correct: "b"
  },
  {
    question: "Which sentence is a run-on?",
    options: {
      a: "He ran fast, he won the race.",
      b: "He ran fast. He won the race.",
      c: "He ran fast and won the race.",
      d: "Because he ran fast, he won."
    },
    correct: "a"
  },
  {
    question: "Which is a compound subject?",
    options: {
      a: "Dogs bark.",
      b: "The dog and the cat fight.",
      c: "He is kind.",
      d: "That boy runs."
    },
    correct: "b"
  },
  {
    question: "What is the function of a noun clause?",
    options: {
      a: "To describe a noun",
      b: "To act as a subject or object",
      c: "To modify a verb",
      d: "To replace a verb"
    },
    correct: "b"
  },
  {
    question: "Which phrase is an infinitive phrase?",
    options: {
      a: "to read a book",
      b: "reading a book",
      c: "book on the table",
      d: "has read a book"
    },
    correct: "a"
  },
  {
    question: "What should a listener do to clarify understanding?",
    options: {
      a: "Guess the meaning",
      b: "Ignore unfamiliar words",
      c: "Ask for clarification",
      d: "Stay silent"
    },
    correct: "c"
  },
  {
    question: "Which part of speech is the word 'wow' in 'Wow! That’s amazing!'?",
    options: {
      a: "Noun",
      b: "Verb",
      c: "Adjective",
      d: "Interjection"
    },
    correct: "d"
  },
  {
    question: "Choose the correct sentence:",
    options: {
      a: "Neither of them are correct.",
      b: "Neither of them is correct.",
      c: "Neither them is correct.",
      d: "Neither are correct."
    },
    correct: "b"
  },
  {
    question: "Which one is an example of a main clause?",
    options: {
      a: "If he comes to the party",
      b: "Because she studied hard",
      c: "She passed the exam",
      d: "When the bell rings"
    },
    correct: "c"
  },
  {
    question: "What is the role of a conjunction?",
    options: {
      a: "It replaces a noun.",
      b: "It describes a noun.",
      c: "It connects clauses or sentences.",
      d: "It expresses emotion."
    },
    correct: "c"
  },
  {
    question: "Identify the conjunction in: 'He played well, but he lost.'",
    options: {
      a: "He",
      b: "played",
      c: "but",
      d: "lost"
    },
    correct: "c"
  },
  {
    question: "Which is the correct verb form: 'The team ___ winning this season.'",
    options: {
      a: "are",
      b: "have",
      c: "is",
      d: "were"
    },
    correct: "c"
  },
  {
    question: "What part of speech is 'beautiful' in 'She is beautiful'?",
    options: {
      a: "Noun",
      b: "Adjective",
      c: "Adverb",
      d: "Verb"
    },
    correct: "b"
  },
  {
    question: "Which of the following is a complete sentence?",
    options: {
      a: "After the long day.",
      b: "Running fast.",
      c: "The boy kicked the ball.",
      d: "If he calls."
    },
    correct: "c"
  },
  {
    question: "Which is a correct example of a compound predicate?",
    options: {
      a: "She sang.",
      b: "She sang and danced.",
      c: "She and her brother danced.",
      d: "The girl and the dog."
    },
    correct: "b"
  },
  {
    question: "Which part of speech shows the relationship between a noun and another word?",
    options: {
      a: "Verb",
      b: "Adjective",
      c: "Preposition",
      d: "Interjection"
    },
    correct: "c"
  },
  {
    question: "What does paraphrasing involve?",
    options: {
      a: "Repeating exactly",
      b: "Ignoring details",
      c: "Restating in your own words",
      d: "Asking unrelated questions"
    },
    correct: "c"
  },
  {
    question: "Which word is an example of a demonstrative pronoun?",
    options: {
      a: "He",
      b: "Them",
      c: "These",
      d: "We"
    },
    correct: "c"
  },
  {
    question: "Which of the following is a sentence?",
    options: {
      a: "Jumped over the fence",
      b: "To the store",
      c: "The dog barked",
      d: "Under the table"
    },
    correct: "c"
  }
];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionBtns.forEach(btn => {
    const option = btn.getAttribute("data-option");
    btn.textContent = `${option.toUpperCase()}: ${current.options[option]}`;
    btn.disabled = false;
    btn.style.backgroundColor = "#e0e0e0";
  });
  nextBtn.style.display = "none";
}

optionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-option");
    const correct = quizData[currentQuestion].correct;

    if (selected === correct) {
      btn.style.backgroundColor = "#4caf50";
      score++;
    } else {
      btn.style.backgroundColor = "#f44336";
    }

    optionBtns.forEach(button => button.disabled = true);
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  document.querySelector(".options").innerHTML = "";
  nextBtn.style.display = "block";
}

loadQuestion();

//time logic

const timerEl = document.getElementById("timer");
let totalSeconds = 0;
let timer;
 
function startTimer() {
  timer = setInterval(() => {
    totalSeconds++;
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    timerEl.textContent = `Time: ${minutes}:${seconds}`;

    if (totalSeconds >= 900 ) {
      clearInterval(timer);
      showScore(true);
    }
  }, 400);
};


/* let added_button = document.createElement(button);
added_button.innerHTML = "Next page"; */

function showScore(timeout = false) {
  questionEl.textContent = timeout
    ? `Time's up! You scored ${score} out of ${quizData.length}.`
    : `You scored ${score} out of ${quizData.length}!`;
  document.querySelector(".options").innerHTML = added_button;
  nextBtn.style.display = "none";
  timerEl.style.color = "red";
  clearInterval(timer);
}

startTimer(); // Call at the bottom of script.js