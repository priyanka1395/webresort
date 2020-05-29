import React from 'react';
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Button from "../components/StyledHero";
const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxarious rooms" subtitle="delux rooms started at only $230">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>

            </Hero>
            <Services />
            <FeaturedRooms/>
        </>
    )
}
export default Home;