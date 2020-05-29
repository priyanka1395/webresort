import React from 'react';
import {Link} from "react-router-dom";
const Room = ({ room }) => {
    console.log('Room info is ', room);
    const { name, slug, images, price } = room;// destructuring in ES6

    return (
        <article className="room">
            <Link to={`/rooms/${slug}`}>
            <div className="img-container">
                <img src={images[0]} />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
            </div>
            </Link>
    <p className="room-info">{name}</p>
        </article>
    )

}

export default Room;