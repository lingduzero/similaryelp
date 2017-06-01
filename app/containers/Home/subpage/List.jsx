import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data: [],
        	hasMore: false
        }
    }
    render() {
        return (
            <div>
            	<h2 className= "home-list-title">Guess you like</h2>
            	<div>
            		{this.state.hasMore.toString()}
            		{this.state.data.length}
            	</div>
            </div>
        )
    }
    componentDidMount(){
    	this.loadFirstPageDate();
    }

    loadFirstPageDate(){
    	const cityName = this.props.cityName;
    	const result = getListData(cityName, 0);
    	this.resultHandle(result);
    }

    //data minupulation
    resultHandle(result){
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		const hasMore = json.hasMore;
    		const data = json.data;

    		this.setState({
    			data: data,
    			hasMore: hasMore
    		})
    	})
    }

}


export default List