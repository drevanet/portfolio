"use client";

import { motion } from "framer-motion";
import { Braces, Boxes, Database, Figma, Globe2, Layers3, Palette, Zap } from "lucide-react";

const technologies = [
  { name: "Next.js", type: "Web framework", icon: Globe2, tone: "violet" },
  { name: "React", type: "UI library", icon: Boxes, tone: "blue" },
  { name: "TypeScript", type: "Reliable code", icon: Braces, tone: "blue" },
  { name: "Framer Motion", type: "Motion design", icon: Zap, tone: "pink" },
  { name: "Figma", type: "Product design", icon: Figma, tone: "orange" },
  { name: "CSS / WebGL", type: "Visual experiences", icon: Palette, tone: "violet" },
  { name: "Node.js", type: "Backend systems", icon: Layers3, tone: "green" },
  { name: "Databases", type: "Data & content", icon: Database, tone: "blue" },
];

export function TechStack() {
  return (
    <section className="tech-section section-wrap" aria-labelledby="tech-heading">
      <motion.div className="tech-intro" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
        <span className="eyebrow"><span className="status-dot" /> OUR DIGITAL TOOLKIT</span>
        <h2 id="tech-heading">The right tools.<br /><span className="gradient-text">No unnecessary noise.</span></h2>
        <p>We pair proven technology with thoughtful design to make digital products that feel effortless, perform beautifully and scale with your ambition.</p>
      </motion.div>
      <div className="tech-grid">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.article className={`tech-card tech-${tech.tone}`} key={tech.name} initial={{ opacity: 0, y: 20, rotateX: 7 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.48, delay: index * 0.055 }} whileHover={{ y: -6, rotateX: -2, scale: 1.015 }}>
              <div className="tech-icon"><Icon size={21} strokeWidth={1.7} /></div>
              <div className="tech-card-copy"><h3>{tech.name}</h3><p>{tech.type}</p></div>
              <span className="tech-arrow">↗</span>
            </motion.article>
          );
        })}
      </div>
      <motion.div className="tech-footnote" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
        <span className="tech-footnote-line" /><span>BUILT FOR SPEED · DESIGNED FOR PEOPLE · READY TO SCALE</span><span className="tech-footnote-line" />
      </motion.div>
    </section>
  );
}
