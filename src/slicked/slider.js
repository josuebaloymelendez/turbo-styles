import React, {Component} from 'react';
import EventItem from '../events/event-item';
import Slider from 'react-slick';
import './slick-styles.css';
 
export default class SimpleSlider extends Component {
  render(){
    let items_list = [];
    let sync_list = [];
    for (let i = 1; i <= 10; i++){
      items_list.push(
        <div className="baby">{i} kek</div>
      );
      sync_list.push(
        <div className="bobby">{i} syncd</div>
      );
    }
    let sync_settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      vertical: true
    }
    let main_settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '#slider_for',
      dots: true,
      arrows: false,
      centerMode: true,
      focusOnSelect: true
    }
    return (
      <div>
        <Slider
          {...sync_settings}
        >{sync_list}</Slider>
        <Slider
          {...main_settings}
        >{items_list}</Slider>
      </div>
    );
  }
}