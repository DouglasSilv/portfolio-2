import React from 'react'
import './styles.css'
import me from '../../images/me.png';
import { useTranslation } from 'react-i18next';

function MainCard() {
  const { t } = useTranslation();

  return (
    <div className="main-card">
        <div className="main-card-name">DOUGLAS SILVA</div>
        <div className="main-card-description">{t('developer')}</div>
        <img className="main-card-image" src={me} alt="A man, smiling with sunglasses"/>
    </div>
  )
}

export default MainCard
