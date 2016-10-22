function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
    	return this.inventory.reduce((total, book) => total + book.price, 0);
  	},
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  {title: 'spiderman', price: 10},
  {title: 'LOL', price: 13}
]

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('LOL');


function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user) {
  user.admin = true;
  
  return user;
}

const user = new User(generateId());
createAdminUser(user);


function addNumber(...nums) {
  return nums.reduce((sum, num) => {
    return sum + num;
  },0);
}

addNumber(1,2,3,4,5,6,7);

function validateList(...items) {
  if(items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  
  return items;
}

validateList('orange', 'bread', 'eggs');


var expense = {
  type: 'Business',
  amount: '$53 USD'
};
/*
var type = expense.type;
var amount = expense.amount;
*/
// ES6

const { type, amount } = expense;
type;
amount;


var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({name, extension, size}, {color}) {
  return `${color} The file ${name}.${extension} is size of ${size}`
}

fileSummary(savedFiled, {color: "red"});

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

points.map(([ x, y ]) => {
  return { x, y };
});

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
'---'
toyota;
toyota.drive();
toyota.honk();

class Car {
  constructor({title}) {
    this.title = title;  
  }
  
  drive() {
    return 'vroom';
  }
}

const car = new Car({title: 'Toyota'});
car;
car.drive();

