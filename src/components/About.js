import React from 'react';
import { Image, Transformation, Placeholder } from 'cloudinary-react';
import { SRLWrapper } from 'simple-react-lightbox';

import Divider from './Divider';

const About = ({ w, h, textStyle, headingStyle }) => {
    return (
        <SRLWrapper>
            <h3 className={`font-semibold mb-2 text-2xl ${headingStyle}`}>
                About Us
            </h3>
            <Divider />
            <Image
                publicId="1_myh3nm"
                className="my-4 md:my-6 lg:my-12 w-full about-pic"
                alt="Chaosbay Band Photo"
                accessibility="monochrome"
            >
                <Placeholder type="blur" />
                <Transformation width={w} height={h} crop="fit" />
            </Image>
            <Divider />
            <p className={textStyle}>
                Formed in early 2012, CHAOSBAY is digging its way through the
                thickets of the upcoming metal and progressive music scene. Ever
                since then, the group founded by mastermind Jan Listing, has
                always strived to combine complex song structures with heaviness
                and catchy melodies, led by outstanding and wide-ranging lead
                vocals.
                <br />
                <br />
                Meticulously working on their energetic and virtuoso live-shows,
                their songs tend to exceed the limits of conventional lenghts
                and structures, leading to a new architecture of sound, inspired
                by classical music, pop and metal genres.
                <br />
                <br />
                Touring throughout clubs and having hit many stages in their
                home country during the last seven years, CHAOSBAY had the
                opportunity to support the well-known German
                progressive/alternative-acts THE INTERSPHERE, as well as
                instrumental-progrockers FRAMES and US-stoner-legends CLUTCH. In
                2015 they opened for the german Math-Rockers THE HIRSCH EFFEKT
                on their Agonsie-Tour and had the chance to play the world-known
                progressive festival EUROBLAST in Cologne alongside with
                TESSERACT, ANIMALS AS LEADERS, MONUMENTS and many more.
                <br />
                <br />
                The band released their fully self-made and eponymous EP in late
                2012, a second EP "Tragedy No.1" in 2015 and their first
                full-length- and concept-album "Vasilisa" in December 2015.
                After a one-year-break, they returned with a new EP "Of Cutting
                Cords" in April 2017, celebrated their live comeback with a
                headliner tour throughout Germany in early 2019 and a new
                full-lengh album in 2020 called "Asylum".
            </p>
            <br />
            <br />
            <p className={textStyle + ' border-l-2 border-white pl-4 lg:mb-20'}>
                "Blitzsauberes Handwerk, vertrackte Songstrukturen und
                erstaunlich melodiöse und einprägsame Gesangslinien serviert uns
                der dynamische Vierer auf seiner ersten EP. Wenn die Jungs in
                diesem Sinne weitermachen, wird das Debüt-Album zweifellos für
                Furore sorgen." <br /> - HardHarderHeavy.de
            </p>
        </SRLWrapper>
    );
};

export default About;
