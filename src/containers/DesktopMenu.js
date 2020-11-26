import React, { forwardRef, useState, Suspense, useEffect } from "react";
import Shell from "./Shell";

import useAlbum from "../hooks/useAlbum";

import Loading from "../components/Loading";
import About from "../components/About";
import Dates from "../components/Dates";
import Media from "../components/Media";
import Contact from "../components/Contact";

const components = {
    about: (
        <About
            w={2000}
            h={2000}
            textStyle={
                "text-white text-md font-light font-raleway tracking-wide text-justify"
            }
            headingStyle={
                "text-white text-2xl text-center uppercase tracking-wider"
            }
        />
    ),
    dates: (
        <Dates
            headingStyle={
                "text-white text-2xl text-center uppercase tracking-wider"
            }
            textColor={"#fff"}
        />
    ),
    media: (
        <Media
            headingStyle={
                "text-white text-2xl text-center uppercase tracking-wider"
            }
        />
    ),
    contact: (
        <Contact
            headingStyle={"text-white text-2xl uppercase tracking-tight"}
        />
    ),
};

const DesktopMenu = forwardRef(({ moveMenuToTop, moveMenuToBottom }, ref) => {
    const [active, setActive] = useState("");
    const [album] = useAlbum();

    useEffect(() => {});

    const setActiveMenu = e => {
        if (active === e.target.id) {
            setActive("");
            moveMenuToBottom();
            return;
        }

        setActive(e.target.id);
        moveMenuToTop();
    };

    return (
        <>
            <nav
                ref={ref}
                className="w-full mx-auto py-4 px-20 bg-black bg-opacity-75 rounded border-t-4 border-color-primary shadow-lg"
            >
                <ul className="uppercase flex items-center justify-around text-white font-medium w-auto">
                    <li
                        onClick={setActiveMenu}
                        id="about"
                        className={`${
                            active === "about"
                                ? "border-color-primary"
                                : "hover:border-color-primary"
                        } transition duration-300 cursor-pointer border-b-4 border-transparent  mx-10 font-light tracking-wider`}
                    >
                        About
                    </li>
                    <li
                        onClick={setActiveMenu}
                        id="dates"
                        className={`${
                            active === "dates"
                                ? "border-color-primary"
                                : "hover:border-color-primary"
                        } transition duration-300 cursor-pointer border-b-4 border-transparent  mx-10 font-light tracking-wider`}
                    >
                        Dates
                    </li>
                    <a href={album.albumLink} target="_blank">
                        <li
                            className={`transition duration-300 cursor-pointer border-b-4 border-transparent hover:border-color-primary mx-10 flex flex-col text-center animate-pulse`}
                        >
                            <span className="font-medium">
                                {album.catchPhrase}
                            </span>
                            <span className="font-medium text-2xl text-primary leading-none pb-2">
                                {album.albumName}
                            </span>
                        </li>
                    </a>
                    <li
                        onClick={setActiveMenu}
                        id="media"
                        className={`${
                            active === "media"
                                ? "border-color-primary"
                                : "hover:border-color-primary"
                        } transition duration-300 cursor-pointer border-b-4 border-transparent mx-10 font-light tracking-wider`}
                    >
                        Media
                    </li>
                    <li
                        id="contact"
                        onClick={setActiveMenu}
                        className={`${
                            active === "contact"
                                ? "border-color-primary"
                                : "hover:border-color-primary"
                        } transition duration-300 cursor-pointer border-b-4 border-transparent mx-10 font-light tracking-wider`}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
            {active && (
                <Suspense fallback={<Loading />}>
                    <Shell>{components[active]}</Shell>
                </Suspense>
            )}
        </>
    );
});

export default DesktopMenu;
