function foo1()
{
return {
bar: "hello"
};
}

function foo2()
{
return
{
bar: "hello"
};
}


Ans: 
	yes they will give same output by calling the function

	document.write(foo2().bar)
	document.write(foo1().bar)
