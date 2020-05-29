import React from 'react';
import RoomFilter from "../components/RoomFilter";
import RoomList from "../components/RoomList";
import { RoomConsumer } from "../Context";
import { withRoomConsumer } from "../Context";
import Loading from './Loading';
const RoomsContainer = (props) => {
    let {loading,sortedRoom,rooms} = props.context;
    console.log("The rooms is ",rooms);
    return (

        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRoom} />
        </div>


    )
}

export default withRoomConsumer(RoomsContainer);