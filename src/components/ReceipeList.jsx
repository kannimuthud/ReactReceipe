import React from 'react';
const ReceipeList =({title,calories,image})=>{
    return(
        <div>
            <h1>{title}</h1>
        <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}
export default ReceipeList;