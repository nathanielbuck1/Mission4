
/*Writing a function!*/
$("#calculate1").click(function () {
    let DOC = parseFloat($("#Assighn").val()) * 0.5;
    let GP = parseFloat($("#GP").val()) * 0.1;
    let QZ = parseFloat($("#Qz").val()) * 0.1;
    let MID = parseFloat($("#Mid").val()) * 0.1;
    let FINAL = parseFloat($("#Final").val()) * 0.1;
    let Intex = parseFloat($("#Intex").val()) * 0.1;
    let Total = DOC + GP + QZ + MID + FINAL + Intex;
    let Letter = "A";

/*    Determining the letter grade*/
    if (Total >= 94) {
        Letter = "You got an A";
    } else if (Total >= 90) {
        Letter="You got an A-";
    } else if (Total >= 87) {
        Letter="You got a B+";
    } else if (Total >= 84) {
        Letter="You got a B";
    } else if (Total >= 80) {
        Letter="You got a B-";
    } else if (Total >= 77) {
        Letter="You got a C+";
    } else if (Total >= 74) {
        Letter="You got a C";
    } else if (Total >= 70) {
        Letter="You got a C-";
    } else if (Total >= 67) {
        Letter="You got a D+";
    } else if (Total >= 64) {
        Letter="You got a D";
    } else if (Total >= 60) {
        Letter="You got a D-";
    } else {
        Letter="You got an E";
    }
    $('#Total').val(Total)
    $('#Letter').val(Letter)
}
,);
