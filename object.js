var user = {
  name: "John",
  surname: "Mike"
};
user.name = 'Jackie';
delete user.name;


var fruit = {
apple: 20,
pear: 20,
peach: 10,
total: function () { 
    console.log(fruit.apple + fruit.peach + fruit.pear);
  }
};
