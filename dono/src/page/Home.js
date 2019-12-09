import React, {Component} from 'react';
import Navbar from '../component/Navbar'
import HomeJumbotron from '../component/HomeJumbotron'
import AboutDono from '../component/AboutDono'
import FooterBottom from '../component/FooterBottom';

let y = 0


class Home extends Component {


    render(){

        return(
        <>
            <Navbar/>
            <HomeJumbotron/>
            <AboutDono/>
            <FooterBottom/>
        </>
        )
    }

}


export default Home