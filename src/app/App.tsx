import { useState, useEffect, useRef, ReactNode, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Mail, ArrowUp, CheckCircle, ChevronDown, ArrowLeft, ExternalLink } from "lucide-react";

// ════════════════════════════════════════════
//  Shared utilities
// ════════════════════════════════════════════

type Page = "home" | "branding" | "laundry";

function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glassmorphism pill button
function GlassBtn({
  onClick,
  children,
  className = "",
  type = "button",
  accent = false,
}: {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  accent?: boolean;
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18 }}
      className={`relative overflow-hidden border border-white/40 rounded-[34px] px-8 py-3 text-lg text-white
        backdrop-blur-md transition-colors duration-200 font-poppins cursor-pointer
        ${accent
          ? "bg-[rgba(7,106,218,0.3)] hover:bg-[rgba(7,106,218,0.5)] shadow-[0_0_24px_rgba(7,106,218,0.3)]"
          : "bg-white/10 hover:bg-white/20 shadow-[0_4px_24px_rgba(255,255,255,0.06)]"}
        ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Section heading
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <FadeUp className="mb-10">
      <h2 className="font-itim text-6xl md:text-7xl text-center text-white leading-tight">
        {children}
      </h2>
    </FadeUp>
  );
}

// Expandable accordion card
function Accordion({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="border border-white/30 rounded-[24px] overflow-hidden backdrop-blur-sm bg-white/5"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-8 py-6 text-left"
      >
        <span className="font-itim text-3xl text-white">{title}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Nav links
const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact Me", id: "contact" },
];

const SKILLS = [
  { title: "UI/UX Design", items: ["Figma", "Prototyping", "Wireframing", "User-Centered Design"] },
  { title: "Development", items: ["HTML", "CSS", "JavaScript", "MERN Stack", "Responsive Design"] },
  { title: "Programming", items: ["C", "Python", "Java"] },
  { title: "Visual Design & Photo Editing", items: ["Canva", "GIMP", "Snapseed", "Poster Design"] },
];

const CERTS = [
  {
    img: "/images/certificates/ux_design.png",
    title: "User Experience Design Fundamentals (IBM SkillBuild)"
  },
  
  {
    img: "/images/certificates/psychology_nptel.png",
    title: "Psychology of Personality and Individual Differences (NPTEL)"
  },
  {
    img: "/images/certificates/aws.png",
    title: "AWS Cloud Practitioner Essential (Simplilearn)"
  },
  {
    img: "/images/certificates/design_implementation.png",
    title: "Design & Implementation of Human-Computer Interfaces (NPTEL)"
  },
  
  {
    img: "/images/certificates/tcs_ion.png",
    title: "TCS iON Career Edge - Young Professional"
  },
  {
    img: "/images/certificates/learn_to_program.png",
    title: "Learn to Program: the Fundamentals (Coursera)"
  },
];
const EDUCATION = [
  {
    school: "St Joseph Engineering College, Mangalore",
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    detail: "2023 – 2027, in progress",
    score: "8.73 CGPA",
  },
  {
    school: "Viveka PU College, Kota, Udupi",
    degree: "PUC — PCMB",
    detail: "2021 – 2023",
    score: "94%",
  },
  {
    school: "Little Rock Indian School, Brahmavar",
    degree: "10th Standard",
    detail: "2021",
    score: "92.6%",
  },
];

const LAUNDRY_SCREENS = [
  { img: "/images/laundry/hosteller.png", label: "Hosteller Module" },
  { img: "/images/laundry/outsider.png", label: "Outsider Module" },
  { img: "/images/laundry/admin.png", label: "Admin Module" },
  { img: "/images/laundry/superadmin.png", label: "Super Admin Module" },
];



// ════════════════════════════════════════════
//  Page: Branding detail
// ════════════════════════════════════════════
function BrandingPage({ onBack }: { onBack: () => void }) {
useEffect(() => { window.scrollTo(0, 0); }, []);

return (
    <div
    className="min-h-screen font-poppins text-white"
style={{ background: "linear-gradient(to bottom,#000,#001833)" }}
>
{/* Back nav */} <div className="fixed top-4 left-6 z-50"> <GlassBtn onClick={onBack}> <span className="flex items-center gap-2"> <ArrowLeft className="w-5 h-5" /> Back </span> </GlassBtn> </div>

```
  <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">

    {/* Hero */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-poppins text-5xl md:text-7xl text-center mb-3">
        Sugar & Lace
      </h1>

      <p className="font-[Satisfy,cursive] text-xl md:text-2xl text-center text-[#ff9d9d] mb-6 italic">
        Baking Sweet Moments, One Slice at a Time.
      </p>

      <p className="text-center text-white/60 tracking-widest text-sm mb-12">
        HOME BAKERY BRANDING PROJECT
      </p>
    </motion.div>


    {/* Problem Statement */}
    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">
        <p className="text-2xl font-bold mb-4">
          Problem Statement
        </p>

        <p className="text-lg leading-relaxed text-white/85">
          Many small home bakeries rely on social media to showcase their
          products but often lack a dedicated digital presence that
          reflects their brand identity and makes it easy for customers
          to explore offerings or get in touch. The challenge was to
          create a clean, visually appealing landing page that
          communicates the bakery's handcrafted quality while providing
          a simple and intuitive user experience.
        </p>
      </div>
    </FadeUp>


    {/* Context and Constraints */}
    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">
        <p className="text-2xl font-bold mb-4">
          Context and Constraints
        </p>

        <p className="text-lg leading-relaxed text-white/85 mb-5">
          Sugar & Lace is a boutique home bakery creating elegant
          handcrafted desserts for life's sweetest celebrations. Every
          cake, cupcake, and pastry is thoughtfully made with artistry,
          warmth, and attention to detail.
        </p>

        <p className="text-lg leading-relaxed text-white/85">
          This was my first independently executed UI/UX project. The
          challenge was to understand the needs of a small home bakery
          business and translate them into a meaningful digital
          experience while keeping the interface simple enough for a
          small business owner to manage and maintain.
        </p>
      </div>
    </FadeUp>


    {/* Target Audience */}
    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          Target Audience
        </p>

        <ul className="list-disc pl-6 space-y-3 text-lg text-white/80">
          <li>
            Young adults seeking aesthetic and customized cakes
          </li>

          <li>
            Couples celebrating special occasions like weddings &
            anniversaries
          </li>

          <li>
            Families planning birthdays and memorable gatherings
          </li>

          <li>
            Event planners looking for visually appealing dessert
            solutions
          </li>

          <li>
            Corporate clients for celebrations, gifting, and events
          </li>
        </ul>

      </div>
    </FadeUp>


    {/* Key Design Decisions */}

    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-8">
          Key Design Decisions
        </p>


        {/* Logo Design */}
        <div className="mb-10">

          <p className="text-xl font-semibold mb-3">
            Logo & Identity
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-8">
            The Sugar & Lace logo reflects the brand's elegant homemade
            identity through soft handwritten typography and a minimalist
            whisk illustration. The flowing curves and warm cocoa tones
            create a cozy yet premium visual experience while keeping the
            identity simple and versatile.
          </p>

          <div className="grid grid-cols-2 gap-6">

            {[
              "/images/branding/logo_dark.png",
              "/images/branding/logo_light.png",
            ].map((src, i) => (

              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Sugar & Lace logo variant ${i + 1}`}
                  className="w-full object-contain p-6"
                />
              </motion.div>

            ))}

          </div>
        </div>


        {/* Color Palette */}
        <div className="mb-10">

          <p className="text-xl font-semibold mb-3">
            Color Palette
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-8">
            The palette combines soft neutrals and warm dessert-inspired
            tones to create a welcoming and premium visual identity.
            Cream and cocoa establish refinement, blush pink adds warmth,
            and a golden accent provides contrast and visual emphasis.
          </p>

          <div className="flex justify-between items-center flex-wrap w-full gap-6">

            {[
              { hex: "#FFF8F2", label: "#FFF8F2" },
              { hex: "#4A1D1F", label: "#4A1D1F" },
              { hex: "#FFFCFC", label: "#FFFCFC" },
              { hex: "#FFDADA", label: "#FFDADA" },
              { hex: "#FCEA2B", label: "#FCEA2B" },
            ].map((c) => (

              <div
                key={c.hex}
                className="flex flex-col items-center gap-2"
              >

                <div
                  className="w-32 h-32 rounded-full border border-black/20 shadow-lg"
                  style={{ background: c.hex }}
                />

                <span className="text-sm font-mono text-white bg-white/10 px-3 py-1 rounded-full">
                  {c.label}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Typography */}
        <div>

          <p className="text-xl font-semibold mb-3">
            Typography
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-6">
            Satisfy brings a soft handwritten feel for headings,
            reinforcing the handcrafted personality of the brand, while
            Poppins provides clean readability for body content and
            navigation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-white/20 rounded-2xl p-6 bg-white/5">

              <p className="text-sm text-white/50 tracking-widest mb-2">
                HEADING FONT
              </p>

              <p
                className="text-3xl"
                style={{ fontFamily: "'Satisfy', cursive" }}
              >
                Satisfy
              </p>

              <p
                className="text-xl mt-2"
                style={{ fontFamily: "'Satisfy', cursive" }}
              >
                Sugar & Lace
              </p>

            </div>


            <div className="border border-white/20 rounded-2xl p-6 bg-white/5">

              <p className="text-sm text-white/50 tracking-widest mb-2">
                BODY FONT
              </p>

              <p className="text-3xl font-poppins">
                Poppins
              </p>

              <p className="text-xl mt-2 font-poppins">
                Sugar & Lace
              </p>

            </div>

          </div>

        </div>

      </div>
    </FadeUp>


    {/* Key Screens */}
    <FadeUp className="mb-10">

      <p className="text-2xl font-bold mb-2">
        Key Screens
      </p>

      <p className="text-lg leading-relaxed text-white/80 mb-6">
        Core screens designed to showcase the brand experience and
        support the customer's journey from discovering the bakery
        to getting in touch.
      </p>


      <div className="grid md:grid-cols-3 gap-6">

        {/* Home Screen */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >

          <img
            src="/images/branding/home.png"
            alt="Sugar & Lace Home Screen"
            className="w-full object-cover"
          />

          <div className="p-4">

            <h3 className="font-medium text-lg mb-2">
              Home Screen
            </h3>

            <p className="text-lg leading-relaxed text-white/80">
              Introduces the brand with a clean layout, featured
              collections, and clear visual hierarchy, allowing visitors
              to quickly understand the bakery and its offerings.
            </p>

          </div>

        </motion.div>


        {/* Categories Screen */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >

          <img
            src="/images/branding/categories.png"
            alt="Sugar & Lace Categories Screen"
            className="w-full object-cover"
          />

          <div className="p-4">

            <h3 className="font-medium text-lg mb-2">
              Categories Screen
            </h3>

            <p className="text-lg leading-relaxed text-white/80">
              Enables users to browse products through organized
              categories and intuitive navigation, making product
              discovery simple and efficient.
            </p>

          </div>

        </motion.div>


        {/* Contact Form Screen */}
        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
        >

          <img
            src="/images/branding/contact form.png"
            alt="Sugar & Lace Contact Form Screen"
            className="w-full object-cover"
          />

          <div className="p-4">

            <h3 className="font-medium text-lg mb-2">
              Contact Form Screen
            </h3>

            <p className="text-lg leading-relaxed text-white/80">
              Provides a simple and accessible way for customers to
              inquire about custom orders and connect with the bakery.
            </p>

          </div>

        </motion.div>

      </div>

    </FadeUp>


    {/* Design Challenges */}
    <FadeUp className="mb-10">

      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          Design Challenges
        </p>

        <ul className="list-disc pl-6 space-y-3 text-lg text-white/85">

          <li>
            Understanding the needs of a small home bakery business
            and translating them into a meaningful digital experience.
          </li>

          <li>
            Balancing aesthetic appeal with usability while ensuring
            the interface remained clean and easy to navigate.
          </li>

          <li>
            Creating a visual identity that feels elegant, handcrafted,
            and consistent across the landing page.
          </li>

          <li>
            Designing a layout that is simple enough for a small
            business to maintain while still delivering a premium
            customer experience.
          </li>

        </ul>

      </div>

    </FadeUp>


    {/* Outcome */}
    <FadeUp className="mb-10">

      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          Outcome
        </p>

        <p className="text-lg leading-relaxed text-white/85">
          The project resulted in a cohesive brand identity and a
          responsive landing page that reflects Sugar & Lace's
          handcrafted values. By combining thoughtful branding, a warm
          visual language, and an intuitive layout, the design creates
          an inviting first impression while making it easy for
          customers to explore the bakery and get in touch.
        </p>

      </div>

    </FadeUp>


    {/* Back to Portfolio */}
    <div className="flex justify-center">

      <GlassBtn onClick={onBack}>

        <span className="flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </span>

      </GlassBtn>

    </div>

  </div>
</div>


);
}


// ════════════════════════════════════════════
//  Page: Laundry Management System detail
// ════════════════════════════════════════════
function LaundryPage({ onBack }: { onBack: () => void }) {
useEffect(() => { window.scrollTo(0, 0); }, []);

return (
<div
className="min-h-screen font-poppins text-white"
style={{ background: "linear-gradient(to bottom,#000,#001833)" }}
>
{/* Back nav */} <div className="fixed top-4 left-6 z-50"> <GlassBtn onClick={onBack}> <span className="flex items-center gap-2"> <ArrowLeft className="w-5 h-5" /> Back </span> </GlassBtn> </div>

```
  <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">

    {/* Hero */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-itim text-4xl md:text-6xl text-center mb-3 leading-tight">
        i-Laundroid: A Laundry Management System
      </h1>

      <p className="text-xl text-center text-white/60 tracking-wider mb-4">
        Role: UI/UX Designer
      </p>

      <p className="text-center text-white/40 tracking-widest text-sm mb-16">
        WEB APPLICATION
      </p>
    </motion.div>


    {/* Overview */}
    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          Overview
        </p>

        <p className="text-lg leading-relaxed text-white/85">
          i-Laundroid is a laundry management web application designed
          to simplify and organize laundry operations across different
          user roles. The system brings together essential workflows
          such as order management, customer management, billing,
          dashboards, and reporting into a structured digital experience.
        </p>

        <p className="text-lg leading-relaxed text-white/85 mt-5">
          I designed the complete user interface with a focus on
          consistency, clear information hierarchy, responsive layouts,
          and efficient navigation across the different modules.
        </p>

      </div>
    </FadeUp>


    {/* Project Details & Contribution */}
    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-6">
          Project Details
        </p>

        <div className="mb-6">

          <p className="text-sm text-white/50 tracking-widest mb-2">
            PROJECT TYPE
          </p>

          <p className="text-lg font-semibold">
            Web Application
          </p>

        </div>


        <div>

          <p className="text-sm text-white/50 tracking-widest mb-3">
            MY CONTRIBUTION
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg text-white/85">

            <li>
              Designed high-fidelity UI screens across the application
            </li>

            <li>
              Created consistent layouts, components, and navigation
              patterns
            </li>

            <li>
              Designed responsive interfaces for different screen sizes
            </li>

            <li>
              Collaborated with developers and stakeholders throughout
              the design process
            </li>

            <li>
              Refined the designs based on feedback and implementation
              requirements
            </li>

          </ul>

        </div>

      </div>
    </FadeUp>


    {/* User Roles & Workflows */}
    <FadeUp className="mb-10">
      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          User Roles & Workflows
        </p>

        <p className="text-lg leading-relaxed text-white/80 mb-8">
          The system was designed around multiple user roles, each with
          dedicated workflows and permissions. The interface adapts the
          available information and actions according to the needs of
          each user.
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          {/* Hosteller */}
          <div className="border border-white/20 rounded-2xl p-6 bg-white/5">

            <p className="text-xl font-semibold mb-3">
              Hosteller Module
            </p>

            <p className="text-base leading-relaxed text-white/70">
              Designed interfaces to support hostellers throughout their
              laundry-related activities, providing access to relevant
              information and actions within their workflow.
            </p>

          </div>


          {/* Outsider / Admin */}
          <div className="border border-white/20 rounded-2xl p-6 bg-white/5">

            <p className="text-xl font-semibold mb-3">
              Outsider / Admin Module
            </p>

            <p className="text-base leading-relaxed text-white/70">
              Designed workflows and interfaces for managing outsider
              laundry activities while keeping operational information
              organized and accessible.
            </p>

          </div>


          {/* Super Admin */}
          <div className="border border-white/20 rounded-2xl p-6 bg-white/5">

            <p className="text-xl font-semibold mb-3">
              Super Admin Module
            </p>

            <p className="text-base leading-relaxed text-white/70">
              Designed administrative interfaces that provide broader
              control over the system, including management and monitoring
              of different operational areas.
            </p>

          </div>

        </div>

      </div>
    </FadeUp>


    {/* Key Screens */}
    <FadeUp className="mb-10">

      <p className="text-2xl font-bold mb-2">
        Key Screens
      </p>

      <p className="text-lg text-white/60 mb-8">
        The application consists of multiple modules designed around
        the specific needs of each user role, including dashboards,
        order management, customer management, billing, reporting,
        and role-specific management screens.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {LAUNDRY_SCREENS.map((s, i) => (

          <motion.div
            key={i}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >

            <img
              src={s.img}
              alt={s.label}
              className="w-full rounded-xl mb-3 shadow-lg"
            />

            <p className="text-base font-bold">
              {s.label}
            </p>

          </motion.div>

        ))}

      </div>

    </FadeUp>


    {/* Visual System */}
    <FadeUp className="mb-10">

      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-8">
          Visual System
        </p>


        {/* Color Palette */}
        <div className="mb-10">

          <p className="text-xl font-semibold mb-3">
            Color Palette
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-8">
            The visual system uses a minimal and professional palette
            to keep the interface clean while providing strong visual
            emphasis for important actions and information.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            {[
              { hex: "#FFFFFF", label: "#FFFFFF" },
              { hex: "#5447E3", label: "#5447E3" },
              { hex: "#000000", label: "#000000" },
            ].map((c) => (

              <div
                key={c.hex}
                className="flex flex-col items-center gap-2"
              >

                <div
                  className="w-32 h-32 rounded-full border border-black/20 shadow-lg"
                  style={{ background: c.hex }}
                />

                <span className="text-sm font-mono text-white bg-white/10 px-3 py-1 rounded-full">
                  {c.label}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Typography */}
        <div>

          <p className="text-xl font-semibold mb-3">
            Typography
          </p>

          <p className="text-lg leading-relaxed text-white/80 mb-6">
            Poppins was used throughout the application to provide
            clean readability and maintain a consistent visual language
            across dashboards, tables, forms, navigation, and other
            interface elements.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-white/20 rounded-2xl p-6 bg-white/5">

              <p className="text-sm text-white/50 tracking-widest mb-2">
                FONT
              </p>

              <p className="text-3xl font-poppins">
                Poppins
              </p>

              <p className="text-xl mt-2 font-poppins">
                i-Laundroid
              </p>

            </div>

          </div>

        </div>

      </div>

    </FadeUp>


    {/* Design Challenges */}
    <FadeUp className="mb-10">

      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          Design Challenges
        </p>

        <ul className="list-disc pl-6 space-y-3 text-lg text-white/85">

          <li>
            Designing interfaces for multiple user roles while
            maintaining a consistent visual experience throughout
            the application.
          </li>

          <li>
            Organizing operational data in a clear and
            easy-to-understand layout so users can quickly find
            relevant information.
          </li>

          <li>
            Creating navigation that supports quick access to
            frequently used features without making the application
            feel overwhelming.
          </li>

        </ul>

      </div>

    </FadeUp>


    {/* Outcome */}
    <FadeUp className="mb-10">

      <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

        <p className="text-2xl font-bold mb-4">
          Outcome
        </p>

        <p className="text-lg leading-relaxed text-white/85">
          Delivered a complete high-fidelity UI design for a multi-module
          laundry management system, creating a consistent and
          user-friendly experience across hostel, outsider, admin, and
          super admin workflows.
        </p>

        <p className="text-lg leading-relaxed text-white/85 mt-5">
          The project strengthened my experience in designing complex
          web applications where different users interact with the same
          system through different workflows and permissions.
        </p>

      </div>

    </FadeUp>


    {/* Figma Button */}
    <div className="flex justify-center mt-12">

      <GlassBtn
        onClick={() =>
          window.open(
            "https://www.figma.com/design/tWtK5PzGIh1WYEpuhRAHHV/Laundry-management-system?node-id=0-1&t=pyAOYulAD3AWuKzo-1",
            "_blank"
          )
        }
      >

        <span className="flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          See full design on Figma
        </span>

      </GlassBtn>

    </div>

  </div>
</div>


);
}

// ════════════════════════════════════════════
//  Page: Main portfolio
// ════════════════════════════════════════════
function Portfolio({ navigate }: { navigate: (p: Page) => void }) {
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const mid = window.scrollY + window.innerHeight / 3;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= mid) { setActiveSection(NAV_LINKS[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen font-poppins text-white scroll-smooth" style={{ background: "linear-gradient(to bottom,#000 0%,#001833 100%)" }}>

      {/* ── Navigation ── */}
<nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
  <motion.div
    initial={{ opacity: 0, y: -24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="
      bg-[rgba(118,182,255,0.18)]
      backdrop-blur-xl
      rounded-[40px]
      px-4 md:px-16
      py-3 md:py-5
      flex flex-wrap justify-center items-center
      gap-3 md:gap-12
      pointer-events-auto
      border border-white/20
      shadow-[0_8px_32px_rgba(118,182,255,0.15)]
    "
  >
    {NAV_LINKS.map((link) => (
      <button
        key={link.id}
        onClick={() => scrollTo(link.id)}
        className={`text-xs md:text-lg whitespace-nowrap transition-all duration-300 hover:text-blue-200 ${
          activeSection === link.id
            ? "font-bold text-white"
            : "font-medium text-white/70"
        }`}
      >
        {link.label}
      </button>
    ))}
  </motion.div>
</nav>

      {/* ── Hero ── */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-right"
          >
            {/* Animated greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-poppins text-white/50 tracking-[0.3em] text-sm mb-4 uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="font-itim text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] leading-tight mb-12">
              {"Hello,\nI'm Manvitha Lewis,\n"}
              <motion.span
                className="text-[#ff9d9d]"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                a UI/UX Designer
              </motion.span>
            </h1>
            <div className="flex flex-wrap gap-5 justify-end">
              <GlassBtn onClick={() => scrollTo("projects")}>See My Projects</GlassBtn>
              <GlassBtn onClick={() => window.open("/resume/Manvitha_Lewis_resume.pdf", "_blank")}> My Resume </GlassBtn>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
  className="relative w-full max-w-[320px] md:w-[450px] xl:w-[550px] flex-shrink-0"
>
  {/* glow behind image */}
  <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full" />

  <motion.img
  src="/images/about/man.jpeg"
  alt="Manvitha Lewis"
  className="
  relative z-10
  w-full
  object-contain
  [mask-image:linear-gradient(to_bottom,transparent_0%,white_15%,white_85%,transparent_100%),linear-gradient(to_right,transparent_0%,white_15%,white_85%,transparent_100%)]
  [mask-composite:intersect]
  [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,white_15%,white_85%,transparent_100%),linear-gradient(to_right,transparent_0%,white_15%,white_85%,transparent_100%)]
  [-webkit-mask-composite:source-in]
"
  animate={{ y: [0, -16, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
/>
</motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>About Me</SectionHeading>

          {/* Short bio */}
          <FadeUp className="mb-10">
            <div className="flex flex-col md:flex-row items-center gap-10 border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">
              <img src="/images/about/man.jpeg" alt="Manvitha" className="w-48 md:w-64 object-contain flex-shrink-0" />
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-white/85">
                <p>{"I'm Manvitha Lewis, a UI/UX Designer passionate about creating simple, user-centered digital experiences."}</p>
                <p>{"Currently pursuing a B.E. in Computer Science Engineering, I combine creativity with technical thinking to design intuitive and visually appealing solutions."}</p>
                <p>I strive to create designs that are not only functional but also meaningful and engaging.</p>
              </div>
            </div>
          </FadeUp>

          {/* Expandable: Education */}
          <FadeUp delay={0.1} className="mb-10">
            <Accordion title="Education">
              <div className="space-y-4">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="border border-white/20 rounded-2xl px-6 py-5 bg-white/5"
                  >
                    <p className="text-white/60 italic text-base mb-1">{edu.school}</p>
                    <p className="font-semibold text-lg">{edu.degree}</p>
                    <p className="text-white/70">{edu.detail} <span className="text-white/90 font-medium">· {edu.score}</span></p>
                  </motion.div>
                ))}
              </div>
            </Accordion>
          </FadeUp>

          {/* Expandable: Languages & Interests */}
          <FadeUp delay={0.15}>
            <Accordion title="Languages & Interests">
              <div className="grid grid-cols-2 gap-6 mt-2">
                {[
                  { title: "Languages", items: ["English", "Hindi", "Kannada", "Konkani", "German"] },
                  { title: "Interests", items: ["Photography", "Singing", "Crocheting", "Drawing", "Playing Instruments"] },
                ].map((box, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-white/20 rounded-2xl px-6 py-5 bg-white/5 text-center"
                  >
                    <p className="font-semibold text-lg mb-3">{box.title}</p>
                    {box.items.map((item) => <p key={item} className="text-white/75 py-0.5">{item}</p>)}
                  </motion.div>
                ))}
              </div>
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>Experience</SectionHeading>
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ borderColor: "rgba(147,197,253,0.5)" }}
              className="border border-white/25 rounded-[30px] px-8 md:px-14 py-12 bg-white/5 backdrop-blur-sm"
            >
              <p className="text-xl md:text-2xl text-center font-semibold tracking-wide leading-snug mb-1">
                Discipline Head | UI/UX Designer @ Nucleus SJEC
              </p>
              <p className="text-base text-center text-white/50 tracking-widest mb-10">January 2026 – Present</p>
              <p className="text-base md:text-lg text-center leading-relaxed text-white/80 mb-4">
                As the Discipline Head and UI/UX Designer at Nucleus Club, I contribute to both event management and creative design initiatives. I oversee coordination and smooth execution of club activities while ensuring effective collaboration.
              </p>
              <p className="text-base md:text-lg text-center leading-relaxed text-white/80">
                {"On the design front, I create user-focused digital assets, promotional materials, and interface designs that enhance the club's visual identity. This role has strengthened my leadership, communication, and design skills."}
              </p>
              <div className="flex justify-center mt-10">
                <GlassBtn onClick={() => navigate("laundry")}>
                  <span className="flex items-center gap-2">See my work <ExternalLink className="w-4 h-4" /></span>
                </GlassBtn>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>My Skills</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {SKILLS.map((skill, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "rgba(147,197,253,0.7)" }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/25 rounded-[30px] px-8 py-10 text-center bg-white/5 backdrop-blur-sm h-full cursor-default"
                >
                  <p className="text-xl font-semibold mb-5">{skill.title}</p>
                  {skill.items.map((item) => <p key={item} className="text-white/75 py-0.5">{item}</p>)}
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <SectionHeading>Certifications</SectionHeading>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {CERTS.map((cert, i) => (
    <FadeUp key={i} delay={(i % 2) * 0.12}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col h-full text-center rounded-3xl overflow-hidden"
      >
        <div className="h-[300px] flex items-center justify-center">
          <img
            src={cert.img}
            alt={cert.title}
            onClick={() => setSelectedImage(cert.img)}
            className="max-h-full w-full rounded-[32px] shadow-lg object-contain cursor-pointer hover:scale-105 transition"
          />
        </div>

        <p className="mt-4 text-sm md:text-base leading-snug tracking-wide text-white/75">
          {cert.title}
        </p>
      </motion.div>
    </FadeUp>
  ))}
</div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionHeading>Projects</SectionHeading>

          {/* Sugar & Lace */}
          <FadeUp delay={0.1} className="mb-10">
            <motion.div
              whileHover={{ borderColor: "rgba(147,197,253,0.4)" }}
              className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm flex flex-col md:flex-row gap-10 items-start"
            >
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.25 }} className="w-full md:w-72 flex-shrink-0">
                <img
                  src="/images/projects/sugar_and_lace.png"
                  alt="Sugar & Lace"
                  className="w-full rounded-2xl shadow-2xl object-cover cursor-pointer hover:scale-105 transition"
                />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-itim text-3xl md:text-4xl mb-5 leading-snug">Sugar & Lace — Home Bakery Landing Page</h3>
                <p className="text-base md:text-lg leading-relaxed text-white/80 mb-8">
                  Designed a user-friendly bakery landing page in Figma, focusing on a clean layout, strong visual branding, and smooth user experience. The design emphasizes clear product categorization, custom cake ordering, and intuitive interaction.
                </p>
                <div className="flex flex-wrap gap-5">
                  <GlassBtn
                    onClick={() =>
                      window.open(
                        "https://www.figma.com/proto/n1P6akXhNwonoH0llJoYpP/sugar-and-lace-bakery-website?node-id=42-180&p=f&viewport=514%2C261%2C0.04&t=GXLQLlKRqhGB0x3m-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=42%3A180&page-id=0%3A1&show-proto-sidebar=1",
                        "_blank"
                      )
                    }
                  > Prototype </GlassBtn>
                  <GlassBtn onClick={() => navigate("branding")}>
                    <span className="flex items-center gap-2">More Details <ExternalLink className="w-4 h-4" /></span>
                  </GlassBtn>
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* i-laundroid */}
          <FadeUp delay={0.1} className="mb-10">
            <motion.div
              whileHover={{ borderColor: "rgba(147,197,253,0.4)" }}
              className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm flex flex-col md:flex-row gap-10 items-start"
            >
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.25 }} className="w-full md:w-72 flex-shrink-0">
                <img
                  src="/images/projects/laundry_system.png"
                  alt="i-laundroid"
                  className="w-full rounded-2xl shadow-2xl object-cover cursor-pointer hover:scale-105 transition"
                />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-itim text-3xl md:text-4xl mb-5 leading-snug">i-Laundroid: A Laundry Management System</h3>
                <p className="text-base md:text-lg leading-relaxed text-white/80 mb-8">
                  Designed the complete user interface for a laundry management web application, including dashboard, order management, customer management, billing, and reporting modules.
                </p>
                <div className="flex flex-wrap gap-5">
                  <GlassBtn
                    onClick={() =>
                      window.open(
                        "https://www.figma.com/design/tWtK5PzGIh1WYEpuhRAHHV/Laundry-management-system?node-id=0-1&t=pyAOYulAD3AWuKzo-1",
                        "_blank"
                      )
                    }
                  >Design</GlassBtn>
                  <GlassBtn onClick={() => navigate("laundry")}>
                    <span className="flex items-center gap-2">More Details <ExternalLink className="w-4 h-4" /></span>
                  </GlassBtn>
                </div>
              </div>
            </motion.div>
          </FadeUp>
          </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Contact Me</SectionHeading>

          <FadeUp delay={0.1}>
  <div className="text-center py-12">
    <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
      I'm always open to discussing new opportunities, collaborations,
      internships, and creative projects.
      <br />
      Feel free to reach out anytime!
    </p>

    <GlassBtn
      onClick={() =>
        window.location.href =
          "mailto:manvithajlewis05@gmail.com?subject=Let's Connect"
      }
      accent
      className="px-10 py-4"
    >
      Email Me
    </GlassBtn>
  </div>
</FadeUp>

          <FadeUp delay={0.2} className="mt-10 text-center">
            <div className="flex items-center gap-5 mb-6">
              <div className="flex-1 h-px bg-white/25" />
              <span className="text-base tracking-[0.4em] font-thin">OR</span>
              <div className="flex-1 h-px bg-white/25" />
            </div>
            <p className="text-lg tracking-[0.3em] font-thin mb-7 text-white/70">Connect with me on:</p>
            <div className="flex gap-8 justify-center">
              {[
                { icon: <Linkedin className="w-8 h-8" />, href: "https://in.linkedin.com/in/manvitha-lewis", label: "LinkedIn" },
                { icon: <Github className="w-8 h-8" />, href: "https://github.com/manvithalewis", label: "GitHub" },
                { icon: <Mail className="w-8 h-8" />, href: "mailto:manvithajlewis05@gmail.com", label: "Email" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.25, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/20 py-8 text-center">
        <p className="text-sm tracking-[0.25em] text-white/40 font-thin leading-loose">
          @2026 Manvitha Lewis. All rights reserved<br />
          Designed & Built with passion.
        </p>
      </footer>

      {/* ── Scroll to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center hover:bg-white/20 transition-colors shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-6 right-8 text-white text-5xl z-[1000]"
      >
        ×
      </button>

      <motion.img
        src={selectedImage}
        alt="Preview"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[95vw] max-h-[95vh] rounded-3xl shadow-2xl"
      />
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

// ════════════════════════════════════════════
//  Root: handles page routing
// ════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <AnimatePresence mode="wait">
      {page === "home" && (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <Portfolio navigate={setPage} />
        </motion.div>
      )}
      {page === "branding" && (
        <motion.div key="branding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <BrandingPage onBack={() => setPage("home")} />
        </motion.div>
      )}
      {page === "laundry" && (
        <motion.div key="laundry" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <LaundryPage onBack={() => setPage("home")} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
