import React, { type ReactNode } from "react";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  return (
    <>
      <nav className="navbar fixed w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a className="flex-shrink-0 flex items-center gap-3 no-underline" href="/">
              <span className="font-orbitron font-bold text-2xl tracking-widest text-aevir-black">
                AEVIR
              </span>
              <div className="relative flex items-center justify-center">
                <span className="font-orbitron text-[10px] font-bold text-aevir-white bg-aevir-black px-2 py-0.5 rounded-sm tracking-wider">
                  DOCS
                </span>
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-gray-300"></div>
              </div>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/docs/category/aevir-overview"
                className="text-sm font-medium text-gray-600 hover:text-aevir-orange transition-colors no-underline"
              >
                Documentation
              </a>
              <a
                href="/blog"
                className="text-sm font-medium text-gray-600 hover:text-aevir-orange transition-colors no-underline"
              >
                Blog
              </a>

              <a href="/Aevir_Litepaper_EN.pdf" target="_blank" className="relative group px-4 py-2 no-underline">
                <span className="relative text-sm font-medium text-aevir-black group-hover:text-aevir-orange transition-colors">
                  Litepaper
                </span>
              </a>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://github.com/AevirDaoTech"
                className="text-sm font-bold text-aevir-orange hover:text-aevir-black transition-colors flex items-center gap-1"
              >
                GitHub <span className="text-lg">→</span>
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="text-aevir-black hover:text-aevir-orange">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
