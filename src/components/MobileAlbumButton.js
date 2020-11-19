import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const MobileAlbumButton = () => {
    const [albumOpen, setAlbumOpen] = useState(false);
    const albumPicEl = useRef(null);

    useEffect(() => {
        const albumPic = albumPicEl.current;
        if (albumOpen && albumPicEl) {
            gsap.to(albumPic, {
                scaleY: 1,
                duration: 0.1,
            });
        }
    }, [albumPicEl, albumOpen]);

    return (
        <>
            <li
                onClick={() => setAlbumOpen(!albumOpen)}
                className={`${
                    albumOpen ? 'mt-10 mb-4' : 'my-10'
                } text-center rounded pb-4 pt-5 bg-black border-4 border-color-primary hover:text-black shadow-lg`}
            >
                <span
                    className={`${
                        !albumOpen && 'animate-pulse'
                    } text-white group-hover:text-black text-2xl font-semibold leading-none`}
                >
                    Asylum
                </span>
            </li>
            {albumOpen && (
                <li className="transform origin-top scale-y-0" ref={albumPicEl}>
                    <a href="https://timezonerecords.lnk.to/asylum">
                        <div className="album-artwork relative"></div>
                        <div className="bg-black bg-opacity-50 h-full w-full text-center">
                            <p className="pt-3 animate-pulse">
                                <span className="font-light text-white">
                                    New Album:{' '}
                                </span>
                                <span className="font-semibold text-primary">
                                    Asylum
                                </span>
                                <h3 className="mt-0 leading-none text-white text-center w-full pb-5">
                                    Buy Now
                                </h3>
                            </p>
                        </div>
                    </a>
                </li>
            )}
        </>
    );
};

export default MobileAlbumButton;
