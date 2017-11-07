import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	checking: true
        }
    }
    render() {
        return (
            <div>
            	<Header title = "Login" />
            	{
            		this.state.checking
            		? <div>{/*Loading...*/}</div>
            		: <LoginComponent loginHandle = {this.loginHandle.bind(this)}/>
            	}
            </div>
        )
    }

    componentDidMount(){
    	this.doCheck();
    }

    //login hanle
    loginHandle(username){
    	const actions = this.props.userInfoActions;
    	let userinfo = this.props.userinfo;
    	userinfo.username = username;
    	actions.update(userinfo);

    	//jump the link
    	const params = this.props.match.params;
    	const router = params.router;
    	if(router){
    		this.props.hashHistory.push(router);
    	}else{
    		this.goUserPage();
    	}
    }
    doCheck(){
    	const userinfo = this.props.userinfo;
    	if(userinfo.username){
    		//already login
    		this.goUserPage();
    	}else{
    		//not login
    		this.setState({
    			checking: false
    		})
    	}
    }

    goUserPage(){
    	this.props.hashHistory.push('/User');
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))