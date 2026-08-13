import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FadeUp, GlassBtn } from "./shared";

const LAUNDRY_SCREENS = [
  { img: "/images/laundry/hosteller.png", label: "Hosteller Module" },
  { img: "/images/laundry/outsider.png", label: "Outsider Module" },
  { img: "/images/laundry/admin.png", label: "Admin Module" },
  { img: "/images/laundry/superadmin.png", label: "Super Admin Module" },
];

// ════════════════════════════════════════════
//  Page: Laundry Management System detail
// ════════════════════════════════════════════
export default function LaundryPage({ onBack }: { onBack: () => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div
      className="min-h-screen font-poppins text-white"
      style={{ background: "linear-gradient(to bottom,#000,#001833)" }}
    >
      {/* Back nav */}
      <div className="fixed top-4 left-6 z-50">
        <GlassBtn onClick={onBack}>
          <span className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back
          </span>
        </GlassBtn>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">

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
