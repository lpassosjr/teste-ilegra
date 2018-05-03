import React, { Component } from 'react'
import $ from 'jquery'

// Show an element
const show = function (elem) {
    elem.style.display = 'block';
};

// Hide an element
const hide = function (elem) {
    elem.style.display = 'none';
};

export default class Details_close extends Component {

    _close(){
        $(".card").closest(".modal-details").hide()        
    }

    render(){
        return(
            <button className="close" id={this.id} onClick={this._close}>Close</button>
        )
    }
}
