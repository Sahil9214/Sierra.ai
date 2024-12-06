/* eslint-disable prettier/prettier */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "sierra.ai",
            "via.placeholder.com",
            "staging.sierra.ai",
            "cdn.sanity.io",
        ], // Add the hostname here
    },
};

export default nextConfig;
