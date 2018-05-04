import React, { Component } from 'react'

export default class Loading extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.loading)
        return (
            <div>
                {this.props.loading ? <div className="loading"><img src="../images/loading_icon.gif" alt=""/></div> : ''}
            </div>
        )
    }
}