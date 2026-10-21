import { ArrowDownRight, ArrowUpRight, Code2, Layers3, ShoppingBag, Sparkles, WandSparkles } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { projects, posts } from "@/lib/content";
import { TechStack } from "@/components/TechStack";

export default function HomePage() {
  return <>
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <Reveal><span className="eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL AGENCY <span className="hero-eyebrow-divider">/</span> STRATEGY · DESIGN · CODE</span></Reveal>
          <Reveal delay={0.08}><h1>We make the<br/><span className="gradient-text">digital</span> feel<br/>extraordinary<span className="accent">.</span></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-lede">We design and build ambitious digital experiences for brands ready to move forward.</p></Reveal>
          <Reveal delay={0.24}><div className="hero-actions"><Link className="button button-primary" href="/contact">Start a project <ArrowUpRight size={17}/></Link><Link className="text-link" href="/portfolio">Explore our work <ArrowDownRight size={17}/></Link></div></Reveal>
          <div className="hero-proof"><div className="avatar-stack"><span>D</span><span>R</span><span>V</span></div><p><strong>Small team. Big ideas.</strong><br/>Built around your next big move.</p><span className="hero-proof-badge"><Sparkles size={13}/> MADE WITH INTENTION</span></div>
        </div>
        <Reveal className="hero-art-wrap" delay={0.12}>
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
          <div className="hero-art">
            <div className="glass-card glass-card-back"><span>CREATIVE</span><b>01</b></div>
            <div className="orb"><div className="orb-core"/><div className="orb-ring"/></div>
            <div className="glass-card glass-card-front"><span>DEVELOPMENT</span><b>↗</b></div>
            <div className="floating-chip chip-top"><Sparkles size={15}/> MADE TO MATTER</div>
            <div className="floating-chip chip-bottom"><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS</div>
          </div>
        </Reveal>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>DESIGN · TECHNOLOGY · MOTION</span></div>
      </section>

      <section className="hero-metrics section-wrap" aria-label="DREVANET at a glance">
        <div className="metric-intro"><span className="eyebrow">SMALL STUDIO. BIG ENERGY.</span><p>We turn complex ideas into clear, confident digital experiences.</p></div>
        <div className="metric-item"><strong>01<span>—</span></strong><span>Curious by nature</span></div>
        <div className="metric-item"><strong>∞</strong><span>Ideas in motion</span></div>
        <div className="metric-item"><strong>24<span>/7</span></strong><span>Built for the web</span></div>
      </section>

      <section className="marquee-band"><div className="marquee-track"><span>DESIGN WITH INTENT ✳ BUILD WITH PURPOSE ✳ MAKE AN IMPACT ✳&nbsp;</span><span>DESIGN WITH INTENT ✳ BUILD WITH PURPOSE ✳ MAKE AN IMPACT ✳&nbsp;</span></div></section>

      <TechStack />

      <section className="section-wrap section-pad">
        <Reveal><div className="section-heading"><div><span className="eyebrow">WHAT WE DO</span><h2>Digital craft.<br/><span className="muted">Real-world impact.</span></h2></div><p>From the first sketch to the final launch, we bring strategy, design and technology together to create work that works.</p></div></Reveal>
        <div className="services-grid">
          {[{n:"01",icon:Code2,title:"Web development",text:"Fast, accessible, scalable websites and web applications built for people and performance."},{n:"02",icon:WandSparkles,title:"UI/UX & product design",text:"Thoughtful digital journeys, intuitive interfaces and design systems with a clear point of view."},{n:"03",icon:ShoppingBag,title:"E-commerce",text:"Beautiful storefronts and frictionless shopping experiences designed to turn interest into action."},{n:"04",icon:Layers3,title:"Motion & 3D",text:"Dimensional visuals and purposeful motion that make digital experiences feel alive."}].map((s,i)=><Reveal key={s.n} delay={i*.07}><article className="service-card"><div className="service-top"><span>{s.n}</span><s.icon size={23} strokeWidth={1.5}/></div><h3>{s.title}</h3><p>{s.text}</p><Link href="/services" aria-label={`Explore ${s.title}`}><ArrowUpRight size={18}/></Link></article></Reveal>)}
        </div>
      </section>

      <section className="section-wrap section-pad work-section">
        <Reveal><div className="section-heading"><div><span className="eyebrow">SELECTED WORK</span><h2>Ideas, <span className="gradient-text">made real.</span></h2></div><Link href="/portfolio" className="text-link">View all projects <ArrowUpRight size={17}/></Link></div></Reveal>
        <div className="projects-grid">{projects.slice(0,3).map((project,i)=><ProjectCard key={project.slug} project={project} index={i}/>)}</div>
      </section>

      <section className="about-strip"><div className="section-wrap about-strip-inner"><Reveal><div><span className="eyebrow">THE DREVANET APPROACH</span><h2>Good work looks good.<br/><span className="muted">Great work moves you forward.</span></h2></div></Reveal><Reveal delay={.12}><p>We combine clear thinking, brave creativity and dependable engineering to build digital things with a reason to exist.</p><Link href="/about" className="button button-outline">Get to know us <ArrowUpRight size={17}/></Link></Reveal></div></section>

      <section className="section-wrap section-pad blog-preview">
        <Reveal><div className="section-heading"><div><span className="eyebrow">NOTES & IDEAS</span><h2>From the <span className="muted">studio.</span></h2></div><Link href="/blog" className="text-link">Read the journal <ArrowUpRight size={17}/></Link></div></Reveal>
        <div className="blog-grid">{posts.slice(0,3).map((post,i)=><Reveal key={post.slug} delay={i*.07}><Link href={`/blog/${post.slug}`} className="blog-card"><div className="blog-image" style={{backgroundImage:`url(${post.image})`}}><span>{post.category}</span><ArrowUpRight size={20}/></div><div className="blog-meta">{post.date} <span>·</span> {post.readTime}</div><h3>{post.title}</h3><p>{post.excerpt}</p></Link></Reveal>)}</div>
      </section>

      <section className="cta-section section-wrap"><Reveal><div className="cta-card"><div className="cta-glow"/><span className="eyebrow">HAVE A GOOD ONE IN MIND?</span><h2>Let’s make<br/>something <span className="gradient-text">matter.</span></h2><p>Tell us what you’re imagining. We’ll help you figure out what comes next.</p><Link className="button button-light" href="/contact">Let’s talk <ArrowUpRight size={17}/></Link><span className="cta-mark">D.</span></div></Reveal></section>
    </main><WhatsAppButton/>
  </>;
}