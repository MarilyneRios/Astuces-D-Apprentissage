document.addEventListener("click", function() {
    // Sélectionner la balise div avec l'identifiant "resultat"
    const resultatDiv = document.getElementById("resultat");

    /* déclarer les variables distance et vitesse */
    let distance = 200;
    let vitesse = 100;

    /* pour la variable distance, ajouter un if qui vérifie si elle est négative, alors mettre la valeur à 0 */
    if (distance < 0) {
        distance = 0;
    }

    /* pour la variable vitesse, ajouter un if qui vérifie si elle est négative, alors mettre la valeur à 0 */
    if (vitesse < 0) {
        vitesse = 0;
    }

    /* code pour Afficher le résultat quand on clique sur le bouton Résultat */
    document.getElementById("resultBtn").addEventListener("click", function() {
        // Récupérer les valeurs saisies pour la distance et la vitesse
        let distance = parseFloat(document.getElementById("km").value);
        let vitesse = parseFloat(document.getElementById("vitesse").value);

        /* calculer la durée et arrondir à l'unité :Math.round */
        let duree_heures = calc_h(distance, vitesse);
        duree_heures = Math.round(duree_heures * 100) / 100; // Arrondir au centième

        let duree_minutes = Math.round(calc_m(duree_heures));

        /* afficher le résultat */
        resultatDiv.innerHTML = "Durée en heures: " + duree_heures + "<br>Durée en minutes: " + duree_minutes;
    });

    /* fonction pour calculer la durée en heures */
    function calc_h(distance, vitesse) {
        return distance / vitesse;
    }

    /* fonction pour calculer la durée en minutes */
    function calc_m(duree_heures) {
        return duree_heures * 60;
    }
});
