import React from 'react';
const Tag = ({text}) => {
    return (
        <div className="bg-gray-500 text-white font-light rounded-full py-1 px-3 mx-1 cursor-pointer">
            <h3 className="w-max" id={text}>{text}</h3>
        </div>
    );
}

export default Tag;