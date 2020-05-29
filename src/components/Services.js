import React from 'react';
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa';
import Title from "../components/Title";
class Services extends React.Component {
    constructor() {
        super();
        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktail",
                    info: "We provide one of the best services in hospitality industry"
                },
                {
                    icon: <FaHiking/>,
                    title : "Endless Hiking",
                    info : "We provide one of the best services in hospitality industry"
                },
                {
                    icon : <FaShuttleVan/>,
                    title : "Free Shuttle",
                    info : "We provide one of the best services in hospitality industry"
                },
                {
                    icon : <FaBeer/>,
                    title : "Good Beer",
                    info : "We provide one of the best services in hospitality industry"
                }
            ]
        }
    }
    render(){
        return (
            <div>
                <Title title="Our services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item,i)=>{
                            return (//jsx
                            <article key={i} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>
                                    {item.info}
                                </p>
                            </article>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Services;