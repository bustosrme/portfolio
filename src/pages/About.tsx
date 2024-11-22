import { motion } from "framer-motion";
import Heading from "../components/layouts/Heading";
import { useSectionInView } from "../libraries/hooks";
import { useTranslation } from "react-i18next";

function About() {
    const { ref } = useSectionInView("about");
    const { t } = useTranslation();
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 mt-20 md:mt-0"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <Heading>{t("about")}</Heading>
            <p
                className="mb-3 text-justify"
                dangerouslySetInnerHTML={{
                    __html: t('bio', {
                        degree: t('degree'),
                    })
                }} >
            </p>
        </motion.section>
    );
}

export default About;