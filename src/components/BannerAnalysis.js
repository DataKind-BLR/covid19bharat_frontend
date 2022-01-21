import {InfoIcon, ArrowRightIcon} from '@primer/octicons-react';
import {useTranslation} from 'react-i18next';

function BannerAnalysis(props) {
  const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        <div className="alert-icon">
          <InfoIcon size={16} />
        </div>
        <div className="content">
          {'Data on the Analysis page has been sourced from: '}{' '}
        </div>
        <a href="https://ibm.biz/covid-data-india" rel="noreferrer">
          {t('ibm.biz/covid-data-india')}
          <div className="arrow-right-icon">
            <ArrowRightIcon size={16} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default BannerAnalysis;
