const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };


//access and print greet function from the above object code

console.log(gimli.greet());