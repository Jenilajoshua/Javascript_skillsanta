const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
var copy_out = {
    ...name,
    ...details
};

console.log(copy_out);