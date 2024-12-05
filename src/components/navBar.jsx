import { useState, useEffect } from "react";
import { DarkThemeToggle } from "flowbite-react";
import "./navBar.css";
const NavBar = () => {
    const [mode, setMode] = useState("Dark Mode");

    useEffect(() => {
        // Listen for actual theme changes using MutationObserver
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    setMode(isDark ? "Light Mode" : "Dark Mode");
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="text-light-mode-text dark:text-dark-mode-text bg-white z-50 dark:bg-dark-mode-element relative navbar-shadow transition-all duration-300 ease-in-out ">
            <nav className="py-2 w-[90%] m-auto flex justify-between items-center">
                <h1 className="font-Ns-bold font-black sm:text-xl text-base">
                    Where in the world
                </h1>
                <div className="flex items-center gap-2">
                    <DarkThemeToggle />
                    <span className="text-sm font-Ns-regular">{mode}</span>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;