
import React, { useState } from "react";
import ReactDOM from "react-dom";
import fontAwesomeLibrary from './fontAwesomeConfig';

import "../styles/index.css";
import SecondCounter from "./SecondCounter";




 let seconds= 0

function contador(){
    // calculo los digitos de cada variable
    //dependiendo el valor de segundos
    let unidades = seconds % 10;
    let decenas = Math.floor((seconds / 10) % 10);
    let centenas = Math.floor((seconds / 100) % 10);
    let unidadesMil = Math.floor((seconds / 1000) % 10);
    let decenasMil = Math.floor((seconds / 10000) % 10);
    let centenasMil = Math.floor((seconds / 100000) % 10);

    ReactDOM.render(<SecondCounter
        tiempo={seconds}
        unidades={unidades}
        decenas={decenas}
        centenas={centenas}
        unidadesMil={unidadesMil}
        decenasMil={decenasMil}
        centenasMil={centenasMil}
         />, document.querySelector("#app"));
}
setInterval(() => {
    seconds++;
    contador();
}, 1000)

contador()

