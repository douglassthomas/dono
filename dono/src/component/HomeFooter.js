import React from 'react'

function HomeFooter(props){
    return(
        <>


            <footer className='footer'>
                <div className='footer-mid'>
                    <img width='180px' height='70px' src='../../assets/dono-navbar-logo.png'/>
                    <div className='social-container'>
                        <div style={{width:'100%', textAlign:'start', marginLeft:'5px', color:'white'}}>Ikuti kami di</div>
                        <img width='auto' height='50px' style={{color:'white'}} src='../../assets/social.png'></img>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default HomeFooter