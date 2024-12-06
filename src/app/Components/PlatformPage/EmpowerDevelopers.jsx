import React from "react";
import {
    EMPOWER_DEVELOPERS_TO_INNOVATE_FAST,
    EMPOWER_DEVELOPERS_TO_INNOVATE_FAST_DESCRIPTION,
    COMPOSABLE_SKILLS,
    COMPOSABLE_SKILLS_DESCRIPTION,
    DECLARATIVE_DEVELOPMENT,
    DECLARATIVE_DEVELOPMENT_DESCRIPTION,
} from "../../utils/Constant";
import { DeclarativeDevelopmentSVG } from "../../utils/Icons/Icons";
import { ComposableSkillsSVG } from "../../utils/Icons/Icons";
const EmpowerDevelopers = () => {
    return (
        <section
            className="relative py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{ zIndex: 6 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                            {EMPOWER_DEVELOPERS_TO_INNOVATE_FAST}
                        </h2>
                        <p className="body-m mt-2 text-pretty pr-4 text-gray-500 theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                            {EMPOWER_DEVELOPERS_TO_INNOVATE_FAST_DESCRIPTION}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 grid grid-cols-subgrid lg:col-span-10 lg:col-start-2 gap-2 md:gap-2.5">
                        <div className="col-span-12 md:col-span-6 lg:col-span-5 ">
                            <div className="flex h-full flex-col justify-between rounded-2xl gap-4 p-4 md:gap-12 md:p-6 lg:px-12 lg:py-10 border border-gray-400 theme-tech:border-gray-400 theme-platform:border-gray-250">
                                <h3 className="title-s flex gap-2 text-black theme-tech:text-white">
                                    <ComposableSkillsSVG />
                                    {COMPOSABLE_SKILLS}
                                </h3>
                                <div className="body-s flex max-w-[40ch] flex-col gap-4 text-gray-500 theme-tech:text-gray-100 md:gap-6 body-l">
                                    <p>{COMPOSABLE_SKILLS_DESCRIPTION}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-5">
                            <div className="flex h-full flex-col justify-between rounded-2xl gap-4 p-4 md:gap-12 md:p-6 lg:px-12 lg:py-10 border border-gray-400 theme-tech:border-gray-400 theme-platform:border-gray-250">
                                <h3 className="title-s flex gap-2 text-black theme-tech:text-white">
                                    <DeclarativeDevelopmentSVG />
                                    {DECLARATIVE_DEVELOPMENT}
                                </h3>
                                <div className="body-s flex max-w-[40ch] flex-col gap-4 text-gray-500 theme-tech:text-gray-100 md:gap-6 body-l">
                                    <p>{DECLARATIVE_DEVELOPMENT_DESCRIPTION}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmpowerDevelopers;
