import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'


function NavBar() {
    const [openMenu, setOpenMenu] = useState('');
    const [closeMenu , setCloseMenu]= useState('hide');
    const [openNav , setOpenNav]=useState('');
    const handleOpenMenu = ()=>{
        setOpenMenu('hide');
        setCloseMenu('');
        setOpenNav('show-nav');
    }
    const handlCloseMenu = ()=>{
        setOpenMenu('');
        setCloseMenu('hide');
        setOpenNav('');
    }


    const [dimension, setDimension] = useState(window.innerWidth);
    const onResize = () => {
        const width = window.innerWidth;
        setDimension(width);
    }
    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return (
        <div className='container'>
            <div className='left'>
                <span className='react-header'>React</span>
                <img src='assets/images/logo.svg' alt='logo' className='logo' />
            </div>
            <nav className='nav-bar'>
                {
                    dimension >750?

                (
                <React.Fragment>
                    <a href='/' className='field'>Home</a>
                    <a href='/' className='field'>Services</a>
                    <a href='/' className='field'>Products</a>
                    <a href='/' className='field'>Contact Us</a>
                    <button className='sign-up'>Sign Up</button>
                </React.Fragment>
                ):
                (
                <React.Fragment>
                    <FontAwesomeIcon icon={faBars} className={`menu ${openMenu}`} onClick={handleOpenMenu}/>
                    <FontAwesomeIcon icon={faX} className={`close-menu ${closeMenu}`} onClick={handlCloseMenu} />
                </React.Fragment>

                )}

            </nav>
            {dimension<=750&&
            (<div className={`small-container ${openNav}`}>
               
                <a href='/' className='small-field'>Home</a>
                    <a href='/' className='small-field'>Services</a>
                    <a href='/' className='small-field'>Products</a>
                    <a href='/' className='small-field'>Contact Us</a>
                    <button className='small-sign-up'>Sign Up</button>
                   
            </div>)}

        </div>
    )
}

export default NavBar