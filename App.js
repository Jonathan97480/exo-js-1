/* Etape 1 crée une variable de type erray qui va contenir des objet qui ressemble a{nom:string,age:number,sexe:tring } */
let users=[
    {
        nom: "Dupont",
        age: 30,
        sexe: "Masculin"
    },
    {
        nom: "Celine",
        age: 40,
        sexe: "Feminin"
    },
    {
        nom: "Fred",
        age: 30,
        sexe: "Masculin"
    }
    ,
    {
        nom: "Marie",
        age: 40,
        sexe: "Feminin"
    }



]




/* Etape 2 affiche les info sous forme de liste en utilisant ul présent dans html du projet  */
ul=document.querySelector("ul");
for (let i=0;i<users.length;i++) {
    let li=document.createElement("li");
    li.innerHTML=`${users[i].nom} ${users[i].age} ${users[i].sexe}`;
    ul.appendChild(li);
}







/* Etap2 3 créé input de recherche que tu va injecter dans le dom en js avec un appenchild  */
let input=document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Rechercher");
document.body.appendChild(input);








/* Etape   4 utiliser la propriété du type array qui permet de recherche avec un filter les éléments qui correspond a se que utilisateurs va entrée dans l'input de recherche   */
input.addEventListener("keyup", function () {
    let search=input.value;
    let result=users.filter(function (user) {
        return user.nom.toLowerCase().includes(search.toLowerCase());
    }
    );
    ul.innerHTML="";
    result.map((result, i) => {


        let li=document.createElement("li");

        li.innerHTML=`${result.nom} ${result.age} ${result.
            sexe}`;

        ul.appendChild(li);

    })

    /* for (let i=0;i<result.length;i++) {
        let li=document.createElement("li");
        li.innerHTML=`${result[i].nom} ${result[i].age} ${result[i].
            sexe}`;
        ul.appendChild(li);
    } */
}
);