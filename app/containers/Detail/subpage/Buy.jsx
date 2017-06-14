import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import * as storeActionsFromFile from '../../../actions/storeinfo.js'
import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          isStore: false
        }
    }
    render() {
        return (
            <div>
               <BuyAndStore isStore = {this.state.isStore} buyHandle = {this.buyHandle.bind(this)} storeHandle= {this.storeHandle.bind(this)}/>
            </div>
        )
    }

    componentDidMount(){
      // console.log('storeinfo', this.props.storeinfo);
      // console.log('storeActions',this.props.storeActions);
      this.checkStoreState();
    }

    checkStoreState(){
        const id = this.props.id;
        const store = this.props.storeinfo;
        store.some(item => {
          if(item.id === id){
            this.setState({
              isStore:true
            })
            return true;
          }
        })
    }

    buyHandle(){
        const loginFlag = this.loginCheck()
        if(!loginFlag){
          return 
        }

        //buy

        //jump to the user page
        hashHistory.push('/User');
    }

    storeHandle(){
       const loginFlag = this.loginCheck()
        if(!loginFlag){
          return 
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if(this.state.isStore){
          //already stored,click to cancel the store
          storeActions.rm({
            id: id
          })
        }else{
          //not stroed, click to store
          storeActions.add({
            id: id
          })
        }

        //
        this.setState({
          isStore: !this.state.isStore
        })
    }

    //test login
    loginCheck(){
      const id = this.props.id;
      const userinfo = this.props.userinfo;
      //console.log(userinfo.username);
      if(!userinfo.username){
        //jump the login page
        // console.log('jump');
        hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
        return false;
      }

      return true;
    }
}






function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        storeinfo: state.storeinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
