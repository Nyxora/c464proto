// Click events for searchResults.html.

function chToParis() {
    var locales = ["La Tour Eiffel, Paris, France", "The Louvre, Paris, France", "L'Arc de Triomphe, Paris, France", "Montmartre, Paris, France", "La Musee d'Orsay, Paris, France", "Notre Dame de Paris, Paris, France", "Paris France Hotel, 72 Rue de Turbigo, 75003 Paris, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
}

function chToFrance() {
    var locales = ["Paris, France", "Nice, France", "Orleans, France", "Lyon, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
}

function chToOrleans() {
    var locales = ["Cathedrale Ste-Croix, Place Sainte-Croix, 45000 Orléans, France", "Musee des Beaux-Arts, 1 Rue Fernand Rabier, 45000 Orléans, France", "Maison de Jeanne d'Arc, 3 Place du Général de Gaulle, 45000 Orléans, France", "Parc Floral de la Source, Avenue du Parc Floral, 45100 Orléans, France", "Frac Centre, 88 Rue du Colombier, 45000 Orléans, France", "Hotel D'Orleans, 6 Rue Adolphe Crespin, 45000, Orleans, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
}

function chToNice() {
    var locales = ["Castle Hill, Nice, France", "Promenade Des Anglais, Nice, France", "Pheonix Parc Floral De Nice, Nice, France", "Jardin Du Monastere De Cimize, Nice, France", "Vieux Ville, Nice, France", "La Ville Nice Victor Hugo, 19 bis Boulevard Victor Hugo, 06000 Nice, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
}

function chToLyon() {
    var locales = ["Parc de la Tete D'Or, Lyon, France", "Musée des Beaux-Arts de Lyon, 20 place des Terreaux, F-69001 LYON", "Lyon Cathedrale, Lyon, France", "Musee Gall-Romain de Fourviere, Lyon, France", "Metallic Tower of Fourviere, Lyon, France", "Hotel Mercure Lyon Centre Beaux Arts, 73-75 rue President, Edouard Herriot, 69002 Lyon, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
}

window.onload = function() {
    var addrP = document.getElementById('paris');
    addrP.addEventListener('click', chToParis, false);
    
    var addrF = document.getElementById('france');
    addrF.addEventListener('click', chToFrance, false);
    
    var addrO = document.getElementById('orleans');
    addrO.addEventListener('click', chToOrleans, false);
    
    var addrN = document.getElementById('nice');
    addrN.addEventListener('click', chToNice, false);
    
    var addrL = document.getElementById('lyon');
    addrL.addEventListener('click', chToLyon, false);
}