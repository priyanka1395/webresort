import React from "react";
import { RoomContext } from "../Context";
import { Link } from 'react-router-dom';
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import StyledComponent from "../components/StyledHero";
class SingleRoom extends React.Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: "defaultBcg"
        }
    }

    render() {
        //now i can use this.context
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log('Single room is ', room);
        if (!room) {
            return (
                <div className="error">
                    <h3>No such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to Rooms
</Link>
                </div>
            )
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [mainImg, ...defaultImg] = images;//destructuring + spread operator
        return (
            <>
                <StyledComponent img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
</Link>
                    </Banner>
                </StyledComponent>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((item, index) => {
                                return <img key={index} src={item} alt={name} />
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>
                                {description}
                            </p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>
                                max capacity : {""}
                                {
                                    capacity >1 ?`${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>
                                {pets ? "pets allowed" : "no pets allowed"}
                            </h6>
                            <h6>
                                {breakfast ? "free breakfast" : "paid breakfast"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
<h6>extras</h6>
<ul className="extras">
    {
        extras.map((item,index)=>{
        return <li key={index}>- {item}</li>
        })
    }
</ul>
                </section>
            </>
        )
    }
}

export default SingleRoom;