"use client";
import PlatformHeroSection from "../Components/PlatformPage/PlatformHeroSection/PlatformHeroSection";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BuildYourOwnAgent from "../Components/PlatformPage/BuildYourOwnAgent";
import EmpowerDevelopers from "../Components/PlatformPage/EmpowerDevelopers";
import {
    DEFINE_YOUR_BRAND_KNOWLEDGE_AND_GOALS,
    DEFINE_YOUR_BRAND_KNOWLEDGE_AND_GOALS_DESCRIPTION,
    YOUR_GOALS_AND_GUARDRAILS,
    YOUR_GOALS_AND_GUARDRAILS_DESCRIPTION,
    YOUR_KNOWLEDGE_AND_EXPERTISE,
    YOUR_KNOWLEDGE_AND_EXPERTISE_DESCRIPTION,
    YOUR_COMPANY_VOICE_AND_TONE,
    YOUR_COMPANY_VOICE_AND_TONE_DESCRIPTION,
    SUPERVISION_SECURITY_AND_AUDITING,
    SUPERVISION_SECURITY_AND_AUDITING_DESCRIPTION,
    FILTERS_AND_MONITORING,
    FILTERS_AND_MONITORING_DESCRIPTION,
    SECURE_INTEGRATION,
    SECURE_INTEGRATION_SUPERVISION_DESCRIPTION,
    AUDITING_AND_INSPECTION,
    AUDITING_AND_INSPECTION_DESCRIPTION,
    PROMPT_INJECTION_DETECTION,
    PROMPT_INJECTION_DETECTION_DESCRIPTION,
} from "../utils/Constant";
import {
    DefineYourBrandKnowledgeAndGoalsSVG1,
    DefineYourBrandKnowledgeAndGoalsSVG2,
    DefineYourBrandKnowledgeAndGoalsSVG3,
} from "../utils/Icons/Icons";
import ConnectAIToYourEntireBussiness from "../Components/PlatformPage/ConnectAIToYourEntireBussiness";
import SierraSpeak from "../Components/SierraSpeaks/SierraSpeak";
import OrchestrateSection from "../Components/PlatformPage/OrchestrateSection";
import DataGovernanceSection from "../Components/PlatformPage/DataGovernanceSection";
import ForwardThinkingSection from "../Components/PlatformPage/ForwardThinkingSection";
import SafeAndSecure from "../Components/SafeAndSecure/SafeAndSecure";
function PlatformPage() {
    return (
        <div style={{ backgroundColor: "#E4E0DC" }}>
            <Navbar color="#E4E0DC" />
            <PlatformHeroSection />
            <BuildYourOwnAgent />
            <SierraSpeak
                heading={DEFINE_YOUR_BRAND_KNOWLEDGE_AND_GOALS}
                subHeading={DEFINE_YOUR_BRAND_KNOWLEDGE_AND_GOALS_DESCRIPTION}
                video={`/assets/video/Speaks.mp4`}
                innerHeading1={YOUR_COMPANY_VOICE_AND_TONE}
                innerHeading1SVG={DefineYourBrandKnowledgeAndGoalsSVG1}
                innerDescription1={YOUR_COMPANY_VOICE_AND_TONE_DESCRIPTION}
                innerHeading2={YOUR_KNOWLEDGE_AND_EXPERTISE}
                innerHeading2SVG={DefineYourBrandKnowledgeAndGoalsSVG2}
                innerDescription2={YOUR_KNOWLEDGE_AND_EXPERTISE_DESCRIPTION}
                innerHeading3={YOUR_GOALS_AND_GUARDRAILS}
                innerHeading3SVG={DefineYourBrandKnowledgeAndGoalsSVG3}
                innerDescription3={YOUR_GOALS_AND_GUARDRAILS_DESCRIPTION}
                disableButton={true}
            />
            <EmpowerDevelopers />
            <ConnectAIToYourEntireBussiness />
            <OrchestrateSection />
            <SafeAndSecure
                heading={SUPERVISION_SECURITY_AND_AUDITING}
                description={SUPERVISION_SECURITY_AND_AUDITING_DESCRIPTION}
                innerHeadings={[
                    FILTERS_AND_MONITORING,
                    SECURE_INTEGRATION,
                    PROMPT_INJECTION_DETECTION,
                    AUDITING_AND_INSPECTION,
                ]}
                innerDescriptions={[
                    FILTERS_AND_MONITORING_DESCRIPTION,
                    SECURE_INTEGRATION_SUPERVISION_DESCRIPTION,
                    PROMPT_INJECTION_DETECTION_DESCRIPTION,
                    AUDITING_AND_INSPECTION_DESCRIPTION,
                ]}
            />
            <DataGovernanceSection />
            <ForwardThinkingSection />
            <Footer />
        </div>
    );
}

export default PlatformPage;
