import React, { useState, useEffect } from "react";
import sanityClient from "../utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const useAlbum = () => {
    const [album, setAlbum] = useState({});

    useEffect(() => {
        sanityClient
            .fetch(
                `
            *[_type == "album"] {
                catchPhrase,
                albumName,
                "artwork": albumArtwork.asset._ref, 
                albumLink
            }
        `
            )
            .then(([fetchedAlbum]) => {
                const currentAlbum = {
                    catchPhrase: fetchedAlbum.catchPhrase,
                    albumName: fetchedAlbum.albumName,
                    artwork: builder.image(fetchedAlbum.artwork).height(320),
                    albumLink: fetchedAlbum.albumLink,
                };
                setAlbum(currentAlbum);
            })
            .catch(console.error);
    });

    return [album];
};

export default useAlbum;
