import React ,{useState  }from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from "react-scroll";
import logo from "../../img/Logi.png";

function Navbar() {
  const { t } = useTranslation()


  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  const change=(option)=>{
    localStorage.setItem('lang',option.target.value);
       window.location.reload();
  }
  window.addEventListener("scroll", changeBackground);
        const lang = localStorage.getItem('lang')||"en";

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
      <li>
    
          <a href="/">{t("Home")}</a>
        </li>
        <li>
        
         <a href="/#Product">{t("Product")}</a>
        </li>
        <li>
        <a href="/#why-us">{t("Whyus")}</a>
        </li>
        <li>
        
        <a href="/#Service">{t("Service")}</a>

        </li>
        <li>
        
        <a href="/#about">{t("About")}</a>

        </li>
      
        
        <li>
        <a href="/#clients">{t("Client")}</a>
        </li>

        <li>
        <a href="/#Contact">{t("Contact")}</a>
        </li>
        <li>
        <div class="select">
         <div className="select-style">
        <select  onChange={change} value ={lang}>
        <option value="en">English</option>
        <option value="ar">عربى</option>
        </select>
        </div>
      </div>
        </li>
   
      </ul>
    </nav>
  );
}

export default Navbar;
