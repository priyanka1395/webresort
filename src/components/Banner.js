import React from 'react';

const Banner = ({children,title,subtitle})=>{
    return (
        <div className="banner">
            <h1>{title}</h1>
    <div></div>
            <p>
                {children}
            </p>
        </div>
    )

}
export default Banner;
