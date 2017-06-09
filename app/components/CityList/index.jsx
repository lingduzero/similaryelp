import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="city-list-container">
            <h3>Popular City</h3>
            <ul className="clear-fix">
            	<li>
                    <span onClick={this.clickHandle.bind(this,'New York')}>New York</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Newark')}>Newark</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Hoboken')}>Hoboken</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Paramus')}>Paramus</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Jersey City')}>Jersey City</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Princeton')}>Princeton</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Edison')}>Edison</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Warren')}>Warren</span>
                </li>
                <li>
                    <span onClick={this.clickHandle.bind(this,'Ruthford')}>Ruthford</span>
                </li>
            </ul>
            </div>
        )
    }

    clickHandle(newCity){
    	let changeFn = this.props.changeFn;
    	changeFn(newCity);
    }
}


export default CityList