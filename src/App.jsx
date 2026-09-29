
import { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  AudioLines,
  BrainCircuit,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Command,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  Moon,
  Paperclip,
  Puzzle,
  Sparkles,
  Sun,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

import "./App.css";

const features = [
  {
    icon: BrainCircuit,
    title: "Multiple AI Models",
    description:
      "Explore different AI models and find the right assistant for your everyday tasks.",
    tag: "AI POWERED",
  },
  {
    icon: Zap,
    title: "Instant Productivity",
    description:
      "Turn ideas into action with a simple, intuitive workspace designed for speed.",
    tag: "WORK SMARTER",
  },
  {
    icon: MessageSquare,
    title: "Smart Conversations",
    description:
      "Keep your chats organized and return to your conversations whenever you need.",
    tag: "STAY ORGANIZED",
  },
  {
    icon: Puzzle,
    title: "Browser Extension",
    description:
      "Bring your AI workflow closer with a browser extension experience.",
    tag: "QUICK ACCESS",
  },
];

const capabilities = [
  {
    icon: WandSparkles,
    title: "Creative Writing",
    description: "Write, rewrite, brainstorm, and bring your ideas to life.",
  },
  {
    icon: Code2,
    title: "Coding Assistant",
    description: "Explore code, understand concepts, and solve problems.",
  },
  {
    icon: Globe2,
    title: "Research & Learning",
    description: "Explore new topics and break down complex ideas.",
  },
];

const faqs = [
  {
    q: "What is EchoGPT?",
    a: "EchoGPT is an AI assistant platform designed to help you explore AI-powered conversations and productivity workflows.",
  },
  {
    q: "Can I use EchoGPT from my browser?",
    a: "EchoGPT has a web experience and a Chrome Extension. You can explore both through the links on this page.",
  },
  {
    q: "What can I use EchoGPT for?",
    a: "You can explore AI-assisted writing, coding, brainstorming, learning, and other everyday tasks.",
  },
  {
    q: "Does EchoGPT support multiple AI models?",
    a: "EchoGPT presents a multi-AI experience. Available models and features may depend on the current service and your account.",
  },
  {
    q: "Is EchoGPT free to use?",
    a: "Please check the official EchoGPT website for the latest plan details, pricing, and available features.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [dark, setDark] = useState(false);
  const [prompt, setPrompt] = useState("");

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={dark ? "site dark" : "site"}>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <AudioLines size={25} />
          </span>
          <span>Echo<span className="brand-accent">GPT</span></span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#models" onClick={closeMenu}>AI Capabilities</a>
          <a href="#preview" onClick={closeMenu}>Preview</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>

          <a
            href="https://echogpt.live/"
            target="_blank"
            rel="noreferrer"
            className="mobile-start"
            onClick={closeMenu}
          >
            Open EchoGPT <ArrowRight size={16} />
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle color theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://echogpt.live/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary nav-cta"
          >
            Get Started <ArrowRight size={16} />
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR AI WORKSPACE
            </div>

            <h1>
              One workspace.
              <br />
              <span className="gradient-text">Endless possibilities.</span>
            </h1>

            <p className="hero-description">
              Meet EchoGPT — your AI-powered companion for writing, coding,
              learning, and creating. Bring your ideas to life, all in one place.
            </p>

            <div className="hero-actions">
              <a
                href="https://echogpt.live/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-large"
              >
                Start Chatting <ArrowRight size={18} />
              </a>

              <a href="#preview" className="btn btn-secondary btn-large">
                Explore Features <ChevronRight size={18} />
              </a>
            </div>

            <div className="hero-note">
              <span className="avatar-stack">
                <span><Sparkles size={15} /></span>
                <span><BrainCircuit size={15} /></span>
                <span><MessageCircle size={15} /></span>
              </span>
              <p>One place for your everyday AI workflow</p>
            </div>
          </div>

          {/* HERO PRODUCT MOCKUP */}
          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="floating-chip chip-top">
              <span className="chip-icon"><Sparkles size={16} /></span>
              Ideas into action
            </div>

            <div className="chat-window">
              <div className="chat-topbar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-label">EchoGPT Workspace</span>
                <span className="online-dot" />
              </div>

              <div className="chat-content">
                <div className="chat-welcome">
                  <div className="chat-logo">
                    <AudioLines size={25} />
                  </div>
                  <span className="mini-label">YOUR AI ASSISTANT</span>
                  <h3>What can we create today?</h3>
                  <p>Pick an idea and let your creativity flow.</p>
                </div>

                <div className="suggestion-grid">
                  <div className="suggestion-card">
                    <WandSparkles size={18} />
                    <span>Write something creative</span>
                    <ArrowRight size={15} />
                  </div>
                  <div className="suggestion-card">
                    <Code2 size={18} />
                    <span>Help me with code</span>
                    <ArrowRight size={15} />
                  </div>
                  <div className="suggestion-card">
                    <BrainCircuit size={18} />
                    <span>Explain a new topic</span>
                    <ArrowRight size={15} />
                  </div>
                </div>

                <form
                  className="mock-input"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (prompt.trim()) {
                      alert("This is a UI demo. Connect an AI API to get real responses.");
                    }
                  }}
                >
                  <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask EchoGPT anything..."
                    aria-label="Ask EchoGPT anything"
                  />
                  <button type="button" aria-label="Attach file">
                    <Paperclip size={18} />
                  </button>
                  <button type="submit" className="send-btn" aria-label="Send message">
                    <ArrowUp size={20} />
                  </button>
                </form>

                <div className="chat-footnote">
                  <span><Sparkles size={13} /> AI workspace preview</span>
                  <span>Built for ideas</span>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-check"><Check size={15} /></span>
              Your ideas, organized
            </div>
          </div>
        </section>

        {/* TRUST / HIGHLIGHTS */}
        <section className="highlights section-wrap">
          <div className="highlight-item">
            <BrainCircuit size={21} />
            <span>Explore AI Models</span>
          </div>
          <div className="highlight-item">
            <MessageSquare size={21} />
            <span>One AI Workspace</span>
          </div>
          <div className="highlight-item">
            <Puzzle size={21} />
            <span>Browser Extension</span>
          </div>
          <div className="highlight-item">
            <Zap size={21} />
            <span>Everyday Productivity</span>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section section-wrap" id="features">
          <div className="section-heading">
            <span className="section-tag">WHY ECHOGPT</span>
            <h2>
              Everything you need.
              <br />
              <span className="gradient-text">Nothing in your way.</span>
            </h2>
            <p>
              A thoughtful AI experience that keeps your ideas, conversations,
              and creative workflow in one place.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-card-top">
                    <div className={`feature-icon icon-${index}`}>
                      <Icon size={24} />
                    </div>
                    <span className="feature-tag">{feature.tag}</span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <a href="#preview" className="feature-link">
                    Explore feature <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* AI CAPABILITIES */}
        <section className="section capabilities-section" id="models">
          <div className="section-wrap">
            <div className="section-heading">
              <span className="section-tag">YOUR AI TOOLKIT</span>
              <h2>
                One assistant.
                <br />
                <span className="gradient-text">Many ways to create.</span>
              </h2>
              <p>
                From your first idea to your final draft, explore different
                ways AI can support your everyday work.
              </p>
            </div>

            <div className="capability-grid">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className="capability-card" key={item.title}>
                    <div className={`capability-icon cap-${index}`}>
                      <Icon size={25} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href="https://echogpt.live/" target="_blank" rel="noreferrer">
                      Try with EchoGPT <ArrowUpRightIcon />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT PREVIEW */}
        <section className="section section-wrap preview-section" id="preview">
          <div className="preview-copy">
            <span className="section-tag">MADE FOR YOUR FLOW</span>
            <h2>
              Your ideas deserve
              <br />
              <span className="gradient-text">a better workspace.</span>
            </h2>
            <p>
              Explore a clean and intuitive chat experience built to help you
              focus on what matters — your next great idea.
            </p>

            <div className="preview-points">
              <div><Check size={18} /> A clean, focused chat interface</div>
              <div><Check size={18} /> Quick access to your AI workflow</div>
              <div><Check size={18} /> A simple and organized experience</div>
            </div>

            <a
              href="https://echogpt.live/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-large"
            >
              Explore EchoGPT <ArrowRight size={18} />
            </a>
          </div>

          <div className="preview-art">
            <div className="preview-orb orb-one" />
            <div className="preview-orb orb-two" />

            <div className="preview-panel">
              <div className="preview-panel-head">
                <div className="preview-mini-logo"><AudioLines size={18} /></div>
                <div>
                  <strong>EchoGPT</strong>
                  <span>Your AI workspace</span>
                </div>
                <span className="preview-status">Online</span>
              </div>

              <div className="preview-message user-message">
                Help me brainstorm a creative project.
              </div>

              <div className="preview-answer">
                <div className="answer-avatar"><Sparkles size={17} /></div>
                <div>
                  <strong>Let's create something amazing!</strong>
                  <p>
                    We can start with a fresh idea, explore different
                    possibilities, and turn your vision into a plan.
                  </p>
                  <div className="answer-pills">
                    <span>Brainstorm</span>
                    <span>Explore ideas</span>
                  </div>
                </div>
              </div>

              <div className="preview-bottom-input">
                <span>Continue the conversation...</span>
                <span className="preview-send"><ArrowUp size={17} /></span>
              </div>
            </div>

            <div className="preview-floating floating-one">
              <Sparkles size={17} /> Creative flow
            </div>
            <div className="preview-floating floating-two">
              <Check size={17} /> Ideas organized
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-wrap">
          <div className="cta-banner">
            <div className="cta-decoration decoration-one" />
            <div className="cta-decoration decoration-two" />

            <div className="cta-content">
              <span className="cta-tag"><Sparkles size={15} /> YOUR NEXT IDEA STARTS HERE</span>
              <h2>Ready to make something amazing?</h2>
              <p>
                Step into your AI workspace and see where your ideas take you.
              </p>
              <a
                href="https://echogpt.live/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-white btn-large"
              >
                Start Exploring <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-wrap faq-section" id="faq">
          <div className="section-heading">
            <span className="section-tag">GOT QUESTIONS?</span>
            <h2>
              Frequently asked
              <br />
              <span className="gradient-text">questions.</span>
            </h2>
            <p>Everything you need to know before getting started.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? "active" : ""}`}
                key={faq.q}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={openFaq === index ? "faq-chevron rotated" : "faq-chevron"}
                  />
                </button>

                {openFaq === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-wrap">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="brand">
                <span className="brand-icon"><AudioLines size={24} /></span>
                <span>Echo<span className="brand-accent">GPT</span></span>
              </a>
              <p>
                Your ideas, your creativity, your AI workspace.
                Explore what's possible with EchoGPT.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <strong>Explore</strong>
                <a href="#features">Features</a>
                <a href="#models">AI Capabilities</a>
                <a href="#preview">Product Preview</a>
              </div>

              <div>
                <strong>Get Started</strong>
                <a href="https://echogpt.live/" target="_blank" rel="noreferrer">
                  EchoGPT Web App
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chrome Extension
                </a>
                <a href="#faq">FAQs</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 EchoGPT UI Concept. Built for demonstration.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={16} />;
}

export default App;