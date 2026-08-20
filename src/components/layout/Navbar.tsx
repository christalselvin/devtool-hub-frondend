import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

const NAV_ITEMS = [
  { label: "Tools", path: "/tools" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.8]"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          className="fill-current stroke-none"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <span
        aria-hidden="true"
        className="text-[19px] font-black leading-none"
      >
        f
      </span>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <span
        aria-hidden="true"
        className="text-[18px] font-medium leading-none"
      >
        𝕏
      </span>
    ),
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[19px] w-[19px] fill-current"
      >
        <circle cx="12" cy="12" r="9" />

        <circle
          cx="9"
          cy="12"
          r="1.25"
          className="fill-white"
        />

        <circle
          cx="15"
          cy="12"
          r="1.25"
          className="fill-white"
        />

        <path
          d="M8.5 15.1c1.8 1.7 5.2 1.7 7 0"
          className="fill-none stroke-white stroke-[1.4]"
        />

        <path
          d="M14.2 5.8l1-2.5 2.3.5"
          className="fill-none stroke-current stroke-[1.2]"
        />

        <circle
          cx="17.7"
          cy="3.8"
          r="1"
          className="fill-current"
        />
      </svg>
    ),
  },
];

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200
        bg-white/95
        shadow-[0_1px_0_rgba(15,23,42,0.03)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[80px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================
            LOGO → HOME
        ========================== */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="group flex shrink-0 items-center gap-3"
          aria-label="DevTools Hub home"
        >
          {!logoError ? (
            <img
              src="/logo.svg"
              alt="DevTools Hub"
              className="
                h-11
                w-auto
                transition-transform
                duration-200
                group-hover:scale-105
                sm:h-12
              "
              onError={() => setLogoError(true)}
            />
          ) : (
            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-orange-500
                font-mono
                text-sm
                font-black
                text-white
                sm:h-12
                sm:w-12
              "
            >
              &lt;/&gt;
            </span>
          )}
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="
                rounded-lg
                px-3
                py-2.5
                text-sm
                font-semibold
                text-slate-800
                transition-colors
                duration-200
                hover:bg-orange-50
                hover:text-orange-600
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =========================
            RIGHT SIDE
            SOCIAL → SEARCH → LOGIN → GET STARTED
        ========================== */}
        <div
          className="
            mr-32
            hidden
            items-center
            gap-4
            lg:flex
          "
        >
          {/* Social media */}
          <div className="flex items-center gap-1.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  text-slate-600
                  transition-colors
                  duration-200
                  hover:bg-orange-50
                  hover:text-orange-600
                "
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white
              text-slate-700
              transition-colors
              duration-200
              hover:border-orange-300
              hover:bg-orange-50
              hover:text-orange-600
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-orange-500/15
            "
          >
            <Search size={19} />
          </button>

          {/* Login + Get started */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/login"
              className="
                flex
                h-11
                items-center
                rounded-lg
                px-3.5
                text-sm
                font-semibold
                text-slate-800
                transition-colors
                duration-200
                hover:bg-slate-50
                hover:text-orange-600
              "
            >
              Login
            </Link>

            <Button
              to="/register"
              className="
                h-11
                rounded-xl
                bg-orange-500
                px-6
                text-sm
                font-bold
                text-white
                shadow-[0_5px_14px_rgba(249,115,22,0.2)]
                transition-all
                duration-200
                hover:bg-orange-600
                hover:shadow-[0_8px_18px_rgba(249,115,22,0.26)]
              "
            >
              Get started
            </Button>
          </div>
        </div>

        {/* =========================
            MOBILE TOGGLE
        ========================== */}
        <button
          type="button"
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((value) => !value)
          }
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-slate-200
            bg-white
            text-slate-700
            transition-colors
            duration-200
            hover:border-orange-300
            hover:bg-orange-50
            hover:text-orange-600
            lg:hidden
          "
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav
            className="
              mx-auto
              flex
              max-w-[640px]
              flex-col
              px-5
              py-6
              sm:px-8
              sm:py-7
            "
            aria-label="Mobile navigation"
          >
            {/* Navigation */}
            <div className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3.5
                    text-base
                    font-semibold
                    text-slate-800
                    transition-colors
                    duration-200
                    hover:bg-orange-50
                    hover:text-orange-600
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="my-6 border-t border-slate-100" />

            {/* Social */}
            <div>
              <p
                className="
                  mb-3
                  px-1
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-slate-400
                "
              >
                Follow us
              </p>

              <div className="flex items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      text-slate-600
                      transition-colors
                      duration-200
                      hover:border-orange-300
                      hover:bg-orange-50
                      hover:text-orange-600
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="my-6 border-t border-slate-100" />

            {/* Mobile actions */}
            <div className="flex flex-col gap-3">
              {/* Get started → Register */}
              <Button
                to="/register"
                fullWidth
                onClick={() => setMobileOpen(false)}
                className="
                  h-12
                  rounded-xl
                  bg-orange-500
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_5px_14px_rgba(249,115,22,0.2)]
                  hover:bg-orange-600
                "
              >
                Get started
              </Button>

              {/* Login */}
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="
                  inline-flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  text-sm
                  font-semibold
                  text-slate-800
                  transition-colors
                  duration-200
                  hover:border-orange-300
                  hover:bg-orange-50
                "
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}