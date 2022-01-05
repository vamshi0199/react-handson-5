import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Style.css'

 class Header extends Component {
    render() {
        return (
            <div className='text1'>
            <Link to ='./home' className='text2'>Home</Link>
               <Link to="/Student" className='text3'>Student</Link> 
               
            </div>
        )
    }
}

export default Header

