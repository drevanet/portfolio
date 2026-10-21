
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.title} website (opens in a new tab)`}
        className={`project-visual ${project.theme}`}
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 40%, rgba(0,0,0,.45)), url("${project.image}")`,
        }}
      >
        <span className="project-number">{project.number}</span>

        <span className="project-open">
          <ArrowUpRight size={19} />
        </span>

        <span className="project-label">{project.label}</span>
      </a>

      <div className="project-info">
        <div>
          <h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </h3>
          <p>{project.category}</p>
        </div>

        <span>{project.year}</span>
      </div>
    </motion.article>
  );
}
