"use client";
import React from "react";
import {
    YourDataIsSafeSVG,
    PrivateDataSVG,
    TrainYourAgentSVG,
} from "../../utils/Icons/Icons";
import {
    PRIVATE_DATA_STAYS_PRIVATE,
    PRIVATE_DATA_STAYS_PRIVATE_DESCRIPTION,
    TRAIN_YOUR_AGENT_AND_NOTHING_ELSE,
    TRAIN_YOUR_AGENT_AND_NOTHING_ELSE_DESCRIPTION,
    TRAIN_DATA_IS_YOUR_OWN,
    TRAIN_DATA_IS_YOUR_OWN_DESCRIPTION,
} from "../../utils/Constant";
const DataGovernanceSection = () => {
    return (
        <section
            className="theme-tech relative py-12 text-white theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{
                zIndex: 2,
                backgroundColor: "rgba(34, 34, 34, var(--tw-bg-opacity))",
            }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-white theme-tech:text-white md:pr-0">
                            Data governance and privacy
                        </h2>
                        <p className="body-m mt-2 text-pretty pr-4 text-white theme-tech:text-gray-100 md:max-w-[80%] md:pr-0 lg:mt-6">
                            Protect your data and maintain compliance.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 grid grid-cols-subgrid gap-2 md:gap-2.5">
                        <div className="col-span-12 md:col-span-4 lg:col-span-4">
                            <div className="flex h-full flex-col justify-between rounded-2xl gap-4 p-4 md:gap-12 md:p-6 lg:px-12 lg:py-10 border border-gray-200 theme-tech:border-gray-400 theme-platform:border-gray-250">
                                <h3 className="title-s flex gap-2 text-white theme-tech:text-white">
                                    <YourDataIsSafeSVG />
                                    {TRAIN_DATA_IS_YOUR_OWN}
                                </h3>
                                <div className="body-s flex max-w-[40ch] flex-col gap-4 text-white theme-tech:text-gray-100 md:gap-6 body-l">
                                    <p>{TRAIN_DATA_IS_YOUR_OWN_DESCRIPTION}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-4">
                            <div className="flex h-full flex-col justify-between rounded-2xl gap-4 p-4 md:gap-12 md:p-6 lg:px-12 lg:py-10 border border-gray-200 theme-tech:border-gray-400 theme-platform:border-gray-250">
                                <h3 className="title-s flex gap-2 text-white theme-tech:text-white">
                                    <PrivateDataSVG />
                                    {PRIVATE_DATA_STAYS_PRIVATE}
                                </h3>
                                <div className="body-s flex max-w-[40ch] flex-col gap-4 text-white theme-tech:text-gray-100 md:gap-6 body-l">
                                    <p>
                                        {PRIVATE_DATA_STAYS_PRIVATE_DESCRIPTION}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-4">
                            <div className="flex h-full flex-col justify-between rounded-2xl gap-4 p-4 md:gap-12 md:p-6 lg:px-12 lg:py-10 border border-gray-200 theme-tech:border-gray-400 theme-platform:border-gray-250">
                                <h3 className="title-s flex gap-2 text-white theme-tech:text-white">
                                    <TrainYourAgentSVG />
                                    {TRAIN_YOUR_AGENT_AND_NOTHING_ELSE}
                                </h3>
                                <div className="body-s flex max-w-[40ch] flex-col gap-4 text-white theme-tech:text-gray-100 md:gap-6 body-l">
                                    <p>
                                        {
                                            TRAIN_YOUR_AGENT_AND_NOTHING_ELSE_DESCRIPTION
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataGovernanceSection;
