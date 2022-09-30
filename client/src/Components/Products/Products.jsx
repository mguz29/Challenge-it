import React from 'react'
import umbrella from "../../Img/paraguas.jpg"
import banner from "../../Img/Banner.png"
import puff from "../../Img/Puff.png"
import Bag from "../../Img/Bag.jpg"
import BagKids from "../../Img/BagKids.png"
import puffBanner from "../../Img/saco3.png"
import Almohada from "../../Img/almohadaCuerpo.jpg"
import AlmohadaBanner from "../../Img/Almohada.png"

export default function Products() {
    return (
        <div>
            <div className="productUmbrella">

                <div className='DivProduct'>
                 <img className='imageProducts' src={banner} alt='not found' /> 
                <button className='ButtonShop'>Shop</button>
                </div>

                <div className='DivUmbrella'>
                      <img className='imageUmbrella' src={umbrella} alt='not found' />
                      <h2>Puffi RAIN</h2>
                      <div></div>
                      <h5>Descripción del producto. Este es un <br/> texto simulado  </h5>
                      <p>> VER MAS</p>
                </div>
              
            </div>

            <div className="productUmbrella">

                <div className='DivUmbrella'>
                      <img className='imagePuff' src={puff} alt='not found' />
                      <h2>Puffi PUFF</h2>
                      <div></div>
                      <h5>Descripción del producto. Este es un <br/> texto simulado  </h5>
                      <p>> VER MAS</p>
                </div>

                <div className='DivProduct'>
                 <img className='imageProducts' src={puffBanner} alt='not found' /> 
                {/* <button className='ButtonShop'>Shop</button> */}
                </div>
              
            </div>

            <div className="productUmbrella">

                <div className='DivProduct'>
                 <img className='imageProducts' src={BagKids} alt='not found' /> 
                {/* <button className='ButtonShop'>Shop</button> */}
                </div>

                <div className='DivUmbrella'>
                      <img className='imageUmbrella' src={Bag} alt='not found' />
                      <h2>Puffi CART</h2>
                      <div></div>
                      <h5>Descripción del producto. Este es un <br/> texto simulado  </h5>
                      <p>> VER MAS</p>
                </div>
              
            </div>

            <div className="productUmbrella">

                <div className='DivUmbrella'>
                      <img className='imageAlmohada' src={Almohada} alt='not found' />
                      <h2>Puffi NAP</h2>
                      <div></div>
                      <h5>Descripción del producto. Este es un <br/> texto simulado  </h5>
                      <p>> MAS INFO</p>
                </div>

                <div className='DivProduct'>
                 <img className='imageProducts' src={AlmohadaBanner} alt='not found' /> 
                {/* <button className='ButtonShop'>Shop</button> */}
                </div>

              
            </div>

        </div>
    )
}
