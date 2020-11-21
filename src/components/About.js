import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import sanityClient from "../utils/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import Divider from "./Divider";

const builder = imageUrlBuilder(sanityClient);

const About = ({ h, textStyle, headingStyle }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "about"] {
                heading,
                "image": mainImage.asset._ref,
                text,
                quote
            }
        `
            )
            .then(([postData]) => {
                setData(postData);
                console.log(postData);
            })
            .catch(console.error);
    }, []);

    if (!data) {
        return null;
    }

    return (
        <SRLWrapper>
            <h3 className={`font-semibold mb-2 text-2xl ${headingStyle}`}>
                {data.heading}
            </h3>
            <Divider />
            <img
                className="my-4 md:my-6 lg:my-12 about-pic w-full"
                src={builder
                    .image(data.image)
                    .height(h)
                    .fit("crop")
                    .saturation(-100)}
                alt="Chaosbay"
            />
            <Divider />
            <div className={textStyle}>
                <BlockContent blocks={data.text} />
            </div>
            <br />
            <br />
            <div
                className={textStyle + " border-l-2 border-white pl-4 lg:mb-20"}
            >
                <BlockContent blocks={data.quote} />
            </div>
        </SRLWrapper>
    );
};

export default About;
