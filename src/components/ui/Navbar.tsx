// "use client";
// import gsap from "gsap";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// const NavLinks = [
//   {
//     name: "About Me",
//     href: "#about",
//   },
//   {
//     name: "Skills",
//     href: "#skills",
//   },
//   {
//     name: "Projects",
//     href: "#projects",
//   },
//   {
//     name: "Contact Me",
//     href: "#contact",
//   }
// ]
// const Navbar = () => {
//   const navLinkRef = useRef<HTMLSpanElement[]>([]);
//   const navbarRef = useRef<HTMLDivElement>(null);

//   const [showNavbar, setShowNavbar] = React.useState(true);
//   const lastScrollYRef = useRef(0);

//   useEffect(() => {
//     gsap.fromTo(
//       navLinkRef.current,
//       {
//         y: 60,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.2,
//         ease: "power3.out",
//         stagger: 0.1,
//         clearProps: "all",
//       }
//     );
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
//         setShowNavbar(false);
//       } else {
//         setShowNavbar(true);
//       }

//       lastScrollYRef.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <nav
//       ref={navbarRef}
//       className={`z-50  w-full flex justify-between items-center px-40 py-10 fixed top-0 left-0 transition-transform duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
//         }`}
//     >
//       <div className="overflow-hidden">
//         <div
//           ref={(el) => {
//             if (el) navLinkRef.current[0] = el;
//           }}
//           className="flex items-center gap-0.5 font-raleway text-background"
//         >
//           {/* <span className="font-bold text-5xl">R</span>
//           <span className="nav-link text-3xl" style={{ color: "black" }}>
//             iya
//           </span> */}
//         </div>
//       </div>
//       <div className="flex justify-center items-center gap-10 overflow-hidden">
//         {NavLinks.map((link, index) => (
//           <Link
//             href={link.href}
//             key={index}
//             ref={(el) => {
//               if (el) {
//                 navLinkRef.current[index + 1] = el;
//               }
//             }}
//             onClick={(e) => {
//               e.preventDefault();
//               document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="cursor-pointer hover:text-gray-300 transition-colors duration-300 nav-link"
//           >
//             {link.name}
//           </Link>


//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!navbarRef.current) return;

    gsap.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >

      <div className="flex items-center justify-between px-6 py-4 md:px-24 backdrop-blur-md">
    
        <div className="text-xl font-semibold">
          Riya
        </div>

        <div className="hidden md:flex gap-10">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="hover:text-gray-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 backdrop-blur-md">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="text-lg hover:text-gray-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
