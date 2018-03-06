import React, {Component} from 'react';
import Slider from 'react-slick';
import './slick-styles.scss';

 
export default class SimpleSlider extends Component {
  render(){
    return (
       <Slider className="slick-events" {...this.props.settings}>{this.props.slickedContents}</Slider>
    );
  }
}