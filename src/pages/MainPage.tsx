import React, {JSX} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Data for the service cards
const serviceCards = [
    {
        image: "https://c.animaapp.com/c8vOIei8/img/placeholder@2x.png",
        playIcon: "https://c.animaapp.com/c8vOIei8/img/play@2x.png",
        title: "Supercharge Your Market Presence",
        description:
            "Figma ipsum component variant main layer. Duplicate share boolean reesizing figjam. Auto scale create move library opacity pen thumbnail.",
        highlighted: true,
    },
    {
        image: "https://c.animaapp.com/c8vOIei8/img/placeholder-1@2x.png",
        playIcon: "https://c.animaapp.com/c8vOIei8/img/play-1@2x.png",
        title: "Supercharge Your Market Presence",
        description:
            "Figma ipsum component variant main layer. Object undo link inspect underline opacity stroke image. Group arrange share subtract shadow.",
    },
    {
        image: "https://c.animaapp.com/c8vOIei8/img/placeholder-2@2x.png",
        playIcon: "https://c.animaapp.com/c8vOIei8/img/play-2@2x.png",
        title: "Supercharge Your Market Presence",
        description:
            "Figma ipsum component variant main layer. Mask move arrow italic device. Plugin star layer overflow component flows move link draft. Main.",
    },
];

