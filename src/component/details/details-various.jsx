import React, { Component } from 'react'
import axios from 'axios'

export default class Details_various extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }
    
    swFilmDetails(e){
        axios.get(e)
        .then(
            (response) => {
                this.setState({ 
                    name: response.data.name
                })
            }
        )
        .catch((error) => {
            console.log(error)
        })
    }

    componentWillMount(){
        this.swFilmDetails(this.props.url)
    }
    render(){
        return(
            <p className="various">{this.state.name}</p>
        )
    }
}
