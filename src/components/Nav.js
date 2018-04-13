import React, {Component}  from 'react';
import './nav.css';
import {Link} from 'react-router-dom';


export default function Nav(){

    return(

        <div>
            <div className="nav-container">
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to="/post/:postid"><button>New Post</button></Link>
            <Link to="/"><button>Log Out</button></Link>
            
            </div>
        </div>
    )
}