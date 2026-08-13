import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FadeUp, GlassBtn } from "./shared";

// ════════════════════════════════════════════
//  Page: Branding detail
// ════════════════════════════════════════════
export default function BrandingPage({ onBack }: { onBack: () => void }) {
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
