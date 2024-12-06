/* eslint-disable prettier/prettier */
"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.jsx";
import ProductPage from "./Product/page.jsx";
import {
    SIERRA_SPEAKS_HEADING,
    SIERRA_SPEAKS_DESCRIPTION,
    SIERRA_SPEAKS_VIDEO,
    ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_HEADING,
    ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_DESCRIPTION,
    CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_HEADING,
    CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_DESCRIPTION,
    SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_HEADING,
    SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_DESCRIPTION,
    SAFE_AND_SECURE_HEADING,
    AUDITING_HEADING,
    DATA_GOVERNANCE_HEADING,
    PRIVACY_HEADING,
    SAFE_AND_SECURE_DESCRIPTION,
    SUPERVISION_HEADING,
    SUPERVISION_DESCRIPTION,
    SECURE_INTEGRATION,
    SECURE_INTEGRATION_DESCRIPTION,
    AUDITING_DESCRIPTION,
    DATA_GOVERNANCE_DESCRIPTION,
    PRIVACY_DESCRIPTION,
} from "./utils/Constant";
import {
    SierraSpeakPhoneCallSVG,
    SierraSpeakWorldSVG,
    SierraSpeakAudioSVG,
} from "./utils/Icons/Icons";
// Dynamically import components that need window
const Landing = dynamic(() => import("./Components/Landing/Landing"), {
    ssr: false,
});
const SierraSpeak = dynamic(
    () => import("./Components/SierraSpeaks/SierraSpeak"),
    { ssr: false },
);
const MakeAIYourOwn = dynamic(
    () => import("./Components/MakeAIYourOwn/MakeAIYourOwn"),
    { ssr: false },
);
const ResultSpeak = dynamic(
    () => import("./Components/ResultSpeak/ResultSpeak"),
    { ssr: false },
);
const SafeAndSecure = dynamic(
    () => import("./Components/SafeAndSecure/SafeAndSecure"),
    { ssr: false },
);

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or return a loading spinner
    }

    return (
        <div>
            <a
                className="body-s pointer-events-none absolute -top-8 left-[50%] z-30 -translate-x-[50%] rounded-full border-2 border-yellow bg-white px-12 py-3 text-yellow opacity-0 outline-none transition-[top] duration-200 focus:pointer-events-auto focus-visible:top-3 focus-visible:opacity-100 theme-tech:bg-black theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-2 lg:focus-visible:top-6"
                href="#main"
            >
                Skip to main content
            </a>
            <Navbar color="white" />
            <main className="flex-grow outline-yellow" id="main">
                <Landing />
                <SierraSpeak
                    heading={SIERRA_SPEAKS_HEADING}
                    subHeading={SIERRA_SPEAKS_DESCRIPTION}
                    video={`/assets/video/Speaks.mp4`}
                    innerHeading1={
                        ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_HEADING
                    }
                    innerHeading1SVG={SierraSpeakPhoneCallSVG}
                    innerDescription1={
                        ENGAGE_WITH_FASTER_BETTER_PHONE_CALLS_DESCRIPTION
                    }
                    innerHeading2={
                        CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_HEADING
                    }
                    innerHeading2SVG={SierraSpeakWorldSVG}
                    innerDescription2={
                        CONNECT_TO_YOUR_CALL_CENTER_ECOSYSTEM_DESCRIPTION
                    }
                    innerHeading3={
                        SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_HEADING
                    }
                    innerHeading3SVG={SierraSpeakAudioSVG}
                    innerDescription3={
                        SCALE_CONSISTENT_EXPERIENCES_ON_EVERY_CHANNEL_DESCRIPTION
                    }
                />
                <MakeAIYourOwn />
                <SafeAndSecure
                    heading={SAFE_AND_SECURE_HEADING}
                    description={SAFE_AND_SECURE_DESCRIPTION}
                    innerHeadings={[
                        SUPERVISION_HEADING,
                        SECURE_INTEGRATION,
                        AUDITING_HEADING,
                        DATA_GOVERNANCE_HEADING,
                        PRIVACY_HEADING,
                    ]}
                    innerDescriptions={[
                        SUPERVISION_DESCRIPTION,
                        SECURE_INTEGRATION_DESCRIPTION,
                        AUDITING_DESCRIPTION,
                        DATA_GOVERNANCE_DESCRIPTION,
                        PRIVACY_DESCRIPTION,
                    ]}
                />
                <ResultSpeak />
                <Footer />
            </main>
        </div>
    );
}
