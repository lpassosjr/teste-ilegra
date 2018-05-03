import React, { Component } from 'react'
import createFragment from 'react-addons-create-fragment';
import axios from 'axios'

const Details_URL = 'https://swapi.co/api/films'

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrayInfo: []
        }
    }
    
    swFilmDetails(e){
        axios.get(`${Details_URL}/${e}`)
        .then(
            (response) => {
                this.setState({ arrayInfo: createFragment(response.data)})
                console.log(response.data)
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
            <div>
                {this.state.arrayInfo}
            </div>
        )
    }
}
