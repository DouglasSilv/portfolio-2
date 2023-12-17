import React from 'react'
import Download from '../../Icons/Download';
import { useTranslation } from 'react-i18next';
import './styles.css'
import CV from '../../assets/cv.pdf'

function DownloadCV() {
  const { t } = useTranslation();

  return (
    <a className="download-button-container" href={CV} download="CV" target='_blank' rel="noopener noreferrer">
      <div className="download-button-text">
      {t('downloadCV')}
      </div>
      <div className="download-button-icon">
        <Download/>
      </div>
    </a>
  )
}

export default DownloadCV
