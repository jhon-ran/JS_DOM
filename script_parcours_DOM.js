// Question 1 :
//Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.

console.log(document.getElementsByTagName("p").length);

//Question 2 :
//Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.

console.log(document.getElementById("coucou").textContent);

//Question 3 :
//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.

//console.log(document.querySelectorAll("a"));
let links = document.querySelectorAll("a");
console.log("Voilà la liste des urls : ");
for (i = 0; i < links.length; i++){
  console.log(links[i].textContent);
}


//Question 4 :
//Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.

let compteMoi = document.getElementsByClassName("compte-moi").length;
console.log(`Num d'éléments contenat la classe compte-moi: ${compteMoi}`);


//Question 5 :
//Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.

let d = document.querySelectorAll('li.compte-moi').length;
console.log(d);


//Question 6 :
//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.

let e = document.querySelectorAll('ol>li.compte-moi').length;
console.log(e);

//Question 7 :
//La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.

let mistery = document.querySelectorAll('div>ul')[1].querySelector('li').innerHTML;

console.log(mistery);