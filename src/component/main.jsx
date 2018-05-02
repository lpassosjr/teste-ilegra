import React, { Component } from 'react'
import axios from 'axios'

import Card from './card'

const Base_URL = 'https://swapi.co/api'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            arrayInfo: [] 
        }
    }
    swFilms(e){
        axios.get(`${Base_URL}/films`)
        .then(
            (response) => {
                this.setState({ arrayInfo: response.data.results})
            } 
        )
        .catch((error) => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.swFilms('films')
    }


    render(){
        return (
            <div className="row">
                {this.state.arrayInfo.map((film, index) => {
                    return <Card film={film} key={index}/>                        
                })}
            </div>
        )
    }
}