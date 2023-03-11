import picturet from "../../../assets/Home/shape-bg.png"

import React from 'react'
import'./Footer.css'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={picturet} alt='no internet connection' />
            </div>
        </div>
    )
}
