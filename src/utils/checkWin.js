import { WIN_PATTERNS } from "../constants";

export const checkWin = (field, currentPlayer) =>
    WIN_PATTERNS.some((winPattern) =>
        winPattern.every((cellIndex) => field[cellIndex] === currentPlayer),
    );
// для победы с помощью метода some() проверяется переданный массив массивов, где нужно чтобы был заполнен символами хотя бы один массив,
// и в свою очередь с помощью метода every() проверяется, чтобы все клетки поля по индексу паттерна были заполнены символами текущего игрока
// возвращает булевое значение true или false
