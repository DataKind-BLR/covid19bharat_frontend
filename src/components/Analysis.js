import useIsVisible from '../hooks/useIsVisible';
import {retry} from '../utils/commonFunctions';

import {useRef, lazy, Suspense} from 'react';
// eslint-disable-next-line
import DWChart from 'react-datawrapper-chart';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';

const Footer = lazy(() => retry(() => import('./Footer')));
const BannerAnalysis = lazy(() => retry(() => import('./BannerAnalysis')));

function Analysis() {
  const location = useLocation();

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);

  return (
    <>
      <Helmet>
        <title>Coronavirus Outbreak in India - covid19bharat.org</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <BannerAnalysis />

      <div className="Home" ref={homeRightElement}>
        {(isVisible || location.hash) && (
          <>
            <div className="home-left">
              <DWChart
                className="analysis-chart"
                title="delhi-hospitalization"
                src="https://datawrapper.dwcdn.net/kA9vI/1/"
              />
              <DWChart
                className="analysis-chart"
                title="delhi-containment-zones"
                src="https://datawrapper.dwcdn.net/WgMQ1/1/"
              />
            </div>
            <div className="home-right">
              <DWChart
                className="analysis-chart"
                title="delhi-hospitalization-status"
                src="https://datawrapper.dwcdn.net/LJ10m/1/"
              />
              <DWChart
                className="analysis-chart"
                title="delhi-rtpcr"
                src="https://datawrapper.dwcdn.net/NlrvU/1/"
              />
            </div>
          </>
        )}
      </div>
      <div className="Home" ref={homeRightElement}>
        {(isVisible || location.hash) && (
          <>
            <div className="home-left">
              <DWChart
                className="analysis-chart"
                title="goa-hospitalization"
                src="https://datawrapper.dwcdn.net/g7XR5/1/"
              />
            </div>
            <div className="home-right"></div>
          </>
        )}
      </div>
      <div className="Home" ref={homeRightElement}>
        {(isVisible || location.hash) && (
          <>
            <div className="home-left">
              <DWChart
                className="analysis-chart"
                title="haryana-homeisolation"
                src="https://datawrapper.dwcdn.net/eVxp8/1/"
              />
            </div>
            <div className="home-right">
              <DWChart
                className="analysis-chart"
                title="haryana-gender-samples"
                src="https://datawrapper.dwcdn.net/dlD0d/1/"
              />
            </div>
          </>
        )}
      </div>
      <div className="Home" ref={homeRightElement}>
        {(isVisible || location.hash) && (
          <>
            <div className="home-left">
              <DWChart
                className="analysis-chart"
                title="karnataka-gender"
                src="https://datawrapper.dwcdn.net/CoA4j/1/"
              />
            </div>
            <div className="home-right">
              <DWChart
                className="analysis-chart"
                title="kerala-gender"
                src="https://datawrapper.dwcdn.net/jbsvt/1/"
              />
            </div>
            <DWChart
              className="analysis-chart"
              title="karnataka-gender"
              src="https://datawrapper.dwcdn.net/DTh1J/1/"
            />
          </>
        )}
      </div>
      <div className="Home">
        <DWChart
          className="analysis-chart"
          title="kerala-gender"
          src="https://datawrapper.dwcdn.net/0nd9j/1/"
        />
      </div>

      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default Analysis;
