import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-80
          w-80
          rounded-full
          bg-orange-100/70
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-20
          h-96
          w-96
          rounded-full
          bg-orange-50
          blur-3xl
        "
      />

      {/* Hero container */}
      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1240px]
          items-center
          gap-8
          px-5
          py-12
          sm:px-8
          sm:py-16
          lg:min-h-[540px]
          lg:grid-cols-2
          lg:gap-10
          lg:px-8
          lg:py-16
          xl:gap-14
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div
          className="
            relative
            z-10
            min-w-0
            max-w-2xl
            lg:translate-x-10
            xl:translate-x-16
          "
        >
          <h1
            className="
              max-w-[650px]
              text-5xl
              font-black
              leading-[0.96]
              tracking-[-0.045em]
              text-slate-950
              sm:text-6xl
              lg:text-[64px]
              xl:text-[68px]
            "
          >
            Build faster.
            <br />
            <span className="text-orange-500">
              Ship smarter.
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-[590px]
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            Simple, fast developer utilities for formatting,
            encoding, hashing, decoding, testing, and everyday
            engineering work.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/tools/json"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-xl
                bg-orange-500
                px-6
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-orange-600
                hover:shadow-xl
                hover:shadow-orange-500/25
                active:translate-y-0
              "
            >
              Explore tools
              <span className="ml-2">→</span>
            </Link>

            <Link
              to="/register"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-xl
                border
                border-slate-300
                bg-white
                px-6
                text-sm
                font-bold
                text-slate-900
                transition-all
                duration-200
                hover:border-orange-300
                hover:bg-orange-50
                hover:text-orange-700
                active:bg-orange-100
              "
            >
              Create free account
            </Link>
          </div>
        </div>

        {/* =========================
            RIGHT IMAGE
        ========================== */}
        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            lg:justify-end
          "
        >
          {/* Soft orange background glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              h-[380px]
              w-[460px]
              -translate-y-1/2
              rounded-full
              bg-orange-100/40
              blur-3xl
            "
          />

          {/* Developer illustration */}
          <div
            className="
              relative
              w-full
              max-w-[460px]
              lg:max-w-[440px]
              xl:max-w-[480px]
            "
          >
            <img
              src="/devtools-hero-illustration.png"
              alt="Developer working with DevTools Hub"
              className="
                relative
                h-auto
                w-full
                object-contain
                mix-blend-multiply
                opacity-[0.96]
                drop-shadow-xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}