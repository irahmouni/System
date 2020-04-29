
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
console.log("La somme des elements du tableau avec la boucle for est : 24 ");
let F = [1, 4, 5, 10, 4];
console.log(sum(F));



//Teste de la boucle forEach

function sum(array){
	let somme = 0;
	array.forEach((element) => { somme+=element;})
	return somme;
}

console.log("Teste la somme des elements du tableau avec forEach est : 9 ");
let FE = [3, 1, 5];
console.log(sum(FE));

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
    return somme/array.length;
}   
    /**
     * Tester la moyenne boucle for rendre 33
     */
console.log("avgOne [22, 44] for : " + avgOne [22, 44]);

function avgTow (array){
    let somme = 0;
	array.forEach((element) =>  somme+=element);
   
    return somme/array.length;
}
    /**
     * Tester la moyenne boucle forEach rendre 30
     */
console.log("avgTow [20, 40] forEach : " + avgTow [20, 40]);

function avgThree (array){
    let somme = 0;
    let reducer = (accumulator, element) => accumulator + element;
    somme = array.reduce(reducer, 0)
    return somme/array.length;
    }
    /**
     * Tester la moyenne boucle reduce rendre 30
     */
console.log("avgThree [50, 10] reduce : " + avgThree [50, 10]);



/**
 * 4
 *écrire une fonction qui reçoit un tableau de chaînes de caractères ( t ) 
 *et une chaine de caractères (pattern),
 *et qui retourne un tableau composé des chaînes de t qui comportent le motif pattern,
 * mises en majuscule. On utilisera forEach().
 **/


function  patterntoUpper(t, pattern){
	let array = [];
	 t.forEach( (element) => {
				if(element.includes(pattern))
					array.push(element.toUpperCase());
				});
	return array;
}

console.log("Teste Patern ()")
let arrayOne = ['Tarte', 'Porte', 'Titine'];
console.log("Teste patterntoUpper(['Tarte', 'Porte', 'Titine]), 'te' : ")
             +(patterntoUpper(arrayOne, 'te'));


/**
 * 5. généraliser la fonction précédente :
 * écrire une fonction qui reçoit un tableau ( t ),
 * une fonction de test testFnct et une fonction de transformation transFnct
 * et retourne un tableau contenant les éléments de t pour lesquels testFnct retourne true,
 * transformés par transFnct.
 * Utiliser cette fonction généralisée pour ré-écrire le fonction précédente.
**/

function  trans(t, testFnct, transFnct){
	let array = [];
	t.forEach( (element) => {
					if(testFnct(element)){
                        array.push(transFnct(element));
                    }
    })
	return array;
}

//Teste 1.6
console.log("Teste Patern()");
console.log("Teste patterntoUpper(['Tarte', 'Porte', 'Titine]), 'te' : ")
         +(patterntoUpper(arrayOne),

(element)	=> element.includes('te'),
(element)	=> element.toUpperCase('te', 'TE'));

/**
 * 6. ré-écrire la fonction (4) précédente en utilisant filter() et map(),
 */

function  transFilter(t, testFnct, transFnct){
     return t.filter(t=>t.includes(testFnct)).map(t=>transFnct.toUpperCase());
 }
	
console.log("Teste Patern() ");
console.log("Teste transFilter(['Tarte', 'Porte', 'Titine]), 'te' : ")
             + (toUpperCase(array, 'te'));

//Exercice 2 : objets

    /**
     * 1. écrire une fonction qui reçoit un tableau d'entier et retourne un objet contenant 3 propriétés :
     *  le nombre d'éléments, 
     * la somme des éléments et la moyenne des éléments,
     * 
     */

function tabstat(array){

	let objet = {
			nomber : array.length,
			somme : sum(array),
			avg : avg(array)
            }
        return objet;
}
//Teste function avg

console.log("Teste somme, la moyenne, et qui retourne objet ");
let array = [0,1,2];
console.log(tabstat(tab));

    /**
     * 2. créer sous forme littérale un objet représentant un étudiant.
     *  Il contient les propriétés numero, nom, prenom, dateNaiss, mail, notes.
     * La valeur de la propriété dateNaiss est construite avec le constructeur de dates.
     * La valeur de la propriété notes est un tableau vide.
    */
   let etudiant = {
                numero: 7,
                nom: "Rahmouni",
                prenom: "Karim",
                dateNaiss: new Date(2011, 07, 05),
                mail: "karim.rahmouni@live.fr",
                notes: []
                };
                
                
    /**
   * 3. ajouter une méthode qui calcule l'age de l'étudiant.
   *  Ajouter une méthode qui affiche les nom, prénom et date de naissance de l'étudiant.
   *  Le nom est en majuscule, la date est sous la forme dd/mm/YYYY.
   */

  function calculAge(strDate) {
    strDate = strDate.split('/');
    var birthMonth = strDate[1]-1, // (les mois commencent à 0)
        birthDay = strDate[0],
        now = new Date(),
        nowMonth = now.getMonth(),
        nowDay = now.getDate(),
        age = now.getFullYear()-strDate[2];
     
    // Si la date d'anniversaire n'est pas encore passée, on corrige l'age
    if(nowMonth<birthMonth || nowMonth==birthMonth && nowDay<birthDay) {
        age--;
    }
    return age;
}
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
 
    etudiant.avg(){
        let somme=0;
        this.notes.forEach(n=>somme+=n.notes);
        return somme/this.notes.length;
    };
    

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



    /**
     * 10. Prévoir les méthodes pour : ajouter un étudiant au groupe, compter les étudiants d'un
     * groupe, calculer la moyenne générale de chaque étudiant du groupe.
     */

     