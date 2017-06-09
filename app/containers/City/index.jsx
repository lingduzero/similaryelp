import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import LocalStorage from '../../util/LocalStore.js'
import {CITYNAME} from '../../config/localStoreKey.js'


class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
              <Header title = "select the city"/>
              <CurrentCity cityName = {this.props.userinfo.cityName} />
              <CityList changeFn = {this.changeCity.bind(this)}/>
            </div>
        )
    }

    changeCity(newCity){
        if(newCity == null){
            return
        }

        //change redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        //change localstorage
         LocalStorage.setItem(CITYNAME, newCity);
         console.log(hashHistory);
         hashHistory.push('/');

    }
}

function mapStateToProps(state){
        return{
            userinfo: state.userinfo
        }

}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)



