import { Component } from "react";
import PropTypes from "prop-types";
import { Info, Field } from "../components";
import styles from "./game.module.css";

export class GameLayout extends Component {
    render() {
        return (
            <div className={styles.game}>
                <Info />
                <Field />
                <button
                    className={styles.restartButton}
                    onClick={this.props.handleRestart}
                >
                    Начать заново
                </button>
            </div>
        );
    }
}

export default GameLayout;

GameLayout.propTypes = {
    handleRestart: PropTypes.func,
};
