import React, {Component} from 'react';
import EventItem from '../events/event-item';
import Slider from 'react-slick';
import './slick-styles.css';
 
export default class SimpleSlider extends Component {
  render(){
    let items_list = [];
    for (let i = 1; i <= 10; i++){
      items_list.push(
        <div className="baby">{i} kek</div>
      );
    }
    let settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4
    }
    return (
      <Slider {...settings}>{items_list}</Slider>
    );
  }
}