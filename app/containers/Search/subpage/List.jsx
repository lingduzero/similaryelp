import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getSearchData } from '../../../fetch/search/search'


const initialState = {
    data: [],  //store list info
    hasMore: false,  //record if has more data
    isLoadingMore: false, //record now is loading more or finished
    page: 0 //next page page number
}

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;        	
    }
    render() {
        return (
            <div>
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
    	this.loadFirstPageData();
    }

    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const result = getSearchData(0, cityName, category, keyword)
        this.resultHandle(result)
    }

    loadMoreData(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.userinfo.cityName
        const page = this.state.page
        const keyword = this.props.keyword || ''
        const category = this.props.category
        const result = getSearchData(page, cityName, category, keyword)
        this.resultHandle(result)
        this.setState({
            isLoadingMore: false
        })
    }

    //data minupulation
    resultHandle(result){
    	const page = this.state.page
        this.setState({
            page: page + 1
        })

        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('Error Loading the data, ', ex.message)
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category

        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // reset state
        this.setState(initialState)

        // reload data
        this.loadFirstPageData()
    }
}

// -------------------redux react --------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)