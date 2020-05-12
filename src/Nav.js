import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <ul className="nav-links">
                <Link to='/posts'>
                <li>List Of Posts from jsonplacholder</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;