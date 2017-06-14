import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                {
                    // if marked or not
                    this.props.isStore
                    ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>Marked</button>
                    : <button onClick={this.storeClickHandle.bind(this)}>Mark</button>
                }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>Buy</button>
                </div>
            </div>
        )
    }

    storeClickHandle(){
    	//console.log(this.props.storeHandle);
    	this.props.storeHandle();
    }
    buyClickHandle(){
    	this.props.buyHandle();
    }
}


export default BuyAndStore