let counterPizzas = document.querySelector(".header_bag .ordersCounter");
counterPizzas.innerHTML = localStorage.length;
for(let i = 0; i < localStorage.length; i++) {
    let li = document.createElement('li');    
    let pizza = JSON.parse(localStorage.getItem(localStorage.key(i)));
    li.innerHTML = `<span class="hidden">${i}</span><img src="./images/pizza_label.png" alt="pizza" width="50px" height="50px" style="vertical-align:middle">
    <p style=" display: inline-block;" class="pizza-definition-details">&emsp;<span style="color: red">${pizza.name.toUpperCase()}</span>&ensp;${pizza.cost},00грн</p>`
    document.querySelector("ul").appendChild(li);
}
let basket = document.getElementById("clearBasket");
basket.onclick = () => {
    let ul = document.querySelector("ul");
    ul.innerHTML="";
    localStorage.clear();
    counterPizzas.innerHTML = 0;
}