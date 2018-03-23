import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Interface extends Component{
	render(){
		return(
			<div id="wrapper_main" className="main-wrapper">
				<header id="header_main" className="site-header" aria-labelledby="title_header">
					<div id="row_header" className="row">
						<div className="row-inner">
							<h1 id="title_header" className="header-title header-logo">
								<Link to="/">
									<span className="header-title-inner">Spike <em>Modules</em></span>
								</Link>
							</h1>
							<h3 className="header-description">Magical styles for magical people.</h3>
						</div>
					</div>

					<div id="row_menu" className="row">
						<div className="row-inner">
							<nav id="sitenav_main" className="sitenav nav-group" aria-label="Main Site Navigation">
								<ul className="nav-menu">
									<li className="nav-item">
										<Link to="/header"><span className="nav-item-inner">Header</span></Link>
									</li>
									<li className="nav-item">
										<Link to="/footer"><span className="nav-item-inner">Footer</span></Link>
									</li>
									<li className="nav-item">
										<Link to="/main"><span className="nav-item-inner">Main</span></Link>
										<div className="sub-nav">
											<ul className="sub-nav-group">
												<li><Link to="/shuffle">Shuffle</Link></li>
												<li><Link to="/news">News</Link></li>
												<li><Link to="/events">Events</Link></li>
												<li><Link to="/spotlight">Spotlight</Link></li>
												<li><Link to="/quicklinks">Quicklinks</Link></li>
												<li><Link to="/links">Links</Link></li>
												<li><Link to="/map">Map</Link></li>
												<li><Link to="/video">Video</Link></li>
												<li><Link to="/form">Form</Link></li>
											</ul>
										</div>
									</li>
									<li className="nav-item">
										<Link to="/anim"><span className="nav-item-inner">Animation</span></Link>
									</li>
									<li className="nav-item">
										<Link to="/general"><span className="nav-item-inner">General</span></Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
				<main id="content_main" className="site-content" aria-label="Main Site Content" tabIndex="-1">
					{this.props.children}
				</main>
			</div>
		);
	}
}