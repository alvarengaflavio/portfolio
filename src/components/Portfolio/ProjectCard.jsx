import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxFromLeft, boxFromRight } from "@/utils/motion";

export const ProjectCard = ({ project, number }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    // every time animation
    inView ? control.start("visible") : control.start("hidden");

    // one time animation
    // inView && control.start("visible");
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={number % 2 === 0 ? boxFromLeft : boxFromRight}
      initial="hidden"
      animate={control}
    >
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={project.image} alt={`image of ${project.title}`} />
        </div>
        <h3>{project.title}</h3>

        <div className="portfolio__item-cta">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Github
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Deploy
          </a>
        </div>
      </article>
    </motion.div>
  );
};
