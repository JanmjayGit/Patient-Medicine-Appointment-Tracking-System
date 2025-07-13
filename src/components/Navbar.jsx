import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({isLoggedIn, setIsLoggedIn}){

    function handleLogout(){
        setIsLoggedIn(false);
    }
    return(
        <nav className='nav-link'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {
                isLoggedIn && <>
                    <Link to='/book-appointment' >Appointments</Link>
                    <Link to='/dashboard' >Dashboard</Link>
                    <Link to='/prescription' >Prescription</Link>
                </>
            }
            {/* <Link to="/book-appointment">Appointments</Link>
            <Link to="/dashboard">Dashboard</Link> */}

            {
                isLoggedIn? (<button onClick={handleLogout}>Logout</button>):
                (                
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/registration">Register</Link>
                    </>
                )
            }
            
        </nav>
    );
}

export default Navbar;