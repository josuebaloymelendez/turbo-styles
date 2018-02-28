import React, {Component} from 'react';
import Slider from 'react-slick';
import EventItem from '../events/event-item';
import './slick-styles.css';
 
export default class SimpleSlider extends Component {
  render(){
  	let slickContents = [];
  	let {monthLength,itemsNum} = this.props;
  	for(let i = 1; i <= itemsNum; i++ ){
  		slickContents.push(
  			<div>
	  			<EventItem 
	  				key={i}
	  				monthLenght="long"
	  				dateShape="square"
	  			/>
  			</div>
  		);
  	}
    return (
       <Slider className="slick-events" {...this.props.settings}>
       		{slickContents}
       </Slider>
    );
  }
}