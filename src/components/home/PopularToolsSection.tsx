import { Link } from "react-router-dom";
import { homeTools } from "../../data/homeTools";

export default function PopularToolsSection() {
  return (
    <section
      aria-label="Developer tools"
      className="
        relative
        mx-auto
        w-full
        max-w-[1280px]
        px-6
        py-6
        sm:px-8
        sm:py-8
        lg:px-10
        lg:py-10
      "
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-10
          h-56
          bg-gradient-to-b
          from-orange-50/70
          to-transparent
        "
      />

      {/* Header */}
      <div className="mb-8 pt-0 sm:mb-9 sm:pt-0">
        <h2
          className="
            pt-2
            pb-2
            text-2xl
            font-black
            tracking-tight
            text-slate-950
            sm:text-3xl
          "
        >
          Tools developers use every day
        </h2>

        <p
          className="
            mt-2
            max-w-xl
            pb-2
            text-sm
            leading-7
            text-slate-500
          "
        >
          Quick access to the utilities you reach for most. Fast, focused, and
          always one click away.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-5 lg:gap-4">
        {homeTools.map(({ icon: Icon, label }) => (
          <Link
            key={label}
            to="/login"
            className="
              group
              relative
              flex
              min-h-[118px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-slate-200/80
              bg-white
              p-4
              text-center
              shadow-[0_1px_2px_rgba(15,23,42,0.04)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-orange-200
              hover:shadow-[0_10px_24px_-8px_rgba(249,115,22,0.18)]
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-orange-500/20
            "
          >
            {/* Subtle top highlight on hover */}
            <div
              aria-hidden
              className="
                absolute
                inset-x-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-orange-300/0
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover:via-orange-300/60
                group-hover:opacity-100
              "
            />

            {/* Icon */}
            <span
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-orange-50
                text-orange-500
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:bg-orange-500
                group-hover:text-white
                group-hover:shadow-md
                group-hover:shadow-orange-500/25
              "
            >
              <Icon className="h-5 w-5" strokeWidth={2.2} />
            </span>

            {/* Label */}
            <span
              className="
                mt-3
                block
                text-[13px]
                font-bold
                leading-snug
                tracking-tight
                text-slate-800
                transition-colors
                group-hover:text-slate-950
              "
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}