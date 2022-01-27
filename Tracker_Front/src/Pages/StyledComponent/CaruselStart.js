import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../../Styles/style.css'

import f1 from '../../Styles/img/f1.jpg'
import f2 from '../../Styles/img/f2.jpg'
import f3 from '../../Styles/img/f3.jpg'

export default function Carusel1(){
  return(
    <div>
  <Carousel >
      <Carousel.Item style= {{height: 400}}>
      <img
        className="d-block w-100"
        src={f1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Get your own startUP!</h3>
        <p>Do you have an idea?</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style= {{height: 400}} >
      <img
        className="d-block w-100"
        src={f2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Plan it</h3>
        <p>Set a Task</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style= {{height: 400}}>
      <img
        className="d-block w-100"
        src={f3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Code Coffe Code</h3>
        <p>Realize</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</div>
  )
}