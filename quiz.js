// Function to check the user's answer
function checkAnswer() {
    const correctAnswer ="4":
    const selectedoption = document.querySelector('input [name="quiz"]: checked');
    if (Selecteboption) {
        const userAnswer = selectedoption.value;
        const Feedback = document.getElementById("feedback");
        if (userAnser === correctAnswer) {
            feedback.textcontent = "correct! well done!";

        } else {
            feedback.textcontent = "That's incoerrect. Try again!";

        } else { 
            document.getElementById("feedback").textContent ="please select an answer.";

        }
        document.getElementById("submit-answer").addEventListener("click", checkAnswer);

        
           
    }

}