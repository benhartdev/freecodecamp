function EtreUnPalindrome(texte) {

    const nettoyageTexte = texte.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Nettoyage chaine de caracteres.
    return nettoyageTexte === nettoyageTexte.split('').reverse().join(''); // Vérifier si la chaîne est un palindrome. 
}
 // nettoyageTexte.split('') = Transforme la chaîne de caractères en tableau de caractères.
 // nettoyageTexte.reverse() = Inverse l'ordre des caractères dans le tableau.
 // nettoyageTexte..join('') = Transforme le tableau de caractères en une chaîne de caractères.


document.getElementById('check-btn').addEventListener('click', function() {

    // Selection bouton ID : check-btn
    // Execution action click bouton

    const entreeTexte = document.getElementById('entreeTexte').value;    // Selection Element ID : entreeTexte et recupere la valeur
    const resultat = document.getElementById('resultat');                // Sélection Element ID: resultat 


    if (!entreeTexte) {                                                  // Verifie si le champ est vide
        alert('SVP Veuillez renseigner une valeur');                     // si entreeTexte est vide, envoi une alerte avec texte
        return;                                                          // arret de la fonction si TRUE
    }

    if (EtreUnPalindrome(entreeTexte)) {                                 // Appelle fonction EtreUnPalindrome, Si TRUE, le texte est un palindrome.
                                                                         
        resultat.textContent = entreeTexte + ' est un palindrome';       // Affiche le resultat Element ID = resultat.
    } else {
        resultat.textContent = entreeTexte + " n'est pas un palindrome"; // Affiche le resultat Element ID = resultat.
    }
});