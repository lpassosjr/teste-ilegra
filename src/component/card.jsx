import React from 'react'
import axios from 'axios'

export default props => (
    <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
            <div className="caption">
                <img className="movie-cover" src={`../../images/episode-${props.film.episode_id}.jpg`} alt=""/>
                <h4>{props.film.title}</h4>
                <p><small>{props.film.release_date.split('-', 1)}</small></p>
                <button className={'btn btn-primary'+ props.style}>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
        </div>
    </div>
)