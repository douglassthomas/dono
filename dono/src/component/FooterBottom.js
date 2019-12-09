import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import PrimaryButton from './PrimaryButton'

function FooterBottom(props){
    return(
        <>


            <footer className='footer'>
                <div className='footer-mid'>
                    <img width='180px' height='70px' src='../../assets/dono-navbar-logo.png'/>
                    <div className='social-container'>
                        <div style={{textAlign:'end', marginRight:'5px', color:'white'}}>Ikuti kami di</div>
                        <img width='auto' height='50px' style={{color:'white'}} src='../../assets/social.png'></img>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div>
                        <MenuItem title='Karir' goto='/career'/>
                        <MenuItem title='Promo' goto='/promo'/>
                    </div>
                    <p>© 2019 DANA - PT. Dono Bukan Dana All Rights Reserved.</p>
                </div>


            </footer>

        </>
    )
}

export default FooterBottom