import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                        type="text" 
                        placeholder="input the phone number" 
                        onChange={this.changeHandle.bind(this)} 
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>send code</button>
                    <input type="text" placeholder="input the code"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>Login</button>
            </div>
        )
    }

    changeHandle(e){
    	this.setState({
    		username: e.target.value
    	})
    }

    clickHandle(){
    	const username = this.state.username;
    	const loginHandle = this.props.loginHandle
    	loginHandle(username);
    }
}


export default Login