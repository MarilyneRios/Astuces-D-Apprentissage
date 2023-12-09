/* déclarer 2 variables: adults et children  */
let distance;
let vitesse;

/* Ensuite initialisez-les  */
distance = 200;
vitesse = 100;

/*pour la variable distance, ajouter if qui vérifie si négative alors  la valeur 0 */
if(distance<0){
    distance=0;
}
/*pour la variable vitesse  , ajouter if qui vérifie si négative alors  la valeur 0 */
if(vitesse<0){
    vitesse=0;
}

/* nouvels variables: durée en heures et durée en minutes*/
let durée_heures;
let durée_minutes;

/*caluler la durée en heures */
durée_heures = distance/vitesse;

/* caluler la durée en minutes*/
durée_minutes = durée_heures *60;

/*afficher sur la console les durée en heures et minutes*/
console.log(durée_heures)
console.log(durée_minutes)

/* code pour Afficher le résultat quand on clique sur le bouton Résultat */
/*définir les  fonctions durée_heures et durée_minutes */
function calc_h(distance,vitesse){
    alert(durée_heures = distance/vitesse);
}

function calc_m(durée_heures){
    alert(durée_minutes = durée_heures * 60);
}

/* ajoutez le gestionnaire d'événements windows.onload*/
window.onload = function(){

    /*mettre la référence du bouton Résultats*/
    let btn = document.getElementById("resultBtn");

    /*gérer l'événement de clic du bouton Résultat*/
    btn.onclick = function(){
        /*pour la distance*/
        let distance = document.getElementById("km").value;

        /*pour la vitesse*/
        let vitesse = document.getElementById("vitesse").value;

        /*calculer la durée*/
       let  durée_heures = calc_h (distance, vitesse);
    

       /*afficher avec une alerte le résultat*/
        alert(durée_heures);
    }
}