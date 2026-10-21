
import type { Metadata } from "next";
import { Reveal } from "../../components/Reveal";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="page-hero section-wrap">
        <Reveal>
          <span className="eyebrow">SELECTED WORK</span>

          <h1>
            Made with intent.
            <br />
            <span className="gradient-text">Built to matter.</span>
          </h1>

          <p>
            A selection of concepts and studio projects showing how
            strategy, design and technology come together.
          </p>
        </Reveal>
      </section>

      <section className="section-wrap section-pad">
        <div className="projects-grid portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <p className="portfolio-note">
          Portfolio entries shown here are illustrative concept projects.
        </p>
      </section>
    </main>
  );
}
