let x = Number(prompt("Enter 1st number:"));
let y = Number(prompt("Enter 2nd number:"));
let choise = (prompt("1-summary \n 2-substraction \n 3-multiplication \n 4-dividing \n 5-exit"));

if (choise == 1) {
    let sum = x + y;
    alert("summary =" + sum);
}
else if (choise == 2) {
    let sub = x - y;
    alert("Substraction =" + sub);
}
else if (choise == 3) {
    let mul = x * y;
    alert("Multiplication =" + mul); 
}
else if (choise == 4) {
    if (x ==0 || y == 0) {
        alert("You cant divide by 0")
    }
    else {
        let div = x / y;
        alert("Dividing =" + div);
    }
    
}
else if (choise == 5) {
    alert("Exit");
}
else {
    alert("invalid choise");
}


