import React from 'react'
import escudo from "../../Img/escudo-seguro.png"
import facebook from "../../Img/facebook.png"
import instagram from "../../Img/instagram.png"
import twitter from "../../Img/gorjeo.png"

export default function Footer() {
    return (
        <div>
            <div className='Container-Footer'>

                <div className='DivFooter'>
                    <h1>Pufi</h1>
                </div>

                <div className='DivFooter'>
                    <ul className='ul'>
                        <li>PUFI RAIN</li>
                        <li>PUFI PUFF</li>
                        <li>PUFFI CART</li>
                        <li>PUFI NAP</li>

                    </ul>
                </div>

                <divisor className="cntLine2">
                    <div className="line2">
                    </div>
                </divisor>

                <div className='DivFooter'>
                    <ul className='ul'>
                        <li>CONTACTO</li>
                        <li>AYUDA</li>
                        <li>CÓMO COMPRAR</li>
                        <li>TÉRMINOS Y CONDICIONES</li>
                    </ul>
                </div>

                <divisor className="cntLine2">
                    <div className="line2">
                    </div>
                </divisor>

                <div className='DivFoote'>
                    <div className='Compra-100'>
                        <p>COMPRA 100% SEGURA</p>
                    </div>
                    <div className='Compra-Segura'>
                        <img src={escudo} />
                        <p className='p-Compra'>COMPRÁ CON <br /> LA GARANTIA <br /> DE PUFFI</p>
                    </div>
                </div>

                <divisor className="cntLine2">
                    <div className="line2">
                    </div>
                </divisor>

                <div className='redes-socailes'>
                    <p>SEGUINOS EN </p>
                    <img src={facebook} className='red-social' />
                    <img src={twitter} className='red-social' />
                    <img src={instagram} className='red-social' />
                </div>
                <hr></hr>


            </div>

            <divisor className="cntLine3">
                <div className="line3">
                </div>
            </divisor>
            <div className='P-Copyright'>
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
            </div>

        </div>
    )
}
