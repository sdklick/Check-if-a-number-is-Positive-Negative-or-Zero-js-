//Check if a number is Positive, Negative, or Zero

const userinput = Number(prompt("please enter a number : "));

if (userinput > 0) {
  console.log(`${userinput} is a Positive nuber`);
} else if (userinput < 0) {
  console.log(`${userinput} is a Negetive nuber`);
} else if (userinput == 0) {
  console.log(`${userinput} is a zero value`);
}
