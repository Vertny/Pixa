function back() {
    window.location = "activity_1.html"
}

function score() {
    score = localStorage.getItem("mark");
    document.getElementById("update").innerHTML = "<h1>Score: " + score + "</h1>";
}