import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Details from './details/details'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            cardDetails: false,
            cardEpisode: '',
            cardRendered: false
        }
    }

    _click() {
        if(!this.state.cardRendered){
            this.setState({
                cardDetails: true, 
                cardEpisode: this.props.film.episode_id, 
                cardRendered: true
            });            
        }else{
            console.log('aqui amiguinho')
        }
    }

    render(){
        return (
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                    <div className="caption">
                        <img className="movie-cover" src={`../../images/episode-${this.props.film.episode_id}.jpg`} alt=""/>
                        <h4>{this.props.film.title}</h4>
                        <p><small>{this.props.film.release_date.split('-', 1)}</small></p>
                        <button className='btn btn-info' onClick={() => this._click()}>
                            <i className='fa fa-plus'></i>
                        </button>
                    </div>
                </div>
                <div className="modal-details container">
                    <div className="row">
                    {
                        this.state.cardDetails
                            ? <Details episode={this.state.cardEpisode}/>
                            : null
                    }
                    </div>
                </div>
            </div>
           
        )
    }
}