/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import React from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import Link from "next/link";
const WeightWatcher = () => {
    return (
        <section
            className="relative bg-white py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-16 lg:py-18 overflow-x-hidden"
            style={{ zIndex: 5 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5">
                    <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                        <article className="grid w-full grid-cols-12 gap-y-6 lg:grid-cols-10 gap-2 md:gap-2.5">
                            <div className="col-span-12 md:col-span-4 lg:col-span-3">
                                <figure>
                                    <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-3xl md:mb-12">
                                        <Image
                                            alt="Headshot of Maureen Martin"
                                            loading="lazy"
                                            decoding="async"
                                            layout="fill"
                                            objectFit="cover"
                                            className="block h-auto w-full object-cover bg-gray-300"
                                            sizes="(min-width: 769px) 20vw, 100vw"
                                            src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png&amp;width=3840&amp;quality=90"
                                        />
                                    </div>
                                    <figcaption className="flex flex-col text-gray-500">
                                        <span className="body-l inline-block font-medium text-grey-600">
                                            Maureen Martin
                                        </span>
                                        <span className="body-s inline-block text-grey-500">
                                            VP of Customer Care, WeightWatchers
                                        </span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-span-12 flex flex-col gap-9 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-5">
                                <div className="relative hidden h-5 md:block lg:h-6">
                                    <Image
                                        alt="WeightWatchers Logo"
                                        loading="lazy"
                                        width={1820}
                                        height={240}
                                        decoding="async"
                                        className="block filter-gray-250 h-full w-auto"
                                        sizes="(min-width: 1025px) 10vw, 20vw"
                                        src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fa4674e26fca0fc4001abdfd1c7c00e88cd21ce91-1820x240.png&amp;width=3840&amp;quality=90"
                                    />
                                </div>
                                <blockquote className="title-m relative grow text-black before:absolute before:-left-2.5 before:content-['“'] theme-tech:text-white before:md:-left-3 before:lg:-left-4 pr-4 md:pr-0">
                                    <span className="sr-only">“</span>I knew the
                                    AI agent would answer questions quickly, but
                                    I didn’t expect the responses to be so
                                    genuine and empathetic.<span>”</span>
                                </blockquote>
                                <Button name={"Read more"} />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeightWatcher;
