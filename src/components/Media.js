import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { Image, Transformation } from 'cloudinary-react';
import { SRLWrapper } from 'simple-react-lightbox';
import { FaArrowCircleRight } from 'react-icons/fa';

import Divider from './Divider';

const videoLinks = [
    'https://www.youtube.com/watch?v=CPXi9PTkbig',
    'https://www.youtube.com/watch?v=zykhJyzW8OI',
    'https://www.youtube.com/watch?v=BdlcSsKpcAE',
    'https://www.youtube.com/watch?v=NXnCSbCKsTM',
    'https://www.youtube.com/watch?v=ykytNQ1M6fU',
];

const imageIds = [
    { id: '9_ccps3b', alt: '' },
    { id: '7_pbx9oy', alt: '' },
    { id: '6_l17o95', alt: '' },
    { id: '2_o3k8zh', alt: '' },
    { id: '5_fudygq', alt: '' },
    { id: '3_wwbqcf', alt: '' },
    { id: '8_vurzcc', alt: '' },
    { id: '4_rdkahq', alt: '' },
];

const Media = ({ headingStyle, linkStyle }) => {
    const [displayedMedia, setDisplayedMedia] = useState('video');

    function scrollTo(id) {
        document.getElementById(id).scrollIntoView();
    }

    return (
        <>
            <aside className="relative lg:pb-20">
                <h3
                    className={
                        'text-white text-center fixed top-0 left-0 p-4' +
                        ' ' +
                        linkStyle
                    }
                >
                    <span
                        className={`
                            ${displayedMedia === 'video' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia('video')}
                    >
                        {'Videos'}
                    </span>
                    <span className="mx-2">|</span>
                    <span
                        className={`
                            ${displayedMedia === 'photo' && 'text-primary'}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia('photo')}
                    >
                        {'Photos'}
                    </span>
                </h3>
                <h3
                    id="heading"
                    className={`font-semibold mb-2 text-xl ${headingStyle}`}
                >
                    Media
                </h3>
                <Divider />
                {displayedMedia === 'video' && (
                    <div id="video">
                        {videoLinks.map((link, idx) => (
                            <VideoPlayer key={link} url={link} />
                        ))}
                    </div>
                )}
                {displayedMedia === 'photo' && (
                    <SRLWrapper
                        options={{
                            buttons: {
                                showDownloadButton: false,
                            },
                        }}
                    >
                        <div id="photo">
                            {imageIds.map(({ id, alt }) => (
                                <Image
                                    publicId={id}
                                    key={id}
                                    className="mb-2 w-full"
                                    alt={alt}
                                >
                                    <Transformation
                                        width="1000"
                                        height="1000"
                                        crop="fit"
                                    />
                                </Image>
                            ))}
                        </div>
                    </SRLWrapper>
                )}
                <h3 className="hidden lg:block text-white text-center absolute bottom-0 left-0 p-4 cursor-pointer hover:text-primary">
                    <FaArrowCircleRight className="inline-block mb-1 mr-2" />
                    <span onClick={() => scrollTo('heading')}>Top</span>
                </h3>
            </aside>
        </>
    );
};

export default Media;
