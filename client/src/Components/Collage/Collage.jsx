import React from 'react'
import banner from "../../Img/Banner.png"
import puffBanner from "../../Img/saco2.png"
import BagKids from "../../Img/BagKids.png"
import AlmohadaBanner from "../../Img/Almohada.jpg"
import bagpuff from "../../Img/bag puff.jpg"
import persona from "../../Img/persona.jpg"

export default function Collage() {
    return (
        <div className='ConatinerCollage'>
            <div>
                <p className='Instagram'>INSTAGRAM</p>
                <h1 className='ESPUFI'>#ESPUFI</h1>
            </div>
            <div className='ImagenesCollage'>

                <div className="fila">
                    <div className="columna">
                        <img className='ImageCollage' src={banner} alt='Paraguas' />
                    </div>
                    <div className="columna">
                        <img className='ImageCollage' src={BagKids} alt='Paraguas' />
                    </div>
                    <div className="columna">
                        <img className='ImageCollage' src={bagpuff} alt='Paraguas' />
                    </div>
                </div>
                <div className="fila">
                    <div className="columna">
                        <img className='ImageCollage' src={puffBanner} alt='Paraguas' />
                    </div >
                    <div className="columna">
                        <img className='ImageCollage' src={AlmohadaBanner} alt='Paraguas' />
                    </div>
                    <div className="columna">
                        <img className='ImageCollage' src={persona} alt='Paraguas' />
                    </div>

                </div>
            </div>

        </div>

    )
}
