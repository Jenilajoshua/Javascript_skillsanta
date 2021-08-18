var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company 
Console.log(emp1.company);



Output:

//var Emp1 = Object.create(employee);

//Console.log(emp1.company);

error:undefined occurs
	
	javascript variables are case sensitive so above code won't work .