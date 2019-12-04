import React, {Component} from 'react'

class PrimaryButton extends Component{


    render(){

        return(
        <button className='primary-btn' onMouseEnter={()=>{
            document.getElementById('primary-btn-shade').id = 'primary-btn-shade2'
        }} onMouseLeave={()=>{
            document.getElementById('primary-btn-shade2').id = 'primary-btn-shade'
        }}>{this.props.title}<span id='primary-btn-shade'>></span></button>
                
        )
    }



}

export default PrimaryButton