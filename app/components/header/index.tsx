import ThemeToggle from "@/app/utils/toggle";

const Header = () => {
    return (
        <header className="w-full py-5 px-50 flex justify-between items-center bg-white dark:bg-black">
            <h1 className="text-2xl font-bold text-black dark:text-white">welcome to my website </h1> 
            <nav>
                <ul className="flex space-x-4 items-center">
                    <li className="flex items-center">
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default Header;