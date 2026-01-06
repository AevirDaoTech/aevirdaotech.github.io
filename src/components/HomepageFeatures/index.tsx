import type { ReactNode } from "react";

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-grid-pattern bg-[size:40px_40px] opacity-60"></div>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-transparent via-gray-100 to-transparent -z-10 blur-3xl"></div>

          <h1 className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-aevir-black mb-4">
            AEVIR
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="font-orbitron font-bold text-3xl sm:text-5xl lg:text-6xl text-aevir-orange tracking-widest uppercase">
              Protocol
            </h2>

            <div className="relative transform translate-y-1">
              <div className="absolute inset-0 bg-aevir-gray skew-x-[-10deg] opacity-20"></div>
              <div className="relative border border-solid border-aevir-black px-3 py-1 skew-x-[-10deg]">
                <span className="block skew-x-[10deg] font-orbitron text-xs sm:text-sm font-bold text-aevir-black tracking-wider">
                  DOCS
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-space font-light">
            The Infrastructure for Decentralized Collective Intelligence
          </p>

          <div className="mt-10 mb-12">
            <a
              className="group no-underline relative inline-flex items-center justify-center px-10 py-4 font-orbitron font-bold text-white transition-all duration-200 bg-aevir-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aevir-black hover:bg-aevir-orange hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              href="/docs/category/aevir-overview"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative text-lg tracking-wider">
                GET STARTED
              </span>
              <svg
                className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 opacity-30">
            <div className="h-[1px] w-16 bg-aevir-black"></div>
            <div className="w-2 h-2 bg-aevir-orange rotate-45"></div>
            <div className="h-[1px] w-16 bg-aevir-black"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card rounded-none group relative p-8 bg-white border border-aevir-gray hover:border-aevir-orange transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
              <div className="hud-corner top-0 left-0 border-t-2 border-l-2 border-r-0 border-b-0"></div>
              <div className="hud-corner bottom-0 right-0 border-b-2 border-r-2 border-l-0 border-t-0"></div>

              <div className="h-32 flex justify-center items-center mb-6 relative">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="animate-float"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#D9D9D9"
                    strokeWidth="1"
                    fill="none"
                    className="animate-spin-slow"
                    strokeDasharray="10 5"
                  ></circle>

                  <path
                    d="M50 20 L80 75 L20 75 Z"
                    stroke="#FF6820"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse-glow"
                  ></path>

                  <path
                    d="M50 35 L65 65 L35 65 Z"
                    fill="#FF6820"
                    fillOpacity="0.1"
                  ></path>

                  <circle cx="50" cy="20" r="2" fill="#0A0A0F"></circle>
                  <circle cx="80" cy="75" r="2" fill="#0A0A0F"></circle>
                  <circle cx="20" cy="75" r="2" fill="#0A0A0F"></circle>
                </svg>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-4 text-center group-hover:text-aevir-orange transition-colors">
                PoIC CONSENSUS
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Fair launch mechanism rewarding miners based on computational
                power and data contribution.
              </p>
            </div>

            <div className="card rounded-none group relative p-8 bg-white border border-aevir-gray hover:border-aevir-orange transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
              <div className="hud-corner top-0 right-0 border-t-2 border-r-2 border-l-0 border-b-0"></div>
              <div className="hud-corner bottom-0 left-0 border-b-2 border-l-2 border-r-0 border-t-0"></div>

              <div className="h-32 flex justify-center items-center mb-6 relative">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  className="animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <defs>
                    <clipPath id="clip-para">
                      <path d="M30 20 H110 L90 60 H10 Z"></path>
                    </clipPath>
                  </defs>

                  <path
                    d="M30 20 H110 L90 60 H10 Z"
                    stroke="#D9D9D9"
                    strokeWidth="1"
                    fill="none"
                  ></path>

                  <path
                    d="M35 25 H105 L85 55 H15 Z"
                    stroke="#FF6820"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse-glow"
                  ></path>

                  <g clipPath="url(#clip-para)">
                    <rect
                      x="0"
                      y="0"
                      width="120"
                      height="10"
                      fill="#FF6820"
                      fillOpacity="0.2"
                      className="animate-scan"
                    ></rect>
                  </g>

                  <line
                    x1="10"
                    y1="60"
                    x2="0"
                    y2="80"
                    stroke="#0A0A0F"
                    strokeWidth="1"
                    opacity="0.5"
                  ></line>
                  <line
                    x1="110"
                    y1="20"
                    x2="120"
                    y2="0"
                    stroke="#0A0A0F"
                    strokeWidth="1"
                    opacity="0.5"
                  ></line>
                </svg>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-4 text-center group-hover:text-aevir-orange transition-colors">
                D-MoE ARCHITECTURE
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Train vertical AI models locally. Breaking data silos while
                preserving absolute privacy.
              </p>
            </div>

            <div className="card rounded-none group relative p-8 bg-white border border-aevir-gray hover:border-aevir-orange transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
              <div className="hud-corner top-0 left-0 border-t-2 border-l-2 border-r-0 border-b-0"></div>
              <div className="hud-corner top-0 right-0 border-t-2 border-r-2 border-l-0 border-b-0"></div>

              <div className="h-32 flex justify-center items-center mb-6 relative">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <path
                    d="M20 20 V80 H80"
                    stroke="#D9D9D9"
                    strokeWidth="1"
                    fill="none"
                  ></path>
                  <path
                    d="M20 50 H80"
                    stroke="#D9D9D9"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  ></path>
                  <path
                    d="M50 20 V80"
                    stroke="#D9D9D9"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                  ></path>

                  <path
                    d="M25 75 L50 50 L75 25"
                    stroke="#FF6820"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0, 100"
                      to="100, 0"
                      dur="2s"
                      fill="freeze"
                      repeatCount="indefinite"
                    ></animate>
                  </path>

                  <circle cx="25" cy="75" r="3" fill="#0A0A0F"></circle>
                  <circle cx="50" cy="50" r="3" fill="#0A0A0F"></circle>
                  <circle cx="75" cy="25" r="3" fill="#0A0A0F"></circle>

                  <path
                    d="M25 75 L50 50 L75 25 V75 H25 Z"
                    fill="#FF6820"
                    fillOpacity="0.1"
                  ></path>
                </svg>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-4 text-center group-hover:text-aevir-orange transition-colors">
                DUAL-TOKEN ECONOMY
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Robust system with $AEV for governance and $AUV for utility,
                ensuring sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
