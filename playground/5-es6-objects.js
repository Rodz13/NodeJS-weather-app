
//Object property shorthand

const name = 'Rod';
const age = 34;

const user = {
	name,
	age,
	location: 'Tallinn'
}

console.log(user);

//Object destructuring

const product = {
	label: 'Red notebook',
	price: 2,
	stock: 201,
	salePrice: undefined
}

const label = product.label;
const stock = product.stock;

const { label: productLabel, stock, rating = 5 } = product;

console.log(stock);
console.log(productLabel);
console.log(rating);


const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
}

transaction('order', product);

const transactionDefault = (type, { label, stock = 0 }) => {
	console.log(type, label, stock);
}

transactionDefault('order');