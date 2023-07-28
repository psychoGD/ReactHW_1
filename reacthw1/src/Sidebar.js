import React from 'react';



export default function Sidebar() {
    return (
        <div style={{ height: '100vh', backgroundColor: '#9681EB' }}>
            <br></br>

            <h1 style={{ color: 'white' }}>Bootstrap SideBar</h1>
            <br></br>
            <br></br>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                <img alt='Home' style={{ width: '23px', height: '23px', marginTop: '-6px', marginLeft: '-15px' }} src='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg'></img>
                Home
            </p>
            <br></br>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                <img alt='info' style={{ width: '35px', height: '27px', marginTop: '-6px', marginLeft: '-15px' }} src='/info.png' />
                About
            </p>
            <br></br>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                <img alt='FAQ' style={{ width: '33px', height: '28px', marginTop: '-6px', marginLeft: '-35px' }} src='/faq.png'></img>
                FAQ
            </p>
            <br></br>
            <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
                <img alt='Contact' style={{ width: '25px', height: '25px', marginTop: '-4px' }} src='/contact.png'></img>
                Contact
            </p>

        </div>
    )
}
