/* eslint-disable prettier/prettier */
import localFont from 'next/font/local'

export const gtAmerica = localFont({
    src: [
        {
            // path: '../../../fonts/2e18415878ad7694-s.p.woff2',
            path: "../../public/fonts/2e18415878ad7694-s.p.woff2",
            weight: '400',
            style: 'normal',
        },
        {
            //  path: '../../../fonts/e4f3c7f3cd5e5e30-s.p.woff2',
            path: '../../public/fonts/e4f3c7f3cd5e5e30-s.p.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/5107814654d50901-s.p.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/8b689f0960df1c8c-s.p.woff2',
            weight: '500',
            style: 'italic',
        }
    ],
    variable: '--font-gtamerica',
    fallback: ['Arial']
}) 