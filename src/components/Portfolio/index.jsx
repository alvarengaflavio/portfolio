import IMG1 from "@assets/portfolio1.jpg";
import IMG2 from "@assets/portfolio2.jpg";
import IMG3 from "@assets/portfolio3.jpg";
import IMG4 from "@assets/portfolio4.jpg";
import IMG5 from "@assets/portfolio5.png";
import IMG6 from "@assets/portfolio6.jpg";
import { ProjectCard } from "./ProjectCard";
import "./Portfolio.css";

const data = [
  {
    image: IMG1,
    title: "Title of Project 1",
    github: "https://github.com/alvalenda/project",
    demo: "https://liveversionoftheproject.com",
  },
  {
    image: IMG2,
    title: "Title of Project 2",
    github: "https://github.com/alvalenda/project",
    demo: "https://liveversionoftheproject.com",
  },
  {
    image: IMG3,
    title: "Title of Project 3",
    github: "https://github.com/alvalenda/project",
    demo: "https://liveversionoftheproject.com",
  },
  {
    image: IMG4,
    title: "Title of Project 4",
    github: "https://github.com/alvalenda/project",
    demo: "https://liveversionoftheproject.com",
  },
  {
    image: IMG5,
    title: "Title of Project 5",
    github: "https://github.com/alvalenda/project",
    demo: "https://liveversionoftheproject.com",
  },
  {
    image: IMG6,
    title: "Title of Project 6",
    github: "https://github.com/alvalenda/project",
    demo: "https://liveversionoftheproject.com",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => (
          <ProjectCard project={item} number={index} />
        ))}
      </div>
    </section>
  );
};
