import { ReactNode } from 'react'

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import ThemeSwitch from './components/buttons/ThemeSwitch';
import LanguageSwitch from './components/buttons/LanguageSwitch';
import { Toaster } from 'react-hot-toast';

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-dark-secondary"></div>
            {/* <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

            <main className="flex flex-col items-center px-4">
                <Header />
                {children}
                <Footer />
            </main>

            <Toaster position="top-right" />
            <ThemeSwitch />
            <LanguageSwitch />
        </>
    );
}

export default Layout;