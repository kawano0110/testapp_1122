import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slideImg1 from './img/s_01.jpg';
import slideImg2 from './img/s_02.jpg';
import slideImg3 from './img/s_03.jpg';

function Slider(){
    return(
        <Carousel>
            <div>
                <img src={slideImg1} />
                <p className='legend'>Legend 1</p>
            </div>
            <div>
                <img src={slideImg2} />
                <p className='legend'>Legend 1</p>
            </div>
            <div>
                <img src={slideImg3} />
                <p className='legend'>Legend 1</p>
            </div>
        </Carousel>
    );
}
export default Slider;