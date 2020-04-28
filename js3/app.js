/**
 * exo 2 Q.1
 * 
 * écrire la fonction range(a,b)
 * qui reçoit 2 paramètres entiers
 * et retourne un tableau contenant tous les entiers
 * de a à b (si a <=B)
 * ou de b à a (si a > b),
 * 
 * @param {*} a 
 * @param {*} b 
 */
function range (a,b){
    let array =[];

    
    while (a<=b){
        array.push(a)
        a++;
    }
    while (b<=a){
        array.push(b)
        b++;
    }
    return array;
}
console.log(" Teste exo 2 Q1     rendre de le tableau 1 0 au 6 : ");
let arrayOne = range(0, 6);
console.log(arrayOne);
console.log(" Teste exo 2 Q1 rendre le tableau de  6 au 12 : ");
let arrayTow = range(12, 6);
console.log(arrayTow);

/**
 * 2.écrire une fonction sum() 
 * qui reçoit un tableau d'entiers
 * et retourne la somme des éléments ;
 * écrire une version utilisant une boucle "for",
 * une version utilisant la fonction forEach()
 * et une version utilisant la fonction reduce(),
 * 
 * 
 */
 


function sum(array){
    let somme = 0;
    for(let element=0; element<array.length; element++){
        somme +=  array[element];
    }
    return somme;
}

//Teste de la boucle for
console.log("La somme des elements du tableau avec for est : 24 ");
let S = [1, 4, 5, 10, 4];
console.log(sum(S));



//Teste de la boucle forEach

function sum(array){
	let somme = 0;
	array.forEach( (element) => { somme+=element;})
	return somme;
}

console.log("Teste la somme des elements du tableau avec forEach est : 14 ");
let T = [3, 9, -4, 1, 5];
console.log(sum(T));

//Teste de la boucle reduce()
console.log("Teste la somme des elements du tableau avec reducer est : 10 ");

let array1 = [1, 2, 3, 4];
let reducer = (accumulator, element) => accumulator + element;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
/**
 * 3. écrire une fonction qui reçoit un tableau d'entier
 * et retourne la moyenne des éléments.
 * écrire une version utilisant une boucle "for",
 * une version utilisant la fonction forEach()
 * et une version utilisant la fonction reduce(),
 */


function avgOne(array){
    let somme = 0;
    for(let element=0; element<array.length; element++){
        somme +=  array[element];
        }
    }   
    /**
     * Tester la moyenne boucle for rendre 33
     */
console.log("avgOne [22, 44] for : " + avgOne [22, 44]);

function avgTow (array){
		array.forEach( (element) => { somme+=element;})
	}
    /**
     * Tester la moyenne boucle forEach rendre 10
     */
console.log("avgTow [20, 10] forEach : " + avgTow [20, 10]);

function avgThree (array){
let reducer = (accumulator, element) => accumulator + element;
		somme = array.reduce(reducer, 0)
    }
    /**
     * Tester la moyenne boucle reduce rendre 60
     */
console.log("avgThree [50, 10] reduce : " + avgThree [50, 10]);
	return somme/array.length;


/**
 * 4
 *écrire une fonction qui reçoit un tableau de chaînes de caractères ( t ) 
 *et une chaine de caractères (pattern),
 *et qui retourne un tableau composé des chaînes de t qui comportent le motif pattern,
 * mises en majuscule. On utilisera forEach().
 **/


function  patterntoUpper(t, String){
	let array = [];
	 t.forEach( (element) => {
				if(element.includes(String))
					array.push(element.toUpperCase());
				});
	return array;
}

console.log("Teste Paterne 1.4")
let arrayOne = ['Tarte', 'Porte', 'Titine'];
console.log("Teste patterntoUpper(['Tarte', 'Porte', 'Titine]), 'te' : ") +(patterntoUpper(arrayOne, 'te'));


/**
 * 5. généraliser la fonction précédente :
 * écrire une fonction qui reçoit un tableau ( t ),
 * une fonction de test testFnct et une fonction de transformation transFnct
 * et retourne un tableau contenant les éléments de t pour lesquels testFnct retourne true,
 * transformés par transFnct.
 * Utiliser cette fonction généralisée pour ré-écrire le fonction précédente.
**/

function  transformation(t, testFnct, transFnct){
	let array = [];
	t.forEach( (element) => {
					if(testFnct(element)){
                    array.push(transFnct(element));
                    }
    });
	return array;
}


console.log("Teste Patern() 1.5")
let arrayOne = ['Tarte', 'Porte', 'Titine'];

