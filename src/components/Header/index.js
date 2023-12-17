import React from 'react'
import './styles.css'
import Linkedin from '../../Icons/Linkedin'
import Instagram from '../../Icons/Instagram'
import GitHub from '../../Icons/GitHub'
import Email from '../../Icons/Email'
import { useTranslation } from 'react-i18next'

function Header() {
  const { i18n, t } = useTranslation();
  const onLanguageClick = languageCode => i18n.changeLanguage(languageCode);

  const openURL = url => window.open(url, "_blank");

  return (
    <header className="header">
        <div className="header-language-menu">
          <div className={i18n.language === 'pt' ? "header-language-menu-item active-item" : "header-language-menu-item"} onClick={() => onLanguageClick('pt')}>
            {t('portuguese')}
          </div>
          <div className={i18n.language === 'en' ? "header-language-menu-item active-item" : "header-language-menu-item"} onClick={() => onLanguageClick('en')}>
            {t('english')}
          </div>
        </div>
        <div className="header-language-menu">
          <div className="header-language-menu-item" onClick={() => openURL("https://www.linkedin.com/in/douglas-s-3ab933121/")}>
            <Linkedin/>
          </div>
          <div className="header-language-menu-item" onClick={() => openURL("https://www.instagram.com/o_douglas_silva")}>
            <Instagram/>
          </div>
          <div className="header-language-menu-item" onClick={() => openURL("https://github.com/DouglasSilv")}>
            <GitHub/>
          </div>
          <div className="header-language-menu-item" onClick={() => openURL("mailto:silvadouglasyt@gmail.com")}>
            <Email/>
          </div>
        </div>
    </header>
  )
}

export default Header
