const total = localStorage.getItem("total");
console.log(total);
const order = JSON.parse(localStorage.getItem("order"));
console.log(order);

const priceOrder = document.getElementById('priceOrder');
priceOrder.innerHTML = 'Prix total : ' + total + '€';

const idOrder = document.getElementById('idOrder');
idOrder.innerHTML = 'Identifiant de la commande : ' + order.orderId ;

localStorage.clear();