import React from 'react'
import Digitos from './Digitos'
import Reloj from './Reloj'


function SecondCounter(props) {
    return (
        <div className='secondCounter'>
            <div className='contenedor'>
                <Reloj/>
                <Digitos tiempo={props.centenasMil}/>
                <Digitos tiempo={props.decenasMil}/>
                <Digitos tiempo={props.unidadesMil}/>
                <Digitos tiempo={props.centenas}/>
                <Digitos tiempo={props.decenas}/>
                <Digitos tiempo={props.unidades}/>
            </div>
        </div>
    )
}

export default SecondCounter