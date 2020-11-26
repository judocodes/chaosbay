import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { VscClose } from "react-icons/vsc";
import SocialIcons from "../components/SocialIcons";

import MobileAlbumButton from "../components/MobileAlbumButton";
import MobileShell from "./MobileShell";
import Loading from "../components/Loading";
import About from "../components/About";
import Contact from "../components/Contact";

const Media = lazy(() => import("../components/Media"));
const Dates = lazy(() => import("../components/Dates"));

const MobileMenu = ({ toggle }) => {
    const wrapperEl = useRef(null);
    const [active, setActive] = useState("");

    useEffect(() => {
        const wrapper = wrapperEl.current;

        const tl = gsap.timeline();

        tl.to(wrapper, {
            y: 0,
            duration: 0.5,
            ease: "power1",
        });
    }, []);

    const openMenuItem = e => {
        if (e.target.id === active) {
            setActive("");
            return;
        }

        setActive(e.target.id);
        setTimeout(() => {
            document.getElementById(e.target.id).scrollIntoView();
        }, 10);
    };

    return (
        <section
            ref={wrapperEl}
            className="lg:hidden absolute top-0 left-0 z-20 w-full min-h-full transform translate-y-full py-16 px-8 bg-black bg-opacity-50 border-t-4 border-color-primary"
        >
            {/* Close Icon */}
            <VscClose
                onClick={toggle}
                className="w-12 h-12 absolute top-0 left-0 pl-4 pt-4 cursor-pointer text-white"
            />
            <SocialIcons textColor={"text-white"} />
            <ul className="uppercase tracking-wider text-gray-800 text-xl font-medium">
                <MobileAlbumButton />
                <li
                    id="about"
                    onClick={openMenuItem}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    About
                </li>
                {active === "about" && (
                    <li>
                        <MobileShell>
                            <About
                                w={500}
                                h={500}
                                headingStyle={"text-center"}
                                textStyle={"about-text"}
                            />
                        </MobileShell>
                    </li>
                )}
                <li
                    id="dates"
                    onClick={openMenuItem}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    Dates
                </li>
                {active === "dates" && (
                    <li>
                        <Suspense fallback={<Loading />}>
                            <MobileShell>
                                <Dates
                                    headingStyle={"invisible mb-0"}
                                    linkStyle={
                                        "text-gray-900 w-full text-center mt-2"
                                    }
                                />
                            </MobileShell>
                        </Suspense>
                    </li>
                )}
                <li
                    id="media"
                    onClick={openMenuItem}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    Media
                </li>
                {active === "media" && (
                    <li>
                        <Suspense fallback={<Loading />}>
                            <MobileShell>
                                <Media
                                    headingStyle={"invisible mb-0"}
                                    linkStyle={
                                        "text-gray-900 w-full text-center mt-2"
                                    }
                                />
                            </MobileShell>
                        </Suspense>
                    </li>
                )}
                <li
                    id="contact"
                    onClick={openMenuItem}
                    className="text-center rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-100 py-3  my-4"
                >
                    Contact
                </li>
                {active === "contact" && (
                    <li>
                        <MobileShell>
                            <Contact />
                        </MobileShell>
                    </li>
                )}
            </ul>
            <a
                href="/impressum"
                target="_blank"
                className="bottom-0 right-0 p-4 text-xs text-white uppercase tracking-wider "
            >
                Impressum
            </a>
        </section>
    );
};

export default MobileMenu;
