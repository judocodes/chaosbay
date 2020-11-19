import React from 'react';

import Divider from './Divider';

const Dates = ({ headingStyle, textColor }) => {
    return (
        <aside className="pb-20">
            <h3 className={`font-semibold text-xl ${headingStyle}`}>
                Tour Dates
            </h3>
            <Divider />
            <script
                defer
                charSet="utf-8"
                src="https://widget.bandsintown.com/main.min.js"
            ></script>
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
