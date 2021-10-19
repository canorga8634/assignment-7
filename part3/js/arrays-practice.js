/* eslint-env browser */
//STEP 1
var movies = ["BladeRunner", "Jojo Rabbit", "Superbad", "Parasite", "Bladerunner 2049"];
window.document.write(movies[1] + "<br>");

//STEP 2
movies = new Array(5);
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";
movies[3] = "Parasite";
movies[4] = "Bladerunner 2049";

window.document.write(movies[0] + "<br>");

//STEP 3
movies = new Array(5);
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Titanic";
movies[3] = "Superbad";
movies[4] = "Parasite";
movies[5] = "Bladerunner 2049";

window.document.write(movies.length + "<br>");

//STEP 4
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";
movies[3] = "Parasite";
movies[4] = "Bladerunner 2049";

delete movies[0];
window.document.write(movies + "<br>");

//STEP 5
var i;
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";
movies[3] = "Parasite";
movies[4] = "Bladerunner 2049";
movies[5] = "Titanic";
movies[6] = "The Godfather";

for (i = 0; i < movies.length; i += 1) {
    window.document.write(movies[i] + ", ");
}
window.document.write("<br>");

//STEP 6
var i;
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";
movies[3] = "Parasite";
movies[4] = "Bladerunner 2049";
movies[5] = "Titanic";
movies[6] = "The Godfather";

for (i in movies) {
    window.document.write(movies[i] + ", ");
}
window.document.write("<br>");

//STEP 7
var i;
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";
movies[3] = "Parasite";
movies[4] = "Bladerunner 2049";
movies[5] = "Titanic";
movies[6] = "The Godfather";

for (i in movies) {
    movies.sort();
    window.document.write(movies[i] + ", ");
}
window.document.write("<br><br>");

//STEP 8
var i;
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";

var leastFavMovies = [];
leastFavMovies[0] = "Parasite";
leastFavMovies[1] = "Bladerunner 2049";
leastFavMovies[2] = "Titanic";
leastFavMovies[3] = "The Godfather";

window.document.write("Movies I like: <br><br>")
for (i = 0; i < movies.length; i += 1) {
    window.document.write(movies[i] + "<br>");
}

window.document.write("<br>Movies I regret watching: <br><br>")
for (i = 0; i < leastFavMovies.length; i += 1) {
    window.document.write(leastFavMovies[i] + "<br>");
}
window.document.write("<br>");

//STEP 9
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";

var leastFavMovies = [];
leastFavMovies[0] = "Parasite";
leastFavMovies[1] = "Bladerunner 2049";
leastFavMovies[2] = "Titanic";
leastFavMovies[3] = "The Godfather";

var allMovies = movies.concat(leastFavMovies);
allMovies.reverse();
window.document.write(allMovies);
window.document.write("<br>");

//STEP 10
var movies = [];
movies[0] = "BladeRunner";
movies[1] = "Jojo Rabbit";
movies[2] = "Superbad";

var leastFavMovies = [];
leastFavMovies[0] = "Parasite";
leastFavMovies[1] = "Bladerunner 2049";
leastFavMovies[2] = "Titanic";
leastFavMovies[3] = "The Godfather";

var allMovies = movies.concat(leastFavMovies);

lastMovie = (allMovies[allMovies.length - 1]);
window.document.write(lastMovie);

