import React, { forwardRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { SiInstagram } from 'react-icons/si';

const SocialIcons = forwardRef(({ hide }, ref) => (
    <div
        ref={ref}
        className={`absolute top-0 right-0 py-4 pr-4 z-10 flex justify-between items-center text-3xl text-gray-500 ${
            hide && 'opacity-0'
        }`}
    >
        <a className="mx-3 hover:text-primary" href="">
            <FaFacebook />
        </a>
        <a className="mx-3 hover:text-primary" href="">
            <GrYoutube />
        </a>
        <a className="mx-3 hover:text-primary" href="">
            <SiInstagram />
        </a>
    </div>
));

export default SocialIcons;
