import Carousel from 'react-bootstrap/Carousel';
import puffi from "./img/puffi.jpg"
import puffi1 from "./img/puffi1.jpg"
import puffi2 from "./img/puffi2.jpg"
import Shopbag from "./img/shopping-bag.png"
import sombrilla from "./img/sombrilla-de-playa.png"
import bag from "./img/bean-bag.png"
import almohada from "./img/almohada.png"


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000000}>
        <Carousel.Caption className="caption">
          <div className="Nav">
            <h3 className='header'>Pufi</h3>
            <div className="puffis">

              <div className="puff" href='#PUFI PUFF'>
                <a className='A-Ref' href="#PUFF">
                <img src={bag} alt='Not Found' />
                  <p className='pNav'> PUFI PUFF </p>
                </a>

              </div>

              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>

              <div className="puff" href='#PUFI RAIN'>
                <a  className='A-Ref' href='#RAIN'>
                <img src={sombrilla} alt='Not Found' />
                  <p className='pNav'> PUFI RAIN </p>
                </a>

              </div>

              <divisor lassName="cntLine">
                <div className="line">
                </div>
              </divisor>

              <div className="puff" >
                <a  className='A-Ref' href='#CART'>
                <img src={Shopbag} alt='Not Found' />
                  <p className='pNav'> PUFI CART </p>
                </a>

              </div>

              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>

              <div className="puff" href='#PUFI NAP'>
                <a className='A-Ref' href='#NAP'>
                <img src={almohada} alt='Not Found' />
                  <p className='pNav'> PUFI NAP </p>
                </a>

              </div>
            </div>

            <div className='DivAccount'>
              <select className='SelectAccount'>
                <option>Mi cuenta</option>
              </select>

              <divisor className="cntLine1">
                <div className="line1">
                </div>
              </divisor>
              <p className='SelectAccount'>Mi Compra</p>
            </div>

          </div>
          <h1 className='frase'>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h1>
          <button className="buttonShop">Shop</button>
        </Carousel.Caption>
        <img
          className="img"
          src={puffi2}
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item interval={3000}>
        <Carousel.Caption className="caption">
          <div className="Nav">
            <h3>Pufi</h3>
            <div className="puffis">

              <div className="puff">
                <img src={sombrilla} alt='Not Found' />
                <p> PUFI PUFF </p>
              </div>
              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <img src={sombrilla} alt='Not Found' />
                <p> PUFI RAIN </p>
              </div>
              <divisor lassName="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <p> PUFI CART </p>
              </div>
              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <p> PUFI NAP </p>
              </div>

            </div>
            <h3 className='pNav'>Pufi</h3>
          </div>



        </Carousel.Caption>
        <img
          className="img"
          src={puffi}
          alt="Second slide"
          width='100%'
          height="750px"
        />
      </Carousel.Item>
      <Carousel.Item interval={300000000}>
        <Carousel.Caption className="caption">
          <div className="Nav">
            <h3>Pufi</h3>
            <div className="puffis">

              <div className="puff">
                <img src={sombrilla} alt='Not Found' />
                <p> PUFI PUFF </p>
              </div>
              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <img src={sombrilla} alt='Not Found' />
                <p> PUFI RAIN </p>
              </div>
              <divisor lassName="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <p> PUFI CART </p>
              </div>
              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <p> PUFI NAP </p>
              </div>

            </div>
            <h3>Pufi</h3>
          </div>



        </Carousel.Caption><Carousel.Caption className="caption">
          <div className="Nav">
            <h3>Pufi</h3>
            <div className="puffis">

              <div className="puff">
                <img src={sombrilla} alt='Not Found' />
                <p> PUFI PUFF </p>
              </div>
              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <img src={sombrilla} alt='Not Found' />
                <p> PUFI RAIN </p>
              </div>
              <divisor lassName="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <p> PUFI CART </p>
              </div>
              <divisor className="cntLine">
                <div className="line">
                </div>
              </divisor>
              <div className="puff">
                <p> PUFI NAP </p>
              </div>

            </div>
            <h3>Pufi</h3>
          </div>



        </Carousel.Caption>
        <img
          className="img"
          src={puffi1}
          alt="Third slide"
          width='100%'
          heigth='350px'
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default IndividualIntervalsExample;