// Click events for searchResults.html.

function chToParis() {
    var title = "Tour Paris, France!"
    localStorage.setItem("title", title);
    
    var tag = "Tour the city of passion and romance!"
    localStorage.setItem("tag", tag);
    
    var locales = ["La Tour Eiffel, Paris, France", "The Louvre, Paris, France", "L'Arc de Triomphe, Paris, France", "Montmartre, Paris, France", "La Musee d'Orsay, Paris, France", "Notre Dame de Paris, Paris, France", "Paris France Hotel, 72 Rue de Turbigo, 75003 Paris, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    var itinInfo = "<h4><strong><em>La Tour Eiffel, Paris, France</em></strong></h4><p>Visit the famous Eiffel Tower, "+
    "constructed in 1889 for the World's fair, this wrought iron tower stands over 1000 feet tall. Climb the stairs up "+
    "to the second floor for a grand view of Paris or take the elevator to the very top and take in the most breattaking "+
    "sight in all of Paris. Enjoy a meal on the second floor at the Jules Verne restaurant. The most famous monument in "+
    "all of Paris will be sure to leave a lasting impression and some wonderful memories. </p><br><h4><strong><em>The "+
    "Louvre, Paris, France</em></strong></h4><p>Visit the Louvre, the world's largest museam at over 60,000 square feet. "+
    "This famous Frecnh landmark is home to over 35,000 objects of art of many different kinds dating from prehistoric "+
    "artifacts to 21st century art. The art buffs dream, there is so much to see at the Louvre that going just once will "+
    "never be enough. One can see the Mona Lisa, the Venus de Milo and so much more. There is more than enough art to bring "+
    "any art lover coming back for more. </p><br><h4><em>L'Arc de Triomphe, Paris, France</em></strong></h4><p>L'Arc de Triomphe, "+
    "it is said that all roads in Paris lead to this famous Archway which allows for a fantastic view of the surrounding city "+
    "sprawling around. After the fantastic view, take a stroll down the Champs-Elysses nearby, the famous shopping avenue of "+
    "Paris and check out the many high class shops."+
    " </p><br><h4><strong><em>Montmartre, Paris, France</em></strong></h4><p>"+
    "balabalabldlklskljdkj </p><br><h4><strong><em>La Musee d'Orsay, Paris, France</em></strong></h4><p>balabalabldlklskljdkj"+
    " </p><br><h4><strong><em>Notre Dame de Paris, Paris, France</em></strong></h4><p>Visit the famous Notre Dame de Paris, one "+
    "of the most famous cathedrals in the whole world. See the brilliant gothic architecture of this medeival church from the "+
    "outside, then check out the marvelous inside. A building you will remember for a long time to come" + ".</p><br><h4><strong><em>"+
    "Paris France Hotel, Paris, France</em></strong></h4><p>This hotel is situated ideally in the center of Paris offering convenient "+
    "access to the Louvre, great shopping centers and the many common areas tourists like to gather. Enjoy your sejours in Paris after "+
    "a quick free breakfast in the Hotel dining room. </p>";
    localStorage.setItem("itinInfo", itinInfo);
}

function chToFrance() {
    var title = "Tour the Major Cities of France!"
    localStorage.setItem("title", title);
    
    var tag = "Tour the home of love, art, and bread!"
    localStorage.setItem("tag", tag);
    
    var locales = ["Paris, France", "Nice, France", "Orleans, France", "Lyon, France", "Paris France Hotel, 72 Rue de Turbigo, 75003 Paris, France"];
    sessionStorage.setItem("locales", JSON.stringify(locales));
    
    localStorage.setItem("itinInfo", "<h4><strong><em>Paris, France</em></strong></h4><p>Visit the famous Eiffel Tower, constructed in 1889 for the World's fair, this wrought iron tower stands over 1000 feet tall. Climb the stairs up to the second floor for a grand view of Paris or take the elevator to the very top and take in the most breattaking sight in all of Paris. Enjoy a meal on the second floor at the Jules Verne restaurant. The most famous monument in all of Paris will be sure to leave a lasting impression and some wonderful memories. </p><br><h4><strong><em>Nice, France</em></strong></h4><p>balabalabldlklskljdkj </p><br><h4><em>Orleans, France</em></strong></h4><p>balabalabldlklskljdkj </p><br><h4><strong><em>Lyon, France</em></strong></h4><p>balabalabldlklskljdkj </p><br><h4><strong><em>Paris France Hotel, Paris, France</em></strong></h4><p>This is where you'll be staying. </p>");
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