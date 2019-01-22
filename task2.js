let actors = [ "Городничий","Аммос Федорович",
            "Артемий Филиппович","Лука Лукич"] ;

let str = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор. 
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`

function getObject(arr) {
    let obj ={};
    for(let i=0;i<arr.length; i++) {
        obj[arr[i]] = [];
    }
    return obj;
}
function compair(str) {
    for(let i = 0; i<actors.length; i++) {
        let index = str.indexOf(actors[i]);
        if(~index) {
            return i;
        }
    }
}
function getActorScript(objectActors, actorName) {
    let script = `${actorName} :` + '\n' + objectActors[actorName].join('\n') + '\n\n';
    return script;
}
function getScript() {
    let script = ``;
    let fulltextArray = str.split('\n'); //Разбили текст на массив строк
    const objectActors = getObject(actors); //Объект ролей

    //Собираем весь текст роли в массив
    for(let rowId = 0; rowId < fulltextArray.length; rowId++) {
        //Определяем Роль
        let actorId = compair(fulltextArray[rowId]);
        let actorName = actors[actorId];
        //Добавляем Текст в Массив
        let start = actors[actorId].length + 1;
        let text = rowId + 1 + ') ' + fulltextArray[rowId].substring(start);
        objectActors[actorName].push(text);
    }

    for(let actor in actors) {
        script += getActorScript(objectActors, actors[actor]);
    }

    return script;
}


//Результат
console.log(getScript());
