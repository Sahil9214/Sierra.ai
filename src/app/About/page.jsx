"use client";
import Navbar from "../Components/Navbar/Navbar";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";

function About() {
    return (
        <div className="bg-[#f6f5f3]">
            <Navbar />
            <main className="flex-grow outline-yellow" id="main" tabIndex="-1">
                <Header />
                <AboutSection />
                <FoundersSection />
                <ValuesSection />
                <Footer />
            </main>
        </div>
    );
}
export default About;

const Header = () => {
    return (
        <header>
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5 flex flex-col items-center py-12 md:py-18">
                <div className="flex flex-col items-center text-center lg:max-w-[66.67%]">
                    <h1 className="headline mb-4 whitespace-pre-wrap text-balance text-black theme-tech:text-white lg:mb-8">
                        Who we are{"\n"} and why &lsquo;we&rsquo;re here.
                    </h1>
                    <p className="body-m md:body-l lg:title-s max-w-xl whitespace-pre-wrap text-pretty text-gray-500">
                        About Sierra.
                    </p>
                </div>
            </div>
        </header>
    );
};

const AboutSection = () => {
    return (
        <section
            className="relative  py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-12 lg:py-12"
            style={{ zIndex: 3 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 items-start">
                    <div className="col-span-12 flex flex-col items-center justify-end md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-5">
                        <div
                            style={{
                                transform: "translateY(0px) translateZ(0px)",
                            }}
                        >
                            <h2 className="body-m lg:body-l flex items-center gap-4 overflow-hidden rounded-full bg-white px-4 py-2 text-black theme-tech:bg-gray-700 theme-tech:text-white md:rounded-2xl md:pr-6 xl:py-4">
                                <svg
                                    viewBox="-1.5 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-2 w-2 text-gray-250 theme-tech:text-gray-400 md:h-3 md:w-3 xl:h-5 xl:w-5"
                                >
                                    <path
                                        d="M16 5.00078V13.9992L8 18.5L0 13.9992V5.00078L8 0.5L16 5.00078Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                What does Sierra do?
                            </h2>
                        </div>
                        <div
                            className="w-full pt-4 md:pt-8"
                            style={{
                                transform: "translateY(0px) translateZ(0px)",
                            }}
                        >
                            <div
                                className="flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-white p-2 text-black theme-tech:bg-gray-700 theme-tech:text-white md:p-4"
                                style={{ opacity: 1 }}
                            >
                                <div className="h-1 w-10 rounded-full bg-gray-100 theme-tech:bg-gray-400"></div>
                                <div className="flex w-full overflow-hidden">
                                    <div className="flex w-full gap-2 py-2 md:py-3 lg:gap-4">
                                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-[8px] md:h-10 md:w-10 md:rounded-xl">
                                            <Image
                                                alt="Sierra logo"
                                                src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F9f7f8e50fedb958d264d38b611565846d43c0ecb-81x80.jpg&width=3840&quality=90"
                                                layout="fill"
                                                objectFit="cover"
                                                className="block h-auto w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <address className="label mb-1 not-italic text-gray-300 md:mb-0">
                                                Sierra
                                            </address>
                                            <p className="body-m lg:body-l leading-5">
                                                Sierra is the conversational AI
                                                platform for businesses. We
                                                enable every company to elevate
                                                their customer experience with
                                                AI.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-8">
                    <Image
                        alt="Sierra's office"
                        src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F817860ececc9f71319dc0e57b6679e58289fc09f-2000x1125.jpg&width=3840&quality=90"
                        width={2000}
                        height={1125}
                        layout="responsive"
                        className="block h-auto w-full aspect-square overflow-hidden rounded-2xl bg-gray-200 object-cover theme-tech:bg-gray-700 theme-platform:bg-gray-100 md:aspect-auto md:rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

const FoundersSection = () => {
    return (
        <section
            className="relative  py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-12 lg:py-12"
            style={{ zIndex: 2 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 items-start">
                    <div className="col-span-12 flex flex-col items-center justify-end md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-5">
                        <div
                            style={{
                                transform: "translateY(0px) translateZ(0px)",
                            }}
                        >
                            <h2 className="body-m lg:body-l flex items-center gap-4 overflow-hidden rounded-full bg-white px-4 py-2 text-black theme-tech:bg-gray-700 theme-tech:text-white md:rounded-2xl md:pr-6 xl:py-4">
                                <svg
                                    viewBox="-1.5 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-2 w-2 text-gray-250 theme-tech:text-gray-400 md:h-3 md:w-3 xl:h-5 xl:w-5"
                                >
                                    <path
                                        d="M16 5.00078V13.9992L8 18.5L0 13.9992V5.00078L8 0.5L16 5.00078Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Who are Sierra’s founders?
                            </h2>
                        </div>
                        <div
                            className="w-full pt-4 md:pt-8"
                            style={{
                                transform: "translateY(0px) translateZ(0px)",
                            }}
                        >
                            <div
                                className="flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-white p-2 text-black theme-tech:bg-gray-700 theme-tech:text-white md:p-4"
                                style={{ opacity: 1 }}
                            >
                                <div className="h-1 w-10 rounded-full bg-gray-100 theme-tech:bg-gray-400"></div>
                                <div className="flex w-full overflow-hidden">
                                    <div className="flex w-full gap-2 py-2 md:py-3 lg:gap-4">
                                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-[8px] md:h-10 md:w-10 md:rounded-xl">
                                            <Image
                                                alt="Sierra logo"
                                                src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F9f7f8e50fedb958d264d38b611565846d43c0ecb-81x80.jpg&width=3840&quality=90"
                                                layout="fill"
                                                objectFit="cover"
                                                className="block h-auto w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <address className="label mb-1 not-italic text-gray-300 md:mb-0">
                                                Sierra
                                            </address>
                                            <p className="body-m lg:body-l leading-5">
                                                <b className="font-medium">
                                                    Bret Taylor
                                                </b>
                                                <br />
                                                Bret is Co-Founder of Sierra.
                                                Most recently, he served as
                                                Co-CEO of Salesforce. Prior to
                                                Salesforce, Bret founded Quip
                                                and was CTO of Facebook. He
                                                started his career at Google,
                                                where he co-created Google Maps.
                                                Bret serves on the board of
                                                OpenAI. <br />
                                                <br />
                                                <b className="font-medium">
                                                    Clay Bavor
                                                </b>
                                                <br />
                                                Clay is Co-Founder of Sierra.
                                                Previously, Clay spent 18 years
                                                at Google, where he most
                                                recently led Google Labs.
                                                Earlier, he started and led
                                                Google’s AR/VR effort, Project
                                                Starline, and Google Lens.
                                                Before that, Clay led the
                                                product and design teams for
                                                Google Workspace.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-8">
                    <Image
                        alt="The Sierra team working in San Francisco"
                        src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ffa7e5bda09d680ac49edca554fa51f6bd1fbe327-2000x1125.jpg&width=3840&quality=90"
                        width={2000}
                        height={1125}
                        layout="responsive"
                        className="block h-auto w-full aspect-square overflow-hidden rounded-2xl bg-gray-200 object-cover theme-tech:bg-gray-700 theme-platform:bg-gray-100 md:aspect-auto md:rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

const ValuesSection = () => {
    return (
        <section
            className="relative  py-12 text-gray-400 theme-tech:bg-black theme-tech:text-gray-100 theme-product:bg-gray-100 theme-platform:bg-gray-200 md:py-12 lg:py-12"
            style={{ zIndex: 1 }}
        >
            <div className="mx-auto max-w-screen-3xl px-4 lg:px-2.5">
                <div className="grid grid-cols-12 gap-2 md:gap-2.5 items-start">
                    <div className="col-span-12 flex flex-col items-center justify-end md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-5">
                        <div
                            style={{
                                transform: "translateY(0px) translateZ(0px)",
                            }}
                        >
                            <h2 className="body-m lg:body-l flex items-center gap-4 overflow-hidden rounded-full bg-white px-4 py-2 text-black theme-tech:bg-gray-700 theme-tech:text-white md:rounded-2xl md:pr-6 xl:py-4">
                                <svg
                                    viewBox="-1.5 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-2 w-2 text-gray-250 theme-tech:text-gray-400 md:h-3 md:w-3 xl:h-5 xl:w-5"
                                >
                                    <path
                                        d="M16 5.00078V13.9992L8 18.5L0 13.9992V5.00078L8 0.5L16 5.00078Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                What are &apos;Sierra&apos;s values?
                            </h2>
                        </div>
                        <div
                            className="w-full pt-4 md:pt-8"
                            style={{
                                transform: "translateY(0px) translateZ(0px)",
                            }}
                        >
                            <div
                                className="flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-white p-2 text-black theme-tech:bg-gray-700 theme-tech:text-white md:p-4"
                                style={{ opacity: 1 }}
                            >
                                <div className="h-1 w-10 rounded-full bg-gray-100 theme-tech:bg-gray-400"></div>
                                <div className="flex w-full overflow-hidden">
                                    <div className="flex w-full gap-2 py-2 md:py-3 lg:gap-4">
                                        <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-[8px] md:h-10 md:w-10 md:rounded-xl">
                                            <Image
                                                alt="Sierra logo"
                                                src="https://staging.sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F9f7f8e50fedb958d264d38b611565846d43c0ecb-81x80.jpg&width=3840&quality=90"
                                                layout="fill"
                                                objectFit="cover"
                                                className="block h-auto w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <address className="label mb-1 not-italic text-gray-300 md:mb-0">
                                                Sierra
                                            </address>
                                            <p className="body-m lg:body-l leading-5">
                                                Our core values are trust,
                                                customer obsession,
                                                craftsmanship, intensity, and
                                                family.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 mt-4 flex w-full flex-wrap justify-center md:mt-8 gap-2 md:gap-2.5">
                    {[
                        {
                            title: "Trust",
                            description:
                                "We build trust with our customers with our accountability, empathy, quality, and responsiveness. We build trust in AI by making it more accessible, safe, and useful. We build trust with each other by showing up for each other professionally and personally, creating an environment that enables all of us to do our best work.",
                            iconPath:
                                "M12.0017 6V4M8.14886 7.40371L6.86328 5.87162M15.864 7.40367L17.1496 5.87158M2 19.0001H7.35165C8.86462 19.0001 10.1408 17.8735 10.3285 16.3722L10.5785 14.3722C10.8023 12.5817 9.40615 11.0001 7.60165 11.0001H7.5L6.79566 10.5305C6.2889 10.1927 5.66315 10.0843 5.07229 10.232C4.39889 10.4004 3.8473 10.8819 3.58951 11.5263L3 13.0001H2M22.0005 19.0001H16.6489C15.1359 19.0001 13.8597 17.8735 13.672 16.3722L13.422 14.3722C13.1982 12.5817 14.5944 11.0001 16.3989 11.0001H16.5005L17.2049 10.5305C17.7116 10.1927 18.3374 10.0843 18.9282 10.232C19.6016 10.4004 20.1532 10.8819 20.411 11.5263L21.0005 13.0001H22.0005",
                        },
                        {
                            title: "Customer Obsession",
                            description:
                                "We deeply understand our customers’ business goals and relentlessly focus on driving outcomes, not just technical milestones. Everyone at the company knows and spends time with our customers. When our customer is having an issue, we drop everything and fix it.",
                            iconPath:
                                "M6 10H7C7 9.44772 6.55228 9 6 9V10ZM6 16.5V17.5C6.55228 17.5 7 17.0523 7 16.5H6ZM18.5 10V9C17.9477 9 17.5 9.44772 17.5 10H18.5ZM18.5 16.5H17.5C17.5 17.0523 17.9477 17.5 18.5 17.5V16.5ZM12 21H11C11 21.5523 11.4477 22 12 22V21ZM13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19H13ZM20.75 16.5C20.75 15.9477 20.3023 15.5 19.75 15.5C19.1977 15.5 18.75 15.9477 18.75 16.5H20.75ZM4.5 11H6V9H4.5V11ZM5 10V16.5H7V10H5ZM6 15.5H4.5V17.5H6V15.5ZM4 15V11.5H2V15H4ZM4.5 15.5C4.22386 15.5 4 15.2761 4 15H2C2 16.3807 3.11929 17.5 4.5 17.5V15.5ZM4.5 9C3.11929 9 2 10.1193 2 11.5H4C4 11.2239 4.22386 11 4.5 11V9ZM18.5 11H20V9H18.5V11ZM20.5 11.5V15H22.5V11.5H20.5ZM20 15.5H18.5V17.5H20V15.5ZM19.5 16.5V10H17.5V16.5H19.5ZM20.5 15C20.5 15.2761 20.2761 15.5 20 15.5V17.5C21.3807 17.5 22.5 16.3807 22.5 15H20.5ZM20 11C20.2761 11 20.5 11.2239 20.5 11.5H22.5C22.5 10.1193 21.3807 9 20 9V11ZM6 9.75C6 6.64046 8.72972 4 12.25 4V2C7.76215 2 4 5.40369 4 9.75H6ZM12.25 4C15.7703 4 18.5 6.64046 18.5 9.75H20.5C20.5 5.40369 16.7378 2 12.25 2V4ZM4 9.75V10H6V9.75H4ZM18.5 9.75V10H20.5V9.75H18.5ZM15.25 20H12V22H15.25V20ZM13 21V19H11V21H13ZM18.75 16.5C18.75 18.433 17.183 20 15.25 20V22C18.2876 22 20.75 19.5376 20.75 16.5H18.75Z",
                        },
                        {
                            title: "Craftsmanship",
                            description:
                                "We get the details right, from the words on the page to the system architecture. We value good taste. When we notice something isn’t right, we take the time to fix it. We are proud of the products we produce. We continuously self-reflect to continuously self-improve.",
                            iconPath:
                                "M8.71986 3.56014C8.6853 3.62926 8.62926 3.6853 8.56014 3.71986L7.63883 4.18051C7.3756 4.31213 7.3756 4.68778 7.63883 4.81939L8.56014 5.28005C8.62926 5.3146 8.6853 5.37065 8.71986 5.43977L9.18051 6.36108C9.31213 6.62431 9.68778 6.62431 9.81939 6.36108L10.28 5.43977C10.3146 5.37065 10.3706 5.3146 10.4398 5.28005L11.3611 4.81939C11.6243 4.68778 11.6243 4.31213 11.3611 4.18051L10.4398 3.71986C10.3706 3.6853 10.3146 3.62926 10.28 3.56014L9.81939 2.63883C9.68778 2.3756 9.31213 2.3756 9.18051 2.63883L8.71986 3.56014Z",
                        },
                        {
                            title: "Intensity",
                            description:
                                "We know we don’t have the luxury of patience. We play to win. We care about our product being the best, and when it isn’t, we fix it. When we fail, we talk about it openly and without blame so we succeed the next time.",
                            iconPath: "M20 9H13V2L4 15H11V22L20 9Z",
                        },
                        {
                            title: "Family",
                            description:
                                "We know that balance and intensity are compatible, and we model it in our actions and processes. We strive to be the best technology company for parents. We support and respect each other, and we celebrate each other’s personal and professional achievements.",
                            iconPath:
                                "M15.2742 13.1471C18.4605 12.3725 22.1232 14.6568 22.4999 20H17.5M10.5 7C10.5 8.65685 9.15685 10 7.5 10C5.84315 10 4.5 8.65685 4.5 7C4.5 5.34315 5.84315 4 7.5 4C9.15685 4 10.5 5.34315 10.5 7ZM19.5 7C19.5 8.65685 18.1569 10 16.5 10C14.8431 10 13.5 8.65685 13.5 7C13.5 5.34315 14.8431 4 16.5 4C18.1569 4 19.5 5.34315 19.5 7ZM1.5 20H13.5C12.8421 10.6667 2.15792 10.6667 1.5 20Z",
                        },
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="flex flex-[0_1_100%] flex-col justify-start gap-2 rounded-2xl border border-gray-200 p-4 theme-tech:border-gray-300 md:flex-[0_1_calc(50%-8px)] md:gap-6 md:p-6 lg:flex-[0_1_calc((100%/3)-8px)]"
                        >
                            <div className="flex items-center gap-4">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                >
                                    <path
                                        d={value.iconPath}
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <h3 className="title-s text-gray-600">
                                    {value.title}
                                </h3>
                            </div>
                            <p className="body-s text-gray-500">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
