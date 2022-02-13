function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h5>" + number1 + " X " + number2 + "</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
};