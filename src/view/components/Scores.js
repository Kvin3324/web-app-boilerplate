/**
 * Import
 */
import React from "react";
import Rules from "./Rules";
import BtnGame from "./BtnGame";

/**
 * Déclaration
 */
const Score = props => {
    return (
        <section className="row">
            <div className="col-12">
                <p className="text-primary">Meilleur niveau: <strong>{props.score}</strong> - Meilleur score: <strong>{props.score}</strong></p>
                <p className="text-warning">Niveau: <strong>{props.score}</strong> - score: <strong>{props.score}</strong></p>
            </div>
            <div className="col-8 d-flex">
                <Rules/>
                <BtnGame/>
            </div>
        </section>
    );
}

/**
 * Export
 */
export default Score;