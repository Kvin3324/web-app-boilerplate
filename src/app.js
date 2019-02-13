/**
 * Import
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import Header from "./view/components/Header";
import Input from "./view/components/Input";
import Score from "./view/components/Scores";
import Timer from "./view/components/Timer";

/**
 * Variables
 */
const app = document.querySelector("#root");

/**
 * Déclaration
 */
export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Timer/>
                <Score score={0}/>
                <Input/>
            </React.Fragment>
        );
    }
}

/**
 * Éxécution
 */
render(<App />, app);