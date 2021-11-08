import { API_DOMAIN } from '../constants';

import { memo } from 'react';
import { Twitter, GitHub, Database, Mail, Send } from 'react-feather';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className='link'>
        <a
          href='https://github.com/DataKind-BLR/covid19bharat_data/'
          target='_blank'
          rel='noopener noreferrer'>
          covid19bharat
        </a>
      </div>

      <h5>{t('We stand with everyone fighting on the frontlines')}</h5>

      <div className='links'>
        <a
          href='https://github.com/DataKind-BLR/covid19bharat_frontend'
          className='github'
          target='_blank'
          rel='noopener noreferrer'>
          <GitHub />
        </a>

        <a className='api' href={API_DOMAIN} target='_blank' rel='noopener noreferrer'>
          <Database />
        </a>

        <a
          href='mailto:bangalore@datakind.org'
          className='mail'
          target='_blank'
          rel='noopener noreferrer'>
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default memo(Footer);
