import { PLAYER } from "../constants";

export const CreateEmptyField = () => {
    return new Array(9).fill(PLAYER.NOBODY);
};
