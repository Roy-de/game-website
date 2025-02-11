import {ChevronRightCircleIcon, FacebookIcon, Instagram, Twitter} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, {JSX} from "react";

const footerLinks = {
    product: [
        "Manage your Cap Table",
        "Raise Capital",
        "Start/Manage Option Plan"
    ]
}

const categories = [
    { name: "Bosses", active: true },
    { name: "Build Guides", active: false },
    { name: "Strategy", active: false },
    { name: "Sourcing", active: false },
    { name: "Getting Started", active: false },
];

export const BlogDetail = (): JSX.Element => {
    return (
        <div className="bg-[#f7f9fc] flex flex-row justify-center w-full">
            <div className="bg-[#f7f9fc] overflow-hidden w-[1920px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="absolute w-[98px] h-[163px] top-[2701px] left-0"
                    alt="Element"
                    src="https://c.animaapp.com/qAAAG0gN/img/element@2x.png"
                />

                {/* Hero Section */}
                <div className="w-[1920px] h-[583px] bg-[url(https://c.animaapp.com/qAAAG0gN/img/hero.png)] bg-cover">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="absolute w-[227px] h-[222px] top-[361px] left-[1590px]"
                        alt="Element"
                        src="https://c.animaapp.com/qAAAG0gN/img/element-1@2x.png"
                    />
                </div>

                {/* Main Content */}
                <div className="flex gap-12 px-32 py-16 relative">
                    {/* Article Content */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-6">
                            {/* Article Header */}
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[22px] font-medium text-[#000b33] leading-[36.5px]">
                                    Procurement professionals: how to avoid violating compliance
                                </h1>

                                <div className="flex items-center gap-4">
                                    <Badge
                                        variant="outline"
                                        className="text-[#f28500] border-[#e8eaec]"
                                    >
                                        News
                                    </Badge>
                                    <span className="text-sm font-semibold text-[#8c8a94]">
                    Juni 27, 2024
                  </span>
                                    <span className="text-sm font-semibold text-[#f28500]">
                    4 min read
                  </span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <Card className="border-none bg-transparent">
                                <CardContent className="p-0 space-y-6">
                                    <p className="text-lg text-[#6f6f81] leading-[26px]">
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at
                                        its layout. The point of using Lorem Ipsum is that it has a
                                        more-or-less normal distribution of letters, as opposed to
                                        using &#39;Content here, content here&#39;, making it look like
                                        readable English. Many desktop publishing packages and web
                                        page editors now use Lorem Ipsum as their default model
                                        text, and a search for &#39;lorem ipsum&#39; will uncover many web
                                        sites still in their infancy.
                                    </p>

                                    <blockquote className="border-l-4 border-[#26f0fc] pl-8 py-4 text-xl font-bold text-[#6f6f81]">
                                        &#34;Inflation will put more pressure on chief procurement
                                        officers to manage their departments strictly within
                                        budget.&#34;
                                        <br />
                                        <br />- Ardent Partners Annual Research Report
                                    </blockquote>

                                    <div className="w-full h-[411px] rounded-2xl bg-[url(https://c.animaapp.com/qAAAG0gN/img/image.png)] bg-cover" />

                                    {/* Author Card */}
                                    <Card className="bg-[#1d1f38] text-white p-10">
                                        <CardContent className="p-0">
                                            <div className="flex gap-6">
                                                <div className="w-[92px] h-[92px] rounded-full bg-[url(https://c.animaapp.com/qAAAG0gN/img/icon-1@2x.png)] bg-cover" />
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-medium mb-2">
                                                        Gerry Tan
                                                    </h3>
                                                    <p className="text-[#d6d6d6] leading-[26px]">
                                                        A common freelance hiring issue originates from a
                                                        poor chain of custody around worker classification
                                                        data and worker classification itself. Without legal
                                                        worker classification, your organization is in
                                                        danger of costly litigation. If you should get
                                                        audited, could you stand by your worker
                                                        classification procedures?
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <Card className="w-[290px] bg-[#1d1f38] text-white p-8">
                        <CardContent className="p-0">
                            <h2 className="text-lg font-semibold mb-6">Categories</h2>
                            <div className="space-y-6">
                                {categories.map((category) => (
                                    <Button
                                        key={category.name}
                                        variant="ghost"
                                        className={`w-full justify-between ${
                                            category.active ? "text-[#f28500]" : "text-white"
                                        }`}
                                    >
                                        {category.name}
                                        <ChevronRightCircleIcon className="h-6 w-6" />
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                <footer className="relative flex flex-col h-fit">
                    <div className="bg-[url('https://c.animaapp.com/c8vOIei8/img/shape.svg')] bg-cover bg-center w-full h-[529px] justify-end flex flex-col items-center">
                        <div className="grid grid-cols-4 gap-4 w-[1400px]">
                            {/* Logo and Social Section */}
                            <div className="flex flex-col gap-4">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
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
        </div>
    );
};
