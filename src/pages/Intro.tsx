import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "../libraries/hooks";
import Divider from "../components/layouts/Divider";

function Intro() {
    const { ref } = useSectionInView("home", 0.5);
    const { t, i18n } = useTranslation();
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <section
            ref={ref}
            id="home"
            className="flex flex-col items-center justify-center h-screen max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex flex-col items-center justify-start gap-12 md:flex-row md:gap-20 mb-16">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <img
                            src="/img/perfil.avif"
                            alt="Mauro portrait"
                            width="150"
                            height="150"
                            className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
                <h1 className="md:text-6xl text-4xl font-bold animate-bounce">{t("welcome")}</h1>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-start"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >

                <span className="font-bold">{t("intro")}</span>
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <a
                    aria-label="Contact me"
                    href="#contact"
                    className="group bg-light-primary text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 dark:bg-dark-secondary dark:text-white hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    {t("contact me")}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>

                <a
                    aria-label="Download CV"
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href={`/pdf/CV${i18n.language === 'en' ? '-eng' : ''}.pdf`}
                    download="CV_Mauro_E_Bustos_Roldan.pdf"
                >
                    {t("download")} CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    aria-label="LinkedIn"
                    className="bg-white size-14 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/mauroebr/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    aria-label="GitHub"
                    className="bg-white size-14 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/bustosrme"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
            <Divider />
        </section>
    );
}

export default Intro;