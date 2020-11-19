import React from 'react';
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

const Media = ({ headingStyle }) => {
    function scrollTo(id) {
        document.getElementById(id).scrollIntoView();
    }

    return (
        <>
            <aside className="relative lg:pb-20">
                <h3 className="hidden lg:block text-white text-center absolute top-0 left-0 p-4 cursor-pointer hover:text-primary">
                    <FaArrowCircleRight className="inline-block mb-1 mr-2" />
                    <span onClick={() => scrollTo('video')}>Video</span>
                </h3>
                <h3
                    id="photo"
                    className={`font-semibold mb-2 text-2xl ${headingStyle}`}
                >
                    Media
                </h3>
                <Divider />
                <SRLWrapper
                    options={{
                        buttons: {
                            showDownloadButton: false,
                        },
                    }}
                >
                    <div>
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
                <Divider />
                <div id="video">
                    {videoLinks.map((link, idx) => (
                        <VideoPlayer key={link} url={link} />
                    ))}
                </div>
                <h3 className="hidden lg:block text-white text-center absolute bottom-0 left-0 p-4 cursor-pointer hover:text-primary">
                    <FaArrowCircleRight className="inline-block mb-1 mr-2" />
                    <span onClick={() => scrollTo('photo')}>Top</span>
                </h3>
            </aside>
        </>
    );
};

export default Media;
