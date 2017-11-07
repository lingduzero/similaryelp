import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category/'
import Ad from './subpage/Ad.jsx'
import List from './subpage/List.jsx'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} history={this.props.history}/>
                <Category />
                <div style ={{height: '15px'}}></div>
                <Ad />
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state){
        return{
            userinfo : state.userinfo
        }

}

function mapDispatchToProps(dispatch){
    return {
    
    }
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))

