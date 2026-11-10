
import { useState } from "react";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  BookOpen,
  Menu,
  X,
  Sparkles,
  HandHeart,
  CheckCircle2,
  Camera,
  Mail,
  ChevronRight,
  Flower2,
} from "lucide-react";
import "./App.css";

const journey = [
  {
    number: "01",
    title: "Learn & Explore",
    description:
      "Understand adoption, explore trusted resources, and discover the steps involved.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Prepare Your Family",
    description:
      "Get guidance, understand requirements, and prepare for the journey ahead.",
    icon: Users,
  },
  {
    number: "03",
    title: "Official Assessment",
    description:
      "Follow the official process with guidance from authorized adoption professionals.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Access reliable information and support throughout your journey.",
    icon: Heart,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Safety Comes First",
    description:
      "A privacy-first experience built around child protection and responsible information sharing.",
  },
  {
    icon: BookOpen,
    title: "Trusted Guidance",
    description:
      "Understand the adoption journey through clear resources and helpful information.",
  },
  {
    icon: HandHeart,
    title: "Family Preparation",
    description:
      "Access preparation checklists and educational resources at every step.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Flower2 size={25} />
          </span>
          <span>
            HopeNest
            <small>EVERY CHILD DESERVES A SAFE FUTURE</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>Our Mission</a>
          <a href="#journey" onClick={closeMenu}>The Journey</a>
          <a href="#resources" onClick={closeMenu}>Resources</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#resources" className="nav-button" onClick={closeMenu}>
            Explore More <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={15} />
              A LITTLE MORE LOVE. A BRIGHTER TOMORROW.
            </div>

            <h1>
              Every child deserves
              <br />
              a place to call
              <br />
              <span>home.</span>
            </h1>

            <p className="hero-description">
              Every family has a story. Every child deserves a future
              filled with love, care and belonging. We're here to make
              the adoption journey easier to understand, one step at a time.
            </p>

            <div className="hero-actions">
              <a href="#journey" className="primary-button">
                Discover the Journey <ArrowRight size={18} />
              </a>
              <a href="#about" className="secondary-button">
                Our Story <span>↗</span>
              </a>
            </div>

            <div className="hero-note">
              <ShieldCheck size={19} />
              <span>Child safety, dignity and privacy always come first.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1100&q=85"
                alt="Warm family moment in a peaceful outdoor setting"
              />
            </div>

            <div className="floating-card">
              <span className="floating-icon">
                <Heart size={22} fill="currentColor" />
              </span>
              <div>
                <strong>Built with care</strong>
                <p>Designed around every child's well-being.</p>
              </div>
            </div>

            <div className="image-decoration">♡</div>
          </div>
        </section>

        {/* Values strip */}
        <section className="values-strip">
          <div>
            <ShieldCheck />
            <span>Safety First</span>
          </div>
          <div>
            <Heart />
            <span>Care & Compassion</span>
          </div>
          <div>
            <Users />
            <span>Family Support</span>
          </div>
          <div>
            <BookOpen />
            <span>Trusted Guidance</span>
          </div>
        </section>

        {/* About */}
        <section className="about section-padding" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85"
              alt="Family spending quality time together"
            />
            <div className="image-caption">
              <Flower2 size={23} />
              <span>Growing together, with love.</span>
            </div>
          </div>

          <div className="about-content">
            <div className="eyebrow">WHO WE ARE</div>
            <h2>
              More than a platform.
              <br />
              <span>A place for hope.</span>
            </h2>
            <p>
              HopeNest is designed to support prospective adoptive
              families with reliable information, preparation resources
              and a clear understanding of the adoption journey.
            </p>
            <p>
              We believe that every journey should be guided by
              compassion, transparency, dignity and respect for children
              and families.
            </p>

            <a href="#journey" className="text-link">
              Discover our approach <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* Mission */}
        <section className="mission">
          <div className="mission-inner">
            <div className="eyebrow light">OUR COMMITMENT</div>
            <h2>
              Love builds families.
              <br />
              <span>Care protects futures.</span>
            </h2>
            <p>
              Our mission is to make adoption information accessible,
              encourage responsible preparation and help families
              navigate the process with confidence.
            </p>
            <div className="mission-points">
              <div>
                <CheckCircle2 />
                <span>Child-centred approach</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Privacy-conscious design</span>
              </div>
              <div>
                <CheckCircle2 />
                <span>Reliable educational resources</span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="journey section-padding" id="journey">
          <div className="section-heading">
            <div className="eyebrow">A JOURNEY OF UNDERSTANDING</div>
            <h2>
              One step at a time.
              <br />
              <span>With support at every step.</span>
            </h2>
            <p>
              Adoption is a meaningful journey. Here's a simple overview
              of the general steps families can learn about.
            </p>
          </div>

          <div className="journey-grid">
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <article className="journey-card" key={item.number}>
                  <div className="journey-top">
                    <span>{item.number}</span>
                    <Icon size={26} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#resources" aria-label={`Explore ${item.title}`}>
                    Explore <ChevronRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
          <p className="legal-note">
            This is a general educational overview, not an official
            adoption procedure. Eligibility, assessment, matching and
            placement are determined only by authorized authorities.
          </p>
        </section>

        {/* Features */}
        <section className="features section-padding" id="resources">
          <div className="section-heading">
            <div className="eyebrow">WHY HOPENEST</div>
            <h2>
              Thoughtfully designed.
              <br />
              <span>With people at heart.</span>
            </h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-icon">
                    <Icon size={27} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="contact">
          <div className="cta-decoration">♡</div>
          <div className="eyebrow light">YOUR JOURNEY STARTS WITH KNOWLEDGE</div>
          <h2>Every beautiful journey begins with a little hope.</h2>
          <p>
            Explore helpful resources and take the time to understand
            the adoption journey.
          </p>
          <a href="#journey" className="cta-button">
            Explore HopeNest <ArrowRight size={18} />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-icon">
                <Flower2 size={25} />
              </span>
              <span>
                HopeNest
                <small>EVERY CHILD DESERVES A SAFE FUTURE</small>
              </span>
            </a>
            <p>
              Building awareness, sharing knowledge and supporting
              responsible adoption journeys.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">Our Mission</a>
            <a href="#journey">The Journey</a>
            <a href="#resources">Resources</a>
          </div>

          <div className="footer-column">
            <h4>Our Values</h4>
            <a href="#about">Child Safety</a>
            <a href="#about">Privacy</a>
            <a href="#about">Family Support</a>
            <a href="#about">Transparency</a>
          </div>

          <div className="footer-column">
            <h4>Stay Connected</h4>
            <p>Have a general question? Get in touch.</p>
            <a href="mailto:hello@hopenest.example">
              <Mail size={16} /> Email Us
            </a>
            <a href="#contact">
              <Camera size={16} /> Follow Our Journey
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 HopeNest. All rights reserved.</span>
          <span>Made with care and compassion <Heart size={14} /></span>
        </div>

        <p className="footer-disclaimer">
          HopeNest is an informational and educational platform.
          It does not conduct official adoption matching or placement.
          Please consult the authorized adoption authorities for official
          procedures.
        </p>
      </footer>
    </div>
  );
}

export default App;
