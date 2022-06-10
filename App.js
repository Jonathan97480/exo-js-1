/* Etape 1 crée une variable de type erray qui va contenir des objet qui ressemble a{nom:string,age:number,sexe:tring } */
let info = [
    {
        nom: 'Teddy',
        age: 22,
        sexe: 'Masculin'
    },
    {
        nom: 'Jonathan',
        age: 38,
        sexe: 'Masculin'
    },
    {
        nom: 'Hamza',
        age: 2,
        sexe: 'Masculin'
    },
    {
        nom: 'Marie',
        age: 25,
        sexe: 'Feminin'
    }
];

/* Etape 2 affiche les info sous forme de liste en utilisant ul présent dans html du projet  */
let ul = document.querySelector('ul');
for (var i = 0; i < info.length; i++) {
    let user = info[i];
    let li = document.createElement("li");
    li.innerHTML = `name: ${user.nom}, age ${user.age}, sexe ${user.sexe} `;
    ul.appendChild(li);
}

/* Etap2 3 créé input de recherche que tu va injecter dans le dom en js avec un appenchild  */

let input = document.createElement('input');
input.type = "search";
input.name = "recherche";

document.getElementById('app').appendChild(input);

/* Etape   4  utiliser la propriété du type array qui permet de recherche avec un filter les éléments 
qui correspond a se que utilisateurs va entrée dans l'input de recherche   */
input.addEventListener('keyup', (e) => {
    let value = e.target.value;
    let result = info.filter(function (utilisateur) {
        return utilisateur.nom.toLowerCase().includes(value.toLowerCase());
    })
    ul.innerHTML = "";
    for (var i = 0; i < result.length; i++) {
        let li = document.createElement('li');
        let users = result[i];
        li.innerHTML = `name: ${users.nom}, age ${users.age}, sexe ${users.sexe}`;
        ul.appendChild(li);
    }
})



