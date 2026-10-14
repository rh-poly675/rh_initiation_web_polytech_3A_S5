//
// Nom : exercices.js
// Date et auteur :
//
// Description :
//		Exercices en javascript
//		Calcul de la suite de Fibonacci
//		Ecriture de la fonction range(stop, [start], [step]) qui prend trois
// arguments en paramètre et renvoie le tableau des entiers compris entre
// start (inclus) et stop (exclu) avec un pas de step.
//


// Fonction Appeler_Fibonacci :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit le rang n dans l'entrée html
//		- appelle la fonction Fibonacci()
function Appeler_Fibonacci()
{
	// lecture de la valeur saisie qui est convertie en nombre
	const n = Number(document.forms["fibonacci"]["n"].value);
	
	// appel de la fonction Fibonacci
	let fibo = Fibonacci(n);
	
	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_fibonacci").innerHTML = "Résultat : Fibonacci(" + n + ") = " + fibo;
}

// Retourne/renvoie la suite de Fibonacci au rang n
function Fibonacci(n)
{
	// contrôle du paramètre n
	if (!Number.isInteger(n) || n<0)
	{    
		return undefined;
	}
	
	// cas particulier
	if (n==0)
	{
		return 0;
	}

	// cas général
	let fibo2 = 0;
	let fibo1 = 0;
	let fibo = 1;
	for(let i=1; i<n; i++)
	{
		fibo2 = fibo1;
		fibo1 = fibo;
		fibo = fibo1 + fibo2;
	}
	return fibo; 
}


// Fonction Appeler_Range :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit les données dans les entrées html
//		- appelle la fonction Range()
function Appeler_Range()
{
	stop = Number(document.forms["range"]["stop"].value);
	start = Number(document.forms["range"]["start"].value);
	step = Number(document.forms["range"]["step"].value);
	Range(stop, start, step);
}


// Fonction Range(stop, start=0, step=1)
// Retourne/Renvoie le tableau des entiers compris entre start (inclus) et 
// stop (exclu) avec un pas de step.
function Range(stop, start=0, step=1)
{
	let result = [];
	for (let i = start; i < stop; i += step) {
		result.push(i);
	}
	document.getElementById("resultat_range").innerHTML = "Résultat : " + result;
}

function OnOffAmpoule() {
	document.getElementById("ampoule-on").style.display = document.getElementById("ampoule-on").style.display === "none" ? "block" : "none";
	document.getElementById("ampoule-off").style.display = document.getElementById("ampoule-off").style.display === "none" ? "block" : "none";
}

function writeText(txt) {
  document.getElementById("desc").innerHTML = txt;
}

function displayImage(imagePath) {
  document.getElementById("planet-image").src = imagePath;
  document.getElementById("planet-image").style.display = "block";
}

function resetView() {
  document.getElementById("desc").innerHTML = "MOUSE over the sun and the planets and see differents descriptions";
  document.getElementById("planet-image").style.display = "none";
}