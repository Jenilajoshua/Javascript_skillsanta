Q10.
Consider below as an example of constructor function where we want name and level to bereferred to a function itself, is below example correct or not? Please explain?

function Hero(name, level)
{
name = name;
level = level;
}


Ans:
To refer name and level to the function itself we will use 'this' keyword.


function Hero(name, level)
{
name=this.name;
level=this.level;
}