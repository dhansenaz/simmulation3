import React, {Component}  from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';



export default function Nav(props){
    console.log('------------------props', props)

    return(

        <div>
            <div>
            <img src={props.profile_pic} alt='User image' />
            <h3>{props.username}</h3>
            </div>
            <div className="nav-container">
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to="/post/:postid"><button>New Post</button></Link>
            <Link to="/"><button>Log Out</button></Link>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return state;
  };

  connect(mapStateToProps)(Nav);
