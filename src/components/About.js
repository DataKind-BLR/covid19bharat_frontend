import Footer from './Footer';

import {API_DOMAIN} from '../constants';
import {fetcher} from '../utils/commonFunctions';

import {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import useSWR from 'swr';

function About() {
  const {data} = useSWR(`${API_DOMAIN}/website_data.json`, fetcher, {
    suspense: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - covid19bharat.org</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        <div className="about-title">
          <h1>Who are we?</h1>
          <h2 className="about-body">
            covid19bharat.org is run by dedicated and generous volunteers,
            coordinated and led by{' '}
            <a
              href="https://coda.io/@dkblr/datakind-bengaluru"
              rel="noreferrer"
              target="_blank"
            >
              DataKind Bengaluru
            </a>
            with additional support from{' '}
            <a href="https://devdatalab.org" rel="noreferrer" target="_blank">
              Development Data Lab
            </a>
            .
            <div className="sponsor-img-wrap">
              <a
                href="https://coda.io/@dkblr/datakind-bengaluru"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="sponsor-img"
                  src="https://codaio.imgix.net/docs/7FQximSMmu/blobs/bl-Wdxzm6NehM/dc6add7276ba0e36161f3df882e5c0c6cefb75f6f03b438963477840ac709db71d97fb6f4a382c60587d4d44530888a1e37ca8dd0b1a4d2fe2e5e58a8d8692e8d156036c93bb90cfc11be6d894cd24f92ef2ba41bbbad5c1c535a75e79616d24d506f204?auto=format%2Ccompress&fit=max&w=1080&dpr=2"
                ></img>
              </a>
              <a
                href="https://www.devdatalab.org"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="sponsor-img"
                  src="https://shrug-assets-ddl.s3.amazonaws.com/static/main/assets/img/ddl_logo.png"
                ></img>
              </a>
            </div>
          </h2>
          <h2>
            The motivation for this project is the amazing{' '}
            <a
              href="https://www.covid19india.org"
              rel="noreferrer"
              target="_blank"
            >
              covid19india.org
            </a>
            , a volunteer-run effort that compiled essential COVID data from the
            early days of the pandemic up until October, 2021. Their herculean
            efforts made an enormous difference, and are the foundation for this
            site.
          </h2>
        </div>

        <div className="about-title">
          <h1>FAQ</h1>
          {data.faq.map((faq, index) => {
            return (
              <div
                key={index}
                className="faq fadeInUp"
                style={{animationDelay: `${0.5 + index * 0.1}s`}}
              >
                <h2 className="question">{faq.question.trim()}</h2>
                <h2
                  className="answer"
                  dangerouslySetInnerHTML={{__html: faq.answer.trim()}}
                ></h2>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
