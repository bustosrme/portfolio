import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/theme-context";
import { useSectionInView } from "../libraries/hooks";
import { discord_notify } from "../accions/notify";

import { useForm, SubmitHandler, Controller } from "react-hook-form"

import Heading from "../components/layouts/Heading";
import { SuccessToast, ErrorToast } from "../components/toasts";

interface IFormInput {
    email: string
    message: string
}


function Contact() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const { ref } = useSectionInView("contact");

    const [submitting, setSubmitting] = useState(false);

    const { control, handleSubmit, reset, } = useForm({
        defaultValues: {
            email: "",
            message: ""
        }
    })

    const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
        setSubmitting(true);
        const response = await discord_notify(`${formData.email} - message: ${formData.message}`);
        if (!response) {
            ErrorToast(theme, t("error sent"));
        } else {
            SuccessToast(theme, t("sent"));
        }
        setSubmitting(false);
        reset();
    }

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center p-8 dark:bg-dark-background dark:bg-opacity-90 dark:text-white/80"
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1, }}
            viewport={{ once: true, }}
        >
            <Heading>{t("contact")}</Heading>

            <p className="text-gray-700 -mt-6 dark:text-white/80 text-justify"
                dangerouslySetInnerHTML={{
                    __html: t('contact description')
                }}
            />

            <form
                id="form"
                className="mt-8 flex flex-col dark:text-black"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <input
                            {...field}
                            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                            placeholder={t("form email")}
                            type="email"
                            maxLength={500}
                            required
                        />
                    )}
                />
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            className="h-52 my-3 rounded-lg borderBlack p-4 dark:text-black dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                            placeholder={t("form message")}
                            name="message"
                            required
                            maxLength={5000}
                        />
                    )}
                />

                <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-dark-secondary dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                    disabled={submitting}
                >
                    {submitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    ) : (
                        <>
                            {t("send")}
                            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                        </>
                    )}
                </button>
            </form>
        </motion.section>
    );
}

export default Contact;