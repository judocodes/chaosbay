import React from 'react';
import Logo from './Logo';

const Loading = () => {
    return (
        <div className="w-full h-40 flex justify-center items-center">
            <Logo className="w-32 h-32 animate-spin text-gray-500" />
        </div>
    );
};

export default Loading;
