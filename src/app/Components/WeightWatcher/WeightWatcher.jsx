/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import React from "react";
import Button from "../Buttons/Button";

const WeightWatcher = () => {
    return (
        <div className="mx-auto max-w-screen-3xl px-4 mt-10 lg:mt-20 lg:px-2.5 ">
            <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                    <article className="grid w-full grid-cols-12 gap-y-6 lg:grid-cols-10 gap-2 md:gap-2.5">
                        <div className="col-span-12 md:col-span-4 lg:col-span-3">
                            <figure>
                                <figure>
                                    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-3xl md:mb-12">
                                        <img
                                            alt="Headshot of Maureen Martin"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            className="block h-auto w-full object-cover bg-gray-300"
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
                                            sizes="(min-width: 769px) 20vw, 100vw"
                                            srcset="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=128&amp;quality=90 128w,
                                   https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=256&amp;quality=90 256w, 
                                   https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=384&amp;quality=90 384w,
                                    https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=640&amp;quality=90 640w,
                                     https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=750&amp;quality=90 750w,
                                      https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=828&amp;quality=90 828w, 
                                      https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=1080&amp;quality=90 1080w,
                                       https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=1200&amp;quality=90 1200w,
                                        https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=1920&amp;quality=90 1920w,
                                         https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=2048&amp;quality=90 2048w,
                                          https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=3840&amp;quality=90 3840w"
                                            src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=3840&amp;quality=90"
                                        />
                                    </div>
                                    <figcaption className="flex flex-col text-gray-600">
                                        <span className="body-l inline-block font-bold lg:text-xl">
                                            Maureen Martin
                                        </span>
                                        <span className="body-s inline-block lg:text-base">
                                            VP of Customer Care, WeightWatchers
                                        </span>
                                    </figcaption>
                                </figure>
                            </figure>
                        </div>
                        <div className="col-span-12 flex flex-col gap-9 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-5">
                            <div className="relative hidden h-5 md:block lg:h-6">
                                <img
                                    style={{
                                        filter: "var(--filter-gray-250)",
                                    }}
                                    alt="WeightWatchers Logo"
                                    loading="lazy"
                                    width="1820"
                                    height="240"
                                    decoding="async"
                                    data-nimg="1"
                                    className="block filter-gray-250 h-full w-auto"
                                    sizes="(min-width: 1025px) 10vw, 20vw"
                                    srcSet="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=64&amp;quality=90 64w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=96&amp;quality=90 96w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=128&amp;quality=90 128w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=256&amp;quality=90 256w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=384&amp;quality=90 384w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=640&amp;quality=90 640w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=750&amp;quality=90 750w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=828&amp;quality=90 828w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=1080&amp;quality=90 1080w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=1200&amp;quality=90 1200w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=1920&amp;quality=90 1920w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=2048&amp;quality=90 2048w, https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=3840&amp;quality=90 3840w"
                                    src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=3840&amp;quality=90"
                                />
                            </div>
                            <blockquote className="text-[6.5vw] leading-8 md:text-[5vw] lg:text-[2.5vw] lg:leading-[3vw] title-m relative grow text-black before:absolute before:-left-2.5 before:content-['“'] theme-tech:text-white before:md:-left-3 before:lg:-left-4 pr-4 md:pr-0 ">
                                <span className="sr-only">“</span>I knew the AI
                                agent would answer questions quickly, but I
                                didn’t expect the responses to be so genuine and
                                empathetic.
                                <span>”</span>
                            </blockquote>
                            <div>
                                <Button name={"Read more"} />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default WeightWatcher;
