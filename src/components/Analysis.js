import useIsVisible from '../hooks/useIsVisible';
import {retry} from '../utils/commonFunctions';

import {useRef, lazy, Suspense} from 'react';
// eslint-disable-next-line
import DWChart from 'react-datawrapper-chart';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';

const Footer = lazy(() => retry(() => import('./Footer')));

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

      <div className="Home" ref={homeRightElement}>
        {(isVisible || location.hash) && (
          <>
            <div className="home-left">
              <DWChart
                title="hospitalization-60days"
                src="https://datawrapper.dwcdn.net/1s4oD/5/"
              />
            </div>
            <div className="home-right">
              <DWChart
                title="hospitalization-total"
                src="https://datawrapper.dwcdn.net/h4L6F/5/"
              />
            </div>
          </>
        )}
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
