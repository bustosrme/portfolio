import React from "react";
import { useTranslation } from "react-i18next";
import { projectsData } from "../libraries/data";
import { useSectionInView } from "../libraries/hooks";
import Heading from "../components/layouts/Heading";
import ProjectCard from "../components/cards/ProjectCard";

function Projects() {
    const { t } = useTranslation();
    const { ref } = useSectionInView("projects");
    return (
        <section
            ref={ref}
            id="projects" className="scroll-mt-28 mb-28">
            <Heading>{t("projects")}</Heading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <ProjectCard {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Projects;