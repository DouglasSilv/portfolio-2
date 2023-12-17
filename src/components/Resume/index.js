import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next';
import Java from '../../Icons/Java';
import Spring from '../../Icons/Spring';

function Resume() {
  const { t } = useTranslation();

  return (
    <div className="card-resume">
        <div className="card-resume-title">{t('aboutMe')}</div>
        <div className="card-resume-description card-resume-about">
          {t('aboutMeDescription')} 
        </div>
        <div className="card-resume-attributes">
          <div className="card-resume-description">{t('residence')}.... Brazil</div>
          <div className="card-resume-description">{t('age')} 24</div>
        </div>
        <div className="card-resume-title">{t('mainStack')}</div>
        <div className="card-resume-stack">
          <Java/>
          <Spring/>
        </div>
    </div>
  )
}

export default Resume
