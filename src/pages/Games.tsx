import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, {JSX} from "react";
import {FacebookIcon, Instagram,Twitter} from "lucide-react";

const footerLinks = {
    product: [
        "Manage your Cap Table",
        "Raise Capital",
        "Start/Manage Option Plan"
    ]
}

const stats = [
    {
        icon: "https://c.animaapp.com/qfXs9GxT/img/01@2x.png",
        value: "2.0B+",
        description: "Downloads for all games",
    },
    {
        icon: "https://c.animaapp.com/qfXs9GxT/img/01-1@2x.png",
        value: "4 Years",
        description: "Games published in the App Store",
    },
    {
        icon: "https://c.animaapp.com/qfXs9GxT/img/01-2@2x.png",
        value: "100+",
        description: "Developers partnering All Around The World",
    },
];

const downloadButtons = [
    {
        icon: "https://c.animaapp.com/qfXs9GxT/img/icon-1@2x.png",
        store: "Apple App Store",
        label: "Download from",
        variant: "default" as const,
        className: "bg-[#1d1f38]",
    },
    {
        icon: "https://c.animaapp.com/qfXs9GxT/img/vector-3.svg",
        store: "Google Play Store",
        label: "Get It On",
        variant: "outline" as const,
        className: "bg-[#f6f8ff] border-[#1259dd]",
    },
    {
        icon: "https://c.animaapp.com/qfXs9GxT/img/steam--1--1.svg",
        store: "Steam",
        label: "Download from",
        variant: "default" as const,
        className: "bg-[#1259dd]",
    },
];

