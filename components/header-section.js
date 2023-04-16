import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import MainMenu from "./main-menu/main-menu";

export default function HeaderSection({ mainMenu }) {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarAreaEl = useRef(null);

  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, []);

  return (
    <header className="header">
      <div
        ref={navbarAreaEl}
        className={`navbar-area ${isNavbarSticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a
                  className="navbar-brand"
                  href="https://buttercms.manasconsults.net"
                >
                  <h3>ManasBlogs</h3>
                  {/* <Image
                                        src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6"
                                        alt="Logo"
                                        width={180}
                                        height={45}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} /> */}
                </a>
                <MainMenu mainMenuLinks={mainMenu} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
