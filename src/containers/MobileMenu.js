import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { VscClose } from 'react-icons/vsc';
import SocialIcons from '../components/SocialIcons';

import MobileShell from './MobileShell';
import Loading from '../components/Loading';
import About from '../components/About';
import Contact from '../components/Contact';

const Media = lazy(() => import('../components/Media'));
const Dates = lazy(() => import('../components/Dates'));

const MobileMenu = ({ toggle }) => {
    const wrapperEl = useRef(null);
    const [active, setActive] = useState('');

    useEffect(() => {
        const wrapper = wrapperEl.current;

        const tl = gsap.timeline();

        tl.to(wrapper, {
            y: 0,
            duration: 0.5,
            ease: 'power1',
        });
    }, []);

    const openMenuItem = e => {
        if (e.target.id === active) {
            setActive('');
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
            className="absolute top-0 left-0 z-20 w-full min-h-full transform translate-y-full py-16 px-8 bg-gray-200 border-t-4 border-color-primary"
        >
            {/* Close Icon */}
            <VscClose
                onClick={toggle}
                className="w-12 h-12 absolute top-0 left-0 pl-4 pt-4 cursor-pointer text-gray-600"
            />
            <SocialIcons />
            <ul className="uppercase tracking-wider text-gray-800 text-xl font-medium">
                <a
                    className="group"
                    href="https://timezonerecords.lnk.to/asylum"
                >
                    <li className="my-10 text-center rounded pb-4 pt-5 bg-black border-4 border-color-primary hover:text-black shadow-lg">
                        <span className="font-semibold text-primary tracking-widest">
                            The New Album:
                        </span>{' '}
                        <br />
                        <span className="text-white group-hover:text-black text-2xl font-semibold leading-none">
                            Asylum
                        </span>
                    </li>
                </a>
                <li
                    id="about"
                    onClick={openMenuItem}
                    className="text-center border-l-4 rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-300 py-3  my-4"
                >
                    About
                </li>
                {active === 'about' && (
                    <li>
                        <MobileShell>
                            <About
                                w={500}
                                h={500}
                                headingStyle={'text-center'}
                            />
                        </MobileShell>
                    </li>
                )}
                <li
                    id="dates"
                    onClick={openMenuItem}
                    className="text-center border-l-4 rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-300 py-3  my-4"
                >
                    Dates
                </li>
                {active === 'dates' && (
                    <li>
                        <Suspense fallback={<Loading />}>
                            <MobileShell>
                                <Dates
                                    headingStyle={'text-center'}
                                    textColor={'#1A202C'}
                                />
                            </MobileShell>
                        </Suspense>
                    </li>
                )}
                <li
                    id="media"
                    onClick={openMenuItem}
                    className="text-center border-l-4 rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-300 py-3  my-4"
                >
                    Media
                </li>
                {active === 'media' && (
                    <li>
                        <Suspense fallback={<Loading />}>
                            <MobileShell>
                                <Media headingStyle={'text-center'} />
                            </MobileShell>
                        </Suspense>
                    </li>
                )}
                <li
                    id="contact"
                    onClick={openMenuItem}
                    className="text-center border-l-4 rounded border-color-primary shadow-inner text-gray-900 tracking-wide bg-gray-300 py-3  my-4"
                >
                    Contact
                </li>
                {active === 'contact' && (
                    <li>
                        <MobileShell>
                            <Contact />
                        </MobileShell>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default MobileMenu;
