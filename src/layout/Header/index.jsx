import React from "react";
import "./index.scss";
import useDarkMode from "../../hooks/useDarkMode";
function Header() {
  const {handleTheme} = useDarkMode();
  return (
    <>
      <section id="header">
        <div className="header_content">
          <h1>Where in the world?</h1>
          <div className="darkmode">
            <button onClick={handleTheme}><i class="fa-regular fa-moon"></i>Dark Mode</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
