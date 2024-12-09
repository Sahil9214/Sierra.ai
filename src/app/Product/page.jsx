/* eslint-disable prettier/prettier */
"use client";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/HeroSection";
import IntuitiveAndAuthentic from "../Components/ProductPageComponents/IntuitiveAndAuthentic/IntuitiveAndAuthentic.jsx";
import {
    PRODUCT_PAGE_HEADING,
    PRODUCT_PAGE_DESCRIPTION,
    WATCH_DEMO,
    SONAS_VP_DESIGNATION,
    SONAS_VP_NAME,
    SONAS_THOUGHT,
    ALWAYS_IMPROVING_HEADING,
    ALWAYS_IMPROVING_DESCRIPTION,
    LIVE_SUMMARIES_HEADING,
    LIVE_SUMMARIES_DESCRIPTION,
    AUTOMATIC_TAGGINGS_HEADING,
    AUTOMATIC_TAGGINGS_DESCRIPTION,
    INTEGRATED_QUALITY_ASSURANCE_HEADING,
    INTEGRATED_QUALITY_ASSURANCE_DESCRIPTION,
    USE_YOUR_EXPERTISE_DESCRIPTION,
    TAKE_ACTION_INSTANTLY_DESCRIPTION,
    EMPOWER_YOUR_TEAMS_DESCRIPTION,
    BEYOND_Q_A_HEADING,
    BEYOND_Q_A_DESCRIPTION,
    USE_YOUR_EXPERTISE_HEADING,
    TAKE_ACTION_INSTANTLY_HEADING,
    EMPOWER_YOUR_TEAMS_HEADING,
    AROUND_THE_CLOCK_HEADING,
    AROUND_THE_CLOCK_DESCRIPTION,
    CONNECT_ACROSS_CHANNELS_HEADING,
    CONNECT_ACROSS_CHANNELS_DESCRIPTION,
    ALWAYS_READY_DESCRIPTION,
    ALWAYS_READY_HEADING,
    ANYTIME_AND_ANYWHERE_HEADING,
    ANYTIME_AND_ANYWHERE_DESCRIPTION,
    SCALABLE_HEADING,
    SCALABLE_DESCRIPTION,
    SUPERVISION_HEADING,
    SECURE_INTEGRATION,
    AUDITING_HEADING,
    DATA_GOVERNANCE_HEADING,
    PRIVACY_HEADING,
    SUPERVISION_DESCRIPTION,
    SECURE_INTEGRATION_DESCRIPTION,
    AUDITING_DESCRIPTION,
    DATA_GOVERNANCE_DESCRIPTION,
    PRIVACY_DESCRIPTION,
    SAFE_AND_SECURE_DESCRIPTION,
} from "../utils/Constant";
import {
    AlwaysImprovingHeading1SVG,
    AlwaysImprovingHeading2SVG,
    AlwaysImprovingHeading3SVG,
    BeyondQAHeading1SVG,
    BeyondQAHeading2SVG,
    BeyondQAHeading3SVG,
    AnytimeAnywhereScalableSVG,
} from "../utils/Icons/Icons";
import {
    ANYTIME_AND_ANYWHERE_VIDEO_URL,
    SONAS_HEADSHOT_IMAGE_URL,
    SONAS_IMAGE_URL,
    BEYOND_Q_A_VIDEO_URL,
} from "../utils/Images/ImagesUrl";
import SierraSpeak from "../Components/SierraSpeaks/SierraSpeak";
import SafeAndSecure from "../Components/SafeAndSecure/SafeAndSecure";
import WeightWatcher from "../Components/WeightWatcher/WeightWatcher";
import BeyondAnytime from "../Components/Beyond_Anytime/Beyond_Anytime";
const ProductPage = () => {
    return (
        <div>
            <Navbar color="#f6f5f3" />
            <main
                className="flex-grow outline-yellow"
                id="main"
                style={{ backgroundColor: "#f6f5f3" }}
            >
                <HeroSection
                    heading={PRODUCT_PAGE_HEADING}
                    subHeading={PRODUCT_PAGE_DESCRIPTION}
                    buttonText={WATCH_DEMO}
                    video={
                        "https://sierra.ai/api/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F7e41653d24b76b90dd5d71a7dcda2cc41b054374.mp4"
                    }
                />
                <IntuitiveAndAuthentic />
                {/* !BEYOND QA */}
                <BeyondAnytime
                    heading={BEYOND_Q_A_HEADING}
                    description={BEYOND_Q_A_DESCRIPTION}
                    innerHeading1={USE_YOUR_EXPERTISE_HEADING}
                    innerHeading1SVG={BeyondQAHeading1SVG}
                    innerDescription1={USE_YOUR_EXPERTISE_DESCRIPTION}
                    innerHeading2={TAKE_ACTION_INSTANTLY_HEADING}
                    innerHeading2SVG={BeyondQAHeading2SVG}
                    innerDescription2={TAKE_ACTION_INSTANTLY_DESCRIPTION}
                    innerHeading3={EMPOWER_YOUR_TEAMS_HEADING}
                    innerHeading3SVG={BeyondQAHeading3SVG}
                    innerDescription3={EMPOWER_YOUR_TEAMS_DESCRIPTION}
                    video={BEYOND_Q_A_VIDEO_URL}
                />
                {/* !ANYTIME AND ANYWHERE */}
                <BeyondAnytime
                    heading={ANYTIME_AND_ANYWHERE_HEADING}
                    description={ANYTIME_AND_ANYWHERE_DESCRIPTION}
                    innerHeading1={AROUND_THE_CLOCK_HEADING}
                    innerHeading1SVG={BeyondQAHeading1SVG}
                    innerDescription1={AROUND_THE_CLOCK_DESCRIPTION}
                    innerHeading2={CONNECT_ACROSS_CHANNELS_HEADING}
                    innerHeading2SVG={BeyondQAHeading2SVG}
                    innerDescription2={CONNECT_ACROSS_CHANNELS_DESCRIPTION}
                    innerHeading3={ALWAYS_READY_HEADING}
                    innerHeading3SVG={BeyondQAHeading3SVG}
                    innerDescription3={ALWAYS_READY_DESCRIPTION}
                    innerHeading4={SCALABLE_HEADING}
                    innerHeading4SVG={AnytimeAnywhereScalableSVG}
                    innerDescription4={SCALABLE_DESCRIPTION}
                    video={ANYTIME_AND_ANYWHERE_VIDEO_URL}
                />
                {/* !SONAS */}
                <WeightWatcher
                    image={SONAS_HEADSHOT_IMAGE_URL}
                    logo={SONAS_IMAGE_URL}
                    name={SONAS_VP_NAME}
                    designation={SONAS_VP_DESIGNATION}
                    thought={SONAS_THOUGHT}
                    link={"/Customers"}
                />
                {/* {ALWAYS IMPROVING SECTION} */}
                <SierraSpeak
                    heading={ALWAYS_IMPROVING_HEADING}
                    subHeading={ALWAYS_IMPROVING_DESCRIPTION}
                    video={`/assets/video/Speaks.mp4`}
                    innerHeading1={LIVE_SUMMARIES_HEADING}
                    innerHeading1SVG={AlwaysImprovingHeading1SVG}
                    innerDescription1={LIVE_SUMMARIES_DESCRIPTION}
                    innerHeading2={AUTOMATIC_TAGGINGS_HEADING}
                    innerHeading2SVG={AlwaysImprovingHeading2SVG}
                    innerDescription2={AUTOMATIC_TAGGINGS_DESCRIPTION}
                    innerHeading3={INTEGRATED_QUALITY_ASSURANCE_HEADING}
                    innerHeading3SVG={AlwaysImprovingHeading3SVG}
                    innerDescription3={INTEGRATED_QUALITY_ASSURANCE_DESCRIPTION}
                    disableButton={true}
                />
                <SafeAndSecure
                    heading={"RAM"}
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
            </main>
            <Footer />
        </div>
    );
};

export default ProductPage;
