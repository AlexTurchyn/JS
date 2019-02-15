var arrPizzas = [{name:"4 сезони кохання",filling:"м’ясо качки, чорнослив, айва, соус часниковий, соус BBQ, мед, сир Пармезан, рукола",calories:1800, cost:299,imageURL:"./images/dominos.jpg"},{name:"Піца Супер-гриль",filling:"Мисливські ковбаски, молочні ковбаски, сир моцарелла, гливи, печериці, солодка цибуля, перець болгарський, соус BBQ, соус марінара, петрушка",calories:2000, cost: 229,imageURL:"./images/royal.jpg"},
{name:"Лігурія метрова",filling:"Куряче філе sous-vide, солодкий перець, моцарела, томати, цибуля, орегано, соус Pomodoro",calories:2500, cost:218,imageURL:"./images/4-sira.jpg"},{name:"Піца Ніжний лосось",filling:"Філе лосося, сир Пармезан, вершковий сир, вершки, соус Песто,помідори Черрі, шпинат",calories:1300, cost:400,imageURL:""},
{name:"Карбонара метрова",filling:"Шинка, печериці, моцарела, томати, яйце перепелине, суміш перців, пармезан, соус Carbonara",calories:3000, cost:350,imageURL:"./images/carbonara.jpg"},{name:"Гурмео",filling:"Мисливські ковбаски, салямі пепероні, шинка, куряче філе sous-vide, печериці, орегано, соус BBQ",calories:2500, cost:300,imageURL:"./images/vedji.jpg"},
{name:"Супер м'ясна метрова",filling:"Мисливські ковбаски, салямі пепероні, томати, куряче філе sous-vide, печериці, соус Pomodoro та BBQ, моцарела, орегано",calories:4600, cost:390,imageURL:"./images/chiken-barbekju.jpg"},{name:"Поло",filling:"Куряче філе sous-vide, ананас, моцарела, орегано, соус Pomodoro",calories:4090, cost:167,imageURL:"./images/mjasnaja.jpg"},
{name:"Кампанья метрова",filling:"Мисливські ковбаски, шинка, салямі пепероні, куряче філе sous-vide, печериці, моцарела, томати, рукола, оливки, орегано, соус Pomodoro",calories:4412, cost:450,imageURL:"./images/chiken-karri.jpg"},{name:"Берлусконі",filling:"Вершковий соус з білих грибів та печериць з трюфельним маслом, моцарела, дор блю, орегано, цибуля",calories:2000, cost:350,imageURL:"./images/mjasa.jpg"},
{name:"BBQ метрова",filling:"Грудинка свиняча копчена, куряче філе sous-vide, печериці, моцарела, орегано, томат, перець чилі, базилік, соус Pomodoro",calories:3000, cost:370,imageURL:"./images/dabl-pepperoni.jpg"},{name:"Американо",filling:"Куряче філе sous-vide, салямі пепероні, мисливські ковбаски, кукурудза, моцарела, цибуля, орегано, соус Pomodoro, соус BBQ",calories:2100, cost:320,imageURL:""},
{name:"Карбонара",filling:"Шинка, печериці, пармезан, моцарела, томати, яйце перепелине, суміш перців, соус Carbonara",calories:2000, cost:124,imageURL:"./images/domashnjaja.jpg"},{name:"Пепероні",filling:"Салямі Пепероні, моцарела, орегано, соус Pomodoro",calories:3000, cost:240,imageURL:"./images/mix-bbq.jpg"},
{name:"Чотири сири",filling:"Пармезан, дор блю, чеддер, моцарела, груша, волоський горіх, соус вершковий",calories:1500, cost:144,imageURL:"./images/ekstravagantnaja.jpg"},{name:"Маргарита",filling:"Томати, моцарела, орегано, базилік, соус Pomodoro",calories:3000, cost:290,imageURL:"./images/gavajskaja.jpg"}];


class Pizza {
    constructor (pizza) {
        this.imageURL = pizza.imageURL,
        this.name = pizza.name,
        this.filling = pizza.filling;
        this.calories =pizza.calories;
        this.cost = pizza.cost;
        this.matchesTheFilter = true;
    }

    getCardLi() {
        let str = document.createElement('li');
        str.innerHTML = `
            <img src="./images/pizza_label.png" alt="pizza">
            <span>${this.name}</span>
            <span>${this.cost}</span>
        `;
        return str;
    }

    getCardGrid() {
        let str = document.createElement('div');
        str.classList.add('card');
        str.id = this.name;
        str.innerHTML = `
        <div class="flip_effect_vertical hidden" id="wrap-image">
            <img src=${this.getImage()} alt="pizza" class="front">
            <img src="./images/pizza_label.png" alt="pizza" class="back">
        </div>
        <div>
            <p>${this.name.toUpperCase()}</p>
            <label for="checkbox${this.name}" id="label_filling">Состав</label>
            <div class="spoiler">
                <input type="checkbox" class="hidden" id="checkbox${this.name}">
                <div class="block">
                    <ul>
                        ${this.createFillingUl().replace(/"/g,"")}
                    </ul>
                    <input type="button" value="Добавить" onclick="Pizza.btnAddElement.call(this)">
                    <input type="button" value="Удалить" onclick="btnDeleteElement.call(this)">
                </div>
            </div>
            <p id="Calories">Калорий: ${this.calories}</p>
            <p>Цена: ${this.cost}</p>
        </div>`;
        return str;
    }

