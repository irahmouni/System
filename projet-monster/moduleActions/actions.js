/**
 * 1. des variables privées décrivant l'état du monstre :
◦ name : le nom du monstre
◦ life : nombre de point de vie du monstre
◦ money : l'argent du monstre
◦ awake : true ou false, indique si le monstre est réveillé ou non,
 **/
let etatAction = {
    name = undefined,
    life = undefined,
    money = undefined,
    awake = undefined

}
/**
 * 2. la fonction exportée "get" qui retourne l'état courant du monstre.
 */
function getEtatAction() {
  return etatAction;
 };

 /**
  * 3. la fonction exportée "init" qui initialise l'état du monstre
  *  avec les valeurs reçues en paramètres.
  */

 function initEtatAction (nom, vie, argent, reveiller){
    etatAction.name = nom;
    etatAction.lefe = vie;
    etatAction.money = argent;
    etatAction.awake = reveiller;
}
/**
 * constante bouton
 */
const run = {
    life : 1,
    money: 0

}
const fight = {
    life : 1,
    money: 0

}
const work = {

    life : 1,
    money: 0

}
const sleep = {

    life : 1,
    money: 0

}
const show = {
    life : 1,
    money: 0

}
const eat = {
    life : 1,
    money: 0

}
const kill = {

    life : 1,
    money: 0
}
