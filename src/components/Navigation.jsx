import React from 'react';
//Styles
import '../component-styles/navigation.css';
//Images
import logo from '../images/logo_white_navy.png';

export default function Navigation() {
    return (
        <div className='navigationContainer'>
            <div className='navigationLogoContainer'>
                <img src={logo} alt="Personal logo" className='navigationLogo'/>
            </div>
            <div className='navigationItemsContainer'>
                <div className='navigationItem'>Home</div>
                <div className='navigationItem'>About me</div>
                <div className='navigationItem'>Skills</div>
                <div className='navigationItem'>Projects</div>
                <div className='navigationItem'>Contact</div>
            </div>
        </div>
    );
};