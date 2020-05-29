import React from 'react';
import items from "./data";
const RoomContext = React.createContext(null);

class RoomProvider extends React.Component {

    constructor() {
        super();
        this.state = {
            rooms: [],
            sortedRoom: [],
            featuredRooms: [],
            loading: true,
            type : "all",
            capacity : 1,
            price : 0,
            minPrice : 0,
            maxPrice : 0,
            minSize : 0,
            maxSize : 0,
            breakfast : false,
            pets : false
        }
    }

    componentDidMount() {//after load of DOM element
        console.log("The data is ", items)
        let rooms = this.formatData(items);
        if (rooms != undefined) {
            let featuredRooms = rooms.filter((room) => {
                return room.featured == true;
            })
            let maxPrice = Math.max(...rooms.map(item=>{
               return item.price
            }))
            let maxSize = Math.max(...rooms.map(item=>{
                return item.size;
            }))
            this.setState({
                rooms,//rooms : rooms
                sortedRoom: rooms,
                featuredRooms,
                loading: false,
                maxPrice,
                maxSize
            })
        }

    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        //find will return only tyhe first match in the array
        const room = tempRooms.find(room => {
            return room.slug === slug;
        })
        return room;
    }

    formatData = (rawData) => {
        let tmpdata = rawData.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((img) => {//array of string
                return img.fields.file.url;
            })
            let room = { ...item.fields, images, id }
            return room;
        })
        return tmpdata;
    }

    handleChange = event =>{
        const target = event.target;
        const value  = target.type==='checkbox'?
        target.checked:target.value;
        const name = event.target.name;
        this.setState({
            [name] : value,
         
        },this.filterRooms)

    }

    filterRooms = ()=>{
        console.log("This is filter method");
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        let tmpRooms = [...rooms];
        var tempItems = [];
        if(type !=='all'){
           tempItems = tmpRooms.filter(room=>{
                return room.type===type
            })
        }
        else{
            tempItems = rooms;
        }
        this.setState({
            sortedRoom : tempItems
        })


    }

    render() {
        return (

            <RoomContext.Provider value={{ ...this.state,getRoom : this.getRoom,handleChange : this.handleChange }}>
                {/* ...x is spread operator */}
                {this.props.children}

            </RoomContext.Provider>
        )
    }

}

//create a high order component (HOC)
const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {
                value => {
                  return  <Component {...props} context={value} />
                }
            }
        </RoomConsumer>
    }
}


export { RoomContext, RoomProvider, RoomConsumer };