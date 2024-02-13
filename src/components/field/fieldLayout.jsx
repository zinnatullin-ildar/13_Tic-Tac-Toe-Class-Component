import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./field.module.css";
import { PLAYER, PLAYER_SIGN } from "../../constants";

export class FieldLayout extends Component {
    render() {
        const { field, handleCellClick } = this.props;

        return (
            <div className={styles.field}>
                {field.map((cellPlayer, index) => (
                    <button
                        key={index}
                        className={styles.cell}
                        onClick={() => handleCellClick(index)}
                    >
                        {PLAYER_SIGN[cellPlayer]}
                        {/* вывод в разметку символов крестика или нолика */}
                    </button>
                ))}
                {/* применение index в качестве key обусловлено тем, что ячейки меняются и сортироваться не будут */}
            </div>
        );
    }
}

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))),
    handleCellClick: PropTypes.func,
};

export default FieldLayout;
