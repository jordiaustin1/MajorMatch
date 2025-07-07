let currentQuestion = 1;
const totalQuestions = 10;

const questions = [
    {
        text: "I have multiple interests and a natural curiosity about the world.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I enjoy working with people, and I have strong verbal and written communication skills.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I like working with people, and I enjoy variety in my work.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I'm interested in intellectual ideas, including those that are shaped by religious beliefs.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I have strong verbal ability and enjoy learning about other cultures and civilizations through language and literature.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I'm interested in science and in the ability to think logically.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I like to experiment with better and faster ways of doing things.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I like science and math, and I have mechanical aptitude.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I can work on projects very carefully and thoroughly, with patience and determination.",
        options: ["Yes", "Maybe", "No"]
    },
    {
        text: "I'm interested in law and human nature, and I have the ability to correlate and reason.",
        options: ["Yes", "Maybe", "No"]
    },
    // Add other questions here
    // Ensure there are enough questions to match totalQuestions
];

function updateProgressBar() {
    const progressElement = document.querySelector('.progress');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionElement = document.getElementById('total-questions');

    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    progressElement.style.width = progressPercentage + '%';

    currentQuestionElement.textContent = `${currentQuestion}`;
    totalQuestionElement.textContent = `${totalQuestions}`;

    updateQuestion();
}

function updateQuestion() {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    const question = questions[currentQuestion - 1];
    questionTextElement.textContent = question.text;

    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.onclick = () => {
            nextQuestion();
        };
        optionsContainer.appendChild(optionElement);
    });
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        updateProgressBar();
    } else {
        window.location.href = "Aptitude Interest Result.html";
    }
}

function previousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        updateProgressBar();
    }
}

updateProgressBar();
