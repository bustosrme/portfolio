import React from "react";
import { useTranslation } from "react-i18next";
import Heading from "../components/layouts/Heading";
import { educationData } from "../libraries/data";
import { useSectionInView } from "../libraries/hooks";
import { useTheme } from "../context/theme-context";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";

function Education() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const { ref } = useSectionInView("education");
    return (
        <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <Heading>{t("education")}</Heading>
            <VerticalTimeline lineColor="">
                {educationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={`${item.date.from} ${item.date.to ? ` - ${t(item.date.to)}` : ""}`}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-bold capitalize text-lg">{t(item.title)}</h3>
                            <h3 className="font-semibold capitalize text-md">{t(item.institution)}</h3>
                            <p className="font-normal !mt-0 text-justify">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-justify"> {t(item.description)} </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}

export default Education;