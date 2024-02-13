import { STATUS, PLAYER } from "./constants";
import { CreateEmptyField } from "./utils";
import { ACTION_TYPE } from "./actions";

const initialState = {
    status: STATUS.STEP,
    currentPlayer: PLAYER.CROSS,
    field: CreateEmptyField(),
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPE.SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlayer: payload,
            };
        case ACTION_TYPE.SET_FIELD:
            return {
                ...state,
                field: payload,
            };
        case ACTION_TYPE.SET_STATUS:
            return {
                ...state,
                status: payload,
            };
        case ACTION_TYPE.RESTART_GAME:
            return initialState;

        default:
            return state;
    }
};
