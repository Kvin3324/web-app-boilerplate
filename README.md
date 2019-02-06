# But du jeu

Un mot et un décompte s'affichent. Le joueur doit, dans un champ dédié, taper ce mot avant la fin du décompte pour pouvoir passer au prochain, et ensuite au prochain niveau.
Une section affiche les meilleurs scores.
# Les différents niveaux du jeu

## 1er niveau :
Il faut avoir entré 5 mots à la suite dans leur temps imparti pour pouvoir passer au niveau suivant.
La vitesse de frappe est de 30 mots par minute.
## Niveaux suivants :
A chaque nouveau niveau, 1 mot de plus à entrer s'ajoute pour pouvoir passer au niveau suivant.
A chaque nouveau niveau, la vitesse de frappe est augmentée de 1 mot par minute.
Exemple : au niveau 4, il y a 9 mots à entrer avec une vitesse de frappe de 34 mots par minute.
A chaque fois que le joueur échoue à entrer un mot dans le temps imparti, le message suivant s'affiche : "Perdu !". Il doit alors recommencer, et se retrouve au niveau 1 du début.

Un indicateur permet au joueur, lorsqu'il tape le mot et qu'il est en train de se tromper, de savoir qu'il y a une faute de frappe dans le mot.


*Pour générer des mots random: [datamuse](https://www.datamuse.com/).*


# Pour aller plus loin
- Mettre des niveaux sensibles à la casse (exemple : si le mot à entrer a une majuscule, il faut la respecter).
### Complexifier les mots :
- les premiers niveaux affichent des mots simples (pomme | tomate | carton)
- les suivants ont des mots plus complexes : (chèvrefeuille | circonflexe | pont-levis | marie-thérése-de-normandie).
- Rendre l'application multi-langue.
- Pouvoir partager son score sur Facebook, Twitter.