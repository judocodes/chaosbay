import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
    return (
        <ReactPlayer
            className="mb-4"
            width="100%"
            height={window.innerWidth > 500 ? '600px' : '250px'}
            url={url}
            config={{
                youtube: {
                    playerVars: { modestbranding: 1, controls: true },
                },
            }}
        />
    );
};

export default VideoPlayer;
