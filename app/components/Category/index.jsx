import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	index: 0
        }
    }
    render() {

    	let opt = {
    		auto: 2000,
    		callback: function(index){
    			this.setState({
    				index: index
    			})
			}.bind(this)
    	}
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left park">Park</li>
                            <li className="float-left ktv">KTV</li>
                            <li className="float-left shopping">Shopping</li>
                            <li className="float-left service">Service</li>
                            <li className="float-left fitness">Fitness</li>
                            <li className="float-left haircut">Haircut</li>
                            <li className="float-left relation">Relation</li>
                            <li className="float-left fastfood">Fastfood</li>
                            <li className="float-left buffet">Buffet</li>
                            <li className="float-left bar">Bar</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left food">Food</li>
                            <li className="float-left film">Film</li>
                            <li className="float-left hotel">Hotel</li>
                            <li className="float-left entertainment">Entertainment</li>
                            <li className="float-left takeout">Takeout</li>
                            <li className="float-left hotpot">Hotpot</li>
                            <li className="float-left salon">Salon</li>
                            <li className="float-left holiday">Holiday</li>
                            <li className="float-left massage">Massage</li>
                            <li className="float-left nearby">Nearby</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="float-left sushi">Sushi</li>
                            <li className="float-left SPA">SPA</li>
                            <li className="float-left marriage">Marriage</li>
                            <li className="float-left training">Training</li>
                            <li className="float-left italyfood">Italyfood</li>
                            <li className="float-left ticket">Ticket</li>
                            <li className="float-left barbecue">Barbecue</li>
                            <li className="float-left decoration">Decoration</li>
                            <li className="float-left pet">Pet</li>
                            <li className="float-left all">All</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Category
