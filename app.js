alert("Guessing Game.");
alert("Guess the correct number.");

let max=prompt("Enter the maximum number: ");

while (true)
{
    max=parseInt(max);
    if (!max) max=prompt("Invalid choice. Enter max number again: ");
    else break;
}

let target=Math.floor(Math.random() * max) + 1;
console.log(target);

let guess=prompt("Enter your guess:\n(Type 'q' to quit.)");
let attempts=0;
while (true)
{
    if (guess.toLowerCase()==='q')
    {
        alert("You quit the game.");
        break;
    }
    guess=parseInt(guess);

    if (guess)
    {
        attempts++;
        if (guess<target) alert("Guess is too small.");
        else if (guess==target)
        {
            alert(`Correct!\nYou guessed the target in ${attempts} attempts.`);
            break;
        }
        else alert("Guess is too big.");
    }
    guess=prompt("Enter your guess again: ");
}

alert ("Thank you for playing!");