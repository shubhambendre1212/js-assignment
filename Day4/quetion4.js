let num1=Number(prompt("Enter a 1st numbers :"));
let num2=Number(prompt("Enter a 2st numbers :"));
//console.log(`${res[0]} and ${res[1]}`);


let ch=Number(prompt("Choose option from following: \n 1.Addition \n 2.Substraction \n 3.Multiplication \n 4.division \n 5.Square Root \n 6.Percentage"));

switch(ch)
{
    case 1:let add=num1+num2;
        console.log("Addition");
        console.log(add);
    break;
    case 2:let sub=num1+num2;
        console.log("Substraction")
        console.log(sub);
    break;
    case 3:let mult=num1+num2;
        console.log("Multiplication");
        console.log(mult);
    break;
    case 4:
        let div=num1+num2;
        console.log("Division");
        console.log(div);
    break;
    case 5:console.log("Square root");
        console.log(Math.sqrt(num1));
        console.log(Math.sqrt(num2));
    break;
    case 6:console.log("Percentage");
        let t=Number(prompt("Enter a total:"));
        let perc= ((num1+num2)/t)*100;
        console.log(perc);
    break;
    default:
        console.log("Choose correct input");
    break;
}