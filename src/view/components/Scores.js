/**
 * Import
 */
import React from "react";
import Rules from "./Rules";

/**
 * Déclaration
 */
const Score = props => {
    return (
        <section className="row">
            <div className="col-4">
                <p className="text-primary">Meilleur niveau: <strong>{props.score}</strong> - Meilleur score: <strong>{props.score}</strong></p>
                <p className="text-warining">Meilleur Score: <strong>{props.score}</strong> - Meilleur score: <strong>{props.score}</strong></p>
            </div>
            <Rules />
        </section>
    );
}

/**
 * Export
 */
export default Score;