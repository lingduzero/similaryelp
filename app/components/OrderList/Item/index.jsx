import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	commentState: 2 //0 not comment 1 comment ing 2 commented
        }
    }
    render() {
    	const data = this.props.data;
    	
        return (
          <div className="order-item-container">
                <div className="clear-fix">
	                <div className="order-item-img float-left">
	                    <img src={data.img}/>
	                </div>
	                <div className="order-item-comment float-right">
	                {
	                    this.state.commentState === 0
	                    ?  <button className = "btn" onClick={this.showComment.bind(this)}>Comment</button>
	                    : 
	                    	this.state.commentState === 1
	                    	? ''
	                    	: <button className = "btn unseleted-btn">Commented</button>
	                }
	               
	                </div>
	                <div className="order-item-content">
	                    <span>Title: {data.title}</span>
	                    <span>Count: {data.count}</span>
	                    <span>Price: ${data.price}</span>
	                </div>
            	</div>
            	{
            		 this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitClickHandle.bind(this)}>Submit</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>Remove</button>
                    </div>
                    : ''
            	}
            </div>
        )
    }

    componentDidMount(){
    	this.setState({
    		commentState: this.props.data.commentState
    	})
    }

    showComment(){
    	this.setState({
    		commentState : 1
    	})
    }

    hideComment(){
    	this.setState({
    		commentState : 0
    	})
    }

    submitClickHandle(){
    	const submitComment = this.props.submitComment;
    	const id = this.props.data.id;
    	const commentTextDOM = this.refs.commentText;
    	const value = commentTextDOM.value.trim();
    	if(!value){
    		return 
    	}
    	//submit comment detail
    	submitComment(id, value, this.commentOK.bind(this))
    }

    commentOK(){
    	this.setState({
    		commentState : 2
    	})
    }
}


export default Item