"use client";
import { useState, useEffect } from 'react';

const Section1 = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="h-screen overflow-hidden">
            <div className="flex h-[70%] px-50">
                {/* Left side - Hero */}
                <div
                    className={`w-[60%] mx-auto h-170 bg-center bg-cover bg-no-repeat flex items-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ backgroundImage: "url('/test.png')" }}
                >
                    <div className="grid grid-cols-1 items-center justify-center">
                        <img 
                            src="/code.png" 
                            alt="" 
                            className={`h-20 w-20 transition-all duration-700 delay-200 ${
                                isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'
                            }`}
                        />
                        <h1 
                            className={`text-black dark:text-white text-6xl font-bold transition-all duration-700 delay-300 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            Sevongsa
                        </h1>
                        <h1 
                            className={`text-black dark:text-white text-6xl font-bold transition-all duration-700 delay-400 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
                            Invongthep.
                        </h1>
                        <div 
                            className={`border-b-6 border-yellow-300 pt-5 transition-all duration-700 delay-500 ${
                                isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
                            }`}
                        />
                    </div>
                </div>

                {/* Right side - Introduction */}
                <div 
                    className={`w-[40%] mx-auto flex flex-col justify-center transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}
                >
                    <h1 
                        className={`text-black dark:text-gray-400 font-medium transition-all duration-700 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                        }`}
                    >
                        - introduction
                    </h1>
                    <h1 
                        className={`text-2xl font-medium text-black dark:text-white pt-4 transition-all duration-700 delay-600 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                        }`}
                    >
                        Developer, base in Thong phan thrng, Laos. <br />
                        I create websites, applications, and everything in between.
                    </h1>
                    <p 
                        className={`pt-5 text-black dark:text-gray-400 leading-relaxed transition-all duration-700 delay-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                        }`}
                    >
                        I believe great results come from curiosity, dedication, and clear communication.
                        I enjoy turning ideas into real, practical solutions while maintaining a strong focus
                        on quality and user experience. Every project is an opportunity to grow, improve,
                        and create something meaningful.
                    </p>
                </div>
            </div>

            {/* Bottom section - Contact */}
            <div 
                className={`relative z-50 h-[30%] bg-gray-100 dark:bg-[#708993] grid grid-cols-2 gap-4 px-50 items-center transition-all duration-1000 delay-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <div>
                    <h1 
                        className={`text-black dark:text-gray-300 font-bold transition-all duration-700 delay-900 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                        }`}
                    >
                        - Contract
                    </h1>
                    <h1 
                        className={`text-2xl font-bold text-black dark:text-gray-300 pt-4 transition-all duration-700 delay-1000 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                        }`}
                    >
                        Any Type of Query & Discussion
                    </h1>
                </div>
                <div>
                    <p 
                        className={`mt-4 text-black font-bold text-base dark:text-gray-200 leading-relaxed whitespace-pre-line transition-all duration-700 delay-1100 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                        }`}
                    >
                        You can't use up creativity,<br />
                        the more you use, the more you have <br />
                        in your significant mind.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section1;