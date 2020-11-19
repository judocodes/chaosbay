import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
    const videoEl = useRef(null);

    useEffect(() => {
        const div = videoEl.current;
        const height = (9 * div.offsetWidth) / 16;
        div.style.height = height + 'px';
    }, []);

    return (
        <div className="w-full mb-4" ref={videoEl}>
            <ReactPlayer
                width="100%"
                height="100%"
                url={url}
                config={{
                    youtube: {
                        playerVars: { modestbranding: 1, controls: true },
                    },
                }}
            />
        </div>
    );
};

export default VideoPlayer;