export const MainPage = (): JSX.Element => {
    return (
        <div className="bg-[#f7f9fc] flex flex-row justify-center w-full">
            <div className="bg-[#f7f9fc] overflow-hidden w-full h-[4064px] relative">
                {/* Hero Section */}
                <div className="absolute w-full h-[833px] top-0 left-0 bg-[url(https://c.animaapp.com/qfXs9GxT/img/hero.png)] object-cover">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="absolute w-[225px] h-[300px] top-[216px] left-[1446px]"
                        alt="Illustration"
                        src="https://c.animaapp.com/c8vOIei8/img/illustration@2x.png"
                    />
                </div>

                {/* Decorative Elements */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[227px] h-[222px] top-[1072px] left-[1446px]"
                    alt="Element"
                    src="https://c.animaapp.com/c8vOIei8/img/element-3@2x.png"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[226.63px] h-[226.631px] top-[1400px] -left-[60px]"
                    alt="Illustration"
                    src="https://ik.imagekit.io/3paggvhlz/img.png?updatedAt=1739275168786"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[264.984px] h-[476.532px] top-[1900px] left-[1600px]"
                    alt="Illustration"
                    src="https://ik.imagekit.io/3paggvhlz/img_1.png"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[126.601px] h-[138.543px] top-[2100px] -left-[60px]"
                    alt="Illustration"
                    src="https://ik.imagekit.io/3paggvhlz/img_2.png"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[231.997px] h-[277.166px] top-[2200px] left-[400px]"
                    alt="Illustration"
                    src="https://ik.imagekit.io/3paggvhlz/img_3.png"
                />
                {/* What We Do Section */}
                <div className="absolute w-[1278px] h-[1020px] top-[1547px] left-[242px]">
                    <div className="flex flex-col w-[1278px] items-center gap-[35px]">
                        {/* Section Header */}
                        <div className="flex items-center gap-[30px]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="w-[111.67px] h-[5.33px]"
                                alt="Line"
                                src="https://c.animaapp.com/c8vOIei8/img/line-169.svg"
                            />
                            <h2 className="[font-family:'Conthrax-SemiBold',Helvetica] font-semibold text-[#000b33] text-[35px] leading-[42px]">
                                What we do
                            </h2>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="w-[111.67px] h-[5.33px]"
                                alt="Line"
                                src="https://c.animaapp.com/c8vOIei8/img/line-168.svg"
                            />
                        </div>

                        {/* Service Cards */}
                        <div className="flex items-start gap-[15px] w-full">
                            {serviceCards.map((card, index) => (
                                <Card
                                    key={index}
                                    className="flex-1 p-[25px] bg-white rounded-[25px] shadow-[0px_17px_80px_#1f1c550f]"
                                >
                                    <CardContent className="p-0 flex flex-col gap-[25px]">
                                        <div
                                            className="relative w-full h-[221px] bg-cover bg-center"
                                            style={{ backgroundImage: `url(${card.image})` }}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                className="absolute w-[93px] h-[87px] top-[74px] left-[136px]"
                                                alt="Play"
                                                src={card.playIcon}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-[35px]">
                                            <div className="flex flex-col gap-5">
                                                <CardTitle className="text-xl text-[#000b33] leading-[32px]">
                                                    {card.title}
                                                </CardTitle>
                                                <Separator />
                                                <p className="text-[#6f6f81] text-[15px] leading-6">
                                                    {card.description}
                                                </p>
                                            </div>

                                            <Button
                                                variant="outline"
                                                className={`px-[30px] py-[15px] ${card.highlighted ? "border-[#535eff]" : "border-transparent"}`}
                                            >
                                                Show More
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button className="px-[31px] py-[18px] bg-[#201c41] text-xl font-semibold rounded-[18px] border-2 border-[#ffffff26] shadow-[0px_25px_43px_#201c422e]">
                            Get Started
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute w-full h-[502px] top-[3562px] left-0">
                    <div
                        className="bg-[url('https://c.animaapp.com/c8vOIei8/img/shape.svg')] bg-cover bg-center w-full h-[529px]">
                        <p className="absolute w-[232px] h-[26px] top-[430px] left-[761px] font-medium text-neutral-200 text-base text-center tracking-[0.06px] leading-[25.6px]">
                            All rights reserved
                        </p>

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="absolute w-[357px] h-[300px] top-[86px] left-[61px]"
                            alt="Frame"
                            src="https://c.animaapp.com/c8vOIei8/img/frame-2121450128.svg"
                        />
                        <div className={"flex items-center justify-center flex-row absolute top-[387px] right-[110px]"}>
                            <button
                            >
                                <svg width="127" height="133" viewBox="0 0 127 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_10_16801)">
                                        <path d="M63.5 90.3632C82.0015 90.3632 97 74.1641 97 54.1816C97 34.1991 82.0015 18 63.5 18C44.9985 18 30 34.1991 30 54.1816C30 74.1641 44.9985 90.3632 63.5 90.3632Z" fill="white"/>
                                        <path d="M63.5 90.3632C82.0015 90.3632 97 74.1641 97 54.1816C97 34.1991 82.0015 18 63.5 18C44.9985 18 30 34.1991 30 54.1816C30 74.1641 44.9985 90.3632 63.5 90.3632Z" stroke="white"/>
                                    </g>
                                    <path d="M61.7581 64.8788L61.7306 55.7655H58.1414V51.8598H61.7306V49.256C61.7306 45.7419 63.7305 44.0483 66.6113 44.0483C67.9913 44.0483 69.1773 44.1601 69.5229 44.2101V47.8825L67.5249 47.8835C65.9581 47.8835 65.6548 48.6937 65.6548 49.8825V51.8598H70.1056L68.9092 55.7655H65.6548V64.8788H61.7581Z" fill="#1E2532"/>
                                    <defs>
                                        <filter id="filter0_d_10_16801" x="0" y="0" width="127" height="132.363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="12"/>
                                            <feGaussianBlur stdDeviation="15"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_16801"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_16801" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                            <button className={"-mt-5"}>
                                <svg width="67" height="73" viewBox="0 0 67 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="67" height="72.36" rx="33.5" fill="#4583F6"/>
                                    <g clip-path="url(#clip0_10_16804)">
                                        <rect width="24.12" height="26.0507" transform="translate(21.44 23.1548)" fill="#4583F6"/>
                                        <path d="M38.5255 25.3271H28.4755C25.7002 25.3271 23.4505 27.757 23.4505 30.7544V41.6089C23.4505 44.6062 25.7002 47.0361 28.4755 47.0361H38.5255C41.3007 47.0361 43.5505 44.6062 43.5505 41.6089V30.7544C43.5505 27.757 41.3007 25.3271 38.5255 25.3271Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M37.5203 35.4989C37.6443 36.4022 37.5015 37.3248 37.112 38.1354C36.7226 38.9461 36.1064 39.6034 35.3511 40.014C34.5959 40.4246 33.7399 40.5675 32.9051 40.4224C32.0703 40.2773 31.2991 39.8516 30.7012 39.2059C30.1033 38.5601 29.7092 37.7272 29.5748 36.8255C29.4405 35.9239 29.5728 34.9995 29.953 34.1837C30.3331 33.368 30.9418 32.7025 31.6923 32.2819C32.4428 31.8613 33.297 31.707 34.1334 31.8409C34.9866 31.9776 35.7765 32.4069 36.3863 33.0656C36.9962 33.7243 37.3938 34.5774 37.5203 35.4989Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <ellipse cx="39.0264" cy="30.2087" rx="1.50785" ry="1.62817" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_10_16804">
                                            <rect width="24.12" height="26.0507" fill="white" transform="translate(21.44 23.1548)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button>
                                <svg width="127" height="133" viewBox="0 0 127 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_10_16813)">
                                        <path d="M63.5 90.8134C82.0015 90.8134 97 74.6143 97 54.6318C97 34.6492 82.0015 18.4502 63.5 18.4502C44.9984 18.4502 30 34.6492 30 54.6318C30 74.6143 44.9984 90.8134 63.5 90.8134Z" fill="white"/>
                                        <path d="M63.5 90.8134C82.0015 90.8134 97 74.6143 97 54.6318C97 34.6492 82.0015 18.4502 63.5 18.4502C44.9984 18.4502 30 34.6492 30 54.6318C30 74.6143 44.9984 90.8134 63.5 90.8134Z" stroke="white"/>
                                    </g>
                                    <path d="M73.2632 47.9016C72.5453 48.2922 71.8275 48.4224 70.99 48.5525C71.8275 48.0318 72.4257 47.2506 72.665 46.2091C71.9471 46.7299 71.1096 46.9903 70.1525 47.2506C69.4346 46.4695 68.3578 45.9487 67.281 45.9487C65.2471 45.9487 63.4525 47.9016 63.4525 50.245C63.4525 50.6356 63.4525 50.896 63.5721 51.1564C60.3418 51.0262 57.3507 49.3337 55.4364 46.7299C55.0775 47.3808 54.9578 48.0318 54.9578 48.9431C54.9578 50.3752 55.6757 51.6771 56.7525 52.4583C56.1543 52.4583 55.556 52.1979 54.9578 51.9375C54.9578 54.0205 56.2739 55.713 58.0685 56.1036C57.7096 56.2338 57.3507 56.2338 56.9918 56.2338C56.7525 56.2338 56.5132 56.2338 56.2739 56.1036C56.7525 57.7961 58.1882 59.098 59.9828 59.098C58.6668 60.2697 56.9918 60.9206 55.0775 60.9206C54.7185 60.9206 54.4793 60.9206 54.1203 60.9206C55.915 62.0924 57.9489 62.8735 60.1025 62.8735C67.281 62.8735 71.2293 56.364 71.2293 50.7658C71.2293 50.6356 71.2293 50.3752 71.2293 50.245C72.0668 49.5941 72.7846 48.8129 73.2632 47.9016Z" fill="#1E2532"/>
                                    <defs>
                                        <filter id="filter0_d_10_16813" x="-4.57764e-05" y="0.450195" width="127" height="132.363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="12"/>
                                            <feGaussianBlur stdDeviation="15"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_16813"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_16813" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                        </div>

                        <Separator className="absolute w-[1241px] h-px top-[465px] left-80"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
