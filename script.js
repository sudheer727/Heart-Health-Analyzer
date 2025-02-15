document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let weight = document.getElementById("weight").value;
    let cholesterol = document.getElementById("cholesterol").value;
    let bp = document.getElementById("bp").value;

    let result = analyzeHeartHealth(age, gender, weight, cholesterol, bp);
    document.getElementById("result").innerText = result;
});

function analyzeHeartHealth(age, gender, weight, cholesterol, bp) {
    if (cholesterol > 200 || bp > 130) {
        return "Your heart health is at risk. Consider visiting a doctor.";
    } else {
        return "Your heart health looks good. Keep maintaining a healthy lifestyle!";
    }
}
