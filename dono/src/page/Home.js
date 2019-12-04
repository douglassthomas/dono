import React, {Component} from 'react';
import Navbar from '../component/Navbar'
import HomeJumbotron from '../component/HomeJumbotron'
import AboutDono from '../component/AboutDono'

class Home extends Component {

    render(){

        return(
        <>
            <Navbar/>
            <HomeJumbotron/>
            <AboutDono/>
        </>
        )
    }

}


export default Home