// Переработать приложение "Крестики - Нолики", сделанное в задании9 урока
// State management.React Redux.Redux Thunk:
// переписать все компоненты с функциональных на классовые;
// не использовать хуки;
// использовать функцию connect() для подключения Redux к React;
// вместо CSS-модулей использовать Tailwind CSS.

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { Game } from "./game/game";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Game />
        </Provider>
    </React.StrictMode>,
);
