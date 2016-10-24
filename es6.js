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

/*
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
*/

class Car {
  constructor({title}) {
    this.title = title;  
  }
  
  drive() {
    return 'vroom';
  }
}

//const car = new Car({title: 'Toyota'});
//car;
//car.drive();

/*
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  
  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
'---'
toyota.honk();
toyota.drive()
toyota;
*/

const nums = [1,2,3,4];
/*
let total = 0;
for(let num of nums) {
  total += num;
}
*/

function* numbers() {
  yield;
}

const gen = numbers();
gen.next();
gen.next();

/*
function* shopping() {
  // stuff on the sidewalk
  
  // walking down the sidewalk
  
  // go into the store with cash
  const stuffFromStore = yield 'cash';
  // walking to laundry place
  const cleanClothes = yield 'laundry';
  
  // walking back home
  return [stuffFromStore, cleanClothes];
}
// stuff in the store
const gen = shopping();
gen.next(); // leaving our home
// walked into the store
// walking up and down the aisles..
// purchase our stuff


gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');
*/



const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
}

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator] : function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator] : function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for(let name of engineeringTeam) {
  names.push(name);
}

names;


class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
}


const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);
tree;

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}


const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}

values;










