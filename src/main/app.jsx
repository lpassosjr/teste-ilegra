import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../scss/content.scss'


import React, {Component} from 'react'
import axios from 'axios'
import Main from '../templates/main'

export default props => (
    <div className='container'>
        <Main />
    </div>
)