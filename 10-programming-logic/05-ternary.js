const pontuacaoUsuario = 9999;

const resultado = pontuacaoUsuario > 1000 ? 'Usuario com direito a sala VIP !' : 'Usuario não elegivel a sala VIP';

console.log(resultado)


const userColor = null;
const colorDefault = userColor || 'preto';

console.log(colorDefault);

const userName = '';
const userGuest = userName || 'guest';

console.log(userGuest);


let ageUser = 17;
let statusUser = ageUser >= 18 ? 'Maior de idade ' : 'Menor de idade';

console.log(statusUser);

// ex:

const oderTotal = 150;
const shippingStatus = oderTotal >= 100 ? 'Free Shipping' : 'Paid Shipping';

console.log(shippingStatus);

// EX2:

const userCoupon = 'SAVE20';
const appliedCoupon = userCoupon || 'NO_COUPON';

console.log(appliedCoupon)


// eEX3: 

const ProductStock = 12;
const availabilityStatus = ProductStock > 0 ? 'In stock' : 'Out of stock';

console.log(availabilityStatus);


// EX4: 

const userLanguage = 'Portuguese';
const appLanguage = userLanguage || 'English';

console.log(appLanguage);

