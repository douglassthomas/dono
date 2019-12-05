import React, {Component} from 'react'
import Menu from '../component/Menu'
import {Link} from 'react-router-dom'

class Navbar extends Component{


    constructor(){
        super();
    }


    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll, true)
    }

    handleScroll = ()=>{
        var y = window.scrollY
        if(y>350){
            document.getElementById("navbar").className = 'navbar-sticky'
        }
        else{
            document.getElementById("navbar").className = 'navbar'
        }
    }

    render(){
        return(
        <>
            <div id="navbar" className='navbar'>
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