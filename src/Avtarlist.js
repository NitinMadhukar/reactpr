import React from 'react';

const Avtarlist = (props) =>{
    return(
        <div className="avatarstyle  ma4 bg-light-purple dib pa4 tc grow shadow-4">
                <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avtar"/>
                <h1 className="">{props.name}</h1>
                <p>{props.work}</p>
        </div>
    )
}
export default Avtarlist;