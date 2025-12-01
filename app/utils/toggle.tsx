"use client";
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        setIsDark(currentTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const newTheme = isDark ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        setIsDark(!isDark);
    };

    if (!mounted) {
        return (
            <div className="inline-block w-14 h-7 rounded-full bg-gray-300"></div>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-300"
            style={{
                backgroundColor: isDark ? '#6366f1' : '#ccc'
            }}
            aria-label="Toggle theme"
        >
            <span
                className="absolute left-1 inline-block w-5 h-5 bg-white rounded-full transition-transform duration-300 transform"
                style={{
                    transform: isDark ? 'translateX(1.75rem)' : 'translateX(0)'
                }}
            />
            <span
                className="absolute left-2 text-xs transition-opacity duration-300"
                style={{ opacity: isDark ? 0 : 1 }}
            >
                ☀️
            </span>
            <span
                className="absolute right-2 text-xs transition-opacity duration-300"
                style={{ opacity: isDark ? 1 : 0 }}
            >
                🌙
            </span>
        </button>
    );
}