const startBtn = document.getElementById("start-btn");
const startPage = document.querySelector(".start-container");
const quizPage = document.getElementById("quiz");
function next_page(){
    window.location.href = "quiz.html"
}
startBtn.addEventListener("click", () => {
  /* startPage.style.display = "none";
  quizPage.style.display = "block";
  loadQuestion();
  startTimer(); */
  next_page();
});