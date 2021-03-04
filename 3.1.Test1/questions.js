let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let concatText = texte1 + texte2;
    return concatText;
}
let afficherCar5 = (texte) => {
    return texte[4];

}
let afficher9Car = (texte) => {
    return texte.substr(0, 9);
}
let majusculeString = (texte) => {
    return texte.toUpperCase();
}
let minusculeString = (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString = (texte) => {
    return texte.trim();
}
let IsString = (texte) => {
    return typeof texte === 'string';
}

let AfficherExtensionString = (texte) => {
    extension = texte.split('.').pop();
    return extension;
}
let NombreEspaceString = (texte) => {
    return texte.split(" ").length - 1;
}
let InverseString = (texte) => {
    let reverse = texte.split('').reverse().join('');
    return reverse;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(2, 3);
}
let valeurAbsolue = (nombre) => {
    return Math.abs(5);
}
let valeurAbsolueArray = (array) => {
    let AbsArr = [];
    array.forEach(element => {
        AbsArr.push(Math.abs(element))
    });
    return AbsArr;

}
let sufaceCercle = (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon, 2));

}
let hypothenuse = (ab, ac) => {
    hypothenuse = Math.sqrt(ab * ab + ac * ac);
    return hypothenuse;
}
let calculIMC = (poids, taille) => {
    return new Number((poids / (taille * taille)).toFixed(2));

}