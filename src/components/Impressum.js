import React, { useEffect, useState } from "react";
import sanityClient from "../utils/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import Loading from "../components/Loading";

const Impressum = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type=="impressum"] {
                text
            }
        `
            )
            .then(([impressumData]) => {
                setText(impressumData.text);
            });
    }, []);

    return (
        <div className="w-full h-full p-4">
            {!text ? <Loading /> : <BlockContent blocks={text} />}
        </div>
    );
};

export default Impressum;
