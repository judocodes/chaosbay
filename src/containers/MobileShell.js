import React from 'react';

const MobileShell = ({ children }) => {
    return (
        <article className="bg-gray-300 rounded text-gray-900 normal-case px-6 py-8 font-light tracking-tight leading-tight">
            {children}
        </article>
    );
};

export default MobileShell;
