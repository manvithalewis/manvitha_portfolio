import { useEffect, ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";


function GlassBtn({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2.5
        rounded-full
        border border-white/20
        bg-white/10
        backdrop-blur-md
        text-white
        hover:bg-white/20
        transition-all duration-300
        shadow-lg
      "
    >
      {children}
    </button>
  );
}


function FadeUp({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


const KNOTLY_SCREENS = [
  {
    img: "/images/knotly/splash.png",
    label: "Splash Screen",
    description:
      "Introduces Knotly through its visual identity and creates a warm, handcrafted first impression for the user.",
  },
  {
    img: "/images/knotly/home.png",
    label: "Home Screen",
    description:
      "Acts as the user's starting point, providing quick access to an ongoing project, wishlist, and saved projects.",
  },
  {
    img: "/images/knotly/ongoing.png",
    label: "Ongoing Project",
    description:
      "Helps users focus on their current crochet project by bringing progress, pattern instructions, round information, and yarn details together.",
  },
];


function KnotlyPage({
  onBack,
}: {
  onBack: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen font-poppins text-white"
      style={{
        background:
          "linear-gradient(to bottom, #000000, #001833)",
      }}
    >

      <div className="fixed top-4 left-6 z-50">
        <GlassBtn onClick={onBack}>
          <span className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back
          </span>
        </GlassBtn>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/20 bg-white/5 text-sm text-white/70">
            <span className="w-2 h-2 rounded-full bg-[#E9A08C]" />
            Ongoing UI/UX Project
          </div>

          {/* Title */}
          <h1 className="font-poppins text-5xl md:text-7xl mb-4">
            Knotly
          </h1>


          {/* Tagline */}
          <p className="text-2xl md:text-3xl mb-5" style={{fontFamily: "'Satisfy', cursive", color: "#E9A08C",}}>
            From inpiration to finished project.
          </p>


          {/* Category */}
          <p className="text-white/60 tracking-widest text-sm">
            PERSONAL UI/UX PROJECT
          </p>
        </motion.div>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-4">
              Project Overview
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              Knotly is a crochet companion app concept designed to help
              crocheters organize their patterns, keep track of ongoing
              projects, save inspiration, and get assistance while working
              through crochet patterns.
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              The idea comes from the everyday difficulties crocheters face
              when managing patterns, remembering projects, understanding
              instructions, and keeping track of materials such as yarn.
            </p>

          </div>

        </FadeUp>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-4">
              Problem Statement
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              Crochet patterns and inspiration are scattered across platforms
              such as YouTube, Pinterest, and Instagram. It can be difficult
              to remember patterns that were previously found, keep track of
              unfinished projects, understand unfamiliar crochet symbols,
              and remember which yarn or materials are being used.
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              Knotly explores how these different parts of the crochet
              experience could be brought together into one simple,
              organized space.
            </p>

          </div>

        </FadeUp>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-4">
              Why Knotly?
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              Crochet is a personal interest of mine, and I wanted to explore
              how a digital product could make the hobby more organized and
              enjoyable.
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              While exploring the idea, I noticed how much of the crochet
              experience happens across different platforms. A pattern might
              be discovered on Pinterest, explained through a YouTube video,
              and then saved somewhere else for later. Knotly was created as
              an exploration of bringing these experiences together.
            </p>

          </div>

        </FadeUp>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            <p className="text-2xl font-bold mb-5">
              Objectives
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-white/85">
              <li>Create a single place to save and organize crochet patterns.</li>
              <li>Help users keep track of their ongoing crochet projects.</li>
              <li>Make crochet pattern information easier to understand.</li>
              <li>Help users keep track of the yarn and materials used in a project.</li>
              <li>Provide assistance when users get stuck while following apattern.</li>
              <li>Make it easier for crocheters to return to projects they have previously saved or started.</li>
            </ul>
          </div>
        </FadeUp>

        <FadeUp className="mb-10">
          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            <p className="text-2xl font-bold mb-4">
              User Journey
            </p>
            <p className="text-lg leading-relaxed text-white/80 mb-8">
              The initial user journey focuses on helping a crocheter quickly
              return to what they were working on instead of searching across
              multiple platforms.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="border border-white/15 rounded-2xl p-5 bg-white/5">
                <p className="font-semibold mb-2">
                  Discover
                </p>
                <p className="text-white/80">
                  Find a crochet pattern or project that interests them.
                </p>
              </div>
              <div className="border border-white/15 rounded-2xl p-5 bg-white/5">
                <p className="font-semibold mb-2">
                  Save
                </p>
                <p className="text-white/80">
                  Save patterns and inspiration for later.
                </p>
              </div>
              <div className="border border-white/15 rounded-2xl p-5 bg-white/5">
                <p className="font-semibold mb-2">
                  Create
                </p>
                <p className="text-white/80">
                  Start a project and keep track of its progress.
                </p>
              </div>
              <div className="border border-white/15 rounded-2xl p-5 bg-white/5">
                <p className="font-semibold mb-2">
                  Continue
                </p>
                <p className="text-white/80">
                  Return to the project and continue from where they stopped.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>


        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-5">
              Design Decisions
            </p>


            <div className="space-y-6">
              <div>
                <p className="text-xl font-semibold mb-2">
                  Focus on the current project
                </p>
                <p className="text-lg leading-relaxed text-white/85">
                  The Home Screen gives priority to the user's ongoing
                  project so they can quickly continue their work without
                  navigating through multiple sections.
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">
                  Quick access to saved inspiration
                </p>
                <p className="text-lg leading-relaxed text-white/85">
                  Wishlist and project sections are surfaced directly on the
                  Home Screen to make saved content easier to revisit.
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">
                  Keep project information together
                </p>
                <p className="text-lg leading-relaxed text-white/85">
                  The Ongoing Project Screen brings progress, round details,
                  pattern instructions, and yarn information into one view.
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold mb-2">
                  Warm and approachable visual language
                </p>
                <p className="text-lg leading-relaxed text-white/85">
                  Soft colors, rounded cards, crochet imagery, and friendly
                  typography were chosen to make the experience feel creative,
                  personal, and welcoming.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>



        <FadeUp className="mb-10">
          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            <p className="text-2xl font-bold mb-2">
              Visual Design
            </p>
            <p className="text-lg leading-relaxed text-white/85 mb-8">
              The visual direction was designed to feel soft, handcrafted,
              playful, and approachable while maintaining enough structure
              for a functional productivity experience.
            </p>

            <div className="mb-10">
                <p className="text-xl font-semibold mb-3">
                    Logo & Identity
                </p>

                <p className="text-lg leading-relaxed text-white/85 mb-6">
                    The Knotly identity combines crochet-inspired imagery with soft handwritten typography. The yarn and crochet elements communicate the purpose of the app while the flowing wordmark gives it a personal and handcrafted character.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-w-md rounded-2xl overflow-hidden"
                    >
                    <img
                        src="/images/knotly/main_img.png"
                        alt="Knotly Logo"
                        className="w-full h-auto object-contain"
                    />
                    </motion.div>
                </div>
            </div>


            <div className="mb-10">

              <p className="text-xl font-semibold mb-3">
                Color Palette
              </p>

              <p className="text-lg leading-relaxed text-white/85 mb-8">
                The palette uses soft cream and warm peach tones to create a
                cozy handmade feeling, while darker text and neutral tones
                provide contrast and readability.
              </p>


              <div className="flex flex-wrap justify-center gap-8">

                {[
                  {
                    hex: "#FAF6F1",
                    label: "#FAF6F1",
                  },
                  {
                    hex: "#D98B78",
                    label: "#D98B78",
                  },
                  {
                    hex: "#5A3A2A",
                    label: "#5A3A2A",
                  },
                  {
                    hex: "#F6E5D7",
                    label: "#F6E5D7",
                  },
                  {
                    hex: "#FFFFFF",
                    label: "#FFFFFF",
                  },
                ].map((c) => (

                  <div
                    key={c.hex}
                    className="flex flex-col items-center gap-2"
                  >

                    <div
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-black/20 shadow-lg"
                      style={{
                        background: c.hex,
                      }}
                    />

                    <span className="text-sm font-mono text-white bg-white/10 px-3 py-1 rounded-full">
                      {c.label}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <p className="text-xl font-semibold mb-3">
                Typography
              </p>

              <p className="text-lg leading-relaxed text-white/85 mb-6">
                A handwritten typeface is used to reinforce the creative,
                handcrafted personality of Knotly, while a clean sans-serif
                typeface keeps interface content readable.
              </p>


              <div className="grid md:grid-cols-2 gap-6">


                 {/* Playwrite US Trad */}
                <div className="border border-white/15 rounded-2xl p-6 bg-white/5">

                    <p className="text-sm text-white/50 tracking-widest mb-3">
                      DISPLAY / BRAND FONT
                    </p>
                    <p className="text-3xl" style={{fontFamily: "'Playwrite US Trad', cursive",}}>
                        Playwrite US Trad
                    </p>
                    <p className="text-xl mt-3" style={{fontFamily: "'Playwrite US Trad', cursive",}}>
                        Knotly
                    </p>
                </div>
                {/* McLaren */}
                <div className="border border-white/15 rounded-2xl p-6 bg-white/5">
                    <p className="text-sm text-white/50 tracking-widest mb-3">
                         UI / BODY FONT
                    </p>
                    <p className="text-3xl" style={{fontFamily: "'McLaren', sans-serif",}}>
                         McLaren
                    </p>
                    <p className="text-xl mt-3" style={{ fontFamily: "'McLaren', sans-serif",}}>
                        Crochet Projects
                    </p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>


        <FadeUp className="mb-10">

          <div className="mb-8">

            <p className="text-2xl font-bold mb-2">
              Initial Design Exploration
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              The first set of screens explores how Knotly can organize the
              crochet experience around projects, saved patterns, and ongoing
              work. These screens represent the current design direction and
              are still being refined as the project develops.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">
            {KNOTLY_SCREENS.map((screen, index) => (
            <motion.div
                key={index}
                whileHover={{
                    y: -6,
                    scale: 1.02,
                }}
                transition={{
                    duration: 0.2,
                }}
                className="rounded-2xl overflow-hidden border border-white/15 bg-white/5"
            >
        <div className="bg-black/20">
            <img
                src={screen.img}
                alt={screen.label}
                className="w-full object-contain"
            />
        </div>
        <div className="p-5">
            <h3 className="font-semibold text-xl mb-3">
            {screen.label}
           </h3>
            <p className="text-base leading-relaxed text-white/65">
                {screen.description}
            </p>
        </div>
        </motion.div>
        ))}

        </div>

        </FadeUp>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-3 h-3 rounded-full bg-[#E9A08C]" />

              <p className="text-2xl font-bold">
                Current Status
              </p>

            </div>
            <p className="text-lg leading-relaxed text-white/85 mb-8">
              Knotly is currently an ongoing UI/UX project. The initial
              concept, problem definition, feature direction, visual identity,
              and first set of screens have been established. The remaining
              core flows are currently being explored and designed.
            </p>
          </div>
        </FadeUp>


        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-4">
              Design Challenges
            </p>

            <ul className="list-disc pl-6 space-y-3 text-lg text-white/85">

              <li>
                Bringing together different parts of the crochet experience
                without making the interface feel overwhelming.
              </li>

              <li>
                Finding a balance between a playful, handcrafted visual style
                and the clarity required for a functional productivity app.
              </li>

              <li>
                Presenting crochet-specific information such as project
                progress, rounds, pattern instructions, and yarn details in a
                way that is easy to scan.
              </li>

              <li>
                Designing an experience that feels useful for crocheters
                working on multiple projects.
              </li>

            </ul>

          </div>

        </FadeUp>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-4">
              What I Learned
            </p>

            <p className="text-lg leading-relaxed text-white/85">
              Working on Knotly helped me think beyond individual screens and
              focus more on the overall user experience. I learned how
              important it is to define the problem and user needs before
              deciding what screens and features an app should contain.
            </p>

            <p className="text-lg leading-relaxed text-white/85 mt-5">
              Since the project is still ongoing, I am also learning how to
              iterate on an idea instead of trying to finalize every design
              immediately. The next stages will allow me to test the current
              direction and improve the experience based on what I learn.
            </p>

          </div>

        </FadeUp>

        <FadeUp className="mb-10">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm">

            <p className="text-2xl font-bold mb-4">
              Next Steps
            </p>

            <p className="text-lg leading-relaxed text-white/85 mb-5">
              The next stage of Knotly will focus on completing the remaining
              core experiences and connecting them into a complete user flow.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-lg text-white/85">

              <li>
                Complete the My Projects and Wishlist experiences.
              </li>

              <li>
                Explore the pattern assistance experience.
              </li>

              <li>
                Design the remaining navigation and profile flows.
              </li>

              <li>
                Create an interactive prototype.
              </li>

              <li>
                Conduct usability testing and refine the interface based on
                feedback.
              </li>

            </ul>

          </div>

        </FadeUp>

        <FadeUp className="mb-12">

          <div className="border border-white/20 rounded-[30px] p-8 md:p-12 bg-white/5 backdrop-blur-sm text-center">

            <p className="text-2xl md:text-3xl font-semibold mb-4">
              A small idea, still taking shape.
            </p>

            <p className="text-lg leading-relaxed text-white/85 max-w-3xl mx-auto">
              Knotly is an ongoing exploration of how thoughtful UX design can
              make a creative hobby more organized, accessible, and enjoyable.
              The current screens establish the foundation, with more of the
              experience still to come.
            </p>

          </div>

        </FadeUp>



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


export default KnotlyPage;