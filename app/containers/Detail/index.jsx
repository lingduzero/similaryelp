import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info.jsx'
import Buy from './subpage/Buy.jsx'
import Comment from './subpage/Comment.jsx'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id = this.props.params.id;
        return (
            <div>
               <Header title="Info of the Store"/>
               <Info id = {id}/>
               <Buy id = {id}/>
               <Comment id = {id} />
            </div>
        )
    }
}

export default Detail
