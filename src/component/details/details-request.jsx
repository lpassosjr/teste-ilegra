import React, { Component } from 'react'
import axios from 'axios'

import Details_various from './details-various'
import Details_close from './details-close'
import Loading from '../loading'


const Details_URL = 'https://swapi.co/api/films'

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            opening_crawl: '',
            director: '',
            producer: '',
            release_date: '',
            characters: [],
            planets: [],
            starships: [],
            vehicles: [],
            species: [],
            loading: true
        }
    }
    
    swFilmDetails(e){
        axios.get(`${Details_URL}/${e}`)
        .then(
            (response) => {
                this.setState({ 
                    title: response.data.title, 
                    opening_crawl: response.data.opening_crawl,
                    director: response.data.director,
                    producer: response.data.producer,
                    release_date: response.data.release_date,
                    characters: response.data.characters,
                    planets: response.data.planets,
                    starships: response.data.starships,
                    vehicles: response.data.vehicles,
                    species: response.data.species
                })
            }
        )
        .catch((error) => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.swFilmDetails(this.props.episode)
    }
    render(){
        return(
            <div className={'episode'+this.props.episode}>
                <h3><strong>Title: </strong>{this.state.title}</h3>
                <p><strong>Opening Crawl: </strong>{this.state.opening_crawl}</p>
                <p><strong>Director: </strong>{this.state.director}</p>
                <p><strong>Producer: </strong>{this.state.producer}</p> 
                <p className="various-title"><strong>Characters: </strong></p>{this.state.characters.map((url, index) => {
                    return <Details_various url={url} key={index}/> 
                })}
                <br/>
                <p className="various-title"><strong>Planets: </strong></p>{this.state.planets.map((url, index) => {
                    return <Details_various url={url} key={index}/> 
                })}
                <br/>
                <p className="various-title"><strong>Starships: </strong></p>{this.state.starships.map((url, index) => {
                    return <Details_various url={url} key={index}/> 
                })}
                <br/>
                <p className="various-title"><strong>Vehicles: </strong></p>{this.state.vehicles.map((url, index) => {
                    return <Details_various url={url} key={index}/> 
                })}
                <br/>
                <p className="various-title"><strong>Species: </strong></p>{this.state.species.map((url, index) => {
                    return <Details_various url={url} key={index}/> 
                })}
                <Loading loading={this.state.loading}/>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 3000);
    }
}
