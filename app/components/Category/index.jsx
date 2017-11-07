import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom'

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
                            <Link to ="/search/park"><li className="float-left park">Park</li></Link>
                            <Link to ="/search/ktv"><li className="float-left ktv">KTV</li></Link>
                            <Link to ="/search/shopping"><li className="float-left shopping">Shopping</li></Link>
                            <Link to ="/search/service"><li className="float-left service">Service</li></Link>
                            <Link to ="/search/fitness"><li className="float-left fitness">Fitness</li></Link>
                            <Link to ="/search/haircut"><li className="float-left haircut">Haircut</li></Link>
                            <Link to ="/search/relation"><li className="float-left relation">Relation</li></Link>
                            <Link to ="/search/fastfood"><li className="float-left fastfood">Fastfood</li></Link>
                            <Link to ="/search/buffet"><li className="float-left buffet">Buffet</li></Link>
                            <Link to ="/search/bar"><li className="float-left bar">Bar</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to ="/search/food"><li className="float-left food">Food</li></Link>
                            <Link to ="/search/film"><li className="float-left film">Film</li></Link>
                            <Link to ="/search/hotel"><li className="float-left hotel">Hotel</li></Link>
                            <Link to ="/search/entertainment"><li className="float-left entertainment">Entertainment</li></Link>
                            <Link to ="/search/takeout"><li className="float-left takeout">Takeout</li></Link>
                            <Link to ="/search/hotpot"><li className="float-left hotpot">Hotpot</li></Link>
                            <Link to ="/search/salon"><li className="float-left salon">Salon</li></Link>
                            <Link to ="/search/holiday"><li className="float-left holiday">Holiday</li></Link>
                            <Link to ="/search/massage"><li className="float-left massage">Massage</li></Link>
                            <Link to ="/search/nearby"><li className="float-left nearby">Nearby</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to ="/search/sushi"><li className="float-left sushi">Sushi</li></Link>
                            <Link to ="/search/SPA"><li className="float-left SPA">SPA</li></Link>
                            <Link to ="/search/marriage"><li className="float-left marriage">Marriage</li></Link>
                            <Link to ="/search/training"><li className="float-left training">Training</li></Link>
                            <Link to ="/search/italyfood"><li className="float-left italyfood">Italyfood</li></Link>
                            <Link to ="/search/ticket"><li className="float-left ticket">Ticket</li></Link>
                            <Link to ="/search/barbecue"><li className="float-left barbecue">Barbecue</li></Link>
                            <Link to ="/search/decoration"><li className="float-left decoration">Decoration</li></Link>
                            <Link to ="/search/pet"><li className="float-left pet">Pet</li></Link>
                            <Link to ="/search/all"><li className="float-left all">All</li></Link>
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