console.log("Teste patterntoUpper(['Tarte', 'Porte', 'Titine]), 'te' : ") +(patterntoUpper(arrayOne),

(element)	=> element.includes('te'),
(element)	=> element.toUpperCase('te', 'TE'));

/**
 * 6. ré-écrire la fonction (4) précédente en utilisant filter() et map(),
 */

function  transformFilter(t, testFnct, transFnct){
	let array = t.filter(testFnct);
	return array.map(transFnct);
}
console.log("Teste Patern() 1.6 ");
console.log("Teste transformFilter(['Tarte', 'Porte', 'Titine]), 'te' : ") +(patterntoUpper(array, 'te'),

/**
 * 
 * 7. on considère un tableau contenant des références de produits dans un catalogue en ligne.
 * Ecrire une fonction qui reçoit ce tableau en paramètre
 * et retourne un tableau contenant les urls vers ces produits
 */
//1.7
function redirect(t){
	let link = "http://www.cata.log/products/";
	let tablink = [];
	t.forEach( (e) => {tablink.push(link + e);})
	return tablink;
}
let t7 = ["farine", "pain"];
console.log("1.7 test redirect()");
console.log(redirect(t7));

//Exercice 2 : objets

    /**
     * 1. écrire une fonction qui reçoit un tableau d'entier et retourne un objet contenant 3 propriétés :
     *  le nombre d'éléments, 
     * la somme des éléments et la moyenne des éléments,
     * 
     */
    //2.1
function tabstat(tab){

	return stat = {
			taille : tab.length,
			somme : sum(tab),
			avg : avg(tab)
			};
}
tab = [0,1,2];
console.log("2.1 test tabstat()");
console.log(tabstat(tab));

    /**
     * 2. créer sous forme littérale un objet représentant un étudiant.
     *  Il contient les propriétés numero, nom, prenom, dateNaiss, mail, notes.
     * La valeur de la propriété dateNaiss est construite avec le constructeur de dates.
     * La valeur de la propriété notes est un tableau vide.
    */
   let étudiant = {
                numero:"7" ,
                nom:"Anis" ,
                prenom: "Ramoun",
                dateNaiss: (2011,07,05),
                mail: jesuisunmail,
                notes:20,
                };
console.log("2.2 test tabstat()");

if (auj.getMonth()===this.dateNaiss.getMonth())
    {if (auj.getDay>this.dateNaiss.getDay()) age-=1;}
    else if(auj.getMonth()===this.dateNaiss.getMonth()){age-=1;}
return age;
                
    /**
   * 3. ajouter une méthode qui calcule l'age de l'étudiant.
   *  Ajouter une méthode qui affiche les nom, prénom et date de naissance de l'étudiant.
   *  Le nom est en majuscule, la date est sous la forme dd/mm/YYYY.
   */

                
                
    
    /**
    * 4. ajouter une méthode qui ajoute une note dans une matière à l'étudiant.
    * la méthode reçoit 2 paramètres m (matière) et n (note),
    *  en fait un objet contenant 2 propriétés,
    *  et ajoute cet objet dans le tableau de notes de l'étudiant ;
    *  on suppose que l'on a toujours 1 seule note par matière.
    * 
    */
   
    /**
     * 5. ajouter une méthode qui calcule la moyenne de l'étudiant (toutes les matières ont le coeff. 1),
     */
 

    /**
      * 6. créer un constructeur d'étudiants :
      *  il doit produire des objets ayant la même structure que celui ci-dessus.
      *  Les méthodes ci-dessus doivent être définies dans le prototype.
      */

     function etudiants(nom,prenom,dateNaiss,mail){
        function etudiants(numero,nom,prenom,dateNaiss,mail){
            this.numero=numero;
            this.nom=nom;
            this.prenom=prenom;
            this.dateNaiss=dateNaiss;
            this.mail=mail;
            this.notes=[];
        }
        }
    /**
     * 7. créer une fonction qui reçoit un tableau d'étudiants 
     * et un n° de mois et retourne un tableau contenant la liste des étudiants dont l'anniversaire a lieu durant le mois indiqué.
     */


    /**
     * 8. Créer une fonction qui retourne la liste des étudiants ayant plus d'un age donné.
     */


    /**
     * 9. Créer un constructeur d'objets correspondant à un groupe d'étudiants.
     * Un groupe d'étudiants contient les propriétés nomgpe, formation, liste, annee.
     */



    /***
     * 11. Souhaitez un bon anniversaire à tous les étudiants du group
     */