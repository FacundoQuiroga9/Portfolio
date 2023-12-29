import './Navbar.css'
import Logo from '../Logo/Logo'
import gb from '../../imagenes/gb.png'
import español from '../../imagenes/es.png'
import { useState } from 'react'
import {useTranslation} from 'react-i18next'

const Navbar = ()=>{
  const [menu, setMenu]= useState(false)
  const [classSpan, setClassSpan] = useState(false)
  const openMenu = ()=>{
    setMenu(!menu)
    setClassSpan(!classSpan)
  }

  const [t, i18n]= useTranslation("global")

  const changeLng=(lng)=>{
    i18n.changeLanguage(lng)
    localStorage.setItem("lng",lng)
  }
  return(
    <header className="header">
        <Logo />
        <button className='header-button' onClick={openMenu}>
          <span className={`top-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`middle-line-${classSpan ? "clicked": "unclicked"}`}></span>
          <span className={`bottom-line-${classSpan ? "clicked": "unclicked"}`}></span>
        </button>
        <nav className={`header-nav ${menu ? "active": ""}`}>
          <ul className="header-ul">
            <li className="header-li" onClick={openMenu}><a href='#about-me' className='header-a'>{t("navbar.about-me")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#skills' className='header-a'>{t("navbar.skills")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#projects' className='header-a'>{t("navbar.projects")}</a></li>
            <li className="header-li" onClick={openMenu}><a href='#contacts' className='header-a'>{t("navbar.contact")}</a></li>
            <ul className='flags'>
              <li className="flag-li" onClick={()=>changeLng("es")}><img src={español} alt="bandera de Brasil" className='flag' /></li>
              <li className="flag-li" onClick={()=>changeLng("en")}><img src={gb} alt="bandera de Gran Betaña" className='flag' /></li>
            </ul>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar
