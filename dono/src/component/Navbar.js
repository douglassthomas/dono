import React, {Component} from 'react'
import Menu from '../component/Menu'
import {Link} from 'react-router-dom'

class Navbar extends Component{


    constructor(){
        super();
    }


    render(){
        return(
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/'>
                        <img width='180px' height='70px' src='../../assets/dono-navbar-logo.png'/>
                    </Link>
                    <Menu/>
                </div>
            </div>
        </>
        )
    }

}

export default Navbar