console.log('you have 5s to choose filter, after time up the menu will be shown');

var view = confirm(`В каком режиме отображать страницу?  
Ок - сетка; Отмена - список`);
if(view) {
    document.getElementById('select').classList.add('hidden');
} else {
    document.getElementById('text').classList.add('hidden');
}

function sorter() {
    // if(view) {
        var selector = document.getElementById('select');
        var value = selector[selector.selectedIndex].value;
        switch (value) {
            case "priceUp":
                // filter = (a,b) => {
                //     return a.cost - b.cost;
                // }; 
                arrPizzas.sort((a,b)=>a.cost - b.cost);

                break;
            case "priceDown":
                // filter = (a,b) => {
                //     return b.cost - a.cost;
                // }; 
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
        console.log(value)
    // } else {
    //     var iText = document.getElementById('text');
    //     console.log(iText.value);
    // }
}
document.getElementById('select').addEventListener('blur',sorter);
document.getElementById('select').addEventListener('blur',createPizzaList);

// document.getElementById("btn-search").addEventListener('click',filter);
// export default view;

