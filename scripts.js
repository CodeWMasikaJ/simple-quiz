// Array of quiz questions
const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What color is the sky?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: "Blue"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        correctAnswer: "Paris"
    }
];

// Variables to track the current question, score, and elements
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

// Function to display the current question and options
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question object
    questionElement.textContent = currentQuestion.question; // Display the question text
    optionsElement.innerHTML = ""; // Clear previous options

    // Loop through the options and create buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button"); // Create a button element
        button.textContent = option; // Set the button text to the option
        button.addEventListener("click", () => checkAnswer(option)); // Add a click event listener
        optionsElement.appendChild(button); // Add the button to the options container
    });
}

// Function to check the selected answer and move to the next question
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex]; // Get the current question object
    if (selectedOption === currentQuestion.correctAnswer) { // Check if the answer is correct
        score++; // Increment the score
    }

    // Move to the next question or show the score
    if (currentQuestionIndex < questions.length -1) { //Check if there are more questions.
        currentQuestionIndex++; // Increase the current question index.
        showQuestion(); // Show the next question.
    } else {
        showScore(); // Show the final score.
    }
}

// Function to display the final score
function showScore() {
    questionElement.style.display = "none"; // Hide the question
    optionsElement.style.display = "none"; // Hide the options
    nextButton.style.display = "none"; // Hide the next button
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`; // Display the score
}

//Event listener to the next button.
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

showQuestion(); // Start the quiz