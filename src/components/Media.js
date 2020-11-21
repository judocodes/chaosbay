import React, { useState, useEffect } from "react";
import sanityClient from "../utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { SRLWrapper } from "simple-react-lightbox";
import { FaArrowCircleRight } from "react-icons/fa";

import VideoPlayer from "./VideoPlayer";
import Divider from "./Divider";

const builder = imageUrlBuilder(sanityClient);

function scrollTo(id) {
    document.getElementById(id).scrollIntoView();
}

const Media = ({ headingStyle, linkStyle }) => {
    const [displayedMedia, setDisplayedMedia] = useState("video");
    const [videoLinks, setVideoLinks] = useState([]);
    const [imageLinks, setImageLinks] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type=="media"] {
                images,
                videoLinks
            }
        `
            )
            .then(([data]) => {
                setVideoLinks(data.videoLinks);
                setImageLinks(data.images.map(({ asset: { _ref } }) => _ref));
            })
            .catch(console.error);
    }, []);

    if (!videoLinks || !imageLinks) {
        return null;
    }

    return (
        <>
            <aside className="relative lg:pb-20">
                <h3
                    className={
                        "text-white text-center fixed top-0 left-0 p-4" +
                        " " +
                        linkStyle
                    }
                >
                    <span
                        className={`
                            ${displayedMedia === "video" && "text-primary"}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia("video")}
                    >
                        {"Videos"}
                    </span>
                    <span className="mx-2">|</span>
                    <span
                        className={`
                            ${displayedMedia === "photo" && "text-primary"}
                            cursor-pointer hover:text-primary`}
                        onClick={() => setDisplayedMedia("photo")}
                    >
                        {"Photos"}
                    </span>
                </h3>
                <h3
                    id="heading"
                    className={`font-semibold mb-2 text-xl ${headingStyle}`}
                >
                    Media
                </h3>
                <Divider />
                {displayedMedia === "video" && (
                    <div id="video">
                        {videoLinks.map(link => (
                            <VideoPlayer key={link} url={link} />
                        ))}
                    </div>
                )}
                {displayedMedia === "photo" && (
                    <SRLWrapper
                        options={{
                            buttons: {
                                showDownloadButton: false,
                            },
                        }}
                    >
                        <div id="photo">
                            {imageLinks.map(ref => (
                                <img
                                    className="mb-2 w-full"
                                    key={ref}
                                    alt="chaosbay"
                                    src={builder
                                        .image(ref)
                                        .height(1000)
                                        .fit("crop")}
                                />
                            ))}
                        </div>
                    </SRLWrapper>
                )}
                <h3 className="hidden lg:block text-white text-center absolute bottom-0 left-0 p-4 cursor-pointer hover:text-primary">
                    <FaArrowCircleRight className="inline-block mb-1 mr-2" />
                    <span onClick={() => scrollTo("heading")}>Top</span>
                </h3>
            </aside>
        </>
    );
};

export default Media;