    getImage() {
        if(this.imageURL.length != 0) return this.imageURL;
        return "./images/default.jpg";
    }

    createFillingUl() {
        let ul = document.createElement('ul');
        let arr = this.filling.split(",");
        arr.forEach(item =>{
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        });
        return ul.innerHTML;
    }

    static btnAddElement () {
        if(element.length == 0) return;
        console.log(this.previousElementSibling);
        let li = document.createElement('li');
        li.innerHTML = element;
        this.previousElementSibling.appendChild(li);
    }
}

function btnDeleteElement () {

}

//------дополнительное меню для выбора ингридиента-------
var element = "";
function getClickElement () {
    var list = document.getElementById('additionFillings');
    list.addEventListener('click',(e)=>{
        if(e.target.tagName == "P") {
            element = e.target.innerHTML;
            console.log(element);
        }
    });
}
getClickElement();
//------------------------------------------------------

//-----------Фильтр по ингридиенту-----------------
function getPizzasWithSpecifiedIngridient () {
    var iText = document.getElementById('text');
    let pattern = iText.value.toLowerCase();
    store.forEach(pizza => {
        if(pizza.filling.toLowerCase().indexOf(pattern)!=-1) {
            pizza.matchesTheFilter = true;
        } else {
            pizza.matchesTheFilter = false;
        }
    });
}
document.getElementById('text').addEventListener('change',getPizzasWithSpecifiedIngridient);
document.getElementById('text').addEventListener('change',getMenu);
//-------------------------------------------------

//------------Сортировка------------------
function sorter () {

    var selector = document.getElementById('select');
    var value = selector[selector.selectedIndex].value;
    switch (value) {
        case "priceUp":
            store.sort((a,b)=> a.cost - b.cost);
            console.log(store);
            break;
        case "priceDown":
            store.sort((a,b)=>b.cost - a.cost);
            console.log(store);
            break;
        case "A-Z":
            store.sort((a,b)=>{
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
            });
            console.log(store);
            break;
        case "Z-A":
            store.sort((a,b)=>{
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
            }).reverse();
            break;
    }
    console.log(value);
}
document.getElementById('select').addEventListener('change',sorter);
document.getElementById('select').addEventListener('change',getMenu);
//------------------------------------------


//--------Функция отрисовки меню------------
function getMenu () {
    view = selector[selector.selectedIndex].value;
    console.log(view);

    if(store.length == 0) {
        //создали экземпляры класса Pizza
        arrPizzas.forEach( item => {
            store.push( new Pizza(item) );
        // container.appendChild(store[store.length-1].getCardGrid());
        });
    }
    container.innerHTML = "";
    menu.innerHTML = "";
    store.forEach( pizza => {
        if(pizza.matchesTheFilter) {

            switch(view) {
                case "grid" :
                    btnFilling.classList.remove('hidden');
                    divSort.classList.add('hidden');
                    divIngridient.classList.remove('hidden');
                    container.appendChild(pizza.getCardGrid());
                    break;
                case "list":
                    btnFilling.classList.add('hidden');
                    divIngridient.classList.add('hidden');
                    divSort.classList.remove('hidden');
                    menu.appendChild(pizza.getCardLi());
                    break;
            }
        }
    });
}
//---------------------------------------------
document.getElementById('select-menu-view').addEventListener('change',getMenu);



//-----------------
dragElement(document.getElementById("additionFillings"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//--------------------

// точка входа 
var store = []; //массив в которм храняться все экземпляры класса Pizza

let menu = document.getElementById('menu');
let container = document.getElementById('container');
var divSort = document.getElementById('div_sort');
var divIngridient = document.getElementById('div_ingridient');
var btnFilling = document.getElementById('btn_filling');
var selector, flag, view;
selector = document.getElementById('select-menu-view');
flag = confirm(`В каком режиме отображать страницу?  
Ок - сетка; Отмена - список`);
if (flag) {
        selector.options[0].selected = true;
    } else{
        selector.options[1].selected = true;
    }
getMenu();

btnFilling.onclick = () => {
    let ad = document.getElementById('additionFillings');
    if(isOpen) { 
        ad.classList.add('hidden');
    } else {
        ad.classList.remove('hidden');
    }
}
var isOpen= false;
store.forEach(pizza => {
    document.getElementById(`${pizza.name}`).onclick = (e) => {
        let image = e.currentTarget;
        // image.classList.add('transformed');
        image.querySelector('#wrap-image').classList.remove('hidden');
    }
});

