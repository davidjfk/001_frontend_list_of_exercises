/*
3. The Grade Assigner 
Voor de volgende for-loop krijg je de volgende functie cadeau: 
*/
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}
/*
remark: assignment mentions grade 'F', but there is no grade 'F' in the function above. I choose ignore  this detail. 
*/

/*
Schrijf een for-loop dit "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument.
Console.log vervolgens: "Voor 91 punten, krijg je een A".
De uitkomst is 40 regels lang.
*/

for (let i = 60; i < 100; i++) {
    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}
//remark: result should be 40 lines and  assignment states 60 to 100, but not 60 to 100 included. So I do i < 100 instead of i <= 100.