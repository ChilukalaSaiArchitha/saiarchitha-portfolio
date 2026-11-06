import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Phone, Download, Code2, BrainCircuit, Database, Globe2, Sparkles, Menu, GraduationCap, BriefcaseBusiness, Award, Layers3, ExternalLink } from 'lucide-react';
import './style.css';

const navItems = ['About','Skills','Certifications','Projects','Experience','Education','Contact'];
const skills = [
  { title:'Programming', icon:Code2, items:['Python','JavaScript','SQL','ABAP'] },
  { title:'Web development', icon:Globe2, items:['React.js','HTML','CSS','Responsive UI'] },
  { title:'AI & data', icon:BrainCircuit, items:['TensorFlow','Pandas','NumPy','OpenCV'] },
  { title:'Databases & tools', icon:Database, items:['Firebase Firestore','MySQL','Git','GitHub'] },
];
const certifications = [
  { org:'MICROSOFT', name:'Azure AI Fundamentals', code:'AI-900', detail:'Microsoft Certified' },
  { org:'MICROSOFT', name:'Azure AI Engineer Associate', code:'AI-102', detail:'Microsoft Certified' },
  { org:'SAP', name:'Back-End Developer – ABAP Cloud', code:'GLOBAL CERTIFICATION', detail:'SAP Certified' },
  { org:'AWS', name:'AWS Academy Cloud Foundations', code:'CLOUD FOUNDATIONS', detail:'AWS Academy' },
];
const projects = [
  { n:'01', name:'To-Do Manager App', type:'WEB APPLICATION', desc:'A task management application designed to make everyday planning more organized, with authentication, task management and interface customization.', stack:['Firebase Authentication','Cloud Firestore','CRUD','Drag & drop','Dark mode'], points:['Implemented create, read, update and delete operations.','Added task filtering and due-date management.','Built drag-and-drop task organization and a dark mode.'], visual:'tasks' },
  { n:'02', name:'EmoTune', type:'NLP · MUSIC RECOMMENDATION', desc:'An emotion-based music recommender that uses text emotion analysis to support personalized music recommendations.', stack:['Python','NLP','Pandas','Emotion analysis'], points:['Processed datasets using Python and Pandas.','Developed an emotion-analysis recommendation workflow.','Tested and refined the recommendation process.'], visual:'emotion' },
  { n:'03', name:'Food Recipe Recommender', type:'RECOMMENDATION SYSTEM', desc:'A recipe recommendation system that helps users discover dishes based on their preferences and ingredients available to them.', stack:['Python','Structured data','Ingredient filtering'], points:['Processed structured recipe data.','Filtered recipes using preferences and available ingredients.','Generated relevant recipe suggestions.'], visual:'recipe' },
];
const experience = [
  { company:'Infosys Springboard Internship', date:'SEP 2025 — NOV 2025', text:'Participated in collaborative project activities involving AI-driven solutions and software development. Analyzed datasets and applied problem-solving techniques to assigned technical tasks.' },
  { company:'Google AI-ML Virtual Internship', date:'JAN 2024 — MAR 2024', text:'Worked with Python and TensorFlow on machine learning internship tasks. Processed structured datasets for model development and analysis.' },
];
const education = [
  { date:'2023 — 2027', title:'B.Tech · Artificial Intelligence & Machine Learning', place:'SR University, Warangal' },
  { date:'2021 — 2023', title:'Intermediate · MPC', place:'SR Junior College' },
  { date:'2021', title:'Secondary School Certificate', place:'Indo American School' },
];
const particles = Array.from({length:34},(_,i)=>({left:`${(i*37+11)%100}%`,top:`${(i*61+7)%100}%`,delay:`${(i%9)*-.7}s`,duration:`${7+(i%8)}s`,size: i%5===0?4:2}));
const reveal = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.65,ease:'easeOut'}} };
function SectionHeading({num,kicker,title,sub}) { return <motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} variants={reveal}><span className="eyebrow">{num} / {kicker}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</motion.div> }
function App(){
  const [menu,setMenu]=React.useState(false);
  const [active,setActive]=React.useState('home');
  React.useEffect(()=>{const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:'-35% 0px -55% 0px'});['home',...navItems.map(x=>x.toLowerCase())].forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});return()=>obs.disconnect()},[]);
  const close=()=>setMenu(false);
  return <>
    <div className="grain" aria-hidden="true" />
    <header className="site-header"><nav className="nav-shell"><a className="wordmark" href="#home" onClick={close}>CSA<span>.</span></a><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation"><Menu/></button><div className={`nav-links ${menu?'open':''}`}>{navItems.map((x,i)=><a className={active===x.toLowerCase()?'active':''} key={x} href={`#${x.toLowerCase()}`} onClick={close}><small>0{i+1}</small>{x}</a>)}</div><a className="nav-contact" href="#contact">Let's connect <ArrowUpRight size={15}/></a></nav></header>
    <main>
      <section className="hero" id="home"><div className="particle-field" aria-hidden="true">{particles.map((p,i)=><i key={i} style={{left:p.left,top:p.top,animationDelay:p.delay,animationDuration:p.duration,width:p.size,height:p.size}} />)}</div><div className="hero-inner">
        <motion.div className="hero-content" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.12}}}}>
          <motion.div className="availability" variants={reveal}><span className="availability-dot"/> PORTFOLIO / 2026 <span className="availability-line"/></motion.div>
          <motion.p className="hero-overline" variants={reveal}>HELLO, I'M</motion.p>
          <motion.h1 variants={reveal}>Chilukala Sai<br/><em>Architha</em><span className="hero-period">.</span></motion.h1>
          <motion.p className="hero-role" variants={reveal}>AI & ML STUDENT <b>·</b> ASPIRING SOFTWARE DEVELOPER</motion.p>
          <motion.p className="hero-summary" variants={reveal}>I build thoughtful digital experiences and explore how software, data and AI can turn ideas into useful solutions.</motion.p>
          <motion.div className="hero-buttons" variants={reveal}><a className="button button-light" href="/Architha-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> View resume <ArrowUpRight size={15}/></a><a className="button button-outline" href="#projects">Explore my work <ArrowDown size={15}/></a></motion.div>
          <motion.div className="hero-links" variants={reveal}><a href="mailto:archithachilukala@gmail.com"><Mail size={15}/> Email</a><a href="https://www.linkedin.com/in/saiarchitha/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><a href="https://github.com/ChilukalaSaiArchitha" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a></motion.div>
        </motion.div>
        <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.25}}><div className="visual-halo halo-a"/><div className="visual-halo halo-b"/><div className="visual-ring ring-a"/><div className="visual-ring ring-b"/><div className="visual-core"><span>CSA</span><i>CREATING WITH CURIOSITY</i></div><div className="visual-caption caption-top">CODE / CREATE / ITERATE</div><div className="visual-caption caption-bottom">AI · SOFTWARE · IDEAS</div><span className="visual-cross cross-one">+</span><span className="visual-cross cross-two">+</span></motion.div>
      </div><a className="scroll-indicator" href="#about"><span>SCROLL TO DISCOVER</span><i/></a><div className="hero-index">01 — 08</div></section>

      <section className="section about-section" id="about"><div className="section-wrap"><SectionHeading num="01" kicker="ABOUT ME" title={<>Curiosity, translated<br/><em>into creation.</em></>} sub="A little about the person behind the projects."/><div className="about-layout"><div className="about-statement"><span className="quote-mark">“</span><p>I'm a Computer Science student specializing in <em>Artificial Intelligence & Machine Learning</em> at SR University.</p></div><div className="about-copy"><p>With hands-on experience through academic projects and internships, I'm interested in building reliable, user-focused software and exploring practical applications of AI.</p><p>I enjoy turning ideas into working applications, learning new technologies and refining the details that make digital products useful and intuitive.</p><div className="about-meta"><span><b>BASED IN</b> Warangal, India</span><span><b>GRADUATING</b> 2027</span></div></div></div></div></section>

      <section className="section skills-section" id="skills"><div className="section-wrap"><SectionHeading num="02" kicker="MY TOOLKIT" title={<>Skills that help<br/><em>make things happen.</em></>} sub="Technologies and concepts I've worked with across projects, coursework and internships."/><div className="skills-grid">{skills.map((s,i)=><motion.article className="skill-card" key={s.title} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}><div className="skill-card-head"><span className="skill-icon"><s.icon size={20}/></span><span>0{i+1}</span></div><h3>{s.title}</h3><div className="skill-tags">{s.items.map(t=><span key={t}>{t}</span>)}</div></motion.article>)}</div><div className="core-strip"><span>CORE CONCEPTS</span><p>OOP <b>·</b> Data Structures & Algorithms <b>·</b> Operating Systems <b>·</b> DBMS <b>·</b> Problem Solving</p></div></div></section>

      <section className="section cert-section" id="certifications"><div className="section-wrap"><SectionHeading num="03" kicker="CREDENTIALS" title={<>Learning with<br/><em>purpose.</em></>} sub="Certifications that reflect my continued learning across AI, cloud and software development."/><div className="cert-grid">{certifications.map((c,i)=><motion.article className="cert-card" key={c.code} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}><div className="cert-top"><span className="cert-org">{c.org}</span><Award size={19}/></div><div className="cert-number">0{i+1}</div><h3>{c.name}</h3><p>{c.detail}</p><span className="cert-code">{c.code}</span></motion.article>)}</div><p className="cert-note">Certificate verification links can be added to each credential.</p></div></section>

      <section className="section projects-section" id="projects"><div className="section-wrap"><SectionHeading num="04" kicker="SELECTED WORK" title={<>Ideas made<br/><em>tangible.</em></>} sub="A few projects where I explored a problem, built a solution and learned by doing."/><div className="project-stack">{projects.map((p,i)=><motion.article className={`project-row project-${p.visual}`} key={p.n} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}} variants={reveal}><div className="project-art"><div className="art-label"><span>PROJECT / {p.n}</span><span>CSA — LAB</span></div>{p.visual==='tasks'?<div className="task-ui"><div className="task-ui-head"><span>My workspace</span><b>•••</b></div><div className="task-ui-title">Today's focus <i>＋</i></div><div className="task-line checked"><i>✓</i> Review project notes</div><div className="task-line"><i/> Prepare weekly plan</div><div className="task-line"><i/> Refine interface</div><div className="task-meter"><span/></div><small>STAY ORGANIZED / STAY FOCUSED</small></div>:p.visual==='emotion'?<div className="emotion-art"><div className="emotion-orbit"><span>☺</span></div><p>WORDS → FEELING → SOUND</p><div className="sound-bars">{[20,42,29,56,38,68,32,50,24,44,60,30].map((h,i)=><i key={i} style={{height:h}}/>)}</div></div>:<div className="food-art"><div className="food-plate"><span>✳</span></div><div className="food-copy">INGREDIENTS IN.<br/><em>IDEAS OUT.</em></div><div className="food-orbit"/></div>}</div><div className="project-details"><span className="project-type">{p.type}</span><div className="project-title"><h3>{p.name}</h3><span>{p.n}</span></div><p>{p.desc}</p><ul>{p.points.map(x=><li key={x}>{x}</li>)}</ul><div className="project-tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div></div></motion.article>)}</div><p className="project-footnote">Project details are based on the work described in my resume. Individual repository links can be added when available.</p></div></section>

      <section className="section experience-section" id="experience"><div className="section-wrap"><SectionHeading num="05" kicker="EXPERIENCE" title={<>Learning by<br/><em>doing.</em></>} sub="Internship experiences that helped me connect concepts with practical work."/><div className="experience-list">{experience.map((x,i)=><motion.article className="experience-item" key={x.company} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}><div className="experience-count">0{i+1}</div><div className="experience-main"><span>{x.date}</span><h3>{x.company}</h3><p>{x.text}</p></div><BriefcaseBusiness className="experience-icon" size={22}/></motion.article>)}</div></div></section>

      <section className="section education-section" id="education"><div className="section-wrap"><SectionHeading num="06" kicker="EDUCATION" title={<>Building the<br/><em>foundation.</em></>} sub="The academic journey behind my technical interests."/><div className="education-list">{education.map((e,i)=><motion.article className="education-item" key={e.title} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}><span className="education-date">{e.date}</span><div><h3>{e.title}</h3><p>{e.place}</p></div><GraduationCap size={21}/></motion.article>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="contact-particles" aria-hidden="true">{particles.slice(0,15).map((p,i)=><i key={i} style={{left:p.left,top:p.top,animationDelay:p.delay}}/>)}</div><div className="section-wrap contact-wrap"><span className="eyebrow">07 / GET IN TOUCH</span><h2>Let's make<br/><em>something meaningful.</em></h2><p>Open to connecting about software development, AI/ML, internships and opportunities to learn and contribute.</p><a className="contact-email" href="mailto:archithachilukala@gmail.com">archithachilukala@gmail.com <ArrowUpRight size={19}/></a><div className="contact-links"><a href="tel:9392890795"><Phone size={16}/> +91 93928 90795</a><a href="https://www.linkedin.com/in/saiarchitha/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href="https://github.com/ChilukalaSaiArchitha" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div></div></section>
    </main>
    <footer className="footer"><div className="footer-inner"><a className="wordmark" href="#home">CSA<span>.</span></a><span>© 2026 Chilukala Sai Architha</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