export const Games = (): JSX.Element => {
    return (
        <div className="bg-[#f7f9fc] min-h-screen">
            {/* Hero Section */}
            <section className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-full h-[833px] object-cover"
                    alt="Hero"
                    src="https://c.animaapp.com/qfXs9GxT/img/hero.png"

                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[237.449px] h-[436.732px] top-[350px] left-[1446px]"
                    alt="Illustration"
                    src="https://c.animaapp.com/c8vOIei8/img/illustration@2x.png"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[226.631px] h-[226.631px] top-[625px] left-[0px]"
                    alt="Illustration"
                    src="https://ik.imagekit.io/3paggvhlz/img.png?updatedAt=1739275168786"
                />

                {/* Stats Cards */}
                <div className="container flex gap-3.5 -mt-44 relative z-10 w-fit pl-72">
                    {stats.map((stat, index) => (
                        <Card key={index} className="flex-1 bg-white/80 backdrop-blur-lg">
                            <CardContent className="flex items-center gap-7 p-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="w-[82px] h-[82px]"
                                    alt="Stat icon"
                                    src={stat.icon}
                                />
                                <div className="flex flex-col gap-2.5">
                                    <CardTitle className="font-conthrax text-4xl text-[#000b33]">
                                        {stat.value}
                                    </CardTitle>
                                    <CardDescription className="text-[#666679] font-medium">
                                        {stat.description}
                                    </CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Game Feature Section */}
            <section className="relative py-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Background"
                    src="https://c.animaapp.com/qfXs9GxT/img/bg.png"
                />

                <div className="container">
                    <Card className="w-[508px] ml-auto">
                        <CardContent className="p-6 space-y-6">
                            <div
                                className="relative h-[352px] bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage:
                                        "url(https://c.animaapp.com/qfXs9GxT/img/placeholder@2x.png)",
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108px]"
                                    alt="Play"
                                    src="https://c.animaapp.com/qfXs9GxT/img/play@2x.png"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-5">
                                    <div className="space-y-2.5">
                                        <h3 className="font-conthrax font-semibold text-xl text-[#000b33]">
                                            Flippy race
                                        </h3>
                                        <p className="text-[#1259dd] text-lg">Aim Game</p>
                                    </div>

                                    <Separator />

                                    <p className="text-[#6f6f81] text-[15px] leading-[25px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry&#39;s
                                        standard dummy text ever since the 1500s
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <p className="font-semibold text-xl text-[#f28500]">
                                        2M Downloads
                                    </p>

                                    <div className="space-y-6">
                                        {downloadButtons.map((button, index) => (
                                            <Button
                                                key={index}
                                                variant={button.variant}
                                                className={`w-full justify-start gap-4 ${button.className}`}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    className="w-7 h-7"
                                                    alt={`${button.store} icon`}
                                                    src={button.icon}
                                                />
                                                <div className="flex flex-col items-start">
                                                    <span className="text-sm">{button.label}</span>
                                                    <span className="font-semibold">{button.store}</span>
                                                </div>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <h2 className="text-6xl font-bold text-center mb-20">
                How do you think we can improve
                <span className="block text-[57px] text-transparent bg-clip-text [-webkit-text-stroke:2px_#1760df]">
              our games?
            </span>
            </h2>
            {/*Footer*/}
            <footer className="relative flex flex-col h-fit">
                <div className="bg-[url('https://c.animaapp.com/c8vOIei8/img/shape.svg')] bg-cover bg-center w-full h-[529px] justify-end flex flex-col items-center">
                    <div className="grid grid-cols-4 gap-4 w-[1400px]">
                        {/* Logo and Social Section */}
                        <div className="flex flex-col gap-4">
                            <img src="https://c.animaapp.com/c8vOIei8/img/frame-2121450128.svg" alt="Logo" className="w-32" />
                            <p className="text-[#fbf9ff] text-lg leading-relaxed font-extrabold">
                                Open an account in minutes,
                                get full Control for much longer.
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full bg-white/10 hover:bg-white/20"
                                >
                                    <FacebookIcon className="h-5 w-5 text-white" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full bg-white/10 hover:bg-white/20"
                                >
                                    <Instagram className="h-5 w-5 text-white" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full bg-white/10 hover:bg-white/20"
                                >
                                    <Twitter className="h-5 w-5 text-white" />
                                </Button>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[#fbf9ff] text-base font-semibold">
                                Product
                            </h3>
                            <div className="flex flex-col gap-4">
                                {footerLinks.product.map((link, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-[#b8b8b8] text-base font-medium hover:text-white"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Download App Section */}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white text-base font-semibold">
                                Download App
                            </h3>
                            <div className="flex flex-col gap-4">
                                <Button className="flex items-center gap-4 bg-[#4583f6] hover:bg-[#4583f6]/90 h-[58px] w-[250px] py-3">
                                    <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1838 16.0366C23.1685 13.5775 24.3522 11.7242 26.7426 10.3577C25.4057 8.55489 23.383 7.56334 20.7167 7.37224C18.1922 7.18475 15.4302 8.7568 14.4188 8.7568C13.35 8.7568 10.906 7.43714 8.98288 7.43714C5.01414 7.49483 0.796387 10.4154 0.796387 16.3575C0.796387 18.1134 1.13733 19.927 1.81922 21.7948C2.73096 24.2538 6.01782 30.2788 9.44641 30.1815C11.2392 30.1418 12.5072 28.9844 14.8402 28.9844C17.1043 28.9844 18.2765 30.1815 20.2762 30.1815C23.7354 30.1346 26.7082 24.6576 27.5739 22.1914C22.9348 20.1326 23.1838 16.1628 23.1838 16.0366ZM19.1576 5.0394C21.0998 2.86881 20.9236 0.892926 20.8661 0.182617C19.1499 0.276364 17.1655 1.28233 16.0354 2.51906C14.7904 3.84594 14.0587 5.4865 14.2158 7.33618C16.0699 7.46959 17.7632 6.57179 19.1576 5.0394Z" fill="white"/>
                                    </svg>
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-medium">Download from</span>
                                        <span className="text-base font-semibold">
                      Apple App Store
                    </span>
                                    </div>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-4 bg-white text-[#1d1f38] hover:bg-gray-100 py-3 h-[58px] w-[250px]"
                                >
                                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.7211 10.0619L6.01911 0.569497C4.87265 -0.00332011 3.55636 0.0785109 2.49483 0.692244C1.4333 1.34689 0.796387 2.45161 0.796387 3.67908V22.6639C0.796387 23.8913 1.4333 24.9961 2.53729 25.6507C3.13175 26.019 3.76867 26.1826 4.44804 26.1826C5.00004 26.1826 5.55203 26.0599 6.06157 25.8144L25.7211 16.2811C26.9524 15.6673 27.7167 14.4808 27.7167 13.1715C27.7167 11.8622 26.9524 10.6347 25.7211 10.0619ZM16.5919 7.23873L12.7704 11.9849L4.40558 1.59239C4.74527 1.59239 5.0425 1.67422 5.33973 1.79696L16.5919 7.23873ZM2.28253 22.6639V3.67908C2.28253 3.10626 2.53729 2.53344 3.00437 2.1652L11.8363 13.1715L2.9619 24.1778C2.49483 23.8095 2.28253 23.2367 2.28253 22.6639ZM5.33973 24.5051C5.0425 24.6687 4.70281 24.7097 4.36312 24.7097L12.728 14.3171L16.5495 19.1042L5.33973 24.5051ZM25.0842 15.0127L17.9507 18.4496L13.7046 13.1715L17.9507 7.89338L25.0842 11.3303C25.806 11.6985 26.2731 12.3941 26.2731 13.1715C26.2731 13.9489 25.806 14.6444 25.0842 15.0127Z" fill="#1D1F38"/>
                                    </svg>

                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-medium">Get It On</span>
                                        <span className="text-base font-semibold">
                      Google Play Store
                    </span>
                                    </div>
                                </Button>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[#fbf9ff] text-base font-semibold">
                                Newsletter
                            </h3>
                            <p className="text-neutral-200 text-base font-medium">
                                News, insights and events in your inbox!
                            </p>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Email*"
                                    className="bg-white h-[42px] rounded-[10px]"
                                />
                            </div>
                            <Button className="w-36 h-12 bg-gradient-to-b from-[#FF5858] to-[#F09819] hover:opacity-90">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-16  text-center">
                        <p className="text-neutral-200 text-base font-medium">
                            All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Games;