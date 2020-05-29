import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react';
class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                   
<Link to="/">Home</Link> | 
<Link to="/rooms">Rooms</Link> 

            </div>
            </nav>
        )

    }

}

export default Navbar;