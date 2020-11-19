import React, { useEffect } from 'react';
// import bandsintown from '../utils/bandsintown';

import Divider from './Divider';

const Dates = ({ headingStyle, textColor }) => {
    useEffect(() => {
        // bandsintown();
    }, []);

    return (
        <aside className="pb-20">
            <h3 className={`font-semibold mb-2 text-2xl ${headingStyle}`}>
                Tour Dates
            </h3>
            <Divider />
            <a
                className="bit-widget-initializer"
                data-artist-name="Chaosbay"
                data-display-local-dates="false"
                data-display-past-dates="false"
                data-auto-style="false"
                data-text-color={textColor}
                data-link-color="#C9A222"
                data-background-color="rgba(0,0,0,0)"
                data-display-limit="15"
                data-display-start-time="false"
                data-link-text-color="#FFFFFF"
                data-display-lineup="false"
                data-display-play-my-city="true"
                data-separator-color="rgba(124,124,124,0.25)"
            >
                {' '}
            </a>
        </aside>
    );
};

export default Dates;
