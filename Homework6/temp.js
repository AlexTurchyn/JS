var arrPizzas = [{name:"4 сезони кохання",filling:"м’ясо качки, чорнослив, айва, соус часниковий, соус BBQ, мед, сир Пармезан, рукола",calories:1800, cost:299,imageURL:"./images/dominos.jpg"},{name:"Супер-гриль",filling:"Мисливські ковбаски, молочні ковбаски, сир моцарелла, гливи, печериці, солодка цибуля, перець болгарський, соус BBQ, соус марінара, петрушка",calories:2000, cost: 229,imageURL:"./images/royal.jpg"},
{name:"Лігурія метрова",filling:"Куряче філе sous-vide, солодкий перець, моцарела, томати, цибуля, орегано, соус Pomodoro",calories:2500, cost:218,imageURL:"./images/4-sira.jpg"},{name:"Ніжний лосось",filling:"Філе лосося, сир Пармезан, вершковий сир, вершки, соус Песто,помідори Черрі, шпинат",calories:1300, cost:400,imageURL:""},
{name:"Карбонара метрова",filling:"Шинка, печериці, моцарела, томати, яйце перепелине, суміш перців, пармезан, соус Carbonara",calories:3000, cost:350,imageURL:"./images/carbonara.jpg"},{name:"Гурмео",filling:"Мисливські ковбаски, салямі пепероні, шинка, куряче філе sous-vide, печериці, орегано, соус BBQ",calories:2500, cost:300,imageURL:"./images/vedji.jpg"},
{name:"Супер м'ясна",filling:"Мисливські ковбаски, салямі пепероні, томати, куряче філе sous-vide, печериці, соус Pomodoro та BBQ, моцарела, орегано",calories:4600, cost:390,imageURL:"./images/chiken-barbekju.jpg"},{name:"Поло",filling:"Куряче філе sous-vide, ананас, моцарела, орегано, соус Pomodoro",calories:4090, cost:167,imageURL:"./images/mjasnaja.jpg"},
{name:"Кампанья метрова",filling:"Мисливські ковбаски, шинка, салямі пепероні, куряче філе sous-vide, печериці, моцарела, томати, рукола, оливки, орегано, соус Pomodoro",calories:4412, cost:450,imageURL:"./images/chiken-karri.jpg"},{name:"Берлусконі",filling:"Вершковий соус, моцарела, дор блю, орегано, цибуля",calories:2000, cost:350,imageURL:"./images/mjasa.jpg"},
{name:"BBQ метрова",filling:"Грудинка свиняча копчена, куряче філе sous-vide, печериці, моцарела, орегано, томат, перець чилі, базилік, соус Pomodoro",calories:3000, cost:370,imageURL:"./images/dabl-pepperoni.jpg"},{name:"Американо",filling:"Куряче філе sous-vide, салямі пепероні, мисливські ковбаски, кукурудза, моцарела, цибуля, орегано, соус Pomodoro, соус BBQ",calories:2100, cost:320,imageURL:""},
{name:"Карбонара",filling:"Шинка, печериці, пармезан, моцарела, томати, яйце перепелине, суміш перців, соус Carbonara",calories:2000, cost:124,imageURL:"./images/domashnjaja.jpg"},{name:"Пепероні",filling:"Салямі Пепероні, моцарела, орегано, соус Pomodoro",calories:3000, cost:240,imageURL:"./images/mix-bbq.jpg"},
{name:"Чотири сири",filling:"Пармезан, дор блю, чеддер, моцарела, груша, волоський горіх, соус вершковий",calories:1500, cost:144,imageURL:"./images/ekstravagantnaja.jpg"},{name:"Маргарита",filling:"Томати, моцарела, орегано, базилік, соус Pomodoro",calories:3000, cost:290,imageURL:"./images/gavajskaja.jpg"}];

let tempArr = new Set();
 arrPizzas.forEach((pizza)=>{
    let temp = pizza.filling.toLowerCase().replace(/, /g,",").split(",");
    temp.forEach(item =>{
        tempArr.add(item);
    });
});
tempArr = [...tempArr].sort(); //отсорированный уникальный массив ингридиентов.

(function fillIngridientsSelector() {
    let selector = document.getElementById("select-ingridient");
    tempArr.forEach(item =>{
        let option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        selector.appendChild(option);
    });    
})();

//Добавление ингридиента в Сет и на страницу а также подсчет calories
(function(){
    console.log(selector);
    var selector = document.getElementById("select-ingridient");
    selector.addEventListener('change',fillCustomPizzaFilling);

    function addIngridientToPage(ingridient) {
        console.log(ingridient);
        let str = document.createElement('div');
        str.classList.add('ingridient');
        str.innerHTML = `<span>${ingridient}</span> <div id="deleteCustomIngridient" class="btn-delete-ingridient">&#10008;</div>`;
        ingDiv.appendChild(str);
    }

    function fillCustomPizzaFilling() {
        // console.log("Hi");
        let ingridient = selector[selector.selectedIndex].value;
        if(fillingSet.has(ingridient)) { console.log("Hi"); return};
        fillingSet.add(ingridient);
        addIngridientToPage(ingridient);
        counter += randomCalories(5, 10);
        calories.innerHTML = counter;
    }
    
})();

//расчет кол калорий 
function randomCalories(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}


// создание кастомной пиццы
function createCustomPizza() {
    if(customPizzaName.value.length!=0 && fillingSet.size!=0) {
        fillingSet = [...fillingSet].join(",");
        let newPizza = {name:customPizzaName.value,filling: fillingSet, calories:counter, cost:400};
        
        counter = 0;
        ingDiv.innerHTML ="";
        customPizzaName.value="";
        calories.innerHTML = counter;
        fillingSet = new Set();
        store.push( new Pizza(newPizza) );

        localStorage.setItem("myPizzas", JSON.stringify(newPizza));

        container.appendChild(store[store.length-1].getCardGrid());
    } else {
        alert("Хмм... Чего-то не хватает :(\nПросмотрите, все поля должны быть заполнены");
        return;
    }
}


// localStorage.setItem(myPizzas,5);
// var arrMyPizzas=[];

var counter = 0;
var fillingSet = new Set();

var ingDiv = document.getElementById("ing");

let customPizzaName = document.getElementById("custom-pizza-name");
var calories = document.getElementById("pizza-custom-calories");
calories.innerHTML = counter;
var deleteIng = document.getElementById("deleteCustomIngridient");
ingDiv.onclick = (e) => {
    if(e.target.id === "deleteCustomIngridient")
    ingDiv.removeChild(e.target.parentElement);
    fillingSet.delete(e.target.previousElementSibling.innerHTML);
    counter-=5;
    if(fillingSet.size==0) {counter=0}
    calories.innerHTML= counter; 
}



let customPizzBtnCreate = document.getElementById("custom-pizza-btn-create");
customPizzBtnCreate.addEventListener('click',createCustomPizza);



function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

  }
  else {
    // Too bad, no localStorage for us
  }






