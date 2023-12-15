import React from 'react'
import Download from '../../Icons/Download';
import { useTranslation } from 'react-i18next';
import './styles.css'

function DownloadCV() {
  const { t } = useTranslation();

  return (
    <div className="download-button-container">
      <div>
      {t('downloadCV')}
      </div>
      <div>
        <Download/>
      </div>
    </div>
  )
}

export default DownloadCV
