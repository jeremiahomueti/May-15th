var outerWear = "T-Shirt";

function myOutfit()
{
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit());

/*Point of this was to show that local variables take 
precedence when called, over global variables.

Outwear is the global variable and runs when no variable
is defined within the function block.


As soon as a variable is declared within the function block,
notice that they both have the same names to show you 
which variable is actually been run, the local variable 
takes precedence. */