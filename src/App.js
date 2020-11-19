import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import './tailwind.css';
import './custom.css';

import { CloudinaryContext } from 'cloudinary-react';
import SimpleReactLightbox from 'simple-react-lightbox';

import Logo from './components/Logo';
import Heading from './components/Heading';
import MobileMenu from './containers/MobileMenu';
import SocialIcons from './components/SocialIcons';
import DesktopMenu from './containers/DesktopMenu';

function App() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const headingEl = useRef(null);
    const overlayEl = useRef(null);
    const logoEl = useRef(null);
    const menuEl = useRef(null);
    const divEl = useRef(null);
    const buttonEl = useRef(null);
    const socialEl = useRef(null);
    const goldenLineEl = useRef(null);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);

        function setViewportHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        window.addEventListener('resize', setViewportHeight);

        return () => {
            window.removeEventListener('resize', setViewportHeight);
        };
    }, []);

    useEffect(() => {
        const heading = headingEl.current;
        const overlay = overlayEl.current;
        const logo = logoEl.current;
        const menu = menuEl.current;
        const div = divEl.current;
        const button = buttonEl.current;
        const social = socialEl.current;
        const line = goldenLineEl.current;

        const tl = gsap.timeline();

        // Setting standards
        tl.set(heading, {
            opacity: 0,
        });

        tl.set(overlay, {
            opacity: 0,
        });

        tl.set(logo, {
            rotation: -50,
            scale: 0.8,
            opacity: 0.1,
        });

        tl.set(menu, {
            x: '105%',
        });

        tl.set(div, {
            x: '-105%',
            top: '90%',
        });

        tl.set(button, {
            y: 100,
        });

        // Actual Animation
        tl.addLabel('logo-onscreen');
        tl.to(
            logo,
            {
                rotation: 20,
                scale: 1.2,
                duration: 3,
                opacity: 1,
                ease: 'power1',
            },
            'logo-onscreen+=0'
        )
            .addLabel('logo-appeared')
            .to(
                logo,
                {
                    rotation: 0,
                    scale: 1,
                    opacity: 0.75,
                    duration: 2,
                    ease: 'power1',
                },
                'logo-appeared+=0'
            )
            .to(
                overlay,
                {
                    opacity: 1,
                    duration: 1.5,
                },
                'logo-appeared+=0'
            )
            .to(
                heading,
                {
                    opacity: 1,
                    duration: 4,
                },
                'logo-appeared+=0.8'
            )
            .to(
                menu,
                {
                    x: '0%',
                    duration: 3,
                    ease: 'power1',
                },
                'logo-appeared+=1'
            )
            .to(
                div,
                {
                    x: '0%',
                    duration: 3,
                    ease: 'power1',
                },
                'logo-appeared+=1'
            )
            .to(
                button,
                {
                    y: 0,
                    duration: 2.5,
                    ease: 'power2',
                },
                'logo-appeared'
            )
            .to(
                social,
                {
                    y: 0,
                    opacity: 0.8,
                    duration: 2,
                },
                'logo-appeared'
            )
            .to(
                line,
                {
                    x: 0,
                    duration: 1,
                    ease: 'power2',
                },
                'logo-appeared+=1.3'
            )
            .addLabel('intro-finished')
            .to(logo, {
                rotation: 180,
                duration: 60,
                repeat: -1,
                yoyo: true,
            })
            .to(
                heading,
                {
                    scale: 0.95,
                    duration: 8,
                    repeat: -1,
                    yoyo: true,
                },
                'intro-finished+=0'
            );
    }, []);

    function moveMenuToTop() {
        const div = divEl.current;

        gsap.to(div, {
            top: '20%',
            duration: 0.5,
        });
    }

    function moveMenuToBottom() {
        const div = divEl.current;

        gsap.to(div, {
            top: '90%',
            duration: 0.5,
        });
    }

    return (
        <CloudinaryContext
            cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
            apiKey={process.env.REACT_APP_CLOUDINARY_API_KEY}
            apiSecret={process.env.REACT_APP_CLOUDINARY_API_SECRET}
        >
            <SimpleReactLightbox>
                <main className="relative flex items-center justify-center px-6 w-screen main-wrapper font-rubik p-8">
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden px-6">
                        <SocialIcons
                            ref={socialEl}
                            hide={true}
                            className="z-30"
                        />

                        <Heading
                            ref={headingEl}
                            className="z-10 w-full opacity-0 main-heading"
                        />
                        <div
                            ref={overlayEl}
                            className="absolute w-full h-full top-0 left-0 bg-white opacity-0"
                        ></div>
                        <Logo
                            ref={logoEl}
                            className="absolute text-gray-500 main-logo opacity-0"
                        />
                    </div>
                    {/* Desktop Menu */}
                    <div
                        ref={divEl}
                        className="hidden lg:flex absolute mx-auto overflow-x-hidden mb-12 p-4 z-20 transform -translate-y-32 w-4/5 content-wrapper flex-col rounded"
                    >
                        <DesktopMenu
                            ref={menuEl}
                            moveMenuToTop={moveMenuToTop}
                            moveMenuToBottom={moveMenuToBottom}
                        />
                    </div>
                    {/* Mobile Button */}
                    <button
                        onClick={() => setMobileMenu(true)}
                        ref={buttonEl}
                        className="lg:hidden inline-block text-center absolute bottom-0 w-full pb-4 text-gray-700 text-lg uppercase tracking-widest font-semibold focus:bg-primary focus:text-black transition duration-100"
                    >
                        <div
                            ref={goldenLineEl}
                            className="h-1 bg-primary w-full mb-4 transform -translate-x-full"
                        ></div>
                        Learn more
                    </button>
                    {mobileMenu && (
                        <MobileMenu toggle={() => setMobileMenu(false)} />
                    )}
                </main>
            </SimpleReactLightbox>
        </CloudinaryContext>
    );
}

export default App;
