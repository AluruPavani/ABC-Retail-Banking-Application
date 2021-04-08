import { useHistory } from "react-router-dom";
import {Carousel} from 'react-bootstrap';

function About() {
  return(
      <div>
          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://www.bank-abc.com/Home%20Page%20Slider/Digital-Banking.png"
      height="520" alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://uiliu.com/a/abc-bank-org.jpg"
      height="520" alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://docplayer.net/docs-images/49/16403442/images/page_1.jpg"
      height="520" alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
      </div>
  )
}
export default About;