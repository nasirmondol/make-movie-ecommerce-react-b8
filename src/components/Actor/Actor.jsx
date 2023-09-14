import React from 'react';

const Actor = ({ actor, handleNameCart }) => {
    const { name, role, salary, image } = actor;
    return (
        <div className='border h-auto p-4 drop-shadow-2xl py-3'>
            <img className='w-full' src={image} alt="" />
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='text-xl font-bold'>Role: {role}</p>
            <p className='text-xl font-bold'>Salary: ${salary}</p>
            <button
                onClick={() => handleNameCart(actor)}
                className='mt-3 text-white px-4 rounded-md py-1 bg-red-400 '>
                Details
            </button>
        </div>
    );
};

export default Actor;