import React, { type ReactNode } from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import Link from "@docusaurus/Link";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      {/* 自定义 Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-orbitron font-bold text-aevir-black mb-4">
                Tutorial
              </h4>
              <ul className="space-y-2 list-none p-0">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-aevir-orange transition-colors no-underline"
                  >
                    Aevirdao Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-orbitron font-bold text-aevir-black mb-4">
                Community
              </h4>
              <ul className="space-y-2 list-none p-0">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-aevir-orange transition-colors flex items-center gap-1 no-underline"
                  >
                    Discord <span className="text-xs">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-aevir-orange transition-colors flex items-center gap-1 no-underline"
                  >
                    X <span className="text-xs">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-orbitron font-bold text-aevir-black mb-4">
                More
              </h4>
              <ul className="space-y-2 list-none p-0">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-aevir-orange transition-colors no-underline"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-aevir-orange transition-colors flex items-center gap-1 no-underline"
                  >
                    GitHub <span className="text-xs">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-solid border-l-0 border-r-0 border-b-0 border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center text-center">
            <p className="text-xs text-gray-400 font-space">
              Copyright © 2025 My Project, Inc. Built with Docusaurus.
            </p>
          </div>
        </div>
      </footer>

      {/* 如果需要保留原始 Footer，取消下面的注释 */}
      {/* <Footer {...props} /> */}
    </>
  );
}
