#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<signal.h>
#include<unistd.h>

/**
* Déclaration score en statique
**/
static int score;

/**ls
* Un nombre entre 1 et 10
**/
int rdm (){
   return rand() % 10 + 1; 
}

/**
* La sotrie de programme
**/
void sortie(){
    printf("\nSCORE : %d\n", score);
    exit(0);
}

/**
* Fonction exécutable
*/ 
int main(){
    
    score = 0;
    /**
     * initialisation de la gestion des signaux
    **/
    struct sigaction action;
    action.sa_handler = sortie;
    action.sa_flags = 0;
    sigemptyset (&action.sa_mask);
    sigaction(SIGALRM, &action, NULL);
    sigaction(SIGQUIT, &action, NULL);
    sigaction(SIGINT, &action, NULL);

    /**
    * Initialisation de nombre aléatoire 
    **/
    srand(time(NULL));

    /**
    *  opérandes et résultat
    **/

    int n, k, result;

    while (1){

        /**
         * programmation de l'alarme
         */
        alarm(5);

        /**
         *  génération d'opérandes aléatoires
         **/
        n = rdm();
        k = rdm();

        /**
         *  saisie du résultat
         **/
        printf("%d * %d\n", n, k);
        printf("Votre réponse est : ");
        scanf("%d", &result);

        /**
         *  test du résultat
         **/
        if (result == n * k){
            score++;
        }
    }

    return 0;
}


