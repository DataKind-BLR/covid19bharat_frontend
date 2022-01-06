import {API_REFRESH_INTERVAL, DATA_API_ROOT} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {fetcher, retry} from '../utils/commonFunctions';
import DWChart from 'react-datawrapper-chart';
import {useRef, useState, lazy, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useWindowSize} from 'react-use';

const Footer = lazy(() => retry(() => import('./Footer')));

function Analysis() {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [date, setDate] = useState('');
  const location = useLocation();

  const {data} = useStickySWR(
    `${DATA_API_ROOT}/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: API_REFRESH_INTERVAL,
    }
  );

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement);
  const {width} = useWindowSize();

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
            
              <div className='home-left'>
                  <DWChart title="hospitalization-total" src="https://datawrapper.dwcdn.net/1s4oD/5/" />
              </div>

              <div className='home-right'>
                  <DWChart title="hospitalization-total" src="https://datawrapper.dwcdn.net/h4L6F/5/" />
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
