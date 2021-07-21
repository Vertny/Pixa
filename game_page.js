player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -" + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase =" + word);

    charAT1 = word.charAt(1);
    console.log(charAT1);

    length_divide_2 = Math.floor(word.length / 2);
    charAT2 = word.charAt(length_divide_2);
    console.log(charAT2);

    length_minus_1 = word.length - 1;
    charAT3 = word.charAt(length_minus_1);
    console.log(charAT3);

    remove_charAT1 = word.replace(charAT1, "_");
    remove_charAT2 = remove_charAT1.replace(charAT2, "_");
    remove_charAT3 = remove_charAT2.replace(charAT3, "_");
    console.log(remove_charAT3);

    question_word = "<h4 id = 'word_display'> Q." + remove_charAT3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    check_button = "<br><br><button class ='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""
}
question_chance = "player1";
answer_chance = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    //If the entered word matches with the given word,increment the score of the respective player
    if (answer == word) {
        //To Display the Player Score 
        if (answer_chance == "player2") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        } else {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }

    // To display the question turn of the players
    if (question_chance == "player1") {
        question_chance = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2;
    } else {
        question_chance = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
    }

    //To display the answer turn
    if (answer_chance == "player1") {
        answer_chance = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;
    } else {
        answer_chance = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1;
    }
    document.getElementById("output").innerHTML = "";
}