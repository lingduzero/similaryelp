import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList.jsx'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        // console.log(userinfo.username);
        // console.log(userinfo.cityName);
        return (
            <div>
                <Header title="User Home" backRouter="/"/>
                <UserInfo username = {userinfo.username} city = {userinfo.cityName} />
                <OrderList username = {userinfo.username} />
            </div>
        )
    }

    componentDidMount(){
        if(!this.props.userinfo.username){
            hashHistory.push('/Login');
        }
    }
}

//--------------------------react redux------------------

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
)(User)