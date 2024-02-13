import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FieldLayout from "./fieldLayout";
import { PLAYER, STATUS } from "../../constants";
import { checkEmptyCell, checkWin } from "../../utils";
import { setField, setStatus, setCurrentPlayer } from "../../actions";
import {
    selectStatus,
    selectField,
    selectCurrentPlayer,
} from "../../selectors";

export class FieldContainer extends Component {
    constructor(props) {
        super(props);

        this.handleCellClick = this.handleCellClick.bind(this); // привязка контекста
    }

    handleCellClick(cellIndex) {
        const { status, currentPlayer, field, dispatch } = this.props;
        // аргумент celIndex получаем из массива field в компоненте FieldLayout и прокидываем сюда по цепочке
        // console.log(cellIndex);
        if (
            status === STATUS.WIN ||
            status === STATUS.DRAW ||
            field[cellIndex] !== PLAYER.NOBODY
        ) {
            return null;
        } // условие, когда нельзя продолжить игру: уже победа или ничья или когда ячейка не пустая

        const newField = [...field];
        newField[cellIndex] = currentPlayer;

        dispatch(setField(newField));
        // в зависимости от текущего игрока, в массив newField по индексу ячейки, на которой кликнули,
        // ставится соответствующий символ и состояние поля обновляется

        if (checkWin(newField, currentPlayer)) {
            dispatch(setStatus(STATUS.WIN));
        } else if (checkEmptyCell(newField)) {
            const newCurrentPlayer =
                currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS;
            dispatch(setCurrentPlayer(newCurrentPlayer));
        } else {
            dispatch(setStatus(STATUS.DRAW));
        } // проверяется на победу текущего игрока или ничью, и если нет, то текущий игрок меняется на другого
    }

    render() {
        return (
            <FieldLayout
                field={this.props.field}
                handleCellClick={this.handleCellClick}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    status: selectStatus(state),
    currentPlayer: selectCurrentPlayer(state),
    field: selectField(state),
});

export const Field = connect(mapStateToProps)(FieldContainer);

FieldContainer.propTypes = {
    status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
    currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
    field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
    dispatch: PropTypes.func.isRequired,
};
