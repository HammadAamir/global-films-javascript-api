import React, { Component } from "react";
import Slider from "react-slick";
import FilmDetails from './FilmDetails'

export default class FilmSlider extends Component {
  render() {
    const { films } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
               
        {/* <div className="films"> */}
                {films && films.map(film => (
                <FilmDetails film={film} key={film._id} />
                ))
                }
            {/* </div> */}
        </Slider>
    );
  }
}