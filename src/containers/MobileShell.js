import React from 'react';

const MobileShell = ({ children }) => {
    return (
        <article className="bg-gray-200 rounded text-gray-900 normal-case px-6 py-8 font-light tracking-tight leading-tight transform">
            {children}
        </article>
    );
};

export default MobileShell;
