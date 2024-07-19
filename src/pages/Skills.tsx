import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skillsData } from "../libraries/data";
import { useSectionInView } from "../libraries/hooks";
import Heading from "../components/layouts/Heading";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

function Skills() {
    const { t } = useTranslation();
    const { ref } = useSectionInView("skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <Heading>{t("skills")}</Heading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-black">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;