import React from 'react';
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import RoomsContainer from '../components/RoomsContainer';
const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our Rooms">
                    <Link to="/" className="btn-primary">return Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    )
}

export default Rooms;;