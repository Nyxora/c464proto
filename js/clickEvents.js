// Click events for searchResults.html.

function chToParis() {
    var title = "Tour Paris, France!"
    localStorage.setItem("title", title);
    
    var tag = "Tour the city of passion and romance!"
    localStorage.setItem("tag", tag);
    
    var locales = ["La Tour Eiffel, Paris, France", "The Louvre, Paris, France", "L'Arc de Triomphe, Paris, France", "Montmartre, Paris, France", "La Musee d'Orsay, Paris, France", "Notre Dame de Paris, Paris, France", "Paris France Hotel, 72 Rue de Turbigo, 75003 Paris, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    localStorage.setItem("itinInfo", "<h4><strong><em>La Tour Eiffel, Paris, France</em></strong></h4><p>Visit the famous Eiffel Tower, constructed in 1889 for the World's fair, this wrought iron tower stands over 1000 feet tall. Climb the stairs up to the second floor for a grand view of Paris or take the elevator to the very top and take in the most breattaking sight in all of Paris. Enjoy a meal on the second floor at the Jules Verne restaurant. The most famous monument in all of Paris will be sure to leave a lasting impression and some wonderful memories.</p><br><h4><strong><em>The Louvre, Paris, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><em>L'Arc de Triomphe, Paris, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><strong><em>Montmartre, Paris, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><strong><em>La Musee d'Orsay, Paris, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><strong><em>Notre Dame de Paris, Paris, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><strong><em>Paris France Hotel, Paris, France</em></strong></h4><p>This is where you'll be staying.</p>");
}

function chToFrance() {
    var title = "Tour the Major Cities of France!"
    localStorage.setItem("title", title);
    
    var tag = "Tour the home of love, art, and bread!"
    localStorage.setItem("tag", tag);
    
    var locales = ["Paris, France", "Nice, France", "Orleans, France", "Lyon, France", "Paris France Hotel, 72 Rue de Turbigo, 75003 Paris, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    localStorage.setItem("itinInfo", "<h4><strong><em>Paris, France</em></strong></h4><p>Visit the famous Eiffel Tower, constructed in 1889 for the World's fair, this wrought iron tower stands over 1000 feet tall. Climb the stairs up to the second floor for a grand view of Paris or take the elevator to the very top and take in the most breattaking sight in all of Paris. Enjoy a meal on the second floor at the Jules Verne restaurant. The most famous monument in all of Paris will be sure to leave a lasting impression and some wonderful memories.</p><br><h4><strong><em>Nice, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><em>Orleans, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><strong><em>Lyon, France</em></strong></h4><p>balabalabldlklskljdkj</p><br><h4><strong><em>Paris France Hotel, Paris, France</em></strong></h4><p>This is where you'll be staying.</p>");
}

function chToOrleans() {
    var title = "Tour Orleans, France!"
    localStorage.setItem("title", title);
    
    var tag = "A wonderful place to visit!"
    localStorage.setItem("tag", tag);
    
    var locales = ["Cathedrale Ste-Croix, Place Sainte-Croix, 45000 Orléans, France", "Musee des Beaux-Arts, 1 Rue Fernand Rabier, 45000 Orléans, France", "Maison de Jeanne d'Arc, 3 Place du Général de Gaulle, 45000 Orléans, France", "Parc Floral de la Source, Avenue du Parc Floral, 45100 Orléans, France", "Frac Centre, 88 Rue du Colombier, 45000 Orléans, France", "Hotel D'Orleans, 6 Rue Adolphe Crespin, 45000, Orleans, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    localStorage.setItem("itinInfo", "<h4><strong><em>Orleans, France</em></strong></h4>");
}

function chToNice() {
    var title = "Tour Nice, France!"
    localStorage.setItem("title", title);
    
    var tag = "A wonderful place to visit!"
    localStorage.setItem("tag", tag);
    
    var locales = ["Castle Hill, Nice, France", "Promenade Des Anglais, Nice, France", "Pheonix Parc Floral De Nice, Nice, France", "Jardin Du Monastere De Cimize, Nice, France", "Vieux Ville, Nice, France", "La Ville Nice Victor Hugo, 19 bis Boulevard Victor Hugo, 06000 Nice, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    localStorage.setItem("itinInfo", "<h4><strong><em>Nice, France</em></strong></h4>");
}

function chToLyon() {
    var title = "Tour Lyon, France!"
    localStorage.setItem("title", title);
    
    var tag = "A wonderful place to visit!"
    localStorage.setItem("tag", tag);
    
    var locales = ["Parc de la Tete D'Or, Lyon, France", "Musée des Beaux-Arts de Lyon, 20 place des Terreaux, F-69001 LYON", "Lyon Cathedrale, Lyon, France", "Musee Gall-Romain de Fourviere, Lyon, France", "Metallic Tower of Fourviere, Lyon, France", "Hotel Mercure Lyon Centre Beaux Arts, 73-75 rue President, Edouard Herriot, 69002 Lyon, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    localStorage.setItem("itinInfo", "<h4><strong><em>Lyon, France</em></strong></h4>");
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