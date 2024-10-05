import { useEffect, useState } from 'react';

export default function Icon_OurServices() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    const item = [{
        svg: ""
    }]

    return (
        <div>
            <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_6120_84282)">
                    <path d="M25.2066 30.0357C24.7398 29.0346 25.1729 27.8446 26.174 27.3778L39.4614 21.1818L38.8178 19.8017C37.0407 15.9906 38.6895 11.4605 42.5006 9.68334C46.3117 7.90621 50.8418 9.55504 52.6189 13.3661L53.2625 14.7462L66.3875 8.62591C67.3886 8.1591 68.5786 8.59221 69.0454 9.59329L75.8471 24.1796L71.7068 26.1103C69.4201 27.1766 68.4308 29.8947 69.4971 32.1813C70.5634 34.4679 73.2815 35.4572 75.5681 34.391L79.7084 32.4603L86.5101 47.0466C86.977 48.0477 86.5438 49.2377 85.5428 49.7045L69.6575 57.1119L67.8404 53.2151C66.7532 50.8836 63.9818 49.8749 61.6504 50.9621C59.3189 52.0493 58.3102 54.8207 59.3974 57.1522L61.2145 61.049L45.3292 68.4564C44.3281 68.9232 43.1382 68.4901 42.6713 67.489L35.8696 52.9027L39.8476 51.0477C42.1342 49.9814 43.1235 47.2633 42.0573 44.9767C40.991 42.6901 38.2729 41.7008 35.9863 42.767L32.0083 44.622L25.2066 30.0357Z" fill="url(#paint0_linear_6120_84282)" />
                    <g filter="url(#filter1_bi_6120_84282)">
                        <path d="M29.3894 32.6104L29.572 37.315L26.7546 39.6952L22.1346 38.6242L17.8376 46.8216L21.0911 49.9912L20.9357 53.569L16.907 56.0053L19.6105 65.0205L24.3151 64.8379L26.4136 67.7397L25.4834 72.3175L33.5822 76.7976L36.8082 73.2202L40.4282 73.5164L42.8646 77.5451L51.8797 74.8416L51.6971 70.137L54.5567 67.8977L59.219 69.1095L63.6568 60.8699L60.2203 57.6016L60.5165 53.9817L64.5452 51.5453L61.8417 42.5301L57.1371 42.7128L54.8978 39.8531L56.011 35.374L47.7714 30.9361L44.5031 34.3727L40.8409 33.9356L38.4045 29.9069L29.3894 32.6104Z" fill="url(#paint1_linear_6120_84282)" />
                        <path d="M29.3894 32.6104L29.572 37.315L26.7546 39.6952L22.1346 38.6242L17.8376 46.8216L21.0911 49.9912L20.9357 53.569L16.907 56.0053L19.6105 65.0205L24.3151 64.8379L26.4136 67.7397L25.4834 72.3175L33.5822 76.7976L36.8082 73.2202L40.4282 73.5164L42.8646 77.5451L51.8797 74.8416L51.6971 70.137L54.5567 67.8977L59.219 69.1095L63.6568 60.8699L60.2203 57.6016L60.5165 53.9817L64.5452 51.5453L61.8417 42.5301L57.1371 42.7128L54.8978 39.8531L56.011 35.374L47.7714 30.9361L44.5031 34.3727L40.8409 33.9356L38.4045 29.9069L29.3894 32.6104Z" stroke="url(#paint2_linear_6120_84282)" />
                    </g>
                    <g filter="url(#filter2_d_6120_84282)">
                        <path d="M36.1997 48.5483L28.5 52.7288V55.2511L36.1997 59.4316V57.0027L30.4375 53.99L36.1997 50.9772V48.5483ZM36.8903 64.4995H38.7609L44.2727 42.4995H42.402L36.8903 64.4995ZM44.8003 48.5483V50.9772L50.5625 53.99L44.8003 57.0027V59.4316L52.5 55.2511V52.7288L44.8003 48.5483Z" fill="url(#paint3_linear_6120_84282)" />
                        <path d="M35.9497 59.0114L28.75 55.1024V52.8775L35.9497 48.9686V50.8258L30.3216 53.7684L29.8979 53.99L30.3216 54.2115L35.9497 57.1541V59.0114ZM45.0503 50.8258V48.9686L52.25 52.8775V55.1024L45.0503 59.0114V57.1541L50.6784 54.2115L51.1021 53.99L50.6784 53.7684L45.0503 50.8258ZM43.9523 42.7495L38.5658 64.2495H37.2106L42.5971 42.7495H43.9523Z" stroke="white" stroke-opacity="0.14" stroke-width="0.5" />
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_6120_84282" x="-4.5" y="-6.5" width="112" height="112" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.482353 0 0 0 0 0.835294 0 0 0 0.4 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6120_84282" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6120_84282" result="shape" />
                    </filter>
                    <filter id="filter1_bi_6120_84282" x="10.3168" y="23.3167" width="60.8187" height="60.8186" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_6120_84282" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_6120_84282" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.63 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_6120_84282" />
                    </filter>
                    <filter id="filter2_d_6120_84282" x="26" y="42.4995" width="26.5" height="24.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-2" dy="2" />
                        <feGaussianBlur stdDeviation="0.25" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.227451 0 0 0 0 0.482353 0 0 0 0 0.835294 0 0 0 0.4 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6120_84282" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6120_84282" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_6120_84282" x1="24.3282" y1="49.4317" x2="23.784" y2="9.41557" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.5" />
                        <stop offset="1" stop-color="#FEFEFE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_6120_84282" x1="23.2051" y1="43.4157" x2="59.4211" y2="77.4619" gradientUnits="userSpaceOnUse">
                        <stop offset="0.331091" stop-color="white" stop-opacity="0.26" />
                        <stop offset="1" stop-color="#3A7BD5" stop-opacity="0.16" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_6120_84282" x1="23.2051" y1="43.4157" x2="59.4211" y2="77.4619" gradientUnits="userSpaceOnUse">
                        <stop offset="0.331091" stop-color="white" stop-opacity="0.26" />
                        <stop offset="1" stop-color="#3A7BD5" stop-opacity="0.16" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_6120_84282" x1="27.8813" y1="58.4192" x2="53.411" y2="58.2779" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C6F5FF" />
                        <stop offset="1" stop-color="#FEFCFF" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
