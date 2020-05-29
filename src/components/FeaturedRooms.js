import React from 'react';
import {RoomContext} from "../Context";
import Room from "../components/Room";
import Title from "./Title";
import Loading from './Loading';
class FeaturedRooms extends React.Component {
    static contextType = RoomContext;//context will became the data member of the class
    render() {
        const { loading, featuredRooms, rooms } = this.context;
        let roomList = featuredRooms.map((room, i) => {//roomList is array of components
            return <Room  room={room} />
            //roomList is array of components
        })

        console.log("Featured list is ",roomList)
        let content = null;
        if(roomList.length>0){
            content = (roomList)
        }
        return (

            <section className="featured-rooms">
                <Title title="Our featured rooms" />
                <div className="featured-rooms-center">
                    {
content
                    }
                </div>
            </section>
          
        )
    }


}

export default FeaturedRooms;