"use client";
import React from "react";

const ForwardThinkingSection = () => {
    return (
        <section
            className="theme-platform relative py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18"
            style={{
                zIndex: 1,
            }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 pb-8 md:pb-14 lg:pb-18">
                    <div className="col-span-12 flex flex-col items-start md:col-span-10 lg:col-span-7 lg:col-start-2">
                        <h2 className="title-l text-pretty pr-4 text-black theme-tech:text-white md:pr-0">
                            Forward-thinking and backwards compatible
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 gap-y-8 md:gap-y-0">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2">
                        <div className="relative overflow-hidden rounded-2xl bg-gray-200 theme-tech:bg-gray-700 theme-platform:bg-gray-100 lg:rounded-3xl aspect-square">
                            <img
                                alt="Up to Date image describing backwards compatibility"
                                loading="lazy"
                                decoding="async"
                                className="block h-auto w-full object-cover"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    color: "transparent",
                                }}
                                sizes="(min-width: 1025px) 50vw, 100vw"
                                srcSet="
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=384&quality=90 384w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=640&quality=90 640w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=750&quality=90 750w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=828&quality=90 828w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=1080&quality=90 1080w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=1200&quality=90 1200w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=1920&quality=90 1920w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=2048&quality=90 2048w,
                  https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=3840&quality=90 3840w"
                                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ba0cf877a1eade64e9886e853ee9bd3888a64c1-4000x4000.jpg&width=3840&quality=90"
                            />
                        </div>
                    </div>
                    <div className="body-m col-span-12 pr-4 md:col-span-5 md:col-start-8">
                        <p className="my-6 first:mt-0 last:mb-0 text-gray-500">
                            The Agent OS architecture embraces the latest
                            advancements in artificial intelligence, with a
                            strict commitment to backwards compatibility. We
                            ensure a seamless transition for all customers and
                            guarantee existing functionalities remain fully
                            accessible.
                        </p>
                        <p className="my-6 first:mt-0 last:mb-0">
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForwardThinkingSection;
