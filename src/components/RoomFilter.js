import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../Context";
import Title from "../components/Title";
const getUnique = (items,value)=>{
    return [...new Set(items.map(item=>{
        return item[value]
    }))]
}
const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets

    } = context;
    //get unique types
    let types = getUnique(rooms,'type')
     types = ['all',...types];
     types = types.map((item,index)=>{
         return <option value={item} key={index}>{item}</option>
     })


    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div classname="form-group">
                    <label>room type</label>
                    <select name="type" value={type} id="type" className="form-control" onChange={handleChange}>
{types}
                    </select>
                </div>
                
                {/* end select type  */}
            </form>
    </section>
    )
}

export default RoomFilter;