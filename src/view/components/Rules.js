/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
const Rules = () => {
    return (
        <div className="col-10">
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
                Régles du jeu
        </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Instructions</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Le jeu se déroule ainsi:</p>
                            <p>Lorsque vous cliquez sur commencer un compteur avec un mot s'affiche en haut de l'écran vous devez écrire dans le champ en bas de votre écran le mot dans le temps imparti, chaque fois que vous validez un mot votre niveau augmente de 1.</p>
                            <p>Lorsque vous commencez le jeu vous êtes au niveau 1, à ce niveau il faut valider 5 mots pour pouvoir passer au niveau suivant avec une vitesse de 2s / mot. Chaque fois que vous passez un niveau le nombre de mots à valider ainsi que la vitesse de frappe augmente.</p>
                            <p>À noter que pour valider votre mot il faut appuyer sur la touche "Entrée".</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Export
*/
export default Rules;