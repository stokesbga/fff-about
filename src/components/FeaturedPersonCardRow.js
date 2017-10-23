import React, { Component } from 'react';
import FeaturedPersonCard from './FeaturedPersonCard';
import _ from 'lodash';
import Slider from 'react-slick';

import '../App.css';

class FeaturedPersonCardRow extends Component {

  render() {
    var settings = {
     dots: false,
     infinite: false,
     speed: 500,
     initialSlide: 2,
     centerMode: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     rtl: true
    };

    return (
      <Slider ref={this.props.setSlider} {...settings}>
        {this.props.featuredUsers.map(index => {
          return (
            <div className="Featured-card" key={ index + Math.random(0, 1000000)}>
              <FeaturedPersonCard user={this.props.users[index]} key={index + Math.random(0, 100000)}/>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default FeaturedPersonCardRow;
