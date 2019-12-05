import React, {Component} from 'react';
import Navbar from '../component/Navbar'
import HomeJumbotron from '../component/HomeJumbotron'
import AboutDono from '../component/AboutDono'
import HomeFooter from '../component/HomeFooter';

let y = 0


class Home extends Component {


    render(){

        return(
        <>
            <Navbar/>
            <HomeJumbotron/>
            <AboutDono/>
            <HomeFooter/>
        </>
        )
    }

}


export default Home