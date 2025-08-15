import React from 'react';
import myCard from "../../assets/imgs/image.png"
const Card = () => {
    return (
        <div className='pl-3  md:pt-10 overflow-y-auto '>
            <img className='w-100 ' src={myCard} alt="" />
        </div>
    );
};

export default Card;