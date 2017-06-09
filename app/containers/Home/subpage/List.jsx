import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore/'
import './style.less'


class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data: [],  //store list info
        	hasMore: false,  //record if has more data
            isLoadingMore: false, //record now is loading more or finished
            page: 1 //next page page number
        }
    }
    render() {
        return (
            <div>
            	<h2 className= "home-list-title">Guess you like</h2>
                {
                    this.state.data.length
                    ?<ListComponent data = {this.state.data} />
                    :<div>Loading....</div>
                }

                {
                    this.state.hasMore
                    ?<LoadMore isLoadingMore = {this.state.isLoadingMore} loadMoreFn = {this.loadMoreData.bind(this)} />
                    :<div></div>
                }
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

    loadMoreData(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle(result);
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    //data minupulation
    resultHandle(result){
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		const hasMore = json.hasMore;
    		const data = json.data;

    		this.setState({
    			data: this.state.data.concat(data),
    			hasMore: hasMore
    		})
    	})
    }

}


export default List