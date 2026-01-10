function searchElement(tab, element) {
    let position = tab.indexOf(element);

    if (position !== -1) {
        console.log("Élément trouvé à la position :", position);
    } else {
        console.log("Erreur : élément non trouvé dans le tableau");
    }
}

module.exports = searchElement;
