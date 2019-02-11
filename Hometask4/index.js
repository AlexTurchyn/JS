var arrPizzas = [{name:"4 сезони кохання",filling:"м’ясо качки, чорнослив, айва, соус часниковий, соус BBQ, мед, сир Пармезан, рукола",calories:1800, cost:299,imageURL:"./images/dominos.jpg"},{name:"Піца Супер-гриль",filling:"Мисливські ковбаски, молочні ковбаски, сир моцарелла, гливи, печериці, солодка цибуля, перець болгарський, соус BBQ, соус марінара, петрушка",calories:2000, cost: 229,imageURL:"./images/royal.jpg"},
{name:"Лігурія метрова",filling:"Куряче філе sous-vide, солодкий перець, моцарела, томати, цибуля, орегано, соус Pomodoro",calories:2500, cost:218,imageURL:"./images/4-sira.jpg"},{name:"Піца Ніжний лосось",filling:"Філе лосося, сир Пармезан, вершковий сир, вершки, соус Песто,помідори Черрі, шпинат",calories:1300, cost:400,imageURL:""},
{name:"Карбонара метрова",filling:"Шинка, печериці, моцарела, томати, яйце перепелине, суміш перців, пармезан, соус Carbonara",calories:3000, cost:350,imageURL:"./images/carbonara.jpg"},{name:"Гурмео",filling:"Мисливські ковбаски, салямі пепероні, шинка, куряче філе sous-vide, печериці, орегано, соус BBQ",calories:2500, cost:300,imageURL:"./images/vedji.jpg"},
{name:"Супер м'ясна метрова",filling:"Мисливські ковбаски, салямі пепероні, томати, куряче філе sous-vide, печериці, соус Pomodoro та BBQ, моцарела, орегано",calories:4600, cost:390,imageURL:"./images/chiken-barbekju.jpg"},{name:"Поло",filling:"Куряче філе sous-vide, ананас, моцарела, орегано, соус Pomodoro",calories:4090, cost:167,imageURL:"./images/mjasnaja.jpg"},
{name:"Кампанья метрова",filling:"Мисливські ковбаски, шинка, салямі пепероні, куряче філе sous-vide, печериці, моцарела, томати, рукола, оливки, орегано, соус Pomodoro",calories:4412, cost:450,imageURL:"./images/chiken-karri.jpg"},{name:"Берлусконі",filling:"Вершковий соус з білих грибів та печериць з трюфельним маслом, моцарела, дор блю, орегано, цибуля",calories:2000, cost:350,imageURL:"./images/mjasa.jpg"},
{name:"BBQ метрова",filling:"Грудинка свиняча копчена, куряче філе sous-vide, печериці, моцарела, орегано, томат, перець чилі, базилік, соус Pomodoro",calories:3000, cost:370,imageURL:"./images/dabl-pepperoni.jpg"},{name:"Американо",filling:"Куряче філе sous-vide, салямі пепероні, мисливські ковбаски, кукурудза, моцарела, цибуля, орегано, соус Pomodoro, соус BBQ",calories:2100, cost:320,imageURL:""},
{name:"Карбонара",filling:"Шинка, печериці, пармезан, моцарела, томати, яйце перепелине, суміш перців, соус Carbonara",calories:2000, cost:124,imageURL:"./images/domashnjaja.jpg"},{name:"Пепероні",filling:"Салямі Пепероні, моцарела, орегано, соус Pomodoro",calories:3000, cost:240,imageURL:"./images/mix-bbq.jpg"},
{name:"Чотири сири",filling:"Пармезан, дор блю, чеддер, моцарела, груша, волоський горіх, соус вершковий",calories:1500, cost:144,imageURL:"./images/ekstravagantnaja.jpg"},{name:"Маргарита",filling:"Томати, моцарела, орегано, базилік, соус Pomodoro",calories:3000, cost:290,imageURL:"./images/gavajskaja.jpg"}];


function noImage() {
    if(!("imageURL" in this) || this.imageURL.length == 0) return true;
    return false;
}
function createFillingUl() {
    let ul = document.createElement('ul');
    let arr = this.filling.split(",");
    arr.forEach(item =>{
        let li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    });
    return ul.innerHTML;
}
function createPizzaGrid(pizza) {
    let div = document.createElement('div');
    let li  = document.createElement('li');
    let name = document.createElement('p')
    let img = document.createElement('img');
    let label = document.createElement('label');
    let str = document.createElement("div")

    if(noImage.call(pizza)) {
        console.log("There is no photo for pizza " + name)
        img.src = "./images/default.jpg";
    } else {
        img.src = pizza.imageURL;
    }
    // img.classList.add('hidden');
    name.innerHTML = pizza.name.toUpperCase();
    name.className = "name";
    label.innerHTML = "Состав";
    label.htmlFor = `press${pizza.name}`;
    str.className="spoiler";
    str.innerHTML = `
        <input type="checkbox" id="press${pizza.name}" class="used">
        <div class="block">
            <ul class = "filling">
                ${createFillingUl.call(pizza).replace(/"/g,"")}
            </ul>
        </div>
    <p>Калории: ${pizza.calories}</p><p>Цена: ${pizza.cost}</p>`;

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(label);
    div.appendChild(str);
    li.className= "ulGrid";
    li.appendChild(div);
    let ul = document.querySelector('#menu');
    ul.appendChild(li);
}
function createPizzaList(pizza) {
    let div = document.createElement('div');
    let li  = document.createElement('li');
    let img = document.createElement('img');
    let str = document.createElement("p")

    img.src = "./images/pizza_label.png";
    str.innerHTML = `${pizza.name.toUpperCase()}, Цена: ${pizza.cost}`;

    div.appendChild(img);
    div.appendChild(str);
    li.appendChild(div);
    li.className ="ulList";
    let ul = document.querySelector('#menu');
    ul.appendChild(li);
}
function createMenuList() {
    let ul = document.querySelector('#menu');
    ul.innerHTML = "";
    arrPizzas.forEach(pizza => {
        createPizzaList(pizza);
    });
}
function createMenuGrid () {
    let ul = document.querySelector('#menu');
    ul.innerHTML = "";
    this.forEach(pizza => {
        createPizzaGrid(pizza);
    });
}
function sorter() {

    var selector = document.getElementById('select');
    var value = selector[selector.selectedIndex].value;
    switch (value) {
        case "priceUp":
            arrPizzas.sort((a,b)=>a.cost - b.cost);
            break;
        case "priceDown":
            arrPizzas.sort((a,b)=>b.cost - a.cost);
            break;
        case "A-Z":
            arrPizzas.sort((a,b)=>{
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
            });
            break;
        case "Z-A":
            arrPizzas.sort((a,b)=>{
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
            }).reverse();
            break;
    }
    console.log(value);
}
function filter() {
    var iText = document.getElementById('text');
    let patern = iText.value.toLowerCase();
    let arr = arrPizzas.filter((pizza)=>{
        if(pizza.filling.toLowerCase().indexOf(patern)!=-1) {
            return true; 
        } else {
            return false;
        }
    });
    console.log(arr);
    return arr;
}
function done() {
    const newArr = filter();
    createMenuGrid.call(newArr);
}


var view = confirm(`В каком режиме отображать страницу?  
Ок - сетка; Отмена - список`);

if(view) {
    createMenuGrid.call(arrPizzas);
    document.getElementById('select').classList.add('hidden');
} else {
    createMenuList();
    document.getElementById('text').classList.add('hidden');
}

document.getElementById('select').addEventListener('change',sorter);
document.getElementById('select').addEventListener('change',createMenuList);
document.getElementById('text').addEventListener('change',done);


// let temp = document.getElementsByClassName('ulGrid');
// let cards = [].slice.call(temp);
// console.log(cards);
// cards.forEach((card)=>{
    
//     card.addEventListener("click",(e)=>{
//         if(e.target.tagName!='IMG') {
//             card.getElementsByTagName('img')[0].classList.remove('hidden');
//         }
//     });
//     card.addEventListener('click', ()=> {card.classList.add('transformed')});
// });