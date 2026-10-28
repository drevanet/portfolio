
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
  Monitor,
  Palette,
  ShoppingBag,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { projects, posts } from "@/lib/content";
import { TechStack } from "@/components/TechStack";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Web Development",
    description:
      "High-performance websites, business platforms, dashboards and web applications engineered to help your business grow.",
    tags: ["Next.js", "React", "Performance"],
    href: "/services",
  },
  {
    number: "02",
    icon: Palette,
    title: "Web Design & UI/UX",
    description:
      "Distinctive website designs, intuitive user journeys and thoughtful interfaces that turn visitors into customers.",
    tags: ["UI/UX", "Responsive design", "Prototyping"],
    href: "/services",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "App Design",
    description:
      "User-friendly mobile and digital product experiences, from early concepts and wireframes to polished interactive prototypes.",
    tags: ["Mobile UI", "Product design", "Design systems"],
    href: "/services",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description:
      "Modern online stores with smooth shopping experiences, clear product presentation and conversion-focused design.",
    tags: ["Online stores", "Checkout UX", "Integrations"],
    href: "/services",
  },
];

const benefits = [
  "Responsive across mobile, tablet and desktop",
  "Performance-minded development",
  "User-focused design decisions",
  "Scalable, maintainable solutions",
];

export default function HomePage() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="hero section-wrap">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow">
                <span className="status-dot" />
                DREVANET DIGITAL STUDIO
                <span className="hero-eyebrow-divider">/</span>
                DESIGN · DEVELOPMENT · DIGITAL PRODUCTS
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1>
                We design.
                <br />
                We build.
                <br />
                <span className="gradient-text">You grow.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="hero-lede">
                We create modern websites, powerful web applications and
                intuitive app designs that help ambitious businesses stand out
                and move forward.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="hero-actions">
                <Link className="button button-primary" href="/contact">
                  Start a project <ArrowUpRight size={17} />
                </Link>

                <Link className="text-link" href="/portfolio">
                  Explore our work <ArrowDownRight size={17} />
                </Link>
              </div>
            </Reveal>

            <div className="hero-proof">
              <div className="avatar-stack">
                <span>D</span>
                <span>R</span>
                <span>V</span>
              </div>

              <p>
                <strong>From concept to launch.</strong>
                <br />
                Digital solutions built around your goals.
              </p>

              <span className="hero-proof-badge">
                <Sparkles size={13} /> BUILT WITH PURPOSE
              </span>
            </div>
          </div>

          {/* DIGITAL PRODUCT VISUAL */}
          <Reveal className="hero-art-wrap" delay={0.12}>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="hero-art">
              <div className="glass-card glass-card-back">
                <span>WEB DEVELOPMENT</span>
                <b>01</b>
              </div>

              <div className="orb">
                <div className="orb-core" />
                <div className="orb-ring" />
              </div>

              <div className="glass-card glass-card-front">
                <span>PRODUCT DESIGN</span>
                <b>↗</b>
              </div>

              <div className="floating-chip chip-top">
                <Code2 size={15} /> DESIGN MEETS CODE
              </div>

              <div className="floating-chip chip-bottom">
                <span className="status-dot" />
                WE BUILD FOR THE WEB
              </div>
            </div>
          </Reveal>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>WEBSITES · WEB APPS · APP DESIGN</span>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          className="hero-metrics section-wrap"
          aria-label="Our digital capabilities"
        >
          <div className="metric-intro">
            <span className="eyebrow">DIGITAL, DONE THOUGHTFULLY</span>
            <p>
              We combine creative thinking with reliable technology to turn
              business ideas into useful digital experiences.
            </p>
          </div>

          <div className="metric-item">
            <Code2 size={25} strokeWidth={1.5} />
            <strong>Web</strong>
            <span>Development</span>
          </div>

          <div className="metric-item">
            <Palette size={25} strokeWidth={1.5} />
            <strong>Web</strong>
            <span>Design & UX</span>
          </div>

          <div className="metric-item">
            <Smartphone size={25} strokeWidth={1.5} />
            <strong>App</strong>
            <span>Design</span>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="marquee-band">
          <div className="marquee-track">
            <span>
              DESIGN WITH PURPOSE ✳ DEVELOP WITH PRECISION ✳ BUILD FOR PEOPLE ✳
              &nbsp;
            </span>
            <span>
              DESIGN WITH PURPOSE ✳ DEVELOP WITH PRECISION ✳ BUILD FOR PEOPLE ✳
              &nbsp;
            </span>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <TechStack />

        {/* SERVICES */}
        <section className="section-wrap section-pad">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">WHAT WE DO BEST</span>
                <h2>
                  Digital solutions.
                  <br />
                  <span className="muted">Designed around you.</span>
                </h2>
              </div>

              <p>
                Whether you need a new website, a web application or an app
                interface, we bring design and engineering together to create
                a digital product with a clear purpose.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.07}>
                  <article className="service-card">
                    <div className="service-top">
                      <span>{service.number}</span>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="section-wrap section-pad">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">HOW WE WORK</span>
                <h2>
                  Clear thinking.
                  <br />
                  <span className="muted">Quality execution.</span>
                </h2>
              </div>

              <p>
                A practical, collaborative process that takes your idea from
                the first conversation to a polished digital experience.
              </p>
            </div>
          </Reveal>

          <div className="services-grid process-grid">
            {[
              {
                n: "01",
                title: "Discover",
                text: "We understand your business, audience, goals and the problem your digital product needs to solve.",
              },
              {
                n: "02",
                title: "Design",
                text: "We shape the structure, user journeys and visual direction before moving into development.",
              },
              {
                n: "03",
                title: "Develop",
                text: "We turn approved designs into responsive, functional websites and digital experiences.",
              },
              {
                n: "04",
                title: "Launch",
                text: "We test, refine and prepare your project for launch, with room for future improvements.",
              },
            ].map((step, index) => (
              <Reveal key={step.n} delay={index * 0.07}>
                <article className="service-card">
                  <div className="service-top">
                    <span>{step.n}</span>
                    <CheckCircle2 size={22} strokeWidth={1.5} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY DREVANET */}
        <section className="about-strip">
          <div className="section-wrap about-strip-inner">
            <Reveal>
              <div>
                <span className="eyebrow">WHY WORK WITH US</span>
                <h2>
                  More than good looks.
                  <br />
                  <span className="muted">
                    Digital products that work.
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p>
                Great digital work needs more than attractive visuals. We
                focus on usability, performance, responsive layouts and
                technology that supports your long-term goals.
              </p>

              <ul className="benefits-list">
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={17} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="button button-outline">
                Meet DREVANET <ArrowUpRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section className="section-wrap section-pad work-section">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">SELECTED PROJECTS</span>
                <h2>
                  Ideas into
                  <br />
                  <span className="gradient-text">digital experiences.</span>
                </h2>
              </div>

              <Link href="/portfolio" className="text-link">
                View all projects <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="projects-grid">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* BLOG */}
        <section className="section-wrap section-pad blog-preview">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">IDEAS & INSIGHTS</span>
                <h2>
                  Thinking about
                  <br />
                  <span className="muted">what comes next.</span>
                </h2>
              </div>

              <Link href="/blog" className="text-link">
                Read the journal <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="blog-grid">
            {posts.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <div className="blog-image">
                    <span>{post.category}</span>
                    <ArrowUpRight size={20} />
                  </div>

                  <div className="blog-meta">
                    {post.date} <span>·</span> {post.readTime}
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section section-wrap">
          <Reveal>
            <div className="cta-card">
              <div className="cta-glow" />

              <span className="eyebrow">
                HAVE A WEBSITE OR APP IDEA?
              </span>

              <h2>
                Let’s build
                <br />
                something <span className="gradient-text">useful.</span>
              </h2>

              <p>
                Tell us about your website, web application or app design
                project. Let’s turn your idea into a digital experience built
                around your goals.
              </p>

              <Link className="button button-light" href="/contact">
                Discuss your project <ArrowRight size={17} />
              </Link>

              <span className="cta-mark">D.</span>
            </div>
          </Reveal>
        </section>
      </main>

      <WhatsAppButton />
    </>
  );
}
