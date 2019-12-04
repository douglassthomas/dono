import React from 'react'
import MenuItem from './MenuItem'

function Menu(props){
    return (
        <>
            <div className='menu'>
                <MenuItem title='Karir' goto='/career'/>
                <MenuItem title='Promo' goto='/promo'/>
                <button className='download-btn'>Download</button>
            </div>
        </>
    )
}

export default Menu