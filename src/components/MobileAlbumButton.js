import React, { useState } from 'react';

const MobileAlbumButton = () => {
    const [albumOpen, setAlbumOpen] = useState(false);

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
                <li>
                    <a href="https://timezonerecords.lnk.to/asylum">
                        <div className="album-artwork relative mb-2">
                            <div className="absolute top-0 left-0 bg-black bg-opacity-25 h-full w-full flex items-center justify-center">
                                <p>
                                    <span className="font-light text-white">
                                        New Album:{' '}
                                    </span>
                                    <span className="font-semibold text-primary">
                                        Asylum
                                    </span>
                                </p>
                                <h3 className="animate-pulse text-white absolute bottom-0 text-center w-full pb-4">
                                    Buy Now
                                </h3>
                            </div>
                        </div>
                    </a>
                </li>
            )}
        </>
    );
};

export default MobileAlbumButton;
